import { useId } from "react"

const FormTextField: React.FC<{
  label: string
  type: string
  help?: string
  disabled?: boolean
  value: string
  onChange: (data: string) => void
}> = ({ label, type, help, disabled = false, value, onChange }) => {
  const id = useId()

  return (
    <div className="form-group">
      <label htmlFor={id} className="control-label">
        {label}:
      </label>

      <input
        id={id}
        type={type}
        className="form-control"
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {help && <p className="help-text">{help}</p>}
    </div>
  )
}

export default FormTextField
