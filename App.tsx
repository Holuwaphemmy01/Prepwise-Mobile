import { useState } from 'react';
import { LoginScreen } from './src/screens/LoginScreen';
import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { ForgotPasswordScreen } from './src/screens/ForgotPasswordScreen';

type Screen = 'welcome' | 'login' | 'forgot';

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome');

  if (screen === 'forgot') {
    return <ForgotPasswordScreen onBack={() => setScreen('login')} />;
  }

  if (screen === 'login') {
    return <LoginScreen onForgotPress={() => setScreen('forgot')} />;
  }

  return (
    <WelcomeScreen
      onGetStarted={() => setScreen('login')}
      onLoginPress={() => setScreen('login')}
    />
  );
}
