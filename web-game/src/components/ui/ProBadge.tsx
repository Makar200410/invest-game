import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

interface ProBadgeProps {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    showText?: boolean;
    className?: string;
}

/**
 * Premium ProBadge Component
 * A beautifully designed badge with rainbow gradient animation
 * to highlight PRO players across the application.
 */
export const ProBadge: React.FC<ProBadgeProps> = ({
    size = 'sm',
    showText = false,
    className = ''
}) => {
    const sizeConfig = {
        xs: { icon: 10, padding: 'p-0.5', text: 'text-[8px]', gap: 'gap-0.5' },
        sm: { icon: 12, padding: 'p-1', text: 'text-[9px]', gap: 'gap-1' },
        md: { icon: 16, padding: 'p-1.5', text: 'text-xs', gap: 'gap-1.5' },
        lg: { icon: 20, padding: 'p-2', text: 'text-sm', gap: 'gap-2' }
    };

    const config = sizeConfig[size];

    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`relative inline-flex items-center ${config.gap} ${config.padding} rounded-full overflow-hidden ${className}`}
            style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f857a6 50%, #ff5858 75%, #ffb347 100%)',
                backgroundSize: '300% 300%',
                animation: 'rainbowShift 3s ease infinite',
                boxShadow: '0 2px 10px rgba(139, 92, 246, 0.4), 0 0 20px rgba(248, 87, 166, 0.2)'
            }}
        >
            {/* Animated shine effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{
                    x: ['-100%', '200%']
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: 'easeInOut'
                }}
            />

            {/* Crown icon with glow */}
            <div className="relative z-10">
                <Crown
                    size={config.icon}
                    className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]"
                    style={{
                        fill: 'rgba(255, 255, 255, 0.3)',
                        filter: 'drop-shadow(0 0 2px rgba(255, 215, 0, 0.8))'
                    }}
                />
            </div>

            {/* Optional PRO text */}
            {showText && (
                <span className={`relative z-10 font-black ${config.text} text-white tracking-wider uppercase`}
                    style={{
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                    }}
                >
                    PRO
                </span>
            )}

            {/* Pulsing glow ring */}
            <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                    background: 'transparent',
                    boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)'
                }}
                animate={{
                    boxShadow: [
                        '0 0 0 2px rgba(255, 255, 255, 0.3)',
                        '0 0 0 4px rgba(255, 255, 255, 0.1)',
                        '0 0 0 2px rgba(255, 255, 255, 0.3)'
                    ]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            />
        </motion.div>
    );
};

// Add the rainbow animation to global CSS if not already present
// This should be added to index.css:
// @keyframes rainbowShift {
//     0% { background-position: 0% 50%; }
//     50% { background-position: 100% 50%; }
//     100% { background-position: 0% 50%; }
// }

export default ProBadge;
