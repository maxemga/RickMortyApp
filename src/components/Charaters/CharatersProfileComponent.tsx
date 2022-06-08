import React from 'react'
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native'
import styled from 'styled-components'
import { colors } from '../../theme/config'


const CharatersProfileComponent = () => {
    return(
        <CharatersProfileBlock>
         
                <CharatersProfileContent>
                    <CharatersContentImage>

                        <CharatersContentImageBackground>
                            <Image source={require('./../../assets/images/CharatersIcons/CharatersProfileBackground.jpg')} style={{width: '100%', height: 100}}></Image>
                            <CharatersContentImageIcon>
                                <Image source={require('./../../assets/images/CharatersIcons/CharatersProfileBackground.jpg')} style={{width: '100%', height: '100%', borderRadius: 100, zIndex: 100}} />
                            </CharatersContentImageIcon>                           
                        </CharatersContentImageBackground>

                        <CharatersContentImageCard>
                            <Wrapper style={{display: 'flex', alignItems: 'center'}}>
                                <CharatersContentImageCardStatus>Alive</CharatersContentImageCardStatus>
                                <CharatersContentImageCardName>Rick Sanges</CharatersContentImageCardName>
                                <CharatersContentImageGender>HUMAN</CharatersContentImageGender>
                            </Wrapper>
                        </CharatersContentImageCard>

                        <ScrollView>
                            <CharaterContentInfo>
                                <Wrapper>
                                    <CharaterInfoTitle>Informations</CharaterInfoTitle>
                                </Wrapper>
                            </CharaterContentInfo>

                            <CharaterContentInfo>
                                <Wrapper>
                                    <CharaterInfoTitle>Episodes</CharaterInfoTitle>
                                </Wrapper>
                            </CharaterContentInfo>
                        </ScrollView>

                    </CharatersContentImage>
                </CharatersProfileContent>
           
        </CharatersProfileBlock>
    )
}

const CharatersProfileBlock = styled.View`
    
`

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`

const CharatersProfileContent= styled.View`

`

const CharatersContentImage= styled.View`

`

const CharatersContentImageBackground= styled.View`
    position: relative;
    display: flex;
    align-items: center;  
    z-index: 100;
`
const CharatersContentImageIcon= styled.View`
    overflow: hidden;
    box-sizing: border-box;
    padding: 8px;
    height: 150px;
    width: 150px;
    position: absolute;
    bottom: -75px;
    background-color: #F2F2F7;
    margin: 0 auto;
    borderRadius: 100px;  
`

const CharatersContentImageCard = styled.View`
    background-color: #F2F2F7;
    padding-top: 100px;
    padding-bottom: 20px;
`

const CharatersContentImageCardStatus = styled.Text`
    color: ${colors.textDiscription};
`
const CharatersContentImageCardName = styled.Text`
    color: ${colors.textTitle};
    font-weight: bold;
    font-size: 30px;
`
const CharatersContentImageGender = styled.Text`
    font-weight: bold;
    color: ${colors.textNavigaion}
    margin-top: 5px;
`

const CharaterContentInfo = styled.View`
    background-color: white;
`

const CharaterInfoTitle = styled.Text`
    color: ${colors.textNavigaion};
    font-size: 22px;
    font-weight: bold;
    paddingVertical: 15px;
    borderBottomWidth: 3px;
    borderBottomColor: red;

`


export default CharatersProfileComponent;