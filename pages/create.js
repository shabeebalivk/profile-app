import React from "react";
import axios from 'axios'
import {
  Form,
  Input,
  TextArea,
  Button,
  Image,
  Message,
  Header,
  Icon
} from "semantic-ui-react";

import baseUrl from '../utils/baseUrl'
import catchErrors from '../utils/catchErrors'

const INITIAL_PROFILE = {
  name: "",
  age: "",
  media: "",
  description: ""
};

function CreateProfile() {
  const [profile, setProfile] = React.useState(INITIAL_PROFILE);
  const [mediaPreview, setMediaPreview] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false)
  const [disabled, setDisabled] = React.useState(true)
  const [error,setError] = React.useState('')

  React.useEffect(()=>{
    const isProfile = Object.values(profile).every(el=>Boolean(el))
    isProfile ? setDisabled(false) : setDisabled(true)


  }, [profile])

  function handleChange(event) {
    const { name, value, files } = event.target;
    if (name === "media") {
      setProfile(prevState => ({ ...prevState, media: files[0] }));
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {
      setProfile(prevState => ({ ...prevState, [name]: value }));
    }
  }

  async function handleImageUpload(){
    const data = new FormData()
    data.append('file', profile.media)
    data.append('upload_preset', "react-app")
    data.append('cloud_name', "shabeebalivk")
    const response = await axios.post(process.env.CLOUDINARY_URL, data);
    const mediaUrl=response.data.url
    return mediaUrl;
  }

  async function handleSubmit(event) {
    try{
      event.preventDefault();
      setLoading(true)
      setError('')
      const mediaUrl = await handleImageUpload()
      const url = `${baseUrl}/api/profile`
      const { name, age, description } = profile
      const payload = { name, age, description, mediaUrl}
      const response = await axios.post(url, payload)
      //console.log({response})
      setLoading(false)
      setProfile(INITIAL_PROFILE);
      setSuccess(true);
    }catch(error) {
      catchErrors(error, setError)
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header as="h2" block>
        <Icon name="add" color="orange" />
        Create New Profile
      </Header>
      <Form loading={loading} error={Boolean(error)} success={success} onSubmit={handleSubmit}>
      <Message
          error
          header="Oops!"
          content={error}
        />
        <Message
          success
          icon="check"
          header="Success!"
          content="Your profile has been posted"
        />
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            name="name"
            label="Name"
            placeholder="Name"
            value={profile.name}
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            name="age"
            label="Age"
            placeholder="Age"
            min="16"
            step="1"
            type="number"
            value={profile.age}
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            name="media"
            type="file"
            label="Media"
            accept="image/*"
            content="Select Image"
            onChange={handleChange}
          />
        </Form.Group>
        <Image src={mediaPreview} rounded centered size="small" />
        <Form.Field
          control={TextArea}
          name="description"
          label="Description"
          placeholder="Description"
          onChange={handleChange}
          value={profile.description}
        />
        <Form.Field
          control={Button}
          disabled={disabled || loading}
          color="blue"
          icon="pencil alternate"
          content="Submit"
          type="submit"
        />
      </Form>
    </>
  );
}

export default CreateProfile;