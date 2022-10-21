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

function ativarPosicao(pID) {

    for (var i = 0; i < arrayCampos.length; i++) {
        if (arrayCampos[i].Id == pID) {
            jcp.activate(arrayCampos[i].widget);
            break; // encerra o loop quando encontra o item
        }
    }
}

function newUsuario() {

    var usuario = prompt("Digite o nome do usuário");

    let x = jcp.active.pos.x, y = jcp.active.pos.y, w = jcp.active.pos.w, h = jcp.active.pos.h;

    arrayCampos.push({ widget: jcp.newWidget(Jcrop.Rect.create(x, y, w, h)), nome: usuario, Id: numUsuario });
    //Jcrop.Rect.create(380, 100, 360, 110)

    //var index = arrayCampos.length - 1;

    var lista = document.getElementById("lista-pessoas").innerHTML;

    //var lista = lista + "<li class = 'list-btns-users' id = 'L-" + numUsuario + "' ><button class = 'lista-usuario' style = 'background-color: rgb(" + GetCorRGB() + ")' onclick= 'ativarPosicao(" + numUsuario + ")'>" + usuario + "</button> <button id = 'btn-excluir' onclick= 'removeUsuario(" + numUsuario + ")'> X </button><button id = 'btn-editar' onclick= 'alterarUsuario(" + numUsuario + ")'> Editar </button></li>";

    //var lista = lista + "<li class = 'list-btns-users' id = 'L-" + numUsuario + "' ><button class = 'lista-usuario' style = 'background-color: rgb(" + GetCorRGB() + ")' onclick= 'ativarPosicao(" + numUsuario + ")'>" + usuario + "</button> <button id = 'btn-excluir' onclick= 'removeUsuario(" + numUsuario + ")'> X </button><button id = 'btn-editar' onclick= 'alterarUsuario(" + numUsuario + ")'> Editar </button></li>";

    var lista = lista + "<li class = 'lista-usuario' id = 'L-" + numUsuario + "' ><label for= " +usuario+ " >"+usuario+"</label><input type= 'checkbox' class = 'checkbox-user' id = " +numUsuario+ " value="+usuario+"><li/>"

    numUsuario++;

    document.getElementById("lista-pessoas").innerHTML = lista;

    //console.log(jcp.active);

}

function removeUsuario(pID) {

    jcp.setOptions({ canRemove: true });

    var item = document.getElementById("L-" + pID);

    console.log(item);

    item.remove();

    for (var i = 0; i < arrayCampos.length; i++) {
        if (arrayCampos[i].Id == pID) {
            jcp.removeWidget(arrayCampos[i].widget);
            arrayCampos.splice(i, 1);
            break; // encerra o loop quando encontra o item
        }
    }

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

function alterarUsuario(pID) {

    var lUsuario = "";
    var lIndex = -1;

    for (var i = 0; i < arrayCampos.length; i++) {
        if (arrayCampos[i].Id == pID) {
            lIndex = i;
            break;
        }
    }

    if (lIndex >= 0) {

        lUsuario = arrayCampos[lIndex].nome;

        var editUser = prompt(lUsuario);

        arrayCampos[lIndex].nome = editUser;

        console.log(arrayCampos);

        var item = document.getElementById("L-" + pID);
        item.innerText = editUser;
    }
    //user = document.querySelector(".lista-usuario")[pIndex];
}
