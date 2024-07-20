import theme from '@/theme'
import { Box, TextField } from '@mui/material'
import { styled } from '@mui/system'
import React, { useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from 'date-fns/locale/ko'

registerLocale('ko', ko)

const Wrapper = styled(Box)({
  '&': {
    width: '100%',

    '.react-datepicker-wrapper': {
      width: '100%',
    },

    '.react-datepicker__aria-live': {
      display: 'none',
    },

    '.react-datepicker__input-container input': {
      background: 'none',
      width: '100%',
    },

    '.react-datepicker__month-container': {
      '.react-datepicker__header': {
        backgroundColor: theme.palette.background.paper,
      },

      '.react-datepicker__navigation-icon::before': {
        borderColor: theme.palette.text.primary,
      },

      '.react-datepicker__current-month': {
        color: theme.palette.primary.main,
      },

      '.react-datepicker__day-name': {
        color: theme.palette.primary.main,
      },

      '.react-datepicker__month': {
        backgroundColor: theme.palette.background.paper,
        backgroundImage: theme.custom.backgroundGradient,
        padding: '1rem',
        margin: 0,
      },

      '.react-datepicker__day': {
        color: theme.palette.text.primary,

        '&:hover': {
          backgroundColor: theme.palette.primary.light,
        },
      },

      '.react-datepicker__day--outside-month': {
        color: theme.palette.text.secondary,
      },

      '.react-datepicker__day--selected': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.paper,
      },

      '.react-datepicker__day--keyboard-selected': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.paper,

        '&:hover': {
          color: theme.palette.primary.main,
        },
      },
    },

    '.react-datepicker__time-container': {
      '.react-datepicker__header': {
        backgroundColor: theme.palette.background.paper,

        '.react-datepicker-time__header': {
          color: theme.palette.primary.main,
        },
      },

      '.react-datepicker__time': {
        backgroundColor: theme.palette.background.paper,
        backgroundImage: theme.custom.backgroundGradient,
        color: theme.palette.text.primary,
      },

      '.react-datepicker__time-list-item': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '&:hover': {
          backgroundColor: `${theme.palette.primary.light} !important`,
          color: `${theme.palette.primary.main} !important`,
        },
      },

      '.react-datepicker__time-list-item--selected': {
        backgroundColor: `${theme.palette.primary.main} !important`,
        color: `${theme.palette.background.paper} !important`,
      },
    },

    '.react-datepicker-popper .react-datepicker__triangle': {
      fill: `${theme.palette.background.paper} !important`,
      color: `${theme.palette.background.paper} !important`,
    },
  },
})

interface DatePickerProps {
  placeholder?: string
  onChange: (date: Date) => void
}

const CustomDatePicker = ({ placeholder, onChange }: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const handleDateChange = (date: Date | null) => {
    if (!date) {
      return
    }
    setSelectedDate(date)
    onChange(date)
  }

  return (
    <Wrapper>
      <DatePicker
        selected={selectedDate}
        dateFormat="yyyy년 MM월 dd일 HH:mm"
        showTimeSelect
        locale="ko"
        customInput={
          <TextField
            fullWidth
            label={placeholder}
            inputProps={{
              autoComplete: 'off',
            }}
          />
        }
        onChange={handleDateChange}
      />
    </Wrapper>
  )
}

export default CustomDatePicker
