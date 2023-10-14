let searchTabBtn = document.querySelectorAll(".search_left_tab_item");
let searchTabBtnDot = document.querySelectorAll(".search_left_tab_dot");

let searchTabBtnDelete = document.querySelector(".search_left_tab_delete");

searchTabBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    searchTabBtnDot.forEach((dot, dotIndex) => {
      if (index === dotIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  });
});

searchTabBtnDelete.addEventListener("click", () => {
  searchTabBtnDot.forEach((dot) => {
    dot.classList.remove("active");
  });
});

let ProdoctArray = [
  {
    barCode: "4620002770341",
    title: "Белуга кусок х/к 300г арк белуга ",
    role: "Продукты",
  },
  {
    barCode: "4607042666889",
    title: "Диланес белуга г.к 200г  ",
    role: "Кафе, ресторан, доставка",
  },
  {
    barCode: "4607042666889",
    title: "Диланес белуга г.к 200г  ",
    role: "Кафе, ресторан, доставка",
  },
  {
    barCode: "4607033886166",
    title: "Фильтр синтетический EUROCLEAN для KARCHER DS 5.500 - DS 6.000 ",
    role: "Бытовая техника",
  },
  {
    barCode: "4607033886166",
    title: "Фильтр синтетический EUROCLEAN для KARCHER DS 5.500 - DS 6.000 ",
    role: "Бытовая техника",
  },
  {
    barCode: "4607033886166",
    title: "Фильтр синтетический EUROCLEAN для KARCHER DS 5.500 - DS 6.000 ",
    role: "Бытовая техника",
  },
  {
    barCode: "4607033886166",
    title: "Фильтр синтетический EUROCLEAN для KARCHER DS 5.500 - DS 6.000 ",
    role: "Бытовая техника",
  },
  {
    barCode: "4607033886166",
    title: "Фильтр синтетический EUROCLEAN для KARCHER DS 5.500 - DS 6.000 ",
    role: "Бытовая техника",
  },
  {
    barCode: "4627073803077",
    title: "Аккумулятор Red Energy DS 12-04 обратная полярность 4 Ач DS 1204",
    role: "Авто",
  },
  {
    barCode: "4870208621217",
    title: "Бабушкин субчик п.ф ",
    role: "Услуги",
  },
  {
    barCode: "4607038550093",
    title: "Автоприцеп (Урал) С-12-Ф ",
    role: "Услуги",
  },
  {
    barCode: "4607038550093",
    title: "Автоприцеп (Урал) С-12-Ф ",
    role: "Услуги",
  },
  {
    barCode: "4607038550093",
    title: "Автоприцеп (Урал) С-12-Ф ",
    role: "Услуги",
  },
  {
    barCode: "4607038550093",
    title: "Автоприцеп (Урал) С-12-Ф ",
    role: "Услуги",
  },
  {
    barCode: "4607038550093",
    title: "Автоприцеп (Урал) С-12-Ф ",
    role: "Услуги",
  },
  {
    barCode: "4607038550093",
    title: "Автоприцеп (Урал) С-12-Ф ",
    role: "Услуги",
  },
  {
    barCode: "4607038550093",
    title: "Автоприцеп (Урал) С-12-Ф ",
    role: "Услуги",
  },
  {
    barCode: "4607038550093",
    title: "Автоприцеп (Урал) С-12-Ф ",
    role: "Услуги",
  },
  {
    barCode: "4607038550093",
    title: "Автоприцеп (Урал) С-12-Ф ",
    role: "Услуги",
  },
  {
    barCode: "4630006856262",
    title:
      "феерика свеча-цифра 0 двухцветная микс ф-1707-0 феерика свеча-цифра 0 двухцветная микс ф-1707-0 ",
    role: " Подарки и сувениры",
  },
  {
    barCode: "4630006856262",
    title:
      "феерика свеча-цифра 0 двухцветная микс ф-1707-0 феерика свеча-цифра 0 двухцветная микс ф-1707-0 ",
    role: " Подарки и сувениры",
  },
  {
    barCode: "4630006856262",
    title:
      "феерика свеча-цифра 0 двухцветная микс ф-1707-0 феерика свеча-цифра 0 двухцветная микс ф-1707-0 ",
    role: " Подарки и сувениры",
  },
  {
    barCode: "4630006856262",
    title:
      "феерика свеча-цифра 0 двухцветная микс ф-1707-0 феерика свеча-цифра 0 двухцветная микс ф-1707-0 ",
    role: " Подарки и сувениры",
  },
];

const searchTabsContent = document.querySelector(".search_right_tabs_content");

const itemsPerPage = 6;
let currentPage = 1;

function displayItems(page) {
  searchTabsContent.innerHTML = "";

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = ProdoctArray.slice(startIndex, endIndex);

  displayedItems.forEach((product) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("search_tabs_content_item");

    const barcodeDiv = document.createElement("div");
    barcodeDiv.classList.add("search_text_group");

    const barcodeImg = document.createElement("img");
    barcodeImg.src = "./img/copy-svgrepo-com.svg";
    barcodeImg.alt = "";

    const barcodeSpan = document.createElement("span");
    barcodeSpan.textContent = product.barCode;
    barcodeSpan.addEventListener("click", () => {
      copyToClipboard(product.barCode);
    });

    barcodeDiv.appendChild(barcodeImg);
    barcodeDiv.appendChild(barcodeSpan);

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("search_text_group");

    const titleImg = document.createElement("img");
    titleImg.src = "./img/copy-svgrepo-com.svg";
    titleImg.alt = "";

    const titleP = document.createElement("p");
    titleP.textContent = product.title;
    titleP.addEventListener("click", () => {
      copyToClipboard(product.title);
    });

    titleDiv.appendChild(titleImg);
    titleDiv.appendChild(titleP);

    const roleH2 = document.createElement("h2");
    roleH2.classList.add("tab_role");
    roleH2.textContent = product.role;

    itemDiv.appendChild(barcodeDiv);
    itemDiv.appendChild(titleDiv);
    itemDiv.appendChild(roleH2);

    searchTabsContent.appendChild(itemDiv);
  });
}

function renderPagination() {
  const totalPages = Math.ceil(ProdoctArray.length / itemsPerPage);
  const paginationContainer = document.querySelector(".pagination");

  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement("a");
    pageLink.textContent = i;
    pageLink.href = "#";
    pageLink.classList.add("page-link");

    if (i === currentPage) {
      pageLink.classList.add("active");
    }

    pageLink.addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = i;
      displayItems(currentPage);
      renderPagination();
    });

    paginationContainer.appendChild(pageLink);
  }
}
function copyToClipboard(text) {
  const tempInput = document.createElement("input");
  tempInput.setAttribute("value", text);
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}
displayItems(currentPage);
renderPagination();


let SerchLeftBtn = document.querySelector(".search_left_title")


SerchLeftBtn.addEventListener("click", () => {
  document.querySelector(".search_left_tabs").classList.toggle("active")
})