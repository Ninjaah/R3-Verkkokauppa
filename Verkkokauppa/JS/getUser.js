function getUser() {

    var xmlreq = new XMLHttpRequest();

    var status;

    var email = document.getElementById("sposti").value;
    var pw = document.getElementById("psw").value;

    console.log(sposti);
    console.log(psw);

    var vars = "email="+email+"&password="+pw;


    xmlreq.open("POST", "../php/getUser.php", true);

    xmlreq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xmlreq.onreadystatechange = callback_handler;

    xmlreq.send(vars);

    function callback_handler() {

        if (xmlreq.readyState === 4 && xmlreq.status === 200) {
            status = xmlreq.responseText;

            if (status === '1') {
                document.getElementById("login").innerHTML = "Kirjautuminen onnistui!";

                localStorage.setItem("email", email);

                document.getElementById("sposti").value = '';
                document.getElementById("psw").value = '';

            } else {
                document.getElementById("login").innerHTML = "Kirjautuminen epäonnistui!";

            }

        }

    }

    return false;

}