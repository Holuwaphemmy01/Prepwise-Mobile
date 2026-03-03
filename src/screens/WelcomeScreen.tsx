import { StatusBar } from 'expo-status-bar';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

type WelcomeScreenProps = {
  onGetStarted: () => void;
  onLoginPress: () => void;
};

export function WelcomeScreen({ onGetStarted, onLoginPress }: WelcomeScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.page}>
        <View style={styles.bgTopGlow} />
        <View style={styles.bgBottomGlow} />
        <View style={styles.bgCircle} />

        <View style={styles.topRow}>
          <Pressable onPress={onLoginPress}>
            <Text style={styles.loginText}>Log In</Text>
          </Pressable>
        </View>

        <View style={styles.centerBlock}>
          <View style={styles.heroWrap}>
            <View style={styles.backTile} />

            <View style={styles.logoTile}>
              <FontAwesome name="graduation-cap" size={40} color="#5965F2" />
            </View>
          </View>

          <Text style={styles.brandTitle}>Prepwise</Text>

          <Text style={styles.primaryLine}>Study Smarter.</Text>
          <Text style={styles.secondaryLine}>
            <Text style={styles.secondaryBlue}>Score </Text>
            <Text style={styles.secondaryGreen}>Higher.</Text>
          </Text>

          <Text style={styles.description}>
            AI-powered education tailored for your{'\n'}high-stakes exam success.
          </Text>
        </View>

        <View style={styles.bottomBlock}>
          <Pressable style={styles.ctaButton} onPress={onGetStarted}>
            <Text style={styles.ctaText}>Get Started</Text>
            <FontAwesome5 name="arrow-right" size={24} color="#061430" />
          </Pressable>

          <Text style={styles.termsText}>
            By continuing, you agree to our <Text style={styles.linkText}>Terms</Text> &{' '}
            <Text style={styles.linkText}>Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f5fb',
  },
  page: {
    flex: 1,
    paddingHorizontal: 24,
    position: 'relative',
    overflow: 'hidden',
  },
  bgTopGlow: {
    position: 'absolute',
    top: -220,
    right: -120,
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: '#ececfc',
    opacity: 0.85,
  },
  bgBottomGlow: {
    position: 'absolute',
    left: -170,
    bottom: 120,
    width: 430,
    height: 430,
    borderRadius: 215,
    backgroundColor: '#e5f8f3',
    opacity: 0.55,
  },
  bgCircle: {
    position: 'absolute',
    left: 44,
    top: '60%',
    width: 116,
    height: 116,
    borderRadius: 58,
    borderWidth: 1.5,
    borderColor: '#cbd9fe',
    backgroundColor: '#eaf8f5',
    shadowColor: '#728bca',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 14,
    elevation: 4,
  },
  topRow: {
    alignItems: 'flex-end',
    marginTop: 12,
  },
  loginText: {
    fontSize: 21,
    fontWeight: '400',
    color: '#677590',
  },
  centerBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 34,
  },
  heroWrap: {
    width: 250,
    height: 230,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 18,
  },
  backTile: {
    position: 'absolute',
    top: 8,
    right: 24,
    width: 156,
    height: 156,
    borderRadius: 34,
    backgroundColor: '#eef0f8',
    borderWidth: 1,
    borderColor: '#f5f6ff',
    transform: [{ rotate: '11deg' }],
    shadowColor: '#6872b5',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 5,
  },
  logoTile: {
    width: 176,
    height: 176,
    borderRadius: 40,
    backgroundColor: '#f9faff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6672d6',
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.2,
    shadowRadius: 22,
    elevation: 9,
  },
  brandTitle: {
    marginTop: 8,
    fontSize: 60,
    lineHeight: 66,
    fontWeight: '700',
    letterSpacing: 0.3,
    color: '#5563ef',
  },
  primaryLine: {
    marginTop: 30,
    fontSize: 23,
    lineHeight: 28,
    fontWeight: '700',
    color: '#07132e',
  },
  secondaryLine: {
    marginTop: 4,
    fontSize: 23,
    lineHeight: 28,
    fontWeight: '700',
  },
  secondaryBlue: {
    color: '#4f67ea',
  },
  secondaryGreen: {
    color: '#10d0a5',
  },
  description: {
    marginTop: 28,
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 25,
    color: '#607291',
  },
  bottomBlock: {
    paddingBottom: 18,
    alignItems: 'center',
  },
  ctaButton: {
    width: '100%',
    height: 98,
    borderRadius: 30,
    backgroundColor: '#15d3a8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#14d3a8',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.3,
    shadowRadius: 22,
    elevation: 9,
  },
  ctaText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#05142f',
    marginRight: 14,
  },
  termsText: {
    marginTop: 28,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22,
    color: '#8f9cb3',
  },
  linkText: {
    textDecorationLine: 'underline',
    color: '#7f8fa8',
  },
});
