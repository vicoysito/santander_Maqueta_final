

			/*var data = {
				colums:['Fecha','Descripción','Referencia','Cuenta de cargo','Cuenta destino','Importe','Estatus'],
				rowsValues:['dd/mm/aaaa','123456789123','123456789123','1234****7890','1234****7890','999,999,999.00','Exitosa'],
				numRows:6
			}*/
			$(".radioptc").css("width","25px");
			$(".radioptc").css("height","35px");


			var urlimg ="<img src='widgets/max/w_13/img/card.png' width='53' height='28'>"
			var radios="<input type='radio' name='radio' class='radioptc'>";
			var data = {
				colums:['','','','Pago minimo (MXP)','Para no generar<br/>intereses(MXP)','Fecha limite de pago'],
				rowsValues:[radios,urlimg,'Elite Rewards<br/> Platino 1234****5678','999,999,999,99','1234****1890','1234****1890'],
				numRows:30,
				hasStatus:true,
				configButton:true
			}
			Gridius($('.tablaDinamica'),data);


			 $('.w13_PT_contenidodatos2').click(function() {
		        cargaCalendario('switchModal()', 'calendario');
		    });

			 /*function verificaOpcion(){

			 	$(".switchLabelR").click(function(){
			 		$(".b1").css("display","none");
			 		$(".b2").css("display","inline");
			 		$("#rtable2").css("display","none");
			 		$("#rtable3").css("display","none");
			 	});

			 	$(".switchLabel").click(function(){
			 		$(".b1").css("display","inline");
			 		$(".b2").css("display","none");
			 		$("#rtable2").css("display","inline");
			 		$("#rtable3").css("display","inline");
			 		$(".jr").css("display","none");
			 		$(".rm").css("display","none");
			 	});
			 }
			 verificaOpcion();*/