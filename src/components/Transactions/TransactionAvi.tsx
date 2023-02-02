import {View, Text} from 'react-native';
import React from 'react';
import {TransactionAviProps} from './types';
import styled from 'styled-components/native';
import {Icon} from '@rneui/themed';

const StyledView = styled.View`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
const TransactionAvi: React.FC<TransactionAviProps> = props => {
  return (
    <StyledView style={{backgroundColor: props.background}}>
      <Icon color="white" name={props.icon} size={25} type="ionicon" />
    </StyledView>
  );
};

export default TransactionAvi;
