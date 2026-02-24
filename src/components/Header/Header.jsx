import css from './Header.module.css'

export default function Header() {
    return (
        <header className="row">
                <div className="col-md-5 d-flex align-items-center justify-content-start gap-3">
                    <span class="material-symbols-outlined">search</span>
                    <h1 className="titulo">Calculadora de IMC</h1>
                </div>
        </header>


)
}