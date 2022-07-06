import React, { useContext } from 'react'
import { Platform, Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'
import SwipeLine from '../../../Elements/SwipeLine'
import { colors, config } from '../../../../theme/config'
import { IFilterContext } from '../../../../type/types'
import { FilterContext } from '../../../../context/filterContext'
import { useNavigation } from '@react-navigation/native'

const CharatersModalHeader = () => {
    const navigation = useNavigation();

    const { charatersActiveGender, charatersActiveName, charatersActiveSpecies, charatersActiveStatus,
    setCharatersActiveGender, setCharatersActiveName, setCharatersActiveSpecies, setCharatersActiveStatus} = useContext<IFilterContext>(FilterContext);

    const clearFilter = () => {
        setCharatersActiveGender('');
        setCharatersActiveName('');
        setCharatersActiveSpecies('');
        setCharatersActiveStatus('');
    }
    
    return(
        <CharatersHeader>
            <Wrapper>
                <SwipeLine/>
                <View style={{position: 'relative'}}>

                    {charatersActiveGender || charatersActiveName || charatersActiveSpecies || charatersActiveStatus != '' ? 
                    <CharatersHeaderClear onPress={() => clearFilter()}>
                        <Text style={{color: colors.violet, fontSize: 16}}>Clear</Text>
                    </CharatersHeaderClear> : null}
                    <CharatersHeaderTitle>
                        <CharatersHeaderTitle>Filter</CharatersHeaderTitle>
                        
                    </CharatersHeaderTitle>
                    {/* <CharatersHeaderButton>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>APPLY</Text>
                    </CharatersHeaderButton> */}

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
`

const CharatersHeaderTitle = styled.Text`
    color: ${colors.textTitle};
    font-size: 16px;
    font-weight: bold;
    margin: 0 auto;
    padding-top: 5px;
    padding-bottom: 15px;

`

const CharatersHeaderClear = styled.TouchableOpacity`
    position: absolute;
    top: 6px;
    left: 0px;
`

const CharatersHeaderButton = styled.TouchableOpacity`
    background-color: ${colors.violet};
    padding: 5px 10px;
    border-radius: 20px;
    position: absolute;
    right: 0;
`



export default CharatersModalHeader;