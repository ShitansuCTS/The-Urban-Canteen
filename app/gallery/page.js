import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Gallery from "@/components/NewGallery";

export const metadata = {
  title: "Gallery | The Urban Canteen",
  description:
    "Explore The Urban Canteen gallery featuring delicious food, vibrant interiors, refreshing drinks and memorable dining moments.",
};

const Page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName="gallery" />

      <Gallery />
    </FoodKingLayout>
  );
};

export default Page;