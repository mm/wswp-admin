import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Center } from "@chakra-ui/react";
import Header from "./Header";
import SubmissionTable from "./SubmissionTable";

function App() {

  const { isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();
  const [submissions, setSubmissions] = useState([]);


  const refreshSubs = async () => {
    // Gets an access token from Auth0, and then updates the list of submissions
    // in state with fresh submissions from the API.
    let accessToken = await getAccessTokenSilently();
    let apiResponse = await fetch(`${process.env['REACT_APP_API_URL']}/admin/submissions`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then((response) => response.json());

    setSubmissions(apiResponse['submissions']);
  }

  const deleteSub = async (id) => {
    // Gets an access token from Auth0, and then deletes the
    // submission with a given ID.
    let accessToken = await getAccessTokenSilently();
    let apiResponse = await fetch(`${process.env['REACT_APP_API_URL']}/admin/submissions/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then((response) => response.json())
    .then((json) => refreshSubs());
  }

  const approveSub = async (id) => {
    // Gets an access token from Auth0, then approves the submission
    // with a given ID.
    let accessToken = await getAccessTokenSilently();
    let apiResponse = await fetch(`${process.env['REACT_APP_API_URL']}/admin/submissions/approve/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then((response) => response.json())
    .then((jsonResponse) => refreshSubs());
  }

  // Fetch submissions once when component mounts (and again if the Auth0 loading status changes)
  useEffect(() => {
    if (isAuthenticated) {
      refreshSubs();
    }
  }, [isLoading]);

  return (
    <div>
      <Header refreshHandler={refreshSubs}/>
      {(!isLoading && isAuthenticated) ?
        <>
        <SubmissionTable 
          data={submissions}
          deleteHandler={deleteSub}
          approveHandler={approveSub}
        />
        </> :
        <Center mt={10}>
          <Box>You need to be signed in to access this panel.</Box>
        </Center>
      }
    </div>
  );
}

export default App;
