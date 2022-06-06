import React from 'react';
import { SafeAreaView, View } from "react-native"
import { Text } from 'react-native-paper';
import styled from 'styled-components/native';
import { colors } from '../../theme/config';
import { ButtonHeader } from '../Buttons';

interface IHeader {
    title: string
}

const Header: React.FC<IHeader>= ({ title }) => {
    return(
        <HeaderBlock>
            <Wrapper>
                <HeaderButton>
                    <ButtonHeader title='Filter'/>
                </HeaderButton>
                <HeaderTitle>
                    <HeaderTitleText>{title}</HeaderTitleText>
                </HeaderTitle>
            </Wrapper>
        </HeaderBlock>
    )
}

const HeaderBlock = styled.SafeAreaView`
    background-color: rgba(248, 248, 248, 0.92);
`

const Wrapper = styled.View`
    display: flex;
    margin: 0 auto;
    width: 90%;
`

const HeaderButton = styled.View`
    align-items: flex-end;
`

const HeaderTitle = styled.View`
    margin-top: 20px;
    margin-bottom: 10px;

`

const HeaderTitleText = styled.Text`
    font-size: 34px;
    font-weight: bold;
    color: ${colors.text}
`




export default Header;