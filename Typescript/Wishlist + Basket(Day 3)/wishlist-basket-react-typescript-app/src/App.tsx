import { ChakraProvider } from '@chakra-ui/react'
import VehicleCards from './components/VehicleCards'

function App() {


  return (
    <>
     <ChakraProvider>
       <VehicleCards/>
    </ChakraProvider>
    </>
  )
}

export default App
