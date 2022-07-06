import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'
import SwipeLine from '../../../Elements/SwipeLine'
import { colors, config } from '../../../../theme/config'
import { IFilterContext } from '../../../../type/types'
import { FilterContext } from '../../../../context/filterContext'

const EpisodesModalHeader = () => {

    const { setEpisodesActiveEpisode, setEpisodesActiveName, episodesActiveEpisode, episodesActiveName } = useContext<IFilterContext>(FilterContext);

    const clearFilter = () => {
        setEpisodesActiveEpisode('');
        setEpisodesActiveName('');
    }

    return(
        <EpisodesHeader>
            <Wrapper>
                <SwipeLine/>
                <View style={{position: 'relative'}}>

                    {episodesActiveEpisode || episodesActiveName != '' ? 
                    <EpisodesHeaderClear onPress={() => clearFilter()}>
                        <Text style={{color: colors.violet, fontSize: 16}}>Clear</Text>
                    </EpisodesHeaderClear> : null}
                    <EpisodesHeaderTitle>
                        <EpisodesHeaderTitle>Filter</EpisodesHeaderTitle>
                        
                    </EpisodesHeaderTitle>
                    {/* <EpisodesHeaderButton>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>APPLY</Text>
                    </EpisodesHeaderButton> */}

                </View>
            </Wrapper>
        </EpisodesHeader>
    )
}

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`

const EpisodesHeader = styled.View`
    background-color: white; 
    padding-bottom: 20px;
`

const EpisodesHeaderTitle = styled.Text`
    color: ${colors.textTitle};
    font-size: 16px;
    font-weight: bold;
    margin: 0 auto;
    padding-top: 5px;
    padding-bottom: 15px;

`

const EpisodesHeaderClear = styled.TouchableOpacity`
    position: absolute;
    top: 6px;
    left: 0px;
`

const EpisodesHeaderButton = styled.TouchableOpacity`
    background-color: ${colors.violet};
    padding: 5px 10px;
    border-radius: 20px;
    position: absolute;
    right: 0;
`



export default EpisodesModalHeader;