import { useState } from 'react';
import User from '../models/User';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import { TextField, Button } from '@mui/material';

// import TextField from '@mui/material/Textfield';
import { useFormControl } from '@mui/material/FormControl';

const NewUser = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

	const nav = useNavigate();
  
	function handleSubmit(event) {
		event.preventDefault();
		User.register({firstName, lastName, email, password, nickname}).then((data) => {
			console.log(data);
			console.log(data.token);
			// localStorage.setItem("uid", data.token)

			if (data.status === 200) {
				localStorage.setItem("uid", data.token);
				nav("/dashboard");
				window.location.reload();
			}
		})
	}

    return (
		<>
			<form className="userEntryForm" onSubmit={handleSubmit}>
				<div className='form-group'>
          <TextField id="outlined-basic" 
            label="First Name" 
            variant="outlined" 
            onChange={(e) => setFirstName(e.target.value)} 
            value={firstName}
            required
          />
				</div>
				<div className='form-group'>
          <TextField id="outlined-basic" 
            label="Last Name" 
            variant="outlined" 
            onChange={(e) => setLastName(e.target.value)} 
            value={lastName}
            required
          />
				</div>
        <div className='form-group'>
          <TextField id="outlined-basic" 
            label="Nickname" 
            variant="outlined" 
            onChange={(e) => setNickname(e.target.value)} 
            value={nickname}
            required
          />
				</div>
        <div className='form-group'>
          <TextField id="outlined-basic" 
            label="Email" 
            variant="outlined" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            required
          />
				</div>
				<div className='form-group'>
        <TextField id="outlined-basic" 
            label="Password" 
            variant="outlined" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
            required
            type="password"
          />
				</div>
        <Button type='submit' variant="outlined">Create Profile</Button>
			</form>
		</>
	);
}

export default NewUser;