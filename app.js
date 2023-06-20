const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', () => {
    const input = document.querySelector('#input');
    const text = input.value.trim();

    if (text !== '') {
        addToList(text);
        input.value = '';
        input.focus();
        }
});

function addToList(text) {
    const list = document.querySelector('#todayworklist');

    const newListItem = document.createElement('li');
       
    const checkbox = document.createElement('input');
    
    checkbox.setAttribute("id", "checkbox-id");

    checkbox.setAttribute("type", "checkbox");
    
    document.body.appendChild(checkbox);

    newListItem.classList.add('list-item');

    newListItem.innerHTML = text;
    
    list.appendChild(newListItem);
}

