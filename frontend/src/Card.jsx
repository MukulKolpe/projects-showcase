import React from "react"
import { Card,Button,Row,Container,Col , Modal} from "react-bootstrap"
import { useState } from "react";


const CustomCard = ({ProjectId,ProjectName,ProjectDepartment,ProjectDivision,ProjectDomain,ProjectDescription,ProjecTechStacks,ProjecDuration,ProjectMentor,ProjectCode,ProjectTeam,image}) => {
    const [modalShow, setModalShow] = useState(false);
    console.log(ProjecTechStacks);
    return(
        <>
        <button  style={{border: 'none', backgroundColor : '#fff', padding: '0'}} onClick={() => setModalShow(true)}>
        <Card className="rounded-top"
          style={
            { 
              width: '18rem',
              margin: '1rem 1rem 1rem 1rem'
            }
          }>
  <Card.Img variant="top" src={image} 
  style={{
    height : '200px'
  }}
  />
  <Card.Body
    style ={{
      height : '140px'
    }}
  >
    <Card.Title
      style={
        {
          position : 'relative',
          textAlign: 'left',
          marginTop : '10px',
        }
      }
      >{ProjectName}</Card.Title>
    <Card.Text 
      style={
        {
          position : 'relative',
          left : '5px',
          textAlign: 'left',
          color : 'rgb(60,60,60)'
        }
      }>
      <h6>{ProjectDomain}</h6>

    </Card.Text>

    <Card.Text 
      style={
        {
          position : 'relative',
          width : '80px',
          height : '20px',
          textAlign : 'right',
          backgroundColor: "#FF2400",
          color : 'white',
          fontWeight : '400',
          left : '-16px'
        }
      }>
      <h6>Hosted</h6>
    </Card.Text>
    <Card.Text 
      style={
        {
          position : 'relative',
          margin: '1rem 0 0 0',
          textAlign : 'right',
          width : '120px',
          left : '130px',
          top : '-10px'
        }}>
        <div>
          <ul>
            <li>
              <h6>{ProjecTechStacks}</h6>
            </li>
          </ul>
        </div>
      
    </Card.Text>

    
       
  </Card.Body>

</Card>
</button>

<Modal show= {modalShow} animation={false} >
            <Modal.Body 
              style= 
              {
                {
                  height: '400px',
                }
              }>
            <Container>
            <Row>
           <Col
           style={{
             height : '100px'
           }}
           >
           <img style={{height: '200px',position:'relative',left :'140px',alignItems:'center'}}class="img-fluid" src= {image} alt=""></img> 
           </Col>
           <Col>
           <Row
            style={{
              textAlign:'left',
              left:'220px',
              fontSize : '1.8rem',
              position : 'relative',
               top:'100px',
              fontWeight : 'bold'
            }}
           >{ProjectName}</Row>
           <Row
            style={{
              left:'140px',
              position : 'relative',
              fontSize : '1.4rem',
              fontWeight : 'bold',
              top:'105px',
              color : 'rgb(133, 126, 126)'
            }}
           >{ProjectDomain}</Row>
           <Row
            style={{
              fontWeight : 'bold',
              left:'140px',
              position : 'relative',
              fontSize : '1.2rem',
              top:'110px',
            }}
           >Department: {ProjectDepartment}</Row>
           {/* <Row
           style={{
             position : 'relative',
             top : '5px',
             fontWeight : 'bold',
              
           }}>Year: {year}</Row> */}
           {/* <Row
           style={{
            position : 'relative',
            left : '130px',
            top : '-18px',
            fontWeight : 'bold',
            
          }}>Sem: {sem}</Row> */}
           <Row
           style={{
            position : 'relative',
            fontWeight : 'bold',
            left:'140px',
            top : '110px'
           }}
           >Languages Used : {ProjecTechStacks }</Row>



           </Col>
           </Row>
           <Row
           style = {{
             position : 'relative',
             top :'115px',
             width :'460px',
             left:'120px',
             height : '200px',
           }}
           >About this Project: <br/>{ProjectDescription}</Row>
           </Container>

            </Modal.Body>
           
            

            <Button style= 
            {{
              height: '30px', 
              position : 'relative',
              bottom : '20px',
              fontSize :'1rem',
              lineHeight : '10px',
              width : '80px',
              left:'140px',
            }} onClick={() => setModalShow(false)} >Close</Button>
            
          </Modal>
    

</>
    )

}

export default CustomCard