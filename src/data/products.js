const jerseyBase = [
  // =========================
  // EXISTING JERSEYS
  // =========================

  {
    id: 1,
    name: "Messi Home Jersey",
    category: "jersey",
    price: 4999,
    rating: 4.9,
    description:
      "Celebrate the GOAT with this Messi-inspired home jersey. A must-have for fans who want to represent football's legendary number 10 with pride and style.",
    image:
      "https://media-photos.depop.com/b1/242162300/2675898190_82ffc6c0241242babfe22192dd378e04/P0.jpg",
  },
  {
    id: 2,
    name: "Barcelona Home Jersey",
    category: "jersey",
    price: 5499,
    rating: 4.8,
    description:
      "Show your Blaugrana pride with this Barcelona home jersey, inspired by the club's iconic colours and rich footballing history.",
    image:
      "https://nicejsy.st/wp-content/uploads/2026/05/barcelona-26-27-home-jersey-player-version-1-5-1-600x719.webp",
  },
  {
    id: 3,
    name: "Argentina Home Jersey",
    category: "jersey",
    price: 5899,
    rating: 4.7,
    description:
      "Represent La Albiceleste with this Argentina home jersey. Featuring the iconic sky-blue and white identity, it's made for fans who carry the passion of Argentina wherever they go.",
    image:
      "https://www.jersey.to/pic/202511/mens-argentina-national-team-lionel-messi-adidas-white-fifa-x-world-cup-2026-home-replica-jersey_ss5_p-203130486+pv-1+u-zxkxbhk1zvj49qk9dqrq+v-fseuhfzd3mduw0oxzo1v.jpg",
  },
  {
    id: 4,
    name: "Portugal Home Jersey",
    category: "jersey",
    price: 5299,
    rating: 4.6,
    description:
      "Bring the passion of Portugal to your collection with this striking home jersey. A perfect choice for fans inspired by Portuguese football and its unforgettable number 7.",
    image:
      "https://foot-star.com/wp-content/uploads/2025/12/Maillot-Portugal-Domicile-2026-2027-Ronaldo-1-768x768.jpg",
  },
  {
    id: 5,
    name: "Brazil Home Jersey",
    category: "jersey",
    price: 4999,
    rating: 4.8,
    description:
      "Feel the flair and creativity of Brazilian football with this Brazil-inspired jersey. A bold choice for fans who love the beautiful game's skill, passion and attacking spirit.",
    image:
      "https://www.soccerfollowers.org/images/Brazil/Brazil-away-jersey-world-cup-2026.jpg",
  },
  {
    id: 6,
    name: "France Home Jersey",
    category: "jersey",
    price: 5599,
    rating: 4.7,
    description:
      "Represent Les Bleus with this stylish France home jersey, inspired by one of international football's strongest teams.",
    image:
      "https://jerseyclub.online/cdn/shop/files/IB5300-480_nike_france_home_jersey_game_royal__metallic_copper_D_jpg.webp?v=1777674018",
  },

  // =========================
  // LA LIGA
  // =========================

  {
    id: 7,
    name: "Real Madrid Home Jersey",
    category: "jersey",
    price: 5999,
    rating: 4.9,
    description:
      "A classic Real Madrid home jersey in the club's iconic white, inspired by the modern Bernabeu era.",
    image:
      "https://static.wixstatic.com/media/abc862_84a7c31b2a7c46c5a3b53a14696a727b~mv2.jpg/v1/fit/w_500%2Ch_500%2Cq_90/file.jpg",
  },
  {
    id: 8,
    name: "FC Barcelona 2025/26 Home Jersey",
    category: "jersey",
    price: 5799,
    rating: 4.8,
    description:
      "A modern Blaugrana home jersey combining Barcelona's traditional deep blue and red colours.",
    image:
      "https://www.futbolemotion.it/imagesarticulos/269522/grandes/camiseta-nike-fc-barcelona-primera-equipacion-authentic-2025-2026-deep-royal-blue-8.webp",
  },
  {
    id: 9,
    name: "Atletico Madrid Home Jersey",
    category: "jersey",
    price: 5499,
    rating: 4.7,
    description:
      "Atletico Madrid's classic red-and-white striped home jersey with a traditional club identity.",
    image:
      "https://www.futbolemotion.it/imagesarticulos/260654/grandes/camiseta-nike-atletico-de-madrid-primera-equipacion-authentic-2025-2026-sport-red-white-hyper-royal-0.webp",
  },
  {
    id: 10,
    name: "Athletic Club Home Jersey",
    category: "jersey",
    price: 5299,
    rating: 4.6,
    description:
      "A traditional Athletic Club red-and-white striped jersey celebrating the identity of Bilbao football.",
    image:
      "https://www.futebolreligiao.com.br/image/cache/catalog/Atletico%20de%20Bilbao/camisa-i-athletic-bilbao-2025-2026-castore-oficial-900x900.png",
  },

  // =========================
  // PREMIER LEAGUE
  // =========================

  {
    id: 11,
    name: "Arsenal Home Jersey",
    category: "jersey",
    price: 5499,
    rating: 4.8,
    description:
      "The iconic Arsenal red-and-white home jersey with a modern Adidas design.",
    image:
      "https://mssoccerjerseys.com/cdn/shop/files/ff2451c7.jpg?v=1755635236",
  },
  {
    id: 12,
    name: "Liverpool Home Jersey",
    category: "jersey",
    price: 5599,
    rating: 4.8,
    description:
      "A classic Liverpool red home jersey with the club's famous Anfield identity.",
    image:
      "https://www.futbolemotion.com/imagesarticulos/271073/750/camiseta-adidas-liverpool-fc-primera-equipacion-authentic-2025-2026-strawberry-red-7.webp",
  },
  {
    id: 13,
    name: "Manchester City Home Jersey",
    category: "jersey",
    price: 5599,
    rating: 4.7,
    description:
      "Manchester City's sky-blue home jersey featuring a bold design inspired by the club's heritage.",
    image:
      "https://www.prodirectsport.us/cdn/shop/files/1034122_main.jpg?v=1768218855",
  },
  {
    id: 14,
    name: "Chelsea Home Jersey",
    category: "jersey",
    price: 5499,
    rating: 4.7,
    description:
      "A modern royal-blue Chelsea home jersey inspired by London's football identity.",
    image:
      "https://www.weston.com.sg/cdn/shop/files/dds_b226f050-9a4e-41f9-834d-ad1f9cfc39ca_1200x1200.jpg?v=1748922307",
  },
  {
    id: 15,
    name: "Manchester United Home Jersey",
    category: "jersey",
    price: 5499,
    rating: 4.7,
    description:
      "A bold Manchester United red home jersey inspired by the Theatre of Dreams.",
    image:
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F4%2Ffiles%2F2025%2F06%2F12%2Fmanchester-united-adidas-reveals-2025-26-home-kit-0.jpg?cbr=1&fit=max&q=75&w=800",
  },
  {
    id: 16,
    name: "Tottenham Hotspur Home Jersey",
    category: "jersey",
    price: 5299,
    rating: 4.6,
    description:
      "A clean Tottenham home jersey in the club's traditional white and navy colours.",
    image:
      "https://thumblr.uniid.it/product/392867/0f075c1dc532.jpg?format=webp&q=75&width=3840",
  },

  // =========================
  // SERIE A
  // =========================

  {
    id: 17,
    name: "Inter Milan Home Jersey",
    category: "jersey",
    price: 5499,
    rating: 4.8,
    description:
      "Inter Milan's iconic black-and-blue striped home jersey with a modern design.",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.T9fbTSq83mr9M7-2F11SQQHaHP?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 18,
    name: "Juventus Home Jersey",
    category: "jersey",
    price: 5499,
    rating: 4.7,
    description:
      "Juventus' famous black-and-white stripes updated with modern Adidas styling.",
    image:
      "https://img.staticdj.com/679b3d1b3ee176f5b64555184bc4e0fd.jpg",
  },
  {
    id: 19,
    name: "AC Milan Home Jersey",
    category: "jersey",
    price: 5399,
    rating: 4.8,
    description:
      "A classic AC Milan red-and-black striped jersey with modern styling.",
    image:
      "https://contents.mediadecathlon.com/p2942505/k%245bec15251f67891bbcbf8eda6195e858/sq/8967558.jpg?f=800x0&format=auto",
  },
  {
    id: 20,
    name: "Napoli Home Jersey",
    category: "jersey",
    price: 5299,
    rating: 4.7,
    description:
      "Napoli's iconic Azzurro blue home jersey made for passionate supporters.",
    image:
      "https://www.protechkitzone.com/image/cache/data/2025-26%20Jerseys/Serie%20A/SSC%20Napoli/Napoli-2526-Home-Match-Shirt-400x400.jpg",
  },

  // =========================
  // BUNDESLIGA
  // =========================

  {
    id: 21,
    name: "Bayern Munich Home Jersey",
    category: "jersey",
    price: 5599,
    rating: 4.9,
    description:
      "Bayern Munich's iconic red-and-white home jersey with a modern design.",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.A8_u0sjIM1byeV6yKVCqhwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 22,
    name: "Borussia Dortmund Home Jersey",
    category: "jersey",
    price: 5399,
    rating: 4.8,
    description:
      "Borussia Dortmund's famous yellow-and-black home jersey with bold graphics.",
    image:
      "https://media.aws.locondo.jp/swsstatic/common/img/toku/football/clubteam/bvb/22ss/bvb_image_03.jpg",
  },
  {
    id: 23,
    name: "Bayer Leverkusen Home Jersey",
    category: "jersey",
    price: 5299,
    rating: 4.7,
    description:
      "A bold Bayer Leverkusen red home jersey with contrasting black details.",
    image:
      "https://assets-es.imgfoot.com/media/cache/800x800/2002876-heimtrikot-pro-castore-2425-front1-636773-xl.jpg",
  },

  // =========================
  // LIGUE 1
  // =========================

  {
    id: 24,
    name: "Paris Saint-Germain Home Jersey",
    category: "jersey",
    price: 5799,
    rating: 4.8,
    description:
      "PSG's modern navy home jersey featuring the club's famous red-and-white central design.",
    image:
      "https://sc3.locondo.jp/contents/commodity_image/NI/NI1757EM073190_1_l.jpg",
  },
  {
    id: 25,
    name: "Olympique Marseille Home Jersey",
    category: "jersey",
    price: 5299,
    rating: 4.7,
    description:
      "A clean Marseille white home jersey with traditional sky-blue details.",
    image:
      "https://viragesud.com/cdn/shop/files/Captured_ecran2025-11-24141104.png?v=1764264353&width=1024",
  },
  {
    id: 26,
    name: "AS Monaco Home Jersey",
    category: "jersey",
    price: 5299,
    rating: 4.6,
    description:
      "Monaco's iconic red-and-white diagonal home design inspired by the club's tradition.",
    image:
      "https://www.foot-sport.com/cdn/shop/files/Maillot-AS-Monaco-Domicile-2025-2026-1.jpg?v=1751918059&width=416",
  },

  // =========================
  // SAUDI PRO LEAGUE
  // =========================

  {
    id: 27,
    name: "Al Nassr Home Jersey",
    category: "jersey",
    price: 4999,
    rating: 4.8,
    description:
      "Al Nassr's striking yellow home jersey, including a special Cristiano Ronaldo-inspired edition.",
    image:
      "https://curva-app.nyc3.cdn.digitaloceanspaces.com/assets/uploads/products/1772837734-9776-13-139-1-copy.webp?v=1",
  },
  {
    id: 28,
    name: "Al Hilal Home Jersey",
    category: "jersey",
    price: 4999,
    rating: 4.7,
    description:
      "Al Hilal's blue home jersey with a bold geometric pattern and crisp white details.",
    image:
      "https://images.matjrah.online/6441/image/cache/catalog/productimage/2025/12/11/img_693aa89be45a8-1000x1000.jpg",
  },
  {
    id: 29,
    name: "Al Ittihad Home Jersey",
    category: "jersey",
    price: 4999,
    rating: 4.7,
    description:
      "Al Ittihad's traditional black-and-yellow striped home jersey.",
    image:
      "https://www.nike.qa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw6fc3ce02/nk/NK_/N/K/I/M/6/8/NK_NKIM6846_719IT26_2050005174778_1.jpg",
  },

  // =========================
  // INTERNATIONAL TEAMS
  // =========================

  {
    id: 30,
    name: "Argentina 2026 Away Jersey",
    category: "jersey",
    price: 5899,
    rating: 4.9,
    description:
      "Argentina's iconic sky-blue and white 2026 World Cup home jersey.",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRjHH9TOQRvACBsCW49WPJ_TkSmbrVFVT2Nems9NLvX43MR_8_ceUGnDwsNtVCIlXbGoJjDFJtSl_JyMEN_L4JpmTOiuA3CzWGscRHGYYKd2QgPblDIzsbtlT69xcLm_5JphM50tyb6YGvkxc9W5EetYIgSeiRxsCBakLOGcbDQQdcFfShOHjUGNJRYK91/s1600/arg-2026-away-kit%20(12).jpg",
  },
  {
    id: 31,
    name: "Brazil 2026 Home Jersey",
    category: "jersey",
    price: 5799,
    rating: 4.8,
    description:
      "Brazil's iconic yellow-and-green 2026 World Cup home jersey.",
    image:
      "https://thesoccerfactory.com/cdn/shop/files/AURORA_IB5143-724_PHSFH001-2000.jpg?v=1773792094",
  },
  {
    id: 32,
    name: "France 2022 Home Jersey",
    category: "jersey",
    price: 5799,
    rating: 4.8,
    description:
      "France's 2022 home jersey in the nation's iconic royal blue.",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.tzztSVuTuX0LCiXhmUHivQHaHZ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 33,
    name: "Spain 2026 Home Jersey",
    category: "jersey",
    price: 5599,
    rating: 4.7,
    description:
      "Spain's bold red 2026 national-team home jersey.",
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/e5ad6e5ee63d4b67855b4795db726a07_9366/Spain_26_Home_Yamal_Kids_Jersey_Red_KW7717_01_laydown.jpg",
  },
  {
    id: 34,
    name: "Germany 2026 Home Jersey",
    category: "jersey",
    price: 5799,
    rating: 4.8,
    description:
      "Germany's 2026 home jersey featuring a white base with black, red and gold detailing.",
    image:
      "https://simonsaboragol.com/cdn/shop/files/11.png?v=1769944440&width=1024",
  },
  {
    id: 35,
    name: "Netherlands 2026 Home Jersey",
    category: "jersey",
    price: 5599,
    rating: 4.7,
    description:
      "The Netherlands' iconic orange 2026 home jersey with navy detailing.",
    image:
      "https://acdn-us.mitiendanube.com/stores/001/409/577/products/camisa-titular-holanda-home-i-2026-nike-laranja-masculina-jogador-authentic-oficial-futebol-copa-do-mundo-fifa-netherlands-memphis-selecao-nova-822844147f2a6926f317745386251519-480-0.webp",
  },
  {
    id: 36,
    name: "Portugal 2026 Away Jersey",
    category: "jersey",
    price: 5599,
    rating: 4.8,
    description:
      "Portugal's 2026 red home jersey with green detailing.",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.IHWw0ZQUQsRoVvYMcJX52QHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 37,
    name: "Italy 2026 Home Jersey",
    category: "jersey",
    price: 5499,
    rating: 4.7,
    description:
      "Italy's classic Azzurri blue 2026 national-team home jersey.",
    image:
      "https://cdn.shopecdn.com/uploader/6a895d0e2c6449570853dd05d31c21cd16598f40.jpg",
  },
    // =========================
  // GREATEST PLAYERS / RETRO
  // =========================

  {
    id: 38,
    name: "Messi retro #10 Jersey",
    category: "jersey",
    price: 6999,
    rating: 5.0,
    description:
      "Messi 2010 barcelona jersey featuring the legendary number 10 Messi edition.",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.YJH08aRDegqeN3igcyaGwAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 39,
    name: "Cristiano Ronaldo Portugal retro #7 Jersey",
    category: "jersey",
    price: 6999,
    rating: 4.9,
    description:
      "Portugal's retro jersey featuring Cristiano Ronaldo's iconic number 7.",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.uVvs6Z4JdBMCuIFdWeHpOgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 40,
    name: "Pele Brazil 1970 Retro #10 Jersey",
    category: "jersey",
    price: 6499,
    rating: 5.0,
    description:
      "A retro Brazil 1970-inspired number 10 jersey celebrating Pele's legendary World Cup era.",
    image:
      "https://tacnacentro.cl/wp-content/uploads/2025/03/top-10.jpg",
  },
  {
    id: 41,
    name: "Maradona Argentina 1986 Retro Jersey",
    category: "jersey",
    price: 6499,
    rating: 5.0,
    description:
      "A classic Argentina 1986 World Cup-era jersey inspired by Diego Maradona's legendary number 10 era.",
    image:
      "https://cyberriedstore.com/wp-content/uploads/2025/09/Maradona-argentina-1986-home-jersey-product-400x400.jpg",
  },
  {
    id: 42,
    name: "Zidane France 1998 Retro #10 Jersey",
    category: "jersey",
    price: 6499,
    rating: 4.9,
    description:
      "France's iconic 1998 World Cup blue jersey with Zidane's legendary number 10.",
    image:
      "https://www.lemaillotvintage.com/cdn/shop/files/maillot-foot-vintage-domicile-equipe-de-france-1998-zidane-10-flocage.webp?v=1731953189",
  },
  {
    id: 43,
    name: "Ronaldinho Brazil 2002 Retro #11 Jersey",
    category: "jersey",
    price: 6499,
    rating: 4.9,
    description:
      "Brazil's famous 2002 World Cup yellow jersey inspired by Ronaldinho's number 11.",
    image:
      "https://www.originaltrikot.de/images/product_images/original_images/nike_brasilien_trikot_11_ronaldinho_wm_2002_heim_gelb.jpg",
  },
  {
    id: 44,
    name: "Ronaldo Nazario Brazil 2002 Retro #9 Jersey",
    category: "jersey",
    price: 6499,
    rating: 5.0,
    description:
      "Brazil's legendary 2002 World Cup number 9 jersey inspired by Ronaldo Nazario.",
    image:
      "https://footballpatchking.com/cdn/shop/files/IMG_7886_1024x1024%402x.png?v=1770147408",
  },
  {
    id: 45,
    name: "Johan Cruyff Netherlands 1974 Retro #14 Jersey",
    category: "jersey",
    price: 6499,
    rating: 4.9,
    description:
      "The iconic Netherlands orange jersey inspired by Johan Cruyff's legendary 1974 World Cup era.",
    image:
      "https://footyanalyst.com/wp-content/uploads/2020/07/Cruyff-Two-Stripes-FootyAnalyst.png",
  },
  {
    id: 46,
    name: "Andres Iniesta Spain 2010 Retro #6 Jersey",
    category: "jersey",
    price: 6499,
    rating: 4.9,
    description:
      "Spain's famous 2010 World Cup red jersey inspired by Andres Iniesta's number 6.",
    image:
      "https://i.ebayimg.com/images/g/a34AAOSwYMlllwyq/s-l400.jpg",
  },
  {
    id: 47,
    name: "Xavi Spain Retro #8 Jersey",
    category: "jersey",
    price: 6499,
    rating: 4.9,
    description:
      "A classic Spain red jersey inspired by Xavi's iconic number 8.",
    image:
      "https://classic-shirts.com/hpeciai/d31d433de7984654e6b70c4b9747b1f5/eng_pl_2013-SPAIN-XAVI-SHIRT-S-269452_5.jpg",
  },

  // =========================
  // RETRO SERIE A
  // =========================

  {
    id: 48,
    name: "AC Milan 2007 Champions League Retro Jersey",
    category: "jersey",
    price: 6499,
    rating: 5.0,
    description:
      "A legendary AC Milan retro jersey inspired by the 2007 Champions League triumph.",
    image:
      "https://media-photos.depop.com/b1/440741611/2327191490_3231e1ff38474feb95d600c84ae78b88/P0.jpg",
  },
  {
    id: 49,
    name: "Inter Milan 2010 Champions League Retro Jersey",
    category: "jersey",
    price: 6499,
    rating: 5.0,
    description:
      "Inter's iconic black-and-blue 2010 Champions League Final retro jersey.",
    image:
      "https://fanaacs.com/cdn/shop/files/Inter_Milan_2009-2010_Home_Retro_Jersey_FULL_SLEEVE.jpg?v=1764179269",
  },
  {
    id: 50,
    name: "Juventus 2002/03 Retro Home Jersey",
    category: "jersey",
    price: 6299,
    rating: 4.9,
    description:
      "A classic black-and-white Juventus jersey from the early 2000s.",
    image:
      "https://outletdelcalcio.eu/cdn/shop/files/Progettosenzatitolo_3_435efe0e-33b4-4b1f-a842-35eea9143723.png?v=1716371676&width=533",
  },
  {
    id: 51,
    name: "AS Roma 2000/01 Retro Home Jersey",
    category: "jersey",
    price: 6299,
    rating: 4.9,
    description:
      "AS Roma's iconic early-2000s home design with the club's classic colours.",
    image:
      "https://www.maxmaillots.top/images/as-roma-2000-2001-retro-shirt-home-cfb3-max.png",
  },
];

// =====================================================
// JERSEY METADATA
// =====================================================

const jerseyMetadata = {
  1:  { league: "La Liga", team: "Barcelona", type: "Current", player: "Messi" },
  2:  { league: "La Liga", team: "Barcelona", type: "Current", player: "" },
  3:  { league: "International", team: "Argentina", type: "Current", player: "Messi" },
  4:  { league: "International", team: "Portugal", type: "Current", player: "Cristiano Ronaldo" },
  5:  { league: "International", team: "Brazil", type: "Current", player: "" },
  6:  { league: "International", team: "France", type: "Current", player: "" },

  // La Liga
  7:  { league: "La Liga", team: "Real Madrid", type: "Current", player: "" },
  8:  { league: "La Liga", team: "Barcelona", type: "Current", player: "" },
  9:  { league: "La Liga", team: "Atletico Madrid", type: "Current", player: "" },
  10: { league: "La Liga", team: "Athletic Club", type: "Current", player: "" },

  // Premier League
  11: { league: "Premier League", team: "Arsenal", type: "Current", player: "" },
  12: { league: "Premier League", team: "Liverpool", type: "Current", player: "" },
  13: { league: "Premier League", team: "Manchester City", type: "Current", player: "" },
  14: { league: "Premier League", team: "Chelsea", type: "Current", player: "" },
  15: { league: "Premier League", team: "Manchester United", type: "Current", player: "" },
  16: { league: "Premier League", team: "Tottenham Hotspur", type: "Current", player: "" },

  // Serie A
  17: { league: "Serie A", team: "Inter Milan", type: "Current", player: "" },
  18: { league: "Serie A", team: "Juventus", type: "Current", player: "" },
  19: { league: "Serie A", team: "AC Milan", type: "Current", player: "" },
  20: { league: "Serie A", team: "Napoli", type: "Current", player: "" },

  // Bundesliga
  21: { league: "Bundesliga", team: "Bayern Munich", type: "Current", player: "" },
  22: { league: "Bundesliga", team: "Borussia Dortmund", type: "Current", player: "" },
  23: { league: "Bundesliga", team: "Bayer Leverkusen", type: "Current", player: "" },

  // Ligue 1
  24: { league: "Ligue 1", team: "Paris Saint-Germain", type: "Current", player: "" },
  25: { league: "Ligue 1", team: "Olympique Marseille", type: "Current", player: "" },
  26: { league: "Ligue 1", team: "AS Monaco", type: "Current", player: "" },

  // Saudi Pro League
  27: { league: "Saudi Pro League", team: "Al Nassr", type: "Current", player: "Cristiano Ronaldo" },
  28: { league: "Saudi Pro League", team: "Al Hilal", type: "Current", player: "" },
  29: { league: "Saudi Pro League", team: "Al Ittihad", type: "Current", player: "" },

  // International
  30: { league: "International", team: "Argentina", type: "Current", player: "Messi" },
  31: { league: "International", team: "Brazil", type: "Current", player: "" },
  32: { league: "International", team: "France", type: "Current", player: "" },
  33: { league: "International", team: "Spain", type: "Current", player: "" },
  34: { league: "International", team: "Germany", type: "Current", player: "" },
  35: { league: "International", team: "Netherlands", type: "Current", player: "" },
  36: { league: "International", team: "Portugal", type: "Current", player: "Cristiano Ronaldo" },
  37: { league: "International", team: "Italy", type: "Current", player: "" },

  // Greatest Players / Retro
  38: { league: "La Liga", team: "Barcelona", type: "Retro", player: "Messi" },
  39: { league: "International", team: "Portugal", type: "Retro", player: "Cristiano Ronaldo" },
  40: { league: "International", team: "Brazil", type: "Retro", player: "Pele" },
  41: { league: "International", team: "Argentina", type: "Retro", player: "Maradona" },
  42: { league: "International", team: "France", type: "Retro", player: "Zidane" },
  43: { league: "International", team: "Brazil", type: "Retro", player: "Ronaldinho" },
  44: { league: "International", team: "Brazil", type: "Retro", player: "Ronaldo Nazario" },
  45: { league: "International", team: "Netherlands", type: "Retro", player: "Johan Cruyff" },
  46: { league: "International", team: "Spain", type: "Retro", player: "Andres Iniesta" },
  47: { league: "International", team: "Spain", type: "Retro", player: "Xavi" },

  // Retro Serie A
  48: { league: "Serie A", team: "AC Milan", type: "Retro", player: "" },
  49: { league: "Serie A", team: "Inter Milan", type: "Retro", player: "" },
  50: { league: "Serie A", team: "Juventus", type: "Retro", player: "" },
  51: { league: "Serie A", team: "AS Roma", type: "Retro", player: "" },
};

// Add metadata automatically
export const jerseys = jerseyBase.map((jersey) => ({
  ...jersey,
  league: jerseyMetadata[jersey.id]?.league || "Other",
  team: jerseyMetadata[jersey.id]?.team || "Other",
  type: jerseyMetadata[jersey.id]?.type || "Current",
  player: jerseyMetadata[jersey.id]?.player || "",
}));

export const boots = [
  {
    id: 101,
    name: "Nike Mercurial Superfly",
    category: "boot",
    price: 12999,
    rating: 4.9,
    description:
      "Built for explosive speed and rapid acceleration, the Nike Mercurial Superfly is designed for players who want to attack defenders and make an impact in every sprint.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZTjVdHXsMByer8gpvxHaKuAxcbdZyTOYzfs_-DjtGHu52beFtWGmffei&s=10",
  },
  {
    id: 102,
    name: "Adidas Predator",
    category: "boot",
    price: 11999,
    rating: 4.8,
    description:
      "The Adidas Predator is made for players who want confidence, control and precision.",
    image:
      "https://brand.assets.adidas.com/image/upload/global_main_pack_1_born_for_goals_football_ss26_launch_plp_boots_pack_statement_card_1_d_8e07656fcd.jpg",
  },
  {
    id: 103,
    name: "Nike Phantom GX",
    category: "boot",
    price: 10999,
    rating: 4.7,
    description:
      "Designed for sharp control and precise play, the Nike Phantom GX suits players who want to dictate the game.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlaa9TVmGm1hhcWu0docx0EUUiGcUwULIpzsjbo4alaXHyqCN0k9jo_Pw&s=10",
  },
  {
    id: 104,
    name: "Puma Future",
    category: "boot",
    price: 9999,
    rating: 4.6,
    description:
      "Created for creative players who love quick movement and unpredictable play.",
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/108431/01/sv01/fnd/IND/fmt/png/FUTURE-8-MATCH-CREATIVITY-FG/AG-Football-Boots",
  },
  {
    id: 105,
    name: "Adidas Copa Pure",
    category: "boot",
    price: 8999,
    rating: 4.7,
    description:
      "Inspired by classic football, the Adidas Copa Pure is for players who value a clean touch and comfortable feel.",
    image:
      "https://assets.adidas.com/images/w_500,f_auto,q_auto/1f489dde442847758955f2e52260da1a_9366/COPA_PURE_IV_LEAGUE_Firm_Ground_Football_Boots_White_JQ0484_22_model.jpg",
  },
  {
    id: 106,
    name: "Nike Tiempo Legend",
    category: "boot",
    price: 10499,
    rating: 4.8,
    description:
      "A modern boot with a timeless football identity, designed for reliable touch and confident control.",
    image:
      "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_363,c_limit/48d88328-a9ab-4654-aaa8-2b88efd551b9/nike-releases-its-new-football-boot-the-tiempo-legend-10.jpg",
  },
];

export const products = [
  ...jerseys,
  ...boots,
];