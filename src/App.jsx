import React from 'react'
import Qrcode from './components/Qrcode'
import Clock from './components/Clock'

function App() {
  return (
    <div>
      <Clock/>
      <h1>Qr code generator</h1>
      <Qrcode/>
    </div>
  )
}

export default App
