import './index.css'

const Login = props => {
  const {logout} = props
  return (
    <button type="button" onClick={logout}>
      Login
    </button>
  )
}

export default Login
