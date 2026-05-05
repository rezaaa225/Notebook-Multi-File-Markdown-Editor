let notes = JSON.parse(localStorage.getItem("notes")) || [];
let currentNoteId = null;

// Save
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Render notes
function renderNotes() {
  const list = document.getElementById("fileList");
  list.innerHTML = "";

  notes.forEach(note => {
    const li = document.createElement("li");

    const title = document.createElement("span");
    title.textContent = note.title;
    title.onclick = () => openNote(note.id);

    const actions = document.createElement("div");

    const renameBtn = document.createElement("button");
    renameBtn.textContent = "✏️";
    renameBtn.onclick = (e) => {
      e.stopPropagation();
      renameNote(note.id);
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      deleteNote(note.id);
    };

    actions.appendChild(renameBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(title);
    li.appendChild(actions);

    if (note.id === currentNoteId) li.classList.add("active");

    list.appendChild(li);
  });
}

// Create note
function createNote() {
  const note = {
    id: Date.now(),
    title: "Untitled",
    content: ""
  };

  notes.push(note);
  saveNotes();
  renderNotes();
  openNote(note.id);
}

// Open note
function openNote(id) {
  const note = notes.find(n => n.id === id);
  currentNoteId = id;

  document.getElementById("editor").innerHTML = note.content;
  updatePreview();
  renderNotes();
}

// Rename
function renameNote(id) {
  const note = notes.find(n => n.id === id);
  const newTitle = prompt("New title:", note.title);

  if (newTitle) {
    note.title = newTitle;
    saveNotes();
    renderNotes();
  }
}

// Delete
function deleteNote(id) {
  if (!confirm("Delete this note?")) return;

  notes = notes.filter(n => n.id !== id);

  if (currentNoteId === id) {
    currentNoteId = null;
    document.getElementById("editor").innerHTML = "";
    document.getElementById("preview").innerHTML = "";
  }

  saveNotes();
  renderNotes();
}

// Update preview
function updatePreview() {
  const content = document.getElementById("editor").innerHTML;
  document.getElementById("preview").innerHTML = marked.parse(content);

  const note = notes.find(n => n.id === currentNoteId);
  if (note) {
    note.content = content;
    saveNotes();
  }
}

// Search notes
function searchNotes() {
  const q = document.getElementById("searchInput").value.toLowerCase();
  const list = document.getElementById("fileList");
  list.innerHTML = "";

  notes
    .filter(n => n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q))
    .forEach(note => {
      const li = document.createElement("li");
      li.textContent = note.title;
      li.onclick = () => openNote(note.id);
      list.appendChild(li);
    });
}

// Toolbar functions
function formatText(cmd) {
  document.execCommand(cmd);
}

function changeFont(font) {
  document.execCommand("fontName", false, font);
}

function changeFontSize(size) {
  document.execCommand("fontSize", false, "7");
  document.querySelectorAll("font[size='7']").forEach(el => {
    el.removeAttribute("size");
    el.style.fontSize = size;
  });
}

function changeColor(color) {
  document.execCommand("foreColor", false, color);
}

// Export PDF
function exportPDF() {
  const element = document.getElementById("preview");

  html2pdf().from(element).set({
    margin: 0.5,
    filename: "note.pdf",
    jsPDF: { format: "a4" }
  }).save();
}

// Init
document.getElementById("editor").addEventListener("input", updatePreview);
renderNotes();

if (notes.length > 0) openNote(notes[0].id);