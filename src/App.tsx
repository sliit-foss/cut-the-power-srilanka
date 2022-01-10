import '@fontsource/work-sans/300.css'
import '@fontsource/work-sans/400.css'
import '@fontsource/work-sans/500.css'
import '@fontsource/work-sans/600.css'
import '@fontsource/work-sans/700.css'
import Button from './components/Button'
import Container from './components/Container'
import Input from './components/Input'
// import Input from './components/Input'
import Layout from './components/Layout'
import Select from './components/Select'
import { cities, districts, provinces } from './lib'
import powerLine from './assets/images/icons8-electricity.png'
import { FormEvent, useState } from 'react'

const App = (): JSX.Element => {
  const [location, setLocation] = useState<string>()
  // const [province, setProvince] = useState<string>()
  // const [district, setDistrict] = useState<string>()
  // const [city, setCity] = useState<string>()

  return (
    <Layout>
      <Container>
        <section className='flex flex-col items-center justify-center py-20'>
          <div className='inline-flex items-baseline space-x-2'>
            <h1 className='font-bold text-center text-secondary-base text-4xl sm:text-5xl md:text-6xl mb-6'>
              Cut The Power Sri Lanka
            </h1>
            <img src={powerLine} alt='power line' />
          </div>
          <h4 className='font-medium text-center text-primary-dark text-xl sm:text-2xl'>
            Find before all went dark
          </h4>
        </section>
        {/* input tags */}
        <form className='w-full'>
          <div className='flex items-center space-x-4 mb-4'>
            <Input
              label='Location'
              type='location'
              name='location'
              placeholder='Location'
              wrapperStyles='w-full'
              value={location}
              onChange={(e: FormEvent<HTMLInputElement>) =>
                setLocation(e.currentTarget.value)
              }
            />
            <Button type='submit' width='w-32 sm:w-44'>
              Search
            </Button>
          </div>
          <div className='inline-flex items-center space-x-3 w-full'>
            <Select name='province' options={provinces} />
            <Select name='district' options={districts} />
            <Select name='city' options={cities} />
          </div>
        </form>
      </Container>
    </Layout>
  )
}

export default App
