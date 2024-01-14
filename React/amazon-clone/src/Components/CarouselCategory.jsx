import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate,createSearchParams } from "react-router-dom";
import { Navigation} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const CarouselCategory = () => {
  const navigate = () => { };

  const searchcategory = (category) => {
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: ``,
      })}`,
    });
  }

  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Shop by Category</div>
      <Swiper
        slidesPerView  = {5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}>

            <SwiperSlide onClick={()=> searchcategory("Deals")} className="cursor-pointer">
              <img src={"../images/category_0.jpg"}/>
            </SwiperSlide>
            <SwiperSlide onClick={()=> searchcategory("Amazon")} className="cursor-pointer">
              <img src={"../images/category_1.jpg"}/>
            </SwiperSlide>
            <SwiperSlide onClick={()=> searchcategory("Fashion")} className="cursor-pointer">
              <img src={"../images/category_2.jpg"}/>
            </SwiperSlide>
            <SwiperSlide onClick={()=> searchcategory("Computers")} className="cursor-pointer">
              <img src={"../images/category_3.jpg"}/>
            </SwiperSlide>
            <SwiperSlide onClick={()=> searchcategory("Home")} className="cursor-pointer">
              <img src={"../images/category_4.jpg"}/>
            </SwiperSlide>
            <SwiperSlide onClick={()=> searchcategory("Mobiles")} className="cursor-pointer">
              <img src={"../images/category_5.jpg"}/>
            </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CarouselCategory
