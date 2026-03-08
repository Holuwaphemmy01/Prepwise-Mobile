import { StatusBar } from 'expo-status-bar';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

type WelcomeScreenProps = {
  onGetStarted: () => void;
  onLoginPress: () => void;
};

export function WelcomeScreen({ onGetStarted, onLoginPress }: WelcomeScreenProps) {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <View style={styles.bgCircleOne} />
        <View style={styles.bgCircleTwo} />
        <View style={styles.bgCircleThree} />

        <View style={styles.loginTop}>
          <Pressable onPress={onLoginPress}>
            <Text style={styles.loginText}>Log In</Text>
          </Pressable>
        </View>

        <View style={styles.heroSection}>
          <View style={styles.logoWrap}>
            <View style={styles.logoShadow} />

            <View style={styles.logoCard}>
              <FontAwesome name="graduation-cap" size={40} color="#5965F2" />
            </View>
          </View>

          <Text style={styles.brand}>Prepwise</Text>

          <Text style={styles.headline}>Study Smarter.</Text>
          <Text style={styles.subHeadline}>
            <Text style={styles.scoreBlue}>Score </Text>
            <Text style={styles.scoreGreen}>Higher.</Text>
          </Text>

          <Text style={styles.description}>
            AI-powered education tailored for your{'\n'}high-stakes exam success.
          </Text>
        </View>

        <View style={styles.footer}>
          <Pressable style={styles.ctaButton} onPress={onGetStarted}>
            <Text style={styles.ctaText}>Get Started</Text>
            <FontAwesome5 name="arrow-right" size={20} color="#061430" />
          </Pressable>

          <Text style={styles.legalText}>
            By continuing, you agree to our <Text style={styles.legalLink}>Terms</Text> &{' '}
            <Text style={styles.legalLink}>Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f4f5fb',
  },
  container: {
    flex: 1,
    overflow: 'hidden',
    paddingHorizontal: 24,
    position: 'relative',
  },
  bgCircleOne: {
    position: 'absolute',
    right: -120,
    top: -220,
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: '#ececfc',
    opacity: 0.85,
  },
  bgCircleTwo: {
    position: 'absolute',
    left: -170,
    bottom: 120,
    width: 430,
    height: 430,
    borderRadius: 215,
    backgroundColor: '#e5f8f3',
    opacity: 0.55,
  },
  bgCircleThree: {
    position: 'absolute',
    left: 44,
    top: '60%',
    width: 116,
    height: 116,
    borderRadius: 58,
    borderColor: '#cbd9fe',
    borderWidth: 1.5,
    backgroundColor: '#eaf8f5',
  },
  loginTop: {
    marginTop: 12,
    alignItems: 'flex-end',
  },
  loginText: {
    fontSize: 21,
    fontWeight: '400',
    color: '#677590',
  },
  heroSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 36,
  },
  logoWrap: {
    width: 250,
    height: 230,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoShadow: {
    position: 'absolute',
    right: 24,
    top: 8,
    width: 156,
    height: 156,
    borderRadius: 34,
    borderWidth: 1,
    borderColor: '#f5f6ff',
    backgroundColor: '#eef0f8',
    transform: [{ rotate: '11deg' }],
  },
  logoCard: {
    width: 176,
    height: 176,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9faff',
  },
  brand: {
    marginTop: 8,
    fontSize: 60,
    lineHeight: 66,
    letterSpacing: 0.3,
    fontWeight: '700',
    color: '#5563ef',
  },
  headline: {
    marginTop: 32,
    fontSize: 23,
    lineHeight: 28,
    fontWeight: '700',
    color: '#07132e',
  },
  subHeadline: {
    marginTop: 4,
    fontSize: 23,
    lineHeight: 28,
    fontWeight: '700',
  },
  scoreBlue: {
    color: '#4f67ea',
  },
  scoreGreen: {
    color: '#10d0a5',
  },
  description: {
    marginTop: 28,
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 25,
    color: '#607291',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 18,
  },
  ctaButton: {
    width: '100%',
    height: 64,
    borderRadius: 20,
    backgroundColor: '#15d3a8',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaText: {
    marginRight: 14,
    fontSize: 16,
    fontWeight: '700',
    color: '#05142f',
  },
  legalText: {
    marginTop: 28,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22,
    color: '#8f9cb3',
  },
  legalLink: {
    color: '#7f8fa8',
    textDecorationLine: 'underline',
  },
});
