import { useEffect, useState } from 'react'
import { getTimetable } from '../lib/utils'

export interface TimetableProps {
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat'
  time: string
}

const Zone = ({ group }: { group?: string }): JSX.Element => {
  const [timetable, setTimetable] = useState<TimetableProps[]>()

  useEffect(() => {
    const tables = getTimetable(group)
    setTimetable(tables)
  }, [group])

  console.log(timetable)

  return (
    <div>
      <div className='inline-flex items-center justify-between text-lg text-white bg-secondary-base py-2 px-4 rounded-lg mb-4 w-full'>
        <h4>Power Outage</h4>
        <h4>{group}</h4>
      </div>
      <ul className='px-4'>
        {timetable?.map((item, i) => (
          <li key={i} className='font-medium mb-2'>
            <span className='font-semibold text-secondary-base'>
              {item.day} -
            </span>{' '}
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Zone
