//CROP 1
var jcp;
var arrayCampos = [];

Jcrop.load('alvo').then(img => {
    jcp = Jcrop.attach(img, { multi: false, canRemove: false });

    // arrayCampos.push({ widget: jcp.newWidget(Jcrop.Rect.create(130, 350, 360, 110)), nome: 'joao' });

    // arrayCampos.push({ widget: jcp.newWidget(Jcrop.Rect.create(130, 500, 360, 110)), nome: 'pedro' });

    // arrayCampos.push({ widget: jcp.newWidget(Jcrop.Rect.create(580, 500, 360, 110)), nome: 'maria' });

    jcp.listen('crop.activate', (widget) => {
        console.log(widget.pos)
    });

    jcp.addClass('jcrop-ux-keep-current');
});

function ativarPosicao(pUsuario) {

    jcp.activate(arrayCampos[pUsuario].widget);

}

function newUsuario() {

    var usuario = prompt("Digite o nome do usuário");

    arrayCampos.push({ widget: jcp.newWidget(Jcrop.Rect.create(380, 100, 360, 110)), nome: usuario });

    var index = arrayCampos.length -1;

    var lista = document.getElementById("lista-pessoas").innerHTML;
    lista = lista + "<li><button class = 'lista-usuario' style = 'background-color: rgb("+GetCorRGB()+")' onclick='ativarPosicao("+index+")'>"+usuario+"</button></li>";
    document.getElementById("lista-pessoas").innerHTML = lista;

    // let btn = document.getElementById(index);

    // btn.addEventListener('click', function() {
    //     onclick="ativarPosicao("+ index +")"
    // });

    console.log(usuario);
}

function GetCorRGB() {

    var lMin = Math.ceil(50);
    var lMax = Math.floor(255);

    var lRed = Math.floor(Math.random() * (lMax - lMin + 1)) + lMin;
    var lGreen = Math.floor(Math.random() * (lMax - lMin + 1)) + lMin;
    var lBlue = Math.floor(Math.random() * (lMax - lMin + 1)) + lMin;

    var lCor = lRed.toString() + "," + lGreen.toString() + "," + lBlue.toString();

    return lCor;
}

//CROP 2

function setImage(tag) {
    document.getElementById('target').src = 'img/' + tag;
}

var stage;
Jcrop.load('target').then(img => {
    stage = Jcrop.attach(img, { multi: true });
    stage.listen('crop.remove', function (widget) {
        const pos = widget.pos;
        console.log(pos.x, pos.y, pos.w, pos.h);
    });
});

function eventoUpdate() {
    stage.listen('crop.update', function (widget, e) {
        const pos = widget.pos;
        console.log(pos.x, pos.y, pos.w, pos.h);
    });
}

function eventoActivate() {
    stage.listen('crop.activate', function (widget, e) {
        const pos = widget.pos;
        console.log(pos.x, pos.y, pos.w, pos.h);
    });
}

function eventoChange() {
    stage.listen('crop.change', function (widget, e) {
        const pos = widget.pos;
        console.log(pos.x, pos.y, pos.w, pos.h);
    });
}

function eventoRemove() {
    stage.listen('crop.remove', function (widget, e) {
        const pos = widget.pos;
        console.log(pos.x, pos.y, pos.w, pos.h);
    });
}

//CROP 3

var jcp3;
const myImage = new Image();
myImage.src = 'https://s1.static.brasilescola.uol.com.br/be/2021/11/planeta-marte.jpg';
document.getElementById('container').appendChild(myImage);
Jcrop.load(myImage).then(img => {
    jcp3 = Jcrop.attach(img, { shadeColor: 'pink' })
});