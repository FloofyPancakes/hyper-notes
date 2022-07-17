import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div style={{float: "left"}} onMouseOver={handleShow}>
        <h1 style={{transform: {rotate: "90deg"}, position: 'fixed', color: 'white' }}>SIDEBAR</h1>
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