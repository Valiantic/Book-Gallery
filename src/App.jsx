import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from './components/CardComponent';
import Book1 from './assets/book1.jpg'
import Book2 from './assets/book2.jpg'
import Book3 from './assets/book3.jpg'
import Book4 from './assets/book4.jpg'
import Book5 from './assets/book5.jpg'
import { Container, Col, Row }  from 'react-bootstrap';
import CarouselComponent from './components/CarouselHightlight';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CarouselComponent /> */}
      <br/>
      {/* 1 ROW WITH 5 CARD COMPONENTS */}
      <Container>
        <Row className='d-flex justify-content-center'>
          <Col className='d-flex justify-content-between gap-3'>
            <CardComponent title='Baka Sakali' text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' buttonText='Read This Book' image={Book1}/>
            <CardComponent title='Heartless' text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' buttonText='Read This Book' image={Book2}/>
            <CardComponent title='Mapapansin Kaya?' text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' buttonText='Read This Book' image={Book3}/>
            <CardComponent title='Worthless' text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' buttonText='Read This Book' image={Book4}/>
            <CardComponent title='Wave of Memories' text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' buttonText='Read This Book' image={Book5}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
