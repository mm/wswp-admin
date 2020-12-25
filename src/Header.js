import React from "react";
import { Box, HStack, Button, Heading, Spacer} from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

function Header(props) {
    const { isAuthenticated, isLoading} = useAuth0();

    return (
        <Box bgColor="#343434" color="white" p={5}>
            <HStack>
                <Heading>Admin</Heading>
                <Spacer />
                {!isLoading && (
                    isAuthenticated ?
                    <>
                    <RefreshButton refreshHandler={props.refreshHandler}/>
                    <LogoutButton />
                    </>
                : <LoginButton />)}
            </HStack>
        </Box>
    )

}

function RefreshButton(props) {
    return (<Button onClick={() => props.refreshHandler()} colorScheme="teal" >Refresh data</Button>)
}

function LoginButton() {
    const { loginWithRedirect } = useAuth0();
    return (<Button onClick={() => loginWithRedirect()} colorScheme="teal">Log in</Button>)
}

function LogoutButton() {
    const {logout} = useAuth0();

    return (
      <Button onClick={() => logout({returnTo: window.location.origin})} colorScheme="red">
        Log out
      </Button>
    )
}

export default Header;