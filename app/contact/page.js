// import Cta from "@/components/Cta";
import ContactSection from "@/components/ContactSection";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";

export const metadata = {
  title: "Contact Us | The Urban Canteen",
  description:
    "Get in touch with The Urban Canteen for reservations, enquiries and more. Visit us and enjoy great food, refreshing drinks and a vibrant dining experience.",
};
const page = () => {


  return (
    <FoodKingLayout>
      <PageBanner pageName={"Contact us"} bannerImage="/assets/img/restaurant/7.webp" />

      {/*<< Contact Section Start >>*/}
      <ContactSection />
      {/*<< Contact Info Section Start >>*/}

    </FoodKingLayout>
  );
};
export default page;
