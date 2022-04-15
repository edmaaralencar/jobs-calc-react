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
  useToast,
  Stack
} from '@chakra-ui/react'
import Header from 'components/Header'

import { useNavigate, useParams } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import Input from 'components/Form/Input'
import { FiTrash } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import api from 'services/api'

import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'

import formatCurrency from 'utils/format'
import { updateJob } from 'features/job/jobSlice'

const createJobSchema = yup.object().shape({
  title: yup.string().required('Título do job é obrigatório'),
  daily_hours: yup
    .number()
    .typeError('Quantidade de horas por dia deve ser um número')
    .required('Horas por dia obrigatório'),
  total_hours: yup
    .number()
    .typeError('Quantidade de horas total deve ser um número')
    .required('Horas para finalizar obrigatório')
})

const EditJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({ resolver: yupResolver(createJobSchema) })
  const dispatch = useDispatch()
  const { id } = useParams()
  const [job, setJob] = useState<any>({})
  const toast = useToast()
  const navigate = useNavigate()
  const { user } = useSelector((state: RootStateOrAny) => state.auth)

  const handleEditJob: SubmitHandler<FieldValues> = values => {
    dispatch(updateJob({ jobData: values, jobId: id }))

    toast({
      title: 'Job editado com sucesso.',
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'bottom-right'
    })
    navigate('/')
  }

  useEffect(() => {
    const fetchJob = async () => {
      const { data } = await api.get(`/jobs/${id}`)
      setJob(data)
    }

    fetchJob()
  }, [id])

  useEffect(() => {
    reset(job)
  }, [job])

  return (
    <Box>
      <Header title="Editar Job" />

      <Flex
        as="form"
        mx="auto"
        width="100%"
        maxW={1240}
        gap={['60px', '40px', '60px', 130]}
        onSubmit={handleSubmit(handleEditJob)}
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
                type="number"
                error={errors.daily_hours}
                {...register('daily_hours')}
              />
              <Input
                label="Estimativa de horas para finalizar esse job"
                type="number"
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
          flex="1"
        >
          <Image
            src={require('../assets/earning-green.png')}
            alt="Imagem"
            w="200px"
            h="100px"
          />

          <Text
            mt={4}
            mb={8}
            textAlign="center"
            color="text.h1"
            fontSize="20px"
          >
            O valor da sua hora é <br />
            <Text as="span" fontWeight="600">
              {formatCurrency(Number(user.value_hour?.toFixed(0)))} reais
            </Text>
          </Text>

          <Stack
            direction={['column', 'row']}
            align={['center', 'flex-end']}
            w="100%"
            gap={4}
          >
            <Button
              bg="green.400"
              color="white"
              size="lg"
              w="100%"
              _hover={{ bg: '#1f6c1f' }}
              type="submit"
              isLoading={isSubmitting}
            >
              Editar
            </Button>
            <IconButton
              onClick={() => reset()}
              size="lg"
              aria-label="Delete project"
              icon={<FiTrash size={24} />}
            />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default EditJob
