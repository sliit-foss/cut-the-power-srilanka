// Use this component as a input field.
// Pass the required fields
// @label string required
// @name string required
// @type string, default to 'text'
// @wrapperStyles wrapper div styles
// @placeholder string
// @register register function form the react-hook-form
// @validation validation object
// @errors errors object from the react-hook-form

interface InputProps {
  label?: string
  name?: string
  type?: string
  wrapperStyles?: string
  placeholder?: string
  labelStyles?: string
  value: any
  onChange: any
}

const Input = ({
  label,
  value,
  onChange,
  name,
  type = 'text',
  wrapperStyles = '',
  placeholder,
  labelStyles = 'text-sm text-black',
}: InputProps): JSX.Element => {
  return (
    <div className={`relative ${wrapperStyles}`}>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={`peer h-12 block bg-tertiary w-full rounded-md border-secondary-base border-opacity-50 focus:ring focus:ring-secondary-base focus:ring-opacity-10 shadow-sm focus:outline-none placeholder-transparent text-primary-dark transition-all ease-in px-2 outline-none`}
      />
      <label
        htmlFor={`${name}`}
        className={`absolute left-0 -top-4  ${labelStyles} transition-all ease-out peer-empty:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-primary-dark peer-valid:text-primary-dark peer-empty:text-gray-600 peer-focus:text-sm cursor-text`}
      >
        {label}
      </label>
    </div>
  )
}

export default Input
