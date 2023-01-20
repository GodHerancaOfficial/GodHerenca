import { FontAwesome5 } from '@expo/vector-icons';
import { View } from 'react-native';
import { AuthLayout_Style } from '../../styles/Auth';

export default function LoginWith(): any {
    return (
        <View style={AuthLayout_Style.socialsContainer}>
            <View style={AuthLayout_Style.socials}>
                <FontAwesome5 name="facebook" size={24} color="#1877F2" />
            </View>
            <View style={AuthLayout_Style.socials}>
                <FontAwesome5 name="google" size={24} color="#4c8b5f" />
            </View>
        </View>
    )
}