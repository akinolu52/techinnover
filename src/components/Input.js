import search from '@icons/search.png';
import React, { memo } from 'react';
import styled from 'styled-components/native';

export default Input = memo(props => {
    const {
        placeholder = "Search"
    } = props;
    return (
        <Container>
            <Icon source={search} />
            <StyledInput
                placeholder={placeholder}
                placeholderTextColor="#9FA5C0"
                clearButtonMode="always"
            />
        </Container>
    )
});

const Container = styled.View`
    height: 56px;
    border-radius: 32px;
    paddingHorizontal: 24px;
    background-color: #F4F5F7;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const Icon = styled.Image`
    width: 18px;
    height: 18px;
    padding: 6px;
    margin-right: 8px;
`;

const StyledInput = styled.TextInput`
    flex: 1;
    height: 40px;
`;