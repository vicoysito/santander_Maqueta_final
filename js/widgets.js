
var globalVarOfVal = 0;
var globalFlah = 0;
var normal = 1610;
var altoVentana;
var responsiveFlag = 0;
var tamanoWidget = 587;

function validaBrowser(){
	var ua = navigator.userAgent.toLowerCase(); 
	if (ua.indexOf('safari')!=-1){ 
	   	if(ua.indexOf('chrome')  > -1){
	    	return false; // chrome
	    }
  	}else{
  		reject();
  	}
}

function reject(){
	alert("Para visualizar este sitio debe usar chrome");
	window.location.href = "https://www.google.com/intl/es-419/chrome/browser/"
}

// GENERADOR DE LA BOTONERA
function obtieneAltoTotal(){
	var altoContenedor = $("#wrappWidgets")[0].scrollHeight;
	var numeroDeBtns = Math.floor(altoContenedor / tamanoWidget);
	$("#navContent").html("");
	for(var i=0;i < numeroDeBtns;i++){
		btnDiv = creaBtn();
		$("#navContent").append(btnDiv);
	}
	
	var c;
		var altoScrolling = $("#wrappWidgets")[0].scrollHeight;
		var altosScroll = [];
	
	c = $('.btnNavWidget').size();
		punteroC = c;
		
		altoScrolling = altoScrolling/(c);
		for (c;c>=0;c--){altosScroll.push(Math.round(altoScrolling*c));}
		altosScroll.reverse();
		$('.btnNavWidget').each(function(i,v){
			$(this).attr('onclick','moveScroll(this,'+altosScroll[i]+')');
		});
	
	$("#navContent .btnNavWidget:first-child").removeClass("noActiveNav").addClass("ActiveNav");
	$("#navContent").css({"left":$("#wrappWidgets").width()+$("#wrappWidgets").offset().left+"px","top":"48%"});
	
	
}

function creaBtn(){
	var btnDiv = $("<div>");
	btnDiv.attr("class","Fright noActiveNav btnNavWidget");
	return btnDiv;
}

function changeComment(a){
	$("#msg-alert").text(msjAlert[a]);
}

function genFooterHeight(){
	return false;
	if(altoVentana > tamanoWidget){
		var restaElementos = $("#avatarNavPrin").height();
		restaElementos += $("#wr_btnNav").height();
		restaElementos += $("#tipoServ").height();
		restaElementos +=60;
		restaElementos = altoVentana - restaElementos;
		$("#footer").height(restaElementos);
	}
}


function ajustaBannerHeight(){
	if(altoVentana > tamanoWidget){
		var restaElementos = $("#wr_SuperBanner").height();
		restaElementos += $("#tipoServ").height();
		restaElementos += 10;
		restaElementos = altoVentana - restaElementos;
		//$("#wr_SuperBanner").height($("#wr_SuperBanner").height() + restaElementos);
		$("#wr_SuperBanner").height(600);
	}
}

var widgets = [
				{
					id:1, //saldos consolidados
					type:3,
					order:0,
					group:1,
					contentMin:'',
					contentMax:''
				},{
					id:2, //inversiones
					type:2,
					order:2,
					group:1,
					contentMin:'',
					contentMax:''
				},{
					id:3, //pago tarjeta
					type:2,
					order:3,
					group:1,
					contentMin:'',
					contentMax:''
				},{
					id:4, //pago servicios
					type:2,
					order:4,
					group:1,
					contentMin:'',
					contentMax:''
				},{
					id:5, //publicidad
					type:2,
					order:5,
					group:1,
					contentMin:'',
					contentMax:''
				},{
					id:6, //balance transfer (transfiera sus saldos)
					type:3,
					order:6,
					group:1,
					contentMin:'',
					contentMax:''
				},{
					id:7, //tarjeta credito saldos y movimientos
					type:3,
					order:8,
					group:1,
					contentMin:'',
					contentMax:''
				},{
					id:8, //domiciliaciones
					type:2,
					order:7,
					group:1,
					contentMin:'',
					contentMax:''
				},{
					id:9, //transferencias
					type:2,
					order:9,
					group:1,
					contentMin:'',
					contentMax:''
				},{
					id:10, //creditos personales
					type:2,
					order:11,
					group:1,
					contentMin:'',
					contentMax:''
				},{
					id:11, //solicitud de tarjeta
					type:2,
					order:12,
					group:1,
					contentMin:'',
					contentMax:''
				},{
					id:12, //administracion de tarjetas de credito
					type:3,
					order:10,
					group:1,
					contentMin:'',
					contentMax:''
				},{
					id:13, //recompensas
					type:3,
					order:13,
					group:1,
					contentMin:'',
					contentMax:''
				},{
					id:14, //cuentas y chequeras
					type:2,
					order:14,
					group:1,
					contentMin:'',
					contentMax:''
				}
			];

function groupBy(groupBy){
	var wm = $(".widget-min");
	wm.css('position','relative');
	//wm.animate({'top':'+=2000px','opacity':0.0},1500);
	wm.fadeOut('slow');
	setTimeout(function(){wm.remove();posWidgets(2,groupBy);},1501);
}

function posWidgets(qwerty,groupBy){
	var absoluteW = $("#absoluteWrapper");
	if(qwerty==1) $("#loginWrapper").hide();
	if(qwerty==0) absoluteW.css({'position':'absolute','left':$(window).width(),'display':'none'});
	var wrapper = $("#wrappWidgets");
	if(qwerty==0) wrapper.children(".widget-min").remove();
	else if(qwerty==1) $("[data-pos='codom']").remove();
	wrapper.css('height',altoVentana-50);
	$("#dataClient").css("width", $(window).width()-830);
	var widgetTypes = {
					1:{
						styles: ['widget-min','col1','altoTotal']
					},
					2:{
						styles: ['widget-min','col1','alto2']
					},
					3:{
						styles:['widget-min','col2','alto2']
					}
				};

	var parser = 0;
    if(qwerty==0 || qwerty==2){
    wids = sortByKey(widgets, 'order');
	$.each(wids,function(i,v){
		if(typeof groupBy != "undefined" && v.group!=groupBy) return;
		var newWidget = $('<div>');
		var c = fillStyles(v.type);
		newWidget.attr("class",c);
		if(v.id==null || v.contentMin!=""){ 
			newWidget.html(v.contentMin);
			/*hardcode*/ 
			$("div > div:first,.btnaceptar_wr,img",newWidget).click(function(){
				if(typeof $(this).attr("src") != 'undefined' && $(this).attr("src").indexOf("fake")==-1)  return false;
					getInstance(newWidget);
			});
			newWidget.attr("data-max","true");
		}
		else{
			$.ajax({
				url:'widgets/min/w_'+v.id+'/index.html',
		        type:'GET',
		        dataType:'html',
		        success: function(res){
		        	newWidget.html(res);
		        	$("div > div:first,.btnaceptar_wr,img",newWidget).click(function(){
						if(typeof $(this).attr("src") != 'undefined' && $(this).attr("src").indexOf("fake")==-1)  return false;
							getInstance(newWidget);
					});
		        }
		    });
			$.ajax({
				url:'widgets/max/w_'+v.id+'/index.html',
				type:'GET',
				dataType:'html',
				success: function(res){
					newWidget.attr("data-max","true");
				},
				error: function(){
					newWidget.attr("data-max","false");
				}
			}); 
		}
		//if(v.id==2) newWidget.css("float","right");
		wrapper.append(newWidget);
		newWidget.attr({"data-pos":parser+1,"data-id":v.id});
		//if((parser%3)==0 && parser!=0) newWidget.css('float','right');
		var posWid = newWidget.offset();
		var posWra = wrapper.offset()
		var a = posWid.top-posWra.top; 
		var b = posWid.left-posWra.left;
		if(qwerty!=2) newWidget.css({'top': a+"px",'left':b+"px"});
		
		parser++;
	});
	}//end of validate of resize param
	function sortByKey(array, key) {
	    return array.sort(function(a, b) {
	        var x = a[key]; var y = b[key];
	        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	    });
	}

	function fillStyles(type){
		var attrClass = "";
		$.each(widgetTypes[type].styles,function(i,v){
			attrClass += v+" ";	
		});
		return attrClass;
	}

	(function (wrapper){
		//if(qwerty==2) return false;
		$("[data-pos='7']").css('float','left');
		if($(window).width()>1490 || !spDisplay ) 
		{
			//$("[data-pos='4']").insertBefore('[data-pos="3"]');
			//$("[data-pos='9']").insertAfter('[data-pos="6"]');
			//$("[data-pos='10']").insertAfter('[data-pos="9"]');
			//$("[data-pos='11']").insertAfter('[data-pos="10"]');
			//$("[data-pos='9']").hide();

			$("#wrappWidgets").css("width","1022px");
			$("#cierraSB").fadeOut("fast");
			//$("[data-pos='3']").after('<div class="widget-min col1 alto2"  data-max="false" data-pos="codom"><img src="img/fake/carrito.jpg" height="275"/></div>');
			var alen = 1030;
		}else{
			//$("[data-pos='3']").insertBefore('[data-pos="4"]');
			$("#wrappWidgets").css("width","767px");
			$("#cierraSB").fadeIn("fast");
		}


		var obj = $("#navContent");
		var posLeft = wrapper.offset().left;
		posLeft += alen || 790;
		var posTop =  wrapper.height()/2;
		obj.css({'left':posLeft,'top':(posTop-obj.height())});
		var altosScroll = [];

		banPosSelect = 1;
		posScroll = 0;
		dirScroll=false;
		
		wrapper.scroll(function(e){
			if(globalVarOfVal>0) return false;
			var thisS = $(this);
			altoScrollTop = $("#wrappWidgets").height()+ thisS.scrollTop();
			if(posScroll > thisS.scrollTop()){
					dirScroll =false;
			}else if(posScroll < thisS.scrollTop()){
					dirScroll = true;
			}
			posScroll = thisS.scrollTop();
			if(altoScrollTop >= altosScroll[(banPosSelect+1)] && dirScroll){
				if(banPosSelect>3){
					banPosSelect=2;
				}else{
					banPosSelect++;
				}
			}else if((altoScrollTop-($("#wrappWidgets").height()/2))  <= altosScroll[(banPosSelect-1)] && !dirScroll)
			{
				if(banPosSelect<=1){
					banPosSelect = 1 ;
				}else{
					banPosSelect--;
				}
			}
				if(banPosSelect==0){
					banPosSelect=1;
				}
				activaBtn($('#navContent > div:nth-child('+banPosSelect+')'));
		});
		wrapper.animate({'opacity':'1'});
	})(wrapper);
}

function moveResObs(){
	if(responsiveFlag!=0) return returnMenu();
	$(".wr_NavPrin,#dataClient,#wrappWidgets,.butter").animate({'left':'+=190px'},'slow');
	$("#logo").animate({'left':'224px'},'slow');
	$("#tipoServ").animate({'left':'199px'},'slow');
	responsiveFlag++;
}
function returnMenu(){
	$(".wr_NavPrin,#dataClient,#wrappWidgets,.butter").animate({'left':'-=190px'},'slow');
	$("#logo").animate({'left':'33px'},'slow');
	$("#tipoServ").animate({'left':'17px'},'slow');
	responsiveFlag=0;
	return false;
}

function moveScroll(obj,math){
	if($(obj).hasClass('ActiveNav')) return false;
	globalVarOfVal++;
	if($(obj).next().hasClass('ActiveNav')) ope = '-';
	else ope = '+';
	$("#wrappWidgets").animate({'scrollTop': math+'px'},'slow',function(){ globalVarOfVal=0; });
	activaBtn(obj);
}

function getInstance(obj){
	var thisW = $(obj);
	if(typeof thisW.data("instanced") == 'undefined' || thisW.data("instanced") == 'undefined'){
		$(".loader").show();
		thisW.data("instanced",new newWidgetInstance(thisW));
	}
}

function newWidgetInstance(obj)
{	
	this.obj = obj;
	this.topPos = this.obj.offset().top;
	this.leftPos = this.obj.offset().left;
	this.topPosIn = this.obj.css('top');
	this.leftPosIn = this.obj.css('left');
	this.width = this.obj.width();
	this.height = this.obj.height();
	this.chPost = function () {
			var forA = this.obj;
			if(this.obj.attr("data-max")=="false" || this.obj.is(":animated")){$(".loader").hide();return false;}
			$(this.obj[0].outerHTML).appendTo("#wrappWidgets").insertAfter( $("[data-pos='"+(parseInt(forA.attr("data-pos"))-1)+"']")).attr("clone","true");
			this.obj.css({"box-shadow":"none","border":"none"});
			this.obj.attr({"instanced":"true"});
			this.obj.css({'position':'fixed','top':this.topPos,'left':this.leftPos,'z-index':50});
			forA.children().fadeOut(0);
			this.obj.animate({width:'935px',height:'541px',left: ($(window).width()/2)-467+'px',top:'10%'},600,function(){creaOverlay('#000',document.body,0,function(){$("#banOverlay").attr("onclick","closeAction()");});  forA.children().fadeOut('fast'); var scope = $(this);  /*}).animate({width:'935px',height:'541px'},800,function(){*/
				$.ajax({
					url:'widgets/max/w_'+forA.attr("data-id")+'/index.html',
			        type:'GET',
			        dataType:'html',
			        success: function(res){
			        	forA.html(res);
			        	$(".loader").hide();
			        	forA.children().fadeIn('slow');
			        	forA.find(".btnHeader").attr("onclick","closeAction()");
						forA.find(".vtaimg").attr("onclick","closeAction(null,7);");
			        }
		    	}); 
			});
			};
	this.routerAction = function(positionMax,id){
						//if(globalFlah>0) return false;
						destruyeOverlay();
						var forA = this.obj;
						forA.children().hide(300);
						this.obj.animate({'top':(this.topPos)-10,'left':(this.leftPos),'width':this.width+'px','height':this.height+'px',},800,function(){ /*$("#wrappWidgets").animate({scrollTop:'0px'}); }).animate({'top':'+='+$("#wrappWidgets").offset().top,'left':'+='+$("#wrappWidgets").offset().left},300,function(){*/
							var io = $(this);
							$.ajax({
								url:'widgets/min/w_'+io.attr("data-id")+'/index.html',
								type:'GET',
								dataType:'html',
								success: function(res){
									io.html(res);
									$("[clone='true']").remove();
									forA.children().fadeIn('slow',function(){
									});
									$("[data-id='"+id+"']").click();
									$("div > div:first,.btnaceptar_wr,img",io).click(function(){
										getInstance(io);
									});
								}
							});
							io.css({'top':'-='+$("#wrappWidgets").offset().top,'left':'-='+$("#wrappWidgets").offset().left,'position':'static','z-index':0});
							io.attr({"instanced":"false"});
							io.data('instanced','undefined')
						});
						globalFlah = 0;
					};
	this.chPost();

}

function closeAction(od,id){
	$("[instanced='true']").data('instanced').routerAction(od,id);
	globalFlah++;
}

function valToForm(){
	var absoluteW = $("#absoluteWrapper");
	absoluteW.show();
	$("#loginWrapper").animate({"background-position":"+=50px"},"slow");
	$("#wr_SuperBanner").css({"position":"relative"}).animate({'left':'-255px'},800,function(){ $("#titleLogin").next().html('<h4>EN SANTANDER LE DAMOS VIDA A TUS IDEAS</h4><h1 class="tituloBold">Bienvenido a SUPERNET <br> la banca mas personal que nunca.</h1><div class="btnaceptar" style="width:180px;margin-left:0px;margin-right:15px" onclick="outaLogin()">Saltar Intro</div><p style="font-weight:bold;font-size:11px;margin-top: 18px;">Omitir en: <span class="seger" style="">04</span></p>');$("#titleLogin").next().fadeIn(); });
	$("#titleLogin").next().fadeOut('fast');
	setTimeout(function(){ $(".seger").text("02"); },1000);
	setTimeout(function(){ $(".seger").text("01"); },2000);
	setTimeout(function(){ $(".seger").text("00"); $(".seger").parent().remove();},3000);
	setTimeout(function(){ outaLogin() },3200);
}

function outaLogin(){
	var absoluteW = $("#absoluteWrapper");
	$("#loginWrapper").animate({"left":"-="+$(this).width()},1500,function(){$(this).hide();});
	absoluteW.animate({"left":"0px"},1500,function(){obtieneAltoTotal();});
	setTimeout(function(){$("#wr_SuperBanner").animate({"left":"0px"},0);},0);
	var outLoginBan = false;
}
