import React from 'react';
import { useParams } from 'react-router-dom';
import Update from '../components/Update/Update';

const UpdatePage = () => {
    const parameter = useParams();
    return (
        <div>
            <Update id={parameter.id}></Update>
        </div>
    );
};

export default UpdatePage;