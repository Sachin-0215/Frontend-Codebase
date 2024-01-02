import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="loginContainer">
          <h1>Welcome Back</h1>

        <div className="input-container">
            <label>Username  </label>
            <input type="text" required />
        </div>

        <div className="input-container">
            <label>Password </label>
            <input type="password" required />
        </div>

        <a href="#">Forgot Password</a>
        <a href="#">Create a new account</a>
        
        <button className="loginBut">
          <p>Login</p>
        </button>

        <button className="siG">
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt="Trees" height="30" />
          <p>Sign in with Google</p>
        </button>

      </div>
  
    </div>
  );
}

export default App;
