import {
  Fragment,
  useState,
  useRef
} from "react";
import { Button, Col, Row } from "reactstrap";
import EditIcon from "@mui/icons-material/Edit";
interface IItem {
  id: string;
  text: string;
  text2: string;
  unit: number | string;
  status: string;
}
type TUpdateProps = {
  data1: IItem;
  onClick2CancelUpdate: () => void;
  updateBtn1: (data1: IItem) => void;
}
const UpdateItem = (props: TUpdateProps) => {
  const { data1, onClick2CancelUpdate, updateBtn1 } = props;
  const [text, setText] = useState(data1.text);
  const [text2, setText2] = useState(data1.text2);
  const [unit, setUnit] = useState(data1.unit);
  const [status, setStatus] = useState(data1.status);
  const onChange2Text = (e: any) => {
    setText(e.target.value);
  };
  const onChange2Text2 = (e: any) => {
    setText2(e.target.value);
  };
  const onChange2Unit = (e: any) => {
    setUnit(e.target.value);
  };
  const onChange2Status = (e: any) => {
    setStatus(e.target.value);
  };
  const onSubmit2Update = (e: any) => {
    e.preventDefault();
    const updatedData: IItem = {
      id: data1.id,
      text: text,
      text2: text2,
      unit: unit,
      status: status,
    };
    updateBtn1(updatedData);
    onClick2CancelUpdate();
  };
  return (
    <div className="todo-output">
      <div className="todo-input-wrapper">
        <div className="d-flex">
          <span>text: </span>
          <input
            type="text"
            className="border-0 mb-1"
            value={text}
            onChange={onChange2Text}
          />
        </div>
        <div className="d-flex">
          <span>text2: </span>
          <input
            type="text"
            className="border-0 mb-1"
            value={text2}
            onChange={onChange2Text2}
          />
        </div>
        <div className="d-flex">
          <span>unit: </span>
          <input
            className="border-0 mb-1"
            type="number"
            id="todo-unit"
            step="1"
            min="0"
            max="10"
            value={unit}
            onChange={onChange2Unit}
          />
        </div>
        <div className="d-flex">
          <span>option: </span>
          <select
            id="select"
            className="border-0 todo-select"
            value={status}
            onChange={onChange2Status}
            placeholder="Please select"
          >
            <option value="">Select</option>
            <option value="active">active</option>
            <option value="done">done</option>
          </select>
        </div>
      </div>
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
    </div>
  );
};
export function MultipleAddList2() {
  const [data2Update, setData2Update] = useState({} as IItem);
  const [dataUpdateId, setDataUpdateId] = useState(null);
  const [text, setText] = useState<string>("");
  const [text2, setText2] = useState<string>("");
  const [unit, setUnit] = useState<string>("0");
  const [status, setStatus] = useState<string>("");
  const [list1, setList1] = useState<IItem[]>([
    {
      id: "1",
      text: "Sample1",
      text2: "Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum",
      unit: "1",
      status: "done",
    },
    {
      id: "2",
      text: "Sample2",
      text2: "Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum",
      unit: "2",
      status: "active",
    }
  ])
  const addItem = (): void => {
    const newList = {
      id: Math.random().toString(),
      text: text,
      text2: text2,
      unit: unit,
      status: status,
    }
    setList1([...list1, newList]);
    setUnit("0");
  }
  const onClick2Update = (e: any, data1) => {
    e.preventDefault();
    setDataUpdateId(data1.id);
    const updatedData: IItem = {
      id: data1.id,
      text: data1.text,
      text2: data1.text2,
      unit: data1.unit,
      status: data1.status,
    };
    setData2Update(updatedData);
  }
  const list3 = (list2: IItem[]) => {
    setList1(list2);
    window.localStorage.setItem("list2", JSON.stringify(list2));
  }
  const updateBtn2 = (data1: IItem) => {
    const filteredData = list1.filter((x) => x.id === data1.id)[0];
    const indexOfRecord = list1.indexOf(filteredData);
    const tempData = [...list1];
    tempData[indexOfRecord] = data1;
    list3(tempData);
  }
  const onClick3CancelUpdate = () => {
    setDataUpdateId(null);
  }

  const dragItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);
  const handleSort = () => {
    let _list1 = [...list1];
    const draggedItemContent = _list1.splice(dragItem.current, 1)[0];
    _list1.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList1(_list1);
  }
  const deleteItem = (itemToDelete: string): void => {
    setList1(
      list1.filter((x) => {
        return x.id !== itemToDelete;
      })
    )
  }
  return (
    <div>
      <h4 className="todo-title">
        Add Multiple Text list1 + dnd, existed data
      </h4>
      <div className="input-group">
        <Row>
          <Col className="m-auto">
            <div className="newItem-control-todo">
              <Row>
                <Col>
                  <label className="todo-label" htmlFor="todo-text">
                    Text
                  </label>
                  <input
                    type="text"
                    id="todo-text"
                    name="text"
                    onChange={(e) => setText(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label className="todo-label" htmlFor="todo-text2">
                    Text2
                  </label>
                  <input
                    type="text"
                    id="todo-text2"
                    onChange={(e) => setText2(e.target.value)}
                  ></input>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label className="todo-label" htmlFor="todo-unit">
                    Unit(number only)
                  </label>
                  <input
                    type="number"
                    id="todo-unit"
                    onChange={(e) => setUnit(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label className="todo-label" htmlFor="todo-select">
                    Status
                  </label>
                  <select
                    id="select"
                    className="todo-select"
                    placeholder="Please select"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="">Status</option>
                    <option value="active">active</option>
                    <option value="done">done</option>
                  </select>
                </Col>
              </Row>
            </div>
            <Button
              className="KPMGprimary rounded-0 ml-0"
              size="md"
              onClick={addItem}
            >
              +
            </Button>
          </Col>
        </Row>
      </div>
      <div className="list-container">
        <ul className="list-item">
          {list1.map((x: IItem, key: number) => (
            <Fragment>
              <li
                key={key}
                className="list-item"
                draggable
                onDragStart={(e) => (dragItem.current = key)}
                onDragEnter={(e) => (dragOverItem.current = key)}
                onDragEnd={handleSort}
                onDragOver={(e) => e.preventDefault()}
              >
                {dataUpdateId === x.id ? (
                  <UpdateItem
                    data1={data2Update}
                    onClick2CancelUpdate={onClick3CancelUpdate}
                    updateBtn1={updateBtn2}
                  />
                ) : (
                  <div className="todo-output">
                    <div>
                      <span>text: {x.text}</span>
                      <br />
                      <span>text2: {x.text2}</span>
                      <br />
                      <span>unit: {x.unit}</span>
                      <br />
                      <span>status: {x.status}</span>
                    </div>
                    <div>
                      <button
                        className="icon-btn"
                        onClick={(e: any) => onClick2Update(e, x)}
                      >
                        <EditIcon />
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => {
                          deleteItem(x.id);
                        }}
                      >
                        x
                      </button>
                    </div>
                  </div>
                )}
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default MultipleAddList2;
