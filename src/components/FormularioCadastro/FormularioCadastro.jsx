import { Stepper, Step, StepLabel } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Conclusao from "./Conclusao";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDadosColetados] = useState({});
    useEffect(() => {
        if (etapaAtual === formularios.length - 1) {
            aoEnviar(dadosColetados);
        }
    });
    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Conclusao />,
    ];

    function coletarDados(dados) {
        setDadosColetados({ ...dadosColetados, ...dados });
        proximo();
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    return (
        <>
            <Stepper activeStep={etapaAtual}>
                <Step>
                    <StepLabel>Login</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Pessoais</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Endereço</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Conclusão</StepLabel>
                </Step>
            </Stepper>
            {formularios[etapaAtual]}
        </>
    );
}

export default FormularioCadastro;
