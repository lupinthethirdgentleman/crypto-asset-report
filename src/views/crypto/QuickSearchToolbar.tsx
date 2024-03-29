// ** React Imports
import { ChangeEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface Props {
  value: string
  clearSearch: () => void
  onChange: (e: ChangeEvent) => void
}

const QuickSearchToolbar = (props: Props) => {
  return (
    <Box
      sx={{
        gap: 2,
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: (theme: any) => theme.spacing(2, 5, 4, 5)
      }}
    >
      <TextField
        size='small'
        value={props.value}
        onChange={props.onChange}
        placeholder='Search…'
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton size='small' title='Clear' aria-label='Clear' onClick={props.clearSearch}>
              <Icon icon='mdi:close' fontSize={20} />
            </IconButton>
          )
        }}
        sx={{
          width: {
            xs: 1,
            sm: 'auto'
          },
          '& .MuiInputBase-root > svg': {
            mr: 2
          }
        }}
      />
    </Box>
  )
}

export default QuickSearchToolbar
