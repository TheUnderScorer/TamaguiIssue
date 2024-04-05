import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Card, TamaguiProvider, Text } from 'tamagui';
import tamaguiConfig from './tamagui.config';

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <StatusBar style="auto" />
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
        }}
      >
        <Card
          elevation="$4"
          height={100}
          width={100}
          backgroundColor="green"
          animation="medium"
          onPress={() => {
            console.log('press');
          }}
          pressTheme
          pressStyle={{
            scale: 0.9,
          }}
          enterStyle={{
            opacity: 0.5,
            y: 20,
          }}
        >
          <Text>Contents</Text>
        </Card>
      </SafeAreaView>
    </TamaguiProvider>
  );
}
