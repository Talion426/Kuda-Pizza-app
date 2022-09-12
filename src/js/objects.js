'use strict';

let pizzas = [
  {
    img: './images/pizzas/pizza1.png',
    title: 'Маргарита',
    descr: 'Соус красный, сыр моцарелла, томаты черри',
    button: 'Выбрать',
    currency: '249',
    id: '1',
  },
  {
    img: './images/pizzas/pizza2.png',
    title: 'Пепперони',
    descr: 'Соус красный, сыр моцарелла, пепперони',
    button: 'Выбрать',
    currency: '249',
    id: '2',
  },
  {
    img: './images/pizzas/pizza3.png',
    title: 'Ветчина и грибы',
    descr: 'Соус красный, сыр моцарелла, ветчина, шампиньоны',
    button: 'Выбрать',
    currency: '249',
    id: '3',
  },
  {
    img: './images/pizzas/pizza4.png',
    title: 'Гавайская',
    descr: 'Соус красный, сыр моцарелла, ветчина, ананасы',
    button: 'Выбрать',
    currency: '249',
    id: '4',
  },
  {
    img: './images/pizzas/pizza5.png',
    title: 'Тропиканка',
    descr: 'Соус красный, сыр моцарелла, цыплёнок, ананасы, халапеньо',
    button: 'Выбрать',
    currency: '359',
    id: '5',
  },
  {
    img: './images/pizzas/pizza6.png',
    title: 'Барбекю',
    descr:
      'Соус красный, сыр моцарелла, цыплёнок, маринованные огурцы, соус барбекю',
    button: 'Выбрать',
    currency: '339',
    id: '6',
  },
  {
    img: './images/pizzas/pizza7.png',
    title: 'Песто',
    descr: 'Соус красный, сыр моцарелла, цыплёнок, томаты черри, соус песто',
    button: 'Выбрать',
    currency: '489',
    id: '7',
  },
  {
    img: './images/pizzas/pizza8.png',
    title: 'Пепперони с грибами',
    descr: 'Соус красный, сыр моцарелла, пепперони, шампиньоны',
    button: 'Выбрать',
    currency: '369',
    id: '8',
  },
  {
    img: './images/pizzas/pizza9.png',
    title: 'Четыре сыра',
    descr:
      'Соус красный, сыр моцарелла, сыр пармезан, сыр чеддер, сыр гарганзола',
    button: 'Выбрать',
    currency: '399',
    id: '9',
  },
  {
    img: './images/pizzas/pizza10.png',
    title: 'Груша',
    descr: 'Сметана, сыр моцарелла, груша, мёд, грецкий орех',
    button: 'Выбрать',
    currency: '389',
    id: '10',
  },
  {
    img: './images/pizzas/pizza11.png',
    title: 'Цезарь',
    descr: 'Соус белый, сыр моцарелла, цыплёнок, салат айсберг, томаты черри',
    button: 'Выбрать',
    currency: '379',
    id: '11',
  },
  {
    img: './images/pizzas/pizza12.png',
    title: 'Дабл пепперони',
    descr: 'Соус красный, сыр моцарелла, увеличенная порция пепперони',
    button: 'Выбрать',
    currency: '419',
    id: '12',
  },
  {
    img: './images/pizzas/pizza13.png',
    title: 'Диабло',
    descr:
      'Соус красный, сыр моцарелла, пепперони, чоризо, халапеньо, красный лук, болгарский перец',
    button: 'Выбрать',
    currency: '369',
    id: '13',
  },
  {
    img: './images/pizzas/pizza14.png',
    title: 'Пепперони фреш',
    descr: 'Соус красный, сыр моцарелла, пепперони, томаты черри',
    button: 'Выбрать',
    currency: '379',
    id: '14',
  },
  {
    img: './images/pizzas/pizza15.png',
    title: 'Карбонара',
    descr:
      'Соус красный, сыр моцарелла, бекон, томаты черри, сыр пармезан, яйцо',
    button: 'Выбрать',
    currency: '469',
    id: '15',
  },
  {
    img: './images/pizzas/pizza16.png',
    title: 'Мексиканская',
    descr:
      'Соус красный, сыр моцарелла, болгарский перец, цыплёнок, халапеньо, красный лук',
    button: 'Выбрать',
    currency: '359',
    id: '16',
  },
  {
    img: './images/pizzas/pizza17.png',
    title: 'Морская',
    descr:
      'Соус белый, сыр моцарелла, креветки, лосось, мидии, томаты черри, соус унаги',
    button: 'Выбрать',
    currency: '539',
    id: '17',
  },
  {
    img: './images/pizzas/pizza18.png',
    title: 'Грибная',
    descr: 'Соус красный, сыр моцарелла, шампиньоны, вешенки',
    button: 'Выбрать',
    currency: '299',
    id: '18',
  },
  {
    img: './images/pizzas/pizza19.png',
    title: 'Вкусная',
    descr:
      'Соус красный, сыр моцарелла, бекон, маринованные огурцы, маслины, красный лук, сыр чеддер',
    button: 'Выбрать',
    currency: '409',
    id: '19',
  },
  {
    img: './images/pizzas/pizza20.png',
    title: 'Мясное ассорти',
    descr:
      'Соус красный, сыр моцарелла, пепперони, ветчина, цыплёнок, бекон, охотничьи колбаски, красный лук, болгарский перец, маслины',
    button: 'Выбрать',
    currency: '469',
    id: '20',
  },
  {
    img: './images/pizzas/pizza21.png',
    title: 'Деревенская',
    descr: 'Соус белый, сыр моцарелла, шампиньоны, чеснок, бекон, красный лук',
    button: 'Выбрать',
    currency: '339',
    id: '21',
  },
  {
    img: './images/pizzas/pizza22.png',
    title: 'Чоризо',
    descr: 'Соус красный, сыр моцарелла, чоризо, болгарский перец',
    button: 'Выбрать',
    currency: '389',
    id: '22',
  },
  {
    img: './images/pizzas/pizza23.png',
    title: 'Ватикан',
    descr:
      'Соус белый, сыр моцарелла, пепперони, бекон, цыплёнок, болгарский перец, красный лук, томаты черри, маслины',
    button: 'Выбрать',
    currency: '439',
    id: '23',
  },
  {
    img: './images/pizzas/pizza24.png',
    title: 'Охотничья',
    descr:
      'Соус красный, сыр моцарелла, охотничьи колбаски, бекон, красный лук, маринованные огурцы, халапеньо',
    button: 'Выбрать',
    currency: '379',
    id: '24',
  },
  {
    img: './images/pizzas/pizza25.png',
    title: 'Курица и грибы',
    descr: 'Соус красный, сыр моцарелла, шампиньоны, цыплёнок',
    button: 'Выбрать',
    currency: '329',
    id: '25',
  },
  {
    img: './images/pizzas/pizza26.png',
    title: 'Сёмга',
    descr: 'Соус белый, сыр моцарелла, лосось, томаты черри, салат айсберг',
    button: 'Выбрать',
    currency: '469',
    id: '26',
  },
  {
    img: './images/pizzas/pizza27.png',
    title: 'Четыре сезона',
    descr:
      'Соус красный, сыр моцарелла, ветчина, шампиньоны, пепперони, цыплёнок, ананасы, халапеньо, сыр пармезан, сыр чеддер, сыр гарганзола',
    button: 'Выбрать',
    currency: '249',
    id: '27',
  },
];

let rolls = [
  {
    img: './images/rolls/roll1.png',
    title: 'Филадельфия хит ролл',
    descr: 'Рис, нори, сыр филадельфия, лосось',
    button: 'Выбрать',
    currency: '349',
    id: '1',
  },
  {
    img: './images/rolls/roll2.png',
    title: 'Авокадный фреш ролл',
    descr:
      'Рис, нори, лосось, сыр филадельфия, авокадо, майонез, соус унаги, кунжут',
    button: 'Выбрать',
    currency: '349',
    id: '2',
  },
  {
    img: './images/rolls/roll3.png',
    title: 'Филадельфия с огурцом ролл',
    descr: 'Рис, нори, сыр филадельфия, огурец, лосось',
    button: 'Выбрать',
    currency: '349',
    id: '3',
  },
  {
    img: './images/rolls/roll4.png',
    title: 'Филадельфия с креветкой ролл',
    descr: 'Рис, нори, сыр филадельфия, креветки, лосось',
    button: 'Выбрать',
    currency: '449',
    id: '4',
  },
  {
    img: './images/rolls/roll5.png',
    title: 'Филадельфия с угрём ролл',
    descr: 'Рис, нори, сыр филадельфия, угорь, лосось',
    button: 'Выбрать',
    currency: '449',
    id: '5',
  },
  {
    img: './images/rolls/roll6.png',
    title: 'Калифорния ролл',
    descr: 'Рис, нори, снежный краб, огурец, авокадо, икра масаго',
    button: 'Выбрать',
    currency: '249',
    id: '6',
  },
  {
    img: './images/rolls/roll7.png',
    title: 'Калифорния с креветкой ролл',
    descr: 'Рис, нори, креветка, авокадо, огурец, икра масаго',
    button: 'Выбрать',
    currency: '359',
    id: '7',
  },
  {
    img: './images/rolls/roll8.png',
    title: 'Калифорния с угрём ролл',
    descr: 'Рис, нори, угорь, авокадо, огурец, икра масаго',
    button: 'Выбрать',
    currency: '449',
    id: '8',
  },
  {
    img: './images/rolls/roll9.png',
    title: 'Калифорния с лососем ролл',
    descr: 'Рис, нори, лосось, авокадо, огурец, икра масаго',
    button: 'Выбрать',
    currency: '359',
    id: '9',
  },
  {
    img: './images/rolls/roll10.png',
    title: 'Канада ролл',
    descr: 'Рис, нори, сыр филадельфия, огурец, угорь, соус унаги, кунжут',
    button: 'Выбрать',
    currency: '459',
    id: '10',
  },
  {
    img: './images/rolls/roll11.png',
    title: 'Невада ролл',
    descr:
      'Рис, нори, сыр филадельфия, огурец, лосось, угорь, соус унаги, кунжут',
    button: 'Выбрать',
    currency: '459',
    id: '11',
  },
  {
    img: './images/rolls/roll12.png',
    title: 'Эби ролл',
    descr: 'Рис, нори, сыр филадельфия, креветка',
    button: 'Выбрать',
    currency: '369',
    id: '12',
  },
  {
    img: './images/rolls/roll13.png',
    title: 'Бонито ролл',
    descr: 'Рис, нори, лосось, сыр филадельфия, огурец, стружка тунца',
    button: 'Выбрать',
    currency: '369',
    id: '13',
  },
  {
    img: './images/rolls/roll14.png',
    title: 'Огурец маки ролл',
    descr: 'Рис, нори, огурец',
    button: 'Выбрать',
    currency: '139',
    id: '14',
  },
  {
    img: './images/rolls/roll15.png',
    title: 'Угорь маки ролл',
    descr: 'Рис, нори, угорь',
    button: 'Выбрать',
    currency: '279',
    id: '15',
  },
  {
    img: './images/rolls/roll16.png',
    title: 'Лосось маки ролл',
    descr: 'Рис, нори, лосось',
    button: 'Выбрать',
    currency: '219',
    id: '16',
  },
  {
    img: './images/rolls/roll17.png',
    title: 'Креветка маки ролл',
    descr: 'Рис, нори, креветка',
    button: 'Выбрать',
    currency: '219',
    id: '17',
  },
  {
    img: './images/rolls/roll18.png',
    title: 'Краб маки ролл',
    descr: 'Рис, нори, снежный краб',
    button: 'Выбрать',
    currency: '139',
    id: '18',
  },
  {
    img: './images/rolls/roll19.png',
    title: 'Филадельфия лайт ролл',
    descr: 'Рис, нори, сыр филадельфия, лосось',
    button: 'Выбрать',
    currency: '289',
    id: '19',
  },
  {
    img: './images/rolls/roll20.png',
    title: 'Миока ролл',
    descr: 'Рис, нори, креветки, сыр филадельфия, лосось, соус спайс',
    button: 'Выбрать',
    currency: '499',
    id: '20',
  },
  {
    img: './images/rolls/roll21.png',
    title: 'Филадельфия спайси ролл',
    descr: 'Рис, нори, сыр филадельфия, огурец, лосось, соус спайс',
    button: 'Выбрать',
    currency: '299',
    id: '21',
  },
  {
    img: './images/rolls/roll22.png',
    title: 'Калифорния в кунжуте ролл',
    descr: 'Рис, нори, снежный краб, авокадо, огурец, кунжут',
    button: 'Выбрать',
    currency: '219',
    id: '22',
  },
  {
    img: './images/rolls/roll23.png',
    title: 'Фиеста ролл',
    descr:
      'Рис, нори, сыр филадельфия, снежный краб, айсберг, яичный блинчик, соус унаги, кунжут',
    button: 'Выбрать',
    currency: '239',
    id: '23',
  },
  {
    img: './images/rolls/roll24.png',
    title: 'Запечённая калифорния ролл',
    descr: 'Рис, нори, снежный краб, авокадо, икра масаго, соус розовый',
    button: 'Выбрать',
    currency: '339',
    id: '24',
  },
  {
    img: './images/rolls/roll25.png',
    title: 'Балтимор ролл',
    descr:
      'Рис, нори, курица, сыр филадельфия, соус сырный, соус унаги, кунжут',
    button: 'Выбрать',
    currency: '249',
    id: '25',
  },
  {
    img: './images/rolls/roll26.png',
    title: 'Эби чиз ролл',
    descr: 'Рис, нори, креветки, сыр филадельфия, сыр гауда',
    button: 'Выбрать',
    currency: '419',
    id: '26',
  },
  {
    img: './images/rolls/roll27.png',
    title: 'Самурай ролл',
    descr:
      'Рис, нори, креветки, лосось, сыр филадельфия, соус запечённый, соус спайс',
    button: 'Выбрать',
    currency: '379',
    id: '27',
  },
  {
    img: './images/rolls/roll28.png',
    title: 'Мидии гриль ролл',
    descr: 'Рис, нори, сыр филадельфия, огурец, икра масаго, соус гриль, мидии',
    button: 'Выбрать',
    currency: '339',
    id: '28',
  },
  {
    img: './images/rolls/roll29.png',
    title: 'Опалённый лосось ролл',
    descr: 'Рис, нори, сыр филадельфия, лосось, сахар, соус унаги',
    button: 'Выбрать',
    currency: '479',
    id: '29',
  },
  {
    img: './images/rolls/roll30.png',
    title: 'Сырный запечённый ролл',
    descr: 'Рис, нори, курица, айсберг, сыр филадельфия, соус сырный',
    button: 'Выбрать',
    currency: '249',
    id: '30',
  },
  {
    img: './images/rolls/roll31.png',
    title: 'Бонсай темпура ролл',
    descr:
      'Рис, нори, сыр филадельфия, угорь, авокадо, панировка, соус унаги, соус спайс',
    button: 'Выбрать',
    currency: '389',
    id: '31',
  },
  {
    img: './images/rolls/roll32.png',
    title: 'Акита темпура ролл',
    descr: 'Рис, нори, креветки, огурец, панировка, соус спайс',
    button: 'Выбрать',
    currency: '359',
    id: '32',
  },
  {
    img: './images/rolls/roll33.png',
    title: 'Мироши темпура ролл',
    descr: 'Рис, нори, сыр филадельфия, лосось, икра масаго, панировка',
    button: 'Выбрать',
    currency: '359',
    id: '33',
  },
  {
    img: './images/rolls/roll34.png',
    title: 'Сакана темпура ролл',
    descr: 'Рис, нори, креветки, лосось, сыр филадельфия, панировка',
    button: 'Выбрать',
    currency: '379',
    id: '34',
  },
  {
    img: './images/rolls/roll35.png',
    title: 'Манхеттен темпура ролл',
    descr: 'Рис, нори, курица, сыр филадельфия, авокадо, панировка',
    button: 'Выбрать',
    currency: '239',
    id: '35',
  },
];

let sushies = [
  {
    img: './images/sushi/sushi1.png',
    title: 'Лосось суши 2шт.',
    descr: 'Рис, лосось',
    button: 'Выбрать',
    currency: '299',
    id: '1',
  },
  {
    img: './images/sushi/sushi2.png',
    title: 'Угорь суши 2шт.',
    descr: 'Рис, угорь, нори',
    button: 'Выбрать',
    currency: '399',
    id: '2',
  },
  {
    img: './images/sushi/sushi3.png',
    title: 'Спайс лосось гункан 2шт.',
    descr: 'Рис, нори, лосось, соус спайс',
    button: 'Выбрать',
    currency: '299',
    id: '3',
  },
  {
    img: './images/sushi/sushi4.png',
    title: 'Спайс угорь гункан 2шт.',
    descr: 'Рис, нори, угорь, соус спайс',
    button: 'Выбрать',
    currency: '399',
    id: '4',
  },
  {
    img: './images/sushi/sushi5.png',
    title: 'Спайс креветка гункан 2шт.',
    descr: 'Рис, нори, креветки, соус спайс',
    button: 'Выбрать',
    currency: '269',
    id: '5',
  },
];

let sets = [
  {
    img: './images/sets/set1.png',
    title: 'Классика сет',
    descr:
      'Ролл Канада (8шт.), ролл Филадельфия хит (8шт.), ролл Калифорния (8шт.), суши с лососем (2 шт.), суши с угрём (2 шт.)',
    button: 'Выбрать',
    currency: '1479',
    id: '1',
  },
  {
    img: './images/sets/set2.png',
    title: 'Филадельфия сет',
    descr:
      'Ролл Филадельфия (8шт.), ролл Филадельфия с огурцом (8шт.), ролл Филадельфия с креветкой (8шт.), ролл Филадельфия с угрём (8шт.)',
    button: 'Выбрать',
    currency: '1449',
    id: '2',
  },
  {
    img: './images/sets/set3.png',
    title: 'Темпура сет',
    descr:
      'Бонсай темпура ролл (8шт.), Сакана темпура ролл (8шт.), Манхеттен темпура ролл (8шт.)',
    button: 'Выбрать',
    currency: '879',
    id: '3',
  },
  {
    img: './images/sets/set4.png',
    title: 'Запечённый сет',
    descr:
      'Калифорния запечённая (8шт.), ролл Самурай (8шт.), Балтимор ролл (8шт.)',
    button: 'Выбрать',
    currency: '849',
    id: '4',
  },
  {
    img: './images/sets/set5.png',
    title: 'Микс сет',
    descr:
      'Ролл Филадельфия спайси (8шт.), ролл Филадельфия с огурцом (8шт.), ролл Балтимор (8шт.), ролл Бонсай (8шт.)',
    button: 'Выбрать',
    currency: '1119',
    id: '5',
  },
  {
    img: './images/sets/set6.png',
    title: 'Комбо',
    descr: 'Пицца Песто 30см, ролл Филадельфия хит (8шт.), ролл Канада (8шт.)',
    button: 'Выбрать',
    currency: '1362',
    id: '6',
  },
];

let salads = [
  {
    img: './images/salads/salad1.png',
    title: 'Цезарь с курицей',
    descr:
      'Салат Айсберг, курица, соус цезарь, сыр пармезан, томаты черри, сухари',
    button: 'Выбрать',
    currency: '359',
    id: '1',
  },
  {
    img: './images/salads/salad2.png',
    title: 'Цезарь с креветками',
    descr:
      'Салат Айсберг, креветки, соус цезарь, сыр пармезан, томаты черри, сухари',
    button: 'Выбрать',
    currency: '399',
    id: '2',
  },
  {
    img: './images/salads/salad3.png',
    title: 'Греческий салат',
    descr:
      'Томаты черри, огурцы, болгарский перец, сыр рассольный, маслины, масло оливковое',
    button: 'Выбрать',
    currency: '359',
    id: '3',
  },
];

let snacks = [
  {
    img: './images/snacks/snack1.png',
    title: 'Картофель фри 150г',
    button: 'Выбрать',
    currency: '149',
    id: '1',
  },
  {
    img: './images/snacks/snack2.png',
    title: 'Картофель по деревенски 150г',
    button: 'Выбрать',
    currency: '169',
    id: '2',
  },
];

let desserts = [
  {
    img: './images/desserts/dessert1.png',
    title: 'Шоколадный ролл',
    descr:
      'Шоколадный блинчик, сливочный сыр, изюм, киви, апельсин, банан, клубничный соус',
    button: 'Выбрать',
    currency: '319',
    id: '1',
  },
  {
    img: './images/desserts/dessert2.png',
    title: 'Фруктовый ролл',
    descr:
      'Спринг-тесто, сливочный сыр, изюм, киви, банан, апельсин, клубничный топпинг.',
    button: 'Выбрать',
    currency: '279',
    id: '2',
  },
];

let sauces = [
  {
    img: './images/sauces/sauce1.png',
    title: 'Соус спайс 50г.',
    button: 'Выбрать',
    currency: '69',
    id: '1',
  },
  {
    img: './images/sauces/sauce2.png',
    title: 'Соус томатный фирменный 50г.',
    button: 'Выбрать',
    currency: '69',
    id: '2',
  },
  {
    img: './images/sauces/sauce3.png',
    title: 'Набор для суши (имбирь, васаби, соевый соус)',
    button: 'Выбрать',
    currency: '79',
    id: '3',
  },
  {
    img: './images/sauces/sauce4.png',
    title: 'Соус чесночный фирменный 50г',
    button: 'Выбрать',
    currency: '69',
    id: '4',
  },
];

let drinkables = [
  {
    img: './images/drinkables/drinkable1.png',
    title: 'Coca Cola 0,9л',
    button: 'Выбрать',
    currency: '149',
    id: '1',
  },
  {
    img: './images/drinkables/drinkable2.png',
    title: 'Coca Cola Vanilla 0,9л',
    button: 'Выбрать',
    currency: '149',
    id: '2',
  },
  {
    img: './images/drinkables/drinkable3.png',
    title: 'Bon Aqua газированная 0,5л',
    button: 'Выбрать',
    currency: '79',
    id: '3',
  },
  {
    img: './images/drinkables/drinkable4.png',
    title: 'Bon Aqua негазированная 0,5л',
    button: 'Выбрать',
    currency: '79',
    id: '4',
  },
];

export {
  pizzas,
  rolls,
  sushies,
  sets,
  salads,
  snacks,
  desserts,
  sauces,
  drinkables,
};
