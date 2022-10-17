//CROP 1
var jcp;
var arrayCampos = [];
var listaUsuarios = [];

Jcrop.load('alvo').then(img => {
    jcp = Jcrop.attach(img, { multi: false, canRemove: false});

    // arrayCampos.push({ widget: jcp.newWidget(Jcrop.Rect.create(130, 350, 360, 110)), nome: 'joao' });

    // arrayCampos.push({ widget: jcp.newWidget(Jcrop.Rect.create(130, 500, 360, 110)), nome: 'pedro' });

    // arrayCampos.push({ widget: jcp.newWidget(Jcrop.Rect.create(580, 500, 360, 110)), nome: 'maria' });

    jcp.listen('crop.activate', (widget) => {
        //console.log(widget.pos)
        //console.log(jcp.active);
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

    listaUsuarios = document.getElementById("lista-pessoas").innerHTML;
    listaUsuarios = listaUsuarios + "<li><button class = 'lista-usuario' style = 'background-color: rgb("+GetCorRGB()+")' onclick='ativarPosicao("+index+")'>"+usuario+"</button></li>";
    document.getElementById("lista-pessoas").innerHTML = listaUsuarios;

    // let btn = document.getElementById(index);

    // btn.addEventListener('click', function() {
    //     onclick="ativarPosicao("+ index +")"
    // });

    //console.log(listaUsuarios);
    console.log(usuario);
    console.log(arrayCampos);
}

function removeUsuario() {

    //console.log(jcp.active.pos);

    /* arrayCampos = arrayCampos.filter((valorAtual, indice) => {
        //console.log(valorAtual, indice);
        //return valorAtual.widget.pos;
        console.log(valorAtual.widget.pos);
    }); */

    jcp.setOptions({ canRemove: true });

    arrayCampos = arrayCampos.filter((valorAtual => valorAtual.widget.pos != jcp.active.pos));

    //listaUsuarios = listaUsuarios.filter((valorLista => valorLista.widget.pos != jcp.active.pos));

    jcp.removeWidget(jcp.active);

    // var liBtn = document.querySelector("#lista-usuario");

    // var lista = document.querySelector("#lista-pessoas");
    // lista.removeChild(liBtn);

    jcp.setOptions({ canRemove: false });

    console.log(arrayCampos);
}

/* function removeUsuario() {

    //console.log(jcp.active);

    //jcp.active.setOptions({ canRemove: true });

    jcp.setOptions({ canRemove: true });
    
    //jcp.removeWidget(jcp.active);
    arrayCampos = arrayCampos.filter(widget => widget == jcp.active);

    console.log(arrayCampos);

    jcp.setOptions({ canRemove: false });


} */

function GetCorRGB() {

    var lMin = Math.ceil(50);
    var lMax = Math.floor(255);

    var lRed = Math.floor(Math.random() * (lMax - lMin + 1)) + lMin;
    var lGreen = Math.floor(Math.random() * (lMax - lMin + 1)) + lMin;
    var lBlue = Math.floor(Math.random() * (lMax - lMin + 1)) + lMin;

    var lCor = lRed.toString() + "," + lGreen.toString() + "," + lBlue.toString();

    return lCor;
}
