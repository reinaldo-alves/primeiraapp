import React, { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/productContext";

function Detalhes(){
    const params = useParams()

    const location = useLocation()
    console.log(location)

    const produtos = useContext(ProductContext);

    const descricao = produtos.find(x => x.id == params.id)
    console.log(descricao)

    return (
        <div>
            {descricao.description}
        </div>
    )
}

export default Detalhes;