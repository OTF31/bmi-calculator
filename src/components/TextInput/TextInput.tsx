'use client'

import { TextInput as MTextInput } from '@mantine/core'
import { FC } from 'react'

import { TextInputProps as Props } from './TextInput.types'
import classes from './styles.module.css'

const TextInput: FC<Props> = props => {
  const { size = 'xl', type = 'number' } = props
  const { ...rest } = props

  return <MTextInput {...{ size, type }} {...rest} classNames={classes} />
}

export default TextInput
