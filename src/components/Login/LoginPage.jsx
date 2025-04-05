
import { useState } from 'react';
import { AuthLayout } from './Logincomponebts/AuthLayout';
import { Login } from './Logincomponebts/Login';
import { Register } from './Logincomponebts/Register';


export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);

    const illustration = "https://static.vecteezy.com/system/resources/previews/037/346/986/non_2x/ai-generated-the-astronaut-isgraphed-with-the-milky-way-in-the-background-free-photo.jpeg";
  
  return (
    <AuthLayout illustration={illustration}>
    <div className={`form-slider ${isLogin ? 'login' : 'register'}`}>
      <div className="form-page">
        <Login onSwitchToRegister={() => setIsLogin(false)} />
      </div>
      <div className="form-page">
        <Register onSwitchToLogin={() => setIsLogin(true)} />
      </div>
    </div>
  </AuthLayout>
  )
}
