import { AppShell, Box, Center, Group, Image, Stack, Text, Title } from '@mantine/core'
import NextImage from 'next/image'

import iconAge from '@/assets/images/icon-age.svg'
import iconEating from '@/assets/images/icon-eating.svg'
import iconExercise from '@/assets/images/icon-exercise.svg'
import iconGender from '@/assets/images/icon-gender.svg'
import iconMuscle from '@/assets/images/icon-muscle.svg'
import iconPregnancy from '@/assets/images/icon-pregnancy.svg'
import iconRace from '@/assets/images/icon-race.svg'
import iconSleep from '@/assets/images/icon-sleep.svg'
import imageManEating from '@/assets/images/image-man-eating.webp'
import logo from '@/assets/images/logo.svg'
import Form from './_components/Form'

const HEALTH_PILLARS = [
  {
    icon: iconEating,
    label: 'Healthy eating',
    description:
      'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.',
  },
  {
    icon: iconExercise,
    label: 'Regular exercise',
    description:
      'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.',
  },
  {
    icon: iconSleep,
    label: 'Adequate sleep',
    description:
      'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.',
  },
]

const LIMITATIONS = [
  {
    icon: iconGender,
    label: 'Gender',
    description:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    icon: iconAge,
    label: 'Age',
    description:
      'In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.',
  },
  {
    icon: iconMuscle,
    label: 'Muscle',
    description:
      "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  {
    icon: iconPregnancy,
    label: 'Pregnancy',
    description:
      'Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.',
  },
  {
    icon: iconRace,
    label: 'Race',
    description:
      'Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.',
  },
]

const Home = () => {
  return (
    <AppShell>
      <Box
        p={24}
        pt={32}
        bg='linear-gradient(290deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 100%)'
        style={{ borderRadius: ' 0px 0px 35px 35px' }}
        mah={640}
      >
        <Center>
          <Image component={NextImage} src={logo} w={40} h={40} alt='logo' />
        </Center>
        <Stack gap={24} mt={24}>
          <Title ta='center' c='crowBlack' fz={48} fw={600} lts={-2.4} lh='110%'>
            Body Mass Index Calculator
          </Title>
          <Text ta='center' c='sausalitoPort'>
            Better understand your weight in relation to your height using our body mass
            index (BM) calculator. While BMI is not the sole determinant of a healthy
            weight, it offers a valuable starting point to evaluate your overall health
            and well-being.
          </Text>
        </Stack>
        <Box
          bg='white'
          mt={48}
          p={24}
          style={{
            borderRadius: 16,
            boxShadow: '16px 32px 56px 0px rgba(143, 174, 207, 0.25)',
          }}
        >
          <Stack gap={24}>
            <Text c='crowBlack' fz={24} fw={600} lts={-1.2}>
              Enter your details below
            </Text>
            <Form />
          </Stack>
        </Box>
      </Box>

      <Stack mt={550}>
        <Image
          component={NextImage}
          src={imageManEating}
          fit='contain'
          mb={48}
          w='auto'
          h='auto'
          alt='man eating'
        />
        <Stack gap={32} px={24}>
          <Text fz={32} fw={600} c='crowBlack' lh='110%'>
            What your BMI result means
          </Text>
          <Text c='sausalitoPort'>
            A BMI range of 18.5 to 24.9 is considered a &apos;healthy weight.&apos;
            Maintaining a healthy weight may lower your chances of experiencing health
            issues later on, such as obesity and type 2 diabetes. Aim for a nutritious
            diet with reduced fat and sugar content, incorporating ample fruits and
            vegetables. Additionally, strive for regular physical activity, ideally about
            30 minutes daily for five days a week.
          </Text>
        </Stack>
      </Stack>
      <Stack
        px={24}
        py={56}
        gap={40}
        mt={72}
        bg='linear-gradient(290deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 100%)'
      >
        {HEALTH_PILLARS.map((pillar, index) => {
          const { icon, label, description } = pillar

          return (
            <Stack key={index} gap={32}>
              <Image component={NextImage} src={icon} w={64} h={64} alt={label} />
              <Stack gap={24}>
                <Text c='crowBlack' fz={24} fw={600}>
                  {label}
                </Text>
                <Text c='sausalitoPort'>{description}</Text>
              </Stack>
            </Stack>
          )
        })}
      </Stack>
      <Stack gap={56} mt={72} px={24}>
        <Stack gap={32}>
          <Text c='crowBlack' ta='center' fz={32} fw={600} lts={-1.6}>
            Limitations of BMI
          </Text>
          <Text c='sausalitoPort' ta='center'>
            Although BMI is often a practical indicator of healthy weight, it is not
            suited for every person. Specific groups should carefully consider their BMI
            outcomes, and in certain cases, the measurement may not be beneficial to use.
          </Text>
        </Stack>
        <Stack gap={16} pb={96}>
          {LIMITATIONS.map((limitation, index) => {
            const { icon, label, description } = limitation

            return (
              <Stack
                key={index}
                p={24}
                style={{
                  borderRadius: 16,
                  boxShadow: '16px 32px 56px 0px rgba(143, 174, 207, 0.25)',
                }}
                bg='white'
              >
                <Stack gap={16}>
                  <Group gap={16}>
                    <Image component={NextImage} src={icon} w={32} h={32} alt={label} />
                    <Text c='crowBlack' fz={20} fw={600}>
                      {label}
                    </Text>
                  </Group>
                  <Text c='sausalitoPort'>{description}</Text>
                </Stack>
              </Stack>
            )
          })}
        </Stack>
      </Stack>
    </AppShell>
  )
}

export default Home
