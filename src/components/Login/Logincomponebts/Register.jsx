import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

export const Register = ({ onSwitchToLogin }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        acceptTerms: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Register form submitted:', formData);
    };

    return (
        <div>
            <div className="form-header">
                <h1>Create an Account</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <div className="input-wrapper">
                        <User className="input-icon" size={20} />
                        <input
                            id="name"
                            type="text"
                            className="input-field"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                </div>

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
                    <label htmlFor="password">Password</label>
                    <div className="input-wrapper">
                        <Lock className="input-icon" size={20} />
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            className="input-field"
                            placeholder="Create a password"
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
                        id="accept-terms"
                        type="checkbox"
                        checked={formData.acceptTerms}
                        onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                    />
                    <label htmlFor="accept-terms">
                        I accept the{' '}
                        <a href="#" className="forgot-password">
                            Terms and Conditions
                        </a>
                    </label>
                </div>

                <button type="submit" className="submit-button">
                    Create Account
                </button>
            </form>

            <div className="form-footer">
                Already have an account?{' '}
                <button onClick={onSwitchToLogin}>
                    Sign in
                </button>
            </div>
        </div>
    );
};
