const button = document.getElementById('user-button');
const taskList = document.getElementById('tasks'); // previously called 'cl'
const input = document.getElementById('input');

button.addEventListener('click', function () {
  const taskText = input.value.trim();
  if (taskText === '') return; // Don't add empty tasks

  // create list item
  const newelement = document.createElement('li');
  newelement.classList.add('inp-styling');

  // span for text
  const span = document.createElement('span');
  span.textContent = taskText;

  // the delete button
  const deleteBtn = document.createElement('button'); // renamed properly
  deleteBtn.innerText = 'Delete';
  deleteBtn.classList.add('delete-btn');

  deleteBtn.addEventListener('click', function () {
    newelement.remove();
  });

  newelement.appendChild(span);
  newelement.appendChild(deleteBtn);

  taskList.appendChild(newelement);

  input.value = '';
});
