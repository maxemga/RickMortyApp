import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components'
import SwipeLine from '../../../Elements/SwipeLine'
import { colors, config } from '../../../../theme/config'
import { useNavigation } from '@react-navigation/native'
import { Screens } from '../../../Navigation/NavigationRoutes'
import ArrowBack from '../../../../assets/images/ModalIcons/Arrow'
import { IFilterContext } from '../../../../type/types'
import { FilterContext } from '../../../../context/filterContext'

const CharatersModalNameHeader = () => {
    const navigation = useNavigation();
    const { activeName, setActiveName } = useContext<IFilterContext>(FilterContext);

    return(
        <CharatersHeader>
            <Wrapper>
                <SwipeLine/>
                <View style={{position: 'relative'}}>
                    <CharatersHeaderTitle>
                        Name
                    </CharatersHeaderTitle>
                    <CharatersHeaderButton onPress={() => navigation.navigate(Screens.CHARATER_MODAL)}>
                        <ArrowBack/>
                        <Text style={{color: colors.violet, fontSize: 16, marginLeft: 7}}>Back</Text>
                    </CharatersHeaderButton>
                    {activeName != '' ? <CharatersHeaderClear onPress={() => setActiveName('')}>
                        <Text style={{color: colors.violet, fontSize: 16}}>Clear</Text>
                    </CharatersHeaderClear> : null}
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
    padding-bottom: 10px;
`
const CharatersHeaderClear = styled.TouchableOpacity`
    position: absolute;
    top: 6px;
    right: 0px;
`

const CharatersHeaderTitle = styled.Text`
    background-color: white;
    color: ${colors.textTitle};
    font-size: 16px;
    font-weight: bold;
    margin: 0 auto;
    padding-top: 5px;
    padding-bottom: 15px;

`


const CharatersHeaderButton = styled.TouchableOpacity`
    padding: 5px 10px;
    border-radius: 20px;
    position: absolute;
    left: -15px;
    display: flex;
    flex-direction: row;
`



export default CharatersModalNameHeader;