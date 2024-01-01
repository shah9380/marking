import { FaTrash } from 'react-icons/fa6'

const Note = ({ notes, setIndex, color, title, id, setNotes }) => {
	const handleClickNote = (event) => {
		const targetIndex = Number(event.target.id)
		const index = notes.findIndex((note) => note.id === targetIndex)

		setIndex(index)
	}

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== Number(id))
		console.log(newNotes)
		setNotes(newNotes)
		localStorage.setItem('notes', JSON.stringify(newNotes))
	}

	return (
		<div
			className={`text-lg font-medium text-black bg-${color}-300 hover:bg-${color}-400 duration-150 w-full flex justify-between items-center`}
		>
			<button
				className='w-9/12 h-full px-4 py-3 text-left capitalize'
				id={id}
				onClick={handleClickNote}
			>
				{title}
			</button>
			<button className='mr-4' onClick={() => deleteNote(id)}>
				<FaTrash className='duration-150 hover:text-red-500' />
			</button>
		</div>
	)
}

export default Note
