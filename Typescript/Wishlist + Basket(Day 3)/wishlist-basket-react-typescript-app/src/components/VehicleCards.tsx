import { Card,  CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Container, Flex } from '@chakra-ui/react'
import Furnitures from '../models/Storage'
const VehicleCards = () => {
    

  

  return (
    <>

<Container maxW='7xl'>

  <Flex marginTop={"10px"}>
  <Button variant='solid' colorScheme='blue'>
       Basket
       </Button>
      
  </Flex>

<Flex marginTop={"10px"} columnGap={"10px"}>

{Furnitures.map((furniture,index)=>{
   return <Card key={index} maxW='sm'>
   <CardBody>
     <Image
       src={furniture.getImage}
       alt='Green double couch with wooden legs'
       borderRadius='lg'
     />
     <Stack mt='6' spacing='3'>
       <Heading size='md'>{furniture.getName}</Heading>
       <Text>
       {furniture.getDescription}
       </Text>
       <Text color='blue.600' fontSize='2xl'>
         $450
       </Text>
     </Stack>
   </CardBody>
   <Divider />
   <CardFooter>
     <ButtonGroup spacing='2'>
       <Button variant='solid' colorScheme='blue'>
        Add to Cart
       </Button>
      
     </ButtonGroup>
   </CardFooter>
 </Card>
})} 

    </Flex>
    </Container>   
    </>
  )
}

export default VehicleCards