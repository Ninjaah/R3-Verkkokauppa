function addUser() {

    var xmlreq = new XMLHttpRequest();

    var status;

    var email = document.getElementById("email").value;
    var pw = document.getElementById("password").value;

    console.log(email);
    console.log(pw);

    var vars = "email=" + email + "&password=" + pw;

    xmlreq.open("POST", "../php/addUser.php",true);

    xmlreq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xmlreq.onreadystatechange = callback_handler;

    xmlreq.send(vars);

    function callback_handler() {

        if (xmlreq.readyState === 4 && xmlreq.status === 200) {
            if (xmlreq.responseText === '1') {
                document.getElementById("status").innerHTML = "Käyttäjän luonti onnistui!";

                document.getElementById("email").value = '';
                document.getElementById("password").value = '';

            } else if (xmlreq.responseText === '0') {
                document.getElementById("status").innerHTML = "Käyttäjän luonti epäonnistui!";

            } else if (xmlreq.responseText === '2') {
                document.getElementById("status").innerHTML = "Käyttäjän on jo luotu!";
            }

        }


    }


}