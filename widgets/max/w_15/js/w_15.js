$(function() {

    Gridius($('.tablaDinamica2'), {
        hasStatus: false,
        configButton: true,
        colums: ['Meses de gracia', 'Fecha de aplicación'],
        rowsValues: null,
        parseRows: [
            ['1', '15/01/2014'],
            ['2', '15/01/2014'],
            ['3', '15/01/2014']
        ],
        numRows: 2,
        icons: {
            print: false
        }
    });
});


var total = .1;
var c = document.getElementById("myCanvas");
c.width = 190;
c.height = 190;
var ctx = c.getContext("2d");

function aumentaTotal(numero) {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.restore();
    //total += .1;

    console.log("numero" + numero + "::::" + numero * Math.PI);
    ctx.beginPath();
    ctx.lineWidth = 8;
    ctx.strokeStyle = "#4f8aea";
    //ctx.arc(160,160,150,((90*Math.PI)/-180), numero*Math.PI));
    ctx.arc(95, 95, 88, 0, numero * Math.PI);
    ctx.stroke();
    ctx.restore();

}



$(document).ready(function() {


    $(".wra_Select3 select").ddslick({
        width: 630,
        direccionSlide: "up"
    });

    $('#rotatescroll').tinycircleslider({
        radius: 95,
        callback: function(element, index) {
            console.log(element, index);
        }
    });

});