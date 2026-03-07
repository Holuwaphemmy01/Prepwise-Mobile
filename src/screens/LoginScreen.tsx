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
import { headerTopForHeight } from '../theme/layout';

type LoginScreenProps = {
  onForgotPress?: () => void;
};

export function LoginScreen({ onForgotPress }: LoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const { height } = useWindowDimensions();
  const compact = height <= 820;
  const tiny = height <= 700;

  const logoSize = tiny ? 86 : compact ? 96 : 112;
  const inputHeight = tiny ? 62 : compact ? 70 : 78;
  const buttonHeight = tiny ? 52 : compact ? 56 : 60;
  const socialSize = tiny ? 56 : compact ? 62 : 68;
  const headerTop = headerTopForHeight(height);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <KeyboardAvoidingView
        style={styles.keyboardArea}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={[styles.container, tiny && styles.containerTiny]}>
          <View style={[styles.header, { marginTop: headerTop }]}>
            <View
              style={[
                styles.logoCircle,
                { width: logoSize, height: logoSize, borderRadius: logoSize / 2 },
              ]}
            >
              <FontAwesome
                name="graduation-cap"
                size={tiny ? 30 : compact ? 34 : 38}
                color="#5965F2"
              />
            </View>

            <Text style={[styles.brand, tiny && styles.brandTiny]}>Prepwise</Text>
            <Text style={[styles.subtitle, tiny && styles.subtitleTiny]}>
              Your journey to 300+ starts{'\n'}here.
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
              />
            </View>

            <View
              style={[
                styles.inputShellRow,
                { height: inputHeight, borderRadius: Math.round(inputHeight / 2.8) },
              ]}
            >
              <TextInput
                placeholder="Password"
                placeholderTextColor="#8e9db5"
                style={styles.inputRow}
                secureTextEntry={!showPassword}
              />

              <Pressable
                style={styles.eyeButton}
                onPress={() => setShowPassword((prev) => !prev)}
              >
                <FontAwesome
                  name={showPassword ? 'eye' : 'eye-slash'}
                  size={tiny ? 20 : 22}
                  color="#90a0b9"
                />
              </Pressable>
            </View>

            <Pressable style={styles.forgotWrap} onPress={onForgotPress}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </Pressable>

            <Pressable
              style={[
                styles.loginButton,
                { height: buttonHeight, borderRadius: Math.round(buttonHeight / 2.8) },
              ]}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </Pressable>

            <View style={styles.orRow}>
              <View style={styles.orLine} />
              <Text style={styles.orText}>Or</Text>
              <View style={styles.orLine} />
            </View>

            <Pressable
              style={[
                styles.createButton,
                { height: buttonHeight, borderRadius: Math.round(buttonHeight / 2.8) },
              ]}
            >
              <Text style={styles.createButtonText}>Create Account</Text>
            </Pressable>

            <View style={styles.socialRow}>
              <Pressable
                style={[
                  styles.socialButton,
                  {
                    width: socialSize,
                    height: socialSize,
                    borderRadius: socialSize / 2,
                  },
                ]}
              >
                <FontAwesome5 name="google" size={tiny ? 24 : 26} color="#4285F4" />
              </Pressable>
              <Pressable
                style={[
                  styles.socialButton,
                  {
                    width: socialSize,
                    height: socialSize,
                    borderRadius: socialSize / 2,
                  },
                ]}
              >
                <FontAwesome5 name="apple" size={tiny ? 24 : 26} color="#0d1228" />
              </Pressable>
            </View>

            <Text style={[styles.terms, tiny && styles.termsTiny]}>
              By continuing, you agree to our <Text style={styles.termsLink}>Terms</Text> and{' '}
              <Text style={styles.termsLink}>Privacy Policy</Text>.
            </Text>
          </View>
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
    justifyContent: 'space-between',
  },
  containerTiny: {
    paddingBottom: 16,
  },
  header: {
    alignItems: 'center',
  },
  logoCircle: {
    backgroundColor: '#e8e9f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    marginTop: 20,
    fontSize: 30,
    lineHeight: 35,
    fontWeight: '700',
    color: '#0a1430',
  },
  brandTiny: {
    marginTop: 14,
    fontSize: 27,
    lineHeight: 31,
  },
  subtitle: {
    marginTop: 12,
    textAlign: 'center',
    fontSize: 19,
    lineHeight: 26,
    fontWeight: '700',
    color: '#565ce7',
  },
  subtitleTiny: {
    marginTop: 10,
    fontSize: 17,
    lineHeight: 23,
  },
  formArea: {
    marginTop: 22,
  },
  inputShell: {
    borderWidth: 1,
    borderColor: '#d9dfeb',
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    paddingHorizontal: 22,
  },
  inputShellRow: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#d9dfeb',
    backgroundColor: '#f8fafc',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 22,
    paddingRight: 14,
  },
  input: {
    fontSize: 14,
    color: '#1a2a47',
  },
  inputRow: {
    flex: 1,
    fontSize: 14,
    color: '#1a2a47',
  },
  eyeButton: {
    marginLeft: 10,
  },
  forgotWrap: {
    marginTop: 12,
    alignItems: 'flex-end',
  },
  forgotText: {
    fontSize: 12,
    color: '#5a6b8a',
    fontWeight: '500',
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: '#575ce7',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#575ce7',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.24,
    shadowRadius: 14,
    elevation: 6,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  orRow: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#d7ddeb',
  },
  orText: {
    marginHorizontal: 22,
    color: '#8494ad',
    fontSize: 12,
  },
  createButton: {
    marginTop: 16,
    borderWidth: 1.5,
    borderColor: '#b9bbf1',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createButtonText: {
    color: '#565ce7',
    fontSize: 14,
    fontWeight: '700',
  },
  socialRow: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButton: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#d9dfeb',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 12,
    shadowColor: '#7282a1',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  terms: {
    marginTop: 20,
    textAlign: 'center',
    color: '#8d9ab2',
    fontSize: 13,
    lineHeight: 18,
  },
  termsTiny: {
    marginTop: 14,
    fontSize: 12,
    lineHeight: 17,
  },
  termsLink: {
    textDecorationLine: 'underline',
    color: '#7f8fa9',
  },
});
