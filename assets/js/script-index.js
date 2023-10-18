console.log("Youhoooo!");

const tablLettre = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// ---------------------------------------------------------------------------------------------------MAIN-----------------------------------------------------------------------------------
let main = document.createElement("main");
main.classList.add("class-main")
console.log(main);
document.body.appendChild(main);

// ----------------------------------------------------------------------------------------TITRE--------------------------------------------------------------------------
let titrePendu = document.createElement("h1");
titrePendu.classList.add("titre-pendu");
console.log(titrePendu);
main.appendChild(titrePendu)

// ----------------------------------------------------------------REGLE-PENDU----------------------------------------------------------------------------
let reglePendu = document.createElement("section");
reglePendu.classList.add("regle-pendu");
console.log(reglePendu);
main.appendChild(reglePendu);

// ----------------------------------------Titre-Regle-Pendu----------------------
let titreReglePendu = document.createElement("h2");
titreReglePendu.classList.add("titre-regle-pendu");
console.log(titreReglePendu);
reglePendu.appendChild(titreReglePendu)

// --------------------Liste-Regle-----------------------
let olReglePendu = document.createElement("ol");
olReglePendu.classList.add("ol-regle-pendu");
console.log(olReglePendu);
reglePendu.appendChild(olReglePendu);

let li1ReglePendu = document.createElement("li");
li1ReglePendu.classList.add("classe-liste-regle");
console.log(li1ReglePendu);
olReglePendu.appendChild(li1ReglePendu);
// continuer à mettre des li autant que je veut pour mettre les regles

// ----------------------------------------------------------------BOITE-PENDU IMAGE----------------------------------------------------------------------
let boitePenduImage = document.createElement("div");
boitePenduImage.classList.add("boite-pendu-image");
console.log(boitePenduImage)
main.appendChild(boitePenduImage);

// 
let imagePendu = document.createElement("img");
imagePendu.classList.add("image-pendu");
console.log(imagePendu);
boitePenduImage.appendChild(imagePendu);

// ----------------------------------------------------------------DIV-RESULTAT-PENDU---------------------------------------------------------------------
 let resultatPendu = document.createElement("div");
 resultatPendu.classList.add("resultat-pendu");
 console.log(resultatPendu);
 main.appendChild(resultatPendu)

//  ---------------------------------------------------Titre-Resultat-Pendu-------------------
 let titreResultatPendu = document.createElement("h3");
 titreResultatPendu.classList.add("titre-resultat-pendu");
 console.log(titreResultatPendu);
 resultatPendu.appendChild(titreResultatPendu);
 
let essaiRestantResultatPendu = document.createElement("div");
essaiRestantResultatPendu.classList.add("essai-restant-resultat-pendu")
console.log(essaiRestantResultatPendu);
resultatPendu.appendChild(essaiRestantResultatPendu);

let saisieLettreResultatPendu = document.createElement("div")
saisieLettreResultatPendu.classList.add("saisie-lettre-resultat-pendu")
console.log(saisieLettreResultatPendu);
saisieLettreResultatPendu.appendChild(resultatPendu);

// ----------------------------------------------------------------CLAVIER-PENDU--------------------------------------------------------------------------
let clavierPendu = document.createElement("div");
clavierPendu.classList.add("clavier-pendu");
console.log(clavierPendu);
main.appendChild(clavierPendu);

// ---------------------------------------------------Titre-Clavier-PENDU----------------
let titreClavierPendu = document.createElement("h3");
titreClavierPendu.classList.add("titre-clavier-pendu")
console.log(titreClavierPendu);
clavierPendu.appendChild(titreClavierPendu);

// ---------------------------------------------------Clavier-BOUTON-Lettre--------------
tablLettre.forEach(element => {
    let boutonLettre = document.createElement("button");
    boutonLettre.classList.add("bouton");
    boutonLettre.innerText = [element]
    console.log(boutonLettre);
});






