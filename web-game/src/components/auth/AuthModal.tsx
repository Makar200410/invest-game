import React, { useState } from 'react';
import { loginUser, registerUser, recoverPassword } from '../../services/api';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLogin: (user: { id: string; username: string; portfolioValue: number; gameState?: any }) => void;
}

type AuthMode = 'login' | 'register' | 'recover';

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
    const { t } = useTranslation();
    const [mode, setMode] = useState<AuthMode>('login');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState(''); // New email field
    const [newPassword, setNewPassword] = useState(''); // For recovery
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccessMsg('');
        setLoading(true);

        try {
            let result;
            if (mode === 'login') {
                result = await loginUser(username, password);
            } else if (mode === 'register') {
                result = await registerUser(username, password, email);
            } else if (mode === 'recover') {
                result = await recoverPassword(username, email, newPassword);
                if (result.success) {
                    setSuccessMsg(t('password_reset_success'));
                    setMode('login');
                    setLoading(false);
                    return;
                }
            }

            if (result && result.success) {
                if (mode === 'register' || mode === 'login') {
                    // Enforce Dark Theme on new login/register if not set
                    if (!localStorage.getItem('theme')) {
                        localStorage.setItem('theme', 'dark');
                        document.documentElement.classList.add('dark');
                        document.documentElement.classList.remove('swiss');
                    }
                    onLogin(result.user);
                    onClose();
                }
            } else {
                setError(result?.error || t('error_occurred'));
            }
        } catch (err: any) {
            setError(err.response?.data?.error || t('connection_error'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-slate-900 border border-slate-700 p-6 rounded-xl w-full max-w-xs shadow-2xl relative"
                    >
                        <h2 className="text-xl font-bold text-white mb-4 text-center">
                            {mode === 'login' && t('welcome_back')}
                            {mode === 'register' && t('create_account')}
                            {mode === 'recover' && t('recover_account')}
                        </h2>

                        {error && (
                            <div className="bg-red-500/20 border border-red-500/50 text-red-200 p-2 rounded-lg mb-3 text-xs">
                                {error}
                            </div>
                        )}

                        {successMsg && (
                            <div className="bg-green-500/20 border border-green-500/50 text-green-200 p-2 rounded-lg mb-3 text-xs">
                                {successMsg}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div>
                                <label className="block text-slate-400 text-xs mb-1">{t('username')}</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder={t('enter_username')}
                                    required
                                />
                            </div>

                            {(mode === 'register' || mode === 'recover') && (
                                <div>
                                    <label className="block text-slate-400 text-xs mb-1">{t('email_optional')}</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder={t('enter_email')}
                                        required={mode === 'recover'}
                                    />
                                </div>
                            )}

                            {mode !== 'recover' && (
                                <div>
                                    <label className="block text-slate-400 text-xs mb-1">{t('password')}</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder={t('enter_password')}
                                        required
                                    />
                                </div>
                            )}

                            {mode === 'recover' && (
                                <div>
                                    <label className="block text-slate-400 text-xs mb-1">{t('new_password')}</label>
                                    <input
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder={t('enter_new_password')}
                                        required
                                    />
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-1 text-sm"
                            >
                                {loading ? t('processing') : (
                                    mode === 'login' ? t('login') :
                                        mode === 'register' ? t('register') : t('reset_password')
                                )}
                            </button>
                        </form>

                        <div className="mt-6 text-center space-y-2">
                            {mode === 'login' && (
                                <>
                                    <button onClick={() => setMode('register')} className="block w-full text-slate-400 hover:text-white text-sm transition-colors">
                                        {t('no_account')}
                                    </button>
                                    <button onClick={() => setMode('recover')} className="block w-full text-slate-500 hover:text-slate-300 text-xs transition-colors">
                                        {t('forgot_password')}
                                    </button>
                                </>
                            )}
                            {mode === 'register' && (
                                <button onClick={() => setMode('login')} className="text-slate-400 hover:text-white text-sm transition-colors">
                                    {t('have_account')}
                                </button>
                            )}
                            {mode === 'recover' && (
                                <button onClick={() => setMode('login')} className="text-slate-400 hover:text-white text-sm transition-colors">
                                    {t('back_to_login')}
                                </button>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
