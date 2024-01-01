import { FaPlus } from 'react-icons/fa6'
import NewNoteModal from './NewNoteModal'

const Header = ({ addNote }) => {
	return (
		<header className='flex items-center justify-between border-b-2 bg-accent h-[8vh]'>
			<h1 className='p-4 text-3xl font-bold font-neon text-zinc-900'>
				Notes
			</h1>
			<div className='p-4'>
				<button
					className='bg-black btn btn-circle btn-sm'
					onClick={() => {
						document.getElementById('addNoteModal').showModal()
					}}
				>
					<FaPlus />
				</button>
			</div>
			<NewNoteModal addNote={addNote} />
		</header>
	)
}
export default Header
