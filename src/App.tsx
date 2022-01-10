import '@fontsource/work-sans/300.css'
import '@fontsource/work-sans/400.css'
import '@fontsource/work-sans/500.css'
import '@fontsource/work-sans/600.css'
import '@fontsource/work-sans/700.css'
import Container from './components/Container'
// import Input from './components/Input'
import Layout from './components/Layout'

const App = (): JSX.Element => {
  return (
    <Layout>
      <Container>
        <section className='flex flex-col items-center justify-center py-20'>
          <h1 className='font-bold text-secondry-base text-4xl sm:text-5xl md:text-6xl mb-6'>
            Cut The Power Sri Lanka
          </h1>
          <h4 className='font-medium text-primary-dark text-xl sm:text-2xl'>
            Find before all went dark
          </h4>
        </section>
        {/* input tags */}
        <div></div>
      </Container>
    </Layout>
  )
}

export default App
