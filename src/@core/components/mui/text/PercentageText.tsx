import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { ColorProps, PercentageTextProps } from './types'
import useBgColor from 'src/@core/hooks/useBgColor'

const PercentageText: React.FC<PercentageTextProps> = props => {
  const bgColors = useBgColor()
  const [color, setColor] = useState<ColorProps>(bgColors.successLight)
  const [percentage, setPercentage] = useState<string>('')

  useEffect(() => {
    const calculatePercentage = () => {
      const percent: number = props.percent * 100
      if (percent < 0) {
        setColor(bgColors.errorLight)
      }
      setPercentage(percent.toFixed(2))
    }

    calculatePercentage()
  }, [props.percent, bgColors.errorLight, bgColors.successLight])

  return (
    <Typography variant={props.size} sx={{ color: color.color }}>
      {percentage}%
    </Typography>
  )
}

export default PercentageText
