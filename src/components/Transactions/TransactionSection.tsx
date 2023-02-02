import {View, Text} from 'react-native';
import React from 'react';
import {TransactionProps, TransactionSectionProps} from './types';
import styled from 'styled-components/native';
import {colors} from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import {Icon} from '@rneui/themed';
import TransactionItem from './TransactionItem';
const TransactionSectionBackground = styled.View`
  width: 100%;
  padding-horizontal: 25px;
  padding-top: 5px;
  flex: 2;
`;

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TransactionList = styled.FlatList`
  width: 100%;
`;
const TransactionSection: React.FC<TransactionSectionProps> = props => {
  return (
    <TransactionSectionBackground>
      <TransactionRow style={{marginBottom: 25}}>
        <RegularText textStyles={{fontSize: 19, color: colors.secondary}}>
          Transaction
        </RegularText>
        <SmallText textStyles={{color: colors.secondary}}>
          Recent
          <Icon
            color={colors.graydark}
            size={13}
            name="caret-down"
            type="ionicon"
          />
        </SmallText>
      </TransactionRow>
      <TransactionList
        data={props.data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 25}}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({item}: any) => <TransactionItem {...item} />}
      />
    </TransactionSectionBackground>
  );
};

export default TransactionSection;
