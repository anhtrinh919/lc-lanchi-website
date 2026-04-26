// Header — sticky nav with brand mark
function LCMHeader() {
  return (
    <React.Fragment>
      <div className="lcm-topbar">
        <div className="lcm-wrap lcm-topbar__inner">
          <span><i className="ph ph-phone"></i> Hotline 1900&nbsp;1234</span>
          <span><i className="ph ph-clock"></i> Mở cửa 7:30 – 22:00 hằng ngày</span>
          <span className="spacer"></span>
          <span><i className="ph ph-translate"></i> Tiếng Việt</span>
        </div>
      </div>
      <header className="lcm-header" data-screen-label="Header">
        <div className="lcm-wrap lcm-header__row">
          <a href="#" className="lcm-brand" aria-label="Lan Chi Mart">
            <span className="lcm-brand__mark">
              <img src="assets/logo-brand-mark.png" alt="" />
            </span>
            <span className="lcm-brand__word">LANCHI&nbsp;MART</span>
          </a>
          <nav className="lcm-nav">
            <a href="#about" className="is-active">Về Chúng Tôi</a>
            <a href="#products">Sản Phẩm</a>
            <a href="#services">Dịch Vụ</a>
            <a href="#stores">Cửa Hàng</a>
            <a href="#careers">Tuyển Dụng</a>
            <a href="#contact">Liên Hệ</a>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
}
window.LCMHeader = LCMHeader;
