import {useState} from 'react'
enum EContents {
    beforeClick,
    AfterClick
}
type TProps = {
    onClick2Back: () => void
}
const Detail = (props:TProps) => {
    const {onClick2Back} = props
    return (
        <>
        <input type="button" className="ml-0 mt-1 icon-btn" value='x' onClick={onClick2Back}/>
        <div>Displayed</div>
        </>
    )
}
export const ToggleDownA = () => {
    const [shownContents, setShownContents] = useState(EContents.beforeClick)
    const onClick2More = () => {
        setShownContents(EContents.AfterClick)
    }
    const onClick3Back = () => {
        setShownContents(EContents.beforeClick)
    }
    return (
    <section>
        <h4 className='todo-title'>Toggle with Function Component</h4>
     {shownContents === EContents.beforeClick && (
        <>
        <input type='button' className="ml-0 mt-1 icon-btn" value='+' onClick={onClick2More} />
        </>
     )}
     {shownContents === EContents.AfterClick && <Detail onClick2Back={onClick3Back}/>}
    </section>
    )
}
export default ToggleDownA