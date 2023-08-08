function transpile() {
    let text = document.getElementById("code").value
    let translations = [["console.dire(", "console.log("],["alerte(", "alert("],["cEstVrai", "true"],["cEstFaux", "false"],["cEstNul", "nul"],["leTypeDeCetteChoseEst", "typeof"],["indéfini", "undefined"],["définir", "let"],["constante", "const"],["variable", "var"],["Mathématiques.arrondir", "Math.round"],["Mathématiques.sol", "Math.floor"],["Mathématiques.plafond", "Math.ceil"],["Mathématiques.minimum", "Math.min"],["Mathématiques.maximum", "Math.max"],["Mathématiques.nombreAléatoire", "Math.random"],["Mathématiques.racineCarée", "Math.sqrt"],["siIlSePasseQue", "if"],["sinon", "else"],["sisi", "else if"],[".diviser(", ".split("],[".rejoindre(", ".join("],[".inclut(", ".includes("],["enChaineDeCharactères", "toString"],["remplacer(", "replace("],["EnNombreIntégré(", "ParseInt("],["EnNombreQuiFLotte(", "parseFloat("],["PrendreUnÉlémentParSonidentifiant(", "getElementById("],[".HTMLIntérieur", ".innerHTML"],["définirLAttribut(", "setAttribute("],["merciChatGPTPourAvoirÉcritLaDocumentation()","console.log('Merci à ChatGPT de ne pas avoir écrit la documentation (même si je voulais qu'il le fasse au début) de ce projet qui ne sert à rien et qui est tout sauf complet.')"]]

    for(let i=0;i<translations.length;i++) {
        text = text.replaceAll(translations[i][0], translations[i][1])
    }
    document.getElementById("transpiled").innerHTML = text
}
