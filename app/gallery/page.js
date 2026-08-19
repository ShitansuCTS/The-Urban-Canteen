
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"gallery"} />
      {/*<< Gallery Section Start >>*/}
      <div className="gallery-section fix section-bg section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay=".3s">
              <div
                className="galler-image-2 bg-cover"
                style={{ backgroundImage: 'url("assets/img/gallery/23.webp")' }}
              >
                <a href="assets/img/gallery/23.webp" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".5s">
              <div
                className="galler-image-2 bg-cover"
                style={{ backgroundImage: 'url("assets/img/gallery/07.webp")' }}
              >
                <a href="assets/img/gallery/07.webp" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
              <div
                className="galler-image-2 bg-cover"
                style={{ backgroundImage: 'url("assets/img/gallery/08.webp")' }}
              >
                <a href="assets/img/gallery/08.webp" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
              </div>
            </div>
            <div className="col-lg-8 wow fadeInUp" data-wow-delay=".5s">
              <div
                className="galler-image-2 bg-cover"
                style={{ backgroundImage: 'url("assets/img/gallery/21.webp")' }}
              >
                <a href="assets/img/gallery/21.webp" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 wow fadeInUp" data-wow-delay=".3s">
              <div
                className="galler-image-2 bg-cover"
                style={{ backgroundImage: 'url("assets/img/gallery/13.webp")' }}
              >
                <a href="assets/img/gallery/13.webp" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 wow fadeInUp" data-wow-delay=".5s">
              <div
                className="galler-image-2 bg-cover"
                style={{ backgroundImage: 'url("assets/img/gallery/15.webp")' }}
              >
                <a href="assets/img/gallery/15.webp" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div
                className="galler-image-2 bg-cover"
                style={{ backgroundImage: 'url("assets/img/gallery/01.webp")' }}
              >
                <a href="assets/img/gallery/01.webp" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 wow fadeInUp" data-wow-delay=".5s">
              <div
                className="galler-image-2 bg-cover"
                style={{ backgroundImage: 'url("assets/img/gallery/12.webp")' }}
              >
                <a href="assets/img/gallery/12.webp" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div
                className="galler-image-2 bg-cover"
                style={{ backgroundImage: 'url("assets/img/gallery/20.webp")' }}
              >
                <a href="assets/img/gallery/20.webp" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 wow fadeInUp" data-wow-delay=".5s">
              <div
                className="galler-image-2 bg-cover"
                style={{ backgroundImage: 'url("assets/img/gallery/22.webp")' }}
              >
                <a href="assets/img/gallery/22.webp" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
              </div>
            </div>
            <div className="col-lg-9 wow fadeInUp" data-wow-delay=".5s">
              <div
                className="galler-image-2 bg-cover"
                style={{ backgroundImage: 'url("assets/img/gallery/13.webp")' }}
              >
                <a href="assets/img/gallery/13.webp" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 wow fadeInUp" data-wow-delay=".5s">
              <div
                className="galler-image-2 bg-cover"
                style={{ backgroundImage: 'url("assets/img/gallery/02.webp")' }}
              >
                <a href="assets/img/gallery/02.webp" className="icon img-popup">
                  <i className="fal fa-plus" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </FoodKingLayout>
  );
};
export default page;
