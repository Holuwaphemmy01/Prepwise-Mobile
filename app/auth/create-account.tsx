import { useRouter } from 'expo-router';
import { CreateAccountScreen } from '../../features/screens/auth/CreateAccountScreen';

export default function CreateAccountRoute() {
  const router = useRouter();

  return <CreateAccountScreen onLogin={() => router.replace('/login')} />;
}
