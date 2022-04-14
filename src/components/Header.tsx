import { Flex, Grid, Icon, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'

type HeaderProps = {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <Flex mb={16} as="header" height={90} bg="main.primary">
      <Grid
        my="auto"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
        mx="auto"
        width="100%"
        maxW={1240}
        px="8"
      >
        <Link to="/">
          <Icon
            as={FiArrowLeft}
            color="text.complement"
            fontSize={[20, 40]}
            justifySelf="start"
          />
        </Link>
        <Text
          color="text.complement"
          fontSize="16px"
          fontWeight="600"
          textAlign="center"
        >
          {title}
        </Text>
      </Grid>
    </Flex>
  )
}

export default Header
