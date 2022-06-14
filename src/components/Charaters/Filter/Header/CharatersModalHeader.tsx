import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'
import SwipeLine from '../../../Elements/SwipeLine'
import { colors, config } from '../../../../theme/config'

const CharatersModalHeader = () => {
    return(
        <CharatersHeader>
            <Wrapper>
                <SwipeLine/>
                <View style={{display: 'flex', flexDirection: 'row'}}>
    
                    <CharatersHeaderTitle>Filter</CharatersHeaderTitle>
                    <CharatersHeaderButton>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>APPLY</Text>
                    </CharatersHeaderButton>

                </View>
            </Wrapper>
        </CharatersHeader>
    )
}

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`

const CharatersHeader = styled.View`
    background-color: white;
  
    padding-bottom: 20px;
    borderBottomWidth: 1px;
    borderBottomColor: ${colors.borderColor};
`

const CharatersHeaderTitle = styled.Text`
    background-color: white;
    color: ${colors.textTitle};
    font-size: ${config.textSizeTitleModal};
    font-weight: bold;

    margin: 0 auto;

`

const CharatersHeaderButton = styled.TouchableOpacity`
    background-color: ${colors.violet};
    padding: 5px 10px;
    border-radius: 20px;

`



export default CharatersModalHeader;