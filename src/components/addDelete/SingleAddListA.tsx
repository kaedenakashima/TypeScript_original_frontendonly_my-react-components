import React, { Fragment, useState } from "react";
import {Button} from 'reactstrap'
interface IItem {
  id: string;
}
type TAddProps = {
  add1:any
}
const AddItem: React.FC<TAddProps> = (props) => {
  const onClick2Add = (event: React.FormEvent) => {
    event.preventDefault()
    props.add1()
  }
  return (
   <button
   className='icon-btn'
   type="submit"
   onClick={onClick2Add}
 >
   +
 </button>
  )
}
export const SingleAddListA: React.FC = () => {
  const [list1, setList1] = useState<IItem[]>([])
  const add2 = (number: number) => {
    setList1((x) => [
      ...x,
      {
        id: Math.random().toString()
      },
    ])
  }
  const onClick2Delete = (data1Id: string) => {
    setList1((x) => {
      return x.filter((x) => x.id !== data1Id)
    })
  }
  return (
    <section>
    <h4 className='f-12'>Add Item with Function Component</h4>
      <AddItem add1={add2}/>
      <ul className="text-xs">
        {list1.map((x, i) => (
          <Fragment>
              <li key={x.id}>
                <span>{i+1}</span>
                <div>
                 display
                  <button
                    className="delete-btn"
                    onClick={onClick2Delete.bind(null, x.id)}
                  >
                    x
                  </button>
                </div>
              </li>
          </Fragment>
        ))}
      </ul>
      </section>
  );
}
export default SingleAddListA;
