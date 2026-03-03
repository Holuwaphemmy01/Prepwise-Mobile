import { useState } from 'react';
import { LoginScreen } from './src/screens/LoginScreen';
import { WelcomeScreen } from './src/screens/WelcomeScreen';

type Screen = 'welcome' | 'login';

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome');

  if (screen === 'login') {
    return <LoginScreen />;
  }

  return (
    <WelcomeScreen
      onGetStarted={() => setScreen('login')}
      onLoginPress={() => setScreen('login')}
    />
  );
}
