function AllData(){
  
  const ctx = React.useContext(UserContext);
  console.log("ctx: ", ctx); // Object
  console.log("ctx.users", ctx.users); //Array

  console.log(ctx["users"]); //Array
  //console.log(ctx.users[0].balance); //Read Array position 0 of data and get balance
  //console.log(ctx.users[1].deposit_amount); // Read Array position 1 of data and get deposit_amount
  //console.log(ctx.users[1].withdrawal_amount); // Read Array position 1 of data and get withdrawal_amount

  function review_deposit(idx){

    if(ctx.users[idx].deposit_amount == undefined) {      
      return "0";      
    }
    return ctx.users[idx].deposit_amount;
  }

  function aux_function() {
    return (
      ctx.users.map((variant, idx) => (
        <Card
        bgcolor="secondary"                
        header="Movement"
        body =  {<>        
        "Deposit Amount:" ${review_deposit(idx)}<br/>
        "Withdrawal Amount:" ${ctx.users[idx].withdrawal_amount}<br/>
        "Remaining amount is:" ${ctx.users[idx].balance}<br/>
        "Client:" {ctx.users[idx].name}</>}
        
        >     
        </Card>
  )));
  }

  //{JSON.stringify(ctx)}  //Place this before aux_function() below to get all data in the webpage as a string.

  return (
    <>
      <h5>All Data Movements in the Bank</h5>
      <br/>
      {aux_function()}                
    </>
    
  );
}
