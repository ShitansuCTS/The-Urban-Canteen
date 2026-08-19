import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Gallery from "@/components/NewGallery";

const Page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName="gallery" />

      <Gallery />
    </FoodKingLayout>
  );
};

export default Page;