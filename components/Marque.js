const Marque = ({ pt = 0 }) => {
  return (
    <div className={`marque-section fix section-padding pt-${pt} section-bg`}>
      <div className="marquee-wrapper text-slider">
        <div className="marquee-inner to-left">
          <ul className="marqee-list d-flex">
            <li className="marquee-item">

              <span className="text-slider text-color">
                GOOD FOOD
              </span>

              <span className="marquee-symbol"> ✦ </span>

              <span className="text-slider text-color-2">
                GREAT VIBES
              </span>

              <span className="marquee-symbol"> • </span>

              <span className="text-slider text-color">
                URBAN MOMENTS
              </span>

              <span className="marquee-symbol"> ✦</span>

              <span className="text-slider text-color-2">
                SIGNATURE FLAVOURS
              </span>

              <span className="marquee-symbol"> •</span>

              <span className="text-slider text-color">
                MADE TO SHARE
              </span>

              <span className="marquee-symbol"> ✦ </span>

              <span className="text-slider text-color-2">
                GOOD FOOD
              </span>

              <span className="marquee-symbol"> •</span>

              <span className="text-slider text-color">
                GREAT VIBES
              </span>

              <span className="marquee-symbol"> ✦ </span>

              <span className="text-slider text-color-2">
                URBAN MOMENTS
              </span>

              <span className="marquee-symbol"> •</span>

              <span className="text-slider text-color">
                SIGNATURE FLAVOURS
              </span>

              <span className="marquee-symbol"> ✦</span>

              <span className="text-slider text-color-2">
                MADE TO SHARE
              </span>

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Marque;