import {View, Text, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import RegularText from '../Texts/RegularText';
import {colors} from '../colors';
import SmallText from '../Texts/SmallText';

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;
interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyles?: StyleProp<TextStyle>;
  subTextStyles?: StyleProp<TextStyle>;
}
const Greeting: React.FC<GreetingProps> = props => {
  return (
    <StyledView>
      <RegularText
        textStyles={[
          {color: colors.secondary, fontSize: 20},
          props.mainTextStyles,
        ]}>
        {props.mainText}
      </RegularText>
      <SmallText textStyles={[{color: colors.graydark}, props.subTextStyles]}>
        {props.subText}
      </SmallText>
    </StyledView>
  );
};

export default Greeting;
