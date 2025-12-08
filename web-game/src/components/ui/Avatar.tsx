import React from 'react';
import { useGameStore } from '../../store/gameStore';

interface AvatarProps {
    username: string;
    photo?: string | null;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    showBorder?: boolean;
}

/**
 * Avatar Component
 * Displays user profile photo or initials with gradient background
 * If no photo is provided, it checks if the username matches current user
 * and uses their profile photo if available.
 */
export const Avatar: React.FC<AvatarProps> = ({
    username,
    photo,
    size = 'md',
    className = '',
    showBorder = true
}) => {
    const { user, profilePhoto } = useGameStore();

    // Use provided photo, or current user's photo if viewing own profile
    const displayPhoto = photo ?? (user?.username === username ? profilePhoto : null);

    const sizeConfig = {
        xs: 'w-6 h-6 text-[8px]',
        sm: 'w-8 h-8 text-xs',
        md: 'w-10 h-10 text-sm',
        lg: 'w-16 h-16 text-xl',
        xl: 'w-24 h-24 text-3xl'
    };

    const initials = username ? username.substring(0, 2).toUpperCase() : '??';

    return (
        <div
            className={`
                ${sizeConfig[size]} 
                rounded-full 
                flex items-center justify-center 
                font-bold 
                overflow-hidden
                ${showBorder ? 'border-2 border-white/20 shadow-lg' : ''}
                ${!displayPhoto ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white' : ''}
                ${className}
            `}
        >
            {displayPhoto ? (
                <img
                    src={displayPhoto}
                    alt={username}
                    className="w-full h-full object-cover"
                />
            ) : (
                <span>{initials}</span>
            )}
        </div>
    );
};

export default Avatar;
