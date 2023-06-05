import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AppContextType = {
    username?: string; setUsername?: any;
    password?: string; setPassword?: any;
    isOpened?: boolean; setIsOpened?: any;
    storeDevice?: () => Promise<boolean>; checkDevice?: () => Promise<boolean>;
    loggedIn?: boolean; setLoggedIn?: any;
    saveToken?: (token: string) => Promise<boolean>;
    checkLogin?: () => Promise<boolean>; logout?: () => Promise<boolean>;
}

const AppContext = createContext<AppContextType>({});

export const AppContextProvider = ({ children }: any) => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    const storeDevice = async (): Promise<boolean> => {
        try {
            await AsyncStorage.setItem('opened', 'true');
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    const saveToken = async (token: string): Promise<boolean> => {
        try {
            await AsyncStorage.setItem('accessToken', token);
            return true;
        } catch (error) {
            return false;
        }
    }

    const checkDevice = async (): Promise<boolean> => {
        try {
            let val = await AsyncStorage.getItem('opened');
            if (val !== null) {
                console.log(val);       // Remove during production
                return true;
            }
            return false;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    const checkLogin = async (): Promise<boolean> => {
        try {
            let val = await AsyncStorage.getItem('accessToken');
            if (val !== null) {
                console.log(val);
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    const logout = async (): Promise<boolean> => {
        try {
            await AsyncStorage.removeItem('accessToken');
            return true;
        } catch (error) {
            return false;
        }
    }

    const values: AppContextType = {
        username, setUsername,
        password, setPassword,
        storeDevice, isOpened,
        setIsOpened, checkDevice,
        saveToken, loggedIn, setLoggedIn,
        checkLogin, logout,
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;
