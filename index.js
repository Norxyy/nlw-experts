const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a saída do seguinte código: console.log(2 + '2' - 1);",
      respostas: [
        "22",
        "3",
        "21"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'parseInt' em JavaScript?",
      respostas: [
        "Arredonda um número para o inteiro mais próximo.",
        "Analisa uma string e retorna um número inteiro.",
        "Converte um número inteiro para uma string."
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de comparação estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!="
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'push()' faz em um array JavaScript?",
      respostas: [
        "Remove o último elemento do array.",
        "Adiciona um elemento ao final do array.",
        "Inverte a ordem dos elementos do array."
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a saída do seguinte código: console.log(typeof null);",
      respostas: [
        "null",
        "undefined",
        "object"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Determina se um valor é nulo.",
        "Retorna o tipo de uma variável ou expressão.",
        "Verifica se uma variável está definida."
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'charAt()' faz em uma string JavaScript?",
      respostas: [
        "Converte a string para letras maiúsculas.",
        "Retorna o caractere em uma posição específica da string.",
        "Remove espaços em branco do início e do fim da string."
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão: 10 % 3?",
      respostas: [
        "0",
        "1",
        "2"
      ],
      correta: 2
    },
    {
      pergunta: "O que a função 'parseInt' retorna se a string de entrada não for um número?",
      respostas: [
        "null",
        "undefined",
        "NaN"
      ],
      correta: 2
    }
  ];
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
