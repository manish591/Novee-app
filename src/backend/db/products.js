import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649228544/image_asf1xw.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649228587/image_3_adjtxb.webp",
    },
    title: "Men's White T-shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "750",
    discount: "10",
    brand: "Adidas",
    category: "T-shirt",
    inStock: true,
    fastDelivery: false,
    ratings: 3.5,
    itemInStock: 4,
    quantity: 1,
    color: "White",
    idealFor: "Men",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649235813/image_1_apk8os.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649235868/image_4_npwg9l.webp",
    },
    title: "Mens Pink Crew Neck T-shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "1000",
    discount: "33",
    brand: "Wrogn",
    category: "T-shirt",
    inStock: true,
    fastDelivery: false,
    ratings: 4.5,
    itemInStock: 5,
    quantity: 1,
    color: "Pink",
    idealFor: "Men",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649236645/image_4_bdwtry.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649236643/image_7_wonesw.webp",
    },
    title: "Men Yellow Printed Cotton Pure Cotton T-shirt, By Hrithik Roshan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "450",
    discount: "10",
    brand: "HRX",
    category: "T-shirt",
    inStock: true,
    fastDelivery: false,
    ratings: 3.8,
    itemInStock: 1,
    quantity: 10,
    color: "Yellow",
    idealFor: "Men",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649236193/image_2_wzqplx.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649236186/image_5_cs9fnk.webp",
    },
    title: "Mens Slim Fit Cotton T-shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "1200",
    discount: "5",
    brand: "Rigo",
    category: "T-shirt",
    inStock: false,
    fastDelivery: false,
    ratings: 3.2,
    itemInStock: 10,
    quantity: 1,
    color: "Blue",
    idealFor: "Men",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649236472/image_3_kvvbnq.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649236466/image_6_b5sngt.webp",
    },
    title: "Square Neck Top",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "753",
    discount: "15",
    brand: "Harpa",
    category: "Womens Tops",
    inStock: true,
    fastDelivery: true,
    ratings: 4.6,
    itemInStock: 15,
    quantity: 1,
    color: "White",
    idealFor: "Women",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649237101/image_5_ozz1kf.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649237102/image_8_uftakt.webp",
    },
    title: "Self Design Top By Harpa",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "75999",
    discount: "20",
    brand: "Harpa",
    category: "Womens Tops",
    inStock: false,
    fastDelivery: true,
    ratings: 4.8,
    itemInStock: 1,
    quantity: 1,
    color: "Blue",
    idealFor: "Women",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649237364/image_6_bltneb.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649237366/image_9_ufp9nr.webp",
    },
    title: "Floral Print A-line Top",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "1525",
    discount: "20",
    brand: "Antheaa",
    category: "Womens Tops",
    inStock: false,
    fastDelivery: false,
    ratings: 4,
    itemInStock: 6,
    quantity: 1,
    color: "Sky Blue",
    idealFor: "Women",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649238077/image_7_yj912i.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649238076/image_10_hy57ts.webp",
    },
    title: "Mens Relaxed Jeans",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "2999",
    discount: "40",
    brand: "H&M",
    category: "Denim & Jeans",
    inStock: true,
    fastDelivery: true,
    ratings: 4.2,
    itemInStock: 9,
    quantity: 1,
    color: "Blue",
    idealFor: "Men",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649238306/image_8_aoqd2q.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649238322/image_11_wcirsd.webp",
    },
    title: "Mens Tappered Fit Jeans",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "3685",
    discount: "20",
    brand: "Celvin Klien",
    category: "Denim & Jeans",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    itemInStock: 4,
    quantity: 1,
    color: "Faded Blue",
    idealFor: "Men",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649238445/image_9_d7lenw.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649238444/image_12_mikrgn.webp",
    },
    title: "Mens Slim Fit Jeans",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "2450",
    discount: "19",
    brand: "WROGN",
    category: "Denim & Jeans",
    inStock: false,
    fastDelivery: false,
    ratings: 4.6,
    itemInStock: 10,
    quantity: 1,
    color: "Black",
    idealFor: "Men",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649238845/image_10_iqinlq.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649238844/image_13_pbuuen.webp",
    },
    title: "Poly Georgette Saree",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "5432",
    discount: "30",
    brand: "Saree Mall",
    category: "Ethnic",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    itemInStock: 4,
    quantity: 1,
    color: "Yellow",
    idealFor: "Women",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649238919/image_11_yd8jhc.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649238920/image_14_gfjsc7.webp",
    },
    title: "Women Green Pure Cotton Kurta with Palazzos & With Dupatta",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "1339",
    discount: "30",
    brand: "Libas",
    category: "Ethnic",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    itemInStock: 4,
    quantity: 1,
    color: "Green",
    idealFor: "Women",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649239083/image_12_fs9zci.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649239081/image_15_qtsjoo.webp",
    },
    title: "Women Green & Silver Printed Kurta with Palazzos & Dupatta",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "2436",
    discount: "20",
    brand: "Biba",
    category: "Ethnic",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    itemInStock: 4,
    quantity: 1,
    color: "Green",
    idealFor: "Women",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649240840/image_13_v2ily6.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649240846/image_16_o1i2xx.webp",
    },
    title: "Women Jogger Jeans",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "1230",
    discount: "30",
    brand: "SASSAFRAS",
    category: "Jeans",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    itemInStock: 4,
    quantity: 1,
    color: "Blue",
    idealFor: "Women",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649240847/image_14_dmiycu.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649240849/image_17_pauaki.webp",
    },
    title: "Womens Fit Jeans",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "4562",
    discount: "30",
    brand: "Gant",
    category: "Jeans",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    itemInStock: 4,
    quantity: 1,
    color: "Faded Blue",
    idealFor: "Women",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649240850/image_15_o78get.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649240851/image_18_gw0ntu.webp",
    },
    title:
      "Women Blue Skinny Fit High-Rise Mildly Distressed Light Fade Stretchable Jeans",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "18990",
    discount: "30",
    brand: "Calvin Klein",
    category: "Jeans",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    itemInStock: 4,
    quantity: 1,
    color: "Grey Blue",
    idealFor: "Women",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649241515/image_16_oaefyv.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649241514/image_19_tg0fle.webp",
    },
    title: "mENS Solid Leather Jacket",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "12999",
    discount: "10",
    brand: "MONOCHROME",
    category: "Jackets",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    itemInStock: 4,
    quantity: 1,
    color: "Black",
    idealFor: "Men",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649241659/image_19_mldllv.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649241659/image_21_xnmqjp.webp",
    },
    title: "Bomber Jacket",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "15699",
    discount: "40",
    brand: "Gant",
    category: "Jackets",
    inStock: true,
    fastDelivery: false,
    ratings: 4.8,
    itemInStock: 10,
    quantity: 1,
    color: "Blue",
    idealFor: "Men",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649241661/image_18_x1abjw.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649241661/image_20_d9nqhj.webp",
    },
    title: "Mens Omni Heat Jacket",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "18990",
    discount: "30",
    brand: "Columbia",
    category: "Jackets",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    itemInStock: 3.4,
    quantity: 1,
    color: "Blue",
    idealFor: "Men",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649242233/image_20_wv9nqc.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649242234/image_22_dlzs5b.webp",
    },
    title: "Women Green & Black Colourblocked Sporty Jacket",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "6399",
    discount: "30",
    brand: "New Balance",
    category: "Jackets",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    itemInStock: 4.3,
    quantity: 1,
    color: "Green black",
    idealFor: "Womens",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649242235/image_21_qwzmiv.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649242236/image_23_rzygor.webp",
    },
    title: "Colour Blocked Bomber Jacket",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "1090",
    discount: "10",
    brand: "Mast & Harbour",
    category: "Jackets",
    inStock: true,
    fastDelivery: false,
    ratings: 4.2,
    itemInStock: 4,
    quantity: 1,
    color: "Red",
    idealFor: "Women",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649243046/image_23_bwqex2.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649243048/image_25_vaucfj.webp",
    },
    title: "Mens Printed Sweatshirts",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "5249",
    discount: "20",
    brand: "Gant",
    category: "Sweatshirts",
    inStock: true,
    fastDelivery: false,
    ratings: 4.5,
    itemInStock: 14,
    quantity: 1,
    color: "Navy Blue",
    idealFor: "Men",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649243047/image_24_v1ipyc.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649243049/image_26_xcv0vl.webp",
    },
    title: "Men SweatShirts",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "10399",
    discount: "12",
    brand: "Antony Morato",
    category: "Sweatshirts",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    itemInStock: 8,
    quantity: 1,
    color: "Grey",
    idealFor: "Men",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649243050/image_25_b4eeip.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649243050/image_27_epvsh5.webp",
    },
    title: "Mens Printed Sweatshirts",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "8990",
    discount: "15",
    brand: "Gant",
    category: "Sweatshirts",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    itemInStock: 9,
    quantity: 1,
    color: "Green",
    idealFor: "Men",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649244334/image_29_gdm9nq.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649244334/image_31_nfj0bb.webp",
    },
    title: "Off-White & Red Floral Print Fringed Shrug",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "789",
    discount: "5",
    brand: "Purys",
    category: "Shrugs",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    itemInStock: 14,
    quantity: 1,
    color: "White",
    idealFor: "Women",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649244336/image_30_jqkw3v.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649244337/image_32_vqza7n.webp",
    },
    title: "Women Printed Shrug",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "1850",
    discount: "30",
    brand: "Shaye",
    category: "Shrugs",
    inStock: true,
    fastDelivery: false,
    ratings: 4.3,
    itemInStock: 25,
    quantity: 1,
    color: "Pink",
    idealFor: "Women",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649244338/image_31_gbhnq4.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649244339/image_33_dt31hf.webp",
    },
    title: "Women Printed Shrug",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "23069",
    discount: "5",
    brand: "Neerus",
    category: "Shrugs",
    inStock: true,
    fastDelivery: false,
    ratings: 4.8,
    itemInStock: 14,
    quantity: 1,
    color: "black",
    idealFor: "Women",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649244132/image_26_dkmboy.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649244133/image_28_bufa3n.webp",
    },
    title: "Mens Cargos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "500",
    discount: "2",
    brand: "Roadsters",
    category: "Trousers",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    itemInStock: 12,
    quantity: 1,
    color: "Grey",
    idealFor: "Men",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649244134/image_27_ygvrbk.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649244135/image_29_ixi9db.webp",
    },
    title: "Mens Slim FIt Trousers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "1300",
    discount: "30",
    brand: "Gant",
    category: "Trousers",
    inStock: true,
    fastDelivery: false,
    ratings: 4.2,
    itemInStock: 4,
    quantity: 1,
    color: "Brown",
    idealFor: "Men",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
  {
    _id: uuid(),
    img: {
      JPG: "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649244136/image_28_hjtthr.jpg",
      WEB_P:
        "https://res.cloudinary.com/dcugqfvvg/image/upload/v1649244137/image_30_sozeaa.webp",
    },
    title: "Mens Black Fit Trousers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus, est!",
    price: "2300",
    discount: "30",
    brand: "Gant",
    category: "Trousers",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    itemInStock: 12,
    quantity: 1,
    color: "Black",
    idealFor: "Men",
    level: ["beginner", "amateur", "intermediate", "advanced", "professional"],
    offer: ["Save 50", "70% bonanza", "Republic Day Sale"],
  },
];
