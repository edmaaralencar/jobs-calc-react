import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  useToast
} from '@chakra-ui/react'
import Input from 'components/Form/Input'
import Header from 'components/Header'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { logout, updateProfile } from 'features/auth/authSlice'

import formatCurrency from 'utils/format'
import { FiLogOut } from 'react-icons/fi'

const profileSchema = yup.object().shape({
  name: yup.string().trim(),
  avatar_img: yup.string().trim(),
  monthly_income: yup
    .number()
    .typeError('Quantidade deve ser um número')
    .required('Quanto ganhar por mês é obrigatório'),
  hours_per_day: yup
    .number()
    .typeError('Quantidade deve ser um número')
    .required('Horas por dia é obrigatório'),
  days_per_week: yup
    .number()
    .typeError('Quantidade deve ser um número')
    .required('Dias por semana é obrigatório'),
  vacation_per_year: yup
    .number()
    .typeError('Quantidade deve ser um número')
    .required('Semenas de férias é obrigatório')
})

const Profile = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state: RootStateOrAny) => state.auth)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({ resolver: yupResolver(profileSchema) })
  const toast = useToast()

  const handleProfile: SubmitHandler<FieldValues> = values => {
    console.log(values)

    const formData = {
      days_per_week: values.days_per_week,
      hours_per_day: values.hours_per_day,
      monthly_income: values.monthly_income,
      vacation_per_year: values.vacation_per_year,
      avatar_img: values.avatar_img === '' ? user.avatar_img : values.avatar_img
    }
    dispatch(updateProfile(formData))
    toast({
      title: 'Conta atualizada com sucesso.',
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'top-right'
    })
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Box>
      <Header title="Meu Perfil" />

      <Flex
        as="form"
        mx="auto"
        width="100%"
        maxW={1240}
        gap={['60px', '40px', '50px', 110]}
        px="8"
        flexDir={['column', 'column', 'row']}
        mb={6}
        onSubmit={handleSubmit(handleProfile)}
      >
        <Flex
          borderRadius="5px"
          flexDir="column"
          justify="center"
          align="center"
          bg="shapes.box"
          py="40px"
          px="54"
          minW={350}
        >
          <Avatar
            w={180}
            h={180}
            name="Dan Abrahmov"
            src={
              'avatar_img' in user
                ? user?.avatar_img
                : 'https://bit.ly/dan-abramov'
            }
          />

          <Text
            textAlign="center"
            fontSize="28px"
            color="text.h1"
            mt="24px"
            mb={14}
            fontWeight="600"
          >
            {user?.name}
          </Text>

          <Text textAlign="center" color="text.h1" fontSize="20px">
            O valor da sua hora é <br />
            <Text as="span" fontWeight="600">
              {'value_hour' in user
                ? `${formatCurrency(Number(user?.value_hour?.toFixed(0)))} `
                : 'R$ 00,00 '}
              reais
            </Text>
          </Text>

          <HStack align="flex-end" w="100%" gap={2}>
            <Button
              bg="green.400"
              color="white"
              size="lg"
              w="100%"
              _hover={{ bg: '#1f6c1f' }}
              type="submit"
              mt={6}
              fontWeight="500"
              px={4}
              isLoading={isSubmitting}
            >
              Salvar Dados
            </Button>
            <IconButton
              onClick={handleLogout}
              size="lg"
              aria-label="Delete project"
              icon={<FiLogOut size={24} />}
            />
          </HStack>
        </Flex>

        <Flex flexDir="column" w={['100%', '100%', 640]}>
          <Text fontSize="32px" color="text.h1" fontWeight="600">
            Dados do perfil
          </Text>

          <Divider borderColor="rgba(225, 227, 229, 1)" mt="16px" mb="32px" />

          <Stack direction={['column', 'row', 'column', 'row']} gap={[8, 8, 6]}>
            <Input
              placeholder="Nome"
              error={errors.name}
              {...register('name')}
            />
            <Input
              placeholder="Link da foto"
              error={errors.avatar_img}
              {...register('avatar_img')}
            />
          </Stack>

          <Text mt={14} fontSize="32px" color="text.h1" fontWeight="600">
            Planejamento
          </Text>

          <Divider borderColor="rgba(225, 227, 229, 1)" mt={4} mb={8} />

          <Stack
            mb={6}
            direction={['column', 'row', 'column', 'row']}
            gap={[8, 8, 6]}
          >
            <Input
              label="Quanto eu quero ganhar por mês?"
              type="number"
              error={errors.monthly_income}
              {...register('monthly_income')}
            />
            <Input
              label="Quantas horas quero trabalhar por dia?"
              type="number"
              error={errors.hours_per_day}
              {...register('hours_per_day')}
            />
          </Stack>

          <Stack direction={['column', 'row', 'column', 'row']} gap={[8, 8, 6]}>
            <Input
              label="Quantos dias quero trabalhar por semana?"
              type="number"
              error={errors.days_per_week}
              {...register('days_per_week')}
            />
            <Input
              label="Quantas semanas por ano você quer de férias?"
              type="number"
              error={errors.vacation_per_year}
              {...register('vacation_per_year')}
            />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Profile
