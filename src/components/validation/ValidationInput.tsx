import React, {useState} from 'react'

export function UserNameInput(){
  const [fileNumber, setFileNumber] = useState('')
  const [err, setErr] = useState(false)
  const onSubmit2 = (e) => {
    e.preventDefault()
    var regExScan = new RegExp("^[A-Za-z0-9-]{0,10}$");
    if (regExScan.test(fileNumber) === false){
        setErr(true)
    }
  }
  return (
    <>
    <form className='input-item2' onSubmit={onSubmit2}>
        <label>User Name</label>
        <input placeholder='ex.user name User-123' onChange={e=> setFileNumber(e.target.value)} />
       {/* ▼ user can get error result while typing */}
        { !( /^[A-Za-z0-9-]{0,10}$/.test(fileNumber))?<span>Limit 10 char or digit, only "-" is allowed special character.</span>:''}
       {/* ▼ user can get error after submit*/}
       { err && !( /^[A-Za-z0-9-]{0,10}$/.test(fileNumber))?<span>[Ver2 (Appears after submit)] Limit 10 char or digit, only "-" is allowed special character.</span>:''}
       <button className='mt-1'>Check</button>
    </form>
    </>
  )
}
export function TotalPriceInput(){
  const [totalPrice, setTotalPrice] = useState('')
  const [err, setErr] = useState(false)
  const onSubmit2 = (e) => {
    e.preventDefault()
    var regExScan = new RegExp("^([1-9][0-9]{0,14})$");
    if (regExScan.test(totalPrice) === false){
        setErr(true)
    }
  }
  return (
    <>
    <form  className='input-item2' onSubmit={onSubmit2}>
        <label>Total Price *</label>
        <input placeholder='ex. Payment Amount#1 15000' defaultValue='0' className='price-input' onChange={e=> setTotalPrice(e.target.value)} />
       {/* ▼ user can get error result while typing */}
       { !( /^([1-9][0-9]{0,14})$/.test(totalPrice))?<span>Limit 15 digit, number only, 0 can not be at the first digit.</span>:''}
       {/* ▼ user can get error after submit*/}
       { err && !( /^([1-9][0-9]{0,14})$/.test(totalPrice))?<span>[Ver2 (Appears after submit)] Limit 15 digit, number only, 0 can not be at first of the  digits.</span>:''}
       <button className='mt-1'>Check</button>
    </form>
    </>
  )
}
export function UserSelect(){
  const [user, setUser] = useState('')
  const [err, setErr] = useState(false)
  // displays after sbmit
  const onSubmit2 = (e) => {
    e.preventDefault()
    if(user.length === 0 ){
      setErr(true)
    } 
  }
  return (
    <>
    <form  className='input-item2' onSubmit={onSubmit2}>
     <label>User *</label>
      <select
        id="user"
        className="form-control-cms rounded-0"
        placeholder="Select User"
        onChange={e=> setUser(e.target.value)}
      >
        <option value="">Select</option>
        <option>User1</option>
        <option>User2</option>
        <option>User3</option>
      </select>
        {user.length === 0 ? <span>Please select user</span>:''} 
    </form>
    </>
  )
}
export function PaymentDateInput(){
  const [paymentDate, setPaymentDate] = useState('')
  var today = new Date()
  var inputDate = new Date(paymentDate)
 return (
    <>
    <form className='input-item2'>
        <label>Due date*</label>
        <input type='date' onChange={e=> setPaymentDate(e.target.value)} />
       {/* ▼ user can get error result while typing */}
       {paymentDate === ''?<span>Please input due date</span>:''}
        {inputDate.toLocaleDateString() !== today.toLocaleDateString() && new Date(paymentDate) <= new Date() ? <span>Date must be today or after today</span>:''}
    </form>
    </>
  )
}
export function FileUpload(){
  const [file, setFile] = useState()
  const [fileSize, setFileSize] = useState()
  const [err, setErr] = useState(false)
  const onSubmit2 = (e) => {
    e.preventDefault()
    console.log('clicked!');
    setFile(e.target.files[0]);
    console.log(setFile);
  }
  const onChange2 = (e) => {
    e.preventDefault()
    setFile(e.target.files[0]);
    let fileSize = e.target.files[0].size
    setFileSize(e.target.files[0].size)
    if (fileSize <= 1048576 ){
      //display with KB
      console.log('File Size:', Math.round(fileSize / 1024), 'KB')  
    } else if (Math.round((fileSize / 1024 ** 2)*100)/100 >= 1 ) {
      //exceeded 10MB
      setErr(true)
    } else {
      //display with MB
      console.log('File Size: 1MB', Math.round((fileSize / 1024 ** 2)*100)/100, 'MB')
    } 
  }
  return (
    <>
    <form className='input-item2' onSubmit={onSubmit2}>
        <label>File Upload</label>
        <input 
          type='file' 
          accept="image/png, image/jpeg, image/jpg, image/gif, image/bmp, image/tiff, image/pdf, image/docx, image/xlsx" 
          onChange={onChange2} 
        />
        <span className='sub-txt'>jpg, jpeg, png, bmp, tif, tiff, pdf, docx, xlsx file only</span>
        <span className='sub-txt'>max 10MB</span>
       {/* ▼ user can get error result while typing */}
        {!file ? <span>Upload required.</span>:''}
        {/* ▼ user can get error result after submit */}
        {err ? <span>Please select a file less than 10MB.</span>:''}
        {/* <br/><br/><button>Submit</button> */}
    </form>
    </>
  )
}