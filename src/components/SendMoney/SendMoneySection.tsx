import {View, Text, Alert} from 'react-native';
import React from 'react';
import {SendMoneySectionProps} from './types';
import styled from 'styled-components/native';
import {colors} from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import SendMoneyItem from './SendMoneyItem';
import BottomSheet from '@gorhom/bottom-sheet';

const SendMoneySectionBackground = styled.View`
  width: 100%;
  padding-top: 15px;
  background-color: ${colors.white};
`;

const SendMoneyRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-horizontal: 25px;
`;
const SendMoneyList = styled.FlatList`
  width: 100%;
  flex: auto;
  min-height: 80%;
  padding-horizontal: 25px;
`;
const TextButton = styled.TouchableOpacity``;

const SendMoneySection: React.FC<SendMoneySectionProps> = props => {
  const sheetRef = React.useRef<BottomSheet>(null);
  const snapPoints = React.useMemo(() => ['10%', '30%'], []);
  return (
    <>
      <BottomSheet ref={sheetRef} snapPoints={snapPoints} index={1}>
        <SendMoneySectionBackground>
          <SendMoneyRow style={{marginBottom: 25}}>
            <RegularText textStyles={{fontSize: 19, color: colors.secondary}}>
              Send money to
            </RegularText>
            <TextButton
              onPress={() => {
                Alert.alert('Add');
              }}>
              <SmallText
                textStyles={{fontWeight: 'bold', color: colors.tertiary}}>
                +Add
              </SmallText>
            </TextButton>
          </SendMoneyRow>
          <SendMoneyList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{alignItems: 'flex-start'}}
            data={props.data}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({item}: any) => <SendMoneyItem {...item} />}
          />
        </SendMoneySectionBackground>
      </BottomSheet>
    </>
  );
};

export default SendMoneySection;
