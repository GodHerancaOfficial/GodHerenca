import { Image, Modal, TouchableWithoutFeedback, View } from "react-native";
import { ModalStyle } from "../../styles/component";

interface ModalProps {
    visible: boolean,
    setVisible: any,
    children: JSX.Element,
    imageSource: any,
}

const GeneralModal = ({ visible, setVisible, children, imageSource }: ModalProps): any => {
    return (
        <Modal
            animationType="slide"
            visible={visible}
            onRequestClose={() => { setVisible(!visible) }}
            transparent={true}
        >

            <View style={{ width: '100%', backgroundColor: '#00000056', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={ModalStyle.mainView}>
                    <View style={ModalStyle.imageView}>
                        <Image source={imageSource} style={ModalStyle.image} />
                    </View>
                    {children}
                </View>
            </View>
        </Modal>
    )
}

export default GeneralModal;
