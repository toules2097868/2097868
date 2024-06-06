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