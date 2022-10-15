//CROP 1
var jcp;
var arrayCampos = [];

Jcrop.load('alvo').then(img => {
    jcp = Jcrop.attach(img, { multi: false, canRemove: false });

    // arrayCampos.push({ widget: jcp.newWidget(Jcrop.Rect.create(130, 350, 360, 110)), nome: 'joao' });

    // arrayCampos.push({ widget: jcp.newWidget(Jcrop.Rect.create(130, 500, 360, 110)), nome: 'pedro' });

    // arrayCampos.push({ widget: jcp.newWidget(Jcrop.Rect.create(580, 500, 360, 110)), nome: 'maria' });

    jcp.listen('crop.activate', (widget) => {
        //console.log(widget.pos)
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

    var lista = document.getElementById("lista-pessoas").innerHTML;
    lista = lista + "<li><button class = 'lista-usuario' style = 'background-color: rgb("+GetCorRGB()+")' onclick='ativarPosicao("+index+")'>"+usuario+"</button></li>";
    document.getElementById("lista-pessoas").innerHTML = lista;

    // let btn = document.getElementById(index);

    // btn.addEventListener('click', function() {
    //     onclick="ativarPosicao("+ index +")"
    // });

    console.log(usuario);
    console.log(arrayCampos);
}

function removeUsuario() {
    
    arrayCampos.splice(jcp.removeWidget(jcp.active));

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
