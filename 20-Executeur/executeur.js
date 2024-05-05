'use strict';

function execute(operation, a, b) {
    switch (operation) {
        case 'ADD':
            return a + b;
        case 'SUB':
            return a - b;
        case 'MUL':
            return a * b;
        default:
            if (typeof operation === 'function') {
                return operation(a, b);
            } else if (typeof operation === 'string') {
                return 'Nom d\'operation inconnue';
            } else {
                return 'Type d\'operation inconnue';
            }
    }
}
