import { Image } from "react-native";
import emptyImage from "../assets/images/no-data.png";

const EmptyList = () => {
    return (
        <Image source={emptyImage} resizeMode="contain" />
    );
}
export default EmptyList;