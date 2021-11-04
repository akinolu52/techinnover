import { AppContainer, Card, Input, Tabs, Tag, Text } from '@components';
import food1 from '@images/food1.png';
import food2 from '@images/food2.png';
import food3 from '@images/food3.png';
import food4 from '@images/food4.png';
import user1 from '@images/user1.png';
import user2 from '@images/user2.png';
import user3 from '@images/user3.png';
import user4 from '@images/user4.png';
import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const DATA = [{
  avatar: user4,
  name: "Calum Lewis",
  image: food4,
  title: "Pancake",
  category: "Food",
  time: 60,

}, {
  avatar: user3,
  name: "Eilif Sonas",
  image: food1,
  title: "Pancake",
  category: "Food",
  time: 60,
}, {
  avatar: user1,
  name: "Elena Shelby",
  image: food3,
  title: "Pancake",
  category: "Food",
  time: 60,
}, {
  avatar: user2,
  name: "John Priyadi",
  image: food2,
  title: "Pancake",
  category: "Food",
  time: 60,
}];

const Category = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabChange = () => setActiveTab(activeTab === 1 ? 2 : 1);

  return (
    <AppContainer light={false}>
      <Container>
        <PaddedContent>
          <Input />

          <View style={{ marginVertical: 24 }}>
            <Text color="#3E5481" fontSize={17} lineHeight={27} spacing={0.5} fontWeight="bold" style={{ marginBottom: 16 }}>Category</Text>

            <TopContent>
              <Tag label="All" isActive={true} />
              <Tag label="Food" />
              <Tag label="Drink" />
            </TopContent>
          </View>
        </PaddedContent>

        <Spacer />

        <Tabs
          title1="Left"
          title2="Right"
          activeTab={activeTab}
          onPress={handleTabChange}
        />

        <BottomContent>

          {DATA.map((item, index) => (
            <CardContainer key={index} onPress={() => navigation.navigate('Details', { ...item })}>
              <Card {...item} />
            </CardContainer>
          ))}

        </BottomContent>
      </Container>
    </AppContainer >
  )
};

const Container = styled.View`
  flex: 1;
`;

const PaddedContent = styled.View`
  paddingHorizontal: 24px;
`;

const Spacer = styled.View`
  height: 9px;
  background-color: #F4F5F7;
`;

const TopContent = styled.View`
  alignItems: center;
  flex-direction: row;
  width: 100%;
`;

const BottomContent = styled.View`
  flexDirection: row;
  flexWrap: wrap;
  alignItems: flex-start;
  justifyContent: space-between;
  paddingHorizontal: 24px;
  marginTop: 24px;
`;

const CardContainer = styled.Pressable`
  width: 47%;
`;


export default Category;
