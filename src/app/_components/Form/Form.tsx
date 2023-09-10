'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Group, RadioGroup, Stack, Text, rem } from '@mantine/core'
import { useCallback, useEffect, useState } from 'react'
import { Controller, FormProvider, useForm, useWatch } from 'react-hook-form'
import * as yup from 'yup'

import Radio from '@/components/Radio'
import TextInput from '@/components/TextInput'
import { IForm } from './Form.types'

const schema = yup.object().shape({
  system: yup.string().required(),
  cm: yup.string().when('system', {
    is: (val: string) => val === 'metric',
    then: schema => schema.required(),
  }),
  kg: yup.string().when('system', {
    is: (val: string) => val === 'metric',
    then: schema => schema.required(),
  }),
  ft: yup.string().when('system', {
    is: (val: string) => val === 'imperial',
    then: schema => schema.required(),
  }),
  in: yup.string().when('system', {
    is: (val: string) => val === 'imperial',
    then: schema => schema.required(),
  }),
  st: yup.string().when('system', {
    is: (val: string) => val === 'imperial',
    then: schema => schema.required(),
  }),
  lbs: yup.string().when('system', {
    is: (val: string) => val === 'imperial',
    then: schema => schema.required(),
  }),
})

const getRange = (bmi: number) => {
  if (bmi < 18.5) return 'underweight'
  else if (bmi >= 18.5 && bmi <= 24.9) return 'healthy weight'
  else if (bmi >= 25 && bmi <= 29.9) return 'overweight'
  else return 'obese'
}

const getIdealWeight = (
  system: string,
  bmi: number,
  cm: number,
  ft: number,
  inches: number
) => {
  if (system === 'metric') {
    const height = cm / 100

    const minKg = (18.5 * height ** 2).toFixed(1)
    const maxKg = (24.9 * height ** 2).toFixed(1)

    return `${minKg}kgs - ${maxKg}kgs`
  } else {
    const height = ft * 12 + inches
    const heightInMeters = height * 0.0254

    const minKg = (18.5 * heightInMeters ** 2).toFixed(1)
    const maxKg = (24.9 * heightInMeters ** 2).toFixed(1)

    const minSt = Math.floor(Number(minKg) / 6.35029318)
    const minLbs = Math.round((Number(minKg) / 6.35029318 - minSt) * 14)
    const maxSt = Math.floor(Number(maxKg) / 6.35029318)
    const maxLbs = Math.round((Number(maxKg) / 6.35029318 - maxSt) * 14)

    return `${minSt}st ${minLbs}lbs - ${maxSt}st ${maxLbs}lbs`
  }
}

const Form = () => {
  const methods = useForm<IForm | any>({
    defaultValues: { system: 'metric', cm: '', kg: '', ft: '', in: '', st: '', lbs: '' },
    resolver: yupResolver(schema),
  })
  const { handleSubmit, watch, resetField, getValues } = methods
  const [bmi, setBmi] = useState('')

  const onSubmit = useCallback(
    (data: IForm) => {
      const { system } = data
      if (system === 'metric') {
        const { cm, kg } = data
        const bmi = (Number(kg) / (Number(cm) / 100) ** 2).toFixed(1)

        setBmi(bmi)
      } else {
        const { ft, in: inch, st, lbs } = data
        const height = Number(ft) * 12 + Number(inch)
        const weight = Number(st) * 14 + Number(lbs)
        const bmi = ((weight * 703) / height ** 2).toFixed(1)

        setBmi(bmi)
      }
    },
    [setBmi]
  )

  const onError = () => setBmi('')

  useEffect(() => {
    const subscription = watch(handleSubmit(onSubmit, onError))

    return () => subscription.unsubscribe()
  }, [handleSubmit, watch, onSubmit])

  return (
    <>
      <Controller
        name='system'
        control={methods.control}
        render={({ field }) => {
          const { value, onChange } = field

          return (
            <RadioGroup
              name='system'
              {...{ value }}
              onChange={value => {
                resetField('cm')
                resetField('kg')
                resetField('ft')
                resetField('in')
                resetField('st')
                resetField('lbs')
                onChange(value)
              }}
            >
              <Group gap={24} justify='space-between' wrap='nowrap'>
                <Radio value='metric' label='Metric' />
                <Radio value='imperial' label='Imperial' />
              </Group>
            </RadioGroup>
          )
        }}
      />
      <FormProvider {...methods}>
        <Stack gap={16}>
          {watch('system') === 'metric' ? (
            <>
              <TextInput name='cm' label='Height' placeholder='0' rightSection='cm' />
              <TextInput name='kg' label='Weight' placeholder='0' rightSection='kg' />
            </>
          ) : (
            <>
              <Group gap={16} wrap='nowrap'>
                <TextInput name='ft' label='Height' placeholder='0' rightSection='ft' />
                <TextInput
                  name='in'
                  placeholder='0'
                  styles={{ input: { marginTop: rem(30) } }}
                  rightSection='in'
                />
              </Group>
              <Group gap={16} wrap='nowrap'>
                <TextInput name='st' label='Weight' placeholder='0' rightSection='st' />
                <TextInput
                  name='lbs'
                  placeholder='0'
                  rightSection='lbs'
                  styles={{ input: { marginTop: rem(30) } }}
                />
              </Group>
            </>
          )}
        </Stack>
      </FormProvider>
      <Box
        p={32}
        bg='linear-gradient(90deg, #345FF6 0%, #587DFF 100%)'
        style={{ borderRadius: 16 }}
      >
        {bmi === '' ? (
          <Stack gap={16}>
            <Text fw={600} fz={24}>
              Welcome!
            </Text>
            <Text fz={14}>
              Enter your height and weight and you’ll see your BMI result here
            </Text>
          </Stack>
        ) : (
          <Stack gap={24}>
            <Stack gap={8}>
              <Text fw={600}>Your BMI is...</Text>
              <Text fw={600} fz={48}>
                {bmi}
              </Text>
            </Stack>
            <Text fz={14}>
              Your BMI suggests you&apos;re {getRange(Number(bmi))}. Your ideal weight is
              between{' '}
              <Text component='span' fw={700}>
                {getIdealWeight(
                  getValues('system'),
                  Number(bmi),
                  Number(getValues('cm')),
                  Number(getValues('ft')),
                  Number(getValues('in'))
                )}
                .
              </Text>
            </Text>
          </Stack>
        )}
      </Box>
    </>
  )
}

export default Form
