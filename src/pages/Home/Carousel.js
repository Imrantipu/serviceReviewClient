import CarouselItems from "./CarouselItems";


const Carousel = () => {
  const caroDatas = [
    {
      img: "https://media.istockphoto.com/id/1189510256/photo/u-s-citizenship-and-immigration-services-office-located-in-downtown-san-francisco.jpg?s=612x612&w=0&k=20&c=MuSKGkSiGSLkP7bQxLt6dUZauSIJiIVB5FJICxLMiR4=",
      prev: 4,
      id: 1,
      next: 2,
    },
    {
      img: "https://thumbs.dreamstime.com/b/immigration-5361678.jpg",
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      img: "https://st4.depositphotos.com/5586578/40098/i/600/depositphotos_400983154-stock-photo-passport-control-immigration-service-hand.jpg",
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      img: "https://c8.alamy.com/comp/G9ND2W/immigration-service-launches-new-uniform-G9ND2W.jpg",
      prev: 3,
      id: 4,
      next: 1,
    },
  ];
  return (
    <div className="carousel w-full">
      {caroDatas.map((caroData) => (
        <CarouselItems key={caroData.id} caroData={caroData}></CarouselItems>
      ))}
    </div>
  );
};

export default Carousel;
