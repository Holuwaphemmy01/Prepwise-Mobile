import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

type PasswordUpdatedScreenProps = {
  onLogin: () => void;
};

export function PasswordUpdatedScreen({ onLogin }: PasswordUpdatedScreenProps) {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.08,
          duration: 600,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 600,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [scale]);
  return (
    <SafeAreaView className="flex-1 bg-[#f6f6f8]">
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View className="flex-1 justify-center px-6 pb-6">
          <View className="overflow-hidden rounded-[18px] bg-white">
            <View className="px-5 pb-1.5 pt-4" />

            <View className="items-center px-[22px] pb-6 pt-[10px]">
              <View className="mb-[18px] mt-[10px] items-center justify-center">
                <View className="absolute h-[120px] w-[120px] rounded-full bg-[#00e5a829]" />
                <Animated.View
                  className="h-24 w-24 items-center justify-center rounded-full border-4 border-[#00e5a8] bg-[#00e5a81f]"
                  style={{ transform: [{ scale }] }}
                >
                  <FontAwesome5 name="check" size={44} color="#00e5a8" />
                </Animated.View>
              </View>

              <View className="w-full rounded-[18px] border border-[#ffffffe0] bg-[#ffffffdb] px-5 py-[18px]">
                <Text className="text-center text-2xl font-bold text-[#0f172a]">Password Updated!</Text>
                <Text className="mt-[10px] text-center text-sm leading-5 text-[#4b5563]">
                  Your security is our priority. Your password has been changed successfully. Use your
                  new credentials to access Prepwise.
                </Text>
              </View>

              <Pressable className="mt-[22px] h-14 w-full items-center justify-center rounded-[18px] bg-[#5b5fef]" onPress={onLogin}>
                <Text className="text-base font-bold text-white">Back to Login</Text>
              </Pressable>

              <View className="mt-[26px] h-20 w-full overflow-hidden rounded-[18px]">
                <View className="absolute inset-0 bg-[#5b5fef17]" />
                <View className="absolute inset-0" style={{ opacity: 0.22 }} />
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
