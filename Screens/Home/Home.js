import { Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../redux/Auth/authOperation";
import CreatePosts from "./CreatePostsScreen/CreatePosts";
import Profile from "./ProfileScreen/ProfileScreen";
import PostsScreen from "./PostsScreen/PostScreen";

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logOutUser());
  };
  return (
    <Tab.Navigator
      initialRouteName="Publications"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 60,
          paddingHorizontal: 60,
          paddingTop: 10,
        },
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarInactiveBackgroundColor: "transparent",
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
        tabBarItemStyle: {
          height: 40,
          width: 70,
          borderRadius: 20,
        },
      }}
    >
      <Tab.Screen
        name="Publications"
        component={PostsScreen}
        tabBarShowLabel={false}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="grid" color={color} size={30} />
          ),
          headerRight: () => (
            <Pressable onPress={logoutUser} style={{ paddingRight: 20 }}>
              <MaterialCommunityIcons
                name="login"
                color="rgba(33, 33, 33, 0.8)"
                size={30}
              />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="Create posts"
        component={CreatePosts}
        tabBarShowLabel={false}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus" color={color} size={30} />
          ),
          tabBarStyle: {
            display: "none",
          },
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate("Publications")}
              style={{ paddingRight: 20 }}
            >
              <MaterialCommunityIcons
                name="arrow-left"
                color="rgba(33, 33, 33, 0.8)"
                size={30}
              />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        tabBarShowLabel={false}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
