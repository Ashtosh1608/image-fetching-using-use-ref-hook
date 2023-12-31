// import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from "react";

function App() {
  const [inimage, setInimage] = useState(null)
  const imageref = useRef(null)

  const onImageChange = (event) =>{
    if(event.target.files && event.target.files[0]){
      let img = event.target.files[0];
      setInimage({
        inimage : URL.createObjectURL(img)
      })
    }
  }
  
  return (
    <div className="App">
     <div>
          {/* <input type="file"  placeholder='take image' onChange={onImageChange}/> */}
          <input type="file"  placeholder='take image' ref={imageref} onChange={onImageChange} />
          <button >submit</button>
          <div>
            {inimage && (
              <img src={inimage.inimage} alt="" />
            )}
          </div>

            <div>
              {/* passing useref down here */}
              {/* <h1 onClick={()=>imageref.current.click()}>select Image</h1>  */}
              <button>

              <h1 onClick={()=>imageref.current.click()}>select Image</h1> 
              </button>
            </div>

     </div>
    </div>
  );
}

export default App;
