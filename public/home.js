function Home(){
  const ctx = React.useContext(UserContext);
  //ctx.users.balance = 0;

  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="BadBank CMB"
      title="Welcome to the bank!"
      text="Move around our BadBank CMB webpage and explore its functionalities. Go to Create Account menu to create a new account with us!"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
