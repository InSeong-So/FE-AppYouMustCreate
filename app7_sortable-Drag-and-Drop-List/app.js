const items = document.querySelectorAll('.item');
const container = document.querySelector('.container');

items.forEach(item => {
  item.addEventListener('dragstart', () => {
    item.classList.add('dragging');
  });

  item.addEventListener('dragend', () => {
    item.classList.remove('dragging');
  });
});

container.addEventListener('dragover', event => {
  event.preventDefault();
  const afterElement = dragBetweenElement(container, event.clientY);
  const dragging = document.querySelector('.dragging');
  container.appendChild(dragging);
  if (afterElement === null) {
    container.appendChild(dragging);
  } else {
    container.insertBefore(dragging, afterElement);
  }
});

function dragBetweenElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll('.item:not(.dragging)'),
  ];
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    {
      offset: Number.NEGATIVE_INFINITY,
    },
  ).element;
}
