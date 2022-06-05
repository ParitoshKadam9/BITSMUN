import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { useState } from 'react';
//mui styles
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './styles/home/ContactUs.module.css'
import Button from '@mui/material/Button';


function App() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
function handleSubmit(){

}

    return ( 
        <>
        <Box 
        sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'e5e5f7',
        opacity: 0.7,
        backgroundImage: '',
        backgroundSize: '37px 37px'
        }}
        >
        <center >
           <h1 data-shadow='Contact&nbsp;Us!'>Contact&nbsp;Us!</h1>
           <br />
           <h2>Send us a message and we'll get in touch!</h2>
           <br />
           <TextField
           value={name}
           onChange={(e) => setName(e.target.value)}
           sx={{ width: '65vw',backgroundColor: 'white',
           input: { color: 'black'},
           '&:hover': {
           backgroundColor: 'rgba(255, 255, 255, 0.70)',
           },
           }} id="filled-basic" label="Name" variant="filled" />
           <br />
           <br/>
           <TextField 
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           sx={{ backgroundColor: 'white', width: '65vw', input: { color: 'black', fill: 'white' },
           '&:hover': {
           backgroundColor: 'rgba(255, 255, 255, 0.70)',
           },
           }} id="filled-basic" label="Email" variant="filled" />
           <br />
           <br />
           <TextField
           value={message}
           onChange={(e) => setMessage(e.target.value)}
           id="standard-multiline-flexible"
           label="Message"
           multiline
           variant="filled"
           maxRows={5}
           sx={{ backgroundColor: 'white', width: '65vw',
           '&:hover': {
           backgroundColor: 'rgba(255, 255, 255, 0.70)',
           },
           }}
           />
           <br />
           <br />
           <br />
           <Button size="large" sx={{left:'29vw'}}variant="contained" onClick={handleSubmit}>Submit</Button>
        </center>
        </Box>  
        </>

     );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <Navbar />
    <App />
    <Footer/>
</React.StrictMode>
);

