//CROP 1
var jcp;
var arrayCampos = [];

Jcrop.load('alvo').then(img => {
    jcp = Jcrop.attach(img, { multi: false, canRemove: false });

    jcp.addClass('jcrop-ux-keep-current');
});

function ativarPosicao(pUsuario) {

    jcp.activate(arrayCampos[pUsuario].widget);

}

function newUsuario() {

    var usuario = prompt("Digite o nome do usuário");

    arrayCampos.push({ widget: jcp.newWidget(Jcrop.Rect.create(380, 100, 360, 110)), nome: usuario });

    var index = arrayCampos.length - 1;

    var lista = document.getElementById("lista-pessoas").innerHTML;
    var lista = lista + "<li class = 'list-btns-users'><button class = 'lista-usuario' style = 'background-color: rgb(" + GetCorRGB() + ")' onclick= 'ativarPosicao(" + index + ")'>" + usuario + "</button> <button id = 'btn-excluir' onclick= 'removeUsuario(" + index + ")'> X </button></li>";
    document.getElementById("lista-pessoas").innerHTML = lista;

}

function removeUsuario(pIndex) {

    jcp.setOptions({ canRemove: true });

    var itens = document.querySelector(".list-btns-users");
    
    itens.remove(pIndex);

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
