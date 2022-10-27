//CROP 1
var jcp;
var numUsuario = 0;
var arrayCampos = [];


Jcrop.load('alvo').then(img => {
    jcp = Jcrop.attach(img, { multi: false, canRemove: false });

    //jcp.addClass('jcrop-ux-keep-current');

});

function ativarPosicao(pID) {

    for (var i = 0; i < arrayCampos.length; i++) {
        if (arrayCampos[i].Id == pID) {
            jcp.activate(arrayCampos[i].widget);
            break;
        }
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

function newUsuario() {

    var usuario = prompt("Digite o nome do usuário");

    if (usuario == "" || usuario == null || usuario == undefined) {
        alert("O nome do usuário não pode ser vazio!");

    }

    else {

        arrayCampos.push({ widget: jcp.newWidget(Jcrop.Rect.create(380, 100, 360, 110)), nome: usuario, Id: numUsuario });
        //Jcrop.Rect.create(380, 100, 360, 110)

        //var index = arrayCampos.length - 1;

        var lista = document.getElementById("lista-pessoas").innerHTML;

        //var lista = lista + "<li class = 'list-btns-users' id = 'L-" + numUsuario + "' ><button class = 'lista-usuario' style = 'background-color: rgb(" + GetCorRGB() + ")' onclick= 'ativarPosicao(" + numUsuario + ")'>" + usuario + "</button> <button id = 'btn-excluir' onclick= 'removeUsuario(" + numUsuario + ")'> X </button><button id = 'btn-editar' onclick= 'alterarUsuario(" + numUsuario + ")'> Editar </button></li>";

        var corDoUsuario = GetCorRGB();

        var lista = lista + "<li class = 'lista-usuario' id = 'L-" + numUsuario + "' ><label for= " + numUsuario + " id= 'label-" + numUsuario + "' class = 'label-user' style ='background: rgb(" + corDoUsuario + ");' onclick= 'ativarPosicao(" + numUsuario + ")'>" + usuario + "</label><input type= 'radio' name= 'usuario' class = 'radiobox-user' value=" + numUsuario + "><li/>"

        var conteudoWidget = document.querySelectorAll(".jcrop-widget").item(numUsuario);

        var nomeUsuario = document.createTextNode(usuario);

        conteudoWidget.appendChild(nomeUsuario);

        conteudoWidget.style.background = 'rgb(' + corDoUsuario + ')';

        conteudoWidget.style.opacity = 0.6;

        document.getElementById("lista-pessoas").innerHTML = lista;

        numUsuario++;

        console.log(arrayCampos);

    }
}

document.getElementById("btn-delUser").onclick = function () {
    var radios = document.getElementsByName("usuario");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {

            console.log("Escolheu: " + radios[i].value);

            removeUsuario(radios[i].value);
        }
        else {
            //alert("Selecione o usuário que desejas excluir primeiro!");
        }
    }
}

document.getElementById("btn-editUser").onclick = function () {
    var radios = document.getElementsByName("usuario");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {

            console.log("Escolheu: " + radios[i].value);

            editUsuario(radios[i].value);
        }
    }
}

function removeUsuario(pID) {

    jcp.setOptions({ canRemove: true });

    var item = document.getElementById("L-" + pID);

    console.log(item);

    for (var i = 0; i < arrayCampos.length; i++) {

        if (arrayCampos[i].Id == pID) {

            let resp = confirm("Deseja exluir o usuário " + arrayCampos[i].nome + "?");

            if (resp == true) {
                jcp.removeWidget(arrayCampos[i].widget);
                arrayCampos.splice(i, 1);
                item.remove();
            }
            break;

        }

        jcp.setOptions({ canRemove: false });

        console.log(arrayCampos);
    }
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

        if (editUser != "") {

            arrayCampos[lIndex].nome = editUser;

            console.log(arrayCampos);

            var item = document.getElementById("L-" + pID).firstChild.lastChild;

            item.nodeValue = editUser;

            var conteudoWidget = document.querySelectorAll(".jcrop-widget").item(numUsuario).lastChild.textContent = editUser;

            console.log(conteudoWidget);
        }

        else if (editUser == "") {
            alert("O nome do usuário não pode ser vazio!");
        }

        else { }
    }
}
