const password = document.getElementById('password');
const conpassword = document.getElementById('conpassword');
const registrationForm = document.getElementById('registrationForm');

function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function openMismatchPopup() {
    document.getElementById('matching-passwords').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('fill-elements').style.display = 'none'
    document.getElementById('matching-passwords').style.display = 'none';
}

function openReuqiured(){
    document.getElementById('fill-elements').style.display = 'flex'
}

function whichEvent(event) {
    event.preventDefault();

      const fullName = document.getElementById('full_name').value;
      const email = document.getElementById('email').value;
      const dob = document.getElementById('dob').value;
      const gender = document.querySelector('input[name="gender"]:checked');
  
      if (!fullName || !email || !dob || !gender || !password || !conpassword) {
          openReuqiured();
          return;
      }
    
    if (password.value === conpassword.value) {
        openPopup();
    } else {
        openMismatchPopup();
    }
}

registrationForm.addEventListener('submit', whichEvent);
