import { Text, View, Pressable, Image } from "react-native";
import styles from "./styleHomePages";
import ContainerAll from "../../Components/ContainerAll";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePosts from "../CreatePostsScreen/CreatePosts";
import Profile from "../ProfileScreen/ProfileScreen";
import Posts from "../PostsScreen/PostScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const Home = ({ user }) => {

  return (
    <>
      <Tab.Navigator
        initialRouteName="Publications"
        screenOptions={{
          tabBarActiveTintColor: "red",
        }}
      >
        <Tab.Screen
          name="Publications"
          component={Posts}
          tabBarShowLabel={false}
          options={{
            tabBarIcon: () => (
              <Image
                source={require("../../images/grid-min.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
            headerRight: ({ navigation }) => (
              <Pressable onPress={() => user(false)} style={{ paddingRight: 20 }}>
                <Text>Log out</Text>
              </Pressable>
            ),
          }}
        />
        <Tab.Screen
          name="Create posts"
          component={CreatePosts}
          tabBarShowLabel={false}
          options={{
            tabBarIcon: () => (
              <Image
                source={require("../../images/new-min.png")}
                style={{ width: 70, height: 40 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          tabBarShowLabel={false}
          options={{
            tabBarIcon: () => (
              <Image
                source={require("../../images/user-min.png")}
                style={{ width: 40, height: 40 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Home;
