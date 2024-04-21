// Landing page for a band's touring website
import { Box, Flex, Heading, Text, Button, Image, VStack, Link } from "@chakra-ui/react";
import { FaTicketAlt, FaInstagram, FaTwitter, FaFacebookF, FaSpotify } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="black" color="white" minHeight="100vh">
      <Flex direction="column" align="center" justify="center">
        <Image src="https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwb24lMjBzdGFnZXxlbnwwfHx8fDE3MTM3MDc4MTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Band on Stage" borderRadius="lg" objectFit="cover" w="full" h="30vh" />
        <VStack spacing={4} p={8}>
          <Heading as="h1" size="2xl">
            The Rock Legends
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Join us on our epic world tour! Experience the magic live.
          </Text>
          <Button leftIcon={<FaTicketAlt />} colorScheme="red" size="lg">
            Get Tickets
          </Button>
          <Text fontSize="md">Follow us on social media for updates and more!</Text>
          <Flex gap={6}>
            <Link href="https://instagram.com/therocklegends" isExternal>
              <FaInstagram size="28px" />
            </Link>
            <Link href="https://twitter.com/therocklegends" isExternal>
              <FaTwitter size="28px" />
            </Link>
            <Link href="https://facebook.com/therocklegends" isExternal>
              <FaFacebookF size="28px" />
            </Link>
            <Link href="https://spotify.com/therocklegends" isExternal>
              <FaSpotify size="28px" />
            </Link>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;
