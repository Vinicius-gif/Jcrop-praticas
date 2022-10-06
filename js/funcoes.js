//CROP 1

var jcp;
Jcrop.load('alvo').then(img => {
    jcp = Jcrop.attach(img, { multi: false, canRemove: false });

    const rectJoao = Jcrop.Rect.create(130, 350, 360, 110);
    jcp.newWidget(rectJoao);

    const rectPedro = Jcrop.Rect.create(130, 500, 360, 110);
    jcp.newWidget(rectPedro);

    const rectMaria = Jcrop.Rect.create(580, 500, 360, 110);
    jcp.newWidget(rectMaria);

    jcp.listen('crop.activate', (widget) => {
        console.log(widget.pos)
    });

    jcp.addClass('jcrop-ux-keep-current');
});

function campoJoao() {
    jcp.setOptions({shadeColor: 'pink'})
}

function campoPedro() {}

function campoMaria() {}

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