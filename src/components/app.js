import React, { Component, PropTypes } from 'react';

class App extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <p>Header here...</p>
                {this.props.children}
            </div>
        );
    }
}

App.prototype = {
    children: PropTypes.object.isRequired
};

export default App;