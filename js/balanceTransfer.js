	$(function(){
	
	        // $("#rdbtn2").click(function(){
	     
			//	var obj = $(".activ");
			//	console.log(obj.next());
			//	obj.removeClass("activ");
			//	obj.next().addClass("activ");
			//	obj.hide();
			//	obj.next().show();
			//});
			
		//	$("#rdbtn1").click(function(){
	     
		//		var obj = $(".activ");
		//		console.log(obj.next());
		//		obj.removeClass("activ");
		//		obj.next().addClass("activ");
		//		obj.hide();
		//		obj.next().show();
		//	});
		
			$("#rdbtn1").click(function(){
				$(".2").fadeOut("fast");
				$(".1").fadeIn("fast");
				$("#rdbtn2").removeClass("rdselect");
				$("#rdbtn1").addClass("rdselect");
				
			});
			
			$("#rdbtn2").click(function(){
				$(".1").fadeOut("fast");
				$(".2").fadeIn("fast");
				$("#rdbtn1").removeClass("rdselect");
				$("#rdbtn2").addClass("rdselect");

			});
			
			$(".onoffswitch").click(function(){
				
								
				/*o  = $(".programar"); 
				if(o.css("display")=="none"){
					o.show("slow");
				}else{
					o.hide("slow");
				}*/
				//$(".programar").fadeToggle("slow");
			});	





	
			$("#navegador ul li").click(function(){
				$("#navegador").find(".active").attr("class"," ");
				$(this).addClass('active');
			});

			$(".wra_Select3 select").ddslick({
                    width:"500"
                });
                
            $(".wra_Select2 select").ddslick({
                    width:"200"
                });
                
			$(".wra_Select4 select").ddslick({
                    width:"250"
                    
                });
           
           		

			

            	   

	});
