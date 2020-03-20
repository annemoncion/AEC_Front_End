let vNomUsager = false;
let vMotDePasse = false;
let vConfirmation = false;
let vEmail = false;
let vUnivers = false;
let persoHarry = false;
let persoLotr = false;
let persoZelda = false;
let choixUnivers = $('input[name="options"]');
let universChoisi = "";

$("#envoyer").click(function(event) {
	event.preventDefault();
	if (vNomUsager && vMotDePasse && vConfirmation && vEmail && vUnivers) {
		if (
			universChoisi == "harry" && persoHarry
			|| universChoisi == "lotr" && persoLotr
			|| universChoisi == "zelda" && persoZelda) {
			$("#formComicon").hide();
			$("#resume").addClass("apparu");

			let email = $("#email").val();
			let nom = $("#nomUsager").val();

			$("#resumeEmail").append(email);
			$("#resumeNom").append(nom);

			if (universChoisi == "harry") {
				let perso = $( "#persoHarry option:selected" ).text();
				$("#imagePerso").attr("src", "img/harry-potterr.jpg");
   				$("#imagePerso").attr("alt", "Harry Potter");
   				$("#resumeUnivers").append("Harry Potter");
   				$("#resumePerso").append(perso);
			}
			else if (universChoisi == "lotr") {
				let perso = $( "#persoLotr option:selected" ).text();
				$("#imagePerso").attr("src", "img/lotr.jpg");
   				$("#imagePerso").attr("alt", "Seigneur des Anneaux");
   				$("#resumeUnivers").append("Seigneur des Anneaux");
   				$("#resumePerso").append(perso);
			}
			else if (universChoisi == "zelda") {
				let perso = $( "#persoZelda option:selected" ).text();
				$("#imagePerso").attr("src", "img/zelda.jpg");
   				$("#imagePerso").attr("alt", "Zelda");
   				$("#resumeUnivers").append("Zelda");
   				$("#resumePerso").append(perso);
			}
		}
		else {
			console.log("Formulaire non complete");
		}
		
	}
	else {
		console.log("Formulaire non complete");
	}
});

$( "#nomUsager" ).keyup(function() {
   	let nomUsager = $("#nomUsager").val();

	if (nomUsager === "SLAY" || nomUsager == "test") {
		$("#noteUsager").html("<span class='invalide'>Ce nom est invalide.</span>");
		vNomUsager = false;
	}
	else if (nomUsager != "") {
		$("#noteUsager").html("<span class='valide'>Ce nom est disponible.</span>");
		vNomUsager = true;
	}
});

function hasUpperCase(str) {
	return (/[A-Z]/.test(str));
}

function hasNumber(str) {
	return(/[0-9]/.test(str));
}

function isEmail(str) {
	return(/([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})/.test(str));
}

$( "#mdp" ).keyup(function() {
   	let motDePasse = $("#mdp").val();

	if (motDePasse.length > 9 && hasUpperCase(motDePasse) && hasNumber(motDePasse)) {
		$("#noteMdp").html("<span class='valide'>Fort</span>");
		vMotDePasse = true;
	}
	else if (motDePasse.length >= 6) {
		$("#noteMdp").html("<span class='moyen'>Moyen</span>");
		vMotDePasse = false;
	}
	else if (motDePasse.length < 6 && motDePasse.length > 0) {
		$("#noteMdp").html("<span class='invalide'>Faible</span>");
		vMotDePasse = false;
	}
	else {
		$("#noteMdp").html("");
		vMotDePasse = false;
	}
});

$("#confirmationMdp").keyup(function() {
	let confirmation = $("#confirmationMdp").val();
	let motDePasse = $("#mdp").val();
	let arrayMdp = motDePasse.split("");
	let arrayConfirm = confirmation.split("");
	console.log(arrayMdp + arrayConfirm);
	let test = true;
	let match;

	for (var i = 0; i < arrayMdp.length; i++) {
		if (arrayMdp[i] != arrayConfirm[i]) {
			test = false;
			break;
		}
	}

	if (test && confirmation.length == motDePasse.length) {
		match = true;
		$("#noteConfirmation").html("<span class='valide'>Les mots de passe sont identiques.</span>");
		vConfirmation = true;
	} 
	else {
		$("#noteConfirmation").html("<span class='invalide'>Attention: Les mots de passe ne correspondent pas.</span>");
		vConfirmation = false;
	}
});

$("#email").keyup(function() {
	let email = $("#email").val();

	if (!isEmail(email)) {
		$("#noteEmail").html("<span class='invalide'>Veuillez entrer une adresse courriel valide.</span>");
		vEmail = false;
	}
	else {
		$("#noteEmail").html("");
		vEmail = true;
	}
})

choixUnivers.change(function() {
   let choixHarry = $("input#harry:checked").val();
   let choixLotr = $("input#lotr:checked").val();
   let choixZelda = $("input#zelda:checked").val();
   vUnivers = true;
   if (choixHarry == "on") {
   	$("#harryPotter").addClass("apparu");
   	$("#lotr").removeClass("apparu");
   	$("#zelda").removeClass("apparu");
   	universChoisi = "harry";
   }
   else if (choixLotr == "on") {
   	$("#lotr").addClass("apparu");
   	$("#harryPotter").removeClass("apparu");
   	$("#zelda").removeClass("apparu");
   	universChoisi = "lotr";
   }
   else if (choixZelda == "on") {
   	$("#zelda").addClass("apparu");
   	$("#harryPotter").removeClass("apparu");
   	$("#lotr").removeClass("apparu");
   	universChoisi = "zelda";
   }
});

$( "#persoHarry" ).change(function() {
   	if ($( "#persoHarry option:selected" ).val() != 'Choississez un personnage') {
   		persoHarry = true;
   	}
   	else {
   		persoHarry = false;
   	}
});

$( "#persoLotr" ).change(function() {
   	if ($( "#persoLotr option:selected" ).val() != "Choississez un personnage") {
   		persoLotr = true;
   	}
   	else {
   		persoLotr = false;
   	}
});

$( "#persoLotr" ).change(function() {
   	if ($( "#persoZelda option:selected" ).val() != "Choississez un personnage") {
   		persoZelda = true;
   	}
   	else {
   		persoZelda = false;
   	}
});


