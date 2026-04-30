document.getElementById('book-link').onclick = (e) => {
    e.preventDefault();
    document.getElementById('reservation-form').classList.add('visible');
};

document.getElementById('book-form').onsubmit = (e) => {
    e.preventDefault();
    document.getElementById('reservation-form').classList.remove('visible');
    document.getElementById('confirmation-msg').classList.add('visible');
};

document.getElementById('cancel-btn').onclick = () => {
    document.getElementById('reservation-form').classList.remove('visible');
};

document.getElementById('close-msg-btn').onclick = () => {
    document.getElementById('confirmation-msg').classList.remove('visible');
};

 const feedbackForm = document.getElementById("feedback-form");
    const feedbackPopup = document.getElementById("feedback-popup");
    const feedbackCloseBtn = document.getElementById("feedback-close-btn");

    feedbackForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("feedback-name").value.trim();
        const text = document.getElementById("feedback-text").value.trim();

        if (!name || !text) {
            alert("Please fill all fields");
            return;
        }

        feedbackPopup.style.display = "flex";
        feedbackForm.reset();
    });

    feedbackCloseBtn.addEventListener("click", () => {
        feedbackPopup.style.display = "none";
    });