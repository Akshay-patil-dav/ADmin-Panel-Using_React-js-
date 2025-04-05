import React from 'react';

export const AuthLayout = ({ children, illustration }) => {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-form-container">{children}</div>
                <div className="auth-illustration">
                    <img
                        src={illustration}
                        alt="Authentication illustration"
                    />
                </div>
            </div>
        </div>
    );
};
