import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
    BookOpen,
    GraduationCap,
    CheckCircle2,
    ChevronRight,
    ChevronDown,
    ChevronUp,

    Lightbulb,
    Clock,
    Target,
    Lock,
    Crown,
    Sparkles
} from 'lucide-react';
import type { Module, Lesson } from './data/learningData';
import { learningModules } from './data/learningData';
import { getGlossaryTermsForLanguage } from './data/locales/glossary';
import type { GlossaryTermEntry } from './data/locales/glossary';
import { useGameStore } from '../../store/gameStore';

// Function to automatically highlight glossary terms in text
const autoHighlightTerms = (text: string, glossaryTerms: GlossaryTermEntry[]): string => {
    if (!text || !glossaryTerms || glossaryTerms.length === 0) return text;

    const sortedTerms = [...glossaryTerms].sort((a, b) => b.term.length - a.term.length);

    let result = text;
    const alreadyLinked = new Set<string>();

    for (const termObj of sortedTerms) {
        const term = termObj.term;
        const termId = termObj.id;

        if (alreadyLinked.has(term.toLowerCase())) continue;

        const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(
            `(?<!\\[)(?<!\\[[^\\]]*?)(?<![\\p{L}\\p{N}])(${escapedTerm})(?![\\p{L}\\p{N}])(?!\\]\\()(?![^\\[]*\\]\\()`,
            'giu'
        );

        let replaced = false;
        result = result.replace(regex, (match) => {
            if (replaced) return match;
            replaced = true;
            alreadyLinked.add(term.toLowerCase());
            return `[${match}](/glossary#${termId})`;
        });
    }

    return result;
};

// Check if a lesson is available (unlocked)
const isLessonAvailable = (moduleIndex: number, lessonIndex: number, isPremium: boolean): boolean => {
    // First 3 modules, first 3 lessons are always free
    if (moduleIndex < 3 && lessonIndex < 3) {
        return true;
    }
    // Everything else requires premium
    return isPremium;
};

const Learning: React.FC = () => {
    const { t, i18n } = useTranslation();
    const {
        isPremium,
        unlockPremium,
        completedLessons,
        markLessonComplete: storeMarkLessonComplete,
        userLevel,
        experience,
        getLevelProgress
    } = useGameStore();

    const glossaryTerms = useMemo(() => {
        return getGlossaryTermsForLanguage(i18n.language);
    }, [i18n.language]);

    const [selectedModule, setSelectedModule] = useState<Module | null>(null);
    const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
    const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set());
    const [showLevelUp, setShowLevelUp] = useState(false);

    // Convert array to Set for quick lookups
    const completedLessonsSet = useMemo(() => new Set(completedLessons), [completedLessons]);

    // Scroll to top when navigating between views
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [selectedModule, selectedLesson]);

    // Handle hardware back button for proper navigation within Learning component
    useEffect(() => {
        const handlePopState = () => {
            if (selectedLesson) {
                // If viewing a lesson, go back to module's lessons list
                setSelectedLesson(null);
                window.history.pushState({ learning: 'module' }, '');
            } else if (selectedModule) {
                // If viewing a module's lessons, go back to modules list
                setSelectedModule(null);
                window.history.pushState({ learning: 'modules' }, '');
            }
            // If on modules list, let browser handle navigation normally
        };

        // Push initial state when entering a sub-view
        if (selectedLesson) {
            window.history.pushState({ learning: 'lesson' }, '');
        } else if (selectedModule) {
            window.history.pushState({ learning: 'module' }, '');
        }

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [selectedModule, selectedLesson]);

    const handleMarkLessonComplete = (lessonId: string, xpReward: number = 100) => {
        const leveledUp = storeMarkLessonComplete(lessonId, xpReward);
        if (leveledUp) {
            setShowLevelUp(true);
            setTimeout(() => setShowLevelUp(false), 3000);
        }
    };

    const getModuleProgress = (module: Module) => {
        const completed = module.lessons.filter(l => completedLessonsSet.has(l.id)).length;
        return (completed / module.lessons.length) * 100;
    };

    const getDifficultyColor = (level: string) => {
        switch (level) {
            case 'Beginner': return 'text-green-400';
            case 'Intermediate': return 'text-yellow-400';
            case 'Advanced': return 'text-red-400';
            default: return 'text-blue-400';
        }
    };

    const getDifficultyBg = (level: string) => {
        switch (level) {
            case 'Beginner': return 'bg-green-500/20';
            case 'Intermediate': return 'bg-yellow-500/20';
            case 'Advanced': return 'bg-red-500/20';
            default: return 'bg-blue-500/20';
        }
    };

    const toggleModuleExpand = (moduleId: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setExpandedModules(prev => {
            const newSet = new Set(prev);
            if (newSet.has(moduleId)) {
                newSet.delete(moduleId);
            } else {
                newSet.add(moduleId);
            }
            return newSet;
        });
    };

    const handleLessonClick = (lesson: Lesson, moduleIndex: number, lessonIndex: number) => {
        if (isLessonAvailable(moduleIndex, lessonIndex, isPremium)) {
            setSelectedLesson(lesson);
        }
    };

    const goToNextLesson = () => {
        if (!selectedModule || !selectedLesson) return;

        const currentModuleIndex = learningModules.findIndex(m => m.id === selectedModule.id);
        const currentLessonIndex = selectedModule.lessons.findIndex(l => l.id === selectedLesson.id);

        if (currentModuleIndex === -1 || currentLessonIndex === -1) return;

        // Try next lesson in current module
        if (currentLessonIndex < selectedModule.lessons.length - 1) {
            const nextLessonIndex = currentLessonIndex + 1;
            if (isLessonAvailable(currentModuleIndex, nextLessonIndex, isPremium)) {
                setSelectedLesson(selectedModule.lessons[nextLessonIndex]);
            } else {
                unlockPremium();
            }
        }
        // Try next module
        else if (currentModuleIndex < learningModules.length - 1) {
            const nextModuleIndex = currentModuleIndex + 1;
            const nextModule = learningModules[nextModuleIndex];
            if (nextModule.lessons.length > 0) {
                if (isLessonAvailable(nextModuleIndex, 0, isPremium)) {
                    setSelectedModule(nextModule);
                    setSelectedLesson(nextModule.lessons[0]);
                } else {
                    unlockPremium();
                }
            }
        }
    };

    const hasNextLesson = () => {
        if (!selectedModule || !selectedLesson) return false;
        const currentModuleIndex = learningModules.findIndex(m => m.id === selectedModule.id);
        const currentLessonIndex = selectedModule.lessons.findIndex(l => l.id === selectedLesson.id);

        if (currentLessonIndex < selectedModule.lessons.length - 1) return true;
        if (currentModuleIndex < learningModules.length - 1) return true;
        return false;
    };



    // Count available lessons
    const availableLessonsCount = learningModules.reduce((acc, module, moduleIndex) => {
        return acc + module.lessons.filter((_, lessonIndex) => isLessonAvailable(moduleIndex, lessonIndex, isPremium)).length;
    }, 0);
    // Use availableLessonsCount to suppress warning - could be used for premium upsell messaging
    void availableLessonsCount;


    return (
        <div className="min-h-screen pb-20" style={{ background: 'var(--bg-primary)' }}>
            <AnimatePresence mode="wait">
                {!selectedModule ? (
                    // Modules Grid View
                    <motion.div
                        key="modules"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-4 space-y-6"
                    >
                        {/* Header */}
                        <div className="text-center space-y-2 pt-4">
                            <div className="flex items-center justify-center gap-3">
                                <GraduationCap className="w-10 h-10 text-purple-400" />
                                <h1 className="text-3xl font-black" style={{ color: 'var(--text-primary)' }}>
                                    {t('learning_academy')}
                                </h1>
                            </div>
                            <p className="text-sm opacity-70" style={{ color: 'var(--text-primary)' }}>
                                {t('learning_academy_desc')}
                            </p>
                        </div>

                        {/* Premium Unlock Offer */}
                        {!isPremium && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="relative overflow-hidden rounded-xl p-3 shadow-lg"
                            >
                                {/* Gold Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500" />
                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-50" />

                                <div className="relative flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-2 flex-1 min-w-0">
                                        <div className="p-1.5 bg-black/10 rounded-lg backdrop-blur-sm flex-shrink-0">
                                            <Crown size={18} className="text-black/80 fill-black/20" />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="font-bold text-sm text-black/80 leading-tight">
                                                {t('unlock_all_lessons', 'Unlock All Lessons')}
                                            </h3>
                                            <p className="text-[10px] font-medium text-black/60 leading-tight truncate">
                                                {t('no_ads', 'No Ads')} • 135+ {t('lessons', 'Lessons')} • {t('unlock_skills', 'All Skills')}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={unlockPremium}
                                        className="bg-black text-white px-3 py-2 rounded-lg font-bold text-xs shadow-xl active:scale-95 transition-transform flex-shrink-0"
                                    >
                                        $4.99
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* Level Card */}
                        <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/10 rounded-2xl p-4 border border-indigo-500/30">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                                        <span className="text-xl font-black text-white">{userLevel}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-indigo-300">{t('level', 'Level')} {userLevel}</h3>
                                        <p className="text-xs text-indigo-400/70">{experience} XP</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    {userLevel < 20 ? (
                                        <>
                                            <div className="text-sm font-bold text-purple-300">
                                                {getLevelProgress().nextLevelXP - experience} XP
                                            </div>
                                            <div className="text-xs text-purple-400/70">{t('to_next_level', 'to next level')}</div>
                                        </>
                                    ) : (
                                        <div className="text-sm font-bold text-yellow-400">MAX LEVEL</div>
                                    )}
                                </div>
                            </div>
                            <div className="w-full bg-black/30 rounded-full h-2.5 overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${getLevelProgress().progress}%` }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                />
                            </div>
                            <div className="flex justify-between text-[10px] mt-1 text-indigo-400/50 font-medium">
                                <span>{t('level', 'LVL')} {userLevel}</span>
                                <span>{userLevel < 20 ? `${t('level', 'LVL')} ${userLevel + 1}` : 'MAX'}</span>
                            </div>
                        </div>

                        {/* Level Up Notification */}
                        <AnimatePresence>
                            {showLevelUp && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                    className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-2xl shadow-2xl shadow-purple-500/50 flex items-center gap-3"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                                        <span className="text-2xl font-black">{userLevel}</span>
                                    </div>
                                    <div>
                                        <div className="text-lg font-black">{t('level_up', 'LEVEL UP!')}</div>
                                        <div className="text-sm opacity-80">{t('reached_level', 'Reached Level')} {userLevel}</div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Learning Modules */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                                <BookOpen className="w-5 h-5" />
                                {t('learning_modules')}
                            </h2>

                            {learningModules.map((module, moduleIndex) => {
                                const progress = getModuleProgress(module);
                                const isCompleted = progress === 100;
                                const Icon = module.icon;
                                const isExpanded = expandedModules.has(module.id);
                                const previewLessons = module.lessons.slice(0, 3);
                                const hasMoreLessons = module.lessons.length > 3;

                                return (
                                    <motion.div
                                        key={module.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: moduleIndex * 0.1 }}
                                        className="rounded-2xl border overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
                                    >
                                        {/* Module Header - Clickable */}
                                        <div
                                            onClick={() => setSelectedModule(module)}
                                            className="p-0 cursor-pointer hover:opacity-90 transition-opacity"
                                        >
                                            {/* Module Image */}
                                            <div className="h-32 w-full relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                                <img
                                                    src={module.image}
                                                    alt={t(`${module.id}.title`, module.title)}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute bottom-3 left-4 z-20 flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 backdrop-blur-sm flex items-center justify-center border border-purple-500/30">
                                                        <Icon className="w-5 h-5 text-purple-300" />
                                                    </div>
                                                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-sm border border-white/10 ${getDifficultyColor(module.level)}`}>
                                                        {module.level}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="p-5 pt-3">
                                                <div className="flex items-start justify-between gap-2 mb-2">
                                                    <h3 className="font-bold text-lg leading-tight" style={{ color: 'var(--text-primary)' }}>
                                                        {t(`${module.id}.title`, module.title)}
                                                    </h3>
                                                    {isCompleted && (
                                                        <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                                                    )}
                                                </div>

                                                <p className="text-sm opacity-70 mb-4 line-clamp-2" style={{ color: 'var(--text-primary)' }}>
                                                    {t(`${module.id}.description`, module.description)}
                                                </p>

                                                <div className="flex items-center justify-between text-xs">
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex items-center gap-1 opacity-70" style={{ color: 'var(--text-primary)' }}>
                                                            <BookOpen className="w-3.5 h-3.5" />
                                                            {module.lessons.length} {t('lessons')}
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-2">
                                                        <span className="opacity-70" style={{ color: 'var(--text-primary)' }}>
                                                            {Math.round(progress)}%
                                                        </span>
                                                        <div className="w-16 bg-black/30 rounded-full h-1.5 overflow-hidden">
                                                            <motion.div
                                                                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                                                                initial={{ width: 0 }}
                                                                animate={{ width: `${progress}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Lesson Preview Section */}
                                        <div className="border-t px-5 py-3 space-y-2" style={{ borderColor: 'var(--card-border)' }}>
                                            {/* First 3 lessons always shown */}
                                            {previewLessons.map((lesson, lessonIndex) => {
                                                const isAccessible = isLessonAvailable(moduleIndex, lessonIndex, isPremium);
                                                const lessonCompleted = completedLessonsSet.has(lesson.id);

                                                return (
                                                    <div
                                                        key={lesson.id}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            if (isAccessible) {
                                                                setSelectedModule(module);
                                                                setSelectedLesson(lesson);
                                                            }
                                                        }}
                                                        className={`flex items-center gap-3 p-2 rounded-xl transition-all ${isAccessible
                                                            ? 'cursor-pointer hover:bg-white/5'
                                                            : 'opacity-50 cursor-not-allowed'
                                                            }`}
                                                    >
                                                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold ${lessonCompleted
                                                            ? 'bg-green-500/20 border-green-500/50 text-green-400'
                                                            : isAccessible
                                                                ? 'bg-purple-500/20 border-purple-500/30 text-purple-400'
                                                                : 'bg-gray-400/20 border-gray-400/30 text-gray-400'
                                                            } border`}>
                                                            {lessonCompleted ? (
                                                                <CheckCircle2 className="w-4 h-4" />
                                                            ) : !isAccessible ? (
                                                                <Lock className="w-3.5 h-3.5" />
                                                            ) : (
                                                                lessonIndex + 1
                                                            )}
                                                        </div>
                                                        <span className="text-sm font-medium flex-1 truncate" style={{ color: 'var(--text-primary)' }}>
                                                            {t(`${lesson.id}.title`, lesson.title)}
                                                        </span>
                                                        {isAccessible && (
                                                            <ChevronRight className="w-4 h-4 opacity-50" style={{ color: 'var(--text-primary)' }} />
                                                        )}
                                                    </div>
                                                );
                                            })}

                                            {/* Expanded lessons */}
                                            <AnimatePresence>
                                                {isExpanded && hasMoreLessons && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="space-y-2 overflow-hidden"
                                                    >
                                                        {module.lessons.slice(3).map((lesson, idx) => {
                                                            const lessonIndex = idx + 3;
                                                            const isAccessible = isLessonAvailable(moduleIndex, lessonIndex, isPremium);
                                                            const lessonCompleted = completedLessonsSet.has(lesson.id);

                                                            return (
                                                                <div
                                                                    key={lesson.id}
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        if (isAccessible) {
                                                                            setSelectedModule(module);
                                                                            setSelectedLesson(lesson);
                                                                        }
                                                                    }}
                                                                    className={`flex items-center gap-3 p-2 rounded-xl transition-all ${isAccessible
                                                                        ? 'cursor-pointer hover:bg-white/5'
                                                                        : 'opacity-50 cursor-not-allowed'
                                                                        }`}
                                                                >
                                                                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold ${lessonCompleted
                                                                        ? 'bg-green-500/20 border-green-500/50 text-green-400'
                                                                        : isAccessible
                                                                            ? 'bg-purple-500/20 border-purple-500/30 text-purple-400'
                                                                            : 'bg-gray-400/20 border-gray-400/30 text-gray-400'
                                                                        } border`}>
                                                                        {lessonCompleted ? (
                                                                            <CheckCircle2 className="w-4 h-4" />
                                                                        ) : !isAccessible ? (
                                                                            <Lock className="w-3.5 h-3.5" />
                                                                        ) : (
                                                                            lessonIndex + 1
                                                                        )}
                                                                    </div>
                                                                    <span className="text-sm font-medium flex-1 truncate" style={{ color: 'var(--text-primary)' }}>
                                                                        {t(`${lesson.id}.title`, lesson.title)}
                                                                    </span>
                                                                    {!isAccessible && (
                                                                        <span className="text-[9px] font-bold text-amber-400 uppercase px-1.5 py-0.5 bg-amber-400/10 rounded-full border border-amber-400/30">
                                                                            PRO
                                                                        </span>
                                                                    )}
                                                                    {isAccessible && (
                                                                        <ChevronRight className="w-4 h-4 opacity-50" style={{ color: 'var(--text-primary)' }} />
                                                                    )}
                                                                </div>
                                                            );
                                                        })}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* Expand/Collapse Button */}
                                            {hasMoreLessons && (
                                                <button
                                                    onClick={(e) => toggleModuleExpand(module.id, e)}
                                                    className="w-full flex items-center justify-center gap-2 py-2 text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors"
                                                >
                                                    {isExpanded ? (
                                                        <>
                                                            <ChevronUp className="w-4 h-4" />
                                                            {t('show_less', 'Show Less')}
                                                        </>
                                                    ) : (
                                                        <>
                                                            <ChevronDown className="w-4 h-4" />
                                                            {t('view_all_lessons', 'View All')} ({module.lessons.length - 3} {t('more', 'more')})
                                                        </>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Tips Section */}
                        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-5 border border-blue-500/30">
                            <div className="flex items-start gap-3">
                                <Lightbulb className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                                        {t('learning_tips')}
                                    </h3>
                                    <ul className="space-y-2 text-sm opacity-80" style={{ color: 'var(--text-primary)' }}>
                                        <li>• {t('learning_tip_1')}</li>
                                        <li>• {t('learning_tip_2')}</li>
                                        <li>• {t('learning_tip_3')}</li>
                                        <li>• {t('learning_tip_4')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : !selectedLesson ? (
                    // Lessons List View
                    <motion.div
                        key="lessons"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="p-4 space-y-4"
                    >
                        {/* Back Button */}
                        <button
                            onClick={() => setSelectedModule(null)}
                            className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            <ChevronRight className="w-4 h-4 rotate-180" />
                            {t('back_to_modules')}
                        </button>

                        {/* Module Header */}
                        <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-0 border border-purple-500/30 overflow-hidden relative">
                            <div className="absolute inset-0">
                                <img src={selectedModule.image} alt="" className="w-full h-full object-cover opacity-20" />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                            </div>

                            <div className="relative p-6 flex items-start gap-4">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center border border-purple-500/40 backdrop-blur-sm">
                                    {React.createElement(selectedModule.icon, { className: "w-8 h-8 text-purple-300" })}
                                </div>
                                <div className="flex-1">
                                    <h1 className="text-2xl font-black mb-2 leading-tight" style={{ color: 'var(--text-primary)' }}>
                                        {t(`${selectedModule.id}.title`, selectedModule.title)}
                                    </h1>
                                    <p className="text-sm opacity-70 mb-3" style={{ color: 'var(--text-primary)' }}>
                                        {t(`${selectedModule.id}.description`, selectedModule.description)}
                                    </p>
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyBg(selectedModule.level)} ${getDifficultyColor(selectedModule.level)}`}>
                                            {selectedModule.level.toUpperCase()}
                                        </div>
                                        <div className="flex items-center gap-1 text-xs opacity-70" style={{ color: 'var(--text-primary)' }}>
                                            <BookOpen className="w-4 h-4" />
                                            {selectedModule.lessons.length} {t('lessons')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Premium Upsell for Lessons (if not premium) */}
                        {!isPremium && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="relative overflow-hidden rounded-xl p-4 shadow-lg"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-50" />

                                <div className="relative flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-black/10 rounded-xl backdrop-blur-sm">
                                            <Sparkles size={18} className="text-black/80" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-black/80">{t('unlock_premium_lessons', 'Unlock Premium Lessons')}</h4>
                                            <p className="text-[10px] font-medium text-black/60">{t('skip_ads_learn', 'Skip 90+ ads • Learn everything')}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={unlockPremium}
                                        className="bg-black text-white px-3 py-1.5 rounded-lg font-bold text-xs shadow-xl active:scale-95 transition-transform"
                                    >
                                        $4.99
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* Lessons */}
                        <div className="space-y-3">
                            {selectedModule.lessons.map((lesson, index) => {
                                const currentModuleIndex = learningModules.findIndex(m => m.id === selectedModule.id);
                                const isCompleted = completedLessonsSet.has(lesson.id);
                                const isAccessible = isLessonAvailable(currentModuleIndex, index, isPremium);

                                return (
                                    <motion.div
                                        key={lesson.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => handleLessonClick(lesson, currentModuleIndex, index)}
                                        className={`rounded-xl p-4 border transition-all duration-300 ${isAccessible
                                            ? 'cursor-pointer hover:border-purple-500/50'
                                            : 'opacity-60 cursor-not-allowed'
                                            }`}
                                        style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${isCompleted
                                                ? 'bg-green-500/20 border-green-500/50'
                                                : isAccessible
                                                    ? 'bg-purple-500/20 border-purple-500/30'
                                                    : 'bg-gray-400/20 border-gray-400/30'
                                                } border`}>
                                                {isCompleted ? (
                                                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                                                ) : !isAccessible ? (
                                                    <Lock className="w-5 h-5 text-gray-400" />
                                                ) : (
                                                    <span className="font-bold text-purple-400">{index + 1}</span>
                                                )}
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>
                                                        {t(`${lesson.id}.title`, lesson.title)}
                                                    </h3>
                                                    {!isAccessible && (
                                                        <span className="text-[9px] font-bold text-amber-400 uppercase px-1.5 py-0.5 bg-amber-400/10 rounded-full border border-amber-400/30">
                                                            PRO
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-3 mt-1">
                                                    <span className="text-xs opacity-70 flex items-center gap-1" style={{ color: 'var(--text-primary)' }}>
                                                        <Clock className="w-3 h-3" />
                                                        {lesson.duration}
                                                    </span>
                                                    <span className="text-xs font-bold text-yellow-400">
                                                        +{lesson.xp} XP
                                                    </span>
                                                </div>
                                            </div>

                                            {isAccessible ? (
                                                <ChevronRight className="w-5 h-5 opacity-50 flex-shrink-0" style={{ color: 'var(--text-primary)' }} />
                                            ) : (
                                                <Lock className="w-5 h-5 opacity-30 flex-shrink-0" style={{ color: 'var(--text-primary)' }} />
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                ) : (
                    // Lesson Content View
                    <motion.div
                        key="lesson"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="p-4 space-y-4 pb-24"
                    >
                        {/* Back Button */}
                        <button
                            onClick={() => setSelectedLesson(null)}
                            className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            <ChevronRight className="w-4 h-4 rotate-180" />
                            {t('back_to_lessons')}
                        </button>

                        {/* Lesson Header */}
                        <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-6 border border-purple-500/30">
                            <h1 className="text-2xl font-black mb-2" style={{ color: 'var(--text-primary)' }}>
                                {t(`${selectedLesson.id}.title`, selectedLesson.title)}
                            </h1>
                            <p className="text-sm opacity-70" style={{ color: 'var(--text-primary)' }}>
                                {t(`${selectedModule?.id}.title`, selectedModule?.title)}
                            </p>
                        </div>

                        {/* Premium Upsell Banner (in lesson view) */}
                        {!isPremium && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative overflow-hidden rounded-xl p-3 shadow-lg"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-50" />

                                <div className="relative flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-2 flex-1 min-w-0">
                                        <div className="p-1.5 bg-black/10 rounded-lg backdrop-blur-sm flex-shrink-0">
                                            <Crown size={18} className="text-black/80 fill-black/20" />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="font-bold text-sm text-black/80 leading-tight">
                                                {t('go_pro', 'Go Pro')}
                                            </h3>
                                            <p className="text-[10px] font-medium text-black/60 leading-tight truncate">
                                                {t('unlock_everything', 'Unlock Everything')}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={unlockPremium}
                                        className="bg-black text-white px-3 py-2 rounded-lg font-bold text-xs shadow-xl active:scale-95 transition-transform flex-shrink-0"
                                    >
                                        $4.99
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* Lesson Content */}
                        <div className="rounded-2xl p-6 border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                            <div className="prose prose-invert max-w-none">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    components={{
                                        h1: ({ ...props }) => <h1 className="text-2xl font-bold mb-4 text-purple-400" {...props} />,
                                        h2: ({ ...props }) => <h2 className="text-xl font-bold mt-6 mb-3 text-purple-300" {...props} />,
                                        h3: ({ ...props }) => <h3 className="text-lg font-bold mt-4 mb-2 text-blue-300" {...props} />,
                                        p: ({ ...props }) => <p className="mb-4 leading-relaxed opacity-90" style={{ color: 'var(--text-primary)' }} {...props} />,
                                        ul: ({ ...props }) => <ul className="list-disc list-inside mb-4 space-y-2 opacity-90" style={{ color: 'var(--text-primary)' }} {...props} />,
                                        ol: ({ ...props }) => <ol className="list-decimal list-inside mb-4 space-y-2 opacity-90" style={{ color: 'var(--text-primary)' }} {...props} />,
                                        li: ({ ...props }) => <li className="ml-4" {...props} />,
                                        strong: ({ ...props }) => <strong className="text-purple-400 font-semibold" {...props} />,
                                        blockquote: ({ ...props }) => <blockquote className="border-l-4 border-purple-500 pl-4 italic my-4 opacity-80" {...props} />,
                                        img: ({ ...props }) => <img className="rounded-xl my-4 w-full" {...props} />,
                                        a: ({ href, children, ...props }) => {
                                            if (href?.startsWith('/glossary')) {
                                                return (
                                                    <a
                                                        href={href}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            window.location.href = href;
                                                        }}
                                                        className="text-purple-400 underline decoration-dotted decoration-purple-400/60 underline-offset-2 hover:text-purple-300 cursor-pointer font-medium"
                                                        {...props}
                                                    >
                                                        {children}
                                                    </a>
                                                );
                                            }
                                            return <a href={href} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
                                        },
                                    }}
                                >
                                    {autoHighlightTerms(t(`${selectedLesson.id}.content`, 'Content not available'), glossaryTerms)}
                                </ReactMarkdown>
                            </div>
                        </div>

                        {/* Key Points */}
                        {t(`${selectedLesson.id}.keyTakeaways`, { returnObjects: true }) && Array.isArray(t(`${selectedLesson.id}.keyTakeaways`, { returnObjects: true })) && (
                            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/30">
                                <div className="flex items-center gap-2 mb-4">
                                    <Target className="w-5 h-5 text-blue-400" />
                                    <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>
                                        {t('key_takeaways')}
                                    </h3>
                                </div>
                                <ul className="space-y-3">
                                    {(t(`${selectedLesson.id}.keyTakeaways`, { returnObjects: true }) as string[]).map((point, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm opacity-90" style={{ color: 'var(--text-primary)' }}>
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="space-y-3 pt-4">
                            {/* Complete Button */}
                            {!completedLessonsSet.has(selectedLesson.id) && (
                                <button
                                    onClick={() => handleMarkLessonComplete(selectedLesson.id, selectedLesson.xp || 100)}
                                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-4 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
                                >
                                    <CheckCircle2 className="w-5 h-5" />
                                    {t('mark_as_complete')}
                                </button>
                            )}

                            {/* Next Lesson Button */}
                            {completedLessonsSet.has(selectedLesson.id) && hasNextLesson() && (
                                <button
                                    onClick={goToNextLesson}
                                    className="w-full bg-white/10 text-white font-bold py-4 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
                                >
                                    {t('next_lesson', 'Next Lesson')}
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence >
        </div >
    );
};

export default Learning;
