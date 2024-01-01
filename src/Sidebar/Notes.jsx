import Note from './Note'

const Notes = ({ notes, setIdx, setNotes }) => {
	return notes.map((note) => (
		<Note
			notes={notes}
			key={note.id}
			setIndex={setIdx}
			color={note.color}
			title={note.title}
			id={note.id}
			setNotes={setNotes}
		/>
	))
}

export default Notes
