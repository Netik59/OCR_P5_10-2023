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

let slideCounter = 0 // Initialisation d'un compteur de clique commençant à 0
const divDots = document.querySelector(".dots") // Selectionne la div contenant tous les bullet points

let nbPoints = slides.length // La variable nbPoints prend le nombre d'éléments du tableau slides
console.log(nbPoints) // Afficher la variable nbPoints

// Pour prendre le code HTML des deux images (flèche de droite et flèche de gauche)
let arrowRight = document.querySelector(".arrow_right") 
let arrowLeft = document.querySelector(".arrow_left")

// Prend le code de l'image du carrousel
let image = document.querySelector(".banner-img")

// Fonction pour trouver le nombre de bullet points nécessaire et pour les ajouter dans la div ayant la classe .dots
function addPoints() {
	for (let i = 1; i < nbPoints; i++) {
		let bulletPoints = `<div class="dot"></div>`
		divDots.innerHTML += bulletPoints
	}
}

// Fonction pour passer à l'image suivante et au paragraphe suivant
function modifySlide(slideIndex) {
	let pointSelect = document.querySelectorAll(".dot")[slideIndex] // La variable prend le code du bullet points suivant
	pointSelect.classList.add("dot_selected") // Et lui ajoute la classe .dot_selected
	let newSRC = `./assets/images/slideshow/${slides[slideIndex].image}` // La variable prend le chemin d'accès des images
																				// + la valeur de l'image n°slideCounter du tableau slides
	image.setAttribute("src", newSRC) // Attribue à l'image le nouveau chemin d'accès
	let tagLineP = document.querySelector("#banner p") // Prendre le code du paragraph dans l'élément ayant l'ID banner
	tagLineP.innerHTML = slides[slideIndex].tagLine // Et le remplacer par la valeur du tagLine n°slideCounter du tableau slides
}

// Fonction pour enlever à tous les bullet points la classe .dot_selected (pour tous les désélectionner)
function unselectAllDots() {
	const dots = document.querySelectorAll(".dot") // La variable prend dans une liste le code de tous les bullet points un à un
	Array.from(dots).forEach((dot) => { // Converti la liste en tableau et parcours tous les éléments du tableau
		dot.classList.remove("dot_selected") // Pour chaque élément, leur enlever la classe .dot_selected 
	})

}

// Fonction pour la flèche de droite
function afficherImageSuivante() {
	unselectAllDots() // Déselectionner tous les bullet points
	slideCounter = (slideCounter + 1) % nbPoints // 4 modulo 4 est égal à 0 ==> Boucle
	modifySlide(slideCounter) // passer au slide suivant à partir de la variable slideCounter
}

// Fonction pour la flèche de gauche
function afficherImagePrecedente() {
	if (slideCounter > 0) { // Si le compteur n'est pas négatif
		unselectAllDots()
		slideCounter--
		modifySlide(slideCounter)
	} else if (slideCounter===0) { // Sinon si le compteur est égal à 0
		unselectAllDots()
		slideCounter = nbPoints - 1 // Le compteur va prendre la valeur du nombre d'éléments du tableau slides en y soustrayant 1 
									// Ce qui va faire revenir le compteur à 3 ==> Dernière image du carrousel ==> boucle comme avec le modulo
		modifySlide(slideCounter)
	}
}

addPoints() // Appelle de la fonction addPoints

arrowRight.addEventListener("click", afficherImageSuivante) // Lors du clic sur la flèche de droite, mettre en route la fonction afficherImageSuivante

arrowLeft.addEventListener("click", afficherImagePrecedente) // Lors du clic sur la flèche de gauche, mettre en route la fonction afficherImagePrecedente


