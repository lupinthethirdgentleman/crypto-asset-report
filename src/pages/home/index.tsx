// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import PageHeader from 'src/@core/components/page-header'
import { CryptoDataGridRowType } from 'src/@core/utils/types'
import { getCryptoListData } from 'src/service/cryptocurrency.service'

import CryptoCurrencyTable from 'src/views/crypto/CryptoCurrencyTable'

const Home = () => {
  const [data, setCryptoData] = useState<CryptoDataGridRowType[]>([])
  useEffect(() => {
    getCryptoListData()
      .then((res: any) => {
        setCryptoData(res.data)
      })
      .catch((error: any) => {
        console.log(error)
      })
  }, [])

  return (
    <Grid container spacing={6}>
      <PageHeader
        title={<Typography variant='h5'> Crypto Dashboard</Typography>}
        subtitle={<Typography variant='body2'>Here's Crypto Dashboard</Typography>}
      ></PageHeader>
      <Grid item xs={12}>
        <Card>
          <CryptoCurrencyTable data={data} />
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
