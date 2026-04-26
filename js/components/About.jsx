// About — full-width title row, then 2-col content
function LCMAbout() {
  const stats = window.LCM_STATS;
  const startYear = new Date().getFullYear() - stats.years;
  return (
    <section className="lcm-section lcm-about" id="about" data-screen-label="About">
      <div className="lcm-wrap">
        <div className="lcm-about__head">
          <span className="lcm-section__eyebrow">Về chúng tôi</span>
          <h2 className="lcm-about__title">
            Chợ của <span className="red">gia đình</span><br/>
            nông thôn <span className="red">Việt.</span>
          </h2>
          <p className="lcm-about__lead">
            Mang chất lượng và dịch vụ đô thị về gần hơn với mỗi mái nhà
            ở các tỉnh nông thôn miền Bắc — đúng giá, đúng hàng, đúng tiêu chuẩn.
          </p>
        </div>

        <div className="lcm-about__grid">
          <figure className="lcm-about__img" style={{overflow:'hidden',margin:0}}>
            <img
              src="photos/Vĩnh Yên.jpg"
              alt="Siêu thị Lan Chi Vĩnh Yên"
              style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}
            />
          </figure>

          <div className="lcm-about__copy">
            <p className="lcm-about__lede">
              Khởi đầu từ <b>Sơn Tây</b> năm {startYear}. Hôm nay {stats.storeCount} siêu thị
              tại {stats.provinces} tỉnh thành. Một thành viên của
              <b> Central Retail Việt Nam</b> từ 2015.
            </p>
            <blockquote className="lcm-about__pull">
              "Một mái nhà — đầy đủ mọi nhu cầu thiết yếu của gia đình
              nông thôn miền Bắc."
            </blockquote>
            <div className="lcm-about__facts">
              <div className="lcm-fact">
                <div className="lcm-fact__num">{stats.storeCount}<sup>+</sup></div>
                <div className="lcm-fact__label">Siêu thị</div>
              </div>
              <div className="lcm-fact">
                <div className="lcm-fact__num">{stats.provinces}</div>
                <div className="lcm-fact__label">Tỉnh thành</div>
              </div>
              <div className="lcm-fact">
                <div className="lcm-fact__num">{stats.years}<sup>n</sup></div>
                <div className="lcm-fact__label">Vận hành</div>
              </div>
              <div className="lcm-fact">
                <div className="lcm-fact__num">2015</div>
                <div className="lcm-fact__label">Gia nhập CRV</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.LCMAbout = LCMAbout;
