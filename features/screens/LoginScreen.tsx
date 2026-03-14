import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { headerTopForHeight } from '../theme/layout';

type LoginScreenProps = {
  onForgotPress?: () => void;
  onCreateAccount?: () => void;
};

export function LoginScreen({ onForgotPress, onCreateAccount }: LoginScreenProps) {
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
    <SafeAreaView className="flex-1 bg-[#f4f5fb]">
      <StatusBar style="dark" />

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View className="flex-1 justify-between px-6" style={{ paddingBottom: tiny ? 16 : 24 }}>
          <View className="items-center" style={{ marginTop: headerTop }}>
            <View
              className="items-center justify-center bg-[#e8e9f4]"
              style={{ width: logoSize, height: logoSize, borderRadius: logoSize / 2 }}
            >
              <FontAwesome
                name="graduation-cap"
                size={tiny ? 30 : compact ? 34 : 38}
                color="#5965F2"
              />
            </View>

            <Text
              className="font-bold text-[#0a1430]"
              style={{
                marginTop: tiny ? 14 : 20,
                fontSize: tiny ? 27 : 30,
                lineHeight: tiny ? 31 : 35,
              }}
            >
              Prepwise
            </Text>
            <Text
              className="text-center font-bold text-[#565ce7]"
              style={{
                marginTop: tiny ? 10 : 12,
                fontSize: tiny ? 17 : 19,
                lineHeight: tiny ? 23 : 26,
              }}
            >
              Your journey to 300+ starts{'\n'}here.
            </Text>
          </View>

          <View className="mt-[22px]">
            <View
              className="justify-center border border-[#d9dfeb] bg-[#f8fafc] px-[22px]"
              style={{ height: inputHeight, borderRadius: Math.round(inputHeight / 2.8) }}
            >
              <TextInput
                placeholder="Email address"
                placeholderTextColor="#8e9db5"
                style={{ fontSize: 14, color: '#1a2a47' }}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            <View
              className="mt-3 flex-row items-center border border-[#d9dfeb] bg-[#f8fafc] pl-[22px] pr-[14px]"
              style={{ height: inputHeight, borderRadius: Math.round(inputHeight / 2.8) }}
            >
              <TextInput
                placeholder="Password"
                placeholderTextColor="#8e9db5"
                style={{ flex: 1, fontSize: 14, color: '#1a2a47' }}
                secureTextEntry={!showPassword}
              />

              <Pressable className="ml-[10px]" onPress={() => setShowPassword((prev) => !prev)}>
                <FontAwesome
                  name={showPassword ? 'eye' : 'eye-slash'}
                  size={tiny ? 20 : 22}
                  color="#90a0b9"
                />
              </Pressable>
            </View>

            <Pressable className="mt-3 items-end" onPress={onForgotPress}>
              <Text className="text-xs font-medium text-[#5a6b8a]">Forgot Password?</Text>
            </Pressable>

            <Pressable
              className="mt-5 items-center justify-center bg-[#575ce7]"
              style={{ height: buttonHeight, borderRadius: Math.round(buttonHeight / 2.8) }}
            >
              <Text className="text-sm font-bold text-white">Login</Text>
            </Pressable>

            <View className="mt-[18px] flex-row items-center">
              <View className="h-[1px] flex-1 bg-[#d7ddeb]" />
              <Text className="mx-[22px] text-xs color-[#8494ad]">Or</Text>
              <View className="h-[1px] flex-1 bg-[#d7ddeb]" />
            </View>

            <Pressable
              className="mt-4 items-center justify-center border-[1.5px] border-[#b9bbf1] bg-transparent"
              style={{ height: buttonHeight, borderRadius: Math.round(buttonHeight / 2.8) }}
              onPress={onCreateAccount}
            >
              <Text className="text-sm font-bold text-[#565ce7]">Create Account</Text>
            </Pressable>

            <View className="mt-5 flex-row items-center justify-center">
              <Pressable
                className="mx-3 items-center justify-center border border-[#d9dfeb] bg-[#f8fafc]"
                style={{ width: socialSize, height: socialSize, borderRadius: socialSize / 2 }}
              >
                <FontAwesome5 name="google" size={tiny ? 24 : 26} color="#4285F4" />
              </Pressable>
              <Pressable
                className="mx-3 items-center justify-center border border-[#d9dfeb] bg-[#f8fafc]"
                style={{ width: socialSize, height: socialSize, borderRadius: socialSize / 2 }}
              >
                <FontAwesome5 name="apple" size={tiny ? 24 : 26} color="#0d1228" />
              </Pressable>
            </View>

            <Text
              className="mt-5 text-center text-[#8d9ab2]"
              style={{ fontSize: tiny ? 12 : 13, lineHeight: tiny ? 17 : 18 }}
            >
              By continuing, you agree to our{' '}
              <Text className="text-[#7f8fa9] underline">Terms</Text> and{' '}
              <Text className="text-[#7f8fa9] underline">Privacy Policy</Text>.
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
