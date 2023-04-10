import { View, ScrollView } from "react-native";
import { SetupStyle } from "../styles/Auth";
import { Header } from "../components/common";

interface Prop {
    navigateBack?: any,
    children: any,
    flashMessage?: JSX.Element;
}

export default function AccountSetupLayout({ navigateBack, children, flashMessage }: Prop): any {
    return (
      <View style={SetupStyle.container}>
        {/* {flashMessage} */}

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={SetupStyle.container1}>
            <Header goBack={navigateBack} text="Setup Your Account" />

            {children}
          </View>
        </ScrollView>
      </View>
    );
}
