var ddData = [{
    text: "1234****5678 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Producto Santander &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Papa &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  $999,999,999.00",
    value: 1,
    selected: false,
}, {
    text: "1234****5678 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Producto Santander &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Hermano &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  $999,999,999.00",
    value: 2,
    selected: false,

}, {
    text: "1234****5678 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Producto Santander &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Sobrino &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  $999,999,999.00",
    value: 3,
    selected: false,

}];

var data = {
    colums: ['Fecha', 'Descripción', 'Referencia', 'Cuenta de cargo', 'Cuenta destino', 'Importe', 'Estatus'],
    rowsValues: ['dd/mm/aaaa', '123456789123', '123456789123', '1234****7890', '1234****7890', '999,999,999.00', 'Exitosa'],
    numRows: 10
}

var datados = {
    colums: ['Titular de la cuenta', 'Número de cuenta', 'Alias', 'Banco', 'Correo del titular'],
    rowsValues: ['Nombre', '1234****5678', 'Alias de cuenta', 'Nombre Banco', 'correo@correo.com'],
    numRows: 2
}
// info para los droplis del flujo 4
var data1 = [{
    text: "1 mes sin interes",
    value: 1,
    selected: false,
}, {
    text: "2 meses sin intereses",
    value: 2,
    selected: false,

}, {
    text: "3 meses sin intereses",
    value: 3,
    selected: false,
}];

var data2 = [{
    text: "3 dias",
    value: 1,
    selected: false,
}, {
    text: "4 dias",
    value: 2,
    selected: false,

}, {
    text: "1 día",
    value: 3,
    selected: false,
}];

var datacat = [{
    text: "Telefonía",
    value: 1,
    selected: false,
}, {
    text: "Transporte",
    value: 2,
    selected: false,

}, {
    text: "colegio",
    value: 3,
    selected: false,
}];

var dataubic = [{
    text: "Distrito Federal",
    value: 1,
    selected: false,
}, {
    text: "Guadalajara",
    value: 2,
    selected: false,

}, {
    text: "Michoacán",
    value: 3,
    selected: false,
}];

var databusqueda = [{
    text: "Últimos 5 pagos",
    value: 1,
    selected: false,
}, {
    text: "Último mes",
    value: 2,
    selected: false,

}, {
    text: "Últimos 3 meses",
    value: 3,
    selected: false,
}];

var dataEstatus = [{
    text: "Programados",
    value: 1,
    selected: false,
}, {
    text: "Exitosos",
    value: 2,
    selected: false,

}, {
    text: "No exitoso",
    value: 2,
    selected: false,

}, {
    text: "Todos",
    value: 3,
    selected: false,
}];

var datoRango = [{
    text: "999,999,999,00(MXP)",
    value: 1,
    selected: false,
}, {
    text: "999,999,999,00(MXP)",
    value: 2,
    selected: false,

}, {
    text: "999,999,999,00(MXP)",
    value: 3,
    selected: false,
}];

var identificador = 0;
//hasta aqui los droplistdel flujo4 

$(function() {

    //DropList falso (Pendiente a realizacion)
    $(".w4_dropList select").ddslick({
        data: ddData,
        width: 520,
        background: "#f7f7f7",
        imagePosition: "left",
        selectText: "1234****5678 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Producto Santander &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Alias &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  $999,999,999.00",
        onSelected: function(data) {
            console.log(data);
        }
    });

    $(".btnaction2").click(function() {

        if ($(this).hasClass("btnaction2")) {
            $(this).removeClass("btnaction2");
            $(this).addClass("btnaction");
        } else {
            $(this).removeClass("btnaction");
            $(this).addClass("btnaction2");
        }

        $(this).parent().next().slideToggle("slow");
    });

    $(".btnaction").click(function() {

        if ($(this).hasClass("btnaction")) {
            $(this).removeClass("btnaction");
            $(this).addClass("btnaction2");
        } else {
            $(this).removeClass("btnaction2");
            $(this).addClass("btnaction");
        }

        $(this).parent().next().slideToggle("slow");
    });

    $(".w8_CRAB_dropHdr1").children(".toggle").click(function() {
        $(".w8_CRAB_wraFormulario").slideUp("slow");
        $(".w8_CRAB_dropHdr2").children(".btnaction").removeClass("btnaction").addClass("btnaction2");
    });

    $(".w8_CRAB_dropHdr2").children(".toggle").click(function() {
        $(".tablaDinamica").slideUp("slow");
        $(".w8_CRAB_dropHdr1").children(".btnaction").removeClass("btnaction").addClass("btnaction2");
    })


    construyeSwitch("switch_OC");
    var js = [{
        text: "Elemento 0",
        value: 1,
        selected: false
    }];


    $(".select_OC").ddslick({
        data: js,
        width: 300,
        imagePosition: "left",
        onSelected: function(selectedData) {

        }
    });
    cambiaFlujo('.wra_flu1');



})();


function cargaHtml(componente, url) {
    $(componente).load(url);
}