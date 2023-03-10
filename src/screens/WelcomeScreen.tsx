import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {Container} from '../components/shared';
import {colors} from '../components/colors';
import background from '../assets/bgs/background_v1.png';
import BigText from '../components/Texts/BigText';
import SmallText from '../components/Texts/SmallText';
import RegularButton from '../components/Buttons/RegularButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigators/RootStack';
const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;
const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;
const BottomSection = styled.View`
  width: 100%;
  flex: 1;
  padding: 25px;
  justify-content: flex-end;
`;
type Props = NativeStackScreenProps<RootStackParamList, 'WelcomeScreen'>;

const WelcomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText textStyles={{width: '70%', marginBottom: 25}}>
            Best way to track your money
          </BigText>
          <SmallText textStyles={{width: '70%', marginBottom: 25}}>
            Best payment method, connects your money to friends, forever.
          </SmallText>
          <RegularButton
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}>
            Get Started
          </RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
