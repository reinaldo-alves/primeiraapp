import React, { useContext } from 'react'
import { MoodContext } from '../../contexts/moodContext'
import { UserContext } from '../../contexts/userContext'

function Profile(){

    const {dados, login} = useContext(UserContext)
    const {moodArray, mood} = useContext(MoodContext)

    return (
        <>
            <div>
                {login ? 'Estas são as suas informações' : 'Faça seu login para ter acesso às informações'}
            </div>
            <div>
                {login ? `Usuário: ${dados.nome}` : ''} <br />
                {login ? `Idade: ${dados.idade}` : ''} <br />
                {login ? `Ativo?: ${dados.ativo ? 'Sim' : 'Não'}` : ''} <br />
            </div>
            <div>
                Hoje eu estou {moodArray[mood]} 
            </div>
        </>
    )
}

export default Profile