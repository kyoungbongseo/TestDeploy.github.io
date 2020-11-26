//import React, {Component} from 'react'
import React from 'react'


/*
class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Janitor</td>
          </tr>
          <tr>
            <td>Mac</td>
            <td>Bouncer</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
*/

/*
class Table extends Component {
    render() {
      return (
        <table>
            <TableHeader />
            <TableBody />
        </table>
      )
    }
  }

const TableBody = () => {
    return (
      <tbody>
        <tr>
          <td>Charlie</td>
          <td>Janitor</td>
        </tr>
        <tr>
          <td>Mac</td>
          <td>Bouncer</td>
        </tr>
        <tr>
          <td>Dee</td>
          <td>Aspiring actress</td>
        </tr>
        <tr>
          <td>Dennis</td>
          <td>Bartender</td>
        </tr>
      </tbody>
    )
  }
*/


/*
class Table extends Component {
    render() {
        const {characterData} = this.props

      return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} />
        </table>
      )
    }
  }
*/


/*
// import React, {Component} from 'react'
class Table extends Component {
  render() {
      const {characterData, removeCharacter} = this.props

    return (
      <table>
          <TableHeader />
          <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    )
  }
}
*/


// import React from 'react'
const Table = (props) => {
  const {characterData, removeCharacter} = props;
  return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
    </table>
  );
}


const TableHeader = () => {
  return (
      <thead>
          <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Remove</th>
          </tr>
      </thead>
  );
}


const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
      return (
          <tr key={index}>
              <td>{row.name}</td>
              <td>{row.job}</td>
              <td>
                <button onClick={() => props.removeCharacter(index)}>Delete</button>
              </td>
          </tr>
      );
  });

  return <tbody>{rows}</tbody>;
}


export default Table;





