import { StatusBar } from 'expo-status-bar';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useRef, useState } from 'react';
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
    <SafeAreaView className="flex-1 bg-[#f4f5fb]">
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View className="flex-1 px-6 pb-6 pt-2">
          <View className="items-center" style={{ marginTop: headerTop }}>
            <View className="mb-[14px] h-16 w-16 items-center justify-center rounded-full bg-[#eaeafd]">
              <FontAwesome5 name="user-shield" size={28} color="#575ce7" />
            </View>
            <Text className="text-2xl font-bold leading-[30px] text-[#0a1430]">Verify Your Identity</Text>
            <Text className="mt-2 text-center text-sm leading-5 text-[#6b7896]">
              Enter the 5-digit code sent to your email.
            </Text>
          </View>

          <View className="mt-6 flex-row items-center justify-between">
            {digits.map((d, i) => (
              <TextInput
                key={i}
                ref={inputs[i]}
                value={d}
                onChangeText={(v) => setDigit(i, v)}
                onKeyPress={({ nativeEvent }) => onKeyPress(i, nativeEvent.key)}
                keyboardType="number-pad"
                maxLength={1}
                className="border-2 border-[#e0e6f2] bg-white text-[20px] font-bold text-[#0a1430]"
                style={{ width: boxSize, height: boxSize, borderRadius: 12 }}
                textAlign="center"
              />
            ))}
          </View>

          <Pressable
            className="mt-[22px] items-center justify-center bg-[#575ce7]"
            style={{ height: buttonHeight, borderRadius: Math.round(buttonHeight / 2.8), opacity: allFilled ? 1 : 0.5 }}
            disabled={!allFilled}
            onPress={allFilled ? onNext : undefined}
          >
            <Text className="text-sm font-bold text-white">Verify Code</Text>
          </Pressable>

          <View className="mt-[14px] flex-row items-center justify-center">
            <Text className="text-xs text-[#7b89a6]">Didn't receive the code?</Text>
            <Pressable>
              <Text className="ml-1.5 text-xs font-bold text-[#10d0a5]">Resend Code</Text>
            </Pressable>
          </View>

          <Pressable className="mt-auto flex-row items-center justify-center pt-[18px]" onPress={onBack}>
            <FontAwesome5 name="arrow-left" size={14} color="#6b7896" />
            <Text className="ml-1.5 text-[13px] font-semibold text-[#6b7896]">
              Back to Forgot Password
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
