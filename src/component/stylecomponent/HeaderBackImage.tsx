import { Image } from "react-native";
import { ImageAssets } from "../../../assets/ImageAssets";

const HeaderBackImage = () => (
    <Image
      testID="header-back-image"
      source={ImageAssets.back_icon}
      style={{ width: 20, height: 20, marginLeft: 2, marginTop: 4, }}
    />
  );

  export default HeaderBackImage;