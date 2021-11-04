import React, { memo } from 'react';
import styled from 'styled-components/native';
import Text from './Text';

export default Tag = memo(props => {
    const { isActive, label = "All" } = props;
    return (
        <Container isActive={isActive}>
            <Content
                isActive={isActive}
                fontWeight="bold"
                fontSize={15}
                lineHeight={18.15}
                spacing={0.0004375}
            >{label}</Content>
        </Container>
    )
});

const Container = styled.View`
    height: 58px;
    paddingHorizontal: 24px;
    margin-right: 16px;
    border-radius: 32px;
    background-color: ${props => props.isActive ? '#1FCC79' : '#F4F5F7'};
    align-items: center;
    justify-content: center;
`;

const Content = styled(Text)`
    color: ${props => props.isActive ? '#FFFFFF' : '#9FA5C0'};
`;
