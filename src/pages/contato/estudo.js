import React, {useState, useEffect, useRef, useMemo, useCallback, useContext } from 'react';
import Button from '../../../src/components/button/button';
import './styles.css';
import logo from '../../../src/logo.svg';
import { MoodContext } from '../../contexts/moodContext';

function Estudo(){
    
    const estados = ['AP', 'RR', 'SP', 'MG', 'TO']
    
    const renda = 12000000000
    
    function dinheiro() {
        if (renda >= 1000000000) return 'Você é bilionário!'
        if (renda >= 1000000) return 'Você é milionário!'
        return 'Sai fora, liso!'
    }
    
    const cadastro = [
        {nome: 'Paulo', aluno: false},
        {nome: 'Renato', aluno: true},
        {nome: 'Andressa', aluno: false},
        {nome: 'Anísio', aluno: true},
        {nome: 'Kelly', aluno: true},
    ]
    
    function evento(){
        alert('O evento foi disparado')
    }

    // window.addEventListener('scroll', () => console.log('Evento aconteceu'))

    const [carregando, setCarregando] = useState(true)
    const [contador, setContador] = useState(0)

    const video = useRef() //ajuda a lidar com as referências dos elementos criados em tela

    useEffect(() => {console.log(video.current.pause)}, [])
    //useRef só funciona depois que os elementos renderizarem, por isso foi colocado o console.log dentro de useEffect
    //não depende necessariamente do useEffect, pode ser colocado em uma função de callback ativada por um botão

    useEffect(() => {
        console.log('Alterou contador')
        document.title = `React App (${contador} clicks)`
    }, [contador]) 

    useEffect(() => {
        console.log('Alterou carregamento')
        return () => {
        console.log('Sumiu!')     //essa função dentro do return é executada quando o componente some da tela
        }
    }, [carregando]) 
    //se deixar o array vazio, só roda a função na primeira renderização
    //se colocar um valor, ela roda sempre que este valor for atualizado
    //se colocar mais de um valor, ela roda quando pelo menos um deles for atualizado

    const valorMemorizado = useMemo(() => {
        return "Qualquer coisa"
    },[])
    //useMemo é usado para armazenar o retorno da função na variável, no caso 'valorMemorizado'. Muito pouco usado no dia-a-dia
    //useMemo só vale a pena para ganho de performance, se o retorno da função for algo muito complexo que demanda muito da máquina e que não vale a pena ficar renderizando o tempo todo
    //Se não passar nada no array, só renderiza quando a página é recarregada. Se passar algum estado, renderiza quando este estado alterar
    
    const callBack = useCallback(() => {
        console.log(`O valor do contador é ${contador} e useMemo é ${valorMemorizado}`)
    }, [contador, valorMemorizado])
    //Semelhante ao useMemo, mas não armazena o retorno, e sim a função, que pode ser ativada no código (button, por exemplo)
    //Se não passar nada no array, só renderiza quando a página é recarregada. Se passar algum estado, renderiza quando este estado alterar

    //Contexto/estado global serve basicamente para centralizar valores e estados e compartilhá-los entre componentes que não interagem diretamente

    const {mood, setMood} = useContext(MoodContext);

    return (
        <>
            <div className="App">
                <header className="App-header">
                     <img src={logo} className="App-logo" alt="logo" />
                     <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <span className="textoTeste">Estou aprendendo a usar o react</span>
                 </header>
            </div>
            <div className="agoraPode" >
                <div className="textoNaoPode">Não Pode</div>
                <div className="bloco">{`${estados[0]}, ${estados[1]}, ${estados[2]}, ${estados[3]}, ${estados[4]}`}</div>
                <div className="bloco">{dinheiro()}</div>
                <div>{cadastro.map((aluno) => (
                    <>
                        <div className="bloco nomeAluno">{aluno.nome}</div>
                        <div>{'Aluno: '} 
                            <span className="simOuNao" style={aluno.aluno ? {color: 'green'} : {color: 'red'}}>
                                {aluno.aluno ? 'Sim' : 'Não'}
                            </span>
                        </div>  
                    </>
                ))}</div>
            </div>
            <div className="agoraPode" id="container2" >
                {carregando ? 
                    <span>Carregando...</span> 
                    : 
                    <div>
                        <button onClick={() => setContador(contador + 1)}>Adicionar</button>
                        <button onClick={() => setContador(contador ? contador - 1 : contador)}>Diminuir</button>
                        <span>{contador}</span>
                    </div>
                }
                <Button name="Salvar" text="Seus dados estão a salvo conosco" active={true} onClick={() => evento()}/> {/*pode escrever apenas active que o valor fica true */}
                <Button name={carregando ? 'Enviar' : 'Zerar'} text={carregando ? 'Mande seus dados para nós' : 'Mude o valor do contador para zero'} active={!carregando} onClick={carregando ? () => setContador(contador) : () => setContador(0)}/> {/*pode tirar o active que o valor fica false */}
                <button onClick={() => setCarregando(!carregando)}>{carregando ? 'Carregar site' : 'Voltar para carregamento'}</button>
                <button onClick={() => callBack()}>Botão do useCallback</button>
                <video ref={video} />
                <div className="simOuNao">
                    <button onClick={() => setMood(mood > 0 ? mood - 1 : mood)}>Piorar Humor</button>
                    <button onClick={() => setMood(mood < 4 ? mood + 1 : mood)}>Melhorar Humor</button>
                </div>
            </div>
        </>
    )
}

export default Estudo