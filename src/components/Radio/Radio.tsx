'use client'

import { Radio as MRadio, rgba, useMantineTheme } from '@mantine/core'
import { FC } from 'react'

import { RadioProps as Props } from './Radio.types'
import classes from './styles.module.css'

const Radio: FC<Props> = props => {
  const { colors } = useMantineTheme()
  const { retroBlue } = colors
  const { size = 'lg', color = rgba(retroBlue[6], 0.15) } = props
  const { ...rest } = props

  return <MRadio {...{ size, color }} {...rest} classNames={classes} />
}

export default Radio
