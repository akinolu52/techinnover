import React, { memo } from 'react';
import styled from 'styled-components/native';

export default Text = memo(props => {
    const {
        children,
        color, fontWeight = "medium",
        fontSize = 12, lineHeight = 14.52,
        spacing = 0.2,
        align = "left", style, ...rest
    } = props;
    return (
        <StyledText
            adjustsFontSizeToFit
            color={color}
            style={style}
            align={align}
            spacing={spacing}
            fontSize={fontSize}
            lineHeight={lineHeight}
            fontWeight={fontWeight}
            {...rest}
        >
            {children}
        </StyledText>
    )
});

const StyledText = styled.Text`
    fontWeight: ${props =>
        props.fontWeight === 'bold' ? '700' :
            props.fontWeight === 'semiBold' ? '600' : '500'};
    fontFamily: ${props =>
        props.fontWeight === 'bold' ? 'Inter-Bold' :
            props.fontWeight === 'semiBold' ? 'Inter-SemiBold' : 'Inter-Medium'};
    textAlign: ${props => props.align};
    fontSize:${props => props.fontSize}px;
    lineHeight:${props => props.lineHeight}px;
    color: ${props => props.color || '#2E3E5C'};
    letterSpacing: ${props => props.spacing}px;
`;
