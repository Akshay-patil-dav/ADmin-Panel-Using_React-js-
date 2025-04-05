import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export const Login = ({ onSwitchToRegister }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login form submitted:', formData);
    };

    return (
        <div>
            <div className="form-header">
                <h1>Sign In to your Account</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <div className="input-wrapper">
                        <Mail className="input-icon" size={20} />
                        <input
                            id="email"
                            type="email"
                            className="input-field"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <div className="header-group">
                        <label htmlFor="password">Password</label>
                        <button type="button" className="forgot-password">
                            Forgot password?
                        </button>
                    </div>
                    <div className="input-wrapper">
                        <Lock className="input-icon" size={20} />
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            className="input-field"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="password-toggle"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>

                <div className="checkbox-wrapper">
                    <input
                        id="remember-me"
                        type="checkbox"
                        checked={formData.rememberMe}
                        onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                    />
                    <label htmlFor="remember-me">
                        Remember me
                    </label>
                </div>

                <button type="submit" className="submit-button">
                    Sign In
                </button>
            </form>

            <div className="form-footer">
                Not registered yet?{' '}
                <button onClick={onSwitchToRegister}>
                    Create an account
                </button>
            </div>
        </div>
    );
};
