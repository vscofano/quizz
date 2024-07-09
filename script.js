//formulario 1
document.addEventListener('DOMContentLoaded', (event) => {
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const idadeInput = document.getElementById('idade');
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const continuarBtn = document.getElementById('continuarBtn');
    const formContainer = document.getElementById('formContainer');
    const informacao_form = document.getElementById('info')
    //multipla escolha
    const mcqContainer = document.getElementById('multiple-choice-container');
    const mcqLabel = document.getElementById('mcq-label');
    const titlulo_pergunta = document.getElementById('titulo-pergunta');
    const pergunta_atual = document.getElementById('place')
    const mcqOptions = document.getElementById('mcq-options');
    const mcqContinuarBtn = document.getElementById('mcq-continuar');
    const continueButton = document.getElementById('continue-button');


    const temas = [
        {
            nome: 'Sono e Descanso',
            perguntas: [
                {
                    titulo:'Avaliação do sono',
                    tamanho: 'Pergunta 1/5 : ',
                    texto: ' Qual é a qualidade do seu sono?',
                    opcoes: ['ruim', 'regular', 'bom', 'ótimo'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    titulo:'Avaliação do sono',
                    tamanho:'Pergunta 2/5 :',
                    texto: 'Você acorda cansado?',
                    opcoes: ['muito', 'pouco', 'regular', 'excelente'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    titulo:'Avaliação do sono',
                    tamanho:'Pergunta 3/5 :',
                    texto: 'Você acorda cansado?',
                    opcoes: ['muito', 'pouco', 'regular', 'excelente'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [1, 2, 3, 4]
                },
                {
                    titulo:'Avaliação do sono',
                    tamanho:'Pergunta 4/5 :',
                    texto: 'Ao acordar, tem dificuldade em realizar tarefas cotidianas?',
                    opcoes: ['muita', 'pouco', 'regular', 'nem uma'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    titulo:'Avaliação do sono',
                    tamanho:'Pergunta 5/5 :',
                    texto: 'Usa remédios para dormir?',
                    opcoes: ['não uso', 'uso 1', 'uso 2', 'uso 2 ou mais'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [1, 2, 3, 4]
                }
            ]
        },
        {
            nome: 'Energia e Disposição',
            perguntas: [
                {
                    titulo:'Avaliação de Energia/disposição',
                    tamanho:'Pergunta 1/6 :',
                    texto: 'Durante a manhã você se sente cansado?',
                    opcoes: ['muito', 'pouco', 'regular', 'excelente'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    titulo:'Avaliação de Energia/disposição',
                    tamanho:'Pergunta 2/6 :',
                    texto: 'Durante a manhã, tem dificuldade em realizar tarefas cotidianas',
                    opcoes: ['muita pouca', 'pouca', 'regular', 'nem uma'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    titulo:'Avaliação de Energia/disposição',
                    tamanho:'Pergunta 3/6 :',
                    texto: 'Durante a noite você se sente cansado?',
                    opcoes: ['muito', 'pouco', 'regular', 'excelente'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    titulo:'Avaliação de Energia/disposição',
                    tamanho:'Pergunta 4/6 :',
                    texto: 'Durante a noite, tem dificuldade em realizar tarefas cotidianas?',
                    opcoes: ['muita', 'pouca', 'regular', 'nem uma'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    titulo:'Avaliação de Energia/disposição',
                    tamanho:'Pergunta 5/6 :',
                    texto: 'Durante a noite tarde você se sente cansado?',
                    opcoes: ['muito', 'pouco', 'regular', 'excelente'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    titulo:'Avaliação de Energia/disposição',
                    tamanho:'Pergunta 6/6 :',
                    texto: 'Durante a noite, tem dificuldade em realizar tarefas cotidianas?',
                    opcoes: ['muita', 'pouca', 'regular', 'nem uma'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
            ]
        },
        {
            nome: 'Suplemento para Memória',
            perguntas: [
                {
                    titulo:'Avaliação da Memóra',
                    tamanho:'Pergunta 1/2 :',
                    texto: 'Como está sua memória?',
                    opcoes: ['ruim', 'regular', 'boa', 'excelente'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    titulo:'Avaliação da Memóra',
                    tamanho:'Pergunta 2/2 :',
                    texto: 'Como está sua concentração',
                    opcoes: ['ruim', 'regular', 'boa', 'excelente'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                }
            ]
        },
        {
            nome: 'Tratamento para Estresse',
            perguntas: [
                {
                    titulo:'Avaliação do Estresse',
                    tamanho:'Pergunta 1/11 :',
                    texto: 'Com que frequência você ficou aborrecido por causa de algo que aconteceu inesperadamente?',
                    opcoes: ['muito frequente', 'às vezes', 'quase nunca', 'nunca'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    titulo:'Avaliação do Estresse',
                    tamanho:'Pergunta 2/11 :',
                    texto: 'Com que frequência você sentiu que foi incapaz de controlar coisas importantes na sua vida',
                    opcoes: ['muito frequente', 'às vezes', 'quase nunca', 'nunca'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    titulo:'Avaliação do Estresse',
                    tamanho:'Pergunta 3/11 :',
                    texto: 'Com que frequência você esteve nervoso ou estressado?',
                    opcoes: ['muito frequente', 'às vezes', 'quase nunca', 'nunca'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    titulo:'Avaliação do Estresse',
                    tamanho:'Pergunta  4/11:',
                    texto: 'Com que frequência você esteve confiante em sua capacidade de lidar com seus problemas pessoais?',
                    opcoes: ['muito frequente', 'às vezes', 'quase nunca', 'nunca'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    titulo:'Avaliação do Estresse',
                    tamanho:'Pergunta 5/11 :',
                    texto: ' Com que freqüência você sentiu que as coisas aconteceram da maneira que você esperava?',
                    opcoes: ['muito frequente', 'às vezes', 'quase nunca', 'nunca'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    titulo:'Avaliação do Estresse',
                    tamanho:'Pergunta 6/11 :',
                    texto: 'Com que freqüência você achou que não conseguiria lidar com todas as coisas que tinha por fazer?',
                    opcoes: ['muito frequente', 'às vezes', 'quase nunca', 'nunca'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    titulo:'Avaliação do Estresse',
                    tamanho:'Pergunta  7/11:',
                    texto: 'Com que freqüência você foi capaz de controlar irritações na sua vida?',
                    opcoes: ['muito frequente', 'às vezes', 'quase nunca', 'nunca'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    titulo:'Avaliação do Estresse',
                    tamanho:'Pergunta 8/11 :',
                    texto: 'Com que freqüência você sentiu que todos os aspectos de sua vida estavam sob controle?',
                    opcoes: ['muito frequente', 'às vezes', 'quase nunca', 'nunca'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    titulo:'Avaliação do Estresse',
                    tamanho:'Pergunta 9/11 :',
                    texto: 'Com que freqüência você esteve bravo por causa de coisas que estiveram fora de seu controle?',
                    opcoes: ['muito frequente', 'às vezes', 'quase nunca', 'nunca'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    titulo:'Avaliação do Estresse',
                    tamanho:'Pergunta 10/11 :',
                    texto: 'Com que freqüência você sentiu que os problemas acumularam tanto que você não conseguiria resolvê-los?',
                    opcoes: ['muito frequente', 'às vezes', 'quase nunca', 'nunca'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    titulo:'Avaliação do Estresse',
                    tamanho:'Pergunta 11/11 :',
                    texto: 'Selecione, se existir, o sintoma que mais te incomoda:',
                    opcoes: ['nausea, perda de peso', 'dor abdominal', 'queda de pressão sem motivo', 'alteração de humor','depressão','ansiedade','Nem um'],
                    icons: ['fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired','fa-smile'],
                    pontuacao: [2, 2, 2, 2, 3, 3, 3,0]
                },
                
            ]
        },
        {
            nome: 'Tratamento de Tireoide',
            perguntas: [
                {
                    titulo:'Avaliação da Tireoide',
                    tamanho:'Pergunta 1/1 :',
                    texto: 'Selecione, se existir, o sintoma que mais te incomoda:',
                    opcoes: ['Ganha peso fácil', 'Sente mais frio que o normal', 'Prisão de ventre', 'Pele ressecada', 'Dificuldade para perder peso','Colesterol Alto', 'Queda de Cabelo','Unhas fracas','Dores','Rigidez nos musculos','Retenção de Liquido','Problemas de Memória','Depressão','Fadiga','Ansiedade','Cansaço','Nem um'],
                    icons: ['fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-smile'],
                    pontuacao: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0] // Pontuação zero para "Não tenho nenhum desses sintomas"
                }
            ]
        },
        {
            nome: 'Ansiedade e Depressão',
            perguntas: [
                {
                    titulo:'Avaliação da Ansiedade/Depressão',
                    tamanho:'Pergunta 1/4 :',
                    texto: 'Qual o nível da sua ansiedade?',
                    opcoes: ['Demais', 'Muito','Media', 'Pouco', 'Nada'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile','fa-smile'],
                    pontuacao: [4, 3, 2, 1, 0]
                },
                {
                    titulo:'Avaliação da Ansiedade/Depressão',
                    tamanho:'Pergunta 2/4 :',
                    texto: 'Qual o nível da sua depressão?',
                    opcoes: ['Demais', 'Muito','Media', 'Pouco', 'Nada'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile','fa-smile'],
                    pontuacao: [4, 3, 2, 1, 0]
                },
                {
                    titulo:'Avaliação da Ansiedade/Depressão',
                    tamanho:'Pergunta 3/4 :',
                    texto: 'Você é uma pessoa preocupada?',
                    opcoes: ['Demais', 'Muito','Media', 'Pouco', 'Nada'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile','fa-smile'],
                    pontuacao: [4, 3, 2, 1, 0]
                },
                {
                    titulo:'Avaliação da Ansiedade/Depressão',
                    tamanho:'Pergunta 4/4 :',
                    texto: 'Usa algum remédio controlado?',
                    opcoes: ['dois ou mais', 'dois','um', 'nem um'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 0]
                }
               
            ]
        },
        {
            nome: 'Patologias e Articulações',
            perguntas: [
                {
                    titulo:'Avaliação das Patologias',
                    tamanho:'Pergunta 1/1 :',
                    texto: 'Selecione a patologia que você possui além da fibromialgia:',
                    opcoes: ['Tendinite', 'Hernia de Disco', 'Artrite/Artrose', 'Epicondilite', 'Fascite', 'Dor na coluna','Lupus','Artrite Reumatoide','Sacroileite','Bursite','Nem uma das opções'],
                    icons: ['fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-tired', 'fa-smile'],
                    pontuacao: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0] // Pontuação zero para "Não tenho nenhum desses sintomas"
                }
            ]
        },
        {
            nome: 'Intestino e Digestão',
            perguntas: [
                {
                    titulo:'Avaliação do intestino',
                    tamanho:'Pergunta 1/8 :',
                    texto: 'Como está o funcionamento do seu intestino?',
                    opcoes: ['muito preso', 'preso','solto', 'lento', 'normal'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile','fa-smile'],
                    pontuacao: [4, 3, 2, 1, 0]
                },
                {
                    titulo:'Avaliação do intestino',
                    tamanho:'Pergunta 2/8 :',
                    texto: 'Você tem gases/cólicas?',
                    opcoes: ['Demais', 'Muito','Media', 'Pouco', 'Nada'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile','fa-smile'],
                    pontuacao: [4, 3, 2, 1, 0]
                },
                {
                    titulo:'Avaliação do intestino',
                    tamanho:'Pergunta 3/8 :',
                    texto: 'Após evacuar, você sente que não esvaziou completamentes?',
                    opcoes: ['Sim', 'Mais ou Menos','Não'],
                    icons: ['fa-tired', 'fa-frown', 'fa-smile'],
                    pontuacao: [0, 2, 4 ]
                },
                {
                    titulo:'Avaliação do intestino',
                    tamanho:'Pergunta 4/8 :',
                    texto: 'Você tem diarréia que persiste por 4 ou mais semanas?',
                    opcoes: ['Sim', 'Não'],
                    icons: ['fa-tired','fa-smile'],
                    pontuacao: [4, 0]
                },
                {
                    titulo:'Avaliação do intestino',
                    tamanho:'Pergunta 5/8 :',
                    texto: 'Você tem fadiga mesmo após uma ótima noite de sono?',
                    opcoes: ['Demais', 'Muito','Media', 'Pouco', 'Nada'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile', 'fa-smile','fa-smile'],
                    pontuacao: [4, 3, 2, 1, 0]
                },
                {
                    titulo:'Avaliação do intestino',
                    tamanho:'Pergunta 6/8 :',
                    texto: 'Você fica doente constantemente?',
                    opcoes: ['Demais', 'Muito','Media', 'Pouco', 'Nada'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1, 0]
                },
                {
                    titulo:'Avaliação do intestino',
                    tamanho:'Pergunta 7/8 :',
                    texto: 'Você percebeu alterações no seu humor por um longo período de tempo? (TRISTEZ,DEPRESSÃO...)',
                    opcoes: ['Demais', 'Muito','Media', 'Pouco', 'Nada'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1, 0]
                },
                {
                    titulo:'Avaliação do intestino',
                    tamanho:'Pergunta 8/8 :',
                    texto: ' Selecione o sintoma que persiste por 4 ou mais semanas',
                    opcoes: ['Dor abdominal', 'inchaço','Gases', 'Constipação', 'Nem um'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile', 'fa-smile'],
                    pontuacao: [4, 4, 4, 4, 0]
                },
               
            ]
        },

    ];


    //multipla escolha
    let temaAtual = 0;
    let subPerguntaAtual = 0;
    const pontuacoes = {};

    function atualizarBarraDeProgresso() {
    const totalPerguntas = temas.reduce((total, tema) => total + tema.perguntas.length, 0);
    const perguntasRespondidas = temas.slice(0, temaAtual).reduce((total, tema) => total + tema.perguntas.length, 0) + subPerguntaAtual + 1;
    const progresso = (perguntasRespondidas / totalPerguntas) * 100;
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${progresso}%`;
    progressBar.textContent = `${Math.round(progresso)}%`;
    const progressTitle = document.getElementById('progress-title');
    progressTitle.textContent = 'Progresso do Questionário';
}

function mostrarProximaPerguntaMultiplaEscolha() {
    const tema = temas[temaAtual];
    const subPergunta = tema.perguntas[subPerguntaAtual];
    
    const container = document.getElementById('multiple-choice-container'); // Supondo que este seja o container das perguntas

    // Adicionar a classe fade-out
    container.classList.add('fade-out');

    setTimeout(() => {
        // Atualizar o conteúdo da pergunta
        mcqLabel.textContent = subPergunta.texto;
        titlulo_pergunta.textContent = subPergunta.titulo;
        pergunta_atual.textContent = subPergunta.tamanho;

        mcqOptions.innerHTML = ''; // Limpando a div com innerHTML

        const selectedOptions = new Set(); // Set para rastrear opções selecionadas

        subPergunta.opcoes.forEach((opcao, index) => {
            const btn = document.createElement('button');
            btn.className = 'opcao-btn';
            const icon = document.createElement('i');
            icon.className = `fas ${subPergunta.icons[index]} icon`;

            btn.appendChild(icon);
            btn.appendChild(document.createTextNode(` ${opcao}`));

            btn.addEventListener('click', () => {
                if (subPergunta.titulo === 'Avaliação da Tireoide' || subPergunta.titulo === 'Avaliação das Patologias') {
                    if (selectedOptions.has(index)) {
                        selectedOptions.delete(index);
                        btn.classList.remove('selected');
                    } else {
                        selectedOptions.add(index);
                        btn.classList.add('selected');
                    }

                    // Exibir ou ocultar o botão "Continuar" baseado nas seleções
                    if (selectedOptions.size > 0) {
                        continueButton.style.display = 'block';
                    } else {
                        continueButton.style.display = 'none';
                    }
                } else {
                    // Comportamento padrão para perguntas com única seleção
                    if (!pontuacoes[tema.nome]) {
                        pontuacoes[tema.nome] = 0;
                    }
                    pontuacoes[tema.nome] += subPergunta.pontuacao[index];
                    subPerguntaAtual++;

                    if (subPerguntaAtual < tema.perguntas.length) {
                        mostrarProximaPerguntaMultiplaEscolha();
                    } else {
                        temaAtual++;
                        subPerguntaAtual = 0;
                        if (temaAtual < temas.length) {
                            mostrarProximaPerguntaMultiplaEscolha();
                        } else {
                            const sortedPontuacoes = Object.keys(pontuacoes)
                                .map(tema => ({ tema, pontos: pontuacoes[tema] }))
                                .sort((a, b) => b.pontos - a.pontos);

                            localStorage.setItem('pontuacoes', JSON.stringify(sortedPontuacoes));
                            calcularIMC();
                            window.location.href = 'resultado.html';
                        }
                    }
                }
            });

            mcqOptions.appendChild(btn);
        });

        // Verificar se a pergunta é "Avaliação da Tireoide" para exibir o botão "Continuar"
        if (subPergunta.titulo === 'Avaliação da Tireoide') {
            continueButton.style.display = 'none';
        } else {
            continueButton.style.display = 'none';
        }

        // Remover a classe fade-out e adicionar a classe fade-in
        container.classList.remove('fade-out');
        container.classList.add('fade-in');

        // Remover a classe fade-in após a transição
        setTimeout(() => {
            container.classList.remove('fade-in');
        }, 500);

        atualizarBarraDeProgresso();
    }, 500); // Tempo correspondente ao tempo de transição do fade-out
}

// Event listener para o botão "Continuar"
document.getElementById('continue-button').addEventListener('click', () => {
    const tema = temas[temaAtual];
    const subPergunta = tema.perguntas[subPerguntaAtual];
    const selectedOptions = document.querySelectorAll('.opcao-btn.selected');
    selectedOptions.forEach(option => {
        const index = Array.from(option.parentNode.children).indexOf(option);
        if (!pontuacoes[tema.nome]) {
            pontuacoes[tema.nome] = 0;
        }
        pontuacoes[tema.nome] += subPergunta.pontuacao[index];
    });

    subPerguntaAtual++;

    if (subPerguntaAtual < tema.perguntas.length) {
        mostrarProximaPerguntaMultiplaEscolha();
    } else {
        temaAtual++;
        subPerguntaAtual = 0;
        if (temaAtual < temas.length) {
            mostrarProximaPerguntaMultiplaEscolha();
        } else {
            const sortedPontuacoes = Object.keys(pontuacoes)
                .map(tema => ({ tema, pontos: pontuacoes[tema] }))
                .sort((a, b) => b.pontos - a.pontos);

            localStorage.setItem('pontuacoes', JSON.stringify(sortedPontuacoes));
            calcularIMC();
            window.location.href = 'resultado.html';
        }
    }
});

// Inicialização
mostrarProximaPerguntaMultiplaEscolha();
    
    //calculando imc
    function calcularIMC() {
        const peso = parseInt(pesoInput.value);
        const altura = parseInt(alturaInput.value);
        altura_mtrs = altura / 100;
        const imc = peso / (altura_mtrs * altura_mtrs);
        localStorage.setItem('imc', imc.toFixed(2));
    }

    continuarBtn.addEventListener('click', function() {
        const proguess_bar = document.getElementById('progress-container')
        const proguess_titulo = document.getElementById('progress-title')
        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const idade = idadeInput.value.trim();
        const peso = pesoInput.value.trim();
        const altura = alturaInput.value.trim();

        let errors = [];
        
            // Validação do nome
            if (nome === '') {
                errors.push('Nome não pode estar em branco');
            }

            // Validação do email
            if (email === '') {
                errors.push('Email não pode estar em branco');
            } else {
                // Validação básica de formato de email
                let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    errors.push('Formato de email inválido');
                }
            }

            // Validação da idade
            if (isNaN(idade) || idade < 18 || idade > 100) {
                errors.push('Idade deve estar entre 18 e 100 anos');
            }

            // Validação do peso
            if (isNaN(peso) || peso < 30 || peso > 100) {
                errors.push('Peso deve estar entre 30 e 100 kg');
            }

            // Validação da altura
            if (isNaN(altura) || altura < 100 || altura > 300) {
                errors.push('Altura deve estar entre 100 e 300 cm');
            }

            // Exibir erros, se houver
            if (errors.length > 0) {
                alert(errors.join('\n'));
            } else {
                // Armazenar os valores no localStorage, se não houver erros
                localStorage.setItem('nome', nome);
                localStorage.setItem('email', email);
                localStorage.setItem('idade', idade);
                localStorage.setItem('peso', peso);
                localStorage.setItem('altura', altura);

            formContainer.style.display = 'none';
            proguess_bar.style.display = 'block'
            proguess_titulo.style.display = 'block'
            informacao_form.style.display = 'none';
            mcqContainer.style.display = 'block';
            mostrarProximaPerguntaMultiplaEscolha();
        }
    });
    // Inicia com a primeira pergunta
    atualizarPergunta();
});
// end parte 1 

//pagina de resultado
// Função para verificar se a seção de skills está visível na tela
function isSkillsSectionVisible() {
    const skillsSection = document.getElementById('skills-section');
    const rect = skillsSection.getBoundingClientRect();
    return rect.top - window.innerHeight < 0 && rect.bottom >= 0;
}

// Função para animar a barra de progresso
function animateProgressBar(progressBarId, targetValue,interval) {
    let progress = 0;
    const progressBar = document.getElementById(progressBarId);

    const intervalId = setInterval(() => {
        if (progress >= targetValue) {
            clearInterval(intervalId);
        } else {
            progress++;
            progressBar.style.width = `${progress}%`;
        }
    }, interval); // Intervalo de atualização da animação (em milissegundos)
}
// Função para verificar o scroll e iniciar a animação quando a seção de skills estiver visível
function checkScrollAndAnimate(){
    if (isSkillsSectionVisible()){
        // Chamando a função de animação para cada barra de progresso
            animateProgressBar('skil_1',100,30);
            animateProgressBar('skil_2',90,35); 
            animateProgressBar('skil_3',75,38); 
            animateProgressBar('skil_4',60,40); 
            animateProgressBar('skil_5',50,55); 
            animateProgressBar('skil_6',40,60); 
            animateProgressBar('skil_7',33,40); 
            animateProgressBar('skil_8',25,90); 
            animateProgressBar('skil_9',10,70); 
            window.removeEventListener('scroll', checkScrollAndAnimate); // Remove o evento de scroll após iniciar a animação
    }
}
// Adicionando o evento de scroll para verificar quando a seção de skills está visível
window.addEventListener('scroll', checkScrollAndAnimate);
//End Barra de Proguesso

