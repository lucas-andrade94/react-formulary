import React, { useState, useContext } from "react";
import { Switch, Button, TextField, FormControlLabel } from "@material-ui/core";
import validacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes = useContext(validacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (possoEnviar()) {
                    aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
                }
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                id="nome"
                name="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                name="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf"
                name="cpf"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <FormControlLabel
                control={
                    <Switch
                        checked={promocoes}
                        onChange={(event) => {
                            setPromocoes(event.target.checked);
                        }}
                        name="promoções"
                        color="primary"
                    />
                }
                label="Promoções"
            />

            <FormControlLabel
                control={
                    <Switch
                        checked={novidades}
                        onChange={(event) => {
                            setNovidades(event.target.checked);
                        }}
                        name="novidades"
                        color="primary"
                    />
                }
                label="Novidades"
            />

            <Button type="submit" variant="contained" color="primary">
                Próximo
            </Button>
        </form>
    );
}

export default DadosPessoais;
