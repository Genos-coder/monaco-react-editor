import SliderCSS from "./slider.module.css";

function SliderContainer() {
  const images = [
    "https://cdn.pathedits.com/Images/posts/4-important-tips-optimizing-amazon-product-images/amazon-product-image-guidelines-2024.webp",
    "https://www.sellerapp.com/blog/wp-content/uploads/2023/02/mastering-amazon-banner-ads.jpg",
    "https://sellerplex.com/wp-content/uploads/Banner-1-3-1024x538.jpg",
  ];

  return (
    <div className={SliderCSS.sliderSize}>
      <div className={SliderCSS.sliderTrack}>
        {images.map((image, index) => (
          <div key={index} className={SliderCSS.imgContainer}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        {/* Duplicate the images to create a seamless loop */}
        {images.map((image, index) => (
          <div key={`duplicate-${index}`} className={SliderCSS.imgContainer}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderContainer;
