import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type WelcomeScreenProps = {
  onGetStarted: () => void;
  onLoginPress: () => void;
};

export function WelcomeScreen({ onGetStarted, onLoginPress }: WelcomeScreenProps) {
  return (
    <SafeAreaView className="flex-1 bg-[#f4f5fb]">
      <StatusBar style="dark" />

      <View className="relative flex-1 overflow-hidden px-6">
        <View
          className="absolute -right-[120px] -top-[220px] h-[500px] w-[500px] rounded-full bg-[#ececfc]"
          style={{ opacity: 0.85 }}
        />
        <View
          className="absolute -left-[170px] bottom-[120px] h-[430px] w-[430px] rounded-full bg-[#e5f8f3]"
          style={{ opacity: 0.55 }}
        />
        <View
          className="absolute left-11 top-[60%] h-[116px] w-[116px] rounded-full bg-[#fcece4]"
          style={{ opacity: 0.65 }}
        />

        <View className="mt-4 flex-row justify-end">
          <Pressable onPress={onLoginPress}>
            <Text className="text-base font-bold text-[#565ce7]">Log In</Text>
          </Pressable>
        </View>

        <View className="flex-1 items-center justify-center">
          <View className="mb-6 h-[100px] w-[100px] items-center justify-center">
            <View
              className="absolute h-full w-full rounded-[30px] bg-[#5965f2]"
              style={{ transform: [{ rotate: '15deg' }], opacity: 0.1 }}
            />

            <View className="h-full w-full items-center justify-center rounded-[30px] bg-white shadow-xl shadow-indigo-200">
              <FontAwesome name="graduation-cap" size={40} color="#5965F2" />
            </View>
          </View>

          <Text className="text-4xl font-extrabold tracking-tight text-[#0a1430]">Prepwise</Text>

          <Text className="mt-8 text-center text-[38px] font-black leading-[46px] text-[#0a1430]">
            Study Smarter.
          </Text>
          <Text className="text-center text-[38px] font-black leading-[46px]">
            <Text className="text-[#5965f2]">Score </Text>
            <Text className="text-[#10d0a5]">Higher.</Text>
          </Text>

          <Text className="mt-6 text-center text-lg leading-7 text-[#5a6b8a]">
            AI-powered education tailored for your{'\n'}high-stakes exam success.
          </Text>
        </View>

        <View className="mb-10 w-full">
          <Pressable
            className="h-16 w-full flex-row items-center justify-center rounded-2xl bg-[#5965f2] shadow-lg shadow-indigo-300"
            onPress={onGetStarted}
          >
            <Text className="mr-3 text-lg font-bold text-white">Get Started</Text>
            <FontAwesome5 name="arrow-right" size={20} color="white" />
          </Pressable>

          <Text className="mt-6 text-center text-xs leading-5 text-[#8d9ab2]">
            By continuing, you agree to our <Text className="text-[#7f8fa9] underline">Terms</Text> &{' '}
            <Text className="text-[#7f8fa9] underline">Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
