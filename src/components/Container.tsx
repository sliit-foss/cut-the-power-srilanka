type ContainerProps = {
  children: JSX.Element[] | JSX.Element
}

const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <section className={`max-w-6xl mx-auto container px-3 sm:px-6 md:px-20`}>
      {children}
    </section>
  )
}

export default Container
