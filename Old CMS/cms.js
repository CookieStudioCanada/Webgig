// Click and drop

const dropzone = document.querySelector('.dropzone');

function handleDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.dataset.section);
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  const sectionId = event.dataTransfer.getData('text/plain');
  const section = document.querySelector(`.section[data-section="${sectionId}"]`);
  const newSection = document.createElement('div');
  newSection.classList.add('dropzone-section');
  newSection.setAttribute('id', `section-${sectionId}`);
  newSection.setAttribute('data-section', sectionId);
  newSection.innerHTML = `
    <div class="dropzone-section-text">${section.textContent}</div>
    <div class="dropzone-section-buttons">
      <button class="section-modify">Modify</button>
      <button class="section-delete">Delete</button>
    </div>  
  `;
  dropzone.appendChild(newSection);
}

function handleSectionClick(event) {
  console.log('Section button clicked');
  if (event.target.classList.contains('section-delete')) {
    console.log('Delete button clicked');
    const section = event.target.closest('.dropzone-section');
    console.log('Section element:', section);
    if (section !== null) {
      section.remove();
    }
  } else if (event.target.classList.contains('section-modify')) {
    console.log('Modify button clicked');
    const section = event.target.closest('.dropzone-section');
    console.log('Section element:', section);
    const text = section.querySelector('.dropzone-section-text').textContent;
    const newText = prompt('Enter new section text:', text);
    if (newText !== null) {
      section.querySelector('.dropzone-section-text').textContent = newText;
    }
  }
}

function createSectionButtons() {
  const sections = document.querySelectorAll('.dropzone-section');
  sections.forEach(section => {
    const modifyButton = document.createElement('button');
    modifyButton.classList.add('section-modify');
    modifyButton.textContent = 'Modify';
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('section-delete');
    deleteButton.textContent = 'Delete';
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('dropzone-section-buttons');
    buttonContainer.appendChild(modifyButton);
    buttonContainer.appendChild(deleteButton);
    section.appendChild(buttonContainer);
  });
}

const sections = document.querySelectorAll('.section');
sections.forEach(section => {
  section.addEventListener('dragstart', handleDragStart);
});

dropzone.addEventListener('dragover', handleDragOver);
dropzone.addEventListener('drop', handleDrop);
dropzone.addEventListener('click', handleSectionClick);

createSectionButtons();

// Hamburger

const toggleButton = document.getElementById('toggle-button');
const dropdown = document.getElementById('dropdown');

dropdown.style.display = 'none'

toggleButton.addEventListener('click', () => {
  console.log("Allo, je clique.")
  // Add transition...
  dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});

const navLinks = document.querySelector('.navlinks');

navLinks.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('open');
    const sectionId = event.target.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
});
