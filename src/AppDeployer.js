import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './component/Kaban';
let array = ['first','second','third'];
let array2 = ['first','second','third','fourth','fifth'];
let props = [array,array2,array,array2];
export default function AppDeployer() {
  return <div>
   
      <div className= "d-flex flex-row flex-nowrap">
      {props.map((e,td)=>(<Card props={e}/>))}
          
    
      
      <div className="m-4 task-kadan-add-button p-2 d-flex justify-content-center align-items-center font-weight-bold" style={{width:'440px',height:'60px',flexShrink:'0',fontWeight:'bold'}}>+ Add Lane</div>
      </div>
                        
      
  </div>;
}


