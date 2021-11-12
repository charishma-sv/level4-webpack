import wbpkImg from './images/awesome_webpack_branding.png';
import { add } from './math';

const loadImage = () => {
  const image = new Image();
  image.src = wbpkImg;
  console.log('adding inside img file', add());
  return image;
};

export { loadImage };
