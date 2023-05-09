import React, {Fragment} from 'react'
type TAddProps = {
  add1:any
}
class AddItem extends React.Component<TAddProps> {
  state = {
      value: '',
  }
  onClick2Add = (event: React.FormEvent) => {
    event.preventDefault()
    this.props.add1(Math.random().toString())
  }
  render() {
      return (
            <button
            className='icon-btn'
            type="submit" 
            onClick={this.onClick2Add}
          >
            +
          </button>
      )
  }
}
export class SingleAddListB extends React.Component{
  state = {
      list1: [],
  }
  add2 = (x:any) => {
      this.setState(y=>(
        {list1: [
          ...this.state.list1,
          x
        ]})
      )
  }
  onClick2Delete = (x:any) => {
    this.setState(prevState => ({list1: this.state.list1.filter((y) => x !== y)}))
 }
  render() {
      return (
          <section>
            <h4 className='f-12'>Add Item with Class Component</h4>
              <AddItem add1={this.add2}/>
              <ul className="text-xs">
              {this.state.list1.map((x, i)=>(
                <Fragment> 
                  <li key={x}>
                      <span>{i+1}</span>
                      <div>
                      display
                        <button
                          className="delete-btn"
                          onClick={() => this.onClick2Delete(x)} 
                        >
                          x
                        </button>
                      </div>
                    </li>
                </Fragment>
              )
              )}
            </ul>
          </section>
      )
  }
}
export default SingleAddListB