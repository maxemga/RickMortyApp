import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../../theme/config';

export const EpisodesArrow = () => (
    <Svg width="6" height="8" viewBox="0 0 6 8" fill="none">
        <Path
            d="M5.93555 4.11523L1.19922 7.64062L0.857422 7.2207L3.47461 4.11523L0.857422 0.580078L1.19922 0.296875L5.93555 4.11523Z"
            fill={colors.silver.darkBright}
        />
    </Svg>
);
