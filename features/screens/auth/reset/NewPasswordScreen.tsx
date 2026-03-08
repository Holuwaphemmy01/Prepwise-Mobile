import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
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
    <SafeAreaView className="flex-1 bg-[#f4f5fb]">
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View className="flex-1 px-6 pb-6">
          <View className="flex-1 justify-start pt-[45px]">
            <View className="mb-5 flex-row items-center">
              <Pressable className="h-10 w-10 items-center justify-center rounded-[14px] bg-[#ffffffb3]" onPress={onBack}>
                <FontAwesome5 name="arrow-left" size={18} color="#0a1430" />
              </Pressable>
              <View className="mr-10 flex-1 items-center">
                <Text className="text-[20px] font-bold text-[#5d61ef]">Prepwise</Text>
              </View>
            </View>

            <View className="rounded-[18px] border border-[#e5e7f5] bg-[#ffffffb3] px-5 py-[22px]">
              <View className="mb-[18px]">
                <Text className="text-[26px] font-bold leading-8 text-[#0a1430]">New Password</Text>
                <Text className="mt-2 text-sm leading-5 text-[#6b7896]">
                  Set a strong password to secure your account.
                </Text>
              </View>

              <View className="mt-1">
                <View className="mb-[14px]">
                  <Text className="mb-1.5 ml-1 text-[13px] font-semibold text-[#111827]">New Password</Text>
                  <View
                    className="flex-row items-center border border-[#d9dfeb] bg-white pl-[18px] pr-[14px]"
                    style={{ height: inputHeight, borderRadius: Math.round(inputHeight / 2.8) }}
                  >
                    <TextInput
                      placeholder="Enter new password"
                      placeholderTextColor="#8e9db5"
                      style={{ flex: 1, fontSize: 14, color: '#1a2a47' }}
                      secureTextEntry={!showNew}
                      value={newPassword}
                      onChangeText={setNewPassword}
                    />
                    <Pressable
                      className="ml-[10px]"
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

                <View className="mb-[14px]">
                  <Text className="mb-1.5 ml-1 text-[13px] font-semibold text-[#111827]">Confirm New Password</Text>
                  <View
                    className="flex-row items-center border border-[#d9dfeb] bg-white pl-[18px] pr-[14px]"
                    style={{ height: inputHeight, borderRadius: Math.round(inputHeight / 2.8) }}
                  >
                    <TextInput
                      placeholder="Re-enter new password"
                      placeholderTextColor="#8e9db5"
                      style={{ flex: 1, fontSize: 14, color: '#1a2a47' }}
                      secureTextEntry={!showConfirm}
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
                    />
                    <Pressable
                      className="ml-[10px]"
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

                <View className="mb-[10px] mt-1 flex-row flex-wrap">
                  <View className="mt-1 w-1/2 flex-row items-center">
                    <FontAwesome5
                      name={lengthOk ? 'check-circle' : 'circle'}
                      size={12}
                      color={lengthOk ? '#22c55e' : '#cbd5f1'}
                    />
                    <Text className={`ml-1.5 text-[11px] ${lengthOk ? 'font-bold text-[#111827]' : 'text-[#6b7280]'}`}>
                      8+ characters
                    </Text>
                  </View>
                  <View className="mt-1 w-1/2 flex-row items-center">
                    <FontAwesome5
                      name={upperOk ? 'check-circle' : 'circle'}
                      size={12}
                      color={upperOk ? '#22c55e' : '#cbd5f1'}
                    />
                    <Text className={`ml-1.5 text-[11px] ${upperOk ? 'font-bold text-[#111827]' : 'text-[#6b7280]'}`}>
                      One uppercase
                    </Text>
                  </View>
                  <View className="mt-1 w-1/2 flex-row items-center">
                    <FontAwesome5
                      name={digitOk ? 'check-circle' : 'circle'}
                      size={12}
                      color={digitOk ? '#22c55e' : '#cbd5f1'}
                    />
                    <Text className={`ml-1.5 text-[11px] ${digitOk ? 'font-bold text-[#111827]' : 'text-[#6b7280]'}`}>
                      One number
                    </Text>
                  </View>
                  <View className="mt-1 w-1/2 flex-row items-center">
                    <FontAwesome5
                      name={specialOk ? 'check-circle' : 'circle'}
                      size={12}
                      color={specialOk ? '#22c55e' : '#cbd5f1'}
                    />
                    <Text className={`ml-1.5 text-[11px] ${specialOk ? 'font-bold text-[#111827]' : 'text-[#6b7280]'}`}>
                      One special character
                    </Text>
                  </View>
                </View>

                <Pressable
                  className="mt-[10px] items-center justify-center bg-[#575ce7]"
                  style={{ height: buttonHeight, borderRadius: Math.round(buttonHeight / 2.8), opacity: canSubmit ? 1 : 0.5 }}
                  disabled={!canSubmit}
                  onPress={canSubmit ? onSuccess : undefined}
                >
                  <Text className="text-sm font-bold text-white">Reset Password</Text>
                </Pressable>
              </View>
            </View>
          </View>

          <View className="mt-4 items-center">
            <Text className="text-[11px] uppercase tracking-[1px] text-[#a1aac5]">
              Securely encrypted by Prepwise Auth
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
