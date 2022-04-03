import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from 'swiper';
import './sliderStyles.sass';

import styles from './index.module.sass';
import {LayoutContainer} from "../../component/LayoutCointainer";

import ecomarket from "../../assets/img/ecomarket.svg";
import map from "../../assets/img/map.svg";
import {Icon} from "../../component/ui/Icon";

import first_slide from "../../assets/img/first_slide.svg";
import second_slide from "../../assets/img/second_slide.svg";
import third_slide from "../../assets/img/third_slide.svg";

import classNames from "classnames/bind";
import {Slide} from "../../component/ui/Slide";
import {observer} from "mobx-react";
import {Card} from "../../component/ui/Card";
import {useStores} from "../../utils/use-stores-hook"; classNames();

let colorsSlide: {color: string}[] = [
    {"color": "green"},
    {"color": "yellow"},
    {"color": "blue"}
]

export const Home = observer(() => {
    return (
        <LayoutContainer>
            <div className={ styles.wrapper }>
                <div className={ styles.slider }>
                    <Swiper
                        className={ styles.slider__container }
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop = { true }
                        navigation = { {
                            nextEl: '.swiper-button-next-u',
                            prevEl: '.swiper-button-prev-u',
                        }}>
                        <SwiperSlide>
                            <Slide
                                title={"Сделаем мир чище"}
                                text={"Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов"}
                                btn_text={"Условия сервиса"}
                                color = {colorsSlide[0].color}
                                img={ first_slide }/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide
                                title={"А вы знали..."}
                                text={"что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет,  а полиэтиленовых пакетов — от 100 до 200 лет? "}
                                btn_text={"Узнать больше"}
                                color = {colorsSlide[1].color}
                                img={ second_slide }/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide
                                title={"Что с масками?"}
                                text={"Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку."}
                                btn_text={"Пункты сбора масок"}
                                color = {colorsSlide[2].color}
                                img={ third_slide }/>
                        </SwiperSlide>
                    </Swiper>
                    <div className={ styles.slider__navigation }>
                        <div className="swiper-button-prev-u">
                            <Icon name='prev' size='20'/>
                        </div>
                        <div className="swiper-button-next-u">
                            <Icon name='next' size='20'/>
                        </div>
                    </div>
                </div>

                <div className={ styles.additions }>
                    <Card
                        className={ styles.additions__item }
                        img = { map }
                        title = { "Пункты сбора" }
                        text = { "Посмотри, где в твоем городе можно сдать вторсырье на переработку" }
                        link= { '/collection_points' }
                    />
                    <Card
                        className={ styles.additions__item }
                        img = { ecomarket }
                        title = { "ЭкоМаркет" }
                        text = { "Используй заработанные экокоины для покупки товаров из переработанных материалов" }
                        link= { '/ecomarket' }
                    />
                </div>
            </div>
        </LayoutContainer>
    )
})