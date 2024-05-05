'use strict';

function createItem(item) {
    return '<li>' + item + '</li>';
}

function createList(items) {
    let list = '<ul>';
    for (let i = 0; i < items.length; i++) {
        list += createItem(items[i]);
    }
    list += '</ul>';
    return list;
}
