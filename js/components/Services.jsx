// "Khuyến mãi" tape — a pure brand-pattern divider
function LCMTape() {
  const items = ["Mua Sắm", "Ăn Uống", "Vui Chơi", "Mua Sắm", "Ăn Uống", "Vui Chơi", "Mua Sắm", "Ăn Uống", "Vui Chơi"];
  return (
    <div className="lcm-tape" aria-hidden="true">
      <div className="lcm-wrap">
        <div className="lcm-tape__track">
          {items.map((t, i) => (
            <span key={i}>
              {t} <i className="ph ph-arrow-down-right"></i>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
window.LCMTape = LCMTape;

// Services strip — Food City, Tiệm Bánh, Playland, Thời Trang
function LCMServices() {
  const items = window.LCM_SERVICES;
  return (
    <section className="lcm-section lcm-services" id="services" data-screen-label="Services">
      <div className="lcm-wrap">
        <div className="lcm-services__head">
          <span className="lcm-section__eyebrow">Dịch vụ</span>
          <h2 className="lcm-section__title">
            Không chỉ là<br /><span className="red">siêu thị.</span>
          </h2>
          <p className="lcm-services__strap">
            Bốn dịch vụ biến mỗi cửa hàng thành điểm đến cho cả gia đình.
          </p>
        </div>
        <div className="lcm-services__grid">
          {items.map((s, i) => (
            <article className="lcm-service" key={s.name}>
              <span className="lcm-service__num">0{i + 1}</span>
              <span className="lcm-service__icon"><i className={`ph-fill ${s.icon}`}></i></span>
              <h3 className="lcm-service__name">{s.name}</h3>
              <p className="lcm-service__desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.LCMServices = LCMServices;
