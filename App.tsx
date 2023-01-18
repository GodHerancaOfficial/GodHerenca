import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { MainNavs, OnboardingNavs } from './navigators';

export default function App() {
  const [isOpended, setIsOpened] = useState<boolean>(false);

  const storeDevice = async ():Promise<void> => {
    await AsyncStorage.setItem('isOpened', 'true');
  }

  const changeViews = async ():Promise<void> => {
    try {
      await storeDevice();
      setIsOpened(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    (async function(){
      const val = await AsyncStorage.getItem('isOpened');
      if(val != null){
        setIsOpened(true);
      }
    })();
  }, []);

  return (
    ((isOpended)?<MainNavs />:<OnboardingNavs changeViews={changeViews} />)
  );
}
