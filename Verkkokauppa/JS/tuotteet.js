
kan_nappi = document.getElementById("kannettavat");
kan_nappi.onclick = function () {
    var pcels = document.querySelectorAll('.tuotteet.pc');
    for (var i = 0; i < pcels.length; i++) {
        pcels[i].classList.remove('tuotteet')
    }
    for (var i = 0; i < pcels.length; i++) {
        pcels[i].classList.add('hidden')
    }
    var puhels = document.querySelectorAll('.tuotteet.puhelin');
    for (var i = 0; i < puhels.length; i++) {
        puhels[i].classList.remove('tuotteet')
    }
    for (var i = 0; i < puhels.length; i++) {
        puhels[i].classList.add('hidden')
    }
    var kanels = document.querySelectorAll('.kannettava');
    for (var i = 0; i < kanels.length; i++) {
        kanels[i].classList.remove('hidden')
    }
    for (var i = 0; i < kanels.length; i++) {
        kanels[i].classList.add('tuotteet')
    }
    var accels = document.querySelectorAll('.tuotteet.acc');
    for (var i = 0; i < accels.length; i++) {
        accels[i].classList.remove('tuotteet')
    }
    for (var i = 0; i < accels.length; i++) {
        accels[i].classList.add('hidden')
    }
};
pc_nappi = document.getElementById("pckomp");
pc_nappi.onclick = function () {
    var pcels = document.querySelectorAll('.pc');
    for (var i = 0; i < pcels.length; i++) {
        pcels[i].classList.remove('hidden')
    }
    for (var i = 0; i < pcels.length; i++) {
        pcels[i].classList.add('tuotteet')
    }
    var puhels = document.querySelectorAll('.tuotteet.puhelin');
    for (var i = 0; i < puhels.length; i++) {
        puhels[i].classList.remove('tuotteet')
    }
    for (var i = 0; i < puhels.length; i++) {
        puhels[i].classList.add('hidden')
    }
    var kanels = document.querySelectorAll('.tuotteet.kannettava');
    for (var i = 0; i < kanels.length; i++) {
        kanels[i].classList.remove('tuotteet')
    }
    for (var i = 0; i < kanels.length; i++) {
        kanels[i].classList.add('hidden')
    }
    var accels = document.querySelectorAll('.tuotteet.acc');
    for (var i = 0; i < accels.length; i++) {
        accels[i].classList.remove('tuotteet')
    }
    for (var i = 0; i < accels.length; i++) {
        accels[i].classList.add('hidden')
    }
};
puh_nappi = document.getElementById("puhelimet");
puh_nappi.onclick = function () {
    var pcels = document.querySelectorAll('.tuotteet.pc');
    for (var i = 0; i < pcels.length; i++) {
        pcels[i].classList.remove('tuotteet')
    }
    for (var i = 0; i < pcels.length; i++) {
        pcels[i].classList.add('hidden')
    }
    var puhels = document.querySelectorAll('.puhelin');
    for (var i = 0; i < puhels.length; i++) {
        puhels[i].classList.remove('hidden')
    }
    for (var i = 0; i < puhels.length; i++) {
        puhels[i].classList.add('tuotteet')
    }
    var kanels = document.querySelectorAll('.tuotteet.kannettava');
    for (var i = 0; i < kanels.length; i++) {
        kanels[i].classList.remove('tuotteet')
    }
    for (var i = 0; i < kanels.length; i++) {
        kanels[i].classList.add('hidden')
    }
    var accels = document.querySelectorAll('.tuotteet.acc');
    for (var i = 0; i < accels.length; i++) {
        accels[i].classList.remove('tuotteet')
    }
    for (var i = 0; i < accels.length; i++) {
        accels[i].classList.add('hidden')
    }
};
acc_nappi = document.getElementById("accessories");
acc_nappi.onclick = function () {
    var pcels = document.querySelectorAll('.tuotteet.pc');
    for (var i = 0; i < pcels.length; i++) {
        pcels[i].classList.remove('tuotteet')
    }
    for (var i = 0; i < pcels.length; i++) {
        pcels[i].classList.add('hidden')
    }
    var puhels = document.querySelectorAll('.tuotteet.puhelin');
    for (var i = 0; i < puhels.length; i++) {
        puhels[i].classList.remove('tuotteet')
    }
    for (var i = 0; i < puhels.length; i++) {
        puhels[i].classList.add('hidden')
    }
    var kanels = document.querySelectorAll('.tuotteet.kannettava');
    for (var i = 0; i < kanels.length; i++) {
        kanels[i].classList.remove('tuotteet')
    }
    for (var i = 0; i < kanels.length; i++) {
        kanels[i].classList.add('hidden')
    }
    var accels = document.querySelectorAll('.acc');
    for (var i = 0; i < accels.length; i++) {
        accels[i].classList.remove('hidden')
    }
    for (var i = 0; i < accels.length; i++) {
        accels[i].classList.add('tuotteet')
    }
};
kaik_nappi = document.getElementById("kaikki");
kaik_nappi.onclick = function () {
    var pcels = document.querySelectorAll('.pc');
    for (var i = 0; i < pcels.length; i++) {
        pcels[i].classList.remove('hidden')
    }
    for (var i = 0; i < pcels.length; i++) {
        pcels[i].classList.add('tuotteet')
    }
    var puhels = document.querySelectorAll('.puhelin');
    for (var i = 0; i < puhels.length; i++) {
        puhels[i].classList.remove('hidden')
    }
    for (var i = 0; i < puhels.length; i++) {
        puhels[i].classList.add('tuotteet')
    }
    var kanels = document.querySelectorAll('.kannettava');
    for (var i = 0; i < kanels.length; i++) {
        kanels[i].classList.remove('hidden')
    }
    for (var i = 0; i < kanels.length; i++) {
        kanels[i].classList.add('tuotteet')
    }
    var accels = document.querySelectorAll('.acc');
    for (var i = 0; i < accels.length; i++) {
        accels[i].classList.remove('hidden')
    }
    for (var i = 0; i < accels.length; i++) {
        accels[i].classList.add('tuotteet')
    }

};
