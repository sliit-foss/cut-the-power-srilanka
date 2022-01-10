import Navbar from './Navbar'

type LayoutProps = {
  children: JSX.Element[] | JSX.Element
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <main className='relative min-h-screen bg-primary-dark font-poppins text-white-base'>
        {children}
      </main>
    </>
  )
}

export default Layout
