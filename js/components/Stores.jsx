// Stores network — chip filter + grouped grid
function LCMStores() {
  const groups = window.LCM_STORES;
  const all = groups.flatMap(g => g.stores);
  const [active, setActive] = React.useState("all");

  const visibleGroups = active === "all"
    ? groups
    : groups.filter(g => g.province === active);

  return (
    <section className="lcm-section lcm-stores" id="stores" data-screen-label="Stores">
      <div className="lcm-wrap">
        <div className="lcm-section__head">
          <span className="lcm-section__eyebrow">Hệ thống cửa hàng</span>
          <h2 className="lcm-section__title">
            {all.length} siêu thị<br /><span className="red">— {groups.length} tỉnh thành.</span>
          </h2>
          <p className="lcm-section__lead">
            Tìm cửa hàng Lan&nbsp;Chi gần bạn nhất.
          </p>
        </div>

        <div className="lcm-stores__filters" role="tablist" aria-label="Lọc theo tỉnh">
          <button
            className={`lcm-chip ${active === "all" ? "is-active" : ""}`}
            onClick={() => setActive("all")}
          >
            Tất cả <span className="lcm-chip__count">{all.length}</span>
          </button>
          {groups.map(g => (
            <button
              key={g.province}
              className={`lcm-chip ${active === g.province ? "is-active" : ""}`}
              onClick={() => setActive(g.province)}
            >
              {g.province} <span className="lcm-chip__count">{g.stores.length}</span>
            </button>
          ))}
        </div>

        {visibleGroups.map(g => (
          <div className="lcm-stores__group" key={g.province}>
            <div className="lcm-stores__group-head">
              <h3>{g.province}</h3>
              <span className="count">{g.stores.length} cửa hàng</span>
            </div>
            <div className="lcm-stores__grid">
              {g.stores.map((s) => (
                <a className="lcm-store" key={s.name} href="#">
                  <div className="lcm-store__photo">
                    <img
                      src={s.photo || window.LCM_STORE_FALLBACK_PHOTO}
                      alt={`Lan Chi ${s.name}`}
                      style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}
                      loading="lazy"
                    />
                  </div>
                  <div className="lcm-store__body">
                    <h4 className="lcm-store__name">Lan Chi {s.name}</h4>
                    <p className="lcm-store__addr">
                      <i className="ph ph-map-pin" style={{marginRight:4,opacity:0.6}}></i>
                      {s.district}, {g.province}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.LCMStores = LCMStores;
