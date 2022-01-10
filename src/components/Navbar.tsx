const Navbar = (): JSX.Element => {
  return (
    <div className='bg-slate-50 text-primary-dark container mx-auto px-4 py-4'>
      <nav className='inline-flex justify-between items-center w-full'>
        <h3>Cut The Power | Sri Lanka</h3>
        <div>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
