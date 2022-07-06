import styled from 'styled-components';
import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_ALL_LOCATIONS} from '../../db/query/requests';
import {IAllLocation, IFilterContext} from '../../type/types';
import {
  ISchemaLocation,
  ISchemaLocations,
  ISchemaUsers,
} from '../../db/query/schema';
import {LocationsContainer} from './LocationsContainer';
import {ActivityIndicator} from 'react-native-paper';
import {colors} from '../../theme/config';
import {FilterContext} from '../../context/filterContext';

const LocationsComponent: React.FC = () => {
  const {locationsActiveDimension, locationsActiveName, locationsActiveType} =
    useContext<IFilterContext>(FilterContext);
  const {data, loading, error, fetchMore, client} = useQuery<ISchemaLocations>(
    GET_ALL_LOCATIONS,
    {
      variables: {
        name: locationsActiveName,
        type: locationsActiveType,
        dimension: locationsActiveDimension,
      },
    },
  );

  const FetchData = () => {
    if (data?.locations.info.next == null) {
      client.stop();
    } else {
      fetchMore({
        variables: {
          page: data?.locations.info.next,
        },
        updateQuery: (prevResult, {fetchMoreResult}) => {
          fetchMoreResult.locations.results = [
            ...prevResult.locations.results,
            ...fetchMoreResult.locations.results,
          ];

          return fetchMoreResult;
        },
      });
    }
    //FIXME: убрать консоль логи
    console.log(data?.locations.info.next);
    console.log(data?.locations.results.length);
  };

  return (
    <Wrapper>
      {loading || error ? (
        <ActivityIndicator
          style={{height: '100%'}}
          color={colors.violet}
          size="large"
        />
      ) : data?.locations.results.length != 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data?.locations.results}
          renderItem={el => <LocationsContainer {...el.item} />}
          keyExtractor={el => String(el.id)}
          numColumns={2}
          onEndReachedThreshold={0}
          onEndReached={() => FetchData()}
        />
      ) : (
        <WarningBlock>
          <WarningText>Empty</WarningText>
        </WarningBlock>
      )}
    </Wrapper>
  );
};

//FIXME: дублируются компоненты с одинаковым стилями

const Wrapper = styled.View`
  flex: 1;
  margin: 0 auto;
  width: 90%;
`;

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

export default LocationsComponent;
