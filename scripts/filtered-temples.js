function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    var cheeseburger = document.getElementById("cheeseburger");
    var isShow = menu.classList.toggle("show");
    cheeseburger.innerHTML = isShow ? '✖' : '&#9776;';
    var pageHeader = document.getElementById("page-header");
    pageHeader.classList.toggle("hidden");
}

const templeList = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Cedar City Utah",
        location: "Cedar City, Utah, United States",
        dedicated: "2017, December, 10",
        area: 42657,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/400x250/Cedar-City-1978603.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/400x250/provo-city-center-temple-1572517-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 403000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
    },
    {
        templeName: "St. George Utah",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6",
        area: 142000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-temple-lds-149536-wallpaper.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
];

function showTemples(temples) {
    const templesDiv = document.getElementById('temples');
    templesDiv.innerHTML = "";
    temples.forEach(temple => {
        const imgElement = document.createElement('img');
        imgElement.setAttribute("src", temple.imageUrl);
        imgElement.setAttribute("alt", temple.templeName);
        imgElement.setAttribute("loading", "lazy");
        imgElement.setAttribute("width", "250");
        imgElement.setAttribute("height", "141");
        const nameElement = document.createElement('h2')
        nameElement.innerText = temple.templeName;
        const locationElement = document.createElement('p')
        locationElement.innerText = 'Location: ' + temple.location;
        const dedicatedElement = document.createElement('p')
        dedicatedElement.innerText = 'Dedicated: ' + temple.dedicated;
        const areaElement = document.createElement('p')
        areaElement.innerText = 'Area: ' + temple.area + ' sq ft';
        const cardElement = document.createElement('div');
        cardElement.setAttribute("class", "temple-card")
        cardElement.appendChild(nameElement);
        cardElement.appendChild(locationElement);
        cardElement.appendChild(dedicatedElement);
        cardElement.appendChild(areaElement);
        cardElement.appendChild(imgElement);
        templesDiv.appendChild(cardElement);
    });
};

function showFilteredTemples(filter) {
    let filteredTemples = templeList;
    switch (filter) {
        case 'old':
            filteredTemples = templeList.filter(function (temple) {
                const yearText = temple.dedicated.substring(0, 4);
                const year = parseInt(yearText);
                return year <= 1900;
            });
            break;

        case 'new':
            filteredTemples = templeList.filter(function (temple) {
                const yearText = temple.dedicated.substring(0, 4);
                const year = parseInt(yearText);
                return year >= 2000;
            });
            break;

        case 'large':
            filteredTemples = templeList.filter(function (temple) {
                return temple.area > 90000;
            });
            break;

        case 'small':
            filteredTemples = templeList.filter(function (temple) {
                return temple.area < 10000;
            });
            break;
    }
    showTemples(filteredTemples);
};

showTemples(templeList);

