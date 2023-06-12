import { useContext, useEffect } from "react";
import { AppContext } from "./contexts";
import { OnboardingNavs, MainNavs } from "./navigators";

const MainApp = (): JSX.Element => {
    const { isOpened, setIsOpened, checkDevice } = useContext<any>(AppContext);

    const runOnStart = async () => {
        if (!await checkDevice?.()) {
            setIsOpened(false);
            // console.log(isOpened);      // Remove during production
            return;
        }
        setIsOpened(true);
        // console.log(isOpened);          // Remove during production
    }

    useEffect(() => {
        runOnStart();
    }, []);

    return (
        (isOpened) ? <MainNavs /> : <OnboardingNavs />
    )
}

export default MainApp;
