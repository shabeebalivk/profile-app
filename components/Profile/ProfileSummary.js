import { Item } from 'semantic-ui-react'

function ProfileSummary({ name, mediaUrl, _id, age}) {
  return (
    <Item.Group>
      <Item>
        <Item.Image size="medium" src={mediaUrl}/>
        <Item.Content>
          <Item.Header>{ name }</Item.Header>
          <Item.Description>
            <p>{age}</p>
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}

export default ProfileSummary;
