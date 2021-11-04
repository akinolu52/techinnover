import { createStackNavigator } from '@react-navigation/stack';
import Category from '@screens/Category';
import Details from '@screens/Details';
import React from 'react';

const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
);

export default HomeStack;