import { AppContainer, Dot, SmallIcon, Text } from '@components';
import back from '@icons/back.png';
import check from '@icons/check.png';
import heart from '@icons/Heart.png';
import food from '@images/food.png';
import React, { useEffect, useRef } from 'react';
import { Platform, Pressable } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import styled from 'styled-components/native';

const List = ({ content }) => (
  <ListContainer>
    <ListCheck source={check} />
    <Text fontSize={15} lineHeight={25} spacing={0.5}>{content}</Text>
  </ListContainer>
)

const Details = ({ route, navigation }) => {
  const data = route?.params;
  const modalizeRef = useRef(null);

  const openModal = () => modalizeRef.current?.open();
  const closeModal = () => modalizeRef.current?.close();

  const goBack = () => {
    closeModal();
    return navigation.goBack();
  }

  useEffect(() => {
    openModal();
  }, []);

  return (
    <AppContainer padded={false}>
      <Container>
        <Background source={food}>
          <Pressable onPress={goBack}>
            <BackIcon image={back} />
          </Pressable>
        </Background>

      </Container>
      <Portal>
        <Modalize
          ref={modalizeRef}
          alwaysOpen={500}
          modalTopOffset={100}
          handleStyle={{
            backgroundColor: '#D0DBEA',
            top: 40
          }}
          overlayStyle={{
            backgroundColor: 'transparent'
          }}
          rootStyle={{
            opacity: 1,
          }}
          modalHeight={503}
          modalStyle={{
            height: 500,
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            paddingTop: 44,
          }}
        >
          <Content>
            <>
              <Text color="#3E5481" fontSize={17} lineHeight={27} fontWeight="bold" spacing={0.5}>{data?.title}</Text>

              <ContentCont style={{ marginTop: 8 }}>
                <Text color="#9FA5C0">
                  {data?.category}
                </Text>
                <Dot />
                <Text color="#9FA5C0">
                  {data?.time} mins
                </Text>
              </ContentCont>


              <ContentCont style={{ marginTop: 16, justifyContent: 'space-between' }}>
                <ContentCont>
                  <ImageContainer>
                    <Avatar source={data?.avatar} />
                  </ImageContainer>

                  <Text color="#3E5481" fontSize={15} lineHeight={25} spacing={0.5}>{data?.name}</Text>
                </ContentCont>
                <ContentCont>
                  <ImageContainer style={{ backgroundColor: '#1FCC79' }}>
                    <Heart source={heart} />
                  </ImageContainer>

                  <Text color="#3E5481" fontSize={15} lineHeight={25} spacing={0.5}>
                    273 Likes
                  </Text>
                </ContentCont>
              </ContentCont>
            </>

            <Spacer />

            <>
              <Text color="#3E5481" fontSize={17} lineHeight={27} fontWeight="bold" spacing={0.5}>{data?.title}</Text>

              <Text color="#9FA5C0" fontSize={17} lineHeight={27} spacing={0.5} style={{ marginTop: 8 }}>
                Your recipe has been uploaded, you can see it on your profile. Your recipe has been uploaded, you can see it on your
              </Text>
            </>

            <Spacer />

            <>
              <Text color="#3E5481" fontSize={17} lineHeight={27} fontWeight="bold" spacing={0.5} style={{ marginBottom: 16 }}>Ingredients</Text>

              <List content="4 Eggs" />
              <List content="1/2 Butter" />
              <List content="1/2 Butter" />
            </>

          </Content>
        </Modalize>
      </Portal>
    </AppContainer>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
  resizeMode: center;
  backgroundColor: white;
  height: 375px;
`;

const BackIcon = styled(SmallIcon)`
  top: ${Platform.OS === 'android' ? "30px" : "60px"};
  left: 24px;
  borderRadius: 56px;
  width: 56px;
  height: 56px;
`;

const Content = styled.View`
  paddingTop: 44px;
  paddingHorizontal: 24px;
  margin-top: -32px;
  border-top: 32px;
  flex: 1;
  background-color: #FFFFFF;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`;

const ContentCont = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ImageContainer = styled.View`
  width: 33px;
  height: 33px;
  border-radius: 32px;
  margin-right: 8px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 33px;
  height: 33px;
`;

const Heart = styled.Image`
  width: 16px;
  height: 16px;
`;

const Spacer = styled.View`
  height: 1px;
  marginVertical: 16px;
  background-color: #D0DBEA;
`;

const ListContainer = styled.View`
  flexDirection: row;
  alignItems: center;
  marginBottom: 16px;
`;

const ListCheck = styled.Image`
  width: 24px;
  height: 24px;
  marginRight: 8px;
`;

export default Details;
