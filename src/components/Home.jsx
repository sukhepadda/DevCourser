import { Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import React from 'react'
import { CgGoogle, CgYoutube } from "react-icons/cg"
import { SiCoursera, SiUdemy } from "react-icons/si"
import { DiAws } from "react-icons/di"
import vg from "../assets/images/bg.png"

import "./home.css"

function Home() {
  return (
    <section className='home'>
      <div className="container">
        <Stack
          direction={["column", "row"]}
          height="100%"
          justifyContent={["center", "space-between"]}
          alignItems={"center"}
          spacing={['16', '56']}
        >
          <VStack
            width={"full"}
            alignItems={["center", "flex-end"]}
          >
            <Heading children={"Learn From the Experts"} size={"2xl"} />
            <Text children={"Destination to all Your Learnings is Here!"} />
            <Link to={"/courses"} >
              <Button size={"lg"} colorScheme='yellow'>
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image className='vector-graphics' boxSize={"sm"} src={vg} objectFit={"contain"} />

        </Stack>
      </div>

      <Box padding={"8"} bg="blackAlpha.800">
        <Heading
          children={"OUR BRANDS"}
          textAlign={"center"}
          fontFamily={"body"}
          color={"yellow.400"}
        />

        <HStack className={"brandsBanner"}>
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>

      </Box>

    </section>)
}

export default Home