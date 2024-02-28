import React, { useState } from 'react'
import { Typography } from '@mui/material'
import { ColorProps, PercentageTextProps } from './types'
import useBgColor from 'src/@core/hooks/useBgColor'

const PercentageText: React.FC<PercentageTextProps> = props => {
  const bgColors = useBgColor()
  const [percentage] = useState<string>((props.percent * 100).toFixed(2))
  const [color] = useState<ColorProps>(props.percent > 0 ? bgColors.successLight : bgColors.errorLight)

  return (
    <Typography variant={props.size} sx={{ color: color.color }}>
      {percentage}%
    </Typography>
  )
}

export default PercentageText
