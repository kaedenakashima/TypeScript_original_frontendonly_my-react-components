import { Fragment, useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
interface IItem {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
const defaultDataList: IItem[] = [
  {
    id: new Date().toJSON().toString(),
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
  },
];
enum EPage {
  list2,
  addPage
}
type TModalProps = {
  onClose: () => void;
  data1: IItem;
}
type TAddProps = {
  onClick2CancelAdd: () => void;
  add1: (data1: IItem) => void;
};
type TUpdateProps = {
  data1: IItem;
  onClick2CancelUpdate: () => void;
  updateBtn1: (data1: IItem) => void;
};
const UpdateItem = (props: TUpdateProps) => {
  const { data1, onClick2CancelUpdate, updateBtn1 } = props;
  const [firstName, setFirstName] = useState(data1.firstName);
  const [lastName, setLastName] = useState(data1.lastName);
  const [email, setEmail] = useState(data1.email);
  const onChange2FirstName = (e: any) => {
    setFirstName(e.target.value);
  };
  const onChange2LastName = (e: any) => {
    setLastName(e.target.value);
  };
  const onChange2Email = (e: any) => {
    setEmail(e.target.value);
  };
  const onSubmit2Update = (e: any) => {
    e.preventDefault();
    const updatedData: IItem = {
      id: data1.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    updateBtn1(updatedData);
    onClick2CancelUpdate();
  };
  return (
    <tr>
      <td style={{ display: "flex", border: "none" }}>
        <input type="text" value={firstName} onChange={onChange2FirstName} />
        <input type="text" value={lastName} onChange={onChange2LastName} />
      </td>
      <td>
        <input type="email" value={email} onChange={onChange2Email} />
      </td>
      <td>
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
      </td>
    </tr>
  );
};
const AddItem = (props: TAddProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const { onClick2CancelAdd, add1 } = props;
  const onChange2FirstName = (e: any) => {
    setFirstName(e.target.value);
  };
  const onChange2LastName = (e: any) => {
    setLastName(e.target.value);
  };
  const onChange2Email = (e: any) => {
    setEmail(e.target.value);
  };
  const onSubmit2Add = (e: any) => {
    e.preventDefault();
    const data1: IItem = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    add1(data1);
    onClick2CancelAdd();
  };
  return (
    <tr>
      <td className="d-flex border-0">
        <input type="text" value={firstName} onChange={onChange2FirstName} />
        <input type="text" value={lastName} onChange={onChange2LastName} />
      </td>
      <td>
        <input type="email" value={email} onChange={onChange2Email} />
      </td>
      <td>
        <form onSubmit={onSubmit2Add} className="d-flex">
          <button type="submit" className="icon-btn">
            Save
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={onClick2CancelAdd}
          >
            Cancel
          </button>
        </form>
      </td>
    </tr>
  );
}
const ItemModal = (props: TModalProps) => {
  const { onClose, data1 } = props;
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
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
export const MultipleAddListC = () => {
  const [list1, setList1] = useState(defaultDataList as IItem[]);
  const [data2List, setData2List] = useState({} as IItem);
  const [data2Update, setData2Update] = useState({} as IItem);
  const [dataUpdateId, setDataUpdateId] = useState(null)
  const [shownPage, setShownPage] = useState(EPage.list2);
  const [showModal, setShowModal] = useState(false);
  const onClose2Modal = () => setShowModal(false);
  useEffect(() => {
    const listInString = window.localStorage.getItem("ItemList");
    if (listInString) {
      list3(JSON.parse(listInString));
    }
  }, []);
  const viewItem = (data1: IItem) => {
    setData2List(data1);
    setShowModal(true);
  }
  const onClick2Update = (e:any, data1) => {
    e.preventDefault()
    setDataUpdateId(data1.id)
    const formValues = {
      id: data1.id,
      firstName: data1.firstName,
      lastName: data1.lastName,
      email: data1.email,
    }
    setData2Update(formValues)
  }
  const delete1 = (data1: IItem) => {
    const indexToDelete = list1.indexOf(data1);
    const tempList = [...list1];
    tempList.splice(indexToDelete, 1);
    list3(tempList);
  };
  const onClick2Add = () => {
    setShownPage(EPage.addPage);
  }
  const onClick3CancelAdd = () => {
    setShownPage(EPage.list2);
  };
  const list3 = (list2: IItem[]) => {
    setList1(list2);
    window.localStorage.setItem("list2", JSON.stringify(list2));
  };
  const add2 = (data1: IItem) => {
    setList1([...list1, data1]);
    console.log('list1', list1)
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
  }
  return (
    <section className="todo-multipleaddB">
      <h4 className="todo-title">CRUD In The List</h4>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list1.map((x) => (
            <Fragment>
              {dataUpdateId === x.id ? (
                <UpdateItem
                  data1={data2Update}
                  onClick2CancelUpdate={onClick3CancelUpdate}
                  updateBtn1={updateBtn2}
                />
              ) : (
                <tr key={x.id}>
                  <td>{`${x.firstName} ${x.lastName}`}</td>
                  <td>{x.email}</td>
                  <td>
                    <div>
                      <button
                        type="button"
                        className="icon-btn"
                        onClick={() => viewItem(x)}
                      >
                        <ZoomInIcon />
                      </button>
                      <button
                        type="button"
                        className="icon-btn"
                        onClick={(e:any) => onClick2Update(e, x)}
                      >
                        <EditIcon />
                      </button>
                      <button className="delete-btn" onClick={() => delete1(x)}>
                        x
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
          {showModal && data2List !== null && (
            <ItemModal onClose={onClose2Modal} data1={data2List} />
          )}
          {shownPage === EPage.addPage && (
            <AddItem onClick2CancelAdd={onClick3CancelAdd} add1={add2} />
          )}
        </tbody>
      </table>
      <button
        className="ml-0 mt-1 float-right icon-btn"
        type="submit"
        onClick={onClick2Add}
      >
        +
      </button>
    </section>
  );
};
export default MultipleAddListC;
