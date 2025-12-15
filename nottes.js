<script>

    let textarea = document.querySelector("textarea");
    let addBtn = document.querySelector(".addBtn");
    let notesContainer = document.querySelector(".notes-container");
{/* 
    // Load notes when page opens
    window.onload = function () {
        showNotes();
    }; */}

    // Add Note
    addBtn.addEventListener("click", function () {
        let noteText = textarea.value;

        if (noteText.trim() === "") {
            alert("Please enter a note!");
            return;
        }

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText);

    localStorage.setItem("notes", JSON.stringify(notes));

    textarea.value = "";

    showNotes();
        });

    // Display Notes
    function showNotes() {
        notesContainer.innerHTML = "";

    let notes = JSON.parse(localStorage.getItem("notes")) || [];

        notes.forEach((note, index) => {
        let div = document.createElement("div");
    div.classList.add("note");

    div.innerHTML = `
    ${note}
    <span class="delete-btn" onclick="deleteNote(${index})">X</span> `;
    notesContainer.appendChild(div);
            });
        }
    // Delete Note
    function deleteNote(index) {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.splice(index,
    1);

    localStorage.setItem("notes", JSON.stringify(notes));

    showNotes();
        }

</script>