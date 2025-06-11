const navLinks = [
  {
    name: "Ish",
    link: "#work",
  },
  {
    name: "Lavhalar",
    link: "#experience",
  },
  {
    name: "Konikmalar",
    link: "#skills",
  },
  {
    name: "Misr haqida gaplar",
    link: "#testimonials",
  },
];

const words = [
  { text: "Piramidalar", imgPath: "/images/ideas.svg" },
  { text: "Fir'avnlar", imgPath: "/images/concepts.svg" },
  { text: "Nil daryosi", imgPath: "/images/designs.svg" },
  { text: "Qadimgi Misr", imgPath: "/images/code.svg" },
  { text: "Memfis", imgPath: "/images/ideas.svg" },
  { text: "Giza", imgPath: "/images/concepts.svg" },
  { text: "Tutankhamon", imgPath: "/images/designs.svg" },
  { text: "Hierogliflar", imgPath: "/images/code.svg" },
];


const counterItems = [
  { value: 138, suffix: "+", label: "Piramidalar soni" },
  { value: 3000, suffix: "+", label: "Yillik tarix" },
  { value: 170, suffix: "+", label: "Fir'avnlar" },
  { value: 6.6, suffix: "M", label: "Nil daryosi uzunligi (km)" },
];


const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Piramidalar Muhandisligi",
    desc: "Qadimgi misrliklar tomonidan qurilgan piramidalar bugungi kungacha hayratga soladi.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Nil Daryosi Ahamiyati",
    desc: "Nil daryosi atrofidagi unumdor yerlar Misr taraqqiyotining asosiy omili bo‘lgan.",
  },
  {
    imgPath: "/images/time.png",
    title: "Iyerogliflar Yozuvi",
    desc: "Qadimgi Misr yozuvi – insoniyat tarixidagi eng qadimiy va murakkab yozuv tizimlaridan biri.",
  },
];


const techStackImgs = [
  {
    name: "Piramidalar Me’morchiligi",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Qadimgi Misr Tili",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Ma’bad Qurilishi",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Astronomiya va Vaqt Hisobi",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Fir’avnlar Boshqaruvi",
    imgPath: "/images/logos/git.svg",
  },
];


const techStackIcons = [
  {
    name: "Karnak Barqarorligi", // React
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Xiyeroglif Soddaligi", // Python
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Nil Asosi", // Node.js
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Piramida Dinamikasi", // Three.js
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Fir’avn Nazorati", // Git/PM
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];


const expCards = [
  {
    review: "Zaynab ilohiy yozuvlarni saqlash va tartibga solishda o‘zining e’tiborli yondashuvi bilan jamoada yuqori e’tibor qozondi. Uning ishi bilimlarni avlodlarga yetkazishda muhim rol o‘ynadi.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Saqqara Arxivi Muallifi",
    date: "Miloddan avvalgi 1500 – 1490",
    responsibilities: [
      "Papiruslarda yozilgan ma’lumotlarni to‘plash va saqlashni amalga oshirdi.",
      "Ma’lumotlarni tematik bo‘limlarga ajratib kataloglashtirdi.",
      "Faylasuflar va olimlar uchun arxivga qulayliklar yaratdi.",
    ],
  },
  {
    review: "Imhotepning izdoshi sifatida Yusuf Qurilish Kengashida o‘zining aniq o‘lchovlari va strategik qarorlari bilan tanildi. Uning rejalari ustunlik va barqarorlik olib keldi.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Fayum Qurilish Rejasi Raxbari",
    date: "Miloddan avvalgi 1200 – 1180",
    responsibilities: [
      "Yirik inshootlar uchun loyihalar chizmasini yaratdi.",
      "Nilo suvlari bilan irrigatsiya tizimlarini muvofiqlashtirdi.",
      "Mehnatkashlar guruhini boshqarib, resurslarni taqsimladi.",
    ],
  },
  {
    review: "Nefertari o‘zining zargarlik san’atiga bo‘lgan yondashuvi bilan noiblar saroyida alohida o‘rin egalladi. Har bir buyumda nafislik va ma’no mujassam edi.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Qirollik Zargarlik Ustasi",
    date: "Miloddan avvalgi 1350 – 1340",
    responsibilities: [
      "Qirollik buyurtmalari asosida zargarlik asarlarini yasadi.",
      "Oltin, lazurit va nefrit kabi materiallardan foydalanib bezaklar tayyorladi.",
      "Diniy marosimlar uchun maxsus ashyolarni ishlab chiqdi.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Muhammad Solih",
    mentions: "@muhammadsolih",
    review:
      "Qadimgi Misr ehromlari ming yilliklar davomida inson tafakkurining qudratini namoyon etib keladi. Ularning qurilishi faqat me’morchilik emas, balki ilm, sabr va iymonning timsolidir.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Muhammad Solih",
    mentions: "@muhammadsolih",
    review:
      "Nil daryosi atrofidagi hayot, Misr sivilizatsiyasining yuragi bo‘lgan. Ana shu hayot tarzi bizga madaniyat, yozuv va dunyoqarash merosini qoldirdi.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Muhammad Solih",
    mentions: "@muhammadsolih",
    review:
      "Imhotep singari allomalar, Misrni ilm-fan va ruhiyat markaziga aylantirdi. Ularning izdoshlari bugungi kunda ham tarixni yoritishda davom etmoqda.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Muhammad Solih",
    mentions: "@muhammadsolih",
    review:
      "Luxor va Karnak ibodatxonalari — bu shunchaki yodgorlik emas. Bu yerda insoniyatning eng ulug‘ orzulari toshga aylangan.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Muhammad Solih",
    mentions: "@muhammadsolih",
    review:
      "Qadimgi Misr yozuvi — iyerogliflar, inson tafakkurining betakror ifodasidir. Har bir belgida bir tarix, bir falsafa yashiringan.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Muhammad Solih",
    mentions: "@muhammadsolih",
    review:
      "Fir’avnlar zamonidan qolgan abidalar nafaqat go‘zallik, balki buyuk iroda va uyg‘unlikni ham o‘zida mujassam etgan. Bu meros – insoniyat tarixining eng yorqin sahifalaridan biri.",
    imgPath: "/images/client6.png",
  },
];


const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
