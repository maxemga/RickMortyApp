import React from 'react';
import styled from 'styled-components';
//FIXME: В чем смысл? Можно просто сразу импортнуть SwipeLineBlock
const SwipeLine = () => {
  return <SwipeLineBlock />;
};
//FIXME: цвет брать из colors

const SwipeLineBlock = styled.View`
  margin: 10px auto;
  background-color: #c7c7cc;
  height: 5px;
  width: 40px;
  border-radius: 5px;
`;

export default SwipeLine;
