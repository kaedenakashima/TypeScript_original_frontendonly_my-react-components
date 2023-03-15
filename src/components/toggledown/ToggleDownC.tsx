import React from 'react'
interface IMore {
    more: boolean
}
export class ToggleDownC extends React.Component<{}, IMore> {
    constructor(props: IMore) {
        super(props)
        this.state = {
            more: false
          }
    }
    render() {
        return (
            <div>
                <h4 className='todo-title'>Toggle with Class Component2</h4>
                <div className="ml-0 mt-1 icon-btn" style={{width: "fit-content", cursor: "default", display:"inline-block"}} onClick={() => this.setState({ more: true })}>+</div>
                <div className="ml-0 mt-1 icon-btn" style={{width: "fit-content", cursor: "default", display:"inline-block"}} onClick={() => this.setState({ more: false })}>x</div><br/>
                {this.state.more && <>Displayed</>}
            </div>
        )
    }
}
export default ToggleDownC