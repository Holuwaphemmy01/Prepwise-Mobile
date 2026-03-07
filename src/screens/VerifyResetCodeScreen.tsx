import { StatusBar } from 'expo-status-bar';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { headerTopForHeight } from '../theme/layout';

type VerifyResetCodeScreenProps = {
  onBack: () => void;
  onNext: () => void;
};

export function VerifyResetCodeScreen({ onBack, onNext }: VerifyResetCodeScreenProps) {
  const { height } = useWindowDimensions();
  const compact = height <= 820;
  const tiny = height <= 700;

  const CODE_LENGTH = 5;
  const headerTop = headerTopForHeight(height) + (tiny ? 16 : compact ? 24 : 32);
  const boxSize = tiny ? 50 : compact ? 56 : 60;
  const buttonHeight = tiny ? 52 : compact ? 56 : 60;

  const [digits, setDigits] = useState(Array.from({ length: CODE_LENGTH }, () => ''));
  const inputs = Array.from({ length: CODE_LENGTH }, () => useRef<TextInput>(null));
  const allFilled = digits.every((d) => d.length === 1);

  const setDigit = (index: number, value: string) => {
    const v = value.replace(/[^0-9]/g, '').slice(0, 1);
    const next = [...digits];
    next[index] = v;
    setDigits(next);
    if (v && index < CODE_LENGTH - 1) {
      inputs[index + 1].current?.focus();
    }
  };

  const onKeyPress = (index: number, key: string) => {
    if (key === 'Backspace' && digits[index] === '' && index > 0) {
      inputs[index - 1].current?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        style={styles.keyboardArea}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.container}>
          <View style={[styles.header, { marginTop: headerTop }]}>
            <View style={styles.iconCircle}>
              <FontAwesome5 name="user-shield" size={28} color="#575ce7" />
            </View>
            <Text style={styles.title}>Verify Your Identity</Text>
            <Text style={styles.subtitle}>Enter the 5-digit code sent to your email.</Text>
          </View>

          <View style={styles.codeRow}>
            {digits.map((d, i) => (
              <TextInput
                key={i}
                ref={inputs[i]}
                value={d}
                onChangeText={(v) => setDigit(i, v)}
                onKeyPress={({ nativeEvent }) => onKeyPress(i, nativeEvent.key)}
                keyboardType="number-pad"
                maxLength={1}
                style={[
                  styles.codeBox,
                  { width: boxSize, height: boxSize, borderRadius: 12 },
                ]}
                textAlign="center"
              />
            ))}
          </View>

          <Pressable
            style={[
              styles.primaryButton,
              { height: buttonHeight, borderRadius: Math.round(buttonHeight / 2.8) },
              !allFilled && styles.primaryButtonDisabled,
            ]}
            disabled={!allFilled}
            onPress={allFilled ? onNext : undefined}
          >
            <Text style={styles.primaryButtonText}>Verify Code</Text>
          </Pressable>

          <View style={styles.resendRow}>
            <Text style={styles.resendText}>Didn't receive the code?</Text>
            <Pressable>
              <Text style={styles.resendLink}>Resend Code</Text>
            </Pressable>
          </View>

          <Pressable style={styles.bottomBack} onPress={onBack}>
            <FontAwesome5 name="arrow-left" size={14} color="#6b7896" />
            <Text style={styles.bottomBackText}>Back to Forgot Password</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f5fb',
  },
  keyboardArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 24,
  },
  header: {
    alignItems: 'center',
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eaeafd',
    marginBottom: 14,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: '#0a1430',
  },
  subtitle: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
    color: '#6b7896',
  },
  codeRow: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  codeBox: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#e0e6f2',
    color: '#0a1430',
    fontSize: 20,
    fontWeight: '700',
  },
  primaryButton: {
    marginTop: 22,
    backgroundColor: '#575ce7',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#575ce7',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.24,
    shadowRadius: 14,
    elevation: 6,
  },
  primaryButtonDisabled: {
    opacity: 0.5,
    shadowOpacity: 0.12,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  resendRow: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resendText: {
    color: '#7b89a6',
    fontSize: 12,
  },
  resendLink: {
    marginLeft: 6,
    color: '#10d0a5',
    fontSize: 12,
    fontWeight: '700',
  },
  bottomBack: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 18,
  },
  bottomBackText: {
    marginLeft: 6,
    color: '#6b7896',
    fontSize: 13,
    fontWeight: '600',
  },
});
