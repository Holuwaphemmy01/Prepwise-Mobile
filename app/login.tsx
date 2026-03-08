import { useRouter } from 'expo-router';
import { LoginScreen } from '../features/screens/LoginScreen';

export default function LoginRoute() {
  const router = useRouter();

  return (
    <LoginScreen
      onForgotPress={() => router.push('/auth/reset/forgot')}
      onCreateAccount={() => router.push('/auth/create-account')}
    />
  );
}
