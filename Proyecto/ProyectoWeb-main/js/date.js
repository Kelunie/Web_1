document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-button");
    const tableBody = document.getElementById("table-body");
    
    addButton.addEventListener("click", function () {
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const name = document.getElementById("name").value;
        const category = document.getElementById("category").value;

        // Verificar si al menos un campo está lleno
        if (date === "" && time === "" && name === "" && category === "") {
            alert("Por favor, ingrese al menos un campo antes de agregar la reserva.");
            return;
        }

        // Verificar campos en blanco individualmente
        if (date === "") {
            alert("Por favor, ingrese la fecha.");
            return;
        }
        if (time === "") {
            alert("Por favor, ingrese la hora.");
            return;
        }
        if (name === "") {
            alert("Por favor, ingrese el nombre de la reserva.");
            return;
        }
        if (category === "") {
            alert("Por favor, ingrese la categoría.");
            return;
        }

        // Buscar si ya existe una sección para la categoría
        let categorySection = document.querySelector(`tr[data-category="${category}"]`);

        if (!categorySection) {
            categorySection = document.createElement("tr");
            categorySection.setAttribute("data-category", category);
            categorySection.innerHTML = `<td colspan="3"></td><td class="text-end"><strong>${category}</strong></td>`;
            tableBody.appendChild(categorySection);
        }

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${date}</td>
            <td>${time}</td>
            <td>${name}</td>
        `;
        
        categorySection.insertAdjacentElement("afterend", newRow);

        // Limpiar campos de entrada
        document.getElementById("date").value = "";
        document.getElementById("time").value = "";
        document.getElementById("name").value = "";
    });
});
