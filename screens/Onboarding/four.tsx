import { View, Text, Image, TouchableWithoutFeedback } from "react-native"
import { Style, MoreGeneral } from "../../styles/onboarding"

export default function Four(): any{
    const image_four = require('../../assets/images/onboarding/image_three.png');

    return (
        <View style={[Style.container, MoreGeneral.container]}>
            <Image source={image_four} style={MoreGeneral.image} />
            <Text style={MoreGeneral.h2}>
                Product Delivery {'\n'}
            </Text>
            <Text style={[Style.p, MoreGeneral.two_p]}>
                Lorem ipsum dolor sit amet. Ut maiores voluptate qui doloremque consequuntur in mo {'\n\n\n\n\n'}
            </Text>

            <TouchableWithoutFeedback>
                    <Text style={Style.nextButton}>
                        NEXT
                    </Text>
                </TouchableWithoutFeedback>
        </View>
    )
}
