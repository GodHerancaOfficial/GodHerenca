import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import AuthNavs from "./AuthNavs";
import MainScreen from "./MainScreens";

export default function MainNavs(): any{
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    useEffect(()=>{
        (async function():Promise<void> {
            const val = await AsyncStorage.getItem('jwt');
            if(val != null){
                setLoggedIn(true);
            }
        })();
    },[]);
    return (
        ((loggedIn)?<AuthNavs />:<AuthNavs />)
    )
}
