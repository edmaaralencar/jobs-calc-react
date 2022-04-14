import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
  useToast
} from '@chakra-ui/react'

import { FiTrash } from 'react-icons/fi'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'

import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'

import Input from 'components/Form/Input'
import Header from 'components/Header'

import { createJob } from 'features/job/jobSlice'
import { useNavigate } from 'react-router-dom'

const createJobSchema = yup.object().shape({
  title: yup.string().required('Título do job é obrigatório'),
  daily_hours: yup.string().required('Horas por dia obrigatório'),
  total_hours: yup.string().required('Horas para finalizar obrigatório')
})

const CreateJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({ resolver: yupResolver(createJobSchema) })
  const dispatch = useDispatch()
  const toast = useToast()
  const navigate = useNavigate()
  const { user } = useSelector((state: RootStateOrAny) => state.auth)

  const handleCreateJob: SubmitHandler<FieldValues> = values => {
    const formData = {
      title: values.title,
      daily_hours: Number(values.daily_hours),
      total_hours: Number(values.total_hours)
    }

    if (user.value_hour !== 0) {
      dispatch(createJob(formData))
      toast({
        title: 'Job criado.',
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'bottom-right'
      })
      navigate('/')
      return
    }

    toast({
      title: 'Erro ao criar o job.',
      description: 'Defina seu valor por hora para poder criar o job.',
      status: 'error',
      duration: 9000,
      isClosable: true,
      position: 'bottom-right'
    })
  }

  return (
    <Box>
      <Header title="Adicionar Novo Job" />

      <Flex
        as="form"
        mx="auto"
        width="100%"
        maxW={1240}
        gap={['60px', '40px', '60px', 130]}
        onSubmit={handleSubmit(handleCreateJob)}
        px="8"
        flexDir={['column', 'column', 'row']}
      >
        <Flex my="auto" flexDir="column" maxWidth={640}>
          <Text fontSize="32px" color="text.h1" fontWeight="600">
            Dados do Job
          </Text>

          <Divider borderColor="rgba(225, 227, 229, 1)" mt="16px" mb="32px" />

          <VStack gap="24px">
            <Input
              label="Nome do Job"
              error={errors.title}
              {...register('title')}
            />

            <Grid
              templateColumns={['1fr', '1fr', '1fr', '1fr 1fr']}
              gap="24px"
              width="100%"
              alignItems="flex-end"
            >
              <Input
                label="Quantas horas por dia você vai dedicar ao Job?"
                error={errors.daily_hours}
                {...register('daily_hours')}
              />
              <Input
                label="Estimativa de horas para finalizar esse job"
                error={errors.total_hours}
                {...register('total_hours')}
              />
            </Grid>
          </VStack>
        </Flex>

        <Flex
          borderRadius="5px"
          flexDir="column"
          justify="center"
          align="center"
          bg="shapes.box"
          py="40px"
          px="54"
        >
          <Image
            src={require('../assets/earning.png')}
            alt="Imagem"
            w="200px"
            h="100px"
          />

          <Text
            textAlign="center"
            fontSize="18px"
            color="text.h1"
            mt="24px"
            mb="40px"
          >
            Preencha os dados ao lado para ver o valor do projeto
          </Text>

          <HStack w="100%" gap={4}>
            <Button
              bg="green.400"
              color="white"
              size="lg"
              w="100%"
              _hover={{ bg: '#1f6c1f' }}
              type="submit"
              isLoading={isSubmitting}
            >
              Salvar
            </Button>
            <IconButton
              onClick={() => reset()}
              size="lg"
              aria-label="Delete project"
              icon={<FiTrash size={24} />}
            />
          </HStack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default CreateJob
