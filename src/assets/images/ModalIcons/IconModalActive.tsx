import React from 'react';
import Svg, { Path } from "react-native-svg";
import { colors } from '../../../theme/config';

export const IconModalActive = () => {
    return(
        <Svg width="30" height="30" viewBox="0 0 28 30" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M3 15C3 21.0751 7.92487 26 14 26C20.0751 26 25 21.0751 25 15C25 8.92487 20.0751 4 14 4C7.92487 4 3 8.92487 3 15ZM2 15C2 8.37258 7.37258 3 14 3C20.6274 3 26 8.37258 26 15C26 21.6274 20.6274 27 14 27C7.37258 27 2 21.6274 2 15Z" fill={colors.violet}/>
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M14 22C10.134 22 7 18.866 7 15C7 11.134 10.134 8 14 8C17.866 8 21 11.134 21 15C21 18.866 17.866 22 14 22Z" fill={colors.violet}/>
        </Svg>
    );
};
