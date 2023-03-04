import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { ForgotPasswordLayout } from "../../../layouts";
import { ForgotLayoutStyle } from "../../../styles/Auth";
import { useEffect, useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from "../../../components/common";

export default function ForgotPassword({ navigation }: any): any {
    const imageSrc = require('../../../assets/images/forgot_password/screen1.png');
    const [selectedMethod, setSelectedMethod] = useState<string>('');
    const [btnActive, setBtnActive] = useState<boolean>(true);
    const [contactDetails] = useState<any[]>([
        {
            id: 1,
            userDetail: '+234 123 *** 840',
            type: 'phone',
        },
        {
            id: 2,
            userDetail: 'cman****@gmail.com',
            type: 'email',
        },
    ]);

    useEffect(() => {
        ((selectedMethod == "") ? setBtnActive(true) : setBtnActive(false));
    }, [selectedMethod])

    return (
        <ForgotPasswordLayout navigateBack={navigation.pop}>
            <View style={[ForgotLayoutStyle.contentContainer]}>
                <Image source={imageSrc} style={ForgotLayoutStyle.imageStyle} />

                <Text style={{ fontFamily: 'Raleway', fontSize: 15, }}>
                    {'\n'}
                    Select which contact details you wish to use in
                    resetting your password
                </Text>
                <View style={{ marginVertical: 30, width: '85%' }}>
                    {
                        contactDetails.map((contactDetail) => (
                            <TouchableWithoutFeedback key={contactDetail.id} onPress={() => { setSelectedMethod(contactDetail.type) }}>
                                <View style={[ForgotLayoutStyle.contactDetail, { borderColor: (selectedMethod == contactDetail.type) ? '#000000' : '#DEDEDE', borderWidth: (selectedMethod == contactDetail.type) ? 2 : 1 }]}>
                                    <MaterialIcons
                                        name={(contactDetail.type == "phone") ? 'sms' : "email"}
                                        size={27}
                                        color="black"
                                        style={{ backgroundColor: '#EDEDED', padding: 13, borderRadius: 100, }}
                                    />

                                    <Text style={{ fontFamily: 'Raleway', fontSize: 16, paddingHorizontal: 20 }}>
                                        Via {(contactDetail.type == "email") ? 'Email' : 'Sms'} {'\n'}
                                        <Text style={{ fontFamily: 'Raleway-bold', fontSize: 18, }}>{contactDetail.userDetail}</Text>
                                    </Text>
                                    <View></View>
                                </View>
                            </TouchableWithoutFeedback>
                        ))
                    }
                </View>

                <Button deactivated={btnActive} onPress={() => { null }}>
                    CONTINUE
                </Button>
            </View>
        </ForgotPasswordLayout>
    )
}
