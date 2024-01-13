import {Carousel ,HomePageCard, CarouselCategory, CarouselProduct,} from './';

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background min-w-fit max-w-480">
      <div className='min-w-[1000px] max-w-[1500px] m-auto'>
            <Carousel />
            <div className='grid grid-cols-3 xl:grid-cols-4 -mt-80'>
              <HomePageCard title={"We have a surprise for you"}
                img={"../images/home_grid_1.jpg"}
                link={"See terms and Conditions"} />
              <HomePageCard title={"Watch the rings of power"}
                img={"../images/home_grid_2.jpg"}
                link={"Start Streaming now"} />
              <HomePageCard title={"Unlimited streaming"}
                img={"../images/home_grid_3.jpg"}
                link={"Find out more"} />
              <HomePageCard title={"More title to explore"}
                img={"../images/home_grid_4.jpg"}
                link={"Browse kindle unlimited"} />
              <HomePageCard title={"Shop pet suplies"}
                img={"../images/home_grid_5.jpg"}
                link={"See more"} />

              <HomePageCard title={"Spring Sale"}
                img={"../images/home_grid_6.jpg"}
                link={"Set the deals"} />

              <HomePageCard title={"Realme Buds Q2 Neo"}
                img={"../images/home_grid_7.jpg"}
                link={"See more"} />

              <HomePageCard title={"Family Plan: 3 Months Free"}
                img={"../images/home_grid_8.jpg"}
                link={"Learn More"} />

              <div className='m-3 pt-8'>
                  <img className="xl:hidden" src={"../images/banner_image_2.jpg"}/>
              </div>
            </div>
        <CarouselProduct/>
        <CarouselCategory />
        <div className='h-[200px]'>
          <img className='h-[100%] m-auto' src={'../images/banner_image.jpg'}/>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
