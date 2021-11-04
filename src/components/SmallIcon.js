import React, { memo } from 'react';
import styled from 'styled-components/native';

export default SmallIcon = memo(({ image, style }) => (
    <IconContainer style={style}>
        <Icon source={image} />
    </IconContainer>
));

const IconContainer = styled.View`
    position: absolute;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);
`;

const Icon = styled.Image`
    width: 20px;
    height: 20px;
`;
