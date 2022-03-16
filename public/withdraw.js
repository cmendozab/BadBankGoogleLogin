function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [deposit_amount, setDeposit] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  const ctx = React.useContext(UserContext);  
  console.log('balance (from deposit): ', parseInt(JSON.stringify(ctx.users.balance)));
  //setTotal(parseInt(JSON.stringify(ctx.users.balance)));

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label + ' can not be left empty');
      setTimeout(() => setStatus(''),3000);
      return false;
    }     
    return true;
}

function validate_remaining(field, label) {      
    if (field < 0) {
      setStatus('Error: ' + label + ' can not be less than $0');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
  return true;
}

function handleCreate(){
  //console.log(name,email,password, deposit_amount);

  if (!validate(deposit_amount, 'withdrawal amount')) return;

  if (isNaN(deposit_amount)) {
    alert(`Your withdrawal field is not a number: \n 
            Deposit: ${deposit_amount} \n             
            Please input a number`);
            return;
  }
  if (deposit_amount <= 0) {
    alert(`Your withdrawal field is a negative number: \n 
            Deposit: ${deposit_amount} \n             
            Please input a valid (positive number)`);
            return;
  }
  //if (!validate(email,    'email'))    return;
  //if (!validate(password, 'password')) return;
  //if (!validate_password(password, 'password')) return;
  //ctx.users.push({name,email,password,balance:100});
  setShow(false);
  console.log('Total is: ', total);
  var balance = amount_deposited(); //Balance is the number in order to make numerical operations
  setTotal(balance);
  console.log('Total 2 is: ', total);  
  console.log('balance is: ', balance)
  ctx.users.balance = balance;
  let withdrawal_amount = deposit_amount;
  let deposit = "0";
  
  var aux = ctx.users.length -1;
  let name = ctx.users[aux].name;
  let email = ctx.users[aux].email;
  let password = ctx.users[aux].password;

  ctx.users.push({name,email,password,balance, withdrawal_amount, deposit});
}    

function amount_deposited() {
  var aux = parseInt(JSON.stringify(ctx.users.balance)) - parseInt(deposit_amount);  //Current balance - withdrawal_amount
  if (aux < 0) {
    setStatus('Error: not enough funds. Funds can not be less than $0');
    //setTimeout(() => setStatus(''),4000);
    alert(`Error: not enough funds! \n 
    Available: ${ctx.users.balance}\n`);
    return parseInt(JSON.stringify(ctx.users.balance)) //Returns a number (not string)
  }
  return aux;
}

function clearForm(){
  //setName('');
  //setEmail('');
  //setPassword('');
  setShow(true);
  setStatus('');    
  setDeposit(0);
}

  return (    
    <Card
      bgcolor="primary"
      header="Withdrawal"
      status={status}
      body={show ? (  
              <>              
              Remaining amount is: ${ctx.users.balance}<br/>              
              Withdraw Field<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter amount" value={deposit_amount} onChange={e => setDeposit(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={!deposit_amount}>Confirm Withdrawal</button>
              </>
            ):(
              <>               
              {!status && (<h5>Success!</h5>)}
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another withdrawal operation</button>
              </>
            )}
    />
  )
}
