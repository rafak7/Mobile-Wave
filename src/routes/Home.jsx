export default function Home() {

    document.title = 'Página inicial'

    return(
        <>
        <div className='promocao'>
            <div className="info">
            <h1>iPhone 14 Pro</h1>
                <p>Compre um iPhone 14 Pro!</p>
                <p>Duração da Promoção: 03/10 a 07/10</p>
            </div>
            <img className="img-cell" src='https://cdn.awsli.com.br/2500x2500/761/761012/produto/218353870/editada--5--rcs401z0ta.png'/>
        </div>

        <div className='promocao'>
            <div className="info">
                <h1>Xiaomi 12S Ultra</h1>
                <p>Compre um Xiaomi 12S Ultra!</p>
                <p>Duração da Promoção: 03/10 a 07/10</p>
  
            </div>
            <img className="img-cell" src='https://www.notebookcheck.info/uploads/tx_nbc2/pms_1656916095.70948543.png'/>
        </div>
        </>
    )
}