//CROP 1

var jcp;
Jcrop.load('alvo').then(img => {
    jcp = Jcrop.attach(img, { multi: false, canRemove: false });

    arrayCampos[0].id = Jcrop.Rect.create(130, 350, 360, 110);
    jcp.newWidget(arrayCampos[0].id);

    arrayCampos[1].id = Jcrop.Rect.create(130, 500, 360, 110);
    jcp.newWidget(arrayCampos[1].id);

    arrayCampos[2].id = Jcrop.Rect.create(580, 500, 360, 110);
    jcp.newWidget(arrayCampos[2].id);

    jcp.listen('crop.activate', (widget) => {
        console.log(widget.pos)
    });

    jcp.addClass('jcrop-ux-keep-current');
});

var arrayCampos = Array(3)

arrayCampos[0] = new Object();
arrayCampos[0].id = null;
arrayCampos[0].nome = "campo-joao";
arrayCampos[0].x = 130;
arrayCampos[0].y = 350;
arrayCampos[0].w = 360;
arrayCampos[0].h = 110;

arrayCampos[1] = new Object();
arrayCampos[1].id = null;
arrayCampos[1].nome = "campo-pedro";
arrayCampos[1].x = 130;
arrayCampos[1].y = 500;
arrayCampos[1].w = 360;
arrayCampos[1].h = 110;

arrayCampos[2] = new Object();
arrayCampos[2].id = null;
arrayCampos[2].nome = "campo-maria";
arrayCampos[2].x = 580;
arrayCampos[2].y = 500;
arrayCampos[2].w = 360;
arrayCampos[2].h = 110;

console.log(arrayCampos);

function ativarPosicao(pUsuario) {
//jcp.newCropper(arrayCampos[pUsuario].id,{ aspectRatio: arrayCampos[pUsuario].id.aspect });

console.log(jcp.active.pos);

//jcp.active = arrayCampos[pUsuario].id;
}

// var clicado = false;
// function campoJoao() {
//     if (!clicado) {
//         console.log('ok');
//         clicado = true;
//         const rect = Jcrop.Rect.create(130, 350, 360, 110);
//         jcp.newWidget(rect);
//     }
// }

// var clicado2 = false;
// function campoMaria() {
//     if (!clicado2) {
//         console.log('ok 2');
//         clicado2 = true;
//         const rect = Jcrop.Rect.create(130, 500, 360, 110);
//         jcp.newWidget(rect);
//     }
// }

// var clicado3 = false;
// function campoPedro() {
//     if (!clicado3) {
//         console.log('ok 3');
//         clicado3 = true;
//         const rect = Jcrop.Rect.create(580, 500, 360, 110);
//         jcp.newWidget(rect);
//     }
// }

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