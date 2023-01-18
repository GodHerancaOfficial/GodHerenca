import { View, Text, TouchableWithoutFeedback, ImageBackground } from "react-native"
import { Style } from "../../styles/onboarding"

export default function One(props:any): any{
    const backgroundImage = require('../../assets/images/onboarding/image.png');

    return (
        <ImageBackground style={Style.container} source={backgroundImage} resizeMode="cover">
            <Text style={[Style.h2, Style.textColorWhite]}>
                Welcome to {'\n'}
                <Text style={Style.h1}>
                    GodHerenca
                </Text>
            </Text>
            <Text style={[Style.p, Style.textColorWhite]}>
                The best e-commerce app of the century for your daily needs {'\n\n\n'}
            </Text>
            <View style={{display: 'flex', alignItems: 'center', width: '100%'}}>
                <TouchableWithoutFeedback onPress={()=>{
                    props.changeTabs('two');
                }}>
                    <Text style={Style.getStartedButton}>
                        GET STARTED
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        </ImageBackground>
    )
}
