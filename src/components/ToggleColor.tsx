import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Button, useColorMode } from "@chakra-ui/react"

const ToggleColor = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Button onClick={toggleColorMode} pos="fixed" top={2} right={2}>
           {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
        </Button>
    )
  }

  export default ToggleColor