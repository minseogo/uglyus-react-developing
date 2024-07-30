import React from 'react';
import React, {useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination } from 'swiper';

// Swiper 모듈을 사용하도록 설정
SwiperCore.use([Navigation, Pagination]);

const Store = () => {
  return (
    <div id="store_gms" className="overflow-hidden">
      <div className="container-fluid text-center">
        <h2 className="font_con_title_k mb-4">개성있지만 싱싱해요</h2>
        <div className="d-none d-lg-flex justify-content-center">
          <p className="font_leadcopy me-5">#친환경농법을 우선한 건강한 채소</p>
          <p className="font_leadcopy me-5">#지금 먹어야 할 제철 농산물</p>
          <p className="font_leadcopy me-5">#우리의 일상을 알록달록하게</p>
          <p className="font_leadcopy">#맛있게! 신선하게! 부담없게!</p>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <Swiper
          slidesPerView="auto"
          spaceBetween={0}
          loop={true}
          centeredSlides={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
        >
            <SwiperSlide className="paprika d-flex justify-content-between align-items-center pt-5 pt-md-0">
                <div className="col-6 img_lg_p mt-5">
                <div className="imglayout pt-5">
                    <img className="paprika_png png scaled-image img-fluid" src="./img/store/paprika.png" alt="" />
                </div>
                </div>
                <div className="info text-nowrap col-6 ms-5 mb-5">
                <div className="d-flex flex-column align-items-start media">
                    <h2 className="font_title_kk mb-2 d-flex flex-column">개성 넘치는 모양으로<span>자라 더 매력있어요</span></h2>
                    <ul>
                    <li className="font_subtitle_kk mb-2">파프리카 청춘이다</li>
                    <li className="font_textt mb-2"><span>#ㄴr는</span><span>#ㄱr끔</span><span>#눈물을 흘린ㄷr</span></li>
                    </ul>
                    <button className="store_btn font_button">채소구하기</button>
                </div>
                </div>
            </SwiperSlide>

            <SwiperSlid>
                
            <div  class="swiper-slide lemon d-flex justify-content-between align-items-center pt-5 pt-md-0">
                            <div class="col-6 img_lg_p mt-5">
                                <div class="imglayout pt-5 ">
                                    <img class="lemon_png png scaled-image img-fluid " src="./img/store/lemon.png" alt="" />
                                </div>
                            </div>
                            <div class="info text-nowrap col-6">
                                <div class="d-flex flex-column align-items-start media ">
                                    <h2 class="font_title_kk d-flex flex-column mb-2">자연 그대로의<span>거친 껍질을 자랑해요</span></h2>
                                    <ul class="">
                                        <li class="font_subtitle_kk mb-2">내 거친 생각과 레몬</li>
                                        <li class="font_textt mb-2"><span>#사랑해요</span><span>#임재범</span><span>#지구뿌셔</span></li>
                                    </ul>
                                    <button class="store_btn font_button ">채소구하기</button>  
                                </div>   
                            </div>
                        </div>
            </SwiperSlid>


            <SwiperSlid>
            <div class="swiper-slide cucumber d-flex justify-content-between align-items-center pt-5 pt-md-0">
                            <div class="col-6 img_lg_p mt-5">
                                <div class="imglayout pt-5">
                                    <img class="cucumber_png png scaled-image img-fluid " src="./img/store/cucumber.png" alt="" />
                                </div>
                            </div>
                            
                            <div class="info text-nowrap col-6">
                                <div class="d-flex flex-column align-items-start media ">
                                    <h2 class="font_title_kk d-flex flex-column mb-2">쭉 뻗은 날씬 오이와<span>같은  밭에서 자랐어요</span></h2>
                                    <ul class="">
                                        <li class="font_subtitle_kk mb-2">52오이 </li>
                                        <li class="font_textt mb-2"><span>#거기</span><span>#내 자리</span><span>#비켜ㅋ</span></li>
                                    </ul>
                                    <button class="store_btn font_button ">채소구하기</button> 
                                </div>    
                            </div>   
                        </div>
            </SwiperSlid>


            <SwiperSlid>
            
            <div class="swiper-slide carrot d-flex justify-content-between align-items-center pt-5 pt-md-0">
                            <div class="col-6 img_lg_p mt-5">
                                <div class="imglayout pt-5"> 
                                    <img class="carrot_png png scaled-image img-fluid " src="./img/store/carrot.png" alt="" />
                                </div>
                            </div>
                            
                            <div class="info text-nowrap col-6 ms-5 mb-1">
                                <div class="d-flex flex-column align-items-start media ">
                                    <h2 class="font_title_kk d-flex flex-column mb-2">땅 속에서 여러갈래로<span>뻗어 자랐어요!</span></h2>
                                    <ul class="">
                                        <li class="font_subtitle_kk mb-2">당근이’세’요?</li>
                                        <li class="font_textt mb-2"><span>#연락</span><span>#기다려요</span><span>#당근X켓</span><span>#네고가능?</span></li>
                                    </ul> 
                                    <button class="store_btn font_button ">채소구하기</button>  
                                </div>
                            </div>
                        </div>
            </SwiperSlid>


            <SwiperSlid>
            <div class="swiper-slide mushroom d-flex justify-content-between align-items-center pt-5 pt-md-0">
                            <div class="col-6 img_lg_p mt-5">
                                <div class="imglayout pt-5">                         
                                    <img class="mushroom_png png scaled-image img-fluid " src="./img/store/Mushroom.png" alt="" /> 
                                </div>
                            </div>
                            
                            <div class="info text-nowrap col-6 mt-5 ms-5">
                                <div class="d-flex flex-column align-items-start media ">
                                    <h2 class="font_title_kk d-flex flex-column mb-2">독특한 모자를 써서<span> 더욱 귀여워요!</span></h2>
                                    <ul class="">
                                        <li class="font_subtitle_kk mb-2">양송이 버섯커 버섯커</li>
                                        <li class="font_textt mb-2"><span class="me-2">#흔들리는 양송이 속에서</span><span class="me-2">#네 버섯향이 느껴진 거야</span></li>
                                    </ul>
                                    <button class="store_btn font_button ">채소구하기</button>
                                </div>
                            </div>
                        </div>
            </SwiperSlid>


            <SwiperSlid>
            <div class="swiper-slide bok_choy d-flex justify-content-between align-items-center pt-5 pt-md-0">
                            <div class="col-6 img_lg_p mt-5">
                                <div class="imglayout pt-5">
                                    <img class="bok_choy_png png scaled-image img-fluid " src="./img/store/bok_choy.png" alt="" />
                                </div>
                            </div>
                            
                            <div class="info text-nowrap col-6">
                                <div class="d-flex flex-column align-items-start media bok_choy_media ">
                                    <h2 class="font_title_kk d-flex flex-column mb-2">조금 크게 자랐을뿐<span>오히려 튼튼해요</span></h2>
                                    <ul class="">
                                        <li class="font_subtitle_kk mb-2">경찰청 철창살 청경채</li>
                                        <li class="font_textt mb-2"><span>#야채경찰</span><span>#밥은 먹고 다니냐?</span><span>#잡았다 요X</span></li>
                                    </ul>
                                    <button class="store_btn font_button ">채소구하기</button> 
                                </div>
                            </div>
                        </div> 
            </SwiperSlid>
        </Swiper>
      </div>
      <div className="pagination_custom d-flex flex-column align-items-center justify-content-end vh-100">
        <div className="swiper-pagination mt-auto"></div>
      </div>
    </div>
  );
};

export default Store;