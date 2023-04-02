import React from "react";
import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Posts from "./PostsScreen/Posts";
import Map from "./MapScreen/MapScreen";
import Comments from './CommentsScreen/CommentsScreen'

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="Posts"
        component={Posts}
      />
      <NestedScreen.Screen name="Comments" component={Comments} />
      <NestedScreen.Screen name="Map" component={Map} />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
