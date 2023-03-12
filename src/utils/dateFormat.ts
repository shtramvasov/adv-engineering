import dayjs from 'dayjs'
import 'dayjs/locale/ru'

export const setLocalDate = () => {
  const date = new Date()

  return dayjs(date).locale('ru').format('D MMMM YYYY')
}