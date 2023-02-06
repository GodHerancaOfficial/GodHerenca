import { View, ScrollView } from "react-native";
import { Header } from "../components/accountSetup";
import { SetupStyle } from "../styles/Auth";

interface Prop {
    navigateBack?: any,
    children: any,
}

export default function AccountSetupLayout({ navigateBack, children }: Prop): any {
    return (
        <View style={SetupStyle.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={SetupStyle.container1}>
                    <Header goBack={navigateBack} />

                    {children}
                </View>
            </ScrollView>
        </View>
    )
}
