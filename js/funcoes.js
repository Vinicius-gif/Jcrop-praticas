/* $(document).ready(function(){
                    
                    Jcrop.attach('target',
                    {
                        onselect: function(crop){
                            console.log(crop);
    
                            $("#x").val(crop.x);
                            $("#y").val(crop.y);
                            $("#w").val(crop.w);
                            $("#h").val(crop.h);
                        }
                    });
                }) */

/* const stage = Jcrop.attach('alvo');

stage.listen('crop.move',(widget,e) => {
console.log(widget.pos);
}); */

var jcp;
Jcrop.load('alvo').then(img => {
    jcp = Jcrop.attach(img, { multi: false, canRemove: false });
    const rt = Jcrop.Rect.sizeOf(jcp.el);
    jcp.newWidget(rt.scale(.6, .4).center(rt.w, rt.h));
    jcp.focus();
});

function mostrarCoord() {
    jcp.listen('crop.change', (widget, e) => {
        console.log(widget.pos)
    });
}

function campoJoao() {
    const rect = Jcrop.Rect.create(130, 350, 360, 110);
    jcp.newWidget(rect);
    jcp.addClass('jcrop-ux-keep-current');
    jcp.addClass('jcrop-ux-inactive-handles');
}

function campoMaria() {
    const rect = Jcrop.Rect.create(130, 500, 360, 110);
    jcp.newWidget(rect);
}

function campoPedro() {
    const rect = Jcrop.Rect.create(580, 500, 360, 110);
    jcp.newWidget(rect);
}

function campoTeste() {
    const point = [110, 110];
    const rect = Jcrop.Rect.fromPoint(point, 200, 300, 'br');
    jcp.newWidget(rect);
}

function setImage(tag) {
    document.getElementById('target').src = 'img/' + tag;
}

/* const stage = Jcrop.attach('target', { multi: true });

stage.listen('crop.remove', function (widget, e) {
    const pos = widget.pos;
    console.log(pos.x, pos.y, pos.w, pos.h);
}); */

var stage;
Jcrop.load('target').then(img => {
    stage = Jcrop.attach(img, { multi: true });
    stage.listen('crop.remove', function (widget, e) {
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

var jcp3;
const myImage = new Image();
myImage.src = 'https://s1.static.brasilescola.uol.com.br/be/2021/11/planeta-marte.jpg';
document.getElementById('container').appendChild(myImage);
Jcrop.load(myImage).then(img => {
    jcp3 = Jcrop.attach(img, { shadeColor: 'pink' })
});