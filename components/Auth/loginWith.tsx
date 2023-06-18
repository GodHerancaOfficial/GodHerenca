import { FontAwesome5 } from '@expo/vector-icons';
import { View, TouchableWithoutFeedback } from 'react-native';
import { AuthLayout_Style } from '../../styles/Auth';
import { auth, provider, signInWithPopup } from '../../firebaseConfig';

export default function LoginWith(): any {

    const handleGoogleReq = async () => {
        // alert('Sign in with google');
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <View style={AuthLayout_Style.socialsContainer}>
            <TouchableWithoutFeedback>
                <View style={AuthLayout_Style.socials}>
                    <FontAwesome5 name="facebook" size={24} color="#1877F2" />
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => { handleGoogleReq() }}>
                <View style={AuthLayout_Style.socials}>
                    <FontAwesome5 name="google" size={24} color="#4c8b5f" />
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}