import React from 'react'
import { Card } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { SymbolInfo } from 'react-ts-tradingview-widgets'

interface Props {
  symbol: string // or whatever type symbol should be
}

const SymbolOverView: React.FC<Props> = ({ symbol }) => {
  const theme = useTheme()

  return (
    <Card>
      <SymbolInfo colorTheme={theme.palette.mode} autosize symbol={symbol}></SymbolInfo>
    </Card>
  )
}

export default SymbolOverView
