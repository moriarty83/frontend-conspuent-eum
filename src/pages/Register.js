import { useState } from 'react';
import User from '../models/User';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/Textfield';
import { useFormControl } from '@mui/material/FormControl';

const Register = () => {
	const [firstname, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

	const nav = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		User.register({firstname, lastname, email, password, nickname}).then((data) => {
			console.log(data);
			console.log(data.token);
			// localStorage.setItem("uid", data.token)

			if (data.status === 200) {
				localStorage.setItem("uid", data.token);
				nav("/profile");
				window.location.reload();
			}
		})
	}

    return (
		<>
			<form className="userEntryForm" onSubmit={handleSubmit}>
				<div className='form-group'>
          <TextField id="outlined-basic" 
            label="Outlined" 
            variant="outlined" 
            onChange={(e) => setFirstName(e.target.value)} 
            value={firstname}
          />
				</div>
				<div className='form-group'>
          <TextField id="outlined-basic" 
            label="Outlined" 
            variant="outlined" 
            onChange={(e) => setLastName(e.target.value)} 
            value={lastname}
          />
				</div>
        <div className='form-group'>
          <TextField id="outlined-basic" 
            label="Outlined" 
            variant="outlined" 
            onChange={(e) => setNickname(e.target.value)} 
            value={nickname}
          />
				</div>
        <div className='form-group'>
          <TextField id="outlined-basic" 
            label="Outlined" 
            variant="outlined" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
          />
				</div>
				<div className='form-group'>
        <TextField id="outlined-basic" 
            label="Outlined" 
            variant="outlined" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
          />
				</div>
        <Button type='submit' variant="outlined">Create Profile</Button>
			</form>
		</>
	);
}

export default Register;