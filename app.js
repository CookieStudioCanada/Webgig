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

// Get the modal
var modal = document.getElementById("myModal");

// When the user clicks the button, open the modal 
function openModal(index) {
  modal.style.display = "block";
  let word = document.getElementById("modal-message");

  switch(index) {
    case "format":
      word.innerHTML = "Format!";
      break;
    case "services":
      word.innerHTML = "Services!";
      break;
    case "integrations":
      word.innerHTML = "Intégrations!";
      break;
    case "customDomain":
      word.innerHTML = "Custom Domain!";
      break;
    default:
      // nothing
      break;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}