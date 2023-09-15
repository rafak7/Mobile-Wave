import { Link } from "react-router-dom"

export default function Lista(){
    return(
        <>
        <div>
            <header>
            <div className="txt-1">
                <h1>MobileWave</h1>
            </div>  
            <div className="links_box">
                <li><Link to='/'>Página Inicial</Link> </li>
                <span>|</span>
                <li><Link to='/aparelhos'>Aparelhos</Link> </li>
            </div>
            <div className="pesquisar">
            <input type="text" placeholder="  Pesquisar..."/>
            </div>
            <div className="logo">
                <img src="./public/logo-wave.png" alt="" />
            </div>   

            </header>
        </div>
        </>
    )
}