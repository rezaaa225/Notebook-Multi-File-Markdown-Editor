# Notebook-Multi-File-Markdown-Editor
1. Project Choice

I chose the project idea **"The Notebook - Multi-File Markdown/Rich Text Editor"**.

A lightweight, browser-based Markdown note-taking application with a three-panel layout: file list, live editor, and rendered preview.

2. Justification of Tools

- **HTML**: Used to structure the layout of the application, including the sidebar, editor, and preview sections.
- **CSS**: Used to create a clean, modern, and responsive UI inspired by professional productivity tools.
- **JavaScript**: Handles all application logic including note management, editing, search functionality, and exporting features.
- **LocalStorage (Web API)**: Used to store notes in JSON format directly in the browser without requiring a backend server.
- **Marked.js**: Used to convert Markdown content into HTML for real-time preview rendering.
- **html2pdf.js**: Used to export notes as downloadable PDF files.

These tools were chosen because they are lightweight, browser-compatible, and ideal for building a fully functional frontend-only application.

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
