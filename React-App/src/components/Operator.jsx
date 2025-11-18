
//Ternary Operator 

import React from 'react'

function Operator() {

  const isLoggedIn =  true;

 //In this example, if isLoggedIn is true, it will render "Welcome back!", otherwise it will render "Please sign up."
       
   return isLoggedIn ? <div>Welcome back!</div> : <div>Who are you?</div>; 


}

export default Operator