import {useState} from "react";
import Input from "./components/Input/Input.jsx";
import Resultado from "./components/Resultado/Resultado.jsx";
import Header from "./components/Header/Header.jsx";

export default function App() {
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [imc, setIMC] = useState('--')

    function alterarAltura(e) {
        if (e.target.value > 0) {
            setAltura(e.target.value)
        }
    }

    function alterarPeso(e) {
        if (e.target.value > 0) {
            setPeso(e.target.value)
        }
    }

    function calcularIMC() {
        setIMC( peso / (altura * altura))
    }

    return (
        <div className="container">
            <Header />

            <div className="row pt-5 justify-content-evenly">
                <div className="col-5 card border-primary mb-3">
                    <div className="card-header bg-transparent d-flex align-items-center pt-2 pb-2">
                        <p className="mb-0">Cálculo de IMC</p>
                    </div>
                    <div className="card-body">
                        <Input label={"Digite sua altura"}
                               placeholder={"Digite sua altura em metros"}
                               type="number"
                               value={altura}
                               onChange={alterarAltura}
                        />


                        <Input label={"Digite seu peso"}
                               placeholder={"Digite seu peso em quilos"}
                               type="number"
                               value={peso}
                               onChange={alterarPeso}
                        />
                    </div>
                </div>
                <div className="col-5 card border-primary mb-3">
                    <div className="card-header bg-transparent d-flex align-items-center pt-2 pb-2">
                        <p className="mb-0">Resultado</p>
                    </div>
                    <div className="card-body">
                        <Resultado imc={imc}
                                   action={calcularIMC}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}