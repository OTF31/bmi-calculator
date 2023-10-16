import {
  AppShell,
  Box,
  Flex,
  Grid,
  GridCol,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core'
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
import classes from './styles.module.css'

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
      <Flex
        p={24}
        pt={{ base: 32, xl: 75 }}
        bg='linear-gradient(290deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 100%)'
        style={{ borderRadius: ' 0px 0px 35px 35px' }}
        h={{ base: 640, xl: 715 }}
        direction={{ base: 'column', xl: 'row' }}
        maw={{ xl: 978 }}
        ml={{ xl: 24 }}
        pos='relative'
      >
        <Flex
          direction='column'
          gap={{ base: 24, sm: 40, xl: 130 }}
          align={{ base: 'center', xl: 'flex-start' }}
          pl={{ xl: 115 }}
          maw={{ xl: 600 }}
        >
          <Image component={NextImage} src={logo} w={40} h={40} alt='logo' />
          <Stack gap={24} mt={24}>
            <Title
              ta={{ base: 'center', xl: 'start' }}
              c='crowBlack'
              fz={{ base: 48, xl: 64 }}
              fw={600}
              lts={-2.4}
              lh='110%'
            >
              Body Mass Index Calculator
            </Title>
            <Text ta={{ base: 'center', xl: 'start' }} c='sausalitoPort'>
              Better understand your weight in relation to your height using our body mass
              index (BM) calculator. While BMI is not the sole determinant of a healthy
              weight, it offers a valuable starting point to evaluate your overall health
              and well-being.
            </Text>
          </Stack>
        </Flex>
        <Box
          bg='white'
          mt={{ base: 48, xl: 160 }}
          p={24}
          style={{
            borderRadius: 16,
            boxShadow: '16px 32px 56px 0px rgba(143, 174, 207, 0.25)',
          }}
          pos={{ xl: 'absolute' }}
          right={{ xl: -280 }}
          maw={{ xl: 564 }}
        >
          <Stack gap={24}>
            <Text c='crowBlack' fz={24} fw={600} lts={-1.2}>
              Enter your details below
            </Text>
            <Form />
          </Stack>
        </Box>
      </Flex>

      <Flex
        direction={{ base: 'column', sm: 'row' }}
        mt={{ base: 550, sm: 270, xl: 65 }}
        gap={{ sm: 40, xl: 130 }}
        maw={{ xl: 1160 }}
        mx='auto'
        align={{ xl: 'flex-end' }}
      >
        <Image
          component={NextImage}
          src={imageManEating}
          fit='contain'
          mb={{ base: 48, xl: 0 }}
          w={{ base: 'auto', sm: 435, xl: 564 }}
          h='auto'
          ml={{ sm: -80, xl: 0 }}
          alt='man eating'
        />
        <Stack gap={32} px={24} justify='center'>
          <Text fz={{ base: 32, xl: 48 }} fw={600} c='crowBlack' lh='110%'>
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
      </Flex>
      <Flex
        mx={{ xl: 24 }}
        px={{ base: 24, xl: 115 }}
        py={{ base: 56, xl: 72 }}
        gap={40}
        mt={{ base: 72, sm: 60 }}
        direction={{ base: 'column', xl: 'row' }}
        bg='linear-gradient(290deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 100%)'
        classNames={{ root: classes.healthPillars }}
      >
        {HEALTH_PILLARS.map((pillar, index) => {
          const { icon, label, description } = pillar

          return (
            <Flex
              key={index}
              direction={{ base: 'column', sm: 'row' }}
              align={{ sm: 'center' }}
              gap={{ base: 32, sm: 40 }}
            >
              <Image component={NextImage} src={icon} w={64} h={64} alt={label} />
              <Stack gap={24}>
                <Text c='crowBlack' fz={24} fw={600}>
                  {label}
                </Text>
                <Text c='sausalitoPort'>{description}</Text>
              </Stack>
            </Flex>
          )
        })}
      </Flex>
      <Flex
        gap={56}
        mt={{ base: 72, sm: 96 }}
        px={24}
        direction={{ base: 'column', xl: 'row' }}
      >
        <Stack gap={32} pos={{ xl: 'absolute' }} left={140} maw={{ xl: 480 }}>
          <Text
            c='crowBlack'
            ta={{ base: 'center', xl: 'left' }}
            fz={{ base: 32, xl: 48 }}
            fw={600}
            lts={-1.6}
          >
            Limitations of BMI
          </Text>
          <Text c='sausalitoPort' ta={{ base: 'center', xl: 'left' }}>
            Although BMI is often a practical indicator of healthy weight, it is not
            suited for every person. Specific groups should carefully consider their BMI
            outcomes, and in certain cases, the measurement may not be beneficial to use.
          </Text>
        </Stack>
        <Grid
          pos={{ xl: 'absolute' }}
          right={{ xl: 0 }}
          justify='center'
          align='stretch'
          gutter={{ base: 16, sm: 20 }}
          style={{ overflow: 'visible', alignItems: 'stretch' }}
          pb={96}
          maw={{ xl: 1150 }}
        >
          {LIMITATIONS.map((limitation, index) => {
            const { icon, label, description } = limitation

            return (
              <GridCol
                key={index}
                span={{ base: 12, sm: 6, xl: 4 }}
                offset={{ xl: index === 0 ? 3 : index === 1 ? 2 : 0 }}
              >
                <Stack
                  bg='white'
                  gap={16}
                  p={24}
                  style={{
                    borderRadius: 16,
                    boxShadow: '16px 32px 56px 0px rgba(143, 174, 207, 0.25)',
                    height: '100%',
                  }}
                >
                  <Group gap={16}>
                    <Image component={NextImage} src={icon} w={32} h={32} alt={label} />
                    <Text c='crowBlack' fz={20} fw={600}>
                      {label}
                    </Text>
                  </Group>
                  <Text c='sausalitoPort'>{description}</Text>
                </Stack>
              </GridCol>
            )
          })}
        </Grid>
      </Flex>
    </AppShell>
  )
}

export default Home
