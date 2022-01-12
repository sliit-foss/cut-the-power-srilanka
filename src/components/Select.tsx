const Select = ({
  name,
  value,
  onChange,
  options,
  defaultValue,
}: {
  value: any
  onChange: any
  name: string
  options?: { name: string | undefined; id: number | string }[]
  defaultValue?: string
}): JSX.Element => {
  return (
    <select
      className='bg-tertiary w-full rounded-md border-secondary-base border-opacity-50 focus:ring focus:ring-secondary-base focus:ring-opacity-10 shadow-sm focus:outline-none placeholder-transparent text-primary-dark transition-all ease-in px-2 py-3 outline-none capitalize'
      name={name}
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
    >
      <option className='capitalize' value=''>
        {name}
      </option>
      {options?.map((option, i) => (
        <option className='capitalize' key={i} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default Select
