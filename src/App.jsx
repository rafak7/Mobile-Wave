import Lista from './components/Lista'
import Rodape from './components/Rodape'
import { Outlet } from "react-router-dom";

export default function App() {

  return(
    <>
      <Lista/>
      <Outlet/>
      <Rodape/>
    </>
  )
}
