import { format } from 'date-fns'

export const formatDate = (date?: string) => {
  if (!date) {
    return ''
  }

  return format(new Date(date), 'yy년 MM월 dd일 kk시 mm분')
}
