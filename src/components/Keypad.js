// Code Keypad Component Here
function Keypad(){
    function handleChange(event) {
        console.log(`Entering password...`)
    }
    return (
        <input onChange={handleChange} type="password">
        </input>
    )
}

export default Keypad;