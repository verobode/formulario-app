import { Formulario } from './Components/Formulario/Formulario'
import { ChakraProvider} from '@chakra-ui/react'


function App() {


  return (    
    <>
    <ChakraProvider>
    <Formulario /> 
    </ChakraProvider>     
    </>  
  )
}

export default App
