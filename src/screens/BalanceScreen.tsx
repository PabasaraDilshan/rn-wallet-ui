import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Container} from '../components/shared';
import {colors} from '../components/colors';
import RootStack, {RootStackParamList} from '../navigators/RootStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AmountSection from '../components/Balance/AmountSection';
import BalanceCardSection from '../components/Balance/BalanceCardSection';
import ButtonSection from '../components/Balance/ButtonSection';
const BalanceContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  padding: 25px;
  flex: 1;
  padding-top: 60px;
`;
type Props = NativeStackScreenProps<RootStackParamList, 'BalanceScreen'>;
const BalanceScreen: React.FC<Props> = ({route}) => {
  return (
    <BalanceContainer>
      <StatusBar barStyle={'light-content'} />
      <AmountSection balance={route?.params?.balance} />
      <BalanceCardSection {...route?.params} />
      <ButtonSection />
    </BalanceContainer>
  );
};

export default BalanceScreen;
