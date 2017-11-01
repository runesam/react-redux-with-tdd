import React from 'react';
import { Route } from 'react-router-dom';
export default (props) => {
    console.log(props);
    return (
        <div>
            {props.match.isExact && (
                <div>
                    'we are in about page'
                    <br />
                </div>
            )}
            <Route path='/about/:customId' component={({ match }) => <div>{match.params.customId}</div>} />							
        </div>
    );
}