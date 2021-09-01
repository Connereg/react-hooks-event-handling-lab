// Code EyesOnMe Component Here
function handleFocus(event){
    console.log('Good!')

}

function handleBlur(event){
    console.log("Hey! Eyes on me!")
    

}


function EyesOnMe(){
    return (
        <div>
            <button onBlur={handleBlur} onFocus={handleFocus}>Eyes on me</button>
        </div>
    )

}

export default EyesOnMe