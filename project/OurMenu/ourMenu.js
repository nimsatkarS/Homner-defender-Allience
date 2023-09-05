const menu = [
  {
    id: 1,
    title: "One Single Room",
    category: "SingleRoom",
    price: 25.99,
    img: "images/item-1.jpg",
    desc: `Ha'Here the single room available <b>ONLY FOR STUDENTS</b> .all facilities are available <b>MH12D112</b>`,
    
  },
  {
    id: 2,
    title: "Double beadRoom",
    category: "flats",
    price: 60.99,
    img: "images/item-4.jpg",
    desc: `Here the double bead room house for the <b>ONLY FOR FAMILY</b> all the dealy needs are neared by house . <b>B02H78</b>`,
  },
  {
    id: 3,
    title: "The Big House",
    category: "2bhk",
    price: 68.99,
    img: "images/item-7.jpg",
    desc: `Here the double bead room house for the <b>ONLY FOR FAMILY</b> all the dealy needs are neared by house  <b>MH12DK17</b>`,
    button:`Book Now`,
  },
  {
    id: 4,
    title: "Single Room",
    category: "SingleRoom",
    price: 15.99,
    img: "images/item-2.jpg ",
    desc: `The room is available from road no 112,house no 04,Aggra Delhi <b>Single Romm + Balconi</b>. <b>MDH20D112</b>`,
  },
  {
    id: 5,
    title: "For Rent",
    category: "flats",
    price: 42.99,
    img: "images/item-5.jpg",
    desc: `Here the good price in mumbai renteal houses and basic all the needed neared by te area <b>MH12D115</b>`,
  },
  {
    id: 6,
    title: "2BHK for Rant",
    category: "2bhk",
    price: 18.99,
    img: "images/item-8.jpg",
    desc: `Here the 2bhk flat for the rent adn all the facilities are available and all the required services <b>MH64CH45</b>`,
  },
  {
    id: 7,
    title: "Single Room",
    category: "SingleRoom",
    price: 38.99,
    img: "images/item-3.jpg ",
    desc: `Ha'Here the single room available <b>ONLY FOR STUDENTS</b> .all facilities are available <b>MHD85K4</b>`,
  },
  {
    id: 8,
    title: "Near by You",
    category: "flats",
    price: 12.99,
    img: "images/item-6.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  <b>SEC04HS58</b>`,
  },
  {
    id: 9,
    title: "Only 2BHK Rent",
    category: "2bhk",
    price: 16.99,
    img: "images/item-9.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing. <b>CO52D54</b>`,
  },
  {
    id: 10,
    title: "Villas",
    category: "villas",
    price: 22.99,
    img: "images/item-10.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing. <b>DH1D12</b>`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
