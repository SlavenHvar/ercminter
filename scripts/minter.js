function checkWeb3(){//check if web3 wallet is installed
    let isWeb3 =false;
    if (typeof web3 !== 'undefined') {
      console.log(typeof web3);
      console.log('Web3 found');
      window.web3 = new Web3(window.ethereum);
      web3.eth.defaultAccount = web3.eth.accounts[0];
      isWeb3 = true;
    } 
    else {
      console.error('web3 was undefined');
	  bootbox.alert({
		message: "Web3 was undefined. Please install a web3 wallet.",
		centerVertical: true,
		closeButton: false
	});
      isWeb3 = false;
    }  
    return isWeb3;
 }

 function checkNetwork() {//check which network is web3 wallet connected to
	return web3.eth.net.getId().then(netId => {
		switch (netId) {
			case 1:
				console.log('This is mainnet');
				return "mainnet";
				
			case 137:
				console.log('This is the polygon network')
				return "polygon";
				
			case 10:
				console.log('This is the optimism network')
				return "optimism";
				
			case 42161:
				console.log('This is the arbitrum network')
				return "arbitrum";
					
			case 3:
				console.log('This is the ropsten test network.')
				return "ropsten";
				
			case 5:
				console.log('This is the goerli test network.')
				return "goerli";
				
			default:
				console.log('This is an unknown network.')
				return "unknown";
		}		
	  });
 }

//contractAbi and bytecode from Remix deployed smart contract
const contractAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "initialSupply",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isFixedSupply",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "customDecimals",
				"type": "uint8"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractCreator",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isFixed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "supply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const bytecode ="60806040523480156200001157600080fd5b50604051620022ca380380620022ca8339818101604052810190620000379190620003ea565b828281600390805190602001906200005192919062000283565b5080600490805190602001906200006a92919062000283565b50505080600560156101000a81548160ff021916908360ff16021790555033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600560146101000a81548160ff021916908315150217905550620000f533866200010060201b60201c565b50505050506200076f565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000173576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200016a90620004f1565b60405180910390fd5b62000187600083836200027960201b60201c565b80600260008282546200019b9190620005a8565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620001f29190620005a8565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000259919062000513565b60405180910390a362000275600083836200027e60201b60201c565b5050565b505050565b505050565b82805462000291906200065e565b90600052602060002090601f016020900481019282620002b5576000855562000301565b82601f10620002d057805160ff191683800117855562000301565b8280016001018555821562000301579182015b8281111562000300578251825591602001919060010190620002e3565b5b50905062000310919062000314565b5090565b5b808211156200032f57600081600090555060010162000315565b5090565b60006200034a620003448462000564565b62000530565b9050828152602081018484840111156200036357600080fd5b6200037084828562000628565b509392505050565b600081519050620003898162000721565b92915050565b600082601f830112620003a157600080fd5b8151620003b384826020860162000333565b91505092915050565b600081519050620003cd816200073b565b92915050565b600081519050620003e48162000755565b92915050565b600080600080600060a086880312156200040357600080fd5b60006200041388828901620003bc565b9550506020620004268882890162000378565b945050604086015167ffffffffffffffff8111156200044457600080fd5b62000452888289016200038f565b935050606086015167ffffffffffffffff8111156200047057600080fd5b6200047e888289016200038f565b92505060806200049188828901620003d3565b9150509295509295909350565b6000620004ad601f8362000597565b91507f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b620004eb8162000611565b82525050565b600060208201905081810360008301526200050c816200049e565b9050919050565b60006020820190506200052a6000830184620004e0565b92915050565b6000604051905081810181811067ffffffffffffffff821117156200055a5762000559620006f2565b5b8060405250919050565b600067ffffffffffffffff821115620005825762000581620006f2565b5b601f19601f8301169050602081019050919050565b600082825260208201905092915050565b6000620005b58262000611565b9150620005c28362000611565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620005fa57620005f962000694565b5b828201905092915050565b60008115159050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015620006485780820151818401526020810190506200062b565b8381111562000658576000848401525b50505050565b600060028204905060018216806200067757607f821691505b602082108114156200068e576200068d620006c3565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200072c8162000605565b81146200073857600080fd5b50565b620007468162000611565b81146200075257600080fd5b50565b62000760816200061b565b81146200076c57600080fd5b50565b611b4b806200077f6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80633950935111610097578063a9059cbb11610066578063a9059cbb146102c5578063cc16f5db146102f5578063dd62ed3e14610311578063f06cba3a1461034157610100565b8063395093511461021757806370a082311461024757806395d89b4114610277578063a457c2d71461029557610100565b80631e2f73b1116100d35780631e2f73b11461018d57806323b872dd146101ab578063313ce567146101db57806332424aa3146101f957610100565b806306fdde0314610105578063095ea7b3146101235780630f6798a51461015357806318160ddd1461016f575b600080fd5b61010d61035f565b60405161011a9190611720565b60405180910390f35b61013d600480360381019061013891906111c9565b6103f1565b60405161014a9190611705565b60405180910390f35b61016d600480360381019061016891906111c9565b610414565b005b610177610508565b60405161018491906118e2565b60405180910390f35b610195610512565b6040516101a291906116ea565b60405180910390f35b6101c560048036038101906101c0919061117a565b610538565b6040516101d29190611705565b60405180910390f35b6101e3610567565b6040516101f091906118fd565b60405180910390f35b61020161057e565b60405161020e91906118fd565b60405180910390f35b610231600480360381019061022c91906111c9565b610591565b60405161023e9190611705565b60405180910390f35b610261600480360381019061025c9190611115565b6105c8565b60405161026e91906118e2565b60405180910390f35b61027f610610565b60405161028c9190611720565b60405180910390f35b6102af60048036038101906102aa91906111c9565b6106a2565b6040516102bc9190611705565b60405180910390f35b6102df60048036038101906102da91906111c9565b610719565b6040516102ec9190611705565b60405180910390f35b61030f600480360381019061030a91906111c9565b61073c565b005b61032b6004803603810190610326919061113e565b610830565b60405161033891906118e2565b60405180910390f35b6103496108b7565b6040516103569190611705565b60405180910390f35b60606003805461036e90611a46565b80601f016020809104026020016040519081016040528092919081815260200182805461039a90611a46565b80156103e75780601f106103bc576101008083540402835291602001916103e7565b820191906000526020600020905b8154815290600101906020018083116103ca57829003601f168201915b5050505050905090565b6000806103fc6108ca565b90506104098185856108d2565b600191505092915050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146104a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049b906118a2565b60405180910390fd5b60001515600560149054906101000a900460ff161515146104fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f190611822565b60405180910390fd5b6105048282610a9d565b5050565b6000600254905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806105436108ca565b9050610550858285610bfd565b61055b858585610c89565b60019150509392505050565b6000600560159054906101000a900460ff16905090565b600560159054906101000a900460ff1681565b60008061059c6108ca565b90506105bd8185856105ae8589610830565b6105b89190611934565b6108d2565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461061f90611a46565b80601f016020809104026020016040519081016040528092919081815260200182805461064b90611a46565b80156106985780601f1061066d57610100808354040283529160200191610698565b820191906000526020600020905b81548152906001019060200180831161067b57829003601f168201915b5050505050905090565b6000806106ad6108ca565b905060006106bb8286610830565b905083811015610700576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f790611882565b60405180910390fd5b61070d82868684036108d2565b60019250505092915050565b6000806107246108ca565b9050610731818585610c89565b600191505092915050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146107cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c3906117e2565b60405180910390fd5b60001515600560149054906101000a900460ff16151514610822576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081990611822565b60405180910390fd5b61082c8282610f0a565b5050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600560149054906101000a900460ff1681565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610942576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093990611862565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a990611782565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a9091906118e2565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b04906118c2565b60405180910390fd5b610b19600083836110e1565b8060026000828254610b2b9190611934565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b809190611934565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610be591906118e2565b60405180910390a3610bf9600083836110e6565b5050565b6000610c098484610830565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610c835781811015610c75576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6c906117a2565b60405180910390fd5b610c8284848484036108d2565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610cf9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf090611842565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d69576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6090611742565b60405180910390fd5b610d748383836110e1565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610dfa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df1906117c2565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e8d9190611934565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ef191906118e2565b60405180910390a3610f048484846110e6565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f7a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f7190611802565b60405180910390fd5b610f86826000836110e1565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561100c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100390611762565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000828254611063919061198a565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110c891906118e2565b60405180910390a36110dc836000846110e6565b505050565b505050565b505050565b6000813590506110fa81611ae7565b92915050565b60008135905061110f81611afe565b92915050565b60006020828403121561112757600080fd5b6000611135848285016110eb565b91505092915050565b6000806040838503121561115157600080fd5b600061115f858286016110eb565b9250506020611170858286016110eb565b9150509250929050565b60008060006060848603121561118f57600080fd5b600061119d868287016110eb565b93505060206111ae868287016110eb565b92505060406111bf86828701611100565b9150509250925092565b600080604083850312156111dc57600080fd5b60006111ea858286016110eb565b92505060206111fb85828601611100565b9150509250929050565b61120e816119be565b82525050565b61121d816119d0565b82525050565b600061122e82611918565b6112388185611923565b9350611248818560208601611a13565b61125181611ad6565b840191505092915050565b6000611269602383611923565b91507f45524332303a207472616e7366657220746f20746865207a65726f206164647260008301527f65737300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006112cf602283611923565b91507f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008301527f63650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611335602283611923565b91507f45524332303a20617070726f766520746f20746865207a65726f20616464726560008301527f73730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061139b601d83611923565b91507f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006000830152602082019050919050565b60006113db602683611923565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206260008301527f616c616e636500000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611441601e83611923565b91507f4f6e6c7920436f6e74726163742063726561746f722063616e204275726e00006000830152602082019050919050565b6000611481602183611923565b91507f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008301527f73000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006114e7601f83611923565b91507f54686973206973206120666978656420737570706c7920636f6e7472616374006000830152602082019050919050565b6000611527602583611923565b91507f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061158d602483611923565b91507f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006115f3602583611923565b91507f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008301527f207a65726f0000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611659601e83611923565b91507f4f6e6c7920436f6e74726163742063726561746f722063616e204d696e7400006000830152602082019050919050565b6000611699601f83611923565b91507f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b6116d5816119fc565b82525050565b6116e481611a06565b82525050565b60006020820190506116ff6000830184611205565b92915050565b600060208201905061171a6000830184611214565b92915050565b6000602082019050818103600083015261173a8184611223565b905092915050565b6000602082019050818103600083015261175b8161125c565b9050919050565b6000602082019050818103600083015261177b816112c2565b9050919050565b6000602082019050818103600083015261179b81611328565b9050919050565b600060208201905081810360008301526117bb8161138e565b9050919050565b600060208201905081810360008301526117db816113ce565b9050919050565b600060208201905081810360008301526117fb81611434565b9050919050565b6000602082019050818103600083015261181b81611474565b9050919050565b6000602082019050818103600083015261183b816114da565b9050919050565b6000602082019050818103600083015261185b8161151a565b9050919050565b6000602082019050818103600083015261187b81611580565b9050919050565b6000602082019050818103600083015261189b816115e6565b9050919050565b600060208201905081810360008301526118bb8161164c565b9050919050565b600060208201905081810360008301526118db8161168c565b9050919050565b60006020820190506118f760008301846116cc565b92915050565b600060208201905061191260008301846116db565b92915050565b600081519050919050565b600082825260208201905092915050565b600061193f826119fc565b915061194a836119fc565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561197f5761197e611a78565b5b828201905092915050565b6000611995826119fc565b91506119a0836119fc565b9250828210156119b3576119b2611a78565b5b828203905092915050565b60006119c9826119dc565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611a31578082015181840152602081019050611a16565b83811115611a40576000848401525b50505050565b60006002820490506001821680611a5e57607f821691505b60208210811415611a7257611a71611aa7565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b611af0816119be565b8114611afb57600080fd5b50565b611b07816119fc565b8114611b1257600080fd5b5056fea2646970667358221220a9cb6fa00017729a1ef90d9bcf80c16f60076f26b95a3b30c46fac9bf8a3bcc864736f6c63430008000033";


async function createToken(supply, isFixed, name, symbol, decimals, _thisNetwork)
{
  let deployed = false;
  // Set the Contract
  let contract = new web3.eth.Contract(contractAbi);
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];

  let dialogMessage = '<p><i class="fa"></i>Web3 wallet is connected to:<br><br>'
                      + _thisNetwork + ' network' + '<br><br>' + 'via account: ' + account + '<br><br>'
					  +"If you want to mint the ERC20 Token on the " + _thisNetwork + " network please confirm the transaction in your Web3 wallet.<br><br>"
					  +"If you want to change the network or account please reject the transaction in your Web3 wallet.</p><br><br>";

  let dialog = bootbox.dialog({
	title: 'Deploy ERC20 token',
	message: dialogMessage,
	centerVertical: true,
	closeButton: false
	});



	contract.deploy({
	data: bytecode,
	arguments: [supply, isFixed, name, symbol, decimals]
	})
	.send({
	from: account,
	type: '0x2'
	},function(error, transactionHash){ 
 	})
	.on('error', function(error){ 
		console.log("Error: "+ error);
		dialog.init(function(){
			dialog.find('.bootbox-body').html('<p><i class="fa"></i>Transaction rejected by user!</p>');
		});
	})
	.on('transactionHash', function(transactionHash){ 
	console.log("transactionHash:");
	console.log(transactionHash)
	dialog.init(function(){
		dialog.find('.bootbox-body').html('<p><i class="fa fa-spin fa-spinner"></i>Deploying ERC20 token on :<br>'+ 
		'<br>'+ _thisNetwork + ' network' + '<br><br>' + 'via account: ' + account +
		'<br><br><a href="https://goerli.etherscan.io/tx/'+ transactionHash +'"'+' target="_blank" rel="noopener noreferrer">Transaction hash</a></p>'
		);
	});
	})
	.on('receipt', function(receipt){
	console.log("receipt:");
	console.log(receipt) ;
	console.log(receipt.contractAddress) ;
	mintedContract = getContracJSON(JSON.stringify(receipt));
	})
	.on('confirmation', function(confirmationNumber, receipt){
	console.log("confirmation:");
	console.log(confirmationNumber ) ;
	console.log("Receipt: ") ;
	console.log(receipt);
	})
	.then(function(newContractInstance){
		deployed=true;
		console.log("then:");
		console.log(newContractInstance.options.address); // instance with the new contract address
		console.log(newContractInstance);
		dialog.init(function(){
				dialog.find('.bootbox-body').html('<p><i class="fa"></i>ERC20 token created on :<br>'+ 
				'<br>'+_thisNetwork + ' network' + '<br><br>' + 'via account: <br>' + account +'<br><br>'
				+ 'Contract address: <br></p> <a href="https://goerli.etherscan.io/token/'+ newContractInstance.options.address +'"'+' target="_blank" rel="noopener noreferrer">'+newContractInstance.options.address+'</a><br><br>'+
				'<div class="d-grid gap-2 d-md-block">'+
				'<button id="btnAdd" class="btn btn-success btn-rounded btn-md mt-3">Add Token</button>'+
				'<a href="index.html" class="btn btn-success btn-rounded btn-md mx-2 mt-3" role="button">Close</a>'+
				'</div>');

		$(document).ready(function()
		{
			$("#btnAdd").click(function()
			{
			event.preventDefault();
				
				console.log("Add token");
				addTokenMetamask(newContractInstance.options.address, symbol, decimals,"").then((result) => //img url not added
					{
						let wasAdded = result;
						console.log(wasAdded);
						if(wasAdded)
						{
							dialog.init(function(){
								dialog.find('.bootbox-body').html('<p><i class="fa"></i>ERC20 Token was added to Web3 wallet<br>'+ 
								'</p>'+'<br>'+'<a href="index.html" class="btn btn-success btn-rounded btn-md mt-3" role="button">Close</a>');});
						}
						else
						{
							dialog.init(function(){
								dialog.find('.bootbox-body').html('<p><i class="fa"></i>An error occured!</p><br><p>ERC20 Token was not added to Web3 wallet. Please add token manually<br>'+ 
								'</p>'+'<br>'+'<a href="index.html" class="btn btn-success btn-rounded btn-md mt-3" role="button">Close</a>');});
						}
					}).catch((error) => 
					{
						dialog.init(function(){
							dialog.find('.bootbox-body').html('<p><i class="fa"></i>Error: ' + error +'</p><br><p>ERC20 Token was not added to Web3 wallet. Please add token manually<br>'+ 
							'</p>'+'<br>'+'<a href="index.html" class="btn btn-success btn-rounded btn-md mt-3" role="button">Close</a>');});
						console.error(error);
			  		});
				})
			});
		});
		return deployed;
	});
};

$(document).ready(function(){
  $("#btnCreate").click(function(){
		event.preventDefault();
		let name = $("#name").val();
		let symbol = $("#symbol").val();
		let supply = $("#supply").val();
		let decimals = $("#decimals").val();
		let supplyType = $('#supplyType').val();
		
		let supplyTypeBool = false;

		if(supplyType==1)
		{
			supplyTypeBool=true;
		}

		if(validateForm(name, symbol, supply, decimals, supplyType))
		{
			let supplyWithDecimals =  supply.concat(addDecimals(parseInt(decimals,10)));
			if(checkWeb3())
			{
				checkNetwork().then((result) => {
					let thisNetwork = result;
					console.log(thisNetwork);
					createToken(supplyWithDecimals, supplyTypeBool, name, symbol, decimals, thisNetwork).then((result2) => {
						console.log(result2);
					}).catch((error) => {
						console.error(error);
					});
				});
			}
		}
	})
});

 
  

function addDecimals(decimalPlaces){
	let zeros="";
	console.log(decimalPlaces);
	for (let i = 0; i < decimalPlaces; i++) {
	  zeros += "0";
	}
	return zeros;
  }//needed because of integer overflow problems

//Form validation

function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}


function validateForm(name,symbol,supply,decimals, supplyTypeValue) {
  let a = name.length >= 3 &&  name.length <= 50;
  let b = symbol.length >= 2  &&  symbol.length <= 20;
  let c = supply >= 1 &&  supply<= Math.pow(10, 21) && isInt(supply);
  let d = decimals >= 0 &&  decimals <= 21 && isInt(decimals);
  let e = supplyTypeValue == 1 || supplyTypeValue == 2;

  let variablesFalse = [];

  if(!a){
    $('#name').css('border', 'solid 3px rgb(217, 83, 79)');
	variablesFalse.push("Name");
  }
  else{
    $('#name').css('border', 'solid 3px rgb(92, 184, 92)');
  }

  if(!b){
    $('#symbol').css('border', 'solid 3px rgb(217, 83, 79)');
	variablesFalse.push("symbol");
  }
  else{
    $('#symbol').css('border', 'solid 3px rgb(92, 184, 92)');
  }

  if(!c){
    $('#supply').css('border', 'solid 3px rgb(217, 83, 79)');
	variablesFalse.push("Supply");
  }
  else{
    $('#supply').css('border', 'solid 3px rgb(92, 184, 92)');
  }

  if(!d){
    $('#decimals').css('border', 'solid 3px rgb(217, 83, 79)');
	variablesFalse.push("Decimals");
  }
  else{
    $('#decimals').css('border', 'solid 3px rgb(92, 184, 92)');
  }

  if(!e){
    $('#supplyType').css('border', 'solid 3px rgb(217, 83, 79)');
	variablesFalse.push("Supply type");
  }
  else{
    $('#supplyType').css('border', 'solid 3px rgb(92, 184, 92)');
  }
  
  let alertText = "The following Token attributes are entered incorectly: "

  variablesFalse.forEach(function (item, index) {
	 alertText+=item + ", ";
  });

  

  if(!(a && b && c && d && e))
  {
	bootbox.alert({
		message: alertText.slice(0, -2),
		centerVertical: true,
		closeButton: false
	});
  }

  return a && b && c && d && e;
}

function getContracJSON(str){
  let index = str.indexOf("address");
  let adrStr = str.substring(index, str.length) ;
  return adrStr.substring(0, adrStr.indexOf(",")).replace('address":"','').slice(0, -1);
}

async function addTokenMetamask(tokenAddress, tokenSymbol, tokenDecimals, tokenImage)
{
      const wasAdded = await ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image: tokenImage,
        },
      },
    });

    if (wasAdded) {
      console.log('Token added to wallet!');
    } else {
      console.log('Token not added!');
    }
	return wasAdded;
}

