import React from 'react'
import { Row,Accordion  } from 'react-bootstrap'
import { question } from '../data'
const Qalist = ({data,deleteOneitem}) => {
  //const datalocal=JSON.parse(localStorage.getItem("items"))
  const ondeleteitem=(ID)=>{
    if(data.length >= 1){
      const index = question.findIndex((item)=>item.id===ID);
      question.splice(index,1)
      deleteOneitem(question);
    }

  }
  return (
    <Row>
    <Accordion defaultActiveKey="0">
    
  

    {data.length >=1 ?(data.map((item,index)=>{
      return(<Accordion.Item key={index} eventKey={item.id}>
      <Accordion.Header><div className='m-auto'>{item.q}</div></Accordion.Header>
      <Accordion.Body>
      <div className='px-3 d-inline text-end'>{item.a}</div>
      <button onClick={()=> ondeleteitem(item.id)} className='btn-color'>Delete Question</button>
      </Accordion.Body>
    </Accordion.Item>
    )
    })):  <h2 className='fs-4 text-center p-5'> No Questions Yet </h2>


    }
    
  </Accordion>
    </Row>
  )
}

export default Qalist
