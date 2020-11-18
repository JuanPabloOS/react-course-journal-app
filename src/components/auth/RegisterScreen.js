import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { useForm } from "../../hooks/useForm";
import { startRegisterWithEmailPasswordName } from "../actions/auth";
import { setError, removeError } from "../actions/ui";

export const RegisterScreen = () => {
	const [formValues, handleInputChange ] = useForm({
		name: "",
		email: "",
		password: "",
		password2: "",
	});
	const dispatch = useDispatch();
	const { msgError } = useSelector( state => state.ui );
	
	const { name, email, password, password2 } = formValues;


	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch( setError( "Name required" ));
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch( setError( "Email invalid" ));
			return false;
		} else if (password !== password2 || password.length < 5) {
			dispatch( setError( "Password should be at least 6 characters and both passwords should match" ));
			return false;
		}
		dispatch( removeError() );
		return true;
	};

	const handleRegister = ev => {
		ev.preventDefault();
		if(isFormValid()){
			dispatch( startRegisterWithEmailPasswordName(email, password, name) )
		}
	};
	return (
		<>
			<h3 className='auth__title'>Register</h3>
			{
				msgError &&
				(
					<div className="auth__alert-error">
						{msgError}
					</div>
				)
			}
			<form 
				onSubmit={handleRegister}
				className="animate__animated animate__fadeIn animate__faster"
			>
				<input
					type='text'
					placeholder='Name'
					name='name'
					autoComplete='off'
					className='auth__input'
					value={name}
					onChange={handleInputChange}
				/>
				<input
					type='email'
					placeholder='Email'
					name='email'
					autoComplete='off'
					className='auth__input'
					onChange={handleInputChange}
					value={email}
				/>
				<input
					type='password'
					placeholder='Password'
					name='password'
					className='auth__input'
					onChange={handleInputChange}
					value={password}
				/>
				<input
					type='password'
					placeholder='Confirm password'
					name='password2'
					className='auth__input'
					onChange={handleInputChange}
					value={password2}
				/>
				<button type='submit' className='btn btn-primary btn-block mb-5'>
					Register
				</button>

				<Link to='/login' className='link'>
					Already have an account?
				</Link>
			</form>
		</>
	);
};
