import { TimetableProps } from "../components/Zone"

 export const getTimetable = (group : string | undefined) : TimetableProps[] => {
    if (group === 'Group A') {
      return [
        {
          day: 'Mon',
          time: '17.30 - 18.30',
        },
        {
          day: 'Tue',
          time: '18.30 - 19.30',
        },
        {
          day: 'Wed',
          time: '19.30 - 20.30',
        },
        {
          day: 'Thu',
          time: '20.30 - 21.30',
        },
        {
          day: 'Fri',
          time: '17.30 - 18.30',
        },
        {
          day: 'Sat',
          time: '18.30 - 19.30',
        },
      ]
    } else if (group === 'Group B') {
      return [
        {
          day: 'Mon',
          time: '18.30 - 19.30',
        },
        {
          day: 'Tue',
          time: '19.30 - 20.30',
        },
        {
          day: 'Wed',
          time: '20.30 - 21.30',
        },
        {
          day: 'Thu',
          time: '17.30 - 18.30',
        },
        {
          day: 'Fri',
          time: '18.30 - 19.30',
        },
        {
          day: 'Sat',
          time: '19.30 - 20.30',
        },
      ]
    } else if (group === 'Group C') {
      return [
        {
          day: 'Mon',
          time: '19.30 - 20.30',
        },
        {
          day: 'Tue',
          time: '20.30 - 21.30',
        },
        {
          day: 'Wed',
          time: '17.30 - 18.30',
        },
        {
          day: 'Thu',
          time: '18.30 - 19.30',
        },
        {
          day: 'Fri',
          time: '19.30 - 20.30',
        },
        {
          day: 'Sat',
          time: '20.30 - 21.30',
        },
      ]
    } else {
      return [
        {
          day: 'Mon',
          time: '20.30 - 21.30',
        },
        {
          day: 'Tue',
          time: '17.30 - 18.30',
        },
        {
          day: 'Wed',
          time: '18.30 - 19.30',
        },
        {
          day: 'Thu',
          time: '19.30 - 20.30',
        },
        {
          day: 'Fri',
          time: '20.30 - 21.30',
        },
        {
          day: 'Sat',
          time: '17.30 - 18.30',
        },
      ]
    }
  }