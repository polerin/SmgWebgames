import {Engine as $iPUCS$Engine, DisplayMode as $iPUCS$DisplayMode, FadeInOut as $iPUCS$FadeInOut, Color as $iPUCS$Color, Loader as $iPUCS$Loader, ImageSource as $iPUCS$ImageSource, Scene as $iPUCS$Scene, vec as $iPUCS$vec, Actor as $iPUCS$Actor} from "excalibur";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}


var $02d10f8b1c5875d5$exports = {};
$02d10f8b1c5875d5$exports = new URL("sword.0b40f6ad.png", import.meta.url).toString();


const $8f245283422dce19$export$42f043ac9305a2ac = new (0, $iPUCS$Loader)();
const $8f245283422dce19$var$resourceMap = {
    image: {
        Sword: (0, (/*@__PURE__*/$parcel$interopDefault($02d10f8b1c5875d5$exports)))
    },
    audio: {}
};
const $8f245283422dce19$var$resourceBuffer = {};
const $8f245283422dce19$var$addImageDef = (resource)=>{
    const constructedPath = new URL(resource[1]).pathname;
    console.info(`Adding resource ${resource[0]} : ${constructedPath}`);
    $8f245283422dce19$var$resourceBuffer[resource[0]] = new (0, $iPUCS$ImageSource)(constructedPath);
    $8f245283422dce19$export$42f043ac9305a2ac.addResource($8f245283422dce19$var$resourceBuffer[resource[0]]);
};
Object.entries($8f245283422dce19$var$resourceMap.image).forEach($8f245283422dce19$var$addImageDef);
// We build a loader and add all of our resources to the boot loader
// You can build your own loader by extending DefaultLoader
for (const res of Object.values($8f245283422dce19$var$resourceBuffer))$8f245283422dce19$export$42f043ac9305a2ac.addResource(res);
// It is convenient to put your resources in one place
const $8f245283422dce19$export$e9a269813a6315a4 = {
    ...$8f245283422dce19$var$resourceBuffer
};


//import { DefaultLoader, Engine, ExcaliburGraphicsContext, Scene, SceneActivationContext } from "excalibur";



class $05d8aa05e47deeef$export$2616165974278734 extends (0, $iPUCS$Actor) {
    constructor(){
        super({
            // Giving your actor a name is optional, but helps in debugging using the dev tools or debug mode
            // https://github.com/excaliburjs/excalibur-extension/
            // Chrome: https://chromewebstore.google.com/detail/excalibur-dev-tools/dinddaeielhddflijbbcmpefamfffekc
            // Firefox: https://addons.mozilla.org/en-US/firefox/addon/excalibur-dev-tools/
            name: 'Player',
            pos: (0, $iPUCS$vec)(150, 150),
            width: 100,
            height: 100
        });
    }
    onInitialize() {
        // Generally recommended to stick logic in the "On initialize"
        // This runs before the first update
        // Useful when
        // 1. You need things to be loaded like Images for graphics
        // 2. You need excalibur to be initialized & started 
        // 3. Deferring logic to run time instead of constructor time
        // 4. Lazy instantiation
        this.graphics.add((0, $8f245283422dce19$export$e9a269813a6315a4).Sword.toSprite());
        // Actions are useful for scripting common behavior, for example patrolling enemies
        this.actions.delay(2000);
        this.actions.repeatForever((ctx)=>{
            ctx.moveBy({
                offset: (0, $iPUCS$vec)(100, 0),
                duration: 1000
            });
            ctx.moveBy({
                offset: (0, $iPUCS$vec)(0, 100),
                duration: 1000
            });
            ctx.moveBy({
                offset: (0, $iPUCS$vec)(-100, 0),
                duration: 1000
            });
            ctx.moveBy({
                offset: (0, $iPUCS$vec)(0, -100),
                duration: 1000
            });
        });
        // Sometimes you want to click on an actor!
        this.on('pointerdown', (evt)=>{
            // Pointer events tunnel in z order from the screen down, you can cancel them!
            // if (true) {
            //   evt.cancel();
            // }
            console.log('You clicked the actor @', evt.worldPos.toString());
        });
    }
}


class $4aeb898cc618ded7$export$a4ec9a9b596deb08 extends (0, $iPUCS$Scene) {
    onInitialize(_engine) {
        // Scene.onInitialize is where we recommend you perform the composition for your game
        const player = new (0, $05d8aa05e47deeef$export$2616165974278734)();
        this.add(player); // Actors need to be added to a scene to be drawn
    }
}


// Goal is to keep main.ts small and just enough to configure the engine
const $734ce7b595da4c69$var$game = new (0, $iPUCS$Engine)({
    width: 800,
    height: 600,
    displayMode: (0, $iPUCS$DisplayMode).FitScreenAndFill,
    pixelArt: true,
    scenes: {
        start: (0, $4aeb898cc618ded7$export$a4ec9a9b596deb08)
    }
});
$734ce7b595da4c69$var$game.start('start', {
    loader: (0, $8f245283422dce19$export$42f043ac9305a2ac),
    inTransition: new (0, $iPUCS$FadeInOut)({
        duration: 1000,
        direction: 'in',
        color: (0, $iPUCS$Color).ExcaliburBlue
    })
}).then(()=>{
// Do something after the game starts
});


//# sourceMappingURL=index.js.map
