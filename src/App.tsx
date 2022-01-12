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
import { FormEvent, useState } from 'react'
import powerLine from './assets/images/icons8-electricity.png'
import powerFixing from './assets/images/power_fixing.png'
import Zone from './components/Zone'
import data from './lib/data.json'

const App = (): JSX.Element => {
  const [location, setLocation] = useState<string>('')
  const [district, setDistrict] = useState<number>(1)
  const [city, setCity] = useState<string>('')
  const [content, setContent] = useState<string[]>()
  const [group, setGroup] = useState<string>()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(location)
  }

  const getGroup = (area: string) => {
    const dGroup = data.filter((item) => item['Affected Areas'] === area)[0]
    setGroup(dGroup.Group)
    setDistrict(dGroup.ID)
  }

  return (
    <Layout>
      <Container>
        <section className='flex flex-col items-center justify-center py-20'>
          <div className='inline-flex items-baseline space-x-2'>
            <h1 className='font-bold text-center text-secondary-base text-4xl sm:text-5xl md:text-6xl mb-6'>
              Cut The Power Sri Lanka
            </h1>
            <img className='w-14 sm:w-24' src={powerLine} alt='power line' />
          </div>
          <h4 className='font-medium text-center text-primary-dark text-xl sm:text-2xl'>
            Find before all went dark
          </h4>
        </section>
        {/* input tags */}
        <form onSubmit={onSubmit} className='w-full'>
          <div className='flex items-center space-x-4 mb-4'>
            <Input
              label='Location'
              type='location'
              name='location'
              placeholder='Location'
              wrapperStyles='w-full'
              value={location}
              onChange={(e: FormEvent<HTMLInputElement>) => {
                setLocation(e.currentTarget.value)
                const areas = data.filter((item) =>
                  item['Affected Areas']
                    .toLowerCase()
                    .includes(location.toLowerCase())
                )

                setContent(areas.map((area) => area['Affected Areas']))
              }}
            />

            <Button type='submit' width='w-32 sm:w-44'>
              Search
            </Button>
          </div>
          <div className='bg-white p-4 shadow-sm rounded-md'>
            <ul>
              {content?.map((item, i) => (
                <li
                  className='bg-secondary-base py-2 px-3 hover:bg-secondary-dark text-white transition ease-in mb-1 rounded-md'
                  onClick={() => getGroup(item)}
                  key={i}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </form>
        <div className='inline-flex items-center space-x-3 w-full mb-12'>
          <Select
            name='district'
            options={data.map((item) => ({
              name: item.District,
              id: item.ID,
            }))}
            value={district}
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setDistrict(parseInt(e.currentTarget.value))
            }
          />

          <Select
            name='city'
            options={
              district
                ? data
                    .filter((item) => item.ID === district)[0]
                    ['Affected Areas'].split(',')
                    .map((area, i) => ({ name: area, id: area }))
                : []
            }
            value={city}
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setCity(e.currentTarget.value)
            }
          />
        </div>
        <div className='grid grid-rows-1 grid-cols-1 md:grid-cols-5 gap-5 pb-8'>
          <div className='col-span-1 md:col-span-2 px-4 w-full'>
            {/* district */}
            <h3 className='text-primary-dark text-xl sm:text-2xl mb-3'>
              District |{' '}
              <span className='text-secondary-base font-medium'>
                {data.filter((item) => item.ID === district)[0].District}
              </span>
            </h3>

            <Zone
              group={
                group || data.filter((item) => item.ID === district)[0].Group
              }
            />
          </div>
          <div className='col-span-1 md:col-span-3 flex justify-center items-center'>
            <img className='' src={powerFixing} alt='power fixing' />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default App
