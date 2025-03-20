import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useState } from "react";
import categories from "../Data/categories";
import Layout from "../Layout/Layout";
import product_listing from "../assets/product_listing.png";
import ImageLightbox from "../Components/ImageLightbox";

const Category = () => {
  const { category } = useParams();
  const categoryData = categories.find((cat) => cat.name === category);

  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAlt, setSelectedAlt] = useState("");

  // Function to open lightbox with the selected image
  const openLightbox = (image, alt) => {
    setSelectedImage(image);
    setSelectedAlt(alt);
    setLightboxOpen(true);
  };

  if (!categoryData) {
    return <p>Category not found</p>;
  }

  return (
    <Layout>
      <Helmet>
        <title>{`${categoryData.name} | Sardar Industries - Brass Products`}</title>
        <meta
          name="description"
          content={`Explore our ${
            categoryData.name
          } category for high-quality brass products. Discover a range of products including ${categoryData.products
            .map((product) => product.name)
            .join(", ")}.`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com/products/${category}`}
        />
        <meta
          property="og:title"
          content={`${categoryData.name} - Sardar Industries`}
        />
        <meta
          property="og:description"
          content={`Check out the ${categoryData.name} products at Sardar Industries. We offer a wide selection of premium brass items.`}
        />
        <meta property="og:image" content={product_listing} />
        <meta
          property="og:url"
          content={`https://yourwebsite.com/products/${category}`}
        />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 select-none">
        {/* Hero Section */}
        <div className="relative w-full mb-8">
          <div className="aspect-[21/9] w-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={product_listing}
              alt={`Overview of ${categoryData.name} Brass Products`}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4">
                {categoryData.name}
              </h1>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {categoryData.products.map((product) => (
            <div
              key={product.name}
              className="group cursor-pointer bg-white hover:shadow-xl transition-all duration-200 border border-gray-100"
              onClick={() =>
                openLightbox(
                  product.image,
                  `Image of ${product.name} from ${categoryData.name}`
                )
              }
            >
              <div className="aspect-square w-full overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={`Image of ${product.name} from ${categoryData.name}`}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="p-4">
                <p className="text-base sm:text-lg font-semibold text-gray-800 text-center">
                  {product.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        setIsOpen={setLightboxOpen}
        image={selectedImage}
        altText={selectedAlt}
      />
    </Layout>
  );
};

export default Category;
