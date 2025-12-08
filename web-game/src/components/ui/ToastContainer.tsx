import { useEffect } from 'react';
import { useGameStore } from '../../store/gameStore';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertTriangle, Info, AlertCircle } from 'lucide-react';

export const ToastContainer = () => {
    const notifications = useGameStore(state => state.notifications);
    const markAsRead = useGameStore(state => state.markNotificationAsRead);

    // Filter only unread notifications to show as toasts
    const activeNotifications = notifications.filter(n => !n.read);

    return (
        <div className="fixed top-4 left-0 right-0 z-[100] flex flex-col items-center gap-2 pointer-events-none px-4">
            <AnimatePresence>
                {activeNotifications.map(notification => (
                    <ToastItem key={notification.id} notification={notification} onDismiss={() => markAsRead(notification.id)} />
                ))}
            </AnimatePresence>
        </div>
    );
};

const ToastItem = ({ notification, onDismiss }: { notification: any, onDismiss: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(onDismiss, 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            layout
            className={`pointer-events-auto min-w-[300px] max-w-sm w-full shadow-2xl rounded-xl overflow-hidden border backdrop-blur-md flex items-start p-3 gap-3`}
            style={{
                background: notification.type === 'success' ? 'rgba(34, 197, 94, 0.95)' :
                    notification.type === 'error' ? 'rgba(239, 68, 68, 0.95)' :
                        notification.type === 'warning' ? 'rgba(249, 115, 22, 0.95)' :
                            'rgba(59, 130, 246, 0.95)',
                color: 'white',
                borderColor: 'rgba(255,255,255,0.1)'
            }}
        >
            <div className="shrink-0 mt-0.5">
                {notification.type === 'success' && <CheckCircle size={20} className="text-white" />}
                {notification.type === 'error' && <AlertCircle size={20} className="text-white" />}
                {notification.type === 'warning' && <AlertTriangle size={20} className="text-white" />}
                {notification.type === 'info' && <Info size={20} className="text-white" />}
            </div>
            <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm leading-tight">{notification.title}</h4>
                <p className="text-xs opacity-90 leading-snug mt-0.5 break-words">
                    {notification.message}
                </p>
            </div>
            <button
                onClick={onDismiss}
                className="shrink-0 p-1 rounded-full hover:bg-white/20 transition-colors"
            >
                <X size={16} className="text-white" />
            </button>
        </motion.div>
    );
};
