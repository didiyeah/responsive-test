function ajuste() {

	// dimensions de la surface utile du navigateur
	var w = $(window).width();
	var h = $(window).height();
	
	//
	// point de rupture du design : w<740px
	//
	
	if(w>740){ // scroll horizontal

		// calcul largeur et hauteur en pixel pour le main 
		var n_section = $("section").length; // nombre de sections (colonne)
		var larg_main = n_section*380+150;
		var haut_main = h-200;
		
		// applique les styles
		$("section").css({"display":"inline-block","height":"100%", "margin-bottom":"20px"});
		$("header").css({"position":"fixed"});
		$("footer").css({"position":"fixed"});
		$("#main").css({"margin-top":"100px","width":larg_main, "height":haut_main});

	} else{ // w<740px -> scroll vertical
		
		// calcul largeur et hauteur en pixel pour le main 
		var larg_main = w-60;
		var haut_main = "auto";
		
		// applique les styles
		$("section").css({"display":"block","height":"400px"});
		$("header").css({"position":"relative"});
		$("footer").css({"position":"relative"});
		$("#main").css({"margin-top":"20px","width":larg_main, "height":haut_main});
	}
	
	$("header").html("fenetre : largeur="+w+" hauteur="+h+" - screen : largeur="+screen.availWidth+" hauteur="+screen.availHeight+" - main : largeur="+larg_main+" hauteur="+haut_main)
				.css("color","#fff");
	console.log(w+" - "+h+" largeur du main ="+larg_main);
}

$(window).resize(function () {ajuste();});
$(document).ready(function () {ajuste();});
