import { View, Text, ViewStyle, StyleProp, GestureResponderEvent, TextStyle } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../colors';
import RegularText from '../Texts/RegularText';

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;
interface ButtonProps {
    btnStyles?: StyleProp<ViewStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    textStyles?: StyleProp<TextStyle>;
    children: React.ReactNode;
}
const RegularButton: React.FC<ButtonProps> = (props) => {
    return (
        <ButtonView onPress={props.onPress} style={props.btnStyles}>
            <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
        </ButtonView>
    );
};

export default RegularButton;
