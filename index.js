
const tareaInput = document.getElementById("tarea");
const addTareaButton = document.getElementById("addTarea");
const tareaList = document.getElementById("tareaList");

function addTarea() {
    const tareaText = tareaInput.value.trim(); //trim elimina espacios en blanco

    if (tareaText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <span>${tareaText}</span>
        <button type="button" class="edit">Editar</button>
        <button type="button" class="delete">Eliminar</button>

        `;
        tareaList.appendChild(listItem);
        tareaInput.value = "";        
        const editButton = listItem.querySelector(".edit");
        const deleteButton = listItem.querySelector(".delete");

        editButton.addEventListener("click", () => {
            const newText = prompt("Editar tarea:", tareaText);
            if (newText !== null) {
                listItem.firstChild.nodeValue = newText;
            }
        });

        deleteButton.addEventListener("click", () => {
            tareaList.removeChild(listItem);
        });
    }
}

tareaInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTarea();
    }
});
addTareaButton.addEventListener("click", addTarea);
