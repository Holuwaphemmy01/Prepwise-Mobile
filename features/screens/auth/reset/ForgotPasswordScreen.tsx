import { StatusBar } from 'expo-status-bar';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
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
    <SafeAreaView className="flex-1 bg-[#f4f5fb]">
      <StatusBar style="dark" />

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View className="flex-1 px-6 pb-6 pt-2">
          <View className="items-center" style={{ marginTop: headerTop + 6 }}>
            <View
              className="items-center justify-center bg-[#e8e9f4]"
              style={{ width: logoSize, height: logoSize, borderRadius: logoSize / 2 }}
            >
              <FontAwesome name="graduation-cap" size={28} color="#5965F2" />
            </View>
            <Text className="mt-[18px] text-[22px] font-bold leading-[26px] text-[#565ce7]">
              Prepwise
            </Text>
          </View>

          <View className="mt-[18px] items-center justify-center">
            <View className="h-40 w-40 items-center justify-center rounded-full bg-[#eef0ff]">
              <FontAwesome5 name="lock" size={tiny ? 34 : 40} color="#5965F2" />
            </View>
          </View>

          <View className="mt-[18px] items-center px-2">
            <Text className="text-2xl font-bold leading-[30px] text-[#0a1430]">Forgot Password?</Text>
            <Text className="mt-2 text-center text-sm leading-5 text-[#6b7896]">
              Don't worry. Enter the email address associated with your account.
            </Text>
          </View>

          <View className="mt-[18px]">
            <View
              className="justify-center border border-[#d9dfeb] bg-white px-[22px]"
              style={{ height: inputHeight, borderRadius: Math.round(inputHeight / 2.8) }}
            >
              <TextInput
                placeholder="Email address"
                placeholderTextColor="#8e9db5"
                style={{ fontSize: 14, color: '#1a2a47' }}
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <Pressable
              className="mt-4 items-center justify-center bg-[#575ce7]"
              style={{ height: buttonHeight, borderRadius: Math.round(buttonHeight / 2.8) }}
              onPress={onVerify}
            >
              <Text className="text-sm font-bold text-white">Reset Password</Text>
            </Pressable>
          </View>

          <Pressable className="mt-auto flex-row items-center justify-center pt-5" onPress={onBack}>
            <FontAwesome5 name="arrow-left" size={14} color="#6b7896" />
            <Text className="ml-1.5 text-[13px] font-semibold text-[#6b7896]">Back to Login</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
