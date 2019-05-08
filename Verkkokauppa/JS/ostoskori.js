
var tuotteet = {
    tuotteet: [
        {
            Id: "0",
            name: " ",
            img: " ",
            price: " "
        },
        {
            Id: "1",
            name: "Oneplus 6 64Gt",
            img: "../pics/OnePlus_6_MirrorBlack_image1.png",
            price: "518.40"
        },
        {
            Id: "2",
            name: "MSI 15.6\" P65 Creator 8RD",
            img: "../pics/msi4.1.png",
            price: "1779"
        },
        {
            Id: "3",
            name: "Kingston HyperX FURY DDR4",
            img: "../pics/2_392408-780x399.jpeg",
            price: "89.90"
        },
        {
            Id: "4",
            name: "MSI Radeon VII 16G",
            img: "../pics/2_531432-1024x818.jpg",
            price: "799.90"
        },
        {
            Id: "5",
            name: "Huawei P30 128Gt",
            img: "../pics/2_532749-672x1096.jpg",
            price: "699.90"
        },
        {
            Id: "6",
            name: "Lenovo ThinkPad E480 14",
            img: "../pics/2_473978-2778x2289.jpeg",
            price: "1329.90"
        },
        {
            Id: "7",
            name: "Kingston DataTraveler 100 G3",
            img: "../pics/2_164178-800x500.jpeg",
            price: "10.90"
        },
        {
            Id: "8",
            name: "Lenovo Ideapad 330 15,6",
            img: "../pics/2_485352-2650x2129.jpg",
            price: "649.90"
        },
        {
            Id: "9",
            name: "Corsair Valueselect 32Gt",
            img: "../pics/2_351047-714x408.jpg",
            price: "199.90"
        },
        {
            Id: "10",
            name: "Corsair Gaming K55 RGB",
            img: "../pics/2_358585-1717x686.jpg",
            price: "54.90"
        },
        {
            Id: "11",
            name: "Asus GL703GM 17,3",
            img: "../pics/2_489510-1112x760.jpeg",
            price: "1799.90"
        },
        {
            Id: "12",
            name: "Samsung 970 EVO 500Gt M.2",
            img: "../pics/evo970500.jpg",
            price: "129.90"
        },
        {
            Id: "13",
            name: "Logitech B100",
            img: "../pics/2_343877-488x338.jpg",
            price: "12.90"
        },
        {
            Id: "14",
            name: "HP HDMI - VGA -adapteri",
            img: "../pics/2_160206-1104x910.jpeg",
            price: "9.90"
        },
        {
            Id: "15",
            name: "Nokia 7 Plus",
            img: "../pics/2_459936-338x685.jpeg",
            price: "378.90"
        },
        {
            Id: "16",
            name: "Huawei Mate 20 Lite",
            img: "../pics/2_497430-1902x4000.jpg",
            price: "349.00"
        }

    ]
};

var kori = localStorage.ostoskori;
console.log(kori);

if (kori === undefined){
    document.getElementById("ostoskori").innerHTML = 'Korisi on tyhjä';
}
var res = kori.split(",");

res.sort(function(a, b){return a - b});
console.log(res);
function lataaKori() {


    var seurID = 0;

    for (var i = 1; i < res.length; i++) {
        var x = i + 1;
        if (x < res.length){
            seurID = tuotteet.tuotteet[res[x]].Id;
        }
        var node = document.createElement("tr");
        var name = document.createElement("td");

        if (tuotteet.tuotteet[res[i]].Id == 6 || tuotteet.tuotteet[res[i]].Id == 8 || tuotteet.tuotteet[res[i]].Id == 11) {
            name.innerText = (tuotteet.tuotteet[res[i]].name+'"');  //Jos kyse tietyistä läppäreistä nimen perään "
        } else {
            name.innerText = (tuotteet.tuotteet[res[i]].name);
        }
        var image = document.createElement("img");
        image.setAttribute("src", tuotteet.tuotteet[res[i]].img);

        if (tuotteet.tuotteet[res[i]].Id == seurID && x<res.length){        // Jos seuraavalla tuotteella sama ID kuin tällä
            var maara1 = document.createElement("td");
            maara1.innerText = ("2");                    // placeholder
            var price1 = document.createElement("td");
            priceFloat =  (parseFloat(tuotteet.tuotteet[res[i]].price) * parseInt(maara1.textContent)).toFixed(2);
            price1.innerText = priceFloat.toString()+"€";
            price1.setAttribute("class", "price");

            var poista = document.createElement("td");
            poista.innerText = "X";
            poista.setAttribute("class", "poista");
            var funktionStr = "poistatuote("+i+")";
            poista.setAttribute("onclick", funktionStr);
            node.appendChild(image);
            node.appendChild(name);
            node.appendChild(maara1);
            node.appendChild(price1);
            node.appendChild(poista);
            document.getElementById("ostoskori").appendChild(node);
            i++;
        } else {
            var maara = document.createElement("td");
            maara.innerText = ("1");                    // placeholder
            var price = document.createElement("td");
            priceFloat =  (parseFloat(tuotteet.tuotteet[res[i]].price) * parseInt(maara.textContent)).toFixed(2);
            price.innerText = priceFloat.toString()+"€";
            price.setAttribute("class", "price");
            var poista = document.createElement("td");
            poista.innerText = "X";
            poista.setAttribute("class", "poista");
            var funktionStr = "poistatuote("+i+")";
            poista.setAttribute("onclick", funktionStr);
            node.appendChild(image);
            node.appendChild(name);
            node.appendChild(maara);
            node.appendChild(price);
            node.appendChild(poista);
            document.getElementById("ostoskori").appendChild(node);

        }



    }

    var hinnat = document.getElementsByClassName("price");
    var summa = 0;
    for (var i = 0; i < hinnat.length; i++) {
        var thinta = hinnat[i].textContent;
        //  var strhinta = thinta.slice(0, thinta.length - 1);
        var floathinta = thinta.replace(",", ".");
        parseFloat(floathinta);
        summa += parseFloat(floathinta);

    }
    summa = summa.toFixed(2);
    var strSumma = summa.toString();
    summaf = strSumma.replace(".", ",");
    document.getElementById("total").innerText = "Yhteensä: " + summaf + "€";
}

function clearKori() {
    window.localStorage.clear();
    console.log('asd');
    document.getElementById("ostoskori").innerHTML = 'Korisi on tyhjä';
    document.getElementById("total").innerText = "Yhteensä: 0€"
}

function poistatuote(rivi) {        // Ei toimi oikein
    document.getElementById("ostoskori").deleteRow(rivi);
    res.splice(rivi,1);
    localStorage.ostoskori = res;
    var hinnat = document.getElementsByClassName("price");
    var summa = 0;
    for (var i = 0; i < hinnat.length; i++) {
        var thinta = hinnat[i].textContent;
        //  var strhinta = thinta.slice(0, thinta.length - 1);
        var floathinta = thinta.replace(",", ".");
        parseFloat(floathinta);
        summa += parseFloat(floathinta);

    }
    summa = summa.toFixed(2);
    var strSumma = summa.toString();
    summaf = strSumma.replace(".", ",");
    document.getElementById("total").innerText = "Yhteensä: " + summaf + "€";

}

var email = window.localStorage.email;

if (email != null) {
    document.getElementById("email").value = email;
} else {
    console.log("Ei kirjautunut");
}