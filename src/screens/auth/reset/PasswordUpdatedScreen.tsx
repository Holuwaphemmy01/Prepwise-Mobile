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
  StyleSheet,
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
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        style={styles.keyboardArea}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.container}>
          <View style={styles.cardShell}>
            <View style={styles.topBar} />

            <View style={styles.centerArea}>
              <View style={styles.iconWrapOuter}>
                <View style={styles.iconGlow} />
                <Animated.View style={[styles.iconCircle, { transform: [{ scale }] }]}>
                  <FontAwesome5 name="check" size={44} color="#00e5a8" />
                </Animated.View>
              </View>

              <View style={styles.glassPanel}>
                <Text style={styles.heading}>Password Updated!</Text>
                <Text style={styles.body}>
                  Your security is our priority. Your password has been changed successfully. Use your
                  new credentials to access Prepwise.
                </Text>
              </View>

              <Pressable style={styles.primaryButton} onPress={onLogin}>
                <Text style={styles.primaryButtonText}>Back to Login</Text>
              </Pressable>

              <View style={styles.patternBlock}>
                <View style={styles.patternGradient} />
                <View style={styles.patternDots} />
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f6f6f8',
  },
  keyboardArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
    justifyContent: 'center',
  },
  cardShell: {
    borderRadius: 18,
    backgroundColor: '#ffffff',
    shadowColor: '#111827',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 22,
    elevation: 6,
    overflow: 'hidden',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 6,
  },
  centerArea: {
    paddingHorizontal: 22,
    paddingBottom: 24,
    paddingTop: 10,
    alignItems: 'center',
  },
  iconWrapOuter: {
    marginTop: 10,
    marginBottom: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconGlow: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(0,229,168,0.16)',
    shadowColor: '#00e5a8',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 24,
  },
  iconCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: '#00e5a8',
    backgroundColor: 'rgba(0,229,168,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  glassPanel: {
    width: '100%',
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: 'rgba(255,255,255,0.86)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.7)',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    textAlign: 'center',
  },
  body: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 20,
    color: '#4b5563',
    textAlign: 'center',
  },
  primaryButton: {
    marginTop: 22,
    width: '100%',
    height: 56,
    borderRadius: 18,
    backgroundColor: '#5b5fef',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#5b5fef',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.28,
    shadowRadius: 20,
    elevation: 6,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  patternBlock: {
    marginTop: 26,
    width: '100%',
    height: 80,
    borderRadius: 18,
    overflow: 'hidden',
  },
  patternGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(91,95,239,0.09)',
  },
  patternDots: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.22,
  },
});

