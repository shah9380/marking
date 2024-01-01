
# Markdown-Editor
This is a simple React notes app that allows users to create, update, and delete notes. It uses a split layout with a sidebar for managing notes and an editor for viewing and editing individual notes.
## Getting Started
1. Clone the repository:
```bash
git clone <repository-url>
```
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm start
```
## Features
- **Split Layout:** The app uses the `react-split` library to create a split layout with a resizable sidebar and editor.
- **LocalStorage:** Notes are stored in the browser's `localStorage` to persist data between sessions.
- **Add Note:** Users can add new notes using the "Add New Note" button in the sidebar.
- **Update Note:** Notes can be updated by selecting a note in the sidebar and editing it in the editor.
- **No Notes Message:** If there are no notes, a message is displayed with an option to add a new note.
## File Structure
- **`App.js`:** The main component containing the app logic, state, and rendering of the split layout.
- **`Sidebar.js`:** Component responsible for rendering the sidebar with the list of notes and the "Add New Note" modal.
- **`NewNoteModal.js`:** Modal component for adding new notes.
- **`Editor.js`:** Component for displaying and updating individual notes.
- **`react-split.css`:** Styles for the split layout.
## Contributing
Feel free to contribute by opening issues or submitting pull requests. Make sure to follow the [code of conduct](CODE_OF_CONDUCT.md).
## License
This project is licensed under the [MIT License](LICENSE).
