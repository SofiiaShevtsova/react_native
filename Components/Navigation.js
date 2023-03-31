import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home/Home";
import CreatePosts from "../Screens/CreatePostsScreen/CreatePosts";
import Profile from "../Screens/ProfileScreen/ProfileScreen";


const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Publications" component={Home} />
        <Tab.Screen name="Create posts" component={CreatePosts} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>{" "}
    </>
  );
};

export default Navigation;
