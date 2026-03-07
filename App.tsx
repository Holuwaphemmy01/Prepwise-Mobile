import { useState } from 'react';
import { LoginScreen } from './src/screens/LoginScreen';
import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { ForgotPasswordScreen } from './src/screens/auth/reset/ForgotPasswordScreen';
import { VerifyResetCodeScreen } from './src/screens/auth/reset/VerifyResetCodeScreen';
import { NewPasswordScreen } from './src/screens/auth/reset/NewPasswordScreen';
import { PasswordUpdatedScreen } from './src/screens/auth/reset/PasswordUpdatedScreen';
import { CreateAccountScreen } from './src/screens/auth/CreateAccountScreen';

type Screen = 'welcome' | 'login' | 'forgot' | 'verify' | 'newPassword' | 'passwordUpdated' | 'createAccount';

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome');

  if (screen === 'passwordUpdated') {
    return (
      <PasswordUpdatedScreen
        onLogin={() => setScreen('login')}
      />
    );
  }

  if (screen === 'createAccount') {
    return (
      <CreateAccountScreen
        onLogin={() => setScreen('login')}
      />
    );
  }

  if (screen === 'verify') {
    return (
      <VerifyResetCodeScreen
        onBack={() => setScreen('forgot')}
        onNext={() => setScreen('newPassword')}
      />
    );
  }

  if (screen === 'newPassword') {
    return (
      <NewPasswordScreen
        onBack={() => setScreen('verify')}
        onSuccess={() => setScreen('passwordUpdated')}
      />
    );
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
    return (
      <LoginScreen
        onForgotPress={() => setScreen('forgot')}
        onCreateAccount={() => setScreen('createAccount')}
      />
    );
  }

  return (
    <WelcomeScreen
      onGetStarted={() => setScreen('login')}
      onLoginPress={() => setScreen('login')}
    />
  );
}
