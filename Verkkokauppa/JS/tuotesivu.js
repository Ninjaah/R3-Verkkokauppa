
kan_nappi = document.getElementById("kuva1t");
kan_nappi.onclick = function () {
    var kuva = document.querySelectorAll('.nakyy');
    for (var i = 0; i < kuva.length; i++) {
        kuva[i].classList.remove('nakyy')
    }
    for (var i = 0; i < kuva.length; i++) {
        kuva[i].classList.add('hidden')
    }
    var kuva = document.getElementById('kuva1');
    kuva.classList.remove('hidden');
    kuva.classList.add('nakyy');
};

kan_nappi = document.getElementById("kuva2t");
kan_nappi.onclick = function () {
    var kuva = document.querySelectorAll('.nakyy');
    for (var i = 0; i < kuva.length; i++) {
        kuva[i].classList.remove('nakyy')
    }
    for (var i = 0; i < kuva.length; i++) {
        kuva[i].classList.add('hidden')
    }
    var kuva = document.getElementById('kuva2');
    kuva.classList.remove('hidden');
    kuva.classList.add('nakyy');
};

kan_nappi = document.getElementById("kuva3t");
kan_nappi.onclick = function () {
    var kuva = document.querySelectorAll('.nakyy');
    for (var i = 0; i < kuva.length; i++) {
        kuva[i].classList.remove('nakyy')
    }
    for (var i = 0; i < kuva.length; i++) {
        kuva[i].classList.add('hidden')
    }
    var kuva = document.getElementById('kuva3');
    kuva.classList.remove('hidden');
    kuva.classList.add('nakyy');
};

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

            if (status === 1) {
                document.getElementById("login").innerHTML = "Kirjautuminen onnistui!";

                localStorage.setItem("email", email);

            } else {
                document.getElementById("login").innerHTML = "Kirjautuminen epäonnistui!";

            }

        }


    }

    return false;

}


console.log(screen.width);
if (screen.width < 1255){
    var info = document.getElementById('tuotekuva');
    info.appendChild(document.getElementById('thumbs'));
}
