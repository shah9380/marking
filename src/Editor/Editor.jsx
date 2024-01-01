import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'

import ReactMarkdown from 'react-markdown'
import { useMemo } from 'react'
import ReactDOMServer from 'react-dom/server'

const Editor = ({ note, noteUpdate }) => {
	const handleChangeNote = (value) => {
		noteUpdate(note.id, value)
	}

	const customRendererOptions = useMemo(() => {
		return {
			previewRender() {
				return ReactDOMServer.renderToString(
					<ReactMarkdown className='markdown'>{note.note}</ReactMarkdown>
				)
			},
			minHeight: '83vh',
		}
	}, [note])

	return (
		<div>
			<SimpleMDE
				value={note.note}
				onChange={handleChangeNote}
				options={customRendererOptions}
			/>
		</div>
	)
}

export default Editor
