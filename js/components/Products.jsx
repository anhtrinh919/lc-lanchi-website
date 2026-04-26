// Products grid — 4 categories as bold color blocks
function LCMProducts() {
  const items = window.LCM_PRODUCTS;
  return (
    <section className="lcm-section lcm-products" id="products" data-screen-label="Products">
      <div className="lcm-wrap">
        <div className="lcm-section__head">
          <span className="lcm-section__eyebrow">Sản phẩm</span>
          <h2 className="lcm-section__title">
            Năm ngành hàng<br /><span className="red">— một mái nhà.</span>
          </h2>
          <p className="lcm-section__lead">
            Từ rau củ tới đồ gia dụng — tất cả nhu cầu thiết yếu
            của gia đình nông thôn miền Bắc, dưới một mái nhà.
          </p>
        </div>
        <div className="lcm-products__grid">
          {items.map((p, i) => (
            <article className="lcm-product" key={p.key} style={{ background: p.bg, color: p.fg }}>
              <span className="lcm-product__num">0{i + 1} / 0{items.length}</span>
              <i className={`lcm-product__icon ph ${p.icon}`}></i>
              <h3 className="lcm-product__title">{p.vi}</h3>
              <div className="lcm-product__en">{p.en}</div>
              <p className="lcm-product__blurb">{p.blurb}</p>
              <span className="lcm-product__arrow">
                Xem ngành hàng <i className="ph ph-arrow-down-right"></i>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.LCMProducts = LCMProducts;
