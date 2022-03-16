function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:0, movement:0}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/Home/" element={<Home/>} />
            <Route path="/CreateAccount/" element={<CreateAccount/>} />    
            <Route path="/login/" element={<Login/>} />        
            <Route path="/deposit/" element={<Deposit/>} />
            <Route path="/withdraw/" element={<Withdraw/>} />            
            <Route path="/alldata/" element={<AllData/>} />            
          </Routes>
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
