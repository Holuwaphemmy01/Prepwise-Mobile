import { useRouter } from 'expo-router';
import { VerifyResetCodeScreen } from '../../../features/screens/auth/reset/VerifyResetCodeScreen';

export default function VerifyResetCodeRoute() {
  const router = useRouter();

  return (
    <VerifyResetCodeScreen
      onBack={() => router.back()}
      onNext={() => router.push('/auth/reset/new-password')}
    />
  );
}
