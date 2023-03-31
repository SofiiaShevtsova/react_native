import { Text, View, Pressable, Image } from "react-native";
import styles from "../Style/styleHomePages";
import ContainerAll from "../../Components/ContainerAll";

const Home = () => {
  return (
    <ContainerAll>
      <View style={styles.userContainer}>
        <View>
          <Image
            source={require("../../images/add-min.png")}
            style={{ width: 60, height: 60 }}
          />
        </View>
        <View>
          <Text style={styles.userName}>User name</Text>
          <Text style={styles.userEmail}>User email</Text>
        </View>
      </View>
      <View style={styles.containerNav}>
        <Pressable>
          <Image
            source={require("../../images/grid-min.png")}
            style={{ width: 24, height: 24 }}
          />
        </Pressable>
        <Pressable>
          <Image
            source={require("../../images/new-min.png")}
            style={{ width: 70, height: 40 }}
          />
        </Pressable>
        <Pressable>
          <Image
            source={require("../../images/user-min.png")}
            style={{ width: 24, height: 24 }}
          />
        </Pressable>
      </View>
    </ContainerAll>
  );
};

export default Home;
