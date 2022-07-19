import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Button = styled.button`
    font-size: 20px;
    padding: 70px 0px;
    border-top-right-radius: 30px 25px;
    border-bottom-right-radius: 30px 25px;
    margin: 5px -2px;
    cursor: pointer;
  `;

  return (
    <>
      <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        height: '80vh',
      }} >
        <Button variant="outline-dark " onMouseOver={handleShow}>
          {'>'}
        </Button >
      </div>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Pages</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          You haven't taken any notes yet.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;