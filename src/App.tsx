import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import {Col, Row} from 'reactstrap'
import {ToggleDownA, ToggleDownB, ToggleDownC} from './components/toggledown'
import {SingleAddListA, SingleAddListB} from './components/addDelete'
import {SingleAddList, MultipleAddList, MultipleAddListB, MultipleAddListC} from './components/crud'
import {SingleAddList2, MultipleAddList2} from './components/crudDndData'
import {Validation} from './components/validation'

import {Container} from 'reactstrap'
 const App: React.FC = () => {
  return (
  <div className='App'>
    <Container className="mt-4">
    <b>TypeScript Components:</b><br/>
    <table className='mb-2 typescript-components'>
     <tr>
          <td> 01 </td>
          <td>Toggledown</td>
          <td>・<Link to='/toggledown'>demo</Link></td>
     </tr>
     <tr>
          <td> 02 </td>
          <td>Add and Delete</td>
          <td>・<Link to='/add_delete'>demo</Link></td>
     </tr>
     <tr>
          <td> 03 </td>
          <td>CRUD</td>
          <td>・<Link to='/crud'>demo</Link></td>
     </tr>
     <tr>
          <td> 04 </td>
          <td>CRUD + dnd + data</td>
          <td>・<Link to='/crud_dnd_data'>demo</Link></td>
     </tr>
     <tr>
          <td> 05 </td>
          <td>Validation</td>
          <td>・<Link to='/validation'>demo</Link></td>
     </tr>
    </table>
    <Switch>
          <Route path="/toggledown"><ToggleDownA/><ToggleDownB/><ToggleDownC/></Route>
          <Route path="/add_delete"><Row><Col><SingleAddListA/></Col><Col><SingleAddListB/></Col></Row></Route>
          <Route path="/crud"><Row><Col><SingleAddList/><MultipleAddList/></Col><Col><MultipleAddListB/><MultipleAddListC/></Col></Row></Route>
          <Route path="/crud_dnd_data"><Row><Col><SingleAddList2/>
          </Col><Col><MultipleAddList2/></Col><Row></Row></Row></Route>
          <Route path="/validation"><Row><Col><Validation/>
          </Col><Col></Col><Row></Row></Row></Route>
    </Switch>
    </Container>
  </div>
  )
 }

export default App