import { useParams } from 'react-router-dom';
import { ListaAparelhos } from "../components/ListaAparelhos"

export default function VisualizarAparelho() {
    const { id } = useParams();
    const aparelho = ListaAparelhos.find((aparelhos) => aparelhos.id === parseInt(id));
  
    return (
      <div className='visualizar'>
        <h1>{aparelho.nome}</h1>
        <h2>{aparelho.desc}</h2>
        <p>{aparelho.preco}</p>
        <img src={`${aparelho.img}`} alt={`${aparelho.desc}`} />
      </div>
    );
  }
  