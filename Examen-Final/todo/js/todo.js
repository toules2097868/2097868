document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const deleteButton = document.getElementById('deleteButton');
    const taskList = document.getElementById('taskList');
    const taskTotal = document.getElementById('taskTotal');

    // Positionner le curseur dans le champ taskInput à l'ouverture de la page
    taskInput.focus();
	
	function updateButtonStatus() {
        addButton.disabled = taskInput.value.trim() === '';
        deleteButton.disabled = !Array.from(taskList.children).some(li => li.querySelector('input[type="checkbox"]').checked);
    }
	//pour activer/désactiver le bouton Ajout
    taskInput.addEventListener('input', updateButtonStatus);

    // Fonction pour ajouter une tâche
    function addTask() {
        if (taskInput.value.trim() !== '') {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    span.classList.add('strike-task');
                } else {
                    span.classList.remove('strike-task');
                }
                updateButtonStatus();
            });

            const span = document.createElement('span');
            span.textContent = taskInput.value.trim();

            li.appendChild(checkbox);
            li.appendChild(span);
            taskList.appendChild(li);

            taskInput.value = '';
            updateButtonStatus();
            updateTaskTotal();
        }
    }
	//ajouter une tâche avec le bouton Ajout
    addButton.addEventListener('click', addTask);

    //ajouter une tâche avec la touche "Enter"
    taskInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
	//Fonction pour mettre à jour le nombre total de tâches
    function updateTaskTotal() {
        taskTotal.textContent = `(${taskList.children.length})`;
    }
	//Fonction pour supprimer les tâches sélectionnées
    function deleteSelectedTasks() {
        const selectedTasks = Array.from(taskList.children).filter(li => li.querySelector('input[type="checkbox"]').checked);
        selectedTasks.forEach(task => taskList.removeChild(task));
        updateButtonStatus();
        updateTaskTotal();
    }

    //supprimer les tâches sélectionnées
    deleteButton.addEventListener('click', deleteSelectedTasks);

    //Mettre à jour 
    updateButtonStatus();
});