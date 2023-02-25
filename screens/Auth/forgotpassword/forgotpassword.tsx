import { Image, Text, View } from "react-native";
import { ForgotPasswordLayout } from "../../../layouts";
import { ForgotLayoutStyle } from "../../../styles/Auth";
import { useState } from "react";

export default function ForgotPassword({ navigation }: any): any {
    const imageSrc = require('../../../assets/images/forgot_password/screen1.png');
    const [contactDetails, setContactDetails] = useState<any[]>([
        {
            id: 1,
            userDetail: '+234 123 *** 840',
        },
        {
            id: 2,
            userDetail: 'cman****@gmail.com',
        },
    ]);

    return (
        <ForgotPasswordLayout navigateBack={navigation.pop}>
            <View style={[ForgotLayoutStyle.contentContainer]}>
                <Image source={imageSrc} style={ForgotLayoutStyle.imageStyle} />

                <Text style={{fontFamily: 'Raleway', fontSize: 16,}}>
                    {'\n'}
                    Select which contact details you wish to use in
                    resetting your password
                </Text>
            </View>
        </ForgotPasswordLayout>
    )
}
