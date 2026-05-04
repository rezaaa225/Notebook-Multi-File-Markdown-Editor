# Notebook-Multi-File-Markdown-Editor
1. Project Choice
I chose the project idea **"The Notebook - Multi-File Markdown/Rich Text Editor"**.
A lightweight, browser-based Markdown note-taking application with a three-panel layout: file list, live editor, and rendered preview.


ool / ChoiceReasonVanilla HTML/CSS/JSZero build step, zero dependencies, instantly deployable anywhere as a single .html file. The spec called for a "lightweight" tool — a React/Next.js setup would be overkill.marked.js (CDN)Battle-tested, spec-compliant Markdown parser. One <script> tag, no npm install needed. Renders GFM tables, fenced code blocks, and all standard syntax.localStorageThe brief specifies "all data saved locally in the browser." localStorage is universally supported, requires no backend, and persists across sessions. A 5 MB limit is more than sufficient for text notes.Google Fonts (Playfair Display, JetBrains Mono, Lora)Playfair Display gives an editorial, notebook-like heading style. JetBrains Mono keeps the raw Markdown editor readable. Lora renders preview prose beautifully — together they give the app a distinct, non-generic personality.CSS custom propertiesTheming via --ink, --paper, --accent variables makes the colour system coherent and easy to adjust.
