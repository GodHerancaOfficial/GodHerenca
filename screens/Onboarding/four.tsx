import { View, Text, Image, TouchableWithoutFeedback } from "react-native"
import { Style, MoreGeneral } from "../../styles/onboarding"
import { useContext } from "react";
import { AppContext } from "../../contexts";

interface FProps {
    changeViews: any,
};

export default function Four({ changeViews }: FProps): any {
    const image_four = require('../../assets/images/onboarding/image_three.png');
    const { setIsOpened, storeDevice } = useContext<any>(AppContext);

    return (
        <View style={[Style.container, MoreGeneral.container]}>
            <Image source={image_four} style={MoreGeneral.image} />
            <Text style={MoreGeneral.h2}>
                Product Delivery {'\n'}
            </Text>
            <Text style={[Style.p, MoreGeneral.two_p]}>
                Lorem ipsum dolor sit amet. Ut maiores voluptate qui doloremque consequuntur in mo {'\n\n\n\n\n'}
            </Text>

            <TouchableWithoutFeedback onPress={() => {
                if (!storeDevice?.()) {
                    console.error("Couldn't store device");
                    return;
                }
                setIsOpened(true);
            }}>
                <Text style={Style.nextButton}>
                    NEXT
                </Text>
            </TouchableWithoutFeedback>
        </View>
    )
}
