//formulario 1
document.addEventListener('DOMContentLoaded', (event) => {
    const formContainer = document.getElementById('form-container');
    const formLabel = document.getElementById('form-label');
    const userInput = document.getElementById('user-input');
    const continuarBtn = document.getElementById('continuar');
    //multipla escolha
    const mcqContainer = document.getElementById('multiple-choice-container');
    const mcqLabel = document.getElementById('mcq-label');
    const mcqOptions = document.getElementById('mcq-options');
    const mcqContinuarBtn = document.getElementById('mcq-continuar');
    const resultadoDiv = document.getElementById('resultado');
    
    const perguntas = [
        'Qual é o seu nome?',
        'Qual é a sua idade?',
        'Qual é o seu peso?',
        'Qual é a sua altura?',
        'Digite seu e-mail: ',
        'Insira seu cpf para acompanharmos sua evolução'
    ];

    const temas = [
        {
            nome: 'Sono e Descanso',
            perguntas: [
                {
                    texto: '[Avaliação do sono 1/5] Qual é a qualidade do seu sono?',
                    opcoes: ['ruim', 'regular', 'bom', 'ótimo'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    texto: '[Avaliação do sono 2/5] Você acorda cansado?',
                    opcoes: ['muito', 'pouco', 'regular', 'excelente'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    texto: '[Avaliação do sono 3/5] Você acorda cansado?',
                    opcoes: ['muito', 'pouco', 'regular', 'excelente'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [1, 2, 3, 4]
                },
                {
                    texto: '[Avaliação do sono 4/5] Ao acordar, tem dificuldade em realizar tarefas cotidianas?',
                    opcoes: ['muita', 'pouco', 'regular', 'nem uma'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    texto: '[Avaliação do sono 5/5] Usa remédios para dormir?',
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
                    texto: '[Avaliação de Energia/disposição 1/6] Durante a manhã você se sente cansado?',
                    opcoes: ['muito', 'pouco', 'regular', 'excelente'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    texto: '[Avaliação de Energia/disposição 2/6] Durante a manhã, tem dificuldade em realizar tarefas cotidianas',
                    opcoes: ['muita pouca', 'pouca', 'regular', 'nem uma'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    texto: '[Avaliação de Energia/disposição 3/6] Durante a noite você se sente cansado?',
                    opcoes: ['muito', 'pouco', 'regular', 'excelente'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    texto: '[Avaliação de Energia/disposição 4/6] Durante a noite, tem dificuldade em realizar tarefas cotidianas?',
                    opcoes: ['muita', 'pouca', 'regular', 'nem uma'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    texto: '[Avaliação de Energia/disposição 5/6] Durante a noite tarde você se sente cansado?',
                    opcoes: ['muito', 'pouco', 'regular', 'excelente'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    texto: '[Avaliação de Energia/disposição 6/6] Durante a noite, tem dificuldade em realizar tarefas cotidianas?',
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
                    texto: '[Avaliação da Memóra 1/2] Como está sua memória?',
                    opcoes: ['ruim', 'regular', 'boa', 'excelente'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    texto: '[Avaliação da Memóra 2/2] Como está sua concentração',
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
                    texto: '[Avaliação do Estresse 1/11] Com que frequência você ficou aborrecido por causa de algo que aconteceu inesperadamente?',
                    opcoes: ['muito frequente', 'às vezes', 'quase nunca', 'nunca'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    texto: '[Avaliação do Estresse 2/11] Com que frequência você sentiu que foi incapaz de controlar coisas importantes na sua vida',
                    opcoes: ['muito frequente', 'às vezes', 'quase nunca', 'nunca'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    texto: '[Avaliação do Estresse 3/11] Com que frequência você esteve nervoso ou estressado?',
                    opcoes: ['muito frequente', 'às vezes', 'quase nunca', 'nunca'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    texto: '[Avaliação do Estresse 4/11] Com que frequência você esteve confiante em sua capacidade de lidar com seus problemas pessoais?',
                    opcoes: ['muito frequente', 'às vezes', 'quase nunca', 'nunca'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    texto: '[Avaliação do Estresse 5/11] Com que freqüência você sentiu que as coisas aconteceram da maneira que você esperava?',
                    opcoes: ['muito frequente', 'às vezes', 'quase nunca', 'nunca'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    texto: '[Avaliação do Estresse 6/11] Com que freqüência você achou que não conseguiria lidar com todas as coisas que tinha por fazer?',
                    opcoes: ['muito frequente', 'às vezes', 'quase nunca', 'nunca'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    texto: '[Avaliação do Estresse 7/11] Com que freqüência você foi capaz de controlar irritações na sua vida?',
                    opcoes: ['muito frequente', 'às vezes', 'quase nunca', 'nunca'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    texto: '[Avaliação do Estresse 8/11] Com que freqüência você sentiu que todos os aspectos de sua vida estavam sob controle?',
                    opcoes: ['muito frequente', 'às vezes', 'quase nunca', 'nunca'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    texto: '[Avaliação do Estresse 9/11] Com que freqüência você esteve bravo por causa de coisas que estiveram fora de seu controle?',
                    opcoes: ['muito frequente', 'às vezes', 'quase nunca', 'nunca'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    texto: '[Avaliação do Estresse 10/11] Com que freqüência você sentiu que os problemas acumularam tanto que você não conseguiria resolvê-los?',
                    opcoes: ['muito frequente', 'às vezes', 'quase nunca', 'nunca'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1]
                },
                {
                    texto: '[Avaliação do Estresse 11/11] Selecione, se existir, o sintoma que mais te incomoda',
                    opcoes: ['nausea, perda de peso', 'dor abdominal', 'queda de pressão sem motivo', 'alteração de humor','depressão','ansiedade'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile', 'fa-smile', 'fa-smile', 'fa-smile'],
                    pontuacao: [1, 1, 1, 1, 2, 3, 3]
                },
                
            ]
        },
        {
            nome: 'Tratamento de Tireoide',
            perguntas: [
                {
                    texto: '[Avaliação da Tireoide 1/1] Selecione  o sintomas  que você possui:',
                    opcoes: ['Ganha peso fácil', 'Sente mais frio que o normal', 'Prisão de ventre', 'Pele ressecada', 'Dificuldade para perder peso','Colesterol Alto', 'Queda de Cabelo','Unhas fracas','Dores','Rigidez nos musculos','Retenção de Liquido','Problemas de Memória','Depressão','Fadiga','Ansiedade','Cansaço'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile', 'fa-smile', 'fa-smile', 'fa-smile', 'fa-smile', 'fa-smile', 'fa-smile', 'fa-smile', 'fa-smile', 'fa-smile', 'fa-smile', 'fa-smile', 'fa-smile', 'fa-smile'],
                    pontuacao: [3, 3, 3, 3, 3, 4, 4, 2, 1, 2, 2, 2, 2, 4, 1, 4, 0] // Pontuação zero para "Não tenho nenhum desses sintomas"
                }
            ]
        },
        {
            nome: 'Ansiedade e Depressão',
            perguntas: [
                {
                    texto: '[Avaliação da Ansiedade/Depressão 1/4] Qual o nível da sua ansiedade?',
                    opcoes: ['Demais', 'Muito','Media', 'Pouco', 'Nada'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1, 0]
                },
                {
                    texto: '[Avaliação da Ansiedade/Depressão 2/4]Qual o nível da sua depressão?',
                    opcoes: ['Demais', 'Muito','Media', 'Pouco', 'Nada'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1, 0]
                },
                {
                    texto: '[Avaliação da Ansiedade/Depressão 3/4]Você é uma pessoa preocupada?',
                    opcoes: ['Demais', 'Muito','Media', 'Pouco', 'Nada'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1, 0]
                },
                {
                    texto: '[Avaliação da Ansiedade/Depressão 4/4]Usa algum remédio controlado?',
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
                    texto: '[Avaliação das Patologias 1/1] Selecione a(s) patologia(s) que você possui além da fibromialgia:',
                    opcoes: ['Tendinite', 'Hernia de Disco', 'Artrite/Artrose', 'Epicondilite', 'Fascite', 'Dor na coluna','Lupus','Artrite Reumatoide','Sacroileite','Bursite','Nem uma das opções'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile', 'fa-smile', 'fa-smile', 'fa-smile', 'fa-smile', 'fa-smile', 'fa-smile', 'fa-smile', 'fa-smile'],
                    pontuacao: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0] // Pontuação zero para "Não tenho nenhum desses sintomas"
                }
            ]
        },
        {
            nome: 'Intestino e Digestão',
            perguntas: [
                {
                    texto: '[Avaliação do intestino 1/8] Como está o funcionamento do seu intestino?',
                    opcoes: ['muito preso', 'preso','solto', 'lento', 'normal'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1, 0]
                },
                {
                    texto: '[Avaliação do intestino 2/8] Você tem gases/cólicas?',
                    opcoes: ['Demais', 'Muito','Media', 'Pouco', 'Nada'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1, 0]
                },
                {
                    texto: '[Avaliação do intestino 3/8] Após evacuar, você sente que não esvaziou completamentes?',
                    opcoes: ['Sim', 'Mais ou Menos','Não'],
                    icons: ['fa-tired', 'fa-frown', 'fa-smile'],
                    pontuacao: [0, 2, 4 ]
                },
                {
                    texto: '[Avaliação do intestino 4/8] Você tem diarréia que persiste por 4 ou mais semanas?',
                    opcoes: ['Sim', 'Não'],
                    icons: ['fa-tired','fa-smile'],
                    pontuacao: [4, 0]
                },
                {
                    texto: '[Avaliação do intestino 5/8] Você tem fadiga mesmo após uma ótima noite de sono?',
                    opcoes: ['Demais', 'Muito','Media', 'Pouco', 'Nada'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1, 0]
                },
                {
                    texto: '[Avaliação do intestino 6/8] Você fica doente constantemente?',
                    opcoes: ['Demais', 'Muito','Media', 'Pouco', 'Nada'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1, 0]
                },
                {
                    texto: '[Avaliação do intestino 7/8] Você percebeu alterações no seu humor por um longo período de tempo? (TRISTEZ,DEPRESSÃO...)',
                    opcoes: ['Demais', 'Muito','Media', 'Pouco', 'Nada'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile', 'fa-smile'],
                    pontuacao: [4, 3, 2, 1, 0]
                },
                {
                    texto: '[Avaliação do intestino 8/8] Selecione o sintoma que persiste por 4 ou mais semanas',
                    opcoes: ['Dor abdominal', 'inchaço','Gases', 'Constipação', 'Nem um'],
                    icons: ['fa-tired', 'fa-frown', 'fa-meh', 'fa-smile', 'fa-smile'],
                    pontuacao: [4, 4, 4, 4, 0]
                },
               
            ]
        },

    ];

    const respostas = {};
    let perguntaAtual = 0;
    //multipla escolha
    let temaAtual = 0;
    let subPerguntaAtual = 0;
    const pontuacoes = {};

    function atualizarPergunta() {
        formLabel.textContent = perguntas[perguntaAtual];
        userInput.value = '';
        userInput.type = perguntaAtual === 1 ? 'number' : 'text'; // Tipo de input para idade
        userInput.type = perguntaAtual === 2 || perguntaAtual === 3 ? 'number' : 'text'; // Tipo de input para peso e altura
    }

    function mostrarProximaPerguntaMultiplaEscolha() {
        const tema = temas[temaAtual];
        const subPergunta = tema.perguntas[subPerguntaAtual];
        
        mcqLabel.textContent = subPergunta.texto;
        mcqOptions.innerHTML = '';
        
        subPergunta.opcoes.forEach((opcao, index) => {
            const btn = document.createElement('button');
            btn.className = 'opcao-btn'; // Adiciona a classe ao botão
            const icon = document.createElement('i');
            icon.className = `fas ${subPergunta.icons[index]} icon`; // Adiciona a classe ao ícone
    
            btn.appendChild(icon);
            btn.appendChild(document.createTextNode(` ${opcao}`)); // Adiciona um espaço entre o ícone e o texto
    
            btn.addEventListener('click', () => {
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
                        window.location.href = 'resultado.html';
                    }
                }
            });
            mcqOptions.appendChild(btn);
        });
    }

    continuarBtn.addEventListener('click', () => {
        const resposta = userInput.value.trim();
        if (resposta) {
            respostas[perguntas[perguntaAtual]] = resposta;
            perguntaAtual++;

            if (perguntaAtual < perguntas.length) {
                atualizarPergunta();
            } else {
                formContainer.style.display = 'none';
                mcqContainer.style.display = 'block';
                mostrarProximaPerguntaMultiplaEscolha()
                // Aqui você pode enviar as respostas para um servidor ou usar conforme necessário
            }
        } else {
            alert('Por favor, preencha o campo.');
        }
    });

    // Inicia com a primeira pergunta
    atualizarPergunta();
});
// end parte 1 

//pagina de resultado
// Função para animar a barra de progresso
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

