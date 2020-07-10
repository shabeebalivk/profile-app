import {Button, Form, Icon, Message, Segment} from 'semantic-ui-react'
import Link from 'next/link'
import React from 'react'
import axios from 'axios'

import catchErrors from '../utils/catchErrors'
import baseurl from '../utils/baseUrl'
import {handleLogin} from '../utils/auth'

const INITIAL_USER = {
  name: "",
  email: "",
  password: ""
}

function Signup() {

  const [user, setUser] = React.useState(INITIAL_USER)
  const [disabled, setDisabled] = React.useState(true)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  React.useEffect(()=>{
    const isUser = Object.values(user).every(el => Boolean(el))
    isUser ? setDisabled(false) : setDisabled(true)
  }, [user])

  function handleChange(event) {
    const { name, value }= event.target
    setUser(prevState=>({ ...prevState, [name]: value}))
  }

  async function handleSubmit() {
    event.preventDefault()
    try{
      //make request to signup user
      setLoading(true)
      setError('')
      const url = `${baseurl}/api/signup`
      const payload = { ...user}
      const response = await axios.post(url, payload)
      handleLogin(response.data)
    }catch(error) {
      catchErrors(error, setError)
    } finally {
      setLoading(false)
    }
  }

  return <>
    <Message
      attached
      icon="settings"
      header="Get Started!"
      content="Create a new account"
      color="teal"
    />
    <Form error= {Boolean(error)} loading= {loading} onSubmit={handleSubmit}>
      <Message
        error
        header= "Oops!"
        content={error} 
      />
      <Segment>
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          label="Name"
          placeholder="name"
          name="name"
          onChange= {handleChange}
          value= {user.name}
          type="text"
        />
        <Form.Input
          fluid
          icon="envelope"
          iconPosition="left"
          label="Email"
          placeholder="Email"
          name="email"
          onChange= {handleChange}
          value= {user.email}
          type="email"
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          label="Password"
          placeholder="Password"
          name="password"
          onChange= {handleChange}
          value={user.password}
          type="password"
        />
        <Button
          disabled = {disabled || loading}
          icon="signup"
          type="submit"
          color="orange"
          content="Signup"
        />
      </Segment>
    </Form>
    <Message attached="bottom" warning>
      <Icon name="help"/>
      Existing user?{" "}
      <Link href="/login">
        <a>Log in here</a>
      </Link>{" "}instead.
    </Message>
  </>
}

export default Signup;
