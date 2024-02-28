import React from 'react'
import { Card } from '@mui/material'
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets'

const TradingViewChart = () => {
  return (
    <Card>
      <AdvancedRealTimeChart theme='light' width={'100%'} symbol='ETH'></AdvancedRealTimeChart>
    </Card>
  )
}

export default TradingViewChart
