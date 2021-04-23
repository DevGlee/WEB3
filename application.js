if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/WEB3/swapplication.js', { scope: '/WEB3/' })
		.then(function (reg) {
			// suivre l'état de l'enregistrement du Service Worker : `installing`, `waiting`, `active`
			if (reg.installing) {
				console.log('Service worker copilotrace en installation');
			}
			else if (reg.waiting) {
				console.log('Service worker copilotrace installé');
			}
			else if (reg.active) {
				console.log('Service worker copilotrace activé');
			}
		}).catch(function (error) {
			// registration failed
			console.log('Service worker copilotrace non installé, erreur ' + error);
		});
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	e.preventDefault();
	// Stash the event so it can be triggered later.
	deferredPrompt = e;
});

function ajouter(d) {
	let resultat = document.querySelector("#ecran").innerHTML.trim();

	if(resultat=="0")resultat="";
	if (d == "C") {
		resultat = "0";
	}
	else if (d == "%") {

		try {
			resultat = eval(resultat) / 100

		} catch (e) {
			resultat = "erreur"
		}

	}
	else if (d == "=") {
		try {
			resultat = eval(resultat)

		} catch (e) {
			resultat = "erreur"

		}

	}
	else {
		resultat += d;
	}
	
	document.querySelector("#ecran").innerHTML = resultat;

}
