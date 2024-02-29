// ** MUI Imports
import { Box, IconButton, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { CryptoInfoType } from 'src/@core/utils/types'
import { getCryptoInfo } from 'src/service/cryptocurrency.service'
import SymbolOverView from 'src/views/crypto/SymbolOverView'
import TradingViewChart from 'src/views/crypto/TradingViewChart'

import Icon from 'src/@core/components/icon'

const CryptoCurrencyDetail = () => {
  const { query } = useRouter()
  const [coinInfo, setCoinInfo] = useState<CryptoInfoType>()

  useEffect(() => {
    if (query.symbol) {
      getCryptoInfo(query.symbol).then((res: any) => {
        setCoinInfo(res[0])
      })
    }
  }, [query])

  return (
    <Grid container spacing={6}>
      {coinInfo && (
        <Grid item xs={12} sx={{ mt: 1 }}>
          <Card sx={{ p: 4 }}>
            <Typography variant='body2' sx={{ color: 'text-primary' }}>
              {coinInfo.description}
            </Typography>
            <Box sx={{ display: 'flex', mt: 2 }}>
              <IconButton size='small' component={Link} sx={{ mr: 1 }} href={coinInfo.urls.website[0] ?? '#'}>
                <Icon icon='mdi:web'></Icon>
              </IconButton>
              <IconButton size='small' component={Link} sx={{ mr: 1 }} href={coinInfo.urls.reddit[0] ?? '#'}>
                <Icon icon='mdi:reddit'></Icon>
              </IconButton>
              <IconButton size='small' component={Link} sx={{ mr: 1 }} href={coinInfo.urls.twitter[0] ?? '#'}>
                <Icon icon='mdi:twitter'></Icon>
              </IconButton>
              <IconButton size='small' component={Link} sx={{ mr: 1 }} href={coinInfo.urls.facebook[0] ?? '#'}>
                <Icon icon='mdi:facebook-box'></Icon>
              </IconButton>
              <IconButton size='small' component={Link} sx={{ mr: 1 }} href={coinInfo.urls.source_code[0] ?? '#'}>
                <Icon icon='mdi:github'></Icon>
              </IconButton>
              <IconButton size='small' component={Link} sx={{ mr: 1 }} href={coinInfo.urls.technical_doc[0] ?? '#'}>
                <Icon icon='mdi:file-document'></Icon>
              </IconButton>
            </Box>
          </Card>
        </Grid>
      )}
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
