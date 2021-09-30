import { Typography, Button } from "@material-ui/core";
import React from "react";

function Conclusao() {
    return (
        <form>
            <Typography>Obrigado pelo cadastro!</Typography>
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Voltar para o inicio
            </Button>
        </form>
    );
}

export default Conclusao;