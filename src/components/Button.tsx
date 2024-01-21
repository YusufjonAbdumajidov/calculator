import { TouchableOpacity, Text } from "react-native";
import { Styles } from "../styles/Styles";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
}

export default function Button({  title, onPress, isBlue, isGray }: ButtonProps) {
    return (
        <TouchableOpacity 
            style={
                isBlue 
                ? Styles.btnBlue 
                : isGray 
                ? Styles.btnGray : Styles.btnLight
            } 
            onPress={onPress}>
            <Text 
               style={
                   isBlue || isGray 
                   ? Styles.smallTextLight
                   ? Styles.smallTextLight 
                   : Styles.smallTextDark : Styles.smallTextDark
                }
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}




