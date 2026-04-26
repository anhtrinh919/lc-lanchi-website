// Stat strip — sits flush under hero
function LCMStats() {
  const stats = window.LCM_STATS;
  return (
    <section className="lcm-stats" data-screen-label="Stats">
      <div className="lcm-wrap lcm-stats__grid">
        <div className="lcm-stat">
          <div className="lcm-stat__num">{stats.storeCount}<sup>+</sup></div>
          <div className="lcm-stat__label">Cửa hàng đang hoạt động</div>
        </div>
        <div className="lcm-stat">
          <div className="lcm-stat__num">{stats.provinces}</div>
          <div className="lcm-stat__label">Tỉnh thành miền Bắc</div>
        </div>
        <div className="lcm-stat">
          <div className="lcm-stat__num">{stats.years}<sup>năm</sup></div>
          <div className="lcm-stat__label">Phục vụ gia đình Việt</div>
        </div>
        <div className="lcm-stat">
          <div className="lcm-stat__num">20<sup>k+</sup></div>
          <div className="lcm-stat__label">Mã hàng tiêu dùng mỗi ngày</div>
        </div>
      </div>
    </section>
  );
}
window.LCMStats = LCMStats;
