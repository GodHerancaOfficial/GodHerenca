import { View, Text, Image } from "react-native"
import { Style, MoreGeneral } from "../../styles/onboarding"

export default function Three(): any{
    const image_two = require('../../assets/images/onboarding/image_two.png');

    return (
        <View style={[Style.container, MoreGeneral.container]}>
            <Image source={image_two} style={MoreGeneral.image} />
            <Text style={MoreGeneral.h2}>
                Easy and Safe Payment {'\n'}
            </Text>
            <Text style={[Style.p, MoreGeneral.two_p]}>
                Lorem ipsum dolor sit amet. Ut maiores voluptate qui doloremque consequuntur in mo {'\n\n\n\n\n'}
            </Text>

            <View style={[MoreGeneral.sectionIndicatorContainer]}>
                <View style={[MoreGeneral.dots]}></View>
                <View style={[MoreGeneral.dots, MoreGeneral.activeSection]}></View>
                <View style={[MoreGeneral.dots]}></View>
            </View>
        </View>
    )
}
