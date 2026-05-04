# Notebook-Multi-File-Markdown-Editor
1. Project Choice

I chose the project idea **"The Notebook - Multi-File Markdown/Rich Text Editor"**.

A lightweight, browser-based Markdown note-taking application with a three-panel layout: file list, live editor, and rendered preview.

---

2. Justification of Tools

- **HTML**: Used to structure the layout of the application, including the sidebar, editor, and preview sections.
- **CSS**: Used to create a clean, modern, and responsive UI inspired by professional productivity tools.
- **JavaScript**: Handles all application logic including note management, editing, search functionality, and exporting features.
- **LocalStorage (Web API)**: Used to store notes in JSON format directly in the browser without requiring a backend server.
- **Marked.js**: Used to convert Markdown content into HTML for real-time preview rendering.
- **html2pdf.js**: Used to export notes as downloadable PDF files.

These tools were chosen because they are lightweight, browser-compatible, and ideal for building a fully functional frontend-only application.

---

3. High-Level Approach

The application was developed using a **modular frontend architecture** with a single-page design.

Strategy:
- A **data-driven approach** was used where all notes are stored as JSON objects in LocalStorage.
- The UI dynamically updates based on the current state of the notes array.
- A **component-based structure** was used:
  - Sidebar → handles note selection, creation, deletion, search
  - Editor → handles text input and formatting
  - Preview → renders formatted output

Logic Flow:
1. Load notes from LocalStorage on startup
2. Render sidebar with note list
3. Allow user interactions (create, rename, delete, select)
4. Update editor and preview in real time
5. Save changes automatically to LocalStorage

---

4. Final Prompts

The project was assisted using iterative AI prompting. The final prompts used were:

Prompt 1:
"Create a browser-based note-taking app using HTML, CSS, and JavaScript with a three-panel layout (sidebar, editor, preview). Store notes using localStorage in JSON format."

Prompt 2:
"Add functionality to allow users to create, rename, delete, and select notes dynamically in JavaScript."

Prompt 3:
"Upgrade the editor to support rich text formatting like bold, italic, underline, font size, font family, and text color using execCommand."

Prompt 4:
"Add search functionality to filter notes by title and content in real time."

Prompt 5:
"Implement a feature to export the current note as a PDF using html2pdf.js."

---

5. Instructions

🚀 Setup
Download or clone the repository:
git clone <your-repo-link>
Ensure these files are included:
index.html
style.css
script.js

▶️ Run the App
Open index.html
Launch it directly in Google Chrome
No server or installation required

✨ How to Use
➕ Click New to create a note
🖱️ Click a note to select and edit it
✏️ Use toolbar for formatting:
Bold / Italic / Underline
Font style / size / color
Text alignment
🔍 Use search bar to filter notes
🗑️ Click delete icon to remove note
✏️ Click rename icon to change title
📄 Click export to download PDF

💾 Storage
All notes are saved automatically using LocalStorage (JSON format)
Data persists even after closing the browser

---

6. Challenges & Iterations

⚠️ Challenges Faced
1. Managing Multiple Notes in a Single Page App

Initially, handling multiple notes dynamically was complex because all notes needed to be updated without refreshing the page.

2. Data Persistence Without a Backend

Since the project is fully frontend-based, there was no database to store notes permanently.

3. Synchronizing Editor and Preview

Keeping the rich text editor and live preview panel in sync required careful event handling.

4. Implementing Rich Text Formatting

Standard <textarea> elements do not support formatting like bold, font changes, or colors.

🔄 Iterations & Improvements
✔️ Solution to Note Management:

Switched to a JavaScript array of objects (JSON structure) to manage notes efficiently with unique IDs.

✔️ Solution to Data Storage:

Implemented LocalStorage, allowing notes to persist even after refreshing or closing the browser.

✔️ Solution to Live Syncing:

Used input and contenteditable events to update the preview in real time whenever the user types.

✔️ Solution to Rich Text Editing:

Replaced textarea with a contenteditable div, enabling advanced formatting using document.execCommand().
