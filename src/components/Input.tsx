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
}

const Input = ({
  label,
  name,
  type = 'text',
  wrapperStyles = '',
  placeholder,
  labelStyles = 'text-sm text-black',
}: InputProps): JSX.Element => {
  return (
    <div className={`relative ${wrapperStyles}`}>
      <input
        type={type}
        placeholder={placeholder}
        className={`peer h-10 block w-full rounded-md border-green-base border-opacity-50 focus:ring focus:ring-green-base focus:ring-opacity-10 focus:border-b-4 focus:border-green-base shadow-sm focus:outline-none placeholder-transparent text-black transition-all ease-in px-2`}
      />
      <label
        htmlFor={`${name}`}
        className={`absolute left-0 -top-4  ${labelStyles} transition-all ease-out peer-empty:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-focus:-top-5 peer-focus:left-0 peer-focus:text-black peer-valid:text-black peer-empty:text-gray-600'} peer-focus:text-xs cursor-text`}
      >
        {label}
      </label>
    </div>
  )
}

export default Input
