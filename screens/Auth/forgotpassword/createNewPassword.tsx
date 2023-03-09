import { Text, View, Image } from "react-native";
import { ForgotPasswordLayout } from "../../../layouts";
import { ForgotLayoutStyle } from "../../../styles/Auth";
import { Button, Input } from "../../../components/common";
import { MaterialIcons } from "@expo/vector-icons";

export default function CreateNewPassword({ navigation }: any): any {
    const image = require('../../../assets/images/forgot_password/screen2.png');

    return (
        <ForgotPasswordLayout navigateBack={navigation.pop}>
            <View style={[ForgotLayoutStyle.contentContainer, { paddingHorizontal: 20 }]}>
                <Image source={image} style={[ForgotLayoutStyle.imageStyle]} />

                <Text style={[ForgotLayoutStyle.text, { width: '100%', marginVertical: 20 }]}>
                    Create Your New Password
                </Text>

                <Input
                    placeholder="New Password"
                    secureTextEntry={true}
                    icon={
                        <MaterialIcons name="lock" size={24} color={'#000'} />
                    }
                />

                <Button
                    onPress={() => { }}
                    disabled={true}
                    style={[ForgotLayoutStyle.btnStyle, { width: '100%' }]}>
                    Continue
                </Button>
            </View>
        </ForgotPasswordLayout>
    )
}
