import { useContext, useEffect } from "react"
import AuthNavs from "./AuthNavs";
import MainScreen from "./MainScreens";
import AppContext, { AppContextProvider } from "../contexts/AppContext";

export default function MainNavs(): any {
    const { loggedIn, setLoggedIn, checkLogin } = useContext<any>(AppContext);

    const runOnStart = async (): Promise<any> => {
        if (!await checkLogin?.()) {
            setLoggedIn(false);
            return;
        }
        setLoggedIn(true);
    }

    useEffect(() => {
        runOnStart();
    }, []);

    return (
        (!loggedIn) ? <AuthNavs /> : <MainScreen />
    )
}
