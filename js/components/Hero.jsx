// Hero — Mua sắm · Ăn uống · Vui chơi
// Layout: dominant image-block on the right, clean type stack on the left
function LCMHero() {
  const stats = window.LCM_STATS;
  return (
    <section className="lcm-hero" data-screen-label="Hero">
      <div className="lcm-wrap">
        <div className="lcm-hero__inner">
          {/* LEFT — type stack */}
          <div className="lcm-hero__left">
            <span className="lcm-hero__eyebrow">
              <i className="ph ph-storefront"></i>
              Chợ của gia đình Việt
            </span>
            <h1 className="lcm-hero__title">
              <span className="row">Mua sắm.</span>
              <span className="row"><em>Ăn uống.</em></span>
              <span className="row">Vui chơi.</span>
            </h1>
            <p className="lcm-hero__lead">
              Chuỗi siêu thị nông thôn miền Bắc — mua sắm, ẩm thực, tiệm bánh
              và khu vui chơi dưới cùng một mái nhà.
            </p>
            <div className="lcm-hero__ctas">
              <a href="#about" className="lcm-btn lcm-btn--white">
                Tìm hiểu Lan&nbsp;Chi <i className="ph ph-arrow-right"></i>
              </a>
              <a href="#stores" className="lcm-btn lcm-btn--ghost-white">
                Hệ thống cửa hàng
              </a>
            </div>
          </div>

          {/* RIGHT — hero image + brand chip */}
          <div className="lcm-hero__right">
            <figure className="lcm-hero__img" style={{overflow:'hidden',border:'none',background:'none',margin:0}}>
              <img
                src="photos/lan-chi-mart.jpg"
                alt="Lan Chi Mart"
                style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}
              />
            </figure>
            <div className="lcm-hero__chip">
              <div className="lcm-hero__chip-num">{stats.storeCount}<sup>+</sup></div>
              <div className="lcm-hero__chip-label">
                cửa hàng<br />
                <em>{stats.provinces} tỉnh miền Bắc</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.LCMHero = LCMHero;
