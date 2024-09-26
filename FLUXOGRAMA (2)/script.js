const ImagemDeFundo = document.getElementById('ContainerDaImagem')
const Botoes = document.getElementById('ContainerDosBotoesAgrDeVdd')
const testo = document.getElementById('testoID')

const Cenarios = {
    Inicio: {
        Mensagem: 'O PATINHO FEIO',
        Botoes: ['Iniciar'],
        AcaoBotao: ['Cenario2'],
        ImagemFundo: 'Letreiro animado bem vindo ao canal gamer colorido video.gif'
    },
    Cenario2: {
        Mensagem: 'Nascimento dos filhotes ',
        Botoes: ['Prosseguir'],
        AcaoBotao: ['Casa'],
        ImagemFundo: 'imDJYH.gif'
    },
    Casa: {
        Mensagem: 'O patinho feio é diferente dos outros??',
        Botoes: ['Sim', 'Não'],
        AcaoBotao: ['Festa','APOSTAR'],
        ImagemFundo: 'pato-girando.gif'
    },
    APOSTAR: {
        Mensagem: 'Aceitação pelos irmãos, pela mãe e outros animais',
        Botoes: ['Prosseguir'],
        AcaoBotao: ['perdeu'],
        ImagemFundo: 'aceitação.gif'
    },
    perdeu: {
        Mensagem: 'FINAL FELIZ',
        Botoes: ['Re-jogar','Fechar'],
        AcaoBotao: ['Inicio','Ganhou'],
        ImagemFundo: 'final feliz.jpg'
    },
    Festa: {
        Mensagem: 'Rejeição pelos irmãos e pela mãe',
        Botoes: ['Prosseguir'],
        AcaoBotao: ['FFesta'],
        ImagemFundo: 'pato.jpg'
    },
    FFesta: {
        Mensagem: 'Busca por aceitação',
        Botoes: ['Prosseguir'],
        AcaoBotao: ['Jantar'],
        ImagemFundo: 'anda.gif'
    },
    Jantar: {
        Mensagem: 'Encontro com animais diferentes',
        Botoes: ['Prosseguir'],
        AcaoBotao: ['Feio'],
        ImagemFundo: 'ca.avif'
    },
    Feio: {
        Mensagem: 'O Patinho Feio é aceito pelos outros animais?',
        Botoes: ['Sim','Não'],
        AcaoBotao: ['Lugar','Vagar' ],
        ImagemFundo: 'sociso.webp'
    },
    Lugar: {
        Mensagem: 'Patinho Feio encontra seu lugar com os outros animais',
        Botoes: ['Prosseguir'],
        AcaoBotao: ['perdeu' ],
        ImagemFundo: 'baile.gif'
    },
    Vagar: {
        Mensagem: 'Rejeição pelos irmãos, pela mãe e outros animais',
        Botoes: ['Prosseguir'],
        AcaoBotao: ['VVagar' ],
        ImagemFundo: 'tristre.gif'
    },
    VVagar: {
        Mensagem: 'Continua a vagar e enfrenta desafios',
        Botoes: ['Prosseguir'],
        AcaoBotao: ['Condição' ],
        ImagemFundo: 'lo.gif'
    },
    Condição: {
        Mensagem: 'Ele se transforma?',
        Botoes: ['Sim','Não'],
        AcaoBotao: ['reconhecimento','VVagar' ],
        ImagemFundo: 'duck-sigma-duck.gif'
    },
    reconhecimento: {
        Mensagem: 'RECONHECIMENTO E ACEITAÇÃO',
        Botoes: ['Prosseguir'],
        AcaoBotao: ['perdeu' ],
        ImagemFundo: 'dance.gif'
    },
    Ganhou: {
        Mensagem: 'VOCE GANHOU',
        Botoes: ['SAIR'],
        AcaoBotao: ['fecharAba'],
        ImagemFundo: '5f280a4a19531.jpeg'
    }
}

MudarCenario('Inicio');

function MudarCenario(Cenario) {
if(Cenario == 'fecharAba'){
    alert('Creditos: BRUNO 👍')
    window.close();
}else{
    //Se o cenarioExiste
    if (Cenarios[Cenario]) {
        let cen = Cenarios[Cenario];

        //Pega A Imagem do respectivo cenario
        let img = cen.ImagemFundo;
        //Mudar A Imagem de fundo
        ImagemDeFundo.src = 'imgs/' + img;


        //ADD os botoes
        ////limpa a div
        Botoes.innerHTML = '';
        //percorreTodosOsBotoesDoCenario
        cen.Botoes.forEach((e, index) => {
            //cria o botao
            let BTN = document.createElement('button')

            //add o texto do botao
            BTN.innerHTML = e;
            //add o evento de click
            BTN.addEventListener('click', () => {
                MudarCenario(cen.AcaoBotao[index])
            });
            //add o botao a div dos botoes
            Botoes.append(BTN)

        });

        //pegar o testo
        let textoMENSAGEM = cen.Mensagem;
        //Mudar o testo
        testo.innerText = textoMENSAGEM

    } else {
        alert('Esse cenario nao existe');
    }
}
}