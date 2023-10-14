const infoArray = [
  {
    imgSrc: "./img/about_img1.png",
    textSrc: "Подключиться к базе номенклатуры товаров для Вашей касс",
  },
  {
    imgSrc: "./img/about_img2.png",
    textSrc: "Проверить актуальный код/наименование товара",
  },
  {
    imgSrc: "./img/about_img3.png",
    textSrc: "Найти или получить новый код для товара без GTIN",
  },
];

const aboutWrap = document.querySelector(".about_wrap");

infoArray.forEach((info) => {
  const aboutCard = document.createElement("div");
  aboutCard.classList.add("about_card");

  const aboutCardBanner = document.createElement("div");
  aboutCardBanner.classList.add("about_card_banner");

  const img = document.createElement("img");
  img.src = info.imgSrc;
  img.alt = "";

  aboutCardBanner.appendChild(img);
  aboutCard.appendChild(aboutCardBanner);

  const aboutCardText = document.createElement("div");
  aboutCardText.classList.add("about_card_text");

  const p = document.createElement("p");
  p.textContent = info.textSrc;

  aboutCardText.appendChild(p);
  aboutCard.appendChild(aboutCardText);

  aboutWrap.appendChild(aboutCard);
});

const categoryArray = [
  {
    imgSrc: "./img/category1.svg",
    textSrc: "СЗПТ",
  },
  {
    imgSrc: "./img/category2.svg",
    textSrc: "Авто",
  },
  {
    imgSrc: "./img/category3.svg",
    textSrc: "Алкоголь",
  },
  {
    imgSrc: "./img/category4.svg",
    textSrc: "Бытовая техника",
  },
  {
    imgSrc: "./img/category5.svg",
    textSrc: "Дача, сад и огород",
  },
  {
    imgSrc: "./img/category6.svg",
    textSrc: "Детские товары",
  },
  {
    imgSrc: "./img/category7.svg",
    textSrc: "Досуг и развлечения",
  },
  {
    imgSrc: "./img/category8.svg",
    textSrc: "Канцтовары",
  },
  {
    imgSrc: "./img/category9.svg",
    textSrc: "Кафе, ресторан, доставка",
  },
  {
    imgSrc: "./img/category10.svg",
    textSrc: "Одежда, обувь, аксессуары",
  },
  {
    imgSrc: "./img/category11.svg",
    textSrc: "Подарки и сувениры",
  },
  {
    imgSrc: "./img/category12.svg",
    textSrc: "Продукты",
  },
  {
    imgSrc: "./img/category13.svg",
    textSrc: "Спорт и отдых",
  },
  {
    imgSrc: "./img/category14.svg",
    textSrc: "Строительство и ремонт",
  },
  {
    imgSrc: "./img/category15.svg",
    textSrc: "Табачная продукция",
  },
  {
    imgSrc: "./img/category16.svg",
    textSrc: "Товары для дома",
  },
  {
    imgSrc: "./img/category17.svg",
    textSrc: "Товары для животных",
  },
  {
    imgSrc: "./img/category18.svg",
    textSrc: "Товары для здоровья",
  },
  {
    imgSrc: "./img/category19.svg",
    textSrc: "Товары для красоты",
  },
  {
    imgSrc: "./img/category20.svg",
    textSrc: "Хобби и творчество",
  },
  {
    imgSrc: "./img/category21.svg",
    textSrc: "Электроника",
  },
  {
    imgSrc: "./img/category22.svg",
    textSrc: "Услуги",
  },
  {
    imgSrc: "./img/category23.svg",
    textSrc: "Прочее",
  },
];

const categoryWrap = document.querySelector(".category_wrap");

categoryArray.forEach((info) => {
  const categoryCard = document.createElement("a");
  categoryCard.classList.add("category_card");
  categoryCard.href = "#";
  const categoryCardBanner = document.createElement("div");
  categoryCardBanner.classList.add("category_card_banner");

  const img = document.createElement("img");
  img.src = info.imgSrc;
  img.alt = "";

  categoryCardBanner.appendChild(img);
  categoryCard.appendChild(categoryCardBanner);

  const categoryCardText = document.createElement("div");
  categoryCardText.classList.add("category_card_text");

  const p = document.createElement("p");
  p.textContent = info.textSrc;

  categoryCardText.appendChild(p);
  categoryCard.appendChild(categoryCardText);

  categoryWrap.appendChild(categoryCard);
});
