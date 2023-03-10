import { Box, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Projects = ({data}) => {
    console.log(data)
  return (
    <Box display="grid" gridTemplateColumns={"repeat(2,1fr)"} gap="30px" w={"80%"} margin="auto">


{

data.items.map((el) => <Box key={el.id}>

<Link href={el.url}>
<Heading fontSize={"25px"} >{el.name} </Heading>
</Link>
{/* <Heading>{el.full_name} </Heading> */}
<Text>Description:{el.description}</Text>
<Text fontSize={"20px"}>Size:{el.size}</Text>
<Text fontSize={"20px"}>Star Count : {el.stargazers_count}</Text>

<Text fontSize={"20px"} >forks:{el.forks}</Text>
<Text fontSize={"20px"} >Language:{el.language}</Text>


</Box>)





}





    </Box>
  )
}

export async function getServerSideProps(){
    let res= await fetch("http://localhost:8080/projects")
   let d= await res.json()
  
   return{
    props:{
      data:d
    }
   }
  
  
  }






export default Projects