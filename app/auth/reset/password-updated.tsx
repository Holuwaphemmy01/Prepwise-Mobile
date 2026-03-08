import { useRouter } from 'expo-router';
import { PasswordUpdatedScreen } from '../../../features/screens/auth/reset/PasswordUpdatedScreen';

export default function PasswordUpdatedRoute() {
  const router = useRouter();

  return <PasswordUpdatedScreen onLogin={() => router.replace('/login')} />;
}
