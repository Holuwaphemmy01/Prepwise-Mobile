import { useState } from 'react';
import { LoginScreen } from './src/screens/LoginScreen';
import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { ForgotPasswordScreen } from './src/screens/ForgotPasswordScreen';
import { VerifyResetCodeScreen } from './src/screens/VerifyResetCodeScreen';

type Screen = 'welcome' | 'login' | 'forgot' | 'verify';

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome');

  if (screen === 'verify') {
    return <VerifyResetCodeScreen onBack={() => setScreen('forgot')} />;
  }

  if (screen === 'forgot') {
    return (
      <ForgotPasswordScreen
        onBack={() => setScreen('login')}
        onVerify={() => setScreen('verify')}
      />
    );
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
