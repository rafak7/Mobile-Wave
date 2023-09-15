import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {

    document.title = 'Error404'

    return(
    <>
        <div className='error'>
            <h1>Erro 404 - Página não encontrada.</h1>
            <Link className='container__link_error' to="/">Voltar para a página inicial.</Link>
        </div>
    </>
    )
}