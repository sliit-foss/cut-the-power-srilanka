// import Navbar from './Navbar'

type LayoutProps = {
  children: JSX.Element[] | JSX.Element
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      {/* <Navbar /> */}
      <main className='relative min-h-screen font-workSans bg-slate-50 text-primary-dark'>
        {children}
      </main>
    </>
  )
}

export default Layout
