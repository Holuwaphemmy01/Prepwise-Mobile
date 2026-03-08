import { useRouter } from 'expo-router';
import { ForgotPasswordScreen } from '../../../features/screens/auth/reset/ForgotPasswordScreen';

export default function ForgotPasswordRoute() {
  const router = useRouter();

  return (
    <ForgotPasswordScreen
      onBack={() => router.back()}
      onVerify={() => router.push('/auth/reset/verify')}
    />
  );
}
