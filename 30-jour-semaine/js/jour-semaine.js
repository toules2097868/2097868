'use strict';

const JOURS_FR = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
const JOURS_EN = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

document.addEventListener('DOMContentLoaded', function() {
    const languageCheckbox = document.getElementById('language');
    const dayNumberInput = document.getElementById('dayNumber');
    const dayDisplayDiv = document.createElement('div');
    
    document.body.appendChild(dayDisplayDiv);

    function updateDayDisplay() {
        const dayNumber = dayNumberInput.value;
        const language = languageCheckbox.checked ? JOURS_EN : JOURS_FR;
        dayDisplayDiv.textContent = language[dayNumber];
    }

    languageCheckbox.addEventListener('change', updateDayDisplay);
    dayNumberInput.addEventListener('input', updateDayDisplay);

    updateDayDisplay(); 
});
