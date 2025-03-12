import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";

function Cadastro() {
    return (
        <>
            <Cabecalho />

            <form className="container mt-3">
                <h1 className="text-primary">Cadastro de Aluno</h1>

                <div className="row mx-md-0 mx-2">
                    <div className="col-md-6 col-12 mb-3">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            placeholder="Primeiro nome"
                            required
                        />
                    </div>

                    <div className="col-md-6 col-12 mb-3">
                        <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="sobrenome"
                            placeholder="Sobrenome"
                            required
                        />
                    </div>
                </div>

                <div className="row mx-md-0 mx-2">
                    <div className="col-md-4 col-12 mb-3">
                        <label htmlFor="dataNascimento" className="form-label">Data de Nascimento</label>
                        <input
                            type="date"
                            className="form-control"
                            id="dataNascimento"
                            required
                        />
                    </div>

                    <div className="col-md-8 col-12 mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Digite aqui o seu e-mail..."
                            required
                        />
                    </div>
                </div>

                <div className="row mx-md-0 mx-2">
                    <div className="col-md-4 col-12 mb-3">
                        <label htmlFor="cep" className="form-label">CEP</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cep"
                            placeholder="XX.XXX-XXX"
                            required
                        />
                    </div>

                    <div className="col-md-6 col-12 mb-3">
                        <label htmlFor="logradouro" className="form-label">Logradouro</label>
                        <input
                            type="text"
                            className="form-control"
                            id="logradouro"
                            placeholder="Rua, avenida..."
                            required
                        />
                    </div>

                    <div className="col-md-2 col-12 mb-3">
                        <label htmlFor="numero" className="form-label">Numero</label>
                        <input
                            type="text"
                            className="form-control"
                            id="numero"
                            required
                        />
                    </div>
                </div>

                <div className="row mx-md-0 mx-2">
                    <div className="col-md-3 col-12 mb-3">
                        <label htmlFor="bairro" className="form-label">Bairro</label>
                        <input
                            type="text"
                            className="form-control"
                            id="bairro"
                            required
                        />
                    </div>

                    <div className="col-md-3 col-12 mb-3">
                        <label htmlFor="cidade" className="form-label">Cidade</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cidade"
                            required
                        />
                    </div>

                    <div className="col-md-2 col-12 mb-3">
                        <label htmlFor="uf" className="form-label">UF</label>
                        <input
                            type="text"
                            className="form-control"
                            id="uf"
                            required
                        />
                    </div>

                    <div className="col-md-4 col-12 mb-3">
                        <label htmlFor="complemento" className="form-label">Complemento</label>
                        <input
                            type="text"
                            className="form-control"
                            id="complemento"
                        />
                    </div>
                </div>

                <div className="row mx-md-0 mx-2">
                    <div className="col-md-4 col-12 mb-3">
                        <button type="submit" className="btn btn-primary">Enviar</button>
                        <button className="btn btn-outline-primary ms-2">Cancelar</button>
                    </div>
                </div>
            </form>

            <Rodape />
        </>
    )
}

export default Cadastro;