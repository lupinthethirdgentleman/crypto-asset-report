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
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)
  const [totalColumns, setTotalColumns] = useState<number>(0)
  const limit = 100

  useEffect(() => {
    fetchCryptoData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  const fetchCryptoData = () => {
    setLoading(true)
    getCryptoListData(currentPage, limit)
      .then((res: any) => {
        setCryptoData(res.data)
        setTotalColumns(res.status.total_count ?? 0) // Set total columns from API response
        setLoading(false)
      })
      .catch((error: any) => {
        console.error('Error fetching crypto data:', error)
        setLoading(false)
      })
  }

  const handlePageChange = (newPage: number) => {
    console.log(newPage)
    setCurrentPage(newPage)
  }

  return (
    <Grid container spacing={6}>
      <PageHeader
        title={<Typography variant='h5'>Cryptocurrency Prices</Typography>}
        subtitle={<Typography variant='body2'>Today's Cryptocurrency Prices by Market Cap</Typography>}
      ></PageHeader>
      <Grid item xs={12}>
        <Card>
          {loading ? (
            <Typography variant='body1'>Loading...</Typography>
          ) : (
            <CryptoCurrencyTable
              totalColumns={totalColumns}
              currentPage={currentPage}
              limit={limit}
              data={data}
              onPageChange={handlePageChange}
            />
          )}
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
