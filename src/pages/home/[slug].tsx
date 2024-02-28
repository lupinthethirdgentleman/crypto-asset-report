// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PageHeader from 'src/@core/components/page-header'

const CryptoCurrencyDetail = () => {
  return (
    <Grid container spacing={6}>
      <PageHeader
        title={<Typography variant='h5'>Cryptocurrency Detail</Typography>}
        subtitle={<Typography variant='body2'>Today's Cryptocurrency Detail Info</Typography>}
      ></PageHeader>
      <Grid item xs={12}>
        <Card></Card>
      </Grid>
    </Grid>
  )
}

export default CryptoCurrencyDetail
