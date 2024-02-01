import { useId } from "react"

const FormTextField: React.FC<{
  label: string
  help?: string
  disabled?: boolean
  value: string
  onChange: (data: string) => void
  options: Array<{ key?: string; value: string; label?: string }>
}> = ({ label, help, disabled = false, value, onChange, options }) => {
  const id = useId()

  return (
    <div className="form-group">
      <label htmlFor={id} className="control-label">
        {label}:
      </label>

      <select
        id={id}
        className="form-control"
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map(({ key, value, label }) => (
          <option key={key ?? value} value={value}>
            {label ?? value}
          </option>
        ))}
      </select>

      {help && <p className="help-text">{help}</p>}
    </div>
  )
}

export default FormTextField
