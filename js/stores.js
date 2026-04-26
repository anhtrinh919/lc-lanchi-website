// Lan Chi Mart store network — 23 active stores across 10 provinces.
// Source of truth: lc-pe-prod.dim.dim_store (active = last_seen within 30 days).
// To add/remove a store: edit the relevant province's stores array.
// photo: filename in /photos/. If null, the card falls back to a generic interior shot.
window.LCM_STORES = [
  {
    province: "Hà Nội",
    stores: [
      { name: "Chợ Nghệ",   district: "Sơn Tây",     photo: "photos/Chợ Nghệ.JPG" },
      { name: "Xuân Khanh", district: "Sơn Tây",     photo: "photos/Xuân Khanh 02.JPG" },
      { name: "Ba Vì",      district: "Sơn Tây",     photo: "photos/Ba Vì.jpg" },
      { name: "Lục Quân",   district: "Sơn Tây",     photo: "photos/lục quân.jpg" },
      { name: "Hoàng Diệu", district: "Sơn Tây",     photo: "photos/Hoàng Diệu.jpg" },
      { name: "Xuân Mai",   district: "Chương Mỹ",   photo: "photos/Xuân Mai.jpg" },
      { name: "Thường Tín", district: "Thường Tín",  photo: "photos/Thường Tín.jpg" },
      { name: "Phú Xuyên",  district: "Phú Xuyên",   photo: "photos/Phú Xuyên.JPG" },
      { name: "Đông Anh",   district: "Đông Anh",    photo: "photos/Đông Anh.jpg" },
    ]
  },
  {
    province: "Hà Nam",
    stores: [
      { name: "Lý Nhân",    district: "Lý Nhân",     photo: "photos/lý nhân.jpg" },
      { name: "Đồng Văn",   district: "Duy Tiên",    photo: "photos/Đồng Văn.JPG" },
    ]
  },
  {
    province: "Vĩnh Phúc",
    stores: [
      { name: "Vĩnh Yên",   district: "Vĩnh Yên",    photo: "photos/Vĩnh Yên.jpg" },
      { name: "Phúc Yên",   district: "Phúc Yên",    photo: "photos/Phúc Yên.jpeg" },
    ]
  },
  {
    province: "Thái Nguyên",
    stores: [
      { name: "Phổ Yên",    district: "Phổ Yên",     photo: "photos/phổ yên.jpg" },
      { name: "Thái Nguyên",district: "Thái Nguyên", photo: "photos/Thái Nguyên.jpg" },
    ]
  },
  {
    province: "Hải Dương",
    stores: [
      { name: "Chí Linh",   district: "Chí Linh",    photo: "photos/Chí linh.JPG" },
      { name: "Kinh Môn",   district: "Kinh Môn",    photo: "photos/Kinh Môn.JPG" },
    ]
  },
  {
    province: "Quảng Ninh",
    stores: [
      { name: "Đông Triều", district: "Đông Triều",  photo: "photos/Đông Triều.jpeg" },
      { name: "Quảng Yên",  district: "Quảng Yên",   photo: "photos/Quang Yen-1.jpeg" },
    ]
  },
  {
    province: "Bắc Ninh",
    stores: [
      { name: "Thuận Thành",district: "Thuận Thành", photo: "photos/Thuận Thành.JPG" },
    ]
  },
  {
    province: "Hải Phòng",
    stores: [
      { name: "Thủy Nguyên",district: "Thủy Nguyên", photo: "photos/thủy nguyên.JPG" },
    ]
  },
  {
    province: "Nam Định",
    stores: [
      { name: "Giao Thủy",  district: "Giao Thủy",   photo: "photos/giao thủy.JPG" },
    ]
  },
  {
    province: "Ninh Bình",
    stores: [
      { name: "Tam Điệp",   district: "Tam Điệp",    photo: "photos/Tam Điệp.JPG" },
    ]
  },
];

// Fallback interior shot for any future store added without a dedicated photo.
window.LCM_STORE_FALLBACK_PHOTO = "photos/lan-chi-mart.jpg";

// Aggregate stats — derived, kept here so adding stores updates the hero.
// Founding year is fixed (Sơn Tây, 2007) — predates the oldest still-operating store.
window.LCM_STATS = (() => {
  const stores = window.LCM_STORES.flatMap(p => p.stores);
  const provinces = window.LCM_STORES.length;
  const foundingYear = 2007;
  const years = new Date().getFullYear() - foundingYear;
  return { storeCount: stores.length, provinces, years, foundingYear };
})();
