// Careers CTA + Footer
function LCMCareers() {
  return (
    <section className="lcm-section lcm-cta" id="careers" data-screen-label="Careers">
      <div className="lcm-wrap lcm-cta__inner">
        <div>
          <span className="lcm-section__eyebrow" style={{background:'var(--lanchi-black)', color:'var(--lanchi-amber)'}}>Tuyển dụng</span>
          <h2 className="lcm-cta__title">
            Cùng Lan&nbsp;Chi<br />
            phục vụ <span className="red">quê hương.</span>
          </h2>
          <p className="lcm-cta__copy">
            Chúng tôi đang tuyển dụng tại tất cả {window.LCM_STATS.storeCount} cửa hàng —
            từ thu ngân, kho vận, tiệm bánh, đến quản lý ngành hàng và quản lý cửa
            hàng. Cơ hội làm việc ngay tại quê hương bạn, không phải xa nhà.
          </p>
          <div className="lcm-hero__ctas">
            <a href="#" className="lcm-btn lcm-btn--red">
              Xem vị trí đang tuyển <i className="ph ph-arrow-right"></i>
            </a>
            <a href="#" className="lcm-btn lcm-btn--dark">Gửi hồ sơ</a>
          </div>
        </div>
        <ul className="lcm-cta__bullets">
          <li><b>1</b><span><b style={{background:'transparent',color:'var(--lanchi-black)',display:'inline',fontStyle:'normal',fontWeight:800,marginRight:6}}>Việc gần nhà</b> — làm việc tại cửa hàng nơi bạn sinh sống.</span></li>
          <li><b>2</b><span><b style={{background:'transparent',color:'var(--lanchi-black)',display:'inline',fontStyle:'normal',fontWeight:800,marginRight:6}}>Đào tạo bài bản</b> — chương trình huấn luyện theo chuẩn Central Retail.</span></li>
          <li><b>3</b><span><b style={{background:'transparent',color:'var(--lanchi-black)',display:'inline',fontStyle:'normal',fontWeight:800,marginRight:6}}>Lộ trình rõ ràng</b> — từ nhân viên lên trưởng quầy, quản lý ngành hàng.</span></li>
          <li><b>4</b><span><b style={{background:'transparent',color:'var(--lanchi-black)',display:'inline',fontStyle:'normal',fontWeight:800,marginRight:6}}>Phúc lợi đầy đủ</b> — BHXH, thưởng lễ Tết, ưu đãi mua sắm tại Lan Chi.</span></li>
        </ul>
      </div>
    </section>
  );
}
window.LCMCareers = LCMCareers;

function LCMFooter() {
  return (
    <footer className="lcm-footer" id="contact" data-screen-label="Footer">
      <div className="lcm-wrap">
        <div className="lcm-footer__grid">
          <div className="lcm-footer__about">
            <div className="lcm-footer__brand-row">
              <span className="lcm-footer__brand-mark">
                <img src="assets/logo-brand-mark.png" alt="" />
              </span>
              <span className="lcm-footer__brand-name">LANCHI&nbsp;MART</span>
            </div>
            <p>
              Chuỗi siêu thị tổng hợp nông thôn miền Bắc. Một thành viên của
              Tập đoàn Central Retail Việt Nam.
            </p>
          </div>

          <div>
            <h4>Liên Hệ</h4>
            <ul>
              <li><a href="tel:19000669" style={{color:'rgb(225, 0, 0)'}}><i className="ph ph-phone" style={{marginRight:6}}></i>1900 066 698</a></li>
              <li><a href="mailto:phongmarketing@lanchi.vn"><i className="ph ph-envelope" style={{marginRight:6}}></i>phongmarketing@lanchi.vn</a></li>
              <li><span><i className="ph ph-map-pin" style={{marginRight:6}}></i>Khu Vai Cời, Sơn Tây, Hà Nội</span></li>
              <li><span><i className="ph ph-clock" style={{marginRight:6}}></i>8:00 – 22:00 hằng ngày</span></li>
            </ul>
          </div>

          <div>
            <h4>Khám Phá</h4>
            <ul>
              <li><a href="#about">Câu chuyện thương hiệu</a></li>
              <li><a href="#products">Bốn ngành hàng</a></li>
              <li><a href="#services">Dịch vụ tại cửa hàng</a></li>
              <li><a href="#stores">Hệ thống cửa hàng</a></li>
              <li><a href="#careers">Tuyển dụng</a></li>
            </ul>
          </div>

          <div>
            <h4>Tập Đoàn</h4>
            <ul>
              <li>
                <a href="https://www.centralretail.com.vn" target="_blank" rel="noreferrer">
                  Central Retail Việt Nam <i className="ph ph-arrow-up-right" style={{marginLeft:4}}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="lcm-wrap lcm-footer__legal">
          <span>© {new Date().getFullYear()} Công ty TNHH Lan Chi Mart. Mọi quyền được bảo lưu.</span>
        </div>
      </div>
    </footer>
  );
}
window.LCMFooter = LCMFooter;
