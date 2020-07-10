const baseUrl=
    process.env.NODE_ENV  === "production"
        ? 'https://react-app-demo-enzyme.herokuapp.com/'
        : 'http://localhost:3000'

export default baseUrl;