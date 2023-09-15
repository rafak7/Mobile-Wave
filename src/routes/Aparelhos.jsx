import { Link } from "react-router-dom";
import { ListaAparelhos } from "../components/ListaAparelhos";

export default function Aparelhos(){

    document.title = "Aparelhos";

    return(
      <>
      <div className="menu-aparelhos">
        <h1>Aparelhos:</h1>
        <ul className="aparelhos-ul">
          {ListaAparelhos.map(aparelhos => (
            <li key={aparelhos.id}>
              <Link to={`/visualizar/aparelho/${aparelhos.id}`}>
                {aparelhos.nome}
              </Link>
            </li>
          ))}
        </ul>
    </div>
      </>
    )
}
