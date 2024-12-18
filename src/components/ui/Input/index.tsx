interface Props {
  name: string
  label: string
  type?: string
  placeholder?: string
  error?: string
}

const Input = ({ name, label, type = 'text', placeholder, error }: Props) => {
  return (
    <div className="relative flex flex-col">
      <label htmlFor={name} className="mb-1 text-sm">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`mb-6 h-10 min-w-72 rounded-lg border p-2 ${error ? 'border-error focus:outline-error' : 'border-gray500'}`}
      ></input>
      <p className="absolute bottom-2 text-sm leading-none text-error">
        {error}
      </p>
    </div>
  )
}

export default Input
