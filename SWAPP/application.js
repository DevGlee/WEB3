if ('serviceWorker' in navigator)
	{
	  navigator.serviceWorker
	    .register('/swapplication.js', { scope: '/' })
	    .then(function(reg) {
	      // suivre l'état de l'enregistrement du Service Worker : `installing`, `waiting`, `active`
				if(reg.installing)
					{
	      		console.log('Service worker copilotrace en installation');
	    		}
				else if(reg.waiting)
					{
	      		console.log('Service worker copilotrace installé');
	    		}
				else if(reg.active)
					{
	      		console.log('Service worker copilotrace activé');
	    		}
	    }).catch(function(error)
				{
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
