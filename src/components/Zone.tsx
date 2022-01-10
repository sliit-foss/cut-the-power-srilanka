const Zone = ({
  timezone,
  items,
}: {
  timezone: string
  items?: string[]
}): JSX.Element => {
  return (
    <div>
      <div className='inline-flex items-center justify-between text-lg text-white bg-secondary-base py-2 px-4 rounded-lg mb-4 w-full'>
        <h4>Night Peek</h4>
        <h4>17:30 - 18:30</h4>
      </div>
      <ul className='px-4'>
        <li className='font-medium mb-2'>a</li>
        <li className='font-medium mb-2'>b</li>
        <li className='font-medium mb-2'>c</li>
        <li className='font-medium mb-2'>d</li>
        <li className='font-medium mb-2'>e</li>
      </ul>
    </div>
  )
}

export default Zone
