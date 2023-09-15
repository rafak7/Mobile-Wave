import { createElement } from "react"

export default function Cabecalho(props) {
    return(
        <>
            <header>
                <ul>
                {
                    props.children.map((item, index) =>{ 
                        createElement("li", {key: index}, item);
                        return item;
                    }) 
                }
                </ul>
            </header> 
        </>
    )
}