import React from "react";
import { 
    Tr, Td, Button, HStack
} from "@chakra-ui/react";

/**
 * Renders a table row representing someone's game submission.
 * Accepts a data prop for passing data over, and an approvedHandler
 * and deleteHandler function for approving/deleting the submission.
 * @param {*} props 
 */
function Submission(props) {
    const { description, id, maxPlayers, minPlayers, name, paid, submittedBy, url} = props.data;

    return (
        <Tr>
            <Td isNumeric>{id}</Td>
            <Td>{name}</Td>
            <Td>{description}</Td>
            <Td>{minPlayers}</Td>
            <Td>{maxPlayers}</Td>
            <Td>{paid ? "Yes" : "No"}</Td>
            <Td>{url}</Td>
            <Td>{submittedBy}</Td>
            <Td>
                <HStack spacing={2}>
                <Button onClick={() => props.approveHandler(id)} size="sm" colorScheme="green">Approve</Button>
                <Button onClick={() => props.deleteHandler(id)} size="sm" colorScheme="red">Delete</Button>
                </HStack>
            </Td>
        </Tr>
    )
}

export default Submission;