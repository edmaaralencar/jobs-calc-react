import {
  Box,
  Flex,
  Icon,
  Text,
  Button,
  Divider,
  Avatar,
  Link as ChakraLink
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { FiPlus } from 'react-icons/fi'
import Table from 'components/Table'
import Logo from 'components/Logo'

import { FiAlertOctagon } from 'react-icons/fi'
import { RootStateOrAny, useSelector } from 'react-redux'
import api from 'services/api'
import { useEffect, useState } from 'react'

const Home = () => {
  const { user } = useSelector((state: RootStateOrAny) => state.auth)
  const { jobs } = useSelector((state: RootStateOrAny) => state.jobs)
  const [status, setStatus] = useState<any>({})

  useEffect(() => {
    const getJobsInfo = async () => {
      const { data } = await api.get('/jobs/info')

      setStatus({ ...data.statusCount, freeHours: data.freeHours })
    }

    getJobsInfo()
  }, [jobs])

  const formatAvailableHours = (freeHours: number) => {
    if (freeHours === 1) {
      return `Você tem ${freeHours} hora livre no seu dia`
    } else if (freeHours <= 0) {
      return 'Você não tem horas disponíveis hoje'
    } else {
      return `Você tem ${freeHours} horas livres no seu dia`
    }
  }

  return (
    <Box as="main" h="100vh">
      <Flex px="8" flexDir="column" height={[450, 340, 280]} bg="main.primary">
        <Flex
          py={10}
          mx="auto"
          flexDir="row"
          justify="space-between"
          align="center"
          width="100%"
          maxWidth={1240}
        >
          <Box display={['none', 'block']}>
            <Logo />
          </Box>

          <Box display={['block', 'none']}>
            <Logo size="small" />
          </Box>

          <Flex display={['none', 'none', 'flex']} gap={2} align="center">
            <Icon as={FiAlertOctagon} color="red.500" />
            <Text color="shapes.box">
              {formatAvailableHours(status?.freeHours)}
            </Text>
          </Flex>

          <Flex gap={5} align="center">
            <Flex display={['none', 'flex']} flexDir="column" align="flex-end">
              <Text fontWeight={600} fontSize="md" color="shapes.box">
                {user?.name}
              </Text>
              <Link to="/profile">
                <Text fontSize="sm" color="text.complement">
                  Ver perfil
                </Text>
              </Link>
            </Flex>
            <Avatar
              name="Dan Abrahmov"
              display={['none', 'flex']}
              src={
                user && 'avatar_img' in user
                  ? user?.avatar_img
                  : 'https://bit.ly/dan-abramov'
              }
            />
            <Box display={['flex', 'none']}>
              <Link to="/profile">
                <Avatar
                  name="Dan Abrahmov"
                  src={
                    user && 'avatar_img' in user
                      ? user?.avatar_img
                      : 'https://bit.ly/dan-abramov'
                  }
                />
              </Link>
            </Box>
          </Flex>
        </Flex>

        <Divider
          mx="auto"
          width="100%"
          maxWidth={1240}
          borderColor="rgba(79, 79, 91, 1)"
        />

        <Flex
          justify="space-between"
          align={['flex-start', 'flex-start', 'center']}
          width="100%"
          maxWidth={1240}
          mx="auto"
          mt={8}
          flexDir={['column', 'column', 'row']}
          gap={[4, 4, 0]}
        >
          <Flex flexWrap="wrap" gap={10}>
            <Flex flexDir="column">
              <Text color="shapes.box" fontWeight="00" fontSize="24px">
                {status?.total}
              </Text>
              <Text color="text.complement" fontSize="16px">
                Projetos ao total
              </Text>
            </Flex>
            <Flex flexDir="column">
              <Text color="shapes.box" fontWeight="00" fontSize="24px">
                {status?.progress}
              </Text>
              <Text color="text.complement" fontSize="16px">
                Em andamento
              </Text>
            </Flex>
            <Flex flexDir="column">
              <Text color="shapes.box" fontWeight="00" fontSize="24px">
                {status?.done}
              </Text>
              <Text color="text.complement" fontSize="16px">
                Encerrados
              </Text>
            </Flex>
          </Flex>

          <ChakraLink
            fontSize={['12px', '14px', '16px']}
            color="white"
            gap={8}
            bg="orange.500"
            as={Link}
            to="/create-job"
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            maxWidth={265}
            p="2"
            borderRadius={6}
            fontWeight="bold"
          >
            <Flex align="center" p={1} bg="rgba(252, 253, 255, .16)">
              <Icon as={FiPlus} w={5} h={5} />
            </Flex>
            ADICIONAR NOVO JOB
          </ChakraLink>
        </Flex>
      </Flex>

      <Box mt="-24px" px={['8', '8', '8', '8', '0']}>
        <Table />
      </Box>
    </Box>
  )
}

export default Home
