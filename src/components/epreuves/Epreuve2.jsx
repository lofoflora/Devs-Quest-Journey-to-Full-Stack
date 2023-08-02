import React, { useState } from 'react';
import Question from '../Question';

const Epreuve2 = ({ onAnswer }) => {
    const questions = [
        {
            text: 'Quelle est la différence entre "let", "const" et "var" pour déclarer des variables en JavaScript ?',
            options: [
              'let et const sont utilisés pour déclarer des variables avec une portée de bloc, tandis que var a une portée de fonction.',
              'const est utilisé pour déclarer des variables dont la valeur ne peut pas être modifiée, tandis que let et var permettent de modifier la valeur de la variable.',
              'let et const sont des mots-clés obsolètes en JavaScript et doivent être évités.',
              'var est utilisé pour déclarer des variables avec une portée de bloc, tandis que let a une portée de fonction.'
            ],
            correctOption: 'let et const sont utilisés pour déclarer des variables avec une portée de bloc, tandis que var a une portée de fonction.'
          },
          {
            text: 'Quelle méthode est utilisée pour envoyer une requête GET dans l\'API Fetch en JavaScript ?',
            options: [
              'fetch.get(url)',
              'fetch(url, {method: "GET"})',
              'fetch(url).method("GET")',
              'fetch.method("GET", url)'
            ],
            correctOption: 'fetch(url, {method: "GET"})'
          },
          {
            text: 'Quelle méthode est utilisée pour ajouter un nouvel élément à la fin d\'un tableau en JavaScript ?',
            options: [
              'array.push(newElement)',
              'array.add(newElement)',
              'array.insert(newElement)',
              'array.append(newElement)'
            ],
            correctOption: 'array.push(newElement)'
          },
          {
            text: 'Quelle est la fonction utilisée pour se connecter à une base de données MySQL en PHP ?',
            options: [
              'connect_db()',
              'mysqli_connect()',
              'pdo_connect()',
              'mysql_connect()'
            ],
            correctOption: 'mysqli_connect()'
          },
          {
            text: 'Comment déclarer une variable en PHP ?',
            options: [
              '$variable',
              'variable = valeur',
              'variable(valeur)',
              'var variable'
            ],
            correctOption: '$variable'
          },
          {
            text: 'Quelle est la méthode utilisée pour supprimer un élément spécifique d\'un tableau en PHP ?',
            options: [
              'array_delete(element)',
              'array_remove(element)',
              'array_splice(element)',
              'unset(array[element])'
            ],
            correctOption: 'unset(array[element])'
          },
          {
            text: 'Quelle est la différence entre "==" et "===" en JavaScript pour comparer des valeurs ?',
            options: [
              '"==" compare les valeurs sans vérifier le type, tandis que "===" compare les valeurs et le type de données.',
              '"===" compare les valeurs sans vérifier le type, tandis que "==" compare les valeurs et le type de données.',
              '"==" est utilisé pour comparer les chaînes de caractères, tandis que "===" est utilisé pour comparer les nombres.',
              '"===" est utilisé pour comparer les chaînes de caractères, tandis que "==" est utilisé pour comparer les nombres.'
            ],
            correctOption: '"==" compare les valeurs sans vérifier le type, tandis que "===" compare les valeurs et le type de données.'
          },
          {
            text: 'Quelle est la méthode utilisée pour inverser l\'ordre des éléments d\'un tableau en JavaScript ?',
            options: [
              'array.reverse()',
              'array.invert()',
              'array.flip()',
              'array.switch()'
            ],
            correctOption: 'array.reverse()'
          },
          {
            text: 'Comment afficher du texte "Hello World" en PHP ?',
            options: [
              'print "Hello World";',
              'echo "Hello World";',
              'console.log("Hello World");',
              'printf("Hello World");'
            ],
            correctOption: 'echo "Hello World";'
          },
          {
            text: 'Quelle méthode est utilisée pour envoyer des données à un serveur en utilisant AJAX en JavaScript ?',
            options: [
              'fetch(url)',
              'axios.get(url)',
              'sendRequest(url)',
              'xmlhttprequest.open("POST", url)'
            ],
            correctOption: 'xmlhttprequest.open("POST", url)'
          },
      ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correctOption;
    onAnswer(isCorrect);

    // Passer à la question suivante
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h3>{currentQuestion.text}</h3>
      <Question
        question={currentQuestion}
        options={currentQuestion.options}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Epreuve2;
