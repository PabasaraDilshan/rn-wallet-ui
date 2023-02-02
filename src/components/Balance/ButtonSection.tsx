import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import RegularButton from '../Buttons/RegularButton';
import {colors} from '../colors';
import { Icon } from '@rneui/themed';

const ButtonSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
`;

const ButtonSection = () => {
  return (
    <ButtonSectionBackground>
      <RegularButton onPress={() => {}}>
        Cancel{' '}
        <Icon name="card" size={17} color={colors.white} type="ionicon" />
      </RegularButton>
    </ButtonSectionBackground>
  );
};

export default ButtonSection;
