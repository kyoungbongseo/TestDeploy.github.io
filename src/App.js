//import logo from './logo.svg'
import './App.css'
import React, {Component} from 'react'

//const heading = <h1 className="site-heading">Hello, React</h1>      // JSX 
//const heading = React.createElement('h1', {className: 'site-heading'}, 'Hello, React!') // JS

//{{
/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}
*/
//}}


//{{
/*
import Table from './Table'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Table />
      </div>
    )
  }
}
*/
//}}


//{{
/*
import Table from './Table'

class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]

    return (
      <div className="container">
        <Table characterData={characters} />
      </div>
    )
  }
}
*/
//}}


//{{
/*
import Table from './Table'

class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]

    return (
      <div className="container">
        <Table characterData={characters} />
      </div>
    )
  }
}
*/
//}}


//{{
/*
import Table from './Table'

class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
  }

  removeCharacter = (index) => {
    const {characters} = this.state
    this.setState({
      characters: characters.filter((charater, i) => {
        return i !== index
      }),
    })
  }

  render() {
    const { characters } = this.state
    return (
      <div className="container">
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    )
  }
}
*/
//}}


//{{
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    characters: [],
  }

  removeCharacter = (index) => {
    const {characters} = this.state
    this.setState({
      characters: characters.filter((charater, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (charater) => {
    this.setState({characters: [...this.state.characters, charater]})
  }

  render() {
    const { characters } = this.state
    return (
      <div className="container">
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
          <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
//}}


//{{
  /*
class App extends Component {
  state = {
      data: [],
  }

  // Code is invoked after the component is mounte/inserted into the DOM tree.abs
  componentDidMount() {
      const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

      fetch(url)
          .then((result) => result.json())
          .then((result) => {
              this.setState({
                  data: result,
              })
          })
  }

  render() {
      const {data} = this.state

      const result = data.map((entry, index) => {
          return <li key={index}>{entry}</li>
      })

      return <ul>{result}</ul>
  }
}
*/
//}}

export default App;
