import React, { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Text from './Text';

export default Tabs = memo(({ title1, title2, onPress, activeTab = 1 }) => {
    const leftTabStyle = activeTab === 1 ? { ...tabStyles.tab, ...tabStyles.activeTab } : { ...tabStyles.inactiveTab, ...tabStyles.tab };
    const rightTabStyle = activeTab === 2 ? { ...tabStyles.tab, ...tabStyles.activeTab } : { ...tabStyles.tab, ...tabStyles.inactiveTab }

    const leftTextStyle = activeTab === 1 ? tabStyles.activeTabText : tabStyles.inactiveTabText;
    // const rightTextStyle = activeTab === 2 ? tabStyles.activeTabText : tabStyles.inactiveTabText;
    return (
        <View style={tabStyles.tabContainer}>
            <View style={tabStyles.tabContent}>
                <Pressable onPress={() => onPress(1)} style={leftTabStyle}>
                    <Text style={leftTextStyle}>{title1}</Text>
                </Pressable>
            </View>
            <View style={tabStyles.tabContent}>
                <Pressable onPress={() => onPress(2)} style={rightTabStyle}>
                    <Text style={leftTextStyle}>{title2}</Text>
                </Pressable>
            </View>
        </View>
    );
})

const tabStyles = StyleSheet.create({
    tabContent: {
        width: '50%',
    },
    tabContainer: {
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#D0DBEA',
    },
    tab: {
        paddingTop: 24,
        paddingBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeTab: {
        // backgroundColor: '#1FCC79',
        borderColor: '#1FCC79',
        borderBottomWidth: 3,
    },
    inactiveTab: {
        // borderBottomWidth: 1,
        // borderColor: '#D0DBEA',
        backgroundColor: '#FFF',
    },
    activeTabText: {
        color: '#3E5481',
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 18,
        letterSpacing: 0.0004375
    },
    inactiveTabText: {
        color: '#9FA5C0',
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 18,
        letterSpacing: 0.0004375
    },
});