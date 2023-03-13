import {useState, useEffect} from 'react'
import {Button} from 'reactstrap'
import EditIcon from '@mui/icons-material/Edit'
import ZoomInIcon from '@mui/icons-material/ZoomIn';
interface IItem {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}
const dummyItemList: IItem[] = [{
    id: new Date().toJSON().toString(),
    firstName: "John",
    lastName: 'Doe',
    email: 'johndoe@gmail.com'
}]
enum EPage {
    list2,
    addPage,
    editPage
}
type TModalProps = {
    onClose:() => void
    data1:IItem
}
type TListProps = {
    list2:IItem[]
    delete2:(data1:IItem) => void
    update2: (data1:IItem) => void
}
type TAddProps = {
    onClick2GoBackPage: () => void
    add1: (data1: IItem) => void
}
type TUpdateProps = {
    data1: IItem
    onClick2GoBackPage: () => void
    updateBtn1: (data1:IItem) => void
}
const UpdateItem = (props:TUpdateProps) => {
    const {data1, onClick2GoBackPage, updateBtn1} = props
    const [firstName,setFirstName] = useState(data1.firstName)
    const [lastName,setLastName] = useState(data1.lastName)
    const [email,setEmail] = useState(data1.email)
    const onChange2FirstName = (e:any) => {
        setFirstName(e.target.value)
    }
    const onChange2LastName = (e:any) => {
        setLastName(e.target.value)
    }
    const onChange2Email = (e:any) => {
        setEmail(e.target.value)
    }
    const onSubmit2Update = (e:any) => {
        e.preventDefault()
        const updatedData: IItem = {
            id: data1.id,
            firstName: firstName,
            lastName:lastName,
            email:email,
        }
        updateBtn1(updatedData)
        onClick2GoBackPage()
    }

    return (
    <form onSubmit={onSubmit2Update}>
        <div>
            <label>First Name: </label>
            <input type="text" value={firstName} onChange={onChange2FirstName}/>
        </div>
        <div>
            <label>Last Name: </label>
            <input type="text" value={lastName} onChange={onChange2LastName}/>
        </div>
        <div>
            <label>Email: </label>
            <input type="email" value={email} onChange={onChange2Email} />
        </div>
        <div>
            <button type='button' className='icon-btn' onClick={onClick2GoBackPage}>←</button>
            <button type='submit' className='icon-btn'>Save</button>
        </div>
    </form>
    )
}
const AddItem = (props:TAddProps) => {
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const {onClick2GoBackPage, add1} = props
    const onChange2FirstName = (e:any) => {
        setFirstName(e.target.value)
    }
    const onChange2LastName = (e:any) => {
        setLastName(e.target.value)
    }
    const onChange2Email = (e:any) => {
        setEmail(e.target.value)
    }
    const onSubmit2Add = (e:any) => {
        e.preventDefault()
        const data1: IItem = {
            id: new Date().toJSON().toString(),
            firstName: firstName,
            lastName:lastName,
            email:email,
        }
        add1(data1)
        onClick2GoBackPage()
    }
    return <>
        <form onSubmit={onSubmit2Add}>
            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={onChange2FirstName}/>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={onChange2LastName}/>
            </div>
            <div>
                <label>Email: </label>
                <input type="email" value={email} onChange={onChange2Email} />
            </div>
            <div>
                <button type='button' className='icon-btn' onClick={onClick2GoBackPage}>←</button>
                <button type='submit' className='icon-btn'>Create</button>
            </div>
        </form>
    </>
}
const ItemModal = (props:TModalProps) => {
    const {onClose, data1} = props
    return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div>
            <div>
                <label>First Name: {data1.firstName}</label>
            </div>
            <div>
                <label>Last Name: {data1.lastName}</label>
            </div>
            <div>
                <label>Email: {data1.email}</label>
            </div>
        </div>
      </div>
    </div>
    )
} 

const ItemList = (props:TListProps) => {
    const {list2, delete2, update2} = props
    const [showModal, setShowModal] = useState(false)
    const [data2List, setData2List] = useState({} as IItem)
    const viewItem = (data1:IItem) => {
        setData2List(data1)
        setShowModal(true)
    }
    const onClose2Modal = () => setShowModal(false)
    return (
    <>
    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th></th>
        </tr>
        {list2.map((x)=> {
            return (
                <tr key={x.id}>
                    <td>{`${x.firstName} ${x.lastName}`}</td>
                    <td>{x.email}</td>
                    <td>
                        <div>
                            <button type='button' className='icon-btn' onClick={()=> viewItem(x)}><ZoomInIcon/></button>
                            <button type='button' className='icon-btn' onClick={()=> update2(x)}><EditIcon/></button>
                            <button className='delete-btn' onClick={() => delete2(x)}>x</button>
                        </div>
                    </td>
                </tr>
            )
        })}
        </table>
{showModal && data2List !== null && <ItemModal onClose={onClose2Modal} data1={data2List}/>}
    </>   
    )
}
export const MultipleAddListB = () => {
    const [list1, setList1] = useState(dummyItemList as IItem[])
    const [shownPage, setShownPage] = useState(EPage.list2)
    const [data2Update, setData2Update] = useState({} as IItem)
    useEffect(()=> {
        const listInString = window.localStorage.getItem('ItemList')
        if(listInString){
            list3(JSON.parse(listInString))
        }
    }, [])
    const onClick2Add = () => {
        setShownPage(EPage.addPage)
    }
    const onClick3GoBackPage = () => {
        setShownPage(EPage.list2)
    }
    const list3 = (list2:IItem[]) => {
        setList1(list2)
        window.localStorage.setItem('list2', JSON.stringify(list2))
    }
    const add2 = (data1: IItem) => {
        setList1([...list1, data1])
    }
    const delete1 = (data1:IItem) => {
        const indexToDelete = list1.indexOf(data1)
        const tempList = [...list1]
        tempList.splice(indexToDelete, 1)
        list3(tempList)
    }
    const update1 = (data1:IItem)=> {
        setShownPage(EPage.editPage)
        setData2Update(data1)
    }
    const updateBtn2 = (data1:IItem) => {
        const filteredData = list1.filter(x => x.id === data1.id)[0]
        const indexOfRecord = list1.indexOf(filteredData)
        const tempData = [...list1]
        tempData[indexOfRecord] = data1
        list3(tempData)
    }
    return (
    <section className='todo-multipleaddB'>
    <h4 className='todo-title'>CRUD with switching display</h4>
     {shownPage === EPage.list2 && (
        <>
        <button className='ml-0 mt-1 float-right icon-btn' type='submit' onClick={onClick2Add}>+</button>
         <ItemList list2={list1} delete2={delete1} update2={update1}/>
        </>
     )}
     {shownPage === EPage.addPage && <AddItem onClick2GoBackPage={onClick3GoBackPage} add1={add2} />}
     {shownPage === EPage.editPage && <UpdateItem data1={data2Update} onClick2GoBackPage={onClick3GoBackPage} updateBtn1={updateBtn2}/>}
    </section>
    )
}
export default MultipleAddListB