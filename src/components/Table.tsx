import {
  Table as ChakraTable,
  Tbody,
  Tr,
  Td,
  VStack,
  HStack,
  IconButton,
  Text,
  Box
} from '@chakra-ui/react'
import { deleteJob, getJobs } from 'features/job/jobSlice'
import { useEffect } from 'react'

import { FiEdit3, FiTrash } from 'react-icons/fi'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import formatCurrency from 'utils/format'
import remainingDays from 'utils/remainingDays'

const Table = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { jobs } = useSelector((state: RootStateOrAny) => state.jobs)

  const handleDeleteJob = (jobId: string) => {
    dispatch(deleteJob(jobId))
  }

  useEffect(() => {
    dispatch(getJobs())
  }, [])

  return (
    <Box maxWidth={1240} width="100%" mx="auto" overflowX="auto">
      <ChakraTable minWidth={1050} variant="simple">
        <Tbody>
          {jobs?.map((job: any, index: number) => (
            <Tr
              borderBottom="8px"
              borderColor="#F0F2F5"
              borderRadius="10px"
              bg="shapes.box"
              width="100%"
              key={index}
            >
              <Td py={12} width="2">
                <Text fontSize="16px" color="text.complement">
                  {index}
                </Text>
              </Td>
              <Td>
                <Text color="text.h1" fontSize="24px" fontWeight="600">
                  {job.title}
                </Text>
              </Td>
              <Td>
                <VStack align="flex-start">
                  <Text
                    color="text.complement"
                    fontSize="16px"
                    fontWeight="600"
                  >
                    Prazo
                  </Text>
                  <Text color="text.h2" fontSize="18px" fontWeight="600">
                    {remainingDays(job) === 0
                      ? 'Encerrado'
                      : `${remainingDays(job)} dias para entrega`}
                  </Text>
                </VStack>
              </Td>
              <Td>
                <VStack align="flex-start">
                  <Text
                    color="text.complement"
                    fontSize="16px"
                    fontWeight="600"
                  >
                    Valor
                  </Text>
                  <Text color="text.h2" fontSize="18px" fontWeight="600">
                    {formatCurrency(job.budget)}
                  </Text>
                </VStack>
              </Td>
              <Td>
                <Text
                  color="green.400"
                  fontWeight="600"
                  bg="shapes.greenlow"
                  py={3}
                  px={8}
                  borderRadius={20}
                  display="inline-block"
                >
                  {remainingDays(job) !== 0 && 'Em progresso'}
                </Text>
              </Td>
              <Td>
                <HStack>
                  <IconButton
                    variant="outline"
                    aria-label="Search database"
                    icon={<FiEdit3 />}
                    onClick={() => navigate(`/edit-job/${job._id}`)}
                  />
                  <IconButton
                    variant="outline"
                    aria-label="Search database"
                    icon={<FiTrash />}
                    onClick={() => handleDeleteJob(job._id)}
                  />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    </Box>
  )
}

export default Table
