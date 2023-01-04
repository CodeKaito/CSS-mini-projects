import './App.css';
import { useState, useEffect } from 'react';
import { InfinitySpin } from  'react-loader-spinner'
//import ClipLoader from "react-spinners/ClipLoader"; <ClipLoader color={'#D0021B'} loading={loading} size={100} />

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
  }, 3000)

},[])
  return (
    <div className="App">
      {
        loading ? 
        <InfinitySpin width='200' color="#D0021B"/>
        :
      <div>
        <h1>Hello</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        </p>
      </div>
    }
    </div>
  );
}

export default App;
