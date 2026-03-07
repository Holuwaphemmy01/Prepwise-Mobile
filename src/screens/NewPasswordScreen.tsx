import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';
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

type NewPasswordScreenProps = {
  onBack: () => void;
  onSuccess: () => void;
};

export function NewPasswordScreen({ onBack, onSuccess }: NewPasswordScreenProps) {
  const { height } = useWindowDimensions();
  const compact = height <= 820;
  const tiny = height <= 700;

  const inputHeight = tiny ? 56 : compact ? 62 : 68;
  const buttonHeight = tiny ? 52 : compact ? 56 : 60;

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const lengthOk = newPassword.length >= 8;
  const upperOk = /[A-Z]/.test(newPassword);
  const digitOk = /[0-9]/.test(newPassword);
  const specialOk = /[^A-Za-z0-9]/.test(newPassword);
  const allCriteriaOk = lengthOk && upperOk && digitOk && specialOk;
  const passwordsMatch = newPassword.length > 0 && newPassword === confirmPassword;
  const canSubmit = allCriteriaOk && passwordsMatch;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        style={styles.keyboardArea}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.container}>
          <View style={styles.centerArea}>
            <View style={styles.topBar}>
              <Pressable style={styles.backIcon} onPress={onBack}>
                <FontAwesome5 name="arrow-left" size={18} color="#0a1430" />
              </Pressable>
              <View style={styles.brandWrap}>
                <Text style={styles.brandText}>Prepwise</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.headerBlock}>
                <Text style={styles.title}>New Password</Text>
                <Text style={styles.subtitle}>Set a strong password to secure your account.</Text>
              </View>

              <View style={styles.formArea}>
                <View style={styles.fieldBlock}>
                  <Text style={styles.label}>New Password</Text>
                  <View
                    style={[
                      styles.inputShell,
                      { height: inputHeight, borderRadius: Math.round(inputHeight / 2.8) },
                    ]}
                  >
                    <TextInput
                      placeholder="Enter new password"
                      placeholderTextColor="#8e9db5"
                      style={styles.input}
                      secureTextEntry={!showNew}
                      value={newPassword}
                      onChangeText={setNewPassword}
                    />
                    <Pressable
                      style={styles.eyeButton}
                      onPress={() => setShowNew((prev) => !prev)}
                    >
                      <FontAwesome5
                        name={showNew ? 'eye' : 'eye-slash'}
                        size={18}
                        color="#9aa4c0"
                      />
                    </Pressable>
                  </View>
                </View>

                <View style={styles.fieldBlock}>
                  <Text style={styles.label}>Confirm New Password</Text>
                  <View
                    style={[
                      styles.inputShell,
                      { height: inputHeight, borderRadius: Math.round(inputHeight / 2.8) },
                    ]}
                  >
                    <TextInput
                      placeholder="Re-enter new password"
                      placeholderTextColor="#8e9db5"
                      style={styles.input}
                      secureTextEntry={!showConfirm}
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
                    />
                    <Pressable
                      style={styles.eyeButton}
                      onPress={() => setShowConfirm((prev) => !prev)}
                    >
                      <FontAwesome5
                        name={showConfirm ? 'eye' : 'eye-slash'}
                        size={18}
                        color="#9aa4c0"
                      />
                    </Pressable>
                  </View>
                </View>

                <View style={styles.requirementsGrid}>
                  <View style={styles.requirementRow}>
                    <FontAwesome5
                      name={lengthOk ? 'check-circle' : 'circle'}
                      size={12}
                      color={lengthOk ? '#22c55e' : '#cbd5f1'}
                    />
                    <Text
                      style={[
                        styles.requirementText,
                        lengthOk && styles.requirementTextActive,
                      ]}
                    >
                      8+ characters
                    </Text>
                  </View>
                  <View style={styles.requirementRow}>
                    <FontAwesome5
                      name={upperOk ? 'check-circle' : 'circle'}
                      size={12}
                      color={upperOk ? '#22c55e' : '#cbd5f1'}
                    />
                    <Text
                      style={[
                        styles.requirementText,
                        upperOk && styles.requirementTextActive,
                      ]}
                    >
                      One uppercase
                    </Text>
                  </View>
                  <View style={styles.requirementRow}>
                    <FontAwesome5
                      name={digitOk ? 'check-circle' : 'circle'}
                      size={12}
                      color={digitOk ? '#22c55e' : '#cbd5f1'}
                    />
                    <Text
                      style={[
                        styles.requirementText,
                        digitOk && styles.requirementTextActive,
                      ]}
                    >
                      One number
                    </Text>
                  </View>
                  <View style={styles.requirementRow}>
                    <FontAwesome5
                      name={specialOk ? 'check-circle' : 'circle'}
                      size={12}
                      color={specialOk ? '#22c55e' : '#cbd5f1'}
                    />
                    <Text
                      style={[
                        styles.requirementText,
                        specialOk && styles.requirementTextActive,
                      ]}
                    >
                      One special character
                    </Text>
                  </View>
                </View>

                <Pressable
                  style={[
                    styles.primaryButton,
                    { height: buttonHeight, borderRadius: Math.round(buttonHeight / 2.8) },
                    !canSubmit && styles.primaryButtonDisabled,
                  ]}
                  disabled={!canSubmit}
                  onPress={canSubmit ? onSuccess : undefined}
                >
                  <Text style={styles.primaryButtonText}>Reset Password</Text>
                </Pressable>
              </View>
            </View>
          </View>

          <View style={styles.supportWrap}>
            <Text style={styles.supportText}>Securely encrypted by Prepwise Auth</Text>
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
    paddingBottom: 24,
  },
  centerArea: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 45,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backIcon: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: '#ffffffb3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandWrap: {
    flex: 1,
    alignItems: 'center',
    marginRight: 40,
  },
  brandText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#5d61ef',
  },
  card: {
    marginTop: 0,
    borderRadius: 18,
    backgroundColor: '#ffffffb3',
    paddingHorizontal: 20,
    paddingVertical: 22,
    borderWidth: 1,
    borderColor: '#e5e7f5',
    shadowColor: '#5d61ef',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 5,
  },
  headerBlock: {
    marginBottom: 18,
  },
  title: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '700',
    color: '#0a1430',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: '#6b7896',
  },
  formArea: {
    marginTop: 4,
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
    borderColor: '#d9dfeb',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 18,
    paddingRight: 14,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#1a2a47',
  },
  eyeButton: {
    marginLeft: 10,
  },
  requirementsGrid: {
    marginTop: 4,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  requirementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginTop: 4,
  },
  requirementText: {
    marginLeft: 6,
    fontSize: 11,
    color: '#6b7280',
  },
  requirementTextActive: {
    color: '#111827',
    fontWeight: '700',
  },
  primaryButton: {
    marginTop: 10,
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
  supportWrap: {
    marginTop: 16,
    alignItems: 'center',
  },
  supportText: {
    fontSize: 11,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#a1aac5',
  },
});
