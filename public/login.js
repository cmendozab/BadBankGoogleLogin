function Login(){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

    function handleLogin() {
      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      var firebaseConfig = {
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: ""
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    
      // get elements
      const email = document.getElementById("email");
      const password = document.getElementById("password");
      const login = document.getElementById("login");
      const signup = document.getElementById("signup");
      const logout = document.getElementById("logout");
      const loggedInStatus = document.getElementById("loggedInStatus");
      const googlelogin = document.getElementById("googlelogin");
    
      //TODO: Add Google Sign in
      googlelogin.addEventListener("click", (e) => {
        console.log("google sign in clicked");
    
        // TODO: Use firebase.auth.GoogleAuthProvider() to implement Google sign in
        // Hint: the user email address is in the results user object: result.user.email
        // Using a popup.
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(result => {
      const user = result.user;
      //console.log(user);
      //document.write(`You are logged in using the following email:  ${user.displayName}`);
      //document.write(`You are logged in using the following email:  ${user.email}`);
      loggedInStatus.innerText = `You are logged in using the following email: ${user.email}`;
      //logout.style.display = "inline";
    })
    .catch(console.log);
      });
    
      // login
      login.addEventListener("click", (e) => {
        console.log("loging button clicked");
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(
          email.value,
          password.value
        );
        promise.catch((e) => console.log(e.message));
      });
    
      // signup
      signup.addEventListener("click", (e) => {
        console.log("sign up button clicked");
        // TODO: check for real email
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(
          email.value,
          password.value
        );
        promise.catch((e) => console.log(e.message));
      });
    
      // logout
      logout.addEventListener("click", (e) => {
        console.log("logout button clicked");
        firebase.auth().signOut();
      });
    
      // login state
      firebase.auth().onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
          //console.log(firebaseUser);
          console.log("User is logged in");
          //loggedInStatus.innerText = `You are logged in using the following email: ${result.user.email}`;
          logout.style.display = "inline";
          login.style.display = "none";
          signup.style.display = "none";
          email.style.display = "none";
          password.style.display = "none";
          googlelogin.style.display = "none";
        } else {
          console.log("User is not logged in");
          loggedInStatus.innerText = "You are not yet logged in CMB";
          login.style.display = "inline";
          signup.style.display = "inline";
          email.style.display = "inline";
          googlelogin.style.display = "inline";
          password.style.display = "inline";
          logout.style.display = "none";
        }
      });
    }
//{loggedInStatus}<br/>
//<button id="logout" style="display:none;">Logout</button><br/>
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="BadBank CMB"
      title="Welcome to the bank!"
      text="You will be able to login using any of the following options!"
      body={(<>
      Email address<br/>
      <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
      Password<br/>
      <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
      <button id="login" type="submit" className="btn btn-info" >Email Login</button><br/>
      <br/>
      <button id="googlelogin" type="submit" className="btn btn-warning" onClick={handleLogin}>Google Login</button>
      <a style={{ marginLeft: '.5rem' }} ></a>
      <br/>
      <h2 id="loggedInStatus">You are not yet logged in</h2><br/>
      </>
      )}
    />    
  );  
}
