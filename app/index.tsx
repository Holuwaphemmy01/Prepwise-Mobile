import { Text, View } from 'react-native';

export default function WelcomeRoute() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
      <Text style={{ fontSize: 20, color: '#0a1430' }}>Prepwise</Text>
      <Text style={{ marginTop: 8, color: '#677590' }}>Minimal start screen</Text>
    </View>
  );
}
