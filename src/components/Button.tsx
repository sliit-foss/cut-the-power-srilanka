interface ButtonProps {
  onClick?: () => void
  children: JSX.Element[] | JSX.Element
  padding?: string
  width?: string
  margin?: string
}

const Button = ({
  onClick,
  children,
  padding = 'py-2 px-4',
  width = '',
  margin = '',
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${padding} ${margin} ${width} text-sm text-primary ring-1 ring-primary hover:bg-primary hover:bg-opacity-20 rounded-sm shadow-md transition ease-in`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
