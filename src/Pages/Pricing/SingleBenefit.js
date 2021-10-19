import React from 'react';

const SingleBenefit = ({single}) => {
    return (
        <div>
            <li className='list-group-item mx-3 rounded-3 my-1'><i className="fas fa-check-circle text-success"></i> {single}</li>
        </div>
    );
};

export default SingleBenefit;