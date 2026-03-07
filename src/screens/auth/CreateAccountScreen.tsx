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
  Modal,
  ScrollView,
} from 'react-native';

type CreateAccountScreenProps = {
  onLogin: () => void;
};

export function CreateAccountScreen({ onLogin }: CreateAccountScreenProps) {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [stateNigeria, setStateNigeria] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [agePickerVisible, setAgePickerVisible] = useState(false);
  const [genderPickerVisible, setGenderPickerVisible] = useState(false);
  const [statePickerVisible, setStatePickerVisible] = useState(false);

  const ageNumber = parseInt(age, 10);
  const ageValid = !Number.isNaN(ageNumber) && ageNumber >= 13 && ageNumber <= 40;

  const stepOneValid =
    fullName.trim().length > 0 &&
    email.trim().length > 0 &&
    ageValid &&
    gender.trim().length > 0;

  const passwordsMatch = password.length >= 6 && password === confirmPassword;

  const canSubmit =
    stepOneValid &&
    phone.trim().length > 0 &&
    stateNigeria.trim().length > 0 &&
    passwordsMatch &&
    !!acceptedTerms;

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
            {step === 1 ? (
              <>
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
                  <Text style={styles.label}>Age</Text>
                  <Pressable
                    style={styles.inputShell}
                    onPress={() => setAgePickerVisible(true)}
                  >
                    <Text
                      style={[
                        styles.input,
                        !age && styles.placeholderText,
                      ]}
                    >
                      {age ? `Age: ${age}` : 'Select age (13 - 40)'}
                    </Text>
                  </Pressable>
                </View>

                <View style={styles.fieldBlock}>
                  <Text style={styles.label}>Gender</Text>
                  <Pressable
                    style={styles.inputShell}
                    onPress={() => setGenderPickerVisible(true)}
                  >
                    <Text
                      style={[
                        styles.input,
                        !gender && styles.placeholderText,
                      ]}
                    >
                      {gender || 'Select gender'}
                    </Text>
                  </Pressable>
                </View>

                <Pressable
                  style={[
                    styles.primaryButton,
                    !stepOneValid && styles.primaryButtonDisabled,
                  ]}
                  disabled={!stepOneValid}
                  onPress={stepOneValid ? () => setStep(2) : undefined}
                >
                  <Text style={styles.primaryButtonText}>Next</Text>
                </Pressable>
              </>
            ) : (
              <>
                <View style={styles.fieldBlock}>
                  <Text style={styles.label}>Phone Number</Text>
                  <View style={styles.inputShell}>
                    <TextInput
                      placeholder="Phone number"
                      placeholderTextColor="#8e9db5"
                      style={styles.input}
                      keyboardType="phone-pad"
                      value={phone}
                      onChangeText={setPhone}
                    />
                  </View>
                </View>

                <View style={styles.fieldBlock}>
                  <Text style={styles.label}>State (Nigeria)</Text>
                  <Pressable
                    style={styles.inputShell}
                    onPress={() => setStatePickerVisible(true)}
                  >
                    <Text
                      style={[
                        styles.input,
                        !stateNigeria && styles.placeholderText,
                      ]}
                    >
                      {stateNigeria || 'Select state'}
                    </Text>
                  </Pressable>
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

                <View style={styles.fieldBlock}>
                  <Text style={styles.label}>Confirm Password</Text>
                  <View style={styles.inputShell}>
                    <TextInput
                      placeholder="Re-enter password"
                      placeholderTextColor="#8e9db5"
                      style={styles.input}
                      secureTextEntry
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
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

                <Pressable style={styles.backStep} onPress={() => setStep(1)}>
                  <Text style={styles.backStepText}>Back</Text>
                </Pressable>
              </>
            )}
          </View>

          <Pressable style={styles.footer} onPress={onLogin}>
            <Text style={styles.footerText}>
              Already have an account? <Text style={styles.footerLink}>Log in</Text>
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
      <Modal
        visible={agePickerVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setAgePickerVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Select Age</Text>
            <ScrollView style={styles.modalList}>
              {Array.from({ length: 28 }, (_, i) => 13 + i).map((value) => (
                <Pressable
                  key={value}
                  style={styles.modalItem}
                  onPress={() => {
                    setAge(String(value));
                    setAgePickerVisible(false);
                  }}
                >
                  <Text style={styles.modalItemText}>{value}</Text>
                </Pressable>
              ))}
            </ScrollView>
            <Pressable
              style={styles.modalCancel}
              onPress={() => setAgePickerVisible(false)}
            >
              <Text style={styles.modalCancelText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        visible={genderPickerVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setGenderPickerVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Select Gender</Text>
            {['Male', 'Female', 'Prefer not to say'].map((option) => (
              <Pressable
                key={option}
                style={styles.modalItem}
                onPress={() => {
                  setGender(option);
                  setGenderPickerVisible(false);
                }}
              >
                <Text style={styles.modalItemText}>{option}</Text>
              </Pressable>
            ))}
            <Pressable
              style={styles.modalCancel}
              onPress={() => setGenderPickerVisible(false)}
            >
              <Text style={styles.modalCancelText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        visible={statePickerVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setStatePickerVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Select State</Text>
            <ScrollView style={styles.modalList}>
              {[
                'Abia',
                'Abuja',
                'Adamawa',
                'Akwa Ibom',
                'Anambra',
                'Bauchi',
                'Bayelsa',
                'Benue',
                'Borno',
                'Cross River',
                'Delta',
                'Ebonyi',
                'Edo',
                'Ekiti',
                'Enugu',
                'Gombe',
                'Imo',
                'Jigawa',
                'Kaduna',
                'Kano',
                'Katsina',
                'Kebbi',
                'Kogi',
                'Kwara',
                'Lagos',
                'Nasarawa',
                'Niger',
                'Ogun',
                'Ondo',
                'Osun',
                'Oyo',
                'Plateau',
                'Rivers',
                'Sokoto',
                'Taraba',
                'Yobe',
                'Zamfara',
              ].map((state) => (
                <Pressable
                  key={state}
                  style={styles.modalItem}
                  onPress={() => {
                    setStateNigeria(state);
                    setStatePickerVisible(false);
                  }}
                >
                  <Text style={styles.modalItemText}>{state}</Text>
                </Pressable>
              ))}
            </ScrollView>
            <Pressable
              style={styles.modalCancel}
              onPress={() => setStatePickerVisible(false)}
            >
              <Text style={styles.modalCancelText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  placeholderText: {
    color: '#8e9db5',
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
  backStep: {
    marginTop: 12,
    alignItems: 'center',
  },
  backStepText: {
    fontSize: 13,
    color: '#6b7280',
    fontWeight: '500',
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15,23,42,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  modalCard: {
    width: '100%',
    maxHeight: '70%',
    borderRadius: 20,
    backgroundColor: '#ffffff',
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 10,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 12,
  },
  modalList: {
    maxHeight: 260,
  },
  modalItem: {
    paddingVertical: 10,
  },
  modalItemText: {
    fontSize: 14,
    color: '#111827',
  },
  modalCancel: {
    marginTop: 6,
    alignItems: 'center',
  },
  modalCancelText: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
});
