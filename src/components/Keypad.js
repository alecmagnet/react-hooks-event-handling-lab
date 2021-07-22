// Code Keypad Component Here

function Keypad() {
	function handleSubmit() {
		console.log('Entering password...')
	}

	return (
		// <form onSubmit={handleSubmit}>
		// 	<input type="password" />
		// </form>
		<input type="password" onChange={handleSubmit} />
	)
}

export default Keypad