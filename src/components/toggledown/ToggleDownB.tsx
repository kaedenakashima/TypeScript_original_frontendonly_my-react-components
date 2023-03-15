import React from 'react'
interface IMore {
    more: boolean
}
export class ToggleDownB extends React.Component<{}, IMore> {
    constructor(props: IMore) {
        super(props)
        this.state = {
            more: false
          }
    }
    render() {
        return (
            <div>
                 <h4 className='todo-title'>Toggle with Class Component1</h4>
                <div className="ml-0 mt-1 icon-btn" style={{width: "fit-content", cursor: "default"}} onClick={() => this.setState({more: !this.state.more})}>
                {this.state.more ? 'x':'+'}
                </div>
                {this.state.more && <>Displayed</>}
            </div>
        )
    }
}
export default ToggleDownB