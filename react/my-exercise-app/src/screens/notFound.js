import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <h3>Página não encontrada</h3>
            <Link to="/">Voltar a listagem</Link>
        </div>
    )   
}

export default NotFound;