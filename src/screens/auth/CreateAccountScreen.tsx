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
  View,
} from 'react-native';

type CreateAccountScreenProps = {
  onLogin: () => void;
};

export function CreateAccountScreen({ onLogin }: CreateAccountScreenProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const canSubmit = fullName.length > 0 && email.length > 0 && password.length >= 6 && !!acceptedTerms;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        style={styles.keyboardArea}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerRow}>
              <View style={styles.logoCircle}>
                <FontAwesome name="graduation-cap" size={32} color="#5d61ef" />
              </View>
            </View>
            <Text style={styles.title}>Create your account</Text>
            <Text style={styles.subtitle}>Join 10,000+ students scoring higher.</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.fieldBlock}>
              <Text style={styles.label}>Full Name</Text>
              <View style={styles.inputShell}>
                <TextInput
                  placeholder="Jane Doe"
                  placeholderTextColor="#8e9db5"
                  style={styles.input}
                  value={fullName}
                  onChangeText={setFullName}
                />
              </View>
            </View>

            <View style={styles.fieldBlock}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputShell}>
                <TextInput
                  placeholder="jane@example.com"
                  placeholderTextColor="#8e9db5"
                  style={styles.input}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
            </View>

            <View style={styles.fieldBlock}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputShell}>
                <TextInput
                  placeholder="••••••••"
                  placeholderTextColor="#8e9db5"
                  style={styles.input}
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
              </View>
            </View>

            <Pressable
              style={styles.termsRow}
              onPress={() => setAcceptedTerms((prev) => !prev)}
            >
              <View style={[styles.checkbox, acceptedTerms && styles.checkboxChecked]}>
                {acceptedTerms && (
                  <FontAwesome name="check" size={12} color="#ffffff" />
                )}
              </View>
              <Text style={styles.termsText}>
                I agree to the <Text style={styles.termsLink}>Terms of Service</Text> and{' '}
                <Text style={styles.termsLink}>Privacy Policy</Text>
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.primaryButton,
                !canSubmit && styles.primaryButtonDisabled,
              ]}
              disabled={!canSubmit}
            >
              <Text style={styles.primaryButtonText}>Create Account</Text>
            </Pressable>

            <View style={styles.dividerRow}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>Or sign up with</Text>
              <View style={styles.dividerLine} />
            </View>

            <View style={styles.socialRow}>
              <Pressable style={styles.socialButton}>
                <FontAwesome5 name="google" size={18} color="#4285F4" />
                <Text style={styles.socialText}>Google</Text>
              </Pressable>
              <Pressable style={styles.socialButton}>
                <FontAwesome5 name="apple" size={18} color="#111827" />
                <Text style={styles.socialText}>Apple</Text>
              </Pressable>
            </View>
          </View>

          <Pressable style={styles.footer} onPress={onLogin}>
            <Text style={styles.footerText}>
              Already have an account? <Text style={styles.footerLink}>Log in</Text>
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9ff',
  },
  keyboardArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 40,
  },
  header: {
    marginBottom: 18,
  },
  headerRow: {
    alignItems: 'center',
    marginBottom: 12,
  },
  logoCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#5d61ef1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0f172a',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: '500',
    color: '#6b7280',
  },
  card: {
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 20,
    paddingVertical: 22,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.7)',
    shadowColor: '#5d61ef',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 22,
    elevation: 6,
  },
  fieldBlock: {
    marginBottom: 14,
  },
  label: {
    marginLeft: 4,
    marginBottom: 6,
    fontSize: 13,
    fontWeight: '600',
    color: '#111827',
  },
  inputShell: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingHorizontal: 16,
    justifyContent: 'center',
    height: 56,
    borderRadius: 14,
  },
  input: {
    fontSize: 14,
    color: '#111827',
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 6,
    marginBottom: 10,
    paddingHorizontal: 2,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#cbd5f5',
    backgroundColor: '#ffffff',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#5d61ef',
    borderColor: '#5d61ef',
  },
  termsText: {
    flex: 1,
    fontSize: 12,
    color: '#6b7280',
  },
  termsLink: {
    color: '#5d61ef',
    fontWeight: '700',
  },
  primaryButton: {
    marginTop: 4,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#5d61ef',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#5d61ef',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.24,
    shadowRadius: 18,
    elevation: 6,
  },
  primaryButtonDisabled: {
    opacity: 0.5,
    shadowOpacity: 0.12,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e5e7eb',
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 12,
    color: '#9ca3af',
  },
  socialRow: {
    flexDirection: 'row',
    marginTop: 4,
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: 'rgba(255,255,255,0.9)',
    marginHorizontal: 4,
  },
  socialIconPlaceholder: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#d1d5db',
    marginRight: 8,
  },
  socialText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
  },
  footer: {
    marginTop: 18,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#6b7280',
  },
  footerLink: {
    color: '#5d61ef',
    fontWeight: '700',
  },
});
