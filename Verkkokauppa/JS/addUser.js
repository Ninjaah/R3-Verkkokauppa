function addUser() {

    var xmlreq = new XMLHttpRequest();

    var status;

    var email = document.getElementById("email").value;
    var pw = document.getElementById("password").value;

    console.log(email);
    console.log(pw);

    var vars = "email=" + email + "&password=" + pw;


    xmlreq.open("POST", "../php/addUser.php", true);

    xmlreq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xmlreq.onreadystatechange = callback_handler;

    xmlreq.send(vars);

    function callback_handler() {

        if (xmlreq.readyState === 4 && xmlreq.status === 200) {
            status = xmlreq.responseText;

        }

        if (status === 1) {
            document.getElementById("status").innerHTML = "Käyttäjän luonti onnistui!";

        } else {
            document.getElementById("status").innerHTML = "Käyttäjän luonti epäonnistui!";

        }
    }

}