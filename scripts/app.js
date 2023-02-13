import { getMovies } from './service.js';
import { appendContent } from './helpers.js';
import { createContentTemplate } from './card.js';
import { createSorting } from './sorting.js';

function init() {
  appendContent('sort', createSorting());

  getMovies()
    .then((data) => {
      const fragment = document.createDocumentFragment();

      data.forEach((movie) => {
        fragment.appendChild(createContentTemplate(movie));
      });

      appendContent('content', fragment);
    });
}

init();

// function createSorting() {
// 	const sort = new URLSearchParams(location.search).get('sort');

// 	const nav = `
// 	<a class="sort__item ${sort === 'name' ? 'active' : ''}" href="${location.origin + location.pathname +` ?sort=name`}">Дата</a>
// 	<a class="sort__item ${sort === 'date' ? 'active' : ''}" href="${location.origin + location.pathname + `?sort=name`}">Назва</a>
// 	`;
// 	return createFragmentTemplate(nav);
// }

// function createContentTemplate(movie) {
// 	const article = `<article class="card">
// 	<header class="card__header" style="background-image: url(${movie.image})"> 
// 		<h2 class="card__title">${movie.title}</h2>
// 		<span class="card__info">${new Date(movie.date).getFullYear()} - ${movie.duration}</span>
// 	</header>
// 	<section class="card__content">
// 	<p class="card__description"> ${movie.description}</p>
// 	<hr> 
// 	<p>Режисер:${movie.director}</p>	
// 	</section>
// 	</article>`;
	
// 	return createContentTemplate(article);
// }

// function createFragmentTemplate(str) {
// 	const template = document.createElement('template');
	
// 	template.innerHTML = str;
	
// 	return template.content;
// }

// //
// function appendContent(id, content) {
//    const el = document.getElementById(id);

//    el.appendChild(content);
// }

// function sortMovies(data) {
// 	const sort = new URLSearchParams(location.search).get('sort');

// 	switch(sort) {
// 		case 'name':
// 			return data.sort((a, b) => a.title.localeCompare(b.title));
// 		case 'date':
// 			return data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
// 		default:
// 			return date;
// 	}
// }

// function init(movies) {
// 	const fragment = document.createDocumentFragment();

// 	sortMovies(movies).forEach((movie)=> {
// 		fragment.appendChild(createFragmentTemplate(movie));
// 	});
// 	appendContent('content', fragment);
// 	appendContent('sort', createSorting());

// }

// init(movies);
// function createFragmentTemplate(movie) {
// 	const article = `<article class="card">
// 	<header class="card__header"> 
// 		<h2 class="card__title">The Archer </h2>
// 		<span class="card__info">	2017 -  86 хв.</span>
// 	</header>
// 	<section class="card__content">
// 		<p class="card__description"> Лорен – цілеспрямована дівчина, яка присвятила своє життя спорту. Вона дуже багато тренується, що дозволяє їй стати членом збірної зі стрільби з лука. Вирушивши на чемпіонат штату, дівчина помітила синці на руках Емілі, її кращої подруги. Лорен зрозуміла, що вони є наслідками сварок із її хлопцем Деніелем.Завдяки результатам Лорен, команда досягає перемоги, і дівчата вирішують відзначити цю подію у себе в номері. Коли вони веселилися, з'явився Деніель і почав поводитися по-хамськи. Він схопив Емілі за шию і почав душити її, що стало для Лорен останньою краплею. </p>
// 	<hr> 
// 	<p>Режисер: Валері Уайсс</p>	
// 	</section>
// 	</article>
// 			<article class="card">
// 	<header class="card__header1"> 
// 		<h2 class="card__title">Загублене місто</h2>
// 		<span class="card__info">	2022 -  1 год 52 хв.</span>
// 	</header>
// 	<section class="card__content">
// 		<p class="card__description"> Після смерті свого чоловіка-археолога, Лоретта Сейдж стає затворницею і зосереджується на написанні любовно-пригодницьких романів за участю доктора Анджели Лавмор та безстрашного мисливця за скарбами Деша МакМехона, чию роль на всіх презентаціях та на обкладинці виконує актор та секс-сім. Коли божевільний мільярдер Ебігейл Фейрфакс викрадає Лоретту, маючи намір за допомогою її розшукати скарби загубленого міста, Алан, упевнений, що здатний бути героєм не лише в мистецьких романах, наважується на небезпечну рятувальну місію.</p>
// 	<hr> 
// 	<p>Режисер: Аарон Ни</p>	
// 	</section>
// 	</article>
// 	<article class="card">
// 	<header class="card__header"> 
// 		<h2 class="card__title">The Archer </h2>
// 		<span class="card__info">	2017 -  86 мин.</span>
// 	</header>
// 	<section class="card__content">
// 		<p class="card__description"> Лорен – цілеспрямована дівчина, яка присвятила своє життя спорту. Вона дуже багато тренується, що дозволяє їй стати членом збірної зі стрільби з лука. Вирушивши на чемпіонат штату, дівчина помітила синці на руках Емілі, її кращої подруги. Лорен зрозуміла, що вони є наслідками сварок із її хлопцем Деніелем.Завдяки результатам Лорен, команда досягає перемоги, і дівчата вирішують відзначити цю подію у себе в номері. Коли вони веселилися, з'явився Деніель і почав поводитися по-хамськи. Він схопив Емілі за шию і почав душити її, що стало для Лорен останньою краплею. </p>
// 	<hr> 
// 	<p>Режисер: Валері Уайсс</p>	
// 	</section>
// 	</article>
// 			<article class="card">
// 	<header class="card__header" style="background-image: url(${movie.image})"> 
// 		<h2 class="card__title">${movie.title}</h2>
// 		<span class="card__info">${movie.date} - ${movie.duration}</span>
// 	</header>
// 	<section class="card__content">
// 	<p class="card__description"> ${movie.description}</p>
// 	<hr> 
// 	<p>Режисер:${movie.director}</p>	
// 	</section>
// 	</article>`;

// 	return createFragmentTemplate(article);

// }



//  function sortMovies(data) {
// 	const sort = new URLSearchParams(location.search).get('sort');

// 	switch(sort) {
// 		case: `name`:
// 			return data.sort((a, b) => a.title.localeCompare(b.title));
// 		case: 'date':
// 			return data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
// 		default: 
// 			return date;
// 	}
//  }






// const info = document.createElement('span');
// info.classList.add('card__info');
// info.textContent = `${movie.date} - ${movie.duration}`;

// header.appendChild(h2);
// header.appendChild(info);
	
//section
// const section = document.createElement('section');
// section.classList.add('card__content');

// const description = document.createElement('p');
// description.classList.add('card__description');
// description.textContent = movie.description;

// const line = document.createElement('hr');

// const director = document.createElement('p');
// director.textContent = movie.director;

// section.appendChild(description);
// section.appendChild(line);
// section.appendChild(director);

// article.appendChild(header);
// article.appendChild(section);

// return article;

// section


// class Movie {
// 	constructor(movie) {
// 		this.title = movie.title;
// 		this.image = movie.image;
// 		this.description = movie.description;
// 		this.date = new Date(movie.date).getFullYear();
// 		this.director = movie.director;
// 		this.duration = movie.duration;
// 	}
// 	createContent() {
	// card
// 	const article = document.createElement('article');
// 	article.classList.add('card');

	//header
// 	const header = document.createElement('header');
// 	header.classList.add('card__header');
// 	header.style.backgroundImage = `url(${this.image})`;

// 	const h2 = document.createElement('H2');
// 	h2.classList.add('card__title');
// 	h2.textContent = this.title;



// 	}
// }

// class App {
// 	static renderAll(movies){
// 		const el = document.getElementById('content');
// 		const fragment = document.createDocumentFragment();

// 		movies.forEach((movie) => {
// 			fragment.appendChild(new Movie(movie).createContent());
// 		});

// 		el.appendChild(fragment);
// 	}
// }

// App.renderAll(movies);
