import css from './Input.module.css'

export default function Input({ label, type, placeholder, value, onChange}) {
    return (
            <div className="mb-3  g-3 align-items-center col-6">
                <label className="col-form-label">{label}</label>
                <input type={type} className="form-control"
                           placeholder={placeholder} value={value} onChange={onChange}/>
            </div>

    )
}

