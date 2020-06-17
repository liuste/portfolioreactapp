import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fullName: ""};
    }

    render() {
        return (
            <div>
                Hi there!
            </div>
        )
    }
}

export default App;