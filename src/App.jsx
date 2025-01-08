import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";
import SliderContainer from "./components/slider/SliderContainer";

function App() {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <CodeEditor />
      {/* <SliderContainer /> */}
    </Box>
  );
}

export default App;
