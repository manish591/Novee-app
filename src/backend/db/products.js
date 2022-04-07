import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "1f9d28ab-5abf-4a28-a2d4-fd767e0d555b",
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
    _id: "e32e496a-a709-4a65-9283-0303d3b3bbe9",
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
    _id: "60082cb0-e9f0-4204-b959-7a5c958cb77a",
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
    _id: "8f313c36-9d54-4f79-a9b2-8ba2e80e3d6b",
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
    _id: "6fe99dba-baf9-49ab-a3d5-b19f7e16ba71",
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
    _id: "b0004ae4-66a8-42ae-b3fb-036730dd3413",
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
    _id: "95c2e760-8cbb-4a2e-a15d-d878ab473e61",
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
    _id: "ee4c37ae-82c8-4509-8936-d34e0ec57024",
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
    _id: "55b84652-e009-41b3-8b0d-31b078745555",
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
    _id: "805ba824-1aa1-4780-b79b-b9def0799d08",
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
    brand: "Wrogn",
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
    _id: "62caf6c5-bcdf-4c42-805c-46b256be07b4",
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
    _id: "6b611a94-a65b-4d22-8451-cc66db51c6e9",
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
    _id: "11a8ae8c-27a5-4701-8756-26c3cbaa003a",
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
    _id: "0d2b55cb-80ed-4e7f-ba56-8131631c481c",
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
    _id: "3359f5c4-83a9-4c5d-95d9-06571b644616",
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
    _id: "00fe3f9e-6436-4835-b4ce-e6ac64b97082",
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
    _id: "6d9ea932-0fa9-4586-9573-735f5c6f3d1e",
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
    _id: "db9caa4c-00d4-4a95-b53c-3b9616717b23",
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
    _id: "eed1f85c-ecce-434f-943a-adc398c4787c",
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
    _id: "3e3a8d3d-c531-4b8d-a164-a8695ab034d3",
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
    _id: "4e404af0-ad3c-4e2a-a957-af638dee08ce",
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
    _id: "9d147d86-2829-4562-a391-34939a80cd83",
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
    _id: "5c7f33e7-4d8d-4410-995a-fec59b454bfe",
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
    brand: "Gant",
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
    _id: "ea47aba1-8756-40ee-b994-7768dc0a1ee7",
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
    _id: "5170d656-12b6-4a28-826d-6ebe3884c738",
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
    brand: "Wrogn",
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
    _id: "698f8c8a-9ce2-4b22-9c72-765f4f5f97df",
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
    brand: "H&M",
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
    _id: "005cff7d-86ba-48b4-86b8-03d6e16c409e",
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
    brand: "Libas",
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
    _id: "5490a4cd-ec66-4f25-aac4-1de955c04381",
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
    _id: "c87d7fb8-71df-489f-8c7e-7779c51dc935",
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
    _id: "9cba565f-68c9-4ffc-a242-2761af646fea",
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
