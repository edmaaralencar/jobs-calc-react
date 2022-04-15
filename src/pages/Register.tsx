import { Button, Flex, VStack, Link, Heading, useToast } from '@chakra-ui/react'

import { Link as RouterLink, useNavigate } from 'react-router-dom'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'

import Input from 'components/Form/Input'
import Logo from 'components/Logo'
import api from 'services/api'

const registerSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
  confirm_password: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
})

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({ resolver: yupResolver(registerSchema) })
  const navigate = useNavigate()
  const toast = useToast()

  const handleRegister: SubmitHandler<FieldValues> = async values => {
    const formData = {
      name: values.name,
      email: values.email,
      password: values.password
    }

    await api.post('/users/signup', formData)

    toast({
      title: 'Conta criada com sucesso.',
      description: 'Você será redirecionado para a página de login.',
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'bottom-right'
    })
    navigate('/login')
  }

  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={440}
        borderBottom="8px"
        borderColor="#F0F2F5"
        borderRadius="10px"
        bg="shapes.box"
        p="8"
        flexDir="column"
        align="center"
        onSubmit={handleSubmit(handleRegister)}
      >
        <Logo color="black" />
        <Heading color="#6D6D80" mt="4">
          Registro
        </Heading>
        <VStack gap={4} mt="8" mb="4" width="100%">
          <Input
            label="Nome completo"
            type="text"
            error={errors.name}
            {...register('name')}
          />
          <Input
            label="E-mail"
            type="email"
            error={errors.email}
            {...register('email')}
          />
          <Input
            label="Senha"
            type="password"
            error={errors.password}
            {...register('password')}
          />
          <Input
            label="Confirmar Senha"
            type="password"
            error={errors.confirm_password}
            {...register('confirm_password')}
          />
          <Button
            type="submit"
            colorScheme="green"
            isFullWidth
            size="lg"
            isLoading={isSubmitting}
          >
            Registro
          </Button>
          <Link textAlign="center" color="text.h2" as={RouterLink} to="/login">
            Já possui uma conta? Faça seu login
          </Link>
        </VStack>
      </Flex>
    </Flex>
  )
}

export default Register
