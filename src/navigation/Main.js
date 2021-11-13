// import { COLORS, ROUTES } from '@constants';
import edit from '@icons/Edit.png';
import home from '@icons/Home.png';
import notification from '@icons/Notification.png';
import profile from '@icons/Profile.png';
import scan from '@icons/Scan.png';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Category from '@screens/Category';
import React from 'react';
import { Image, Platform, Pressable, StyleSheet, View } from 'react-native';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const CustomButton = ({ children, onPress }) => (
    <Pressable onPress={onPress}
        style={{
            top: -25,
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <View style={{
            width: 56,
            height: 56,
            borderRadius: 56,
            paddingTop: 13,
            backgroundColor: '#1FCC79',
        }}>{children}</View>
    </Pressable>
);

const MainNav = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: styles.container,
            screenContainerStyle: styles.container,
            tabBarActiveTintColor: '#1FCC79',
            tabBarInactiveTintColor: '#9FA5C0',
            tabBarActiveBackgroundColor: null,
            tabBarLabelStyle: styles.drawerLabelStyle,
            tabBarItemStyle: styles.tabBarItemStyle,
            tabBarStyle: styles.tabBarStyle,
        }}
    >
        <Tab.Screen name="Home" component={HomeStack}
            options={{
                title: "Home",
                tabBarIcon: () => <Image source={home} style={styles.icon} />
            }}
        />

        <Tab.Screen name="Upload" component={Category}
            options={{
                tabBarIcon: () => <Image source={edit} style={styles.icon} />
            }}
        />

        <Tab.Screen name="Scan" component={Category}
            options={{
                tabBarIcon: () => <Image source={scan} style={styles.icon} />,
                tabBarLabelStyle: {
                    top: 20
                },
                tabBarButton: props => <CustomButton {...props} />
            }}
        />

        <Tab.Screen name="Notification" component={Category}
            options={{
                tabBarIcon: () => <Image source={notification} style={styles.icon} />
            }}
        />

        <Tab.Screen name="Profile" component={Category}
            options={{
                tabBarIcon: () => <Image source={profile} style={styles.icon} />
            }}
        />
    </Tab.Navigator>
);

export default MainNav;

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
    drawerLabelStyle: {
        fontSize: 10,
        lineHeight: 12,
        fontWeight: "500",
        fontFamily: 'Inter-Medium',
        paddingTop: 0,
    },
    container: {
        backgroundColor: "white",
    },
    tabBarItemStyle: {
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    tabBarStyle: {
        height: Platform.OS === "android" ? 60 : 90,
        shadowColor: "rgba(0, 70, 207, 0.03)",
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 56,

        elevation: 5,
    }
});
