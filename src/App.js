
import React from 'react'
import Input from './Component/Input'
import Listtodo from './Component/Listtodo' 
import './App.css'
class App extends React.Component {
  state = {
  }
  render() {
    return (
      <div>
        <Input />
        <Listtodo  />
      </div>
    )
  }
}
export default App ; 