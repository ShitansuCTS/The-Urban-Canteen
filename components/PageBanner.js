import Link from "next/link";
import { Playball, Lora } from "next/font/google";

const playball = Playball({
  weight: "400",
  subsets: ["latin"],
});

const lora = Lora({
  weight: "400",
  subsets: ["latin"],
});

const PageBanner = ({ pageName, bannerImage }) => {
  return (
    <div
      className="breadcrumb-wrapper bg-cover page-banner-overlay"
      style={{
        backgroundImage: `url("${bannerImage}")`,
      }}
    >
      <div className="container">
        <div className="page-heading center">
          {/* Page Title */}
          <h1
            className={playball.className}
            style={{ textTransform: "capitalize" }}
          >
            {pageName}
          </h1>

          {/* Breadcrumb */}
          <ul
            className={`breadcrumb-items ${lora.className}`}
            style={{ textTransform: "capitalize" }}
          >
            <li>
              <Link
                href="/"
                style={{
                  fontSize: "15px",
                  textTransform: "capitalize",
                  color: "white",
                  fontWeight: "500",
                }}
              >
                Home Page
              </Link>
            </li>

            <li>
              <i
                className="far fa-chevron-right"
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "500",
                }}
              />
            </li>

            <li
              style={{
                fontSize: "15px",
                textTransform: "capitalize",
                color: "white",
                fontWeight: "500",
              }}
            >
              {pageName}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
