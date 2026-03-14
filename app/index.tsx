import { useRouter } from 'expo-router';
import { WelcomeScreen } from '../features/screens/WelcomeScreen';

export default function WelcomeRoute() {
  const router = useRouter();

  return (
    <WelcomeScreen
      onGetStarted={() => router.push('/login')}
      onLoginPress={() => router.push('/login')}
    />
  );
}
