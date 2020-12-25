import React from "react";
import { 
    Table, Thead, Tbody, Tr, Th
} from "@chakra-ui/react";
import Submission  from "./Submission";


function SubmissionTable(props) {

    let submissions = props.data.map((sub) => {
        return {
            description: sub['description'],
            id: sub['id'],
            maxPlayers: sub['max_players'],
            minPlayers: sub['min_players'],
            name: sub['name'],
            paid: sub['paid'],
            submittedBy: sub['submitted_by'],
            url: sub['url']
        }
    }).map((data) => {
        return(<Submission
            data={data}
            key={data.id}
            deleteHandler={props.deleteHandler}
            approveHandler={props.approveHandler}
        />)
    });

    return(
        <Table variant="simple" mt={5} size="sm">
            <Thead>
                <Tr>
                    <Th>ID</Th>
                    <Th>Name</Th>
                    <Th>Description</Th>
                    <Th>Min Players</Th>
                    <Th>Max Players</Th>
                    <Th>Paid?</Th>
                    <Th>URL</Th>
                    <Th>Submitted by</Th>
                    <Th>Modify</Th>
                </Tr>
            </Thead>
            <Tbody>
                {submissions}
            </Tbody>
        </Table>
    )
}

export default SubmissionTable;