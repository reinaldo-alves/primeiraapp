import React, { memo, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/userContext'
import './styles.css'
import PropTypes from 'prop-types';

function Header({ nome }) {
    const {dados, login, setLogin} = useContext(UserContext)
    const navigate = useNavigate();

    // const active = false;

    // useEffect(() => {
    //     if (login) {
    //         navigate('contato')
    //     } else {
    //         navigate('fotos')
    //     }
    // }, [])
    
    return (
        <div>
            <nav>
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <li onClick={login ? () => navigate('fotos') : () => alert('Faça o login primeiro')}>Fotos</li>
                    <li onClick={() => navigate('contato')}>Contato</li>
                    {/* Outra forma de fazer a navegação é com o navigate
                    O Link não pode ser usado dentro de uma função para navegação dinâmica, o useNavigate pode */}
                    <li onClick={() => setLogin(!login)}>{login ? `Sair (${dados.nome})` : 'Login'}</li>
                </ul>
            </nav>
        </div>
    )
}

Header.propTypes = {
    nome: PropTypes.string.isRequired
}

//PropTypes serve para limitar o tipo de dado esperado para uma constante, neste caso, uma string. Se não foi string, dá erro no console
//.isRequired diz que a propriedade é obrigatória, se não for passada quando o componente for chamado, dá erro no console

export default memo(Header)

//Usando o Memo, se o estado do componente pai for atualizado, ele não é recarregado
//Muito usado em componentes muito pesados e que não dependem de estados do pai

//ID é o valor de identificação único de algo (produto, usuário...)