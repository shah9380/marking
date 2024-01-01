// TODO: Add delete button

import Split from 'react-split'
import { useState } from 'react'

import Sidebar from './Sidebar/Sidebar'
import NewNoteModal from './Sidebar/NewNoteModal'

import './react-split.css'
import Editor from './Editor/Editor'

const App = () => {
	const [notes, setNotes] = useState(
		JSON.parse(localStorage.getItem('notes')) || []
	)

	const [index, setIndex] = useState(0)

	const addNote = (note) => {
		const newNotes = [...notes, note]

		setNotes(newNotes)
		localStorage.setItem('notes', JSON.stringify([...notes, note]))
	}

	const updateNote = (id, updatedNote) => {
		const newNotes = [...notes]
		const index = notes.findIndex((note) => note.id === id)

		newNotes[index].note = updatedNote

		setNotes(newNotes)
		localStorage.setItem('notes', JSON.stringify(newNotes))
	}

	return notes.length > 0 ? (
		<Split
			className='h-screen split'
			sizes={[17, 83]}
			gutterSize={3}
			gutterAlign='start'
			minSize={250}
		>
			<div>
				<Sidebar
					addNote={addNote}
					notes={notes}
					setIndex={setIndex}
					setNotes={setNotes}
				/>
			</div>
			<div>
				<Editor
					notes={notes}
					note={notes[index]}
					index={index}
					updateNote={updateNote}
				/>
			</div>
		</Split>
	) : (
		<>
			<NewNoteModal addNote={addNote} />
			<div className='flex flex-col items-center justify-center h-screen gap-6'>
				<h1 className='text-3xl font-bold'>No Notes</h1>
				<button
					className='btn btn-accent'
					onClick={() =>
						document.getElementById('addNoteModal').showModal()
					}
				>
					Add New Note
				</button>
			</div>
		</>
	)
}

export default App;
