"use strict";

const DATA = [
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m1.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "8 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f1.png",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m2.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Тетяна",
		"last name": "Мороз",
		photo: "./img/trainers/trainer-f2.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
	},
	{
		"first name": "Сергій",
		"last name": "Коваленко",
		photo: "./img/trainers/trainer-m3.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
	},
	{
		"first name": "Олена",
		"last name": "Лисенко",
		photo: "./img/trainers/trainer-f3.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
	},
	{
		"first name": "Андрій",
		"last name": "Волков",
		photo: "./img/trainers/trainer-m4.jpg",
		specialization: "Бійцівський клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
	},
	{
		"first name": "Наталія",
		"last name": "Романенко",
		photo: "./img/trainers/trainer-f4.jpg",
		specialization: "Дитячий клуб",
		category: "спеціаліст",
		experience: "3 роки",
		description:
			"Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
	},
	{
		"first name": "Віталій",
		"last name": "Козлов",
		photo: "./img/trainers/trainer-m5.jpg",
		specialization: "Тренажерний зал",
		category: "майстер",
		experience: "10 років",
		description:
			"Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
	},
	{
		"first name": "Юлія",
		"last name": "Кравченко",
		photo: "./img/trainers/trainer-f5.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
	},
	{
		"first name": "Олег",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-m6.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "12 років",
		description:
			"Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
	},
	{
		"first name": "Лідія",
		"last name": "Попова",
		photo: "./img/trainers/trainer-f6.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
	},
	{
		"first name": "Роман",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m7.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
	},
	{
		"first name": "Анастасія",
		"last name": "Гончарова",
		photo: "./img/trainers/trainer-f7.jpg",
		specialization: "Басейн",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
	},
	{
		"first name": "Валентин",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-m8.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
	},
	{
		"first name": "Лариса",
		"last name": "Петренко",
		photo: "./img/trainers/trainer-f8.jpg",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "7 років",
		description:
			"Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
	},
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m9.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "11 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f9.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m10.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Наталія",
		"last name": "Бондаренко",
		photo: "./img/trainers/trainer-f10.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "8 років",
		description:
			"Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
	},
	{
		"first name": "Андрій",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m11.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
	},
	{
		"first name": "Софія",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-f11.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "6 років",
		description:
			"Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
	},
	{
		"first name": "Дмитро",
		"last name": "Ковальчук",
		photo: "./img/trainers/trainer-m12.png",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
	},
	{
		"first name": "Олена",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-f12.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "5 років",
		description:
			"Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
	},
];

DATA.forEach((trainer, index) => {
	trainer.id = index ++;
  })
window.onload = function () {
	const preload = document.querySelector(".gooey");
	preload.style.display = "block";
	setTimeout(() => {
		preload.style.display = "none";
	}, 1500);
}
const trainerContainer = document.querySelector(".trainers-cards__container");
const trainerTemplate = document.querySelector("#trainer-card");

function addCardTrainer() {
	const trainerTemplate = document.querySelector("#trainer-card");
		const aside = document.querySelector(".sidebar");
		aside.hidden = false;
		const sidebar = document.querySelector(".sorting");
		sidebar.hidden = false;
		const storedFilters = JSON.parse(localStorage.getItem("filters"));
  
	  storedFilters.forEach((user) => {
	  const dataClone = trainerTemplate.content.cloneNode(true);
	  const photoTrainer = user.photo;
	  const trainerName = `${user["first name"]} ${user["last name"]}`;
	  dataClone.querySelector(".trainer__img").src = photoTrainer;
	  dataClone.querySelector(".trainer__name").textContent = trainerName;
  
	  const trainerCard = dataClone.querySelector(".trainer");
	  trainerCard.id = user.id;
  
	  trainerContainer.append(dataClone);
	});
  }
  
  setTimeout(addCardTrainer, 1500);
  

  trainerContainer.addEventListener("click", function (event) {
	if (event.target.tagName === "BUTTON") {
		const modalTemplate = document.querySelector("#modal-template");
	
		const clickedCard = event.target.closest(".trainer");
		const clickedCardId = clickedCard.id;
		const user = DATA[clickedCardId];
	
		if (user) {
	
		  const cloneDataModal = modalTemplate.content.cloneNode(true);
		  
		  const photoModalTrainer = user.photo;
		  const nameModalTrainer = `${user["first name"]} ${user["last name"]}`;
		  const categoryModalTrainer = user.category;
		  const experienceModalTrainer = user.experience;
		  const specializationModalTrainer = user.specialization;
		  const descriptionModalTrainer = user.description;
		
		  cloneDataModal.querySelector(".modal__img").src = photoModalTrainer;
		  cloneDataModal.querySelector(".modal__name").textContent = nameModalTrainer;
		  cloneDataModal.querySelector(".modal__point--category").textContent = categoryModalTrainer;
		  cloneDataModal.querySelector(".modal__point--experience").textContent = experienceModalTrainer;
		  cloneDataModal.querySelector(".modal__point--specialization").textContent = specializationModalTrainer;
		  cloneDataModal.querySelector(".modal__text").textContent = descriptionModalTrainer;
		  
		  trainerContainer.append(cloneDataModal);
  
		  document.body.style.overflow = "hidden";
  
		  const btnClose = document.querySelector(".modal__close");
		  btnClose.addEventListener("click", function () {
			  trainerContainer.lastElementChild.remove();
			  document.body.style.overflow = "auto";
		  })
		} 
	  }});


	  function filteredByFirstName(initalArray) {
		const filtered = initalArray.slice();
		return filtered.filter((user) => user["last name"] !== undefined).sort((user1, user2) => {
			return user1["last name"].localeCompare(user2["last name"]);
		  });
	  };

	  

	const sortBtn = document.querySelectorAll(".sorting__btn");
	const btnSort = document.querySelector(".sorting");
	
	btnSort.addEventListener("click", function (event) {
		if(event.target.tagName === "BUTTON") {
		
			if (event.target.innerText === "ЗА замовчуванням".toUpperCase()) {
				sortBtn.forEach((btn) => {
					btn.classList.remove("sorting__btn--active")
				})
				event.target.classList.add("sorting__btn--active");
			  trainerContainer.innerHTML = "";
		
			  DATA.forEach((user) => {
				const dataClone = trainerTemplate.content.cloneNode(true);
				const photoTrainer = user.photo;
				const trainerName = `${user["first name"]} ${user["last name"]}`;
		
				dataClone.querySelector(".trainer__img").src = photoTrainer;
				dataClone.querySelector(".trainer__name").textContent = trainerName;
		
				const trainerCard = dataClone.querySelector(".trainer");
				trainerCard.id = user.id;
		
				trainerContainer.append(dataClone);
			  });
			  const saved = localStorage.setItem("filters", JSON.stringify(DATA));
			} else if (event.target.innerText === "ЗА ПРІЗВИЩЕМ") {
				sortBtn.forEach((btn) => {
					btn.classList.remove("sorting__btn--active")
				})
				event.target.classList.add("sorting__btn--active");
			  const sortedTrainers = filteredByFirstName(DATA);
		
			  trainerContainer.innerHTML = "";
		
			  sortedTrainers.forEach((user) => {
				const dataClone = trainerTemplate.content.cloneNode(true);
				const photoTrainer = user.photo;
				const trainerName = `${user["first name"]} ${user["last name"]}`;
		
				dataClone.querySelector(".trainer__img").src = photoTrainer;
				dataClone.querySelector(".trainer__name").textContent = trainerName;
		
				const trainerCard = dataClone.querySelector(".trainer");
				trainerCard.id = user.id;
		
				trainerContainer.append(dataClone);
			  });
			  const saved = localStorage.setItem("filters", JSON.stringify(sortedTrainers));
			} else if (event.target.innerText === "ЗА ДОСВІДОМ") {
				sortBtn.forEach((btn) => {
					btn.classList.remove("sorting__btn--active")
				})
				event.target.classList.add("sorting__btn--active");
			  const sortedTrainers = DATA.slice().sort((user1, user2) => {
				let experience1 = parseInt(user1.experience.split(' ')[0]);
				let experience2 = parseInt(user2.experience.split(' ')[0]);
		
				if (user1.experience.includes('років')) {
				  experience1 *= 12;
				}
		
				if (user2.experience.includes('років')) {
				  experience2 *= 12;
				}
		
				return experience2 - experience1;
			  });
		
			  trainerContainer.innerHTML = "";
		
			  sortedTrainers.forEach((user) => {
				const dataClone = trainerTemplate.content.cloneNode(true);
				const photoTrainer = user.photo;
				const trainerName = `${user["first name"]} ${user["last name"]}`;
		
				dataClone.querySelector(".trainer__img").src = photoTrainer;
				dataClone.querySelector(".trainer__name").textContent = trainerName;
		
				const trainerCard = dataClone.querySelector(".trainer");
				trainerCard.id = user.id;
		
				trainerContainer.append(dataClone);
			  });
			  const saved = localStorage.setItem("filters", JSON.stringify(sortedTrainers));
			}
		}
	});



	function filterBySpecialization(initalArray,specialization) {
		return initalArray.filter((trainer) => trainer.specialization === specialization);
	  };

	function filterByCategory(initalArray,category) {
		return initalArray.filter((trainer) => trainer.category === category);
	};

	const radioBtns = document.querySelectorAll(".filters__input");
	const submitBtn = document.querySelector(".filters__submit");

	submitBtn.addEventListener("click", function (event) {
		event.preventDefault();
		const selectedBtn = [];
		radioBtns.forEach((button) => {
			if (button.checked) {
				selectedBtn.push(button);
			}
		})
		let filtered = [];
		let specialization = [];
		selectedBtn.forEach((button) => {

			if (button.value === "swimming pool") {
				specialization = filterBySpecialization(DATA, "Басейн");
			} else if (button.value === "kids club") {
				specialization = filterBySpecialization(DATA, "Дитячий клуб");
			} else if (button.value === "fight club") {
				specialization = filterBySpecialization(DATA, "Бійцівський клуб");
			} else if (button.value === "gym") {
				specialization = filterBySpecialization(DATA, "Тренажерний зал");
			} else if (button.id === "all-direction") {
				specialization = DATA;
			}

			if (button.value === "master") {
			    filtered = filterByCategory(specialization, "майстер");
			} else if (button.value === "specialist") {
				filtered = filterByCategory(specialization, "спеціаліст");
			} else if (button.value === "instructor") {
				filtered = filterByCategory(specialization, "інструктор");
			} else if (button.id === "all-category") {
				filtered = specialization;
			}
			
		})
		console.log(filtered);
		trainerContainer.innerHTML = "";
		
		filtered.forEach((user) => {
		  const dataClone = trainerTemplate.content.cloneNode(true);
		  const photoTrainer = user.photo;
		  const trainerName = `${user["first name"]} ${user["last name"]}`;
  
		  dataClone.querySelector(".trainer__img").src = photoTrainer;
		  dataClone.querySelector(".trainer__name").textContent = trainerName;
  
		  const trainerCard = dataClone.querySelector(".trainer");
		  trainerCard.id = user.id;
  
		  trainerContainer.append(dataClone);
		});
		const saved = localStorage.setItem("filters", JSON.stringify(filtered));
	});