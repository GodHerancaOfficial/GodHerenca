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
            contactDetail: '+234 123 *** 840',
            contactType: 'phone',
        },
        {
            id: 2,
            contactDetail: 'cman****@gmail.com',
            contactType: 'email',
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
                            <TouchableWithoutFeedback key={contactDetail.id} onPress={() => { setSelectedMethod(contactDetail.contactType) }}>
                                <View style={[ForgotLayoutStyle.contactDetail, { borderColor: (selectedMethod == contactDetail.contactType) ? '#000000' : '#DEDEDE', borderWidth: (selectedMethod == contactDetail.type) ? 2 : 1 }]}>
                                    <MaterialIcons
                                        name={(contactDetail.contactType == "phone") ? 'sms' : "email"}
                                        size={27}
                                        color="black"
                                        style={{ backgroundColor: '#EDEDED', padding: 13, borderRadius: 100, }}
                                    />

                                    <Text style={{ fontFamily: 'Raleway', fontSize: 16, paddingHorizontal: 20 }}>
                                        Via {(contactDetail.contactType == "email") ? 'Email' : 'Sms'} {'\n'}
                                        <Text style={{ fontFamily: 'Raleway-bold', fontSize: 18, }}>{contactDetail.contactDetail}</Text>
                                    </Text>
                                    <View></View>
                                </View>
                            </TouchableWithoutFeedback>
                        ))
                    }
                </View>

                <Button disabled={btnActive} onPress={() => { navigation.navigate('EnterOTP') }}>
                    CONTINUE
                </Button>
            </View>
        </ForgotPasswordLayout>
    )
}
