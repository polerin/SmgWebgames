import { ImageSource, Loadable, Loader } from "excalibur";
import swordPath from './images/sword.png';

type ResourceMapKey = 'image' | 'audio';

const loader = new Loader();
const resourceMap: Record<ResourceMapKey, Record<string, string>> = {
  image: {
    Sword: swordPath,
  },
  audio: {

  }
};

const resourceBuffer: Record<string, Loadable<any>> = {};

const addImageDef = (resource:[name: string, path: string]): void => {
  const constructedPath = (new URL(resource[1])).pathname;
  console.info(`Adding resource ${resource[0]} : ${constructedPath}`);

  resourceBuffer[resource[0]] = new ImageSource(constructedPath);

  loader.addResource(resourceBuffer[resource[0]]);
};

Object.entries(resourceMap.image).forEach(addImageDef);



// We build a loader and add all of our resources to the boot loader
// You can build your own loader by extending DefaultLoader
for (const res of Object.values(resourceBuffer)) {
  loader.addResource(res);
}

// It is convenient to put your resources in one place
export const Resources = {... resourceBuffer } as const; 
export const mainLoader = loader;