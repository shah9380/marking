import Header from './Header'
import Notes from './Notes'

const Sidebar = ({ addNote, notes, setIndex, setNotes }) => {
	return (
		<div>
			<Header addNote={addNote} />
			<Notes notes={notes} setIndex={setIndex} setNotes={setNotes} />
			<div className='hidden bg-orange-300 bg-yellow-300 bg-blue-300 bg-indigo-300 bg-purple-300 bg-pink-300 hover:bg-orange-400 hover:bg-yellow-400 hover:bg-blue-400 hover:bg-indigo-400 hover:bg-purple-400 hover:bg-pink-400'></div>
		</div>
	)
}

export default Sidebar
