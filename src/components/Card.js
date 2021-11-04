import love from '@icons/love.png';
import React, { memo } from 'react';
import styled from 'styled-components/native';
import Dot from './Dot';
import SmallIcon from './SmallIcon';
import Text from './Text';

export default Card = memo(props => {
    const { avatar, name, image, title, category, time } = props;
    return (
        <Container>
            <ContentCont>
                <Avatar source={avatar} />
                <Text color="">{name}</Text>
            </ContentCont>

            <Content>
                <Image source={image} />
                <SmallIcon image={love} style={{ top: 16, right: 16 }} />
            </Content>

            <Text fontSize={17} lineHeight={27}>{title}</Text>

            <ContentCont>
                <Text color="#9FA5C0">
                    {category}
                </Text>
                <Dot />
                <Text color="#9FA5C0">
                    {'>' + time} mins
                </Text>
            </ContentCont>

        </Container>
    )
});

const Container = styled.View`
    /* align-items: center; */
    width: 100%;
    margin-bottom: 32px;
    /* border: 1px solid red; */
`;

const ContentCont = styled.View`
    flex-direction: row;
    align-items: center;
`;

const Avatar = styled.Image`
    width: 31px;
    height: 31px;
    border-radius: 11px;
    margin-right: 8px;
`;

const Content = styled.View`
    position: relative;
    /* width: 151px; */
    width: 100%;
    marginVertical: 16px;
`;

const Image = styled.Image`
    width: 151px;
    width: 100%;
    height: 151px;
    border-radius: 11px;
    margin-right: 8px;
`;