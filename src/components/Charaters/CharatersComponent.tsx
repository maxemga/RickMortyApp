//FIXME: styled импортируется из styled-components/native
//FIXME: убрать неиспользуемые импорты
//FIXME: настроить абсолютные импорты
import styled from 'styled-components';
import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_ALL_USERS} from '../../db/query/requests';
import {CharatersContainer} from './CharatersCotainer';
import {ActivityIndicator, RadioButton} from 'react-native-paper';
import {colors} from '../../theme/config';
import {ISchemaUsers} from '../../db/query/schema';
import {IActiveDataContext, IFilterContext} from '../../type/types';
import {FilterContext} from '../../context/filterContext';

const CharatersComponent: React.FC = () => {
  const {
    charatersActiveGender,
    charatersActiveName,
    charatersActiveSpecies,
    charatersActiveStatus,
  } = useContext<IFilterContext>(FilterContext);
  const {data, loading, error, fetchMore, client} = useQuery<ISchemaUsers>(
    GET_ALL_USERS,
    {
      variables: {
        name: charatersActiveName,
        gender: charatersActiveGender,
        status: charatersActiveStatus,
        species: charatersActiveSpecies,
      },
    },
  );

  const FetchData = () => {
    if (data?.characters.info.next == null) {
      client.stop();
      return null;
    } else {
      fetchMore({
        variables: {
          page: data?.characters.info.next,
        },
        updateQuery: (prevResult, {fetchMoreResult}) => {
          fetchMoreResult.characters.results = [
            ...prevResult.characters.results,
            ...fetchMoreResult.characters.results,
          ];

          return fetchMoreResult;
        },
      });
    }
  };

  return (
    <Wrapper>
      {loading || error ? (
        <ActivityIndicator
          style={{height: '100%'}}
          color={colors.violet}
          size="large"
        />
      ) : //FIXME: заменить на строгое сравнение
      data?.characters.results.length != 0 ? (
        <FlatList
          data={data?.characters.results}
          renderItem={el => <CharatersContainer {...el.item} />}
          keyExtractor={el => String(el.id)}
          numColumns={2}
          onEndReachedThreshold={0}
          onEndReached={data?.characters.info.next ? FetchData : null}
        />
      ) : (
        <WarningBlock>
          <WarningText>Empty</WarningText>
        </WarningBlock>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 1;
  margin: 0 auto;
  width: 90%;
`;
//FIXME: можно убрать display: flex, в RN все View по дефолту flex
const WarningBlock = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const WarningText = styled.Text`
  color: ${colors.textDiscription};
  font-size: 30px;
  opacity: 0.5;
  font-weight: bold;
`;
//FIXME: заменить на именованный экспорт
export default CharatersComponent;
