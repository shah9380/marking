import { useState } from 'react'

const colors = ['orange', 'yellow', 'blue', 'indigo', 'purple', 'pink']

const NewNoteModal = ({ addNote }) => {
	const [titleInput, setTitleInput] = useState('')

	const handleOnChangeTitleInput = (event) => {
		setTitleInput(event.target.value)
	}

	const handleClickAddNote = (event) => {
		event.preventDefault()

		if (!titleInput) {
			return
		}

		addNote({
			id: Date.now(),
			title: titleInput,
			color: colors[Math.floor(Math.random() * colors.length)],
			note: '# ' + titleInput.charAt(0).toUpperCase() + titleInput.slice(1),
		})

		setTitleInput('')
		document.getElementById('closeModal').click()
	}

	return (
		<dialog id='addNoteModal' className='modal'>
			<form className='flex flex-col gap-6 modal-box'>
				<h3 className='text-lg font-bold'>Begin with Note Title</h3>
				<input
					type='text'
					className='input input-bordered'
					onChange={handleOnChangeTitleInput}
					value={titleInput}
				/>
				<button
					className='text-black bg-blue-400 btn hover:bg-blue-500'
					onClick={handleClickAddNote}
					type='submit'
				>
					Add Note
				</button>
			</form>
			<form method='dialog' className='modal-backdrop'>
				<button id='closeModal'>X</button>
			</form>
		</dialog>
	)
}

export default NewNoteModal
