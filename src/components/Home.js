import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import EditContactModal from "../modal/EditContactModal";
import * as contactListApi from '../backend/API';
import '../styles/Home.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState([]);
  
  useEffect(() => {
    let storedData=JSON.parse(localStorage.getItem('contactList'));
    if(storedData){
      setShowData(storedData);
      setData(storedData);
    }else{
      getContactList();
    }
  }, []);

const saveDataToLocalStorage =(data)=>{
  localStorage.setItem('contactList',JSON.stringify(data));
}
  const getContactList = () => {
    contactListApi.getCotanctList().then((response) => {
      saveDataToLocalStorage(response.data);
      let contactList = JSON.parse(localStorage.getItem('contactList')) || [];
      setShowData(contactList);
    });
  };

  const getData = (item, value) => {
    let updatedData = [...showData]; // Create a copy of the data array
    if (value === 'update') {
      updatedData = updatedData.map((eachContact) =>
        eachContact.id === item.id
          ? { ...eachContact, name: item.name, email: item.email, phone: item.phone }
          : eachContact
      );
    } else if (value === 'add') {
      updatedData.push(item);
    }
    setData(updatedData); 
    setShowData(updatedData); 
    saveDataToLocalStorage(updatedData);
  };

  const handleDelete = (id) => {
    contactListApi.deleteContact(id).then((response)=>{
      console.log(response);
    }).catch(error=>{
      console.log(error);
    })
    const updatedData = showData.filter((item) => item.id !== id);
    setData(updatedData);
    setShowData(updatedData);
    saveDataToLocalStorage(updatedData);
    toast.success("Contact Delete Succesfully!");
  };
  const generateNewId = () => {
    // Generate a new ID that is one more than the highest existing ID
    const highestId = showData.reduce((acc, curr) => Math.max(acc, curr.id), 0);
    return highestId + 1;
  };

  return (
    <div>
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

      <div className='home_search_box'>
        <h5 className='font_style'>
          Total:<span className='total_value'>{showData.length}</span>
        </h5>
        <div className='add-btn '>
          
          <EditContactModal
            item=""
            btn_value='Add Contact'
            title='Add Contact'
            save_btn='Add'
            id={generateNewId()}
            getData={getData}
          />
        </div>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {showData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <EditContactModal
                  item={item}
                  btn_value='Edit'
                  title='Update Contact'
                  save_btn='Update'
                  id={item.id}
                  getData={getData}
                />
                <button
                  type='button'
                  className='btn btn-danger btn-sm mx-2'
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default Home;
