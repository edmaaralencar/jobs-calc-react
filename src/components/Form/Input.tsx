import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

type InputProps = ChakraInputProps & {
  label?: string
  whiteVersion?: boolean
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, whiteVersion = false, error, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel
          id="891723401"
          color={whiteVersion ? 'shapes.box' : 'text.h2'}
        >
          {label}
        </FormLabel>
      )}
      <ChakraInput
        bg="shapes.box"
        variant="filled"
        border="1px"
        borderColor="shapes.corner"
        size="lg"
        ref={ref}
        focus={{ bg: 'shapes.box' }}
        _placeholder={{
          fontSize: '16px',
          fontWeight: '500',
          color: 'text.complement'
        }}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

const Input = forwardRef(InputBase)

export default Input
