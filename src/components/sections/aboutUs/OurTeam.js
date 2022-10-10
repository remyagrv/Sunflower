import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Carousal from './Carousal';


function OurTeam() {
  return (
      <Flex 
      flexDirection={'column'}  overflow={'hidden'}>
        <Flex width={'100%'} justifyContent='end'>
        <Text
        zIndex={2}
          className="heading "
          mr={{ base: "3%", md: "8%", lg: "8%" }}
          textAlign="right"
          my="30px"
          fontSize={{ base: "30", md: "33px", lg: "43px" }}
          maxW={{ base: "300px", md: "900px", lg: "900px" }}
          fontWeight="bold"
        >
          Meet Our Team
        </Text>
        <Text
          className="heading "
          mr={{ base: "5%", md: "10%", lg: "16%" }}
          textAlign="right"
          position="absolute"
          zIndex={1}
          color={"rgba(221, 221, 221, 0.51)"}
          mt={{ base: "12%", md: "5%", lg: "3%" }}
          maxW={{ base: "300px", md: "900px", lg: "900px" }}
          fontSize={{ base: "32px", md: "43px", lg: "53px" }}
          fontWeight="bold"
        >
          Meet Our Team
        </Text>
      </Flex>
        <Flex flexDirection={"column"} justifyContent={"center"} width={"100%"}>

          <Flex   p={1}>
            <Carousal />
          </Flex>
           
        </Flex>
        </Flex>
  )
}

export default OurTeam