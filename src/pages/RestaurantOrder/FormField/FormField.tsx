import { useId } from "react"

const FormField: React.FC<{
  label: string
  type: string
  help: string
  error: boolean
}> = ({ label, type, help }) => {
  const id = useId()

  return (
    <div className="form-group">
      <label htmlFor={id} className="control-label">
        {label}:
      </label>
      <input id={id} type={type} className="form-control" />
      <p className="help-text">{help}</p>
    </div>
  )
}

export default FormField
