import { Text, View, TouchableWithoutFeedback } from "react-native";
import { DropDownStyle } from "../../styles/component";
import { useState, useCallback } from "react";
import { MaterialIcons } from "@expo/vector-icons";

interface Prop{
    lists?:any[],
    setOption?: any,
    placeholder: string
};

export default function DropDown({lists, setOption, placeholder}:Prop): any {
    const [selected, setSelected] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handlePressForList = (title:string):void => {
        setSelected(title);
        setIsOpen(!isOpen);
        setOption(title);
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{
            setIsOpen(!isOpen);
        }}>
            <View style={[DropDownStyle.container, {overflow: (isOpen)?undefined:'hidden'}]}>
                <Text style={[DropDownStyle.dropDownText, {color: (selected=="")?'#A5A5A5':'#000000'}]}>
                    {(selected=="")?placeholder: selected}
                </Text>
                <MaterialIcons name="arrow-drop-down" color={"#000000"} size={24} />

                {/**Drop Down Options */}
                <View style={DropDownStyle.dropDownOptions}>
                    {
                        lists.map((list)=>(
                            <TouchableWithoutFeedback key={list.id} onPress={()=>{handlePressForList(list.title)}}>
                                <Text style={[DropDownStyle.dropDownText, {paddingVertical: 10}]}>
                                    {list.title}
                                </Text>
                            </TouchableWithoutFeedback>
                        ))
                    }
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}