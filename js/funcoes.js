//CROP 1
var jcp;
var numUsuario = 0;
var arrayCampos = [];

Jcrop.load('alvo').then(img => {
    jcp = Jcrop.attach(img, { multi: false, canRemove: false, multiMax: 0 });

    jcp.addClass('jcrop-ux-keep-current');

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

    if (usuario != "" && usuario != null) {

        var userWidget = jcp.newWidget(Jcrop.Rect.create(380, 100, 360, 110));

        arrayCampos.push({ widget: userWidget, nome: usuario, Id: numUsuario });

        var lista = document.getElementById("lista-pessoas").innerHTML;

        var corDoUsuario = GetCorRGB();

        var lista = lista + "<li class = 'lista-usuario' id = 'L-" + numUsuario + "' ><label class = 'label-user' style ='background: rgb(" + corDoUsuario + ");' onclick= 'ativarPosicao(" + numUsuario + ")'>" + usuario + "</label><input type= 'radio' name= 'usuario' class = 'radiobox-user' value=" + numUsuario + "><li/>"

        document.getElementById("lista-pessoas").innerHTML = lista;

        var nomeUsuario = document.createTextNode(usuario);

        jcp.active.el.appendChild(nomeUsuario);

        jcp.active.el.style.background = 'rgb(' + corDoUsuario + ')';

        jcp.active.el.style.opacity = 0.6;

        numUsuario++;

    }
}

document.getElementById("btn-delUser").onclick = function () {
    var radios = document.getElementsByName("usuario");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {

            removeUsuario(radios[i].value);
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

    for (var i = 0; i < arrayCampos.length; i++) {

        if (arrayCampos[i].Id == pID) {

            if (arrayCampos.length == 1) {
                jcp.active.el.remove();
                arrayCampos.splice(i, 1);
                item.remove();
                //alert("O documento deve conter ao menos um assinante!")
                break;
            }

            else {

                var resp = confirm("Deseja exluir o usuário " + arrayCampos[i].nome + "?");

                if (resp) {
                    jcp.removeWidget(arrayCampos[i].widget);
                    arrayCampos.splice(i, 1);
                    item.remove();
                    break;
                }
            }
        }
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

            var item = document.getElementById("L-" + pID).firstChild.lastChild;

            item.nodeValue = editUser;

            conteudoWidget = document.querySelectorAll(".jcrop-widget").item(lIndex).lastChild.textContent = editUser;

        }
    }
}
