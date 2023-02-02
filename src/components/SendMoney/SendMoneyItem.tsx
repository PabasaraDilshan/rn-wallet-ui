import {View, Text, Alert} from 'react-native';
import React from 'react';
import {SendMoneyProps} from './types';
import styled from 'styled-components/native';
import {ScreenWidth} from '../shared';
import {colors} from '../colors';
import Profile from '../Header/Profile';
import SmallText from '../Texts/SmallText';
import RegularText from '../Texts/RegularText';
const SendMoneyItemContainer = styled.TouchableHighlight`
  height: 130px;
  width: ${ScreenWidth * 0.27}px;
  padding: 10px;
  border-radius: 15px;
  justify-content: space-around;
  margin: 0px 10px 10px 0px;
`;
const SendMoneyItem: React.FC<SendMoneyProps> = props => {
  return (
    <SendMoneyItemContainer
      onPress={() => {
        Alert.alert('Send Money!');
      }}
      style={{backgroundColor: props.background}}
      underlayColor={colors.secondary}>
      <><Profile img={props.img} imgContainerStyle={{marginBottom: 10}} />
      <SmallText
        textStyles={{textAlign: 'left', color: colors.white, fontSize: 12}}>
        {props.name}
      </SmallText>
      <RegularText textStyles={{color: colors.white}}>
        {props.amount}
      </RegularText></>
    </SendMoneyItemContainer>
  );
};

export default SendMoneyItem;
