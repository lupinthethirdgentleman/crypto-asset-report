import React from 'react'
import { Card } from '@mui/material'
import { SymbolInfo } from 'react-ts-tradingview-widgets'

const SymbolOverView = () => {
  return (
    <Card>
      <SymbolInfo colorTheme='light' autosize symbol='ETH'></SymbolInfo>
    </Card>
  )
}

export default SymbolOverView
