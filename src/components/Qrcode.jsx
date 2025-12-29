import React, { useState } from 'react'
import { QRCodeCanvas } from "qrcode.react"; 


function Qrcode() {
    const [text,setText]=useState('')
    const [qrvalue,setQrvalue]=useState('')
    const handleclick=()=>{
         setQrvalue(text); 
    }
  return (
    <div>
        <h1>Qr code</h1>
      <input type="text" value={text} onChange={e=>setText(e.target.value)} placeholder='enter text ....' />
       <button onClick={handleclick}>QRgenerate</button>
       <div>
        {qrvalue&&<QRCodeCanvas value={qrvalue} size={200} />
}
       </div>
    </div>
  )
}

export default Qrcode
