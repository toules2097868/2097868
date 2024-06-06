document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const deleteButton = document.getElementById('deleteButton');
    const taskList = document.getElementById('taskList');
    const taskTotal = document.getElementById('taskTotal');

    // Positionner le curseur dans le champ taskInput à l'ouverture de la page
    taskInput.focus();

    