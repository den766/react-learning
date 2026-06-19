import ExpesnseProfile from "./expenseprofile";


function ExpesnseLayout({user}) {


      return(

         <>
         <h2>Layout</h2>
         <ExpesnseProfile user={user}/>
         </>
      )
}

export default ExpesnseLayout;