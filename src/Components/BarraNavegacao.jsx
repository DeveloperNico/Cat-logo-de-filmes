import estilos from './BarraNavegacao.module.css';
import { Link } from 'react-router-dom';

export function BarraNavegacao() {
    return(
        <nav className={estilos.container}>
            <ul>
                <Link to={"/"}>
                    <li>
                        <span class="material-symbols-outlined">
                            home
                        </span>
                        Home
                    </li>
                </Link>

                <Link to={"/serie"}>
                    <li>
                        <span class="material-symbols-outlined">
                            live_tv
                        </span>
                        Séries    
                    </li>
                </Link>

                <Link to={"/perfil"}>
                    <li>
                        <span class="material-symbols-outlined">
                            person
                        </span>
                        Perfil
                    </li>
                </Link>
            </ul>
        </nav>
    )
}