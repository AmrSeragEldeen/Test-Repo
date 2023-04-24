import {Container,Row,Col} from 'react-bootstrap'
import Train from './components/Train';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Qalist from './components/Qalist';
import Forms from './components/forms';
import { question } from './data';
import { useState } from 'react';

  
function App() {
  const [data, setdata] = useState(question)
  //Add Item
  const addItem =()=>{
    localStorage.setItem("items",JSON.stringify([...question]))
    setdata([...question])
  }
// DELETE ALL DATA ITEM
  const deleteallitem =()=>{
    question.splice(0,question.length)
    localStorage.removeItem("items")
    setdata([])

  }
  const deleteOneitem =(Item)=>{
    localStorage.setItem("items",JSON.stringify([...Item]))
    setdata([...Item])

  }

  return (
    <div>
    <Container calssName="p-5">
    <Row className='justify-content-center'>
    <Col sm="4"> <div className='fs-3 text-center py-2'> Questions and Answers </div> </Col>
    <Col sm="8">
    <Forms onadd={addItem}/>
    <Qalist data={data} deleteOneitem={deleteOneitem} />
    {
      data.length >= 1 ? (<button onClick={deleteallitem} className='btn-color w-100 py-2 '>Delete all</button>): null
    }
    <Train/>
    <Train/>
    
    
    </Col>

    
    </Row>
    
    
    
    
    
    
    
    
    
    
    </Container>
    </div>
    
  );
}

export default App;
