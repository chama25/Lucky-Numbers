import React, { useState } from "react";

function LuckyNumbers() {
  const [numbers, setNumbers] = useState([]);

  const generateLuckyNumbers = () => {
    const newNumbers = [];

    while (newNumbers.length < 6) {
      const randomNumber = Math.floor(Math.random() * 49) + 1;
      if (!newNumbers.includes(randomNumber)) {
        newNumbers.push(randomNumber);
      }
    }

    const bonusNumber = Math.floor(Math.random() * 10) + 1;

    setNumbers([...newNumbers, bonusNumber]);
  };

  const resetNumbers = () => {
    setNumbers([]);
  };

  return (
    <div>
      <h1>Lotto 6/49</h1>
      <h3>Generating lucky numbers</h3>
      {numbers.length > 0 && <h2>Lucky Numbers are</h2>}
      {numbers.length > 0 && (
        <div>
          <div className="number-container">
            {numbers.map((number, index) => (
              <span
                key={index}
                className={`number-circle ${
                  index === numbers.length - 1 ? "bonus-number" : ""
                }`}
              >
                {number}
              </span>
            ))}
          </div>
        </div>
      )}
      <br />
      <div className="button-space">
        <button onClick={resetNumbers}>Reset</button>
        <button onClick={generateLuckyNumbers}>Show me lucky numbers</button>
      </div>
    </div>
  );
}

export default LuckyNumbers;
/*import React, { useState } from "react";

function LuckyNumbers() {
  const [numbers, setNumbers] = useState([]);
  -Nous importons les modules nécessaires de React : React pour créer des composants React et useState pour gérer l'état du composant.
  -Nous définissons un composant fonctionnel LuckyNumbers.
  -Nous utilisons le useState hook pour initialiser une variable d'état numbers qui contiendra les numéros de chance générés.


  -Nous définissons la fonction generateLuckyNumbers qui sera appelée lorsque vous cliquez sur le bouton "Show me lucky numbers".
  -À l'intérieur de cette fonction, nous créons un tableau newNumbers pour stocker les numéros de chance générés.
  -Nous utilisons une boucle while pour générer 6 numéros uniques entre 1 et 49. Nous générons un nombre aléatoire avec Math.random() et le multiplions par 49 pour obtenir un nombre entre 0 et 48, puis ajoutons 1 pour obtenir un nombre entre 1 et 49.
  -Si le numéro généré n'est pas déjà présent dans newNumbers, nous l'ajoutons au tableau.
  -Ensuite, nous générons un numéro bonus entre 1 et 10 de la même manière.
  -Enfin, nous mettons à jour l'état numbers en combinant newNumbers et le numéro bonus à l'aide de l'opérateur de propagation (...).
  *****
    const generateLuckyNumbers = () => {
    const newNumbers = [];

    while (newNumbers.length < 6) {
      const randomNumber = Math.floor(Math.random() * 49) + 1;
      if (!newNumbers.includes(randomNumber)) {
        newNumbers.push(randomNumber);
      }
    }

    const bonusNumber = Math.floor(Math.random() * 10) + 1;

    setNumbers([...newNumbers, bonusNumber]);
  };
-Nous définissons la fonction resetNumbers qui sera appelée lorsque vous cliquez sur le bouton "Reset".
-Cette fonction réinitialise l'état numbers en le définissant comme un tableau vide.
****
  const resetNumbers = () => {
    setNumbers([]);
  };
-Nous retournons le JSX (structure HTML-like) qui sera rendu dans le navigateur.
-Le contenu est enveloppé dans une balise <div>.
-Nous avons un titre <h1> pour "Lotto 6/49" et un sous-titre <h3> pour "Generating lucky numbers".
-En utilisant la condition {numbers.length > 0 && ...}, nous vérifions si des numéros de chance ont été générés. Si c'est le cas, nous rendons l'élément <h2> "Lucky Numbers" pour afficher un titre.
-Ensuite, nous rendons les numéros de chance générés sous forme de cercles. Nous utilisons la méthode map sur le tableau numbers pour itérer sur chaque élément et les afficher dans des <span> avec la classe number-circle. Le dernier élément reçoit également la classe bonus-number.
-Nous ajoutons une classe button-space à un <div> pour créer un espace entre les boutons "Reset" et "Show me lucky numbers".
-Les deux boutons sont rendus avec les événements onClick correspondants pour appeler les fonctions resetNumbers et generateLuckyNumbers respectivement.
C'est ainsi que le code du composant LuckyNumbers fonctionne. Il génère des numéros de chance uniques entre 1 et 49, ainsi qu'un numéro bonus entre 1 et 10. Vous pouvez les afficher, les réinitialiser et générer de nouveaux numéros en cliquant sur les boutons appropriés.
****************
  return (
    <div>
      <h1>Lotto 6/49</h1>
      <h3>Generating lucky numbers</h3>
      {numbers.length > 0 && (
        <h2>Lucky Numbers</h2>
      )}
      {numbers.length > 0 && (
        <div>
          <div className="number-container">
            {numbers.map((number, index) => (
              <span
                key={index}
                className={`number-circle ${
                  index === numbers.length - 1 ? "bonus-number" : ""
                }`}
              >
                {number}
              </span>
            ))}
          </div>
        </div>
      )}
      <br />
      <div className="button-space">
        <button onClick={resetNumbers}>Reset</button>
        <button onClick={generateLuckyNumbers}>Show me lucky numbers</button>
      </div>
    </div>
  );
}

*/
