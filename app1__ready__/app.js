const fill = document.getElementById('fill');
const empties = document.querySelectorAll('.empty');

// Listeners
fill.addEventListener('dragstart', () => {
  fill.className += ' hold';
  setTimeout(() => (fill.className = 'invisible'), 0);
});

fill.addEventListener('dragend', () => {
  fill.className = 'fill';
});

// Loop for add event
empties.forEach(empty => {
  empty.addEventListener('dragover', e => e.preventDefault());
  empty.addEventListener('dragenter', e => {
    e.preventDefault();
    empty.className += ' hovered';
  });
  empty.addEventListener('dragleave', () => {
    empty.className = 'empty';
  });
  empty.addEventListener('drop', () => {
    empty.className = 'empty';
    empty.append(fill);
  });
});
