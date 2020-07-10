import { Card, } from 'semantic-ui-react'

function ProfileList({ profiles}) {

  function mapProfilesToItems(profiles){
    return profiles.map(data=>({
      header: data.name,
      image: data.mediaUrl,
      color: 'teal',
      meta: data.age,
      fluid: true,
      childkey: data._id,
      href:`/profile?_id=${data._id}`
    }))
  }
  return <Card.Group stackable itemsPerRow="3" centered items={mapProfilesToItems(profiles)}/>
}

export default ProfileList;
