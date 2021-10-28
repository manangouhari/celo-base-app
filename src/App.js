import { Container, Box, Button, Text } from "@chakra-ui/react";
import { useContractKit } from "@celo-tools/use-contractkit";
import "@celo-tools/use-contractkit/lib/styles.css";

function App() {
  const { connect, destroy, address } = useContractKit();

  function connectWallet() {
    try {
      connect();
    } catch (err) {
      console.log(err);
    }
  }

  function disconnectWallet() {
    try {
      destroy();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container m={10}>
      <Box>
        <Button colorScheme={"green"} onClick={connectWallet}>
          Connect Wallet
        </Button>
        <Button colorScheme={"yellow"} onClick={disconnectWallet} ml={4}>
          Disconnect Wallet
        </Button>
      </Box>
      <Box mt={10}>
        <Text>{address}</Text>
      </Box>
    </Container>
  );
}

export default App;
