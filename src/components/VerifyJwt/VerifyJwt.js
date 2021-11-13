import React, {useEffect} from 'react'
import axios from "axios";
import { selectUser } from "features/userSlice";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


const VerifyJwt = () => {
    const history = useHistory();
    const user = useSelector(selectUser);

    const verifyToken = async () => {
        const requestBody = {
            query: `
            query {
              verifyJwt {
                isValid
              }
              }
          `
          };
          try {
           const {data} = await axios.post(`http://localhost:8081/graphql`, requestBody, {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            });
          } catch (error) {
            console.log(error);
          }
    }

    useEffect(() => {
        if (user) {
            verifyToken(user.token)
        }
    })
    return (
        <>
        </>
    )
}

export default VerifyJwt
