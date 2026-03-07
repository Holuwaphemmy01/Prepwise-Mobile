import { StatusBar } from 'expo-status-bar';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
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
import { headerTopForHeight } from '../../../theme/layout';

type ForgotPasswordScreenProps = {
  onBack: () => void;
  onVerify: () => void;
};

export function ForgotPasswordScreen({ onBack, onVerify }: ForgotPasswordScreenProps) {
  const { height } = useWindowDimensions();
  const compact = height <= 820;
  const tiny = height <= 700;

  const logoSize = tiny ? 60 : compact ? 70 : 80;
  const inputHeight = tiny ? 56 : compact ? 62 : 68;
  const buttonHeight = tiny ? 52 : compact ? 56 : 60;
  const headerTop = headerTopForHeight(height);

  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <KeyboardAvoidingView
        style={styles.keyboardArea}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.container}>
          <View style={[styles.header, { marginTop: headerTop }]}>
            <View
              style={[
                styles.logoCircle,
                { width: logoSize, height: logoSize, borderRadius: logoSize / 2 },
              ]}
            >
              <FontAwesome name="graduation-cap" size={28} color="#5965F2" />
            </View>
            <Text style={styles.brand}>Prepwise</Text>
          </View>

          <View style={styles.illustration}>
            <View style={styles.illustrationCircle}>
              <FontAwesome5 name="lock" size={tiny ? 34 : 40} color="#5965F2" />
            </View>
          </View>

          <View style={styles.textBlock}>
            <Text style={styles.title}>Forgot Password?</Text>
            <Text style={styles.subtitle}>
              Don't worry. Enter the email address associated with your account.
            </Text>
          </View>

          <View style={styles.formArea}>
            <View
              style={[
                styles.inputShell,
                { height: inputHeight, borderRadius: Math.round(inputHeight / 2.8) },
              ]}
            >
              <TextInput
                placeholder="Email address"
                placeholderTextColor="#8e9db5"
                style={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <Pressable
              style={[
                styles.primaryButton,
                { height: buttonHeight, borderRadius: Math.round(buttonHeight / 2.8) },
              ]}
              onPress={onVerify}
            >
              <Text style={styles.primaryButtonText}>Reset Password</Text>
            </Pressable>
          </View>

          <Pressable style={styles.bottomLink} onPress={onBack}>
            <FontAwesome5 name="arrow-left" size={14} color="#6b7896" />
            <Text style={styles.bottomLinkText}>Back to Login</Text>
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
    marginTop: 6,
    alignItems: 'center',
  },
  logoCircle: {
    backgroundColor: '#e8e9f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    marginTop: 18,
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '700',
    color: '#565ce7',
  },
  illustration: {
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#eef0ff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6672d6',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 18,
    elevation: 6,
  },
  textBlock: {
    marginTop: 18,
    paddingHorizontal: 8,
    alignItems: 'center',
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
  formArea: {
    marginTop: 18,
  },
  inputShell: {
    borderWidth: 1,
    borderColor: '#d9dfeb',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    paddingHorizontal: 22,
  },
  input: {
    fontSize: 14,
    color: '#1a2a47',
  },
  primaryButton: {
    marginTop: 16,
    backgroundColor: '#575ce7',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#575ce7',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.24,
    shadowRadius: 14,
    elevation: 6,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  bottomLink: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  bottomLinkText: {
    marginLeft: 6,
    color: '#6b7896',
    fontSize: 13,
    fontWeight: '600',
  },
});

