import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { activeNote, startDeleting } from "../actions/notes";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {

	const {active: note} = useSelector( state => state.notes);
	const [formValues, handleInputChange, reset] = useForm(note);
	const { body, title } = formValues;
	
	const activeId = useRef(note.id)
	const dispatch = useDispatch();
	useEffect(()=>{

		if( note.id !== activeId.current){
			reset(note)
			activeId.current = note.id;
		}

	}, [note, reset]);

	useEffect(() => {
		
		dispatch( activeNote( formValues.id, { ...formValues } ) );

	}, [formValues, dispatch]);

	const handleDelete = () => {
		dispatch( startDeleting(activeId.current) );
	}
	
	return (
		<div className='notes__main-content'>
			<NotesAppBar />

			<div className='notes__content'>
				
					<input
						type='text'
						placeholder='some awesome stuff'
                        className='notes__title-input'
						autoComplete="off"
						value={ title }
						onChange={ handleInputChange }
						name="title"
					/>

					<textarea
						placeholder='what happened today'
						className='notes__textarea'
						value={body}
						onChange={ handleInputChange }
						name="body"
					></textarea>

					{
						note.url && 
						<div className='notes__image'>
							<img
								src={note.url}
								alt='img'
							/>
						</div>
					}
			</div>

			<button 
				className="btn btn-danger"
				onClick={handleDelete}
			>
				Delete
			</button>
		</div>
	);
};
