// import { InjectionCue, injectionResolverFactory, MultipipeGameContainer, registerGameContainerElements, registerMenuElements, WelcomeMenu } from '@shieldmaidengames/webgames-display-components';
// import { FrontendContainer } from './frontend_deps.js';
// import { buildMutipipeFrontendDeps } from './injection/index.js';

// const gameContainer = document.getElementById('game-container');

// if (gameContainer === null) {
//     throw new Error('unable to identify game container');
// }

// const multipipeFrontendDeps = buildMutipipeFrontendDeps(FrontendContainer);
// const resolver = injectionResolverFactory(multipipeFrontendDeps);

// window.addEventListener(InjectionCue.EVENT_NAME, (e) => {
//     if (!(e instanceof InjectionCue)) {
//         console.log('Non-injection request caught in handler');
//         return;
//     }
    
//     e.preventDefault();

//     console.info("Attempting to resolve token", e.token);
//     resolver(e);
// });

// registerMenuElements();
// registerGameContainerElements();

// console.log('attaching');

// const multipipeContainer = new MultipipeGameContainer();

// gameContainer.appendChild(multipipeContainer);

const gameIframe = document.createElement('iframe');
gameIframe.src = 'game/index.html';
document.body.appendChild(gameIframe);