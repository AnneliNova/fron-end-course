import { sortMovies } from './helpers.js';

export function getMovies() {
	return 	fetch('https://run.mocky.io/v3/22a227f7-8ae0-4813-a523-292e0033b2e0')
	    .then((res) => res.json())
	    .then(sortMovies);
}