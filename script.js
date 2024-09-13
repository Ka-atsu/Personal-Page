function showAlert() {
    alert("Button was clicked");
}
function validateForm() {
    const fname = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (fname === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return false; 
    }
    else {
        alert(`Thank you, ${fname}! Your form has been submitted.`);
        return true; 
    }
}