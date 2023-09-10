'use client'

import { TextInput as MTextInput } from '@mantine/core'
import { FC } from 'react'
import { useController, useFormContext } from 'react-hook-form'

import { TextInputProps as Props } from './TextInput.types'
import classes from './styles.module.css'

const TextInput: FC<Props> = props => {
  const { size = 'xl', type = 'number' } = props
  const { name, ...rest } = props
  const { control } = useFormContext()
  const { field } = useController({ name, control })
  const { value, onChange } = field

  return (
    <MTextInput
      {...{ size, type }}
      {...{ value, onChange }}
      {...rest}
      classNames={classes}
    />
  )
}

export default TextInput
