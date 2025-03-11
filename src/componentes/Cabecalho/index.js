import logo from "../../assets/treina_recife_logo.png";
import "./cabecalho.css";

function Cabecalho() {
    return (
        <nav className="navbar bg-blue">
            <div className="container">
                <a className="navbar-brand" href="https://treinarecife.com.br/" target="_blank">
                    <img src={logo} alt="Treina Recife" width="250px" />
                </a>

                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Buscar" />
                    <button className="btn btn-success" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    )
}

export default Cabecalho;