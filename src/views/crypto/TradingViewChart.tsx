import React from 'react'
import { Card } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets'

interface Props {
  symbol: string // or whatever type symbol should be
}
const TradingViewChart: React.FC<Props> = ({ symbol }) => {
  const theme = useTheme()

  return (
    <Card>
      <AdvancedRealTimeChart theme={theme.palette.mode} width={'100%'} symbol={symbol}></AdvancedRealTimeChart>
    </Card>
  )
}

export default TradingViewChart
