import React from "react";
import {useDispatch, useSelector} from 'react-redux';

import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startLoginEmailPassword, startGoogleLogin } from "../actions/auth";


export const LoginScreen = () => {
	
	const dispatch = useDispatch();
	const {loading} = useSelector(state => state.ui)
	const [formValues, handleInputChange ] = useForm({
		email: 'jp7patrick@gmail.com',
		password: '123456'
	});

	const {email, password} = formValues;
	
	const handleLogin = (ev)=>{
		ev.preventDefault();
		dispatch(startLoginEmailPassword(email, password));
	}

	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin());
	}
	return (
		<>
			<h3 className='auth__title'>LoginScreen</h3>

			<form 
				onSubmit={handleLogin}
				className="animate__animated animate__fadeIn animate__faster"
			>
				<input
					type='email'
					placeholder='email'
					name='email'
					autoComplete='off'
					className='auth__input'
					value={email}
					onChange={handleInputChange}
				/>
				<input
					type='password'
					placeholder='password'
					name='password'
					className='auth__input'
					value={password}
					onChange={handleInputChange}
				/>

				<button 
					type='submit' 
					className="btn btn-primary btn-block"
					disabled = {loading} 
				>
					Login
				</button>

				<hr />
				<div className="auth__social-networks">
					<p>Login with social networks</p>
					<div className='google-btn' onClick={handleGoogleLogin}>
						<div className='google-icon-wrapper'>
							<img
								className='google-icon'
								src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
								alt='google button'
							/>
						</div>
						<p className='btn-text'>
							<b>Sign in with google</b>
						</p>
					</div>
				</div>

				<Link to='/auth/register' className="link">Create new account</Link>
			</form>
		</>
	);
};
