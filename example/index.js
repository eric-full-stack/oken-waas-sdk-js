const fs = require('fs')
const path = require('path')
const WaaS = require('../index.js')

const privateKey = fs.readFileSync(path.join(__dirname, 'private.key'), 'utf-8')
const okenClientId = fs.readFileSync(path.join(__dirname, 'okenClientId.key'), 'utf-8')

const { contracts, wallets } = WaaS.connect({
	network: WaaS.networks.ETHEREUM.KOVAN,
	endpoint: WaaS.endpoints.DEVELOPMENT,
	okenClientId,
	privateKey,
	address: '0x1c0D4527d59fd11d4d36c7E00aE544cf7C26c073'
})

const contract = contracts.nft()
const userId = Date.now().toString();

(async () => {

	const allAccounts = await wallets.get()
	// const userAccount = await waas.wallet.get(userId)

	console.log(allAccounts)
	// console.log(userAccount)

	try {
		const mint = await contract.mint({
			to: '0xb9f4b9a007dea047caf882d201d4d950050c21aa',
			id: 1,
			amount: 1,
			data: 'test script'
		})

		console.log("🚀 ~ file: test.js ~ line 107 ~ waas.wallet.create ~ mint", mint)

		const balance = await contract.balanceOf({
			account: '0xb9f4b9a007dea047caf882d201d4d950050c21aa',
			id: 1
		})

		console.log("🚀 ~ file: test.js ~ line 114 ~ waas.wallet.create ~ balance", balance)

	} catch (error) {
		console.error(error?.response?.data ?? error)
	}

})()