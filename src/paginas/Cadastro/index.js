import { useState } from "react";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import { UFs } from "../../constantes/ufs";
import Modal from "../../componentes/Modal";

function Cadastro() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [dataNascimento, setDataNascimento] = useState();
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("DEFAULT");
    const [complemento, setComplemento] = useState("");
    const [exibirModal, setExibirModal] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();

        console.log({
            nome,
            sobrenome,
            email,
            dataNascimento,
            cep,
            logradouro,
            numero,
            bairro,
            cidade,
            uf,
            complemento
        });

        setExibirModal(true);
    }

    const onCancel = () => {
        setNome("");
        setSobrenome("");
        setEmail("");
        setDataNascimento();
        setCep("");
        setNumero("");
        setBairro("");
        setCidade("");
        setUf("DEFAULT");
        setComplemento("");
    }

    return (
        <>
            {exibirModal && (
                <Modal
                    titulo={"Confirmacao de Cadastro"}
                    texto={"Aluno cadastrado com sucesso!"}
                    onClickBtn02={() => setExibirModal(false)}
                    txtBtn02={"Fechar"}
                />
            )}
            <Cabecalho />

            <form className="container mt-3" onSubmit={onSubmit}>
                <h1 className="text-primary">Cadastro de Aluno</h1>

                <div className="row mx-md-0 mx-2">
                    <div className="col-md-6 col-12 mb-3">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            placeholder="Primeiro nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
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
                            value={sobrenome}
                            onChange={(e) => setSobrenome(e.target.value)}
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
                            value={dataNascimento}
                            onChange={(e) => setDataNascimento(e.target.value)}
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
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
                            value={logradouro}
                            onChange={(e) => setLogradouro(e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-md-2 col-12 mb-3">
                        <label htmlFor="numero" className="form-label">Numero</label>
                        <input
                            type="text"
                            className="form-control"
                            id="numero"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
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
                            value={bairro}
                            onChange={(e) => setBairro(e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-md-3 col-12 mb-3">
                        <label htmlFor="cidade" className="form-label">Cidade</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cidade"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-md-2 col-12 mb-3">
                        <label htmlFor="uf" className="form-label">UF</label>
                        <select
                            id="uf"
                            value={uf}
                            className="form-select"
                            onChange={(e) => setUf(e.target.value)}
                            required
                        >
                            <option value="DEFAULT"></option>
                            {UFs.map((uf, idx) => (
                                <option value={uf} key={idx}>{uf}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-4 col-12 mb-3">
                        <label htmlFor="complemento" className="form-label">Complemento</label>
                        <input
                            type="text"
                            className="form-control"
                            id="complemento"
                            value={complemento}
                            onChange={(e) => setComplemento(e.target.value)}
                        />
                    </div>
                </div>

                <div className="row mx-md-0 mx-2">
                    <div className="col-md-4 col-12 mb-3">
                        <button type="submit" className="btn btn-primary">Enviar</button>
                        <button className="btn btn-outline-primary ms-2" onClick={onCancel}>Cancelar</button>
                    </div>
                </div>
            </form>

            <Rodape />
        </>
    )
}

export default Cadastro;