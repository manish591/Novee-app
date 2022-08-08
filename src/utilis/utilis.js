const brandLogoData = [
  {
    name: 'Puma',
    img: 'https://res.cloudinary.com/dcugqfvvg/image/upload/v1651403075/brands%20logo/logo-puma-black-removebg-preview_ktgovc.png',
  },
  {
    name: 'Adidas',
    img: 'https://res.cloudinary.com/dcugqfvvg/image/upload/v1651403330/brands%20logo/Adidas-logo-removebg-preview_esov9g.png',
  },
  {
    name: 'Gant',
    img: 'https://res.cloudinary.com/dcugqfvvg/image/upload/v1651403551/brands%20logo/d52fddb397fabda06200c65e56f98ee5-removebg-preview_1_zoyvdo.png',
  },
  {
    name: 'Wrogn',
    img: 'https://res.cloudinary.com/dcugqfvvg/image/upload/v1651403754/brands%20logo/WROGN-white-removebg-preview_wonbgc.png',
  },
  {
    name: 'Celvin Klien',
    img: 'https://res.cloudinary.com/dcugqfvvg/image/upload/v1651403752/brands%20logo/calvin-klein-logo-font-free-download-1200x675-removebg-preview_armas9.png',
  },
];

const filterData = {
  brand: [
    {
      id: 1,
      name: 'Adidas',
    },
    {
      id: 2,
      name: 'Wrogn',
    },
    {
      id: 3,
      name: 'HRX',
    },
    {
      id: 4,
      name: 'Rigo',
    },
    {
      id: 5,
      name: 'Harpa',
    },
    {
      id: 6,
      name: 'Antheaa',
    },
    {
      id: 7,
      name: 'H&M',
    },
    {
      id: 8,
      name: 'Celvin Klien',
    },
    {
      id: 9,
      name: 'Saree Mall',
    },
    {
      id: 10,
      name: 'Libas',
    },
    {
      id: 11,
      name: 'Biba',
    },
    {
      id: 12,
      name: 'Gant',
    },
    {
      id: 13,
      name: 'MONOCHROME',
    },
    {
      id: 14,
      name: 'Columbia',
    },
    {
      id: 15,
      name: 'New Balance',
    },
    {
      id: 16,
      name: 'Mast & Harbour,',
    },
    {
      id: 17,
      name: 'Roadster',
    },
  ],
  rating: [
    {
      id: 1,
      name: '1 Star & Above',
    },
    {
      id: 2,
      name: '2 Star & Above',
    },
    {
      id: 3,
      name: '3 Star & Above',
    },
    {
      id: 4,
      name: '4 Star & Above',
    },
  ],
  price: [
    {
      id: 1,
      name: 'Rs. 200 to Rs. 1000',
    },
    {
      id: 2,
      name: 'Rs. 1000 to Rs. 2000',
    },
    {
      id: 3,
      name: 'Rs. 2000 to Rs. 3500',
    },
    {
      id: 4,
      name: 'Rs. 3500 to Rs. 5000',
    },
  ],
};

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas (the)',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia (Plurinational State of)',
  'Bonaire, Sint Eustatius and Saba',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory (the)',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cayman Islands (the)',
  'Central African Republic (the)',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands (the)',
  'Colombia',
  'Comoros (the)',
  'Congo (the Democratic Republic of the)',
  'Congo (the)',
  'Cook Islands (the)',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Curaçao',
  'Cyprus',
  'Czechia',
  "Côte d'Ivoire",
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic (the)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Falkland Islands (the) [Malvinas]',
  'Faroe Islands (the)',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories (the)',
  'Gabon',
  'Gambia (the)',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and McDonald Islands',
  'Holy See (the)',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran (Islamic Republic of)',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  "Korea (the Democratic People's Republic of)",
  'Korea (the Republic of)',
  'Kuwait',
  'Kyrgyzstan',
  "Lao People's Democratic Republic (the)",
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands (the)',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia (Federated States of)',
  'Moldova (the Republic of)',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands (the)',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger (the)',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands (the)',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine, State of',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines (the)',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Republic of North Macedonia',
  'Romania',
  'Russian Federation (the)',
  'Rwanda',
  'Réunion',
  'Saint Barthélemy',
  'Saint Helena, Ascension and Tristan da Cunha',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin (French part)',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten (Dutch part)',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan (the)',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Sweden',
  'Switzerland',
  'Syrian Arab Republic',
  'Taiwan',
  'Tajikistan',
  'Tanzania, United Republic of',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands (the)',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates (the)',
  'United Kingdom of Great Britain and Northern Ireland (the)',
  'United States Minor Outlying Islands (the)',
  'United States of America (the)',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela (Bolivarian Republic of)',
  'Viet Nam',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
  'Åland Islands',
];

const coupons = [
  {
    code: 'SAGg1df0XWLm',
    offer: '100 Off',
    minimumPurchase: 500,
    expiry: 'April 30, 2022',
  },
  {
    code: 'pXrsic1EryK5',
    offer: '200 Off',
    minimumPurchase: 1990,
    expiry: 'April 25, 2022',
  },
  {
    code: 'kDTt7wzT049b',
    offer: '300 Off',
    minimumPurchase: 2000,
    expiry: 'May 5, 2022',
  },
];

const filterCategories = Object.keys(filterData);

export { filterData, filterCategories, brandLogoData, countries, coupons };
