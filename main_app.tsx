import { useContext, useEffect } from "react";
import { AppContext } from "./contexts";
import { OnboardingNavs, MainNavs } from "./navigators";

const MainApp = (): JSX.Element => {
    const { isOpened, setIsOpened, checkDevice } = useContext<any>(AppContext);

    useEffect(() => {
        if (!checkDevice?.()) {
            setIsOpened(false);
            return;
        }
        setIsOpened(true);
    }, []);

    return (
        (isOpened) ? <MainNavs /> : <OnboardingNavs />
    )
}

export default MainApp;
