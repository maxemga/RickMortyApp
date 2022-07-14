import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Text } from 'react-native';
import { ArrowBack } from 'src/components/icons/ModalIcons/Arrow';
import { ActiveDataContext } from 'src/context/activeData';
import { colors } from 'src/theme/config';
import { IActiveDataContext } from 'src/type/types';
import styled from 'styled-components/native';

export const CharatersCardHeader: React.FC = () => {
    const navigation = useNavigation();
    const { charatersCardActiveName } = useContext<IActiveDataContext>(ActiveDataContext);

    return (
        <HeaderBlock>
            <Wrapper>
                <CharatersHeaderButton onPress={() => navigation.goBack()}>
                    <ArrowBack />
                    <Text style={{ color: colors.violet, fontSize: 16, marginLeft: 7 }}>Back</Text>
                </CharatersHeaderButton>
                <HeaderTitle>
                    <HeaderTitleText>{charatersCardActiveName}</HeaderTitleText>
                </HeaderTitle>
            </Wrapper>
        </HeaderBlock>
    );
};

const HeaderBlock = styled.SafeAreaView`
    background-color: ${colors.white.dim};
    opacity: 0.92;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.silver.lunar};
`;

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
    justify-content: center;
`;

const CharatersHeaderButton = styled.TouchableOpacity`
    padding: 5px 10px;
    position: absolute;
    left: -15px;
    flex-direction: row;
    z-index: 1;
`;

const HeaderTitle = styled.View`
    margin-top: 15px;
    margin-bottom: 15px;
    justify-content: center;
    flex-direction: row;
`;

const HeaderTitleText = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: ${colors.blue.dark};
`;
