const perguntas = [
  {
    pergunta: "Por que o Murilo é um parceiro confiável para a Sophia?",
    respostas: [
      "Ele é engraçado e divertido.",
      "Ele sempre vai obedecer ela.",
      "Ele tem um carro esportivo."
    ],
    correta: 1
  },
  {
    pergunta: "O que o Murilo faz para tornar os dias de Sophia mais felizes?",
    respostas: [
      "Ele lhe dá presentes caros.",
      "Ele envia mensagens de texto o tempo todo e sempre joga Roblox com ela.",
      "Ele faz coisas especiais para fazê-la sorrir e sentir-se amada."
    ],
    correta: 1
  },
  {
    pergunta: "Por que o Murilo é um bom companheiro para Sophia?",
    respostas: [
      "Ele sempre escolhe os restaurantes mais caros.",
      "Ele a trata com respeito e consideração.",
      "Ele gosta de ficar em casa o tempo todo."
    ],
    correta: 1
  },
  {
     pergunta: "Por que o Murilo é a melhor escolha para a Sophia?",
    respostas: [
      "Porque ele não se importa com ela",
      "Porque ele é muito egocêntrico",
      "Porque ele faz tudo que ele pede, e joga Roblox"
    ],
    correta: 2
  },
  {
    pergunta: "Quais viadagem Murilo faria pela Sophia?",
    respostas: [
      "ele sempre mente",
      "ele nunca cumpre suas promessas",
      "ele usaria metadinha no discord e no tiktok, criaria um fã club so pra ela, usaria roupa combinando no roblox e viraria corinthiano por ela."
    ],
    correta: 2
  },
  {
    pergunta: "O que Murilo faz para mostrar seu amor por Sophia?",
    respostas: [
      "Ele sempre esquece as datas importantes.",
      "Ele joga roblox com Sophia, e faz tudo que ela pedir.",
      "Ele nunca diz 'eu te amo'."
    ],
    correta: 1
  },
  {
    pergunta: "Por que Sophia gosta de passar tempo com Murilo?",
    respostas: [
      "Ele passa o tempo todo jogando Roblox com ela e faz o que ela pedir.",
      "Ele a faz rir e se diverte com ela.",
      "Ele só quer conversar sobre coisas sérias."
    ],
    correta: 0
  },
  {
    pergunta: "O que Murilo faria por Sophia?",
    respostas: [
      "ignora seus problemas.",
      "Ele bloquearia qualquer pessoas que ela pedisse, ele remove todas mulheres das redes sociais deixando so ela, colocaria bio nas redes sociais e faria videos fofos para ela no tiktok.",
      "nunca a elogia ou a apoia."
    ],
    correta: 1
  },
  {
    pergunta: "Por que Sophia deve namorar Murilo?",
    respostas: [
      "Ele sempre põe suas necessidades em primeiro lugar.",
      "Ele ama ela a todo custo mesmo depois de ter sido trocado por um Sulista.",
      "Ele nunca tem tempo para ela."
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a razão pela qual Sophia deve escolher Murilo como seu parceiro?",
    respostas: [
      "Ele tem muitas qualidades que ela não gosta.",
      "Ele é compatível com ela em interesses e valores, e a faz feliz.",
      "Ele é popular entre seus amigos."
    ],
    correta: 1
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