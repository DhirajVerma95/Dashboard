import React from 'react'
import './App.css'
import {Col,Row} from 'react-bootstrap';
import DashComponent from './Component/BodyComponent/DashComponent';
import Header from './Component/Header/Header';
import SidebarComponent from './Component/Header/SidebarComponent';

const DashboardComponent = () => {
  return (
    <>
     <div className='App'>
     <Header />
    <Row>
    <Col className="col-lg-1 col-md-2 col-sm-2 col-sm-2 "> <SidebarComponent /> </Col>
    <Col className="col-lg-11 col-md-10 col-sm-10 col-sm-10 mt-5 "> <DashComponent /> </Col>

    </Row> 
    </div>
    </>
  )
}

export default DashboardComponent