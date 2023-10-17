import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';
import './card2.css';

function Card2({ card1, card2, card3, card4 }) {
	return (
		<Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
			<SwiperSlide>
				<img src={card1} alt="Card 1" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={card2} alt="Card 2" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={card3} alt="Card 3" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={card4} alt="Card 4" />
			</SwiperSlide>
		</Swiper>
	);
}

export default Card2;
