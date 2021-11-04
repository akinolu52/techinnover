
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default AppContainer = ({ children, light = true, scroll = true, padded = true }) => {
    const insets = useSafeAreaInsets();
    return (
        <View
            style={{
                flex: 1,
                paddingTop: padded ? insets.top : 0,
                backgroundColor: '#FFFFFF',
            }}>
            <StatusBar barStyle={light ? 'light-content' : 'dark-content'} />

            <View style={appContainerStyles.content}>
                {scroll ? (
                    <ScrollView
                        contentContainerStyle={appContainerStyles.contentContainerStyle}
                        style={appContainerStyles.container}
                        showsVerticalScrollIndicator={false}
                    >
                        {children}
                    </ScrollView>
                ) : (
                    <>
                        {children}
                    </>
                )}
            </View>
        </View>
    );
};

const appContainerStyles = StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
    },
    container: {
        height: '100%',
        flex: 1,
        backgroundColor: 'transparent',
    },
    content: {
        flex: 1,
        width: '100%',
        // borderWidth: 1,
        // borderColor: 'red'
    }
});