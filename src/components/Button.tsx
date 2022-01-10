interface ButtonProps {
  onClick?: () => void
  children: JSX.Element[] | JSX.Element | string
  padding?: string
  width?: string
  margin?: string
}

const Button = ({
  onClick,
  children,
  padding = 'py-2 px-4',
  width = 'w-20 sm:w-32',
  margin = '',
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${padding} ${margin} ${width} text-sm text-white ring-1 ring-secondary-light bg-secondary-base hover:bg-secondary-dark rounded-full shadow-md transition ease-in`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
