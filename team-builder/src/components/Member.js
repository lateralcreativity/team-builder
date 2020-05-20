import React from 'react';

export default function Member(props){
    const { data } = props;

    if(!data){
        return <h3>Loading...</h3>
    }

    return (
        <div>
            <h2>{ data.name }</h2>
            <p>{ data.email }</p>
            <p>{ data.role }</p>
        </div>
    )
}