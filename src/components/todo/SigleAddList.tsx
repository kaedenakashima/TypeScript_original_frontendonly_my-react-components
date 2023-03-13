import React, { Fragment, useState, useRef } from "react";
import { Button } from "reactstrap";
import EditIcon from "@mui/icons-material/Edit";

interface IItem {
  id: string;
  text: string;
}
type TAddProps = {
  add1: (data1Text: string) => void;
};
type TUpdateProps = {
  data1: IItem;
  onClick2CancelUpdate: () => void;
  updateBtn1: (data1: IItem) => void;
};
const UpdateItem = (props: TUpdateProps) => {
  const { data1, onClick2CancelUpdate, updateBtn1 } = props;
  const [text, setText] = useState(data1.text);
  const onChange2Text = (e: any) => {
    setText(e.target.value);
  };
  const onSubmit2Update = (e: any) => {
    e.preventDefault();
    const updatedData: IItem = {
      id: data1.id,
      text: text,
    };
    updateBtn1(updatedData);
    onClick2CancelUpdate();
  };
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
  );
};
const AddItem: React.FC<TAddProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const onSubmit2Add = (event: React.FormEvent) => {
    event.preventDefault();
    props.add1(textInputRef.current!.value);
  };
  return (
    <form onSubmit={onSubmit2Add}>
      <div className="form-control-todo">
        <h4 className="todo-title">Add Sigle Text Item</h4>
        <div className="d-flex">
          <input type="text" id="todo-text" ref={textInputRef} />
          <Button className="KPMGprimary rounded-0" size="md" type="submit">
            +
          </Button>
        </div>
      </div>
    </form>
  );
};
export const SingleAddList: React.FC = () => {
  const [list1, setList1] = useState<IItem[]>([])
  const [data2Update, setData2Update] = useState({} as IItem);
  const [dataUpdateId, setDataUpdateId] = useState(null);
  const onClick2Update = (e: any, data1) => {
    e.preventDefault();
    setDataUpdateId(data1.id);
    const updatedData: IItem = {
      id: data1.id,
      text: data1.text,
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
  const add2 = (text: string) => {
    setList1((x) => [
      ...x,
      {
        id: Math.random().toString(),
        text: text,
      },
    ]);
  };
  const onClick2Delete = (data1Id: string) => {
    setList1((x) => {
      return x.filter((x) => x.id !== data1Id);
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
                <span>{x.text}</span>
                <div>
                  <button
                    className="icon-btn"
                    onClick={(e: any) => onClick2Update(e, x)}
                  >
                    <EditIcon />
                  </button>
                  <button
                    className="delete-btn"
                    onClick={onClick2Delete.bind(null, x.id)}
                  >
                    x
                  </button>
                </div>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </>
  );
};
export default SingleAddList;
