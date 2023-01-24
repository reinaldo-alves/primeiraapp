import React, { useContext, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import Profile from '../../components/profile/profile'
import { ProductContext } from '../../contexts/productContext'

const Header = lazy(() => import('../../components/header/header')) //Header só vai ser importado quando for usar na aplicação
//lazy serve para que componentes pesados só sejam importados na hora do uso

function Home(){
    const produtos = useContext(ProductContext);
    
    return (
        <div>
            <Suspense fallback={<div>Carregando...</div>}>
                <Header nome="Paulo"/>
            </Suspense>
            <Profile />
            {produtos.map((produto, index) => (
                <Link key={index} to={`detalhes/${produto.id}`}>
                    <span>{produto.nome}</span>
                </Link>
            ))}
        </div>
    )
}

export default Home