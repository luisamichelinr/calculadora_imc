import css from './Resultado.module.css'

export default function Resultado({imc, action}) {
    return (
        <div className="row">
            <div className="col-12 d-flex gap-5 align-items-center justify-content-center">
                <div className={"row "}>
                    <div className="col-6">
                        <div className="row align-items-center justify-content-center d-flex">
                            <div className="col-12">
                                {imc > 0 && imc < 18.5 ? (<p>Você está abaixo do peso</p>) : (<p></p>)}
                                {imc >= 18.5 && imc < 25 ? (<p>Você está com peso ideal</p>) : (<p></p>)}
                                {imc >= 25 && imc < 30 ? (<p>Você está com sobrepeso</p>) : (<p></p>)}
                                {imc >= 30 && imc < 35 ? (<p>Você está com obesidade grau 1</p>) : (<p></p>)}
                                {imc >= 35 && imc < 40 ? (<p>Você está com obesidade grau 2 (severa)</p>) : (<p></p>)}
                                {imc >= 40 ? (<p>Você está com obesidade grau 3 (mórbida)</p>) : (<p></p>)}
                            </div>
                            <div className="col-12">
                            {imc > 0 ?
                                (
                                    <p>Seu IMC é de {imc}</p>

                                ) :
                                (
                                    <p>Preencha os campos para calcular seu IMC</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <button className={"btn btn-primary "} onClick={action}>Calcular</button>
                    </div>
                </div>
            </div>
        </div>
    )
}