import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import {Col, Row} from 'reactstrap'
import {ToggleDownA, ToggleDownB, ToggleDownC} from './components/toggledown'
import {SingleAddList, MultipleAddList, MultipleAddListB, MultipleAddListC} from './components/todo'
import {SingleAddList2, MultipleAddList2} from './components/todo2'

import {Container} from 'reactstrap'
 const App: React.FC = () => {
  return (
  <div className='App'>
    <Container className="mt-4 typescript-components">
    <b>TypeScript Components:</b><br/>
    <table className='mb-2'>
     <tr>
          <td> 01 </td>
          <td>Toggledown</td>
          <td>・<Link to='/toggledown'>demo</Link></td>
     </tr>
     <tr>
          <td> 02 </td>
          <td>CRUD</td>
          <td>・<Link to='/todo'>List1</Link></td>
     </tr>
     <tr>
          <td> 03 </td>
          <td>CRUD + dnd + data</td>
          <td>・<Link to='/todo2'>List2</Link></td>
     </tr>
    </table>
    <Switch>
          <Route path="/toggledown"><ToggleDownA/><ToggleDownB/><ToggleDownC/></Route>
          <Route path="/todo"><Row><Col><SingleAddList/><MultipleAddList/></Col><Col><MultipleAddListB/><MultipleAddListC/></Col></Row></Route>
          <Route path="/todo2"><Row><Col><SingleAddList2/>
          </Col><Col><MultipleAddList2/></Col><Row></Row></Row></Route>
    </Switch>
    </Container>
  </div>
  )
 }

export default App