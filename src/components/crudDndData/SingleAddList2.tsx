import {Fragment, useState, useRef} from 'react'
import EditIcon from '@mui/icons-material/Edit'

interface IItem {
  id: string;
  text: string;
}
type TUpdateProps = {
  data1: IItem;
  onClick2CancelUpdate: () => void;
  updateBtn1: (data1: IItem) => void;
}
const UpdateItem = (props: TUpdateProps) => {
  const { data1, onClick2CancelUpdate, updateBtn1 } = props;
  const [text, setText] = useState(data1.text);
  const onChange2Text = (e: any) => {
    setText(e.target.value);
  }
  const onSubmit2Update = (e: any) => {
    e.preventDefault();
    const updatedData: IItem = {
      id: data1.id,
      text: text,
    }
    updateBtn1(updatedData)
    onClick2CancelUpdate()
  }
  return (
    <li>
      <input
        type="text"
        value={text}
        onChange={onChange2Text}
        className="border-0"
      />
      <div>
        <form onSubmit={onSubmit2Update} className="d-flex">
          <button type="submit" className="icon-btn">
            Save
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={onClick2CancelUpdate}
          >
            Cancel
          </button>
        </form>
      </div>
    </li>
  )
}
export function SingleAddList2() {
  const [text, setText] = useState<string>("");
  const [data2Update, setData2Update] = useState({} as IItem)
  const [dataUpdateId, setDataUpdateId] = useState(null)
  const [list1, setList1] = useState<IItem[]>([
    {
      id: "1",
      text: '¥1,200,000'
    },
    {
      id: "2",
      text: '¥200,000'
    },
    {
      id: "3",
      text: '¥500,000'
    }
  ])
  const onClick2Add = (): void => {
    const newList = {
      id: Math.random().toString(),
      text: text
    };
    setList1([...list1, newList]);
  }

  const onClick2Update = (e: any, data1) => {
    e.preventDefault()
    setDataUpdateId(data1.id)
    const updatedData: IItem = {
      id: data1.id,
      text: data1.text
    }
    setData2Update(updatedData)
  }
  const list3 = (list2: IItem[]) => {
    setList1(list2)
    window.localStorage.setItem("list2", JSON.stringify(list2))
  }
  const updateBtn2 = (data1: IItem) => {
    const filteredData = list1.filter((item) => item.id === data1.id)[0];
    const indexOfRecord = list1.indexOf(filteredData)
    console.log(indexOfRecord)
    const tempData = [...list1]
    tempData[indexOfRecord] = data1
    list3(tempData)
  }
  const onClick3CancelUpdate = () => {
    setDataUpdateId(null);
  }

  const dragItem = useRef<any>(null)
  const dragOverItem = useRef<any>(null)
  const handleSort = () => {
    let _list1 = [...list1];
    const draggedItemContent = _list1.splice(dragItem.current, 1)[0]
    _list1.splice(dragOverItem.current, 0, draggedItemContent)
    dragItem.current = null;
    dragOverItem.current = null;
    setList1(_list1);
  }
 
  const onClick2delete = (dataId:string) => {
    setList1(x => {
      return x.filter(item => item.id !== dataId)
    })
  }
  return (
    <div>
      <h4 className='f-12'>Add Sigle Text Item + dnd, existed data</h4>
      <div className="input-group">
        <div className='d-flex'>
            <input type="text" id="todo-text"
                    name="text" onChange={(e) => setText(e.target.value)} />
            <button type="submit" className="icon-btn ml-1" onClick={onClick2Add}>
              +
            </button>
        </div>
      </div>
      <div className="list-container">
        <ul className="list-item text-xs">
          {list1.map((item, index) => (
            <Fragment>
            {dataUpdateId === item.id ? (
              <UpdateItem
                data1={data2Update}
                onClick2CancelUpdate={onClick3CancelUpdate}
                updateBtn1={updateBtn2}
              />
            ) : (
            <li
              key={index}
              className="list-item"
              draggable
              onDragStart={(e) => (dragItem.current = index)}
              onDragEnter={(e) => (dragOverItem.current = index)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              <span>{item.text}</span>
              <div>
                <button className='icon-btn' 
                  onClick={(e: any) => onClick2Update(e, item)}
                ><EditIcon/></button>
                <button className='delete-btn' 
                  onClick={onClick2delete.bind(null, item.id)}
                >x</button>
              </div>
            </li> 
            )}
            </Fragment>
          ))}
          </ul>
      </div>
    </div>
  );
}
export default SingleAddList2