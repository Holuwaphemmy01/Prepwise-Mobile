import { useRouter } from 'expo-router';
import { NewPasswordScreen } from '../../../features/screens/auth/reset/NewPasswordScreen';

export default function NewPasswordRoute() {
  const router = useRouter();

  return (
    <NewPasswordScreen
      onBack={() => router.back()}
      onSuccess={() => router.replace('/auth/reset/password-updated')}
    />
  );
}
