async function onClickRequest() {
    //   document.getElementById('getResults').innerHTML = ''; // clear results
    const credentialQuery = {
      "web": {
        "VerifiablePresentation": {
          "query": [{
            "type": "QueryByExample",
            "credentialQuery": {
              "reason": "UniversityCredential for Alice Doe",
              "example": {
                "@context": [
                  "https://w3id.org/credentials/v1",
                  "https://www.w3.org/2018/credentials/examples/v1"
                ],
                "type": ["UniversityCredential"],
                "credentialSubject": {
                  "id": "did:example:alice"
                }
              }
            }
          }]
        }
      }
    }

    const result = await navigator.credentials.get(credentialQuery);
    
    if (result != null) {
      document.getElementById('getResults').innerText = 'Requesting credential...';
      document.getElementById('resultsPanel').classList.remove('hide');
      document.getElementById('getResults').classList.remove('hide');
      document.getElementById('getResults').innerText = JSON.stringify(verifiablePresentationThalia, null, 2);
      document.getElementById('requestButton').innerText = "Vielen Dank. Surfe jetzt mit 30%!";
      document.getElementById("requestButton").style.fontWeight = "900";
      document.getElementById('requestButton').style.color = '#00a04b';
      document.getElementById('requestButton').classList.add('no-click');
      document.getElementById('requestButton').style.pointerEvents = "none";
    }
  }

  const verifiablePresentationThalia = {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "verifiableCredential": [{
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
      ],
      "id": "http://example/uniqueIDofTheCredentials/1872",
      "type": ["VerifiableCredential", "UniversityCredential"],
      "issuer": "did:example:university",
      "issuanceDate": "2021-03-01T19:73:24Z",
      "credentialSubject": {
        "id": "did:example:alice",
        "alumniOf": {
          "id": "did:example:university",
          "name": {
            "value": "TH Nürnberg",
          }
        }
      },
      "proof": {
        "type": "RsaSignature2018",
        "created": "2021-03-01T19:73:24Z",
        "verificationMethod": "did:example:university",
        "jws": "eyJhbGciOiJSUziYjY0Il19..TCYt5XsITJX1CxPCT8zS245-krQyHUdBBPM"
      }
    }],
    "proof": {
        "type": "RsaSignature2018",
        "created": "2021-04-01T21:19:10Z",
        "verificationMethod": "did:example:alice",
        "jws": "DBjbefqiw329w324..wfjbQEHb243brh9wfwbsdwhqUY4W87"
      }
  };

  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(() => {
    document.getElementById('requestButton').addEventListener('click', onClickRequest);
    console.log('Document ready.')
  })

  const MEDIATOR = 'https://authn.io/mediator' + '?origin=' +
    encodeURIComponent(window.location.origin);

  credentialHandlerPolyfill
    .loadOnce(MEDIATOR)
    .then(console.log('Polyfill loaded.'))
    .catch(e => console.error('Error loading polyfill:', e));