import logo from './logo.svg';
import './App.css';
import Userform from './component/UsersForm/Userform';
import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import BasicModal from './component/modal/UserList';
function App() {

  const data = JSON.parse(localStorage.getItem("Data"));
  const [userData, setUserData] = useState(data);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)
  
  return (
    <div>
      <Userform userData={userData} setUserData={setUserData} />
      <div className='buttons'>
        <Button onClick={handleOpen} variant="contained">Open</Button>
      </div>
      <BasicModal open={open} handleOpen={handleOpen} handleClose={handleClose} setUserData={setUserData} userData={userData}/>
    </div>
  );
}

export default App;
