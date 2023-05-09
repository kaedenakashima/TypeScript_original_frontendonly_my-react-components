import React, { Fragment, useState, useRef } from "react";
import { Col, Row } from "reactstrap";
import EditIcon from "@mui/icons-material/Edit";
interface IItem {
  id: string;
  text: string;
  text2: string;
  unit: number | string;
  select: string;
}
type TAddProps = {
  add1: (
    todoText: string,
    todoText2: string,
    todoUnit: number | string,
    todoype: string
  ) => void;
};
type TUpdateProps = {
  data1: IItem;
  onClick2CancelUpdate: () => void;
  updateBtn1: (data1: IItem) => void;
};
const UpdateItem = (props: TUpdateProps) => {
  const { data1, onClick2CancelUpdate, updateBtn1 } = props;
  const [text, setText] = useState(data1.text);
  const [text2, setText2] = useState(data1.text2);
  const [unit, setUnit] = useState(data1.unit);
  const [select, setSelect] = useState(data1.select);
  const onChange2Text = (e: any) => {
    setText(e.target.value);
  };
  const onChange2Text2 = (e: any) => {
    setText2(e.target.value);
  };
  const onChange2Unit = (e: any) => {
    setUnit(e.target.value);
  };
  const onChange2Select = (e: any) => {
    setSelect(e.target.value);
  };
  const onSubmit2Update = (e: any) => {
    e.preventDefault();
    const updatedData: IItem = {
      id: data1.id,
      text: text,
      text2: text2,
      unit: unit,
      select: select,
    };
    updateBtn1(updatedData);
    onClick2CancelUpdate();
  };
  return (
    <li>
      <div className="todo-output">
        <div>
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
              value={select}
              onChange={onChange2Select}
              placeholder="Please select"
            >
              <option value="">Select</option>
              <option value="option1">option1</option>
              <option value="option2">option2</option>
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
    </li>
  );
};
const AddItem: React.FC<TAddProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const text2InputRef = useRef<HTMLTextAreaElement>(null);
  const unitInputRef = useRef<HTMLInputElement>(null);
  const selectInputRef = useRef<HTMLSelectElement>(null);
  const add2 = (event: React.FormEvent) => {
    console.log("clicked");
    event.preventDefault();
    props.add1(
      textInputRef.current!.value,
      text2InputRef.current!.value,
      unitInputRef.current!.value,
      selectInputRef.current!.value
    );
  };
  return (
    <>
      <h4 className="f-12">Add Multiple Text Items</h4>
      <form onSubmit={add2}>
        <div className="form-control-todo">
          <Row>
            <Col className='d-inline-flex mb-1'>
              <label className="todo-label" htmlFor="todo-text">
                Text
              </label>
              <input type="text" id="todo-text" ref={textInputRef} />
            </Col>
          </Row>
          <Row>
            <Col className='d-inline-flex mb-1'>
              <label className="todo-label" htmlFor="todo-text2">
                Text2
              </label>
              <textarea
                id="todo-text2"
                className="todo-textinput"
                aria-label="With textarea"
                ref={text2InputRef}
              ></textarea>
            </Col>
          </Row>
          <Row>
            <Col className='d-inline-flex mb-1'>
              <label className="todo-label" htmlFor="todo-unit">
                Unit(number only)
              </label>
              <input
                type="number"
                id="todo-unit"
                step="1"
                min="0"
                max="10"
                ref={unitInputRef}
              />
            </Col>
          </Row>
          <Row>
            <Col className='d-inline-flex'>
              <label className="todo-label" htmlFor="todo-select">
                Select
              </label>
              <select
                id="select"
                className="todo-select"
                ref={selectInputRef}
                placeholder="Please select"
              >
                <option value="">Select</option>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
              </select>
            </Col>
          </Row>
          <div className='text-right'>
          <button
            className='icon-btn'
            type="submit"
          >
            +
          </button>
          </div>
        </div>
      </form>
    </>
  );
};
export const MultipleAddList: React.FC = () => {
  const [list1, setList1] = useState<IItem[]>([]);
  const [data2Update, setData2Update] = useState({} as IItem);
  const [dataUpdateId, setDataUpdateId] = useState(null);

  const onClick2Update = (e: any, data1) => {
    e.preventDefault();
    setDataUpdateId(data1.id);
    const updatedData: IItem = {
      id: data1.id,
      text: data1.text,
      text2: data1.text2,
      unit: data1.unit,
      select: data1.select,
    };
    setData2Update(updatedData);
  };
  const list3 = (list2: IItem[]) => {
    setList1(list2);
    window.localStorage.setItem("list2", JSON.stringify(list2));
  };
  const updateBtn2 = (data1: IItem) => {
    const filteredData = list1.filter((x) => x.id === data1.id)[0];
    const indexOfRecord = list1.indexOf(filteredData);
    const tempData = [...list1];
    tempData[indexOfRecord] = data1;
    list3(tempData);
  };
  const onClick3CancelUpdate = () => {
    setDataUpdateId(null);
  };
  const add2 = (
    text: string,
    text2: string,
    unit: number | string,
    select: string
  ) => {
    setList1((x) => [
      ...x,
      {
        id: Math.random().toString(),
        text: text,
        text2: text2,
        unit: unit,
        select: select,
      },
    ]);
  };
  const onClick2delete = (dataId: string) => {
    setList1((x) => {
      return x.filter((x) => x.id !== dataId);
    });
  };
  return (
    <>
      <AddItem add1={add2} />
      <ul className="text-xs">
        {list1.map((x) => (
          <Fragment>
            {dataUpdateId === x.id ? (
              <UpdateItem
                data1={data2Update}
                onClick2CancelUpdate={onClick3CancelUpdate}
                updateBtn1={updateBtn2}
              />
            ) : (
              <li key={x.id}>
                <div className="todo-output">
                  <div>
                    <span>text:{x.text}</span>
                    <br />
                    <span>text2: {x.text2}</span>
                    <br />
                    <span>unit: {x.unit}</span>
                    <br />
                    <span>option: {x.select}</span>
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
                      onClick={onClick2delete.bind(null, x.id)}
                    >
                      x
                    </button>
                  </div>
                </div>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </>
  );
};
export default MultipleAddList;
