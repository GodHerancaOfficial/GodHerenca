import { Text, View, TouchableWithoutFeedback } from "react-native";
import { DropDownStyle } from "../../styles/component";
import { useState, useCallback } from "react";
import { MaterialIcons } from "@expo/vector-icons";

interface Prop{
    lists: any[],
    onChange?: any,
    placeholder: string,
    value?: string,
};

export default function DropDown({lists, onChange, placeholder, value}:Prop): any {
    const [selected, setSelected] = useState<string>((value)?value:"");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handlePressForList = (title:string, id:any):void => {
        setSelected(title);
        setIsOpen(!isOpen);
        onChange(title, id);
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{
            setIsOpen(!isOpen);
        }}>
            <View style={[DropDownStyle.container, {height: (isOpen)?undefined:55}]}>
                <View style={DropDownStyle.defualtView}>
                    <Text style={[DropDownStyle.dropDownText, {color: (selected=="")?'#A5A5A5':'#000000'}]}>
                        {(selected=="")?placeholder: selected}
                    </Text>
                    <MaterialIcons name="arrow-drop-down" color={"#000000"} size={24} />
                </View>

                {/**Drop Down Options */}
                <View style={[DropDownStyle.dropDownOptions, {display: (isOpen)?undefined:'none'}]}>
                    {
                        lists.map((list)=>(
                            <TouchableWithoutFeedback key={list.id} onPress={()=>{handlePressForList(list.title, list.id)}}>
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