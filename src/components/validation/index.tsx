import React from 'react'
import "./style.css"
import { 
  UserNameInput, 
  TotalPriceInput, 
  UserSelect,
  PaymentDateInput,
  FileUpload
} from './ValidationInput'

export function Validation() {
  return (
    <div className='f-12'>
      <h4 className='f-12'>Validation</h4>
     <table>
      <tr>  
        <td>
          <div>
          1. Text pattern1<br/> 
          ✓ Non requirement field<br/> 
          ✓ max 10 char<br/>
          ✓ number<br/>
          ✓ alphabet<br/>
          ✓ no special character except "-"<br/><br/>
          </div>
          <br/>
        </td>
        <td className='validation-sample-w'><UserNameInput/></td>
     </tr>
     <hr style={{border: 'none'}}/>
     <tr>    
      <td> 2. Number <br/>
          ✓ min max<br/>
          ✓ max 15 char<br/>
          ✓ number only<br/>
          ✓ no 0 at first of the digits
      </td>
      <td><TotalPriceInput/></td>
     </tr>
     <hr style={{border: 'none'}}/>
     <tr>
      <td> 4. Select<br/>
          ✓ requirement field<br/><br/>
      </td>
      <td><UserSelect/></td>
     </tr>
     <hr style={{border: 'none'}}/>
     <tr>
      <td>
          5.Date<br/>
          ✓ requirement field<br/>
          ✓ today or later<br/>
          ✓ YYYY/MM/DD format only<br/><br/>
       </td>
       <td>
       <PaymentDateInput/>
      </td>
     </tr>  
     <tr>   
      <td>
      6. File<br/>
          ✓ requirement field whenuser select OTC as payment type<br/>
          ✓ file name Limit<br/>
          ✓ File type(jpg, jpeg, png, bmp, tif, tiff, pdf, docx, xlsx)<br/>
          ✓ File size Max 10MB
      </td>
      <td><FileUpload/></td>
     </tr>
     </table>
    </div>
  );
}

export default Validation;

