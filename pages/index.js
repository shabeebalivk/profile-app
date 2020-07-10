import React from "react";
import axios from "axios";
import ProfileList from "../components/Index/ProfileList";
import baseUrl from '../utils/baseUrl'

function Home({ profiles }) {
 
  return <ProfileList profiles={profiles}/>
}

Home.getInitialProps = async () => {
  // fetch data on server
  const url = `${baseUrl}/api/profiles`;
  const response = await axios.get(url);
  return { profiles: response.data };
  // return response data as an object
  // note: this object will be merged with existing props
};

export default Home;
