// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import SymbolOverView from 'src/views/crypto/SymbolOverView'
import TradingViewChart from 'src/views/crypto/TradingViewChart'

const CryptoCurrencyDetail = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ mt: 3 }}>
        <Card>
          <SymbolOverView />
        </Card>
      </Grid>
      <Grid item xs={12} sx={{ minHeight: '500px' }}>
        <Card>
          <TradingViewChart />
        </Card>
      </Grid>
    </Grid>
  )
}

export default CryptoCurrencyDetail
