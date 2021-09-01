// Code Keypad Component Here
function handleChange(event){
    event.preventDefault()
    console.log('Entering password...')
}
function handleSubmit(event){
    event.preventDefault()
    const thePassEntered = document.querySelector(".passwordField").value
    if (thePassEntered !== "12345badpassword"){
        console.log("WRONG PASSWORD! ABORT!")

    } else {
        console.log("How did you know???")
    }

}

function Keypad(){
   return ( 
   <div>
        <form onSubmit={handleSubmit}>
            <input className="passwordField" type="password" placeholder="PASSWORD FIELD" onChange={handleChange} />
            <button type="submit">Submit Password</button>
        </form>
    </div>
   )

}

export default Keypad;