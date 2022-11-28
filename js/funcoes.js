//CROP 1
var jcp;
var numUsuario = 0;
var arrayCampos = [];

Jcrop.load('alvo').then(img => {
    jcp = Jcrop.attach(img, { canRemove: false, multiMax: 0, multiMin: 0 });

    jcp.addClass('jcrop-ux-keep-current');

});

function newUsuario() {

    var usuario = prompt("Digite o nome do assinante");

    if (usuario != "" && usuario != null) {

        var userWidget = jcp.newWidget(Jcrop.Rect.create(380, 100, 360, 110));

        arrayCampos.push({ widget: userWidget, nome: usuario, Id: numUsuario });

        var corDoUsuario = GetCorRGB();

        document.getElementById("lista-pessoas").innerHTML +=
        ` <li class = 'lista-usuario' id = 'L-${numUsuario}' ><i class='fa-regular fa-user'></i>
        <label class = 'label-user' style ='background: rgb(${corDoUsuario});' 
        onclick= 'ativarPosicao(${numUsuario})'>${usuario}</label>
        <input type= 'radio' name= 'usuario' class = 'radiobox-user' value="${numUsuario}"><li/> `
        
        var nomeUsuario = document.createTextNode(usuario);

        var nomeWidget = document.createElement('p');

        nomeWidget.appendChild(nomeUsuario);

        jcp.active.el.appendChild(nomeWidget);

        jcp.active.el.style.background = 'rgb(' + corDoUsuario + ')';

        numUsuario++;

    } else if (usuario == "") {
        alert("O nome não pode ser vazio!")
    }
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

function ativarPosicao(pID) {

    var widgetSelecionado = arrayCampos.find(element => element.Id == pID);

    jcp.activate(widgetSelecionado.widget);
}

document.getElementById("btn-delUser").onclick = function () {
    let radios = document.getElementsByName("usuario");

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {

            removeUsuario(radios[i].value);
            break;
        }
    }
}

document.getElementById("btn-editUser").onclick = function () {
    var radios = document.getElementsByName("usuario");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {

            editUsuario(radios[i].value);
        }
    }
}

function removeUsuario(pID) {

    jcp.setOptions({ canRemove: true });

    var item = document.getElementById("L-" + pID);

    var selecionado = arrayCampos.find(element => element.Id == pID);

    var resp = confirm("Deseja exluir o usuário " + selecionado.nome + "?");

    if (resp) {
        jcp.removeWidget(selecionado.widget);
        arrayCampos = arrayCampos.filter(element => element != selecionado);
        item.remove();
    }

    jcp.setOptions({ canRemove: false });
}

function editUsuario(pID) {

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

        if (editUser != "" && editUser != null) {

            arrayCampos[lIndex].nome = editUser;

            document.getElementById("L-" + pID).childNodes[3].textContent = editUser;

            document.querySelectorAll(".jcrop-widget").item(lIndex).lastChild.textContent = editUser;

        } else if (editUser == "") {
            alert("O nome do usuário não pode ser vazio!")
        }
    }
}
