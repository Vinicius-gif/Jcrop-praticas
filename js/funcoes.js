//CROP 1
var jcp;
var numUsuario = 0;
var arrayCampos = [];

Jcrop.load('alvo').then(img => {
    jcp = Jcrop.attach(img, { multi: false, canRemove: false });

    const rect = Jcrop.Rect.sizeOf(jcp.el);

    jcp.newWidget(rect.scale(.7, .5).center(rect.w, rect.h));
    
    jcp.addClass('jcrop-ux-keep-current');

});

function ativarPosicao(pUsuario) {

    jcp.activate(arrayCampos[pUsuario].widget);

    //console.log(jcp.activate);
    //console.log(arrayCampos);

}

function newUsuario() {

    var usuario = prompt("Digite o nome do usuário");

    let x = jcp.active.pos.x, y = jcp.active.pos.y, w = jcp.active.pos.w, h =  jcp.active.pos.h;

    //console.log(x,y,w,h);

    arrayCampos.push({ widget: jcp.newWidget(Jcrop.Rect.create( x, y, w, h)), nome: usuario });
    //Jcrop.Rect.create(380, 100, 360, 110)

    //var index = arrayCampos.length - 1;

    var lista = document.getElementById("lista-pessoas").innerHTML;

    var lista = lista + "<li class = 'list-btns-users' id = 'L-" + numUsuario + "' ><button class = 'lista-usuario' style = 'background-color: rgb(" + GetCorRGB() + ")' onclick= 'ativarPosicao(" + index + ")'>" + usuario + "</button> <button id = 'btn-excluir' onclick= 'removeUsuario(" + index + ")'> X </button><button id = 'btn-editar' onclick= 'alterarUsuario(" + index + ")'> Editar </button></li>";
    
    numUsuario++;

    document.getElementById("lista-pessoas").innerHTML = lista;

    //console.log(jcp.active);

}

function removeUsuario(pIndex) {

    jcp.setOptions({ canRemove: true });

    var item = document.getElementsByClassName("list-btns-users")[pIndex];

    console.log(item);

    item.remove();

    jcp.removeWidget(arrayCampos[pIndex].widget);

    arrayCampos.splice(pIndex, 1);

    jcp.setOptions({ canRemove: false });

    console.log(arrayCampos);
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

function alterarUsuario(pIndex) {

    var editUser = prompt("Digite o nome do usuário");

    arrayCampos[pIndex].nome = editUser;

    console.log(arrayCampos);

    user = document.querySelector(".lista-usuario")[pIndex];

    //user.innerHTML = "<button class = 'lista-usuario' style = 'background-color: rgb(" + GetCorRGB() + ")' onclick= 'ativarPosicao(" + pIndex + ")'>" + editUser + "</button>"

}
