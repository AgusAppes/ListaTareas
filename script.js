function agregarTarea() {
    const cardList = document.getElementById("cardList");
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();
    const btnPendientes = document.getElementById("btnPendientes");
    const btnCompletadas = document.getElementById("btnCompletadas");
    const imagen = document.getElementById("imagen");
    const btnTodas = document.getElementById("btnTodas");

    if (nuevaTareaTexto !== "") {
        const nuevaTarea = document.createElement("li");
        const spanTarea = document.createElement("span");
        spanTarea.textContent = nuevaTareaTexto;
        nuevaTarea.appendChild(spanTarea);
        cardList.style.display = "flex";


        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("delete", "agregar");
        botonEliminar.onclick = function() {
        listaTareas.removeChild(nuevaTarea);
        estilo();
        };

        const botonCompletada = document.createElement("button");
        botonCompletada.textContent = "Completada";
        botonCompletada.classList.add("completed", "agregar");
        botonCompletada.onclick = function() {
            nuevaTarea.classList.add("completed");
            botonCompletada.style.display = "none";
        };


        const btnEditar = document.createElement("button");
        btnEditar.classList.add("editar" , "agregar");
        btnEditar.onclick = function (params) {

            const inputEditable = document.createElement("input");
            inputEditable.type = "text";
            inputEditable.value = spanTarea.textContent;

            nuevaTarea.replaceChild(inputEditable, spanTarea);

            inputEditable.focus();

            inputEditable.addEventListener('keydown', function (event) {
                if (event.key === 'Enter') {
                    spanTarea.textContent = inputEditable.value;
                    nuevaTarea.replaceChild(spanTarea, inputEditable);
                }
            });
        };

        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);
        nuevaTarea.appendChild(botonCompletada);
        nuevaTarea.appendChild(btnEditar);

        estilo();

        nuevaTareaInput.value = "";
    }

    function estilo() {
        if (listaTareas.childElementCount > 0) {
        botones.style.display = "flex";
        imagen.style.display = "none";
    }
    else{
        cardList.style.display = "none";
        imagen.style.display = "block";
    }
    }


    function mostrarCompletadas() {
        btnCompletadas.style.display = "none";
        btnTodas.style.display = "flex";
        if (btnPendientes.style.display == "none") {
            btnPendientes.style.display = "flex";
        }
        const tareas = document.querySelectorAll("li");
        tareas.forEach(tarea => {
        if (tarea.classList.contains("completed")) {
        tarea.style.display = "flex";
        } else {
        tarea.style.display = "none";
        }
        });
    }

    function mostrarPendientes() {
        btnPendientes.style.display = "none";
        btnTodas.style.display = "flex";
        if (btnCompletadas.style.display == "none") {
            btnCompletadas.style.display = "flex";
        }
        const tareas = document.querySelectorAll("li");
        tareas.forEach(tarea => {
        if (!tarea.classList.contains("completed")) {
        tarea.style.display = "flex";
        } else {
        tarea.style.display = "none";
        }
        });
    }

    function mostrarTodas() {
        btnTodas.style.display = "none";
        btnPendientes.style.display = "flex";
        btnCompletadas.style.display = "flex";
        const tareas = document.querySelectorAll("li");
        tareas.forEach(tarea => {
        tarea.style.display = "flex";
        });
    }
        
    
    btnCompletadas.addEventListener("click", mostrarCompletadas);
    btnPendientes.addEventListener("click", mostrarPendientes);
    btnTodas.addEventListener("click" , mostrarTodas);
}


        
    
        
    

    