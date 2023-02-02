import {View, Text} from 'react-native';
import React from 'react';
import {AmountProps} from './types';
import styled from 'styled-components/native';
import SmallText from '../Texts/SmallText';
import {colors} from '../colors';
import RegularText from '../Texts/RegularText';

const AmountSectionBackground = styled.View`
  flex: 1;
  width: 100%;
  padding-top: 5px;
  align-items: center;
`;
const AmountSection: React.FC<AmountProps> = props => {
  return (
    <AmountSectionBackground>
      <SmallText textStyles={{color: colors.secondary, marginBottom: 1}}>
        Total Balance
      </SmallText>
      <RegularText textStyles={{color: colors.secondary, fontSize: 28}}>
        $ {props.balance}
      </RegularText>
    </AmountSectionBackground>
  );
};

export default AmountSection;
