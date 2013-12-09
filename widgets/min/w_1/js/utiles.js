$(document).ready(function(){
	$("body").attr("data-banpop","false");
});
var spDisplay = true;
function creaOverlay(color,contenedor,tipo){
	$(document).ajaxStart(function() {
		$(".loader").show();
	});
	$(document).ajaxStop(function() {
		$(".loader").hide();
	});
	pos = (tipo==1)?'absolute':'fixed';
	var divOverlay =  $("<div>");
	var c = $(contenedor);
	c.css("position","relative");

	if(tipo == 1){
		divOverlay.attr({"id":"modalOver","class":"modal"});
	}else{
		divOverlay.attr({"id":"banOverlay","class":"modal"});
	}
	altoTotal = c.height();
	anchoTotal = c.width();
	divOverlay.css({"position":pos,"top":"0","left":"0","width":(anchoTotal*1.20)+"px","background":color,"opacity":".8","height":"100%",'display':'none'});
	c.append(divOverlay);
	divOverlay.fadeIn("slow");
	return $("body").attr("data-banpop","true");
}

function creaModal(contenedor,tipo,contenido){ 
	pos = (tipo==1)?'absolute':'fixed';
	var c = $(contenedor);
	divContent = $("<div>");
	divCerrar = $("<div>");
	divCerrar.attr({"id":"cerrarBtn","class":"modal"});
	divCerrar.css({"position":"absolute","top":"0","right":"0","background":"url(../img/botones/cerrar.png) center","width":"30px","height":"30px","cursor":"pointer"});
	divCerrar.click(destruyeOverlay);

	divContent.attr({"id":"contentOverlay","class":"modal"});
	divContent.css({"position":pos,"top":"0","left":"50%","width":(anchoTotal-140)+"px","padding":"40px","height":(altoTotal/2)+"px","border":"1px solid black","display":"block","z-index":"1000","box-shadow":"0 0 5px #ccc","overflow":"auto","background":"white","margin-left":"-","margin-top":"10%"});
	divContent.css({"margin-left":"-"+((divContent.width()/2)+40)+"px"})
	divContent.fadeIn("slow");
	c.append(divContent);
	divContent.load(contenido,function(){
		divContent.append(divCerrar);
		// divContent.append("");
	});

}


function destruyeOver(){
	$("#modalOver").fadeOut("slow",function(){
		$("#modalOver").remove();
	});
	$("#contentOverlay").fadeOut("slow",function(){
		$("#contentOverlay").remove();
	});
}



function destruyeOverlay(){	
	if($("body").attr("data-banpop")=="true"){
		$(".modal").each(function(){
			$(this).fadeOut("slow",function(){
				$(this).remove();
			})
		});

		return false;

	}
}


function shortcuts(){
	$('body').keypress(function(e){
    switch(e.which){
   			case 0:
   				destruyeOverlay();
   			break;

   			default:
   			break;
   		}


	});
}

$(function(){
	shortcuts();
})


function cierraWidget(){
		return false;
	}



    function cierraSB(){
        $("#wr_SuperBanner").animate({"width":"hide"},1200,function(){
            $("#wrappSB").css("display","none");
            spDisplay = false;
            posWidgets(1);
           // muestraSb2();
           //posWidgets(1);

        });
    }

    function muestraSb2(){

        $("#wr_SuperBanner2").animate({"bottom":"30px"},1500);

    }

    /*function cierraSB2(){

        $("#wr_SuperBanner2").animate({"bottom":"-615px"},1500,function(){
            $("#wrappSB").css("display","block");
            $("#wr_SuperBanner").animate({"width":"show"},1200);
        });


    }*/


    $(function(){
    $.ajax({
    url:'balance_maquetas/informativo.html',
    type:'GET',
    dataType:'html',
    success: function(res){
    $('.off').html(res);
    }
    })
    $("select").ddslick({
    width:"200"
    });


    //$("#wrappWidgets").mCustomScrollbar();


    });
    function activaBtn(obj){
    $(".ActiveNav").each(function(){
    $(this).removeClass('ActiveNav').addClass('noActiveNav');
    });
    $(obj).addClass('ActiveNav').removeClass('noActiveNav');
    }

    