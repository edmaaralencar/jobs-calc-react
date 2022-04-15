import { Button, Flex, VStack, Link, Heading, useToast } from '@chakra-ui/react'

import { Link as RouterLink } from 'react-router-dom'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'

import Input from 'components/Form/Input'
import Logo from 'components/Logo'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { login } from 'features/auth/authSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const loginSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({ resolver: yupResolver(loginSchema) })

  const toast = useToast()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, message, isError, isSuccess } = useSelector(
    (state: RootStateOrAny) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast({
        title: 'Erro ao logar.',
        description: message,
        status: 'error',
        duration: 1000,
        isClosable: true,
        position: 'top-right'
      })
    }

    if (user || isSuccess) {
      toast({
        title: 'Conta logada.',
        description: 'Login feito com sucesso.',
        status: 'success',
        duration: 1000,
        isClosable: true,
        position: 'bottom-right'
      })
      window.location.href = '/'
    }
  }, [isError, isSuccess, message, navigate, toast, user])

  const handleLogin: SubmitHandler<FieldValues> = values => {
    const userData = {
      email: values.email,
      password: values.password
    }

    dispatch(login(userData))
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
        onSubmit={handleSubmit(handleLogin)}
      >
        <Logo color="black" />
        <Heading color="#6D6D80" mt="4">
          Login
        </Heading>
        <VStack gap={4} mt="8" mb="4" width="100%">
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
          <Button
            type="submit"
            colorScheme="green"
            isFullWidth
            size="lg"
            isLoading={isSubmitting}
          >
            Login
          </Button>
          <Link
            textAlign="center"
            color="text.h2"
            as={RouterLink}
            to="/register"
          >
            Não possui uma conta? Faça seu cadastro
          </Link>
        </VStack>
      </Flex>
    </Flex>
  )
}

export default Login
