
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as contactListApi from "../backend/API";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function EditContactModal(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(props.item.name);
  const [email, setEmail] = useState(props.item.email);
  const [phone, setPhone] = useState(props.item.phone);
  const [id, setId] = useState(props.id);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (val) => {
    let obj = {};
    obj.id = id;
    obj.name = name;
    obj.phone = phone;
    obj.email = email;
    if (val === "Add" && id && name && phone && email) {
      contactListApi
        .createContact(id, name, email, phone)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      props.getData(obj, "add");
      toast.success("Contact Add Succesfully!");
    } else if(id && name && phone && email) {
      contactListApi
        .updateContact(id, name, email, phone)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      props.getData(obj, "update");
      toast.success("Contact Updated Succesfully!");
    }
    else{
      toast.error('All fields are required!')
    }
    console.log(obj);
    handleClose();
  };
  useEffect(() => {
    setId(props.id);
  }, [props.id]);
  useEffect(() => {
    if (props.save_btn === "Add") {
      console.log(props.id);
      setName("");
      setPhone("");
      setEmail("");
    }
  }, []);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={handleShow}
      >
        {props.btn_value}
      </button>

      <Modal show={show} onHide={handleClose}  >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="">ID</label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter ID"
              aria-label="Id"
              aria-describedby="basic-addon1"
              value={id}
              onChange={(event) => {
                setId(event.target.value);
              }}
              disabled
            />
          </InputGroup>
          <label htmlFor="">Name</label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter Name"
              aria-label="Enter Your Name"
              aria-describedby="basic-addon2"
              value={name}
      
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          
          </InputGroup>

          <label htmlFor="">Email</label>
          <InputGroup className="mb-3  has-validation">
            <Form.Control
              placeholder="Enter Email"
              aria-label="Enter Your Email"
              aria-describedby="basic-addon2"
              value={email}
              id='validationCustomUsername'
              required
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </InputGroup>
          <label htmlFor="">Mobile No</label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter Mobile No"
              type="number"
              aria-label="Mobile No"
              aria-describedby="basic-addon2"
              value={phone}
              minLength="5"
              maxLength="12"
              required='required'
              onChange={(event) => {
                setPhone(event.target.value);
              }}
              
            />
          </InputGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="sm" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => handleSubmit(props.save_btn)}
          >
            {props.save_btn}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default EditContactModal;
