import React from 'react';
import { SafeAreaView } from "react-native"
import styled from 'styled-components/native';
import { ButtonHeader } from '../Buttons';




const CharatersHeader: React.FC = () => {
    return(
        <SafeAreaView>
            <Wrapper>
                <ButtonHeader title='Filter'/>
            </Wrapper>
        </SafeAreaView>
    )
}

const Wrapper = styled.View`
    display: flex;
    align-items: flex-end;
    margin: 0 auto;
    width: 90%;
`




export default CharatersHeader;