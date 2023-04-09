let signUpButton = document.getElementById("sign-up");

const signUp = () => {
    const emailInput = document.querySelector(".email-sign-up input[type='text']");
    const email = emailInput.value;
  
    if (isValidEmail(email)) {
      axios.post("http://localhost:4545/api/sign-up/", { email })
        .then(res => {
          const data = res.data;
          alert(data);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      alert("Invalid email address.");
    }
  };
  
  
  signUpButton.addEventListener("click", function(event) {
    event.preventDefault();
    signUp();
  });
  
  function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  // Set initial counter value
let counter = 0;

// Get span element that displays the counter value
const counterSpan = document.getElementById('stein-count');

// Define function for incrementing the counter
function increment() {
  counter++;
  counterSpan.textContent = counter;
}

// Define function for decrementing the counter
function decrement() {
  if (counter > 0) {
    counter--;
    counterSpan.textContent = counter;
  }
}

