import React, { useState } from 'react';
import { loginUser, registerUser, recoverPassword } from '../../services/api';
import { motion, AnimatePresence } from 'framer-motion';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLogin: (user: { id: string; username: string; portfolioValue: number; gameState?: any }) => void;
}

type AuthMode = 'login' | 'register' | 'recover';

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
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
                    setSuccessMsg('Password reset successfully. Please login.');
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
                setError(result?.error || 'An error occurred');
            }
        } catch (err: any) {
            setError(err.response?.data?.error || 'Connection error');
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
                            {mode === 'login' && 'Welcome Back'}
                            {mode === 'register' && 'Create Account'}
                            {mode === 'recover' && 'Recover Account'}
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
                                <label className="block text-slate-400 text-xs mb-1">Username</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Enter username"
                                    required
                                />
                            </div>

                            {(mode === 'register' || mode === 'recover') && (
                                <div>
                                    <label className="block text-slate-400 text-xs mb-1">Email {mode === 'register' && '(Optional)'}</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="Enter email"
                                        required={mode === 'recover'}
                                    />
                                </div>
                            )}

                            {mode !== 'recover' && (
                                <div>
                                    <label className="block text-slate-400 text-xs mb-1">Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="Enter password"
                                        required
                                    />
                                </div>
                            )}

                            {mode === 'recover' && (
                                <div>
                                    <label className="block text-slate-400 text-xs mb-1">New Password</label>
                                    <input
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="Enter new password"
                                        required
                                    />
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-1 text-sm"
                            >
                                {loading ? 'Processing...' : (
                                    mode === 'login' ? 'Login' :
                                        mode === 'register' ? 'Register' : 'Reset Password'
                                )}
                            </button>
                        </form>

                        <div className="mt-6 text-center space-y-2">
                            {mode === 'login' && (
                                <>
                                    <button onClick={() => setMode('register')} className="block w-full text-slate-400 hover:text-white text-sm transition-colors">
                                        Don't have an account? Register
                                    </button>
                                    <button onClick={() => setMode('recover')} className="block w-full text-slate-500 hover:text-slate-300 text-xs transition-colors">
                                        Forgot Password?
                                    </button>
                                </>
                            )}
                            {mode === 'register' && (
                                <button onClick={() => setMode('login')} className="text-slate-400 hover:text-white text-sm transition-colors">
                                    Already have an account? Login
                                </button>
                            )}
                            {mode === 'recover' && (
                                <button onClick={() => setMode('login')} className="text-slate-400 hover:text-white text-sm transition-colors">
                                    Back to Login
                                </button>
                            )}
                        </div>

                        {/* Connection Issues Link */}
                        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 text-center space-y-2">
                            <button
                                onClick={() => {
                                    const url = prompt('Enter Server URL (e.g., https://...trycloudflare.com)', localStorage.getItem('custom_backend_url') || '');
                                    if (url !== null) {
                                        const cleanUrl = url.replace(/\/api\/?$/, '');
                                        if (cleanUrl) {
                                            localStorage.setItem('custom_backend_url', cleanUrl);
                                            window.location.reload();
                                        } else {
                                            localStorage.removeItem('custom_backend_url');
                                            window.location.reload();
                                        }
                                    }
                                }}
                                className="block w-full text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 underline"
                            >
                                Edit Server URL
                            </button>

                            <button
                                onClick={async () => {
                                    try {
                                        const baseUrl = localStorage.getItem('custom_backend_url') || 'https://invest-game-production.up.railway.app';
                                        alert(`Testing connection to: ${baseUrl}`);
                                        const start = Date.now();
                                        const res = await fetch(`${baseUrl}/api/health`, {
                                            headers: { 'Bypass-Tunnel-Reminder': 'true' }
                                        });
                                        const end = Date.now();
                                        const text = await res.text();
                                        alert(`Success! Status: ${res.status}\nTime: ${end - start}ms\nResponse: ${text}`);
                                    } catch (e: any) {
                                        alert(`Connection Failed!\nError: ${e.message}\nName: ${e.name}`);
                                    }
                                }}
                                className="block w-full text-xs text-blue-400 hover:text-blue-300 underline"
                            >
                                Test Connection (Diagnostics)
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
