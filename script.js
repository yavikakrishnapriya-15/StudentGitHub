document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let event = document.getElementById("event").value;

    document.getElementById("result").innerHTML =
        "Registration Successful!<br>Name: " + name +
        "<br>Email: " + email +
        "<br>Event: " + event;
};