// import React, { useState } from 'react'
// import { QRCodeCanvas } from "qrcode.react"; 
// // import {useNavigate} from "react-router-dom"



// function Qrcode() {
//     const [text,setText]=useState('')
//     const [qrvalue,setQrvalue]=useState('')
    
//     const handleclick=()=>{
//          setQrvalue(text); 
//     }
//     const handleclick1=()=>{
//         window.open(qrvalue, "_blank");
//     }
    
//   return (
//     <div>
        
//       <input type="text" value={text} onChange={e=>setText(e.target.value)} placeholder='enter text ....' />
//        <button onClick={handleclick}>QRgenerate</button>
       
//        <div>
//         {qrvalue&&<QRCodeCanvas value={qrvalue} size={200} />
        
// }
//        </div>
//        <button onClick={handleclick1}>click</button>
//     </div>
//   )
// }

// export default Qrcode
import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function Qrcode() {
  const [text, setText] = useState("");
  const [qrvalue, setQrvalue] = useState("");

  // add https:// if missing
  const normalizeUrl = (url) => {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return "https://" + url;
    }
    return url;
  };

  const handleclick = () => {
    if (!text) {
      alert("Enter text first");
      return;
    }
    setQrvalue(normalizeUrl(text));
  };

  const handleclick1 = () => {
    if (!qrvalue) {
      alert("Generate QR code first");
      return;
    }
    window.open(qrvalue, "_blank");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="enter text ...."
      />

      <button onClick={handleclick}>QR generate</button>

      <div>
        {qrvalue && <QRCodeCanvas value={qrvalue} size={200} />}
      </div>

      <button onClick={handleclick1}>click</button>
    </div>
  );
}

export default Qrcode;
