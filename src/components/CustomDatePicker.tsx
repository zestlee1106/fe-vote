import theme from '@/theme'
import { Box, TextField } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

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
    },

    '.react-datepicker-popper .react-datepicker__triangle': {
      fill: `${theme.palette.background.paper} !important`,
      color: `${theme.palette.background.paper} !important`,
    },
  },
})

const CustomDatePicker: React.FC = () => {
  return (
    <Wrapper>
      <DatePicker
        showTimeSelect
        customInput={
          <TextField
            fullWidth
            inputProps={{
              autoComplete: 'off',
            }}
          />
        }
      />
    </Wrapper>
  )
}

export default CustomDatePicker
