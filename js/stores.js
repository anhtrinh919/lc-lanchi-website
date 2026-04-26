// Lan Chi Mart store network — grouped by province
// To add a store: append an object to the relevant province's stores array.
// photo: path relative to the HTML file. null = show placeholder.
window.LCM_STORES = [
  {
    province: "Hà Nội",
    stores: [
      { name: "Sóc Sơn",    address: "QL3, TT. Sóc Sơn, H. Sóc Sơn",          opened: 2011, photo: null },
      { name: "Đông Anh",   address: "TT. Đông Anh, H. Đông Anh",               opened: 2014, photo: "photos/Đông Anh.jpg" },
      { name: "Phú Xuyên",  address: "TT. Phú Xuyên, H. Phú Xuyên",            opened: 2016, photo: "photos/Phú Xuyên.JPG" },
      { name: "Thường Tín",  address: "TT. Thường Tín, H. Thường Tín",           opened: 2017, photo: "photos/Thường Tín.jpg" },
      { name: "Mỹ Đức",     address: "TT. Đại Nghĩa, H. Mỹ Đức",               opened: 2019, photo: null },
      { name: "Ba Vì",       address: "TT. Ba Vì, H. Ba Vì",                     opened: 2020, photo: "photos/Ba Vì.jpg" },
      { name: "Đan Phượng",  address: "TT. Phùng, H. Đan Phượng",               opened: 2021, photo: "photos/Đan Phượng.jpg" },
      { name: "Xuân Mai",    address: "TT. Xuân Mai, H. Chương Mỹ",              opened: 2021, photo: "photos/Xuân Mai.jpg" },
      { name: "Chúc Sơn",   address: "TT. Chúc Sơn, H. Chương Mỹ",             opened: 2022, photo: "photos/chúc sơn (2).jpg" },
      { name: "Xuân Khanh", address: "P. Xuân Khanh, TX. Sơn Tây",              opened: 2022, photo: "photos/Xuân Khanh 02.JPG" },
    ]
  },
  {
    province: "Vĩnh Phúc",
    stores: [
      { name: "Vĩnh Yên",   address: "P. Khai Quang, TP. Vĩnh Yên",            opened: 2010, photo: "photos/Vĩnh Yên.jpg" },
      { name: "Phúc Yên",   address: "P. Hùng Vương, TP. Phúc Yên",            opened: 2012, photo: "photos/Phúc Yên.jpeg" },
      { name: "Vĩnh Tường", address: "TT. Vĩnh Tường, H. Vĩnh Tường",          opened: 2015, photo: null },
      { name: "Yên Lạc",    address: "TT. Yên Lạc, H. Yên Lạc",                opened: 2018, photo: null },
    ]
  },
  {
    province: "Phú Thọ",
    stores: [
      { name: "Việt Trì",   address: "P. Tiên Cát, TP. Việt Trì",              opened: 2013, photo: null },
      { name: "Phú Thọ",    address: "P. Hùng Vương, TX. Phú Thọ",             opened: 2016, photo: null },
      { name: "Thanh Sơn",  address: "TT. Thanh Sơn, H. Thanh Sơn",            opened: 2019, photo: null },
      { name: "Cẩm Khê",    address: "TT. Sông Thao, H. Cẩm Khê",              opened: 2020, photo: null },
    ]
  },
  {
    province: "Bắc Giang",
    stores: [
      { name: "Bắc Giang",  address: "P. Trần Phú, TP. Bắc Giang",             opened: 2014, photo: null },
      { name: "Hiệp Hòa",   address: "TT. Thắng, H. Hiệp Hòa",                 opened: 2017, photo: null },
      { name: "Lục Ngạn",   address: "TT. Chũ, H. Lục Ngạn",                   opened: 2020, photo: null },
    ]
  },
  {
    province: "Bắc Ninh",
    stores: [
      { name: "Từ Sơn",     address: "P. Đông Ngàn, TX. Từ Sơn",               opened: 2012, photo: null },
      { name: "Quế Võ",     address: "TT. Phố Mới, H. Quế Võ",                 opened: 2016, photo: null },
      { name: "Thuận Thành",address: "TT. Hồ, H. Thuận Thành",                  opened: 2018, photo: "photos/Thuận Thành.JPG" },
    ]
  },
  {
    province: "Hải Dương",
    stores: [
      { name: "Hải Dương",  address: "P. Trần Phú, TP. Hải Dương",             opened: 2013, photo: null },
      { name: "Chí Linh",   address: "P. Sao Đỏ, TP. Chí Linh",                opened: 2016, photo: "photos/Chí linh.JPG" },
      { name: "Cẩm Giàng",  address: "TT. Lai Cách, H. Cẩm Giàng",             opened: 2019, photo: null },
      { name: "Kim Thành",  address: "TT. Phú Thái, H. Kim Thành",              opened: 2021, photo: null },
      { name: "Kinh Môn",   address: "TT. Kinh Môn, TX. Kinh Môn",              opened: 2020, photo: "photos/Kinh Môn.JPG" },
    ]
  },
  {
    province: "Hưng Yên",
    stores: [
      { name: "Hưng Yên",   address: "P. Hiến Nam, TP. Hưng Yên",              opened: 2015, photo: null },
      { name: "Mỹ Hào",     address: "P. Bần Yên Nhân, TX. Mỹ Hào",            opened: 2018, photo: null },
      { name: "Khoái Châu", address: "TT. Khoái Châu, H. Khoái Châu",          opened: 2020, photo: null },
    ]
  },
  {
    province: "Thái Bình",
    stores: [
      { name: "Thái Bình",  address: "P. Lê Hồng Phong, TP. Thái Bình",        opened: 2014, photo: null },
      { name: "Tiền Hải",   address: "TT. Tiền Hải, H. Tiền Hải",               opened: 2018, photo: null },
      { name: "Đông Hưng",  address: "TT. Đông Hưng, H. Đông Hưng",            opened: 2021, photo: null },
    ]
  },
  {
    province: "Nam Định",
    stores: [
      { name: "Nam Định",   address: "P. Trần Hưng Đạo, TP. Nam Định",         opened: 2013, photo: null },
      { name: "Hải Hậu",    address: "TT. Yên Định, H. Hải Hậu",                opened: 2017, photo: null },
      { name: "Giao Thủy",  address: "TT. Ngô Đồng, H. Giao Thủy",             opened: 2020, photo: "photos/giao thủy.JPG" },
    ]
  },
  {
    province: "Ninh Bình",
    stores: [
      { name: "Ninh Bình",  address: "P. Đông Thành, TP. Ninh Bình",           opened: 2015, photo: null },
      { name: "Tam Điệp",   address: "P. Bắc Sơn, TP. Tam Điệp",               opened: 2019, photo: "photos/Tam Điệp.JPG" },
      { name: "Nho Quan",   address: "TT. Nho Quan, H. Nho Quan",               opened: 2022, photo: null },
    ]
  },
  {
    province: "Quảng Ninh",
    stores: [
      { name: "Đông Triều", address: "TT. Đông Triều, TX. Đông Triều",          opened: 2021, photo: "photos/Đông Triều.jpeg" },
      { name: "Quảng Yên",  address: "P. Quảng Yên, TX. Quảng Yên",            opened: 2022, photo: "photos/Quang Yen-1.jpeg" },
    ]
  },
  {
    province: "Thái Nguyên",
    stores: [
      { name: "Thái Nguyên",address: "P. Túc Duyên, TP. Thái Nguyên",           opened: 2020, photo: "photos/Thái Nguyên.jpg" },
      { name: "Phổ Yên",    address: "TT. Ba Hàng, TX. Phổ Yên",                opened: 2021, photo: "photos/phổ yên.jpg" },
    ]
  },
  {
    province: "Hà Nam",
    stores: [
      { name: "Lý Nhân",    address: "TT. Vĩnh Trụ, H. Lý Nhân",               opened: 2021, photo: "photos/lý nhân.jpg" },
      { name: "Đồng Văn",   address: "TT. Đồng Văn, H. Duy Tiên",              opened: 2022, photo: "photos/Đồng Văn.JPG" },
    ]
  },
  {
    province: "Hải Phòng",
    stores: [
      { name: "Thủy Nguyên",address: "TT. Núi Đèo, H. Thủy Nguyên",            opened: 2022, photo: "photos/thủy nguyên.JPG" },
    ]
  },
];

// Aggregate stats — derived, kept here so adding stores updates the hero.
window.LCM_STATS = (() => {
  const stores = window.LCM_STORES.flatMap(p => p.stores);
  const provinces = window.LCM_STORES.length;
  const earliest = Math.min(...stores.map(s => s.opened));
  const years = new Date().getFullYear() - earliest;
  return { storeCount: stores.length, provinces, years };
})();
