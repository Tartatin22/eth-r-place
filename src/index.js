// Handle front-end
// 1. connect to blockchain
// 2. get and displays contract pixels
// 3. listen for pixel changed contract event (in case update cancas)

// --------------- CHANGE BEFORE RUNNING ----------------

let blockchain_port = "8584";

let contract_address = "0x...";

let accountNumber = 0; // change for another user

let contract_abi = null; // path to the contract abi file

// -------------- SCRIPT ---------------

let contract = web3.eth.contract(contract_abi);

let EventContract = ClientReceipt.at(contract_address);

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:" + blockchain_port));

var account;
web3.eth.getAccounts().then((f) => {
	account = f[accountNumber];
})


function updateCanvas(){
	// get contract canvas and display
	console.log("updating canvas ..");
}


// Listener of contract PixelChangedEvent
EventContract.PixelChanged(function(err, data) {
	if (!err) {
		// do stuff with data
	}
	alert("Error while connecting with the contract " + contract_address + ".");
}


