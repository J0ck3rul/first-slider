var maxim = 3;
var ok = 0;
var back;
var urm;
back = 0;
var plec = 2;

function prev() {
ok=0;

    back++;
    if (back == maxim + 1)
        back = 1;
    var content = document.getElementById("content");

    create(back);
    if (ok === 0) {
        setTimeout(function () {
            if (ok === 0) {
                prev();
            }
            }, 3000);

    }
}

function start(){
    prev();
}

function next() {
    back--;
    ok = 1;
    if (back == 0)
        back = maxim;
    create(back);
}

function create(index) {
    document.getElementById('content').innerHTML = "";
    document.getElementById('content').innerHTML = '<img src = " ' + index + '.jpg" height = "500px;" width = "500px" >';
}
