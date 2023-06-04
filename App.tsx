import { useFonts } from 'expo-font';
import MainApp from './main_app';
import { AppContextProvider } from './contexts/AppContext';

export default function App() {
  const [loaded] = useFonts({
    Nunito: require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
    Raleway: require('./assets/fonts/Raleway-Regular.ttf'),
    'Raleway-bold': require('./assets/fonts/Raleway-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <AppContextProvider>
      <MainApp />
    </AppContextProvider>
  );
}
