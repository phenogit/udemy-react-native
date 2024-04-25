import { styles } from "./Header.style";
import { Text, Image } from "react-native";
import logoImage from "../../assets/logo.png";

export function Header() {
  return (
    <>
      <Image style={styles.logo} source={logoImage} resizeMode="contain" />
      <Text style={styles.subtitle}>You probably have something to do</Text>
    </>
  );
}
