// New...

function fadeInSections() {
  const sections = document.querySelectorAll('.section');

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= (windowHeight - 100) && rect.bottom >= 100) {
      section.classList.add('fade-in');
    }
  });
}

// Call the function initially
fadeInSections();

// Call the function on scroll
window.addEventListener('scroll', fadeInSections);

// Old hamburger

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

  const modalContent = modal.querySelector('.modal-content');
  modalContent.style.animationName = 'modalOpen';
 
  switch(index) {

    case "format":
      word.innerHTML = 
      ` <h3>Format</h3>
        The decision to create a white label solution versus a unique domain and hosting for each individual website will depend on several factors. Here are some points to consider:
        <ul>
            <li>Scalability: If you plan to have a large number of self-employed people using your app, a white label solution may be easier to scale, as you can reuse the same website template and simply change the branding and content for each individual user. However, if you plan to have a smaller number of users, it may be more practical to create a unique domain and hosting for each website.</li><br>
            <li>Branding: If you want to maintain consistent branding for all the websites created using your app, a white label solution may be a good option. This can help create a sense of trust and reliability for users who may be using your app to build their online presence. However, if branding is not a concern and you want to give users full control over their website, individual domain and hosting may be a better option.</li><br>
            <li>Pricing: A white label solution may be easier to price as a fixed rate for each website, since you would be using the same template and hosting solution for each user. However, if you offer individual domain and hosting, you may need to price each website separately, which could be more complex.</li><br>
            <li>Customization: If you offer a white label solution, users may have less control over the design and functionality of their website, as they would be using a pre-defined template. However, if you offer individual domain and hosting, users would have full control over their website and can customize it to their specific needs.</li><br>
        </ul>`
      break;
    case "services":
      word.innerHTML = 
      ` <h3>Services</h3>
        <p>Sections</p>
        - [ ] Accueil
        - [ ] Services
        - [ ] Valeurs
        - [ ] Blog
        - [ ] Reviews
        - [ ] Contactez-nous
        - [ ] FAQ

        <p>Integrations<p>
        Calendly integration: This allows your clients to easily schedule appointments with you through your website.
        Stripe integration: This enables you to accept payments for your services directly on your website.
        Email collection for newsletters: This feature allows you to collect email addresses from visitors to your website for email marketing purposes.
        Chatapp : Be in contact with your customers.

        <p>Additionnal services</p>
        Domain name registration: This service allows you to register a custom domain name for your website.
        SSL certificate installation: This feature ensures that your website is secure and that all information transmitted between your website and its visitors is encrypted.
        SEO optimization: This service helps your website to rank higher in search engine results pages, making it easier for potential clients to find you.
        Maintenance: This service ensures that your website is up to date and running smoothly, with regular backups and updates.
        Hosting: This service allows you to host your website on our servers, providing fast and reliable performance.
        Design: This service includes custom design work to ensure that your website looks professional and reflects your brand identity.
        Analytics: This feature provides you with detailed data on website traffic, visitor behavior, and other key metrics to help you track your website's performance and make informed decisions about marketing and advertising.
        `
      break;
    case "integrations":
      word.innerHTML = 
      ` <h3>Integrations</h3>
        <p>Stripe</p>
        Your customers can easily and securely pay for your services or products directly on your website using their credit or debit card, without the need to go to a separate payment gateway or merchant account.
        Stripe offers a streamlined checkout process that minimizes friction and improves conversion rates for your business.
        Stripe provides robust fraud prevention and security measures to protect both you and your customers from fraudulent activity.
        Stripe allows you to set up recurring payments or subscriptions for your services or products, providing a reliable and convenient payment option for your customers.
        With Stripe, you can offer a wide variety of payment options, including Apple Pay, Google Pay, and other digital wallets, to cater to the preferences of your customers.

        <p>Calendly</p>
        Your customers can easily schedule appointments or consultations with you based on your availability, without the need for back-and-forth emails or phone calls.
        Calendly offers a customizable booking page that you can integrate seamlessly into your website, allowing customers to book appointments without leaving your site.
        With Calendly, you can set up automatic reminders and notifications for your appointments, reducing the risk of no-shows or missed appointments.
        Calendly provides a user-friendly interface that makes it easy for your customers to schedule appointments or consultations, improving their overall experience with your business.
        Calendly offers a range of customization options, including the ability to set your availability and appointment types, to ensure that the booking process fits your business's unique needs.
        `
      break;
    case "customDomain":
      word.innerHTML = 
      ` <h3>Custom domain</h3>

        Domain name registration: This service allows you to register a custom domain name for your website.
        SSL certificate installation: This feature ensures that your website is secure and that all information transmitted between your website and its visitors is encrypted.
        SEO optimization: This service helps your website to rank higher in search engine results pages, making it easier for potential clients to find you.
        Maintenance: This service ensures that your website is up to date and running smoothly, with regular backups and updates.
        Hosting: This service allows you to host your website on our servers, providing fast and reliable performance.
        Design: This service includes custom design work to ensure that your website looks professional and reflects your brand identity.
        Analytics: This feature provides you with detailed data on website traffic, visitor behavior, and other key metrics to help you track your website's performance and make informed decisions about marketing and advertising.
        `
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