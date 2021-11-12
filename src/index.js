//import { loadImage } from './img';//dynamic import

const element = document.getElementById('btn');
element.addEventListener('click', () => {
  const body = document.querySelector('body');
  const div = document.createElement('div');
  body.appendChild(div);
  // div.appendChild(import('./img').then(image));
  import('./img').then((image) => {
    div.appendChild(image.loadImage());
  });
});
