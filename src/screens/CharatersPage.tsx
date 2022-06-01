import React from 'react';
import CharatersComponent from '../components/Charaters/CharatersComponent';
import CharatersHeader from '../components/Charaters/CharatersHeader';



const CharatersPage: React.FC = () => {
    return(
        <>
            <CharatersHeader/>
            <CharatersComponent/>      
        </>
    )
}

export default CharatersPage;