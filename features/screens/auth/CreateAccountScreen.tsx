import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

type CreateAccountScreenProps = {
  onLogin: () => void;
};

const NIGERIA_STATES = [
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
];

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
    <SafeAreaView className="flex-1 bg-[#f8f9ff]">
      <StatusBar style="dark" />
      <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View className="flex-1 px-6 pb-6 pt-10">
          <View className="mb-[18px]">
            <View className="mb-3 items-center">
              <View className="h-[70px] w-[70px] items-center justify-center rounded-full bg-[#5d61ef1a]">
                <FontAwesome name="graduation-cap" size={32} color="#5d61ef" />
              </View>
            </View>
            <Text className="text-[28px] font-bold text-[#0f172a]">Create your account</Text>
            <Text className="mt-1 text-base font-medium text-[#6b7280]">
              Join 10,000+ students scoring higher.
            </Text>
          </View>

          <View className="rounded-[20px] border border-[#ffffffe0] bg-[#ffffffe6] px-5 py-[22px]">
            {step === 1 ? (
              <>
                <View className="mb-[14px]">
                  <Text className="mb-1.5 ml-1 text-[13px] font-semibold text-[#111827]">Full Name</Text>
                  <View className="h-14 justify-center rounded-[14px] border border-[#e2e8f0] bg-[#ffffffcc] px-4">
                    <TextInput
                      placeholder="Jane Doe"
                      placeholderTextColor="#8e9db5"
                      style={{ fontSize: 14, color: '#111827' }}
                      value={fullName}
                      onChangeText={setFullName}
                    />
                  </View>
                </View>

                <View className="mb-[14px]">
                  <Text className="mb-1.5 ml-1 text-[13px] font-semibold text-[#111827]">Email</Text>
                  <View className="h-14 justify-center rounded-[14px] border border-[#e2e8f0] bg-[#ffffffcc] px-4">
                    <TextInput
                      placeholder="jane@example.com"
                      placeholderTextColor="#8e9db5"
                      style={{ fontSize: 14, color: '#111827' }}
                      autoCapitalize="none"
                      keyboardType="email-address"
                      value={email}
                      onChangeText={setEmail}
                    />
                  </View>
                </View>

                <View className="mb-[14px]">
                  <Text className="mb-1.5 ml-1 text-[13px] font-semibold text-[#111827]">Age</Text>
                  <Pressable
                    className="h-14 justify-center rounded-[14px] border border-[#e2e8f0] bg-[#ffffffcc] px-4"
                    onPress={() => setAgePickerVisible(true)}
                  >
                    <Text className={`text-sm ${age ? 'text-[#111827]' : 'text-[#8e9db5]'}`}>
                      {age ? `Age: ${age}` : 'Select age (13 - 40)'}
                    </Text>
                  </Pressable>
                </View>

                <View className="mb-[14px]">
                  <Text className="mb-1.5 ml-1 text-[13px] font-semibold text-[#111827]">Gender</Text>
                  <Pressable
                    className="h-14 justify-center rounded-[14px] border border-[#e2e8f0] bg-[#ffffffcc] px-4"
                    onPress={() => setGenderPickerVisible(true)}
                  >
                    <Text className={`text-sm ${gender ? 'text-[#111827]' : 'text-[#8e9db5]'}`}>
                      {gender || 'Select gender'}
                    </Text>
                  </Pressable>
                </View>

                <Pressable
                  className="mt-1 h-14 items-center justify-center rounded-2xl bg-[#5d61ef]"
                  style={{ opacity: stepOneValid ? 1 : 0.5 }}
                  disabled={!stepOneValid}
                  onPress={stepOneValid ? () => setStep(2) : undefined}
                >
                  <Text className="text-[15px] font-bold text-white">Next</Text>
                </Pressable>
              </>
            ) : (
              <>
                <View className="mb-[14px]">
                  <Text className="mb-1.5 ml-1 text-[13px] font-semibold text-[#111827]">Phone Number</Text>
                  <View className="h-14 justify-center rounded-[14px] border border-[#e2e8f0] bg-[#ffffffcc] px-4">
                    <TextInput
                      placeholder="Phone number"
                      placeholderTextColor="#8e9db5"
                      style={{ fontSize: 14, color: '#111827' }}
                      keyboardType="phone-pad"
                      value={phone}
                      onChangeText={setPhone}
                    />
                  </View>
                </View>

                <View className="mb-[14px]">
                  <Text className="mb-1.5 ml-1 text-[13px] font-semibold text-[#111827]">State (Nigeria)</Text>
                  <Pressable
                    className="h-14 justify-center rounded-[14px] border border-[#e2e8f0] bg-[#ffffffcc] px-4"
                    onPress={() => setStatePickerVisible(true)}
                  >
                    <Text className={`text-sm ${stateNigeria ? 'text-[#111827]' : 'text-[#8e9db5]'}`}>
                      {stateNigeria || 'Select state'}
                    </Text>
                  </Pressable>
                </View>

                <View className="mb-[14px]">
                  <Text className="mb-1.5 ml-1 text-[13px] font-semibold text-[#111827]">Password</Text>
                  <View className="h-14 justify-center rounded-[14px] border border-[#e2e8f0] bg-[#ffffffcc] px-4">
                    <TextInput
                      placeholder="••••••••"
                      placeholderTextColor="#8e9db5"
                      style={{ fontSize: 14, color: '#111827' }}
                      secureTextEntry
                      value={password}
                      onChangeText={setPassword}
                    />
                  </View>
                </View>

                <View className="mb-[14px]">
                  <Text className="mb-1.5 ml-1 text-[13px] font-semibold text-[#111827]">Confirm Password</Text>
                  <View className="h-14 justify-center rounded-[14px] border border-[#e2e8f0] bg-[#ffffffcc] px-4">
                    <TextInput
                      placeholder="Re-enter password"
                      placeholderTextColor="#8e9db5"
                      style={{ fontSize: 14, color: '#111827' }}
                      secureTextEntry
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
                    />
                  </View>
                </View>

                <Pressable className="mb-[10px] mt-1 flex-row items-start px-0.5" onPress={() => setAcceptedTerms((prev) => !prev)}>
                  <View
                    className={`mr-[10px] h-5 w-5 items-center justify-center rounded-md border ${acceptedTerms ? 'border-[#5d61ef] bg-[#5d61ef]' : 'border-[#cbd5f5] bg-white'}`}
                  >
                    {acceptedTerms && <FontAwesome name="check" size={12} color="#ffffff" />}
                  </View>
                  <Text className="flex-1 text-xs text-[#6b7280]">
                    I agree to the <Text className="font-bold text-[#5d61ef]">Terms of Service</Text> and{' '}
                    <Text className="font-bold text-[#5d61ef]">Privacy Policy</Text>
                  </Text>
                </Pressable>

                <Pressable
                  className="mt-1 h-14 items-center justify-center rounded-2xl bg-[#5d61ef]"
                  style={{ opacity: canSubmit ? 1 : 0.5 }}
                  disabled={!canSubmit}
                >
                  <Text className="text-[15px] font-bold text-white">Create Account</Text>
                </Pressable>

                <Pressable className="mt-3 items-center" onPress={() => setStep(1)}>
                  <Text className="text-[13px] font-medium text-[#6b7280]">Back</Text>
                </Pressable>
              </>
            )}
          </View>

          <Pressable className="mt-[18px] items-center" onPress={onLogin}>
            <Text className="text-sm text-[#6b7280]">
              Already have an account? <Text className="font-bold text-[#5d61ef]">Log in</Text>
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>

      <Modal visible={agePickerVisible} transparent animationType="slide" onRequestClose={() => setAgePickerVisible(false)}>
        <View className="flex-1 items-center justify-center bg-[#0f172a80] px-6">
          <View className="max-h-[70%] w-full rounded-[20px] bg-white px-[18px] pb-[10px] pt-4">
            <Text className="mb-3 text-base font-bold text-[#0f172a]">Select Age</Text>
            <ScrollView className="max-h-[260px]">
              {Array.from({ length: 28 }, (_, i) => 13 + i).map((value) => (
                <Pressable
                  key={value}
                  className="py-[10px]"
                  onPress={() => {
                    setAge(String(value));
                    setAgePickerVisible(false);
                  }}
                >
                  <Text className="text-sm text-[#111827]">{value}</Text>
                </Pressable>
              ))}
            </ScrollView>
            <Pressable className="mt-1.5 items-center" onPress={() => setAgePickerVisible(false)}>
              <Text className="text-sm font-medium text-[#6b7280]">Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal visible={genderPickerVisible} transparent animationType="slide" onRequestClose={() => setGenderPickerVisible(false)}>
        <View className="flex-1 items-center justify-center bg-[#0f172a80] px-6">
          <View className="w-full rounded-[20px] bg-white px-[18px] pb-[10px] pt-4">
            <Text className="mb-3 text-base font-bold text-[#0f172a]">Select Gender</Text>
            {['Male', 'Female', 'Prefer not to say'].map((option) => (
              <Pressable
                key={option}
                className="py-[10px]"
                onPress={() => {
                  setGender(option);
                  setGenderPickerVisible(false);
                }}
              >
                <Text className="text-sm text-[#111827]">{option}</Text>
              </Pressable>
            ))}
            <Pressable className="mt-1.5 items-center" onPress={() => setGenderPickerVisible(false)}>
              <Text className="text-sm font-medium text-[#6b7280]">Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal visible={statePickerVisible} transparent animationType="slide" onRequestClose={() => setStatePickerVisible(false)}>
        <View className="flex-1 items-center justify-center bg-[#0f172a80] px-6">
          <View className="max-h-[70%] w-full rounded-[20px] bg-white px-[18px] pb-[10px] pt-4">
            <Text className="mb-3 text-base font-bold text-[#0f172a]">Select State</Text>
            <ScrollView className="max-h-[260px]">
              {NIGERIA_STATES.map((state) => (
                <Pressable
                  key={state}
                  className="py-[10px]"
                  onPress={() => {
                    setStateNigeria(state);
                    setStatePickerVisible(false);
                  }}
                >
                  <Text className="text-sm text-[#111827]">{state}</Text>
                </Pressable>
              ))}
            </ScrollView>
            <Pressable className="mt-1.5 items-center" onPress={() => setStatePickerVisible(false)}>
              <Text className="text-sm font-medium text-[#6b7280]">Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
