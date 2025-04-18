import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';

const CartSidebar = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="m-3" onClick={handleShow}>
        Open Cart
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Your cart is empty.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartSidebar;
