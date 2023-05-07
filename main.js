"use strict";

let phones = [
    {
        picture: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro.jpg",
        name: "Apple iPhone 11 Pro Max",
        RAM: "4GB",
        ROM: "64GB, 256GB, 512GB",
        chipset: "Apple A13 Bionic (7 nm+)",
        releasedDate: "2019, September 20"
    },
    {
        picture: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13-ultra.jpg",
        name: "Xiaomi 13 Ultra",
        RAM: "12GB, 16GB",
        ROM: "256GB, 512GB, 1TB",
        chipset: "Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm)",
        releasedDate: "2023, April 21"
    },
    {
        picture: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg",
        name: "Apple iPhone 14 Pro Max",
        RAM: "6GB",
        ROM: "128GB, 256GB, 512GB, 1TB",
        chipset: "Apple A16 Bionic (4 nm)",
        releasedDate: "2022, September 16"
    },
    {
        picture: "https://fdn2.gsmarena.com/vv/bigpic/huawei-p60-pro.jpg",
        name: "Huawei P60 Pro",
        RAM: "8GB, 12GB",
        ROM: "256GB, 512GB",
        chipset: "Qualcomm SM8475 Snapdragon 8+ Gen 1 4G (4 nm)",
        releasedDate: "2023, March 31"
    },
    {
        picture: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel7-pro-new.jpg",
        name: "Google Pixel 7 Pro",
        RAM: "8GB, 12GB",
        ROM: "128GB, 256GB, 512GB",
        chipset: "Google Tensor G2 (5 nm)",
        releasedDate: "2022, October 13"
    },
    {
        picture: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-11.jpg",
        name: "OnePlus 11",
        RAM: "8GB, 12GB, 16GB",
        ROM: "128GB, 256GB, 512GB",
        chipset: "Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm)",
        releasedDate: "2023, January 09"
    },
    {
        picture: "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno8-t.jpg",
        name: "Oppo Reno8 T 5G",
        RAM: "8GB",
        ROM: "128GB, 256GB",
        chipset: "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
        releasedDate: "2023, February 10"
    },
    {
        picture: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg",
        name: "Samsung Galaxy S23 Ultra",
        RAM: "8GB, 12GB",
        ROM: "256GB, 512GB, 1TB",
        chipset: "Qualcomm SM8550-AC Snapdragon 8 Gen 2 (4 nm)",
        releasedDate: "2023, February 17"
    },
    {
        picture: "https://fdn2.gsmarena.com/vv/bigpic/honor-magic5-lite.jpg",
        name: "Honor Magic5 Lite",
        RAM: "6GB",
        ROM: "128GB",
        chipset: "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
        releasedDate: "2023, February 20"
    },
    {
        picture: "https://fdn2.gsmarena.com/vv/bigpic/zte-axon-50-ultra-.jpg",
        name: "ZTE Axon 50 Ultra",
        RAM: "8GB, 12GB",
        ROM: "128GB, 256GB, 512GB, 1TB",
        chipset: "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
        releasedDate: "2023, May"
    },
    {
        picture: "https://fdn2.gsmarena.com/vv/bigpic/realme-neo-3-gt.jpg",
        name: "Realme GT Neo 3T",
        RAM: "6GB, 8GB",
        ROM: "128GB, 256GB",
        chipset: "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
        releasedDate: "2022, June 25"
    },
    {
        picture: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-12-turbo.jpg",
        name: "Xiaomi Redmi Note 12 Turbo",
        RAM: "8GB, 12GB, 16GB",
        ROM: "256GB, 512GB, 1TB",
        chipset: "Qualcomm SM7475-AB Snapdragon 7+ Gen 2 (4 nm)",
        releasedDate: "2023, March 28"
    },
]



function addPhone(p) {

    let cardGroup = document.querySelector(".card-group")

    const ui = p.map((info) => {
        return `
        <div class="card">
            <img class="card__img" src="${info.picture}" alt="phone picture">
            <h2 class="card__title">${info.name}</h2>
            <ul class="card__list">
                <li class="card__list-item">ROM: ${info.ROM}</li>
                <li class="card__list-item">RAM: ${info.RAM}</li>
                <li class="card__list-item">Chipset: ${info.chipset}</li>
                <li class="card__list-item">Released date: ${info.releasedDate}</li>
            </ul>
        </div>
        `
    });

    cardGroup.innerHTML = ui

    console.log(ui);
}


addPhone(phones)