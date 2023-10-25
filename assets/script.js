const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let compteurClick = 0 // Initialisation d'un compteur de clique commençant à 0

let nbPoints = slides.length // La variable nbPoints prend le nombre d'éléments du tableau slides
console.log(nbPoints) // Afficher la variable nbPoints

// Pour prendre le code HTML des deux images (flèche de droite et flcèhe de gauche)
let arrow_right = document.querySelector(".arrow_right") 
let arrow_left = document.querySelector(".arrow_left")

// Prend le code de l'image du carrousel
let image = document.querySelector(".banner-img")

// Fonction pour trouver le nombre de bullet points nécessaire et pour les ajouter dans la div ayant la classe .dots
function ajouterPoints() {
	for (let i = 1; i < nbPoints; i++) {
		let divDots = document.querySelector(".dots")
		let lesPoints = `<div class="dot"></div>`
		divDots.innerHTML += lesPoints
	}
}

// Fonction pour la flèche de droite
function afficherImageSuivante() {
	let pointUnselect = document.querySelectorAll(".dot")[compteurClick] // La variable prend le code du bullet point d'avant
	pointUnselect.classList.remove("dot_selected") // Et lui enlève la classe .dot_selected
	compteurClick = (compteurClick + 1) % nbPoints // 4 modulo 4 est égal à 0 ==> Boucle
	let pointSelect = document.querySelectorAll(".dot")[compteurClick] // La variable prend le code du bullet points suivant
	pointSelect.classList.add("dot_selected") // Et lui ajoute la classe .dot_selected
	let nouveauSRC = "./assets/images/slideshow/" + slides[compteurClick].image // La variable prend le chemin d'accès des images
																				// + la valeur de l'image n°compteurClick du tableau slides
	image.setAttribute("src", nouveauSRC) // Attribue à l'image le nouveau chemin d'accès
	let tagLineP = document.querySelector("#banner p") // Prendre le code du paragraph dans l'élément ayant l'ID banner
	tagLineP.innerHTML = slides[compteurClick].tagLine // Et le remplacer par la valeur du tagLine n°compteurClick du tableau slides
}

// Fonction pour la flèche de gauche
function afficherImagePrecedente() {
	if (compteurClick > 0) { // Si le compteur n'est pas négatif
		let pointUnselect = document.querySelectorAll(".dot")[compteurClick]
		pointUnselect.classList.remove("dot_selected")
		compteurClick--
		let pointSelect = document.querySelectorAll(".dot")[compteurClick]
		pointSelect.classList.add("dot_selected")
		let nouveauSRC = "./assets/images/slideshow/" + slides[compteurClick].image
		image.setAttribute("src", nouveauSRC)
		let tagLineP = document.querySelector("#banner p")
		tagLineP.innerHTML = slides[compteurClick].tagLine
	} else if (compteurClick===0) { // Sinon si le compteur est égal à 0
		let pointUnselect = document.querySelectorAll(".dot")[compteurClick]
		pointUnselect.classList.remove("dot_selected")
		compteurClick = nbPoints - 1 // Le compteur va prendre la valeur du nombre d'éléments du tableau slides en y soustrayant 1 
									// Ce qui va faire revenir le compteur à 3 ==> Dernière image du carrousel ==> boucle comme avec le modulo
		let nouveauSRC = "./assets/images/slideshow/" + slides[compteurClick].image
		image.setAttribute("src", nouveauSRC)
		let tagLineP = document.querySelector("#banner p")
		tagLineP.innerHTML = slides[compteurClick].tagLine
	}
}

ajouterPoints() // Appelle de la fonction ajouterPoints

arrow_right.addEventListener("click", afficherImageSuivante) // Lors du clic sur la flèche de droite, mettre en route la fonction afficherImageSuivante

arrow_left.addEventListener("click", afficherImagePrecedente) // Lors du clic sur la flèche de gauche, mettre en route la fonction afficherImagePrecedente


