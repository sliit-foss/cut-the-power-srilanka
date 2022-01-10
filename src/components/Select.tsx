const Select = ({
  name,
  options,
}: {
  name: string
  options: string[]
}): JSX.Element => {
  return (
    <select
      className='bg-tertiary w-full rounded-md border-secondary-base border-opacity-50 focus:ring focus:ring-secondary-base focus:ring-opacity-10 shadow-sm focus:outline-none placeholder-transparent text-primary-dark transition-all ease-in px-2 py-2 outline-none capitalize'
      name={name}
    >
      <option className='capitalize' value=''>
        {name}
      </option>
      {options.map((option) => (
        <option className='capitalize' key={option} value='option'>
          {option}
        </option>
      ))}
    </select>
  )
}

export default Select
