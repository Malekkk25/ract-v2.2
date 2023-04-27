import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Card, Container, Row, Col } from 'react-bootstrap';
import Tables from "./SaleTable";
import { useNavigate } from 'react-router-dom';


import {
  Grid,
  
  Box,
  Stack,
  IconButton,
  Fab,
  ButtonGroup,
} from "@mui/material";
import "./Login.css";
import FeatherIcon from "feather-icons-react";
import { useRef ,  useEffect ,useContext} from "react";
import AuthContext from '../context/AuthProvider'
function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios.post('http://localhost:3001/api/login', data)
  //   .then ((response)=> {
  //       navigate('/');
  //       console.log(response);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     alert('Error finding user')
  //  }); 
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let result=await fetch("http://localhost:8000/api/login",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"*/*"
      },
      body:JSON.stringify(data)

    })
    result=await result.json()
    // 
    console.log(JSON.stringify(result))
    if(JSON.stringify(result) =="error"){
      console.log("error")
    }
    else{
    
    navigate('/')
    localStorage.setItem("user-info",JSON.stringify(result))}
  };

  const data={
    email : email,
    password: password,

};

  return (
    <>
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Row className="justify-content-center">
        <Col lg={90}>
          <Card>
            <Card.Header>
              <center>
            <Fab color="secondary" disabled aria-label="add">
              <FeatherIcon icon="user" width="20" height="20" />
            </Fab>
            </center>
            </Card.Header>
            <Card.Body>
              <Form >
                <Form.Group size="lg" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <center>
                <Button variant="contained" color="primary" type="submit" onClick={handleSubmit} >
             Login
            </Button>
            </center>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
    </>
  );
}

export default LoginPage;
