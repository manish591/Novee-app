import imgVivo from "../assets/193-1930755_vivo-hd-png-download-removebg-preview.png";
import imgAsus from "../assets/91059-removebg-preview.png";
import imgDell from "../assets/dell-computers-logo-svg-gray-world-of-warcraft-transparent-png-835411-removebg-preview.png";
import imgAcer from "../assets/482-4826066_acer-logo-digital-black-tedxsydney-com-black-adidas-removebg-preview.png";
import imgLenevo from "../assets/Lenovo-logo-removebg-preview.png";

const brandLogoData = [
  {
    name: "vivo",
    img: imgVivo,
  },
  {
    name: "asus",
    img: imgAsus,
  },
  {
    name: "dell",
    img: imgDell,
  },
  {
    name: "acer",
    img: imgAcer,
  },
  {
    name: "lenevo",
    img: imgLenevo,
  },
];

const filterData = {
  brand: [
    {
      id: 1,
      name: "Adidas",
    },
    {
      id: 2,
      name: "Wrogn",
    },
    {
      id: 3,
      name: "HRX",
    },
    {
      id: 4,
      name: "Rigo",
    },
    {
      id: 5,
      name: "Harpa",
    },
    {
      id: 6,
      name: "Antheaa",
    },
    {
      id: 7,
      name: "H&M",
    },
    {
      id: 8,
      name: "Celvin Klien",
    },
    {
      id: 9,
      name: "Saree Mall",
    },
    {
      id: 10,
      name: "Libas",
    },
    {
      id: 11,
      name: "Biba",
    },
    {
      id: 12,
      name: "Gant",
    },
    {
      id: 13,
      name: "MONOCHROME",
    },
    {
      id: 14,
      name: "Columbia",
    },
    {
      id: 15,
      name: "New Balance",
    },
    {
      id: 16,
      name: "Mast & Harbour,",
    },
    {
      id: 17,
      name: "Roadster",
    },
  ],
  rating: [
    {
      id: 1,
      name: "1 Star & Above",
    },
    {
      id: 2,
      name: "2 Star & Above",
    },
    {
      id: 3,
      name: "3 Star & Above",
    },
    {
      id: 4,
      name: "4 Star & Above",
    },
  ],
  price: [
    {
      id: 1,
      name: "Rs. 200 to Rs. 1000",
    },
    {
      id: 2,
      name: "Rs. 1000 to Rs. 2000",
    },
    {
      id: 3,
      name: "Rs. 2000 to Rs. 3500",
    },
    {
      id: 4,
      name: "Rs. 3500 to Rs. 5000",
    },
  ],
};

const filterCategories = Object.keys(filterData);

export { filterData, filterCategories, brandLogoData };
