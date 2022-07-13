import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../theme/config';

export const SwipeLine = () => <SwipeLineBlock />;

const SwipeLineBlock = styled.View`
  margin: 10px auto;
  background-color: ${colors.silver.darkBright};
  height: 5px;
  width: 40px;
  border-radius: 5px;
`;


