import md5 from 'md5';
// Toma los valores de la clave pública y provada desde el archivo .env
import { PUBLIC_KEY, PRIVATE_KEY } from '@env';

const ts = Date.now();
// Generamos el hash que nos pide la API pasandole como parámetro 
// a la función md5 un string que concatene el ts + PRIVATE_KEY + PUBLIC_KEY
const hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`);

// Exportamos un objeto con los datos necesarios para usar la API
// para que luego podamos importarlo desde cualquier componente
const apiParams = {
  ts,
  apikey: PUBLIC_KEY,
  hash,
	baseURL: 'https://gateway.marvel.com'
};
export default apiParams;