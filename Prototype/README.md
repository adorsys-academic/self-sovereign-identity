# Exchange of a Verifiable Credential

## Original projects

This project is based on the following repositories: 

[Demo Wallet](https://github.com/digitalbazaar/chapi-demo-wallet)
[Demo Issuer](https://github.com/digitalbazaar/chapi-demo-issuer)
[Demo Verifier](https://github.com/digitalbazaar/chapi-demo-verifier)

## Background

The following communication partners are part of the use case:

1. Digital Wallet (folder: Demo-Wallet)
2. An example university (folder: Demo-Issuer)
3. An example bookshop (folder: Demo-Verifier)

In order to test this prototype, all three parties are necessary. 


## Project start

To start the project, the runtime environment "Node.js" is required.

The following commands must be executed for each project in succession:

1. `npm install` 
2. `npm start`
3. Visit `localhost:<port>` or:
	Wallet: `https://127.0.0.1:8081`
	Issuer: `https://127.0.0.1:8082`
	Verifier: `https://127.0.0.1:8083`


## Testen

### Use case
Alice Doe would like to receive a 30% discount at a bookstore. However, this discount is only for students. In order to get it, she gets a VC from her university, claiming to be a student there.



### Procedure

The order of the steps is controlled by a help description for the respective component. A possible sequence is shown below:


1. **Click on "Login"** to start a wallet session. (in Demo-Wallet)
     * The wallet content will be "none"
<br>

2. **Click on "Verifiable Credential"** to receive a Verifiable Credential with the claim to be a student there. (in Demo-Issuer)
     * Just follow further instructions 
<br>

3. **Optional:** If you reload the Demo Wallet you will see the Verifiable Credential from the university. 
     * You can click on the Verifiable Credential to see the corresponding DID Document
<br>

4. **Click on "Bestätigen mit einem Verifiable Credential"** to share you student Verifiable Credential with the bookshop. (in Demo-Verifier)
     * Just follow further instructions and click "share" at the end
     * If you scroll to the bottom you will see the Verifiable Presentation of the Verifiable Credential 
<br>

This project can issue only one Verifiable Credential for the user "Alice Doe". If you want to repeat the whole process, just delete the bookshop cookie and reload all pages. 


## License

[New BSD License (3-clause)](LICENSE) © 2020 Digital Bazaar
