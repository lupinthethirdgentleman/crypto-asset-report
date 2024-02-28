// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { useRouter } from 'next/router'
import SymbolOverView from 'src/views/crypto/SymbolOverView'
import TradingViewChart from 'src/views/crypto/TradingViewChart'

const CryptoCurrencyDetail = () => {
  const { query } = useRouter()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ mt: 3 }}>
        <Card>
          <SymbolOverView symbol={`${query.symbol}USD`} />
        </Card>
      </Grid>
      <Grid item xs={12} sx={{ minHeight: '500px' }}>
        <Card>
          <TradingViewChart symbol={`${query.symbol}USD`} />
        </Card>
      </Grid>
    </Grid>
  )
}

export default CryptoCurrencyDetail
