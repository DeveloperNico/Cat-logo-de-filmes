import { Cabecalho } from "../Components/Cabecalho";
import { BarraNavegacao } from "../Components/BarraNavegacao";

// Outlet é um espaço que serve para renderizar o componente da rota. Então, se clicar no link "perfil", vai exibir o componente que corresponde ao endereço em Rotas.
import { Outlet } from "react-router-dom";

// estrutura
export function Inicial() {
    return (
        <>
            <Cabecalho />
            <BarraNavegacao />
            <Outlet />
        </>
    )
}