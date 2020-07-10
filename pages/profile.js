import axios from 'axios'
import ProfileSummary from '../components/Profile/ProfileSummary'
import ProfileAttributes from '../components/Profile/ProfileAttributes'
import baseUrl from '../utils/baseUrl'

function Profile({ profile, user }) {
  return (
    <>
      <ProfileSummary {...profile} />
      <ProfileAttributes user= {user} {...profile} />
    </>
  )
}

Profile.getInitialProps = async ({ query: { _id } })=>{
  const url= `${baseUrl}/api/profile`;
  const payload = { params: { _id }}
  const response = await axios.get(url, payload)
  return { profile: response.data }
}

export default Profile;
