import React from 'react'

class App extends React.Component {

    state = {
        peopleInSpace: []
    }

    render() {
        return(
            <div>
                <p>{this.state.peopleInSpace.map(person => person.name)}<br></br></p>
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
        })
    }


}


export default App