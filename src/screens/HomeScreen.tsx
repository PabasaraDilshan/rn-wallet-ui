import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {Container} from '../components/shared';
import styled from 'styled-components/native';
import {colors} from '../components/colors';
import log1 from '../assets/cards/visa_white.png';
import log2 from '../assets/cards/mc.png';
import CardSection from '../components/Cards/CardSection';
import TransactionSection from '../components/Transactions/TransactionSection';
import portrait1 from '../assets/portraits/1.jpg';
import portrait2 from '../assets/portraits/2.jpg';
import portrait3 from '../assets/portraits/3.jpg';
import SendMoneySection from '../components/SendMoney/SendMoneySection';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigators/RootStack';
const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
  padding-top: 40px;
`;

export type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const cardsData = [
    {
      id: 1,
      accountNo: '38466556556',
      balance: 20000.15,
      alias: 'Work Debit',
      logo: log1,
    },
    {
      id: 2,
      accountNo: '38466556302',
      balance: 12000.15,
      alias: 'Personal Prepaid',
      logo: log2,
    },
    {
      id: 3,
      accountNo: '38466556547',
      balance: 5600.15,
      alias: 'School Prepaid',
      logo: log1,
    },
  ];

  const transactionData = [
    {
      id: 1,
      amount: '-$86.00',
      date: '14 Sep 2021',
      title: 'Taxi',
      subtitle: 'Uber Car',
      art: {
        background: colors.primary,
        icon: 'car',
      },
    },
    {
      id: 2,
      amount: '-$286.00',
      date: '14 Sep 2021',
      title: 'Shopping',
      subtitle: 'Ali express',
      art: {
        background: colors.tertiary,
        icon: 'cart',
      },
    },
    {
      id: 3,
      amount: '$586.00',
      date: '14 Aug 2021',
      title: 'Travel',
      subtitle: 'Emirates',
      art: {
        background: colors.accent,
        icon: 'airplane',
      },
    },
  ];
  const sendMoneyData = [
    {
      id: 1,
      amount: '2450.56',
      name: 'Coby Andoh',
      background: colors.tertiary,
      img: portrait1,
    },
    {
      id: 2,
      amount: '4450.56',
      name: 'Harleen Scot',
      background: colors.primary,
      img: portrait2,
    },
    {
      id: 3,
      amount: '6450.56',
      name: 'James Coby',
      background: colors.accent,
      img: portrait3,
    },
  ];
  return (
    <HomeContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor="transparent" />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

export default HomeScreen;
