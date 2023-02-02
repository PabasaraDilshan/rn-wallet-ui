import {View, Text} from 'react-native';
import React from 'react';
import {BalanceCardProps} from './types';
import styled from 'styled-components/native';
import BalanceCard from './BalanceCard';
const BalanceCardSectionBackground = styled.View`
  flex: 2;
  width: 100%;
  align-items: center;
  flex: 2;
`;
const BalanceCardSection: React.FC<BalanceCardProps> = props => {
  return (
    <BalanceCardSectionBackground>
      <BalanceCard {...props} />
    </BalanceCardSectionBackground>
  );
};

export default BalanceCardSection;
