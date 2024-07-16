import React, {useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import '../css/gms.css'
import '../css/common.css'


function ReviewComponent() {
  const [slider, setSlider] = useState(0);

  useEffect(() => {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach(slide => {
          const clone = slide.cloneNode(true);
          // swiperWrapper.appendChild(clone);
        });
      }, []);
 
    return(
        
        <section className="review_gms">
            <span className="review_background"></span>
  
                <div className="text-center dja_gms">
                <h2 className="font_con_title_e contents_spacing_gms">Review</h2>
                <p className="font_leadcopy contents_spacing_gms">구매자 분들의 진심을 담은 실제 후기 입니다.</p>
                </div>
                <div className="container">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    //   autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    //   }}
                    centeredSlides={true}
                    modules={[Autoplay]}
                    loop={true}     
                    className='Swiper'
                 >
      <SwiperSlide className='usernaver'>
      <div class="reviewbox bg-white">
                      <div class="usernaver_topmenu review_text">
                        <p class="bg_light col-4">상세정보</p>
                        <p class="bg_dark col-4">리뷰</p>
                        <p class="bg_light col-4">Q&A</p>
                      </div>

                      <div class="usernaver_rating review_text">
                        <div class="d-flex">
                          <p class="user_score col-6">사용자 총 평점</p>
                          <p class="rating col-6">평점 비율</p>
                        </div>
                        <div class="d-flex">
                          <p class="col-6 user_score_count_size">4.9</p>
                        </div>
                        <div class="d-flex">
                          <p class="col-6 user_score_star">★★★★★</p>
                          <ul class="d-flex user_score_count_margin">
                            <li class="d-flex flex-column-reverse">
                              <span class="letter">5점</span>
                              <span class="user_score_count_bar">
                                <span class="user_score_highcount_colour"></span>
                              </span>
                            </li>
                            <li class="d-flex flex-column-reverse">
                              <span class="letter">4점</span>
                              <span class="user_score_count_bar">
                                <span class="user_score_lowcount_colour"></span>
                              </span>
                            </li>
                            <li class="d-flex flex-column-reverse">
                              <span class="letter">3점</span>
                              <span class="user_score_count_bar">
                                <span class="user_score_lowcount_colour"></span>
                              </span>
                            </li>
                            <li class="d-flex flex-column-reverse">
                              <span class="letter">2점</span>
                              <span class="user_score_count_bar">
                                <span class="user_score_lowcount_colour"></span>
                              </span>
                            </li>
                            <li class="d-flex flex-column-reverse">
                              <span class="letter">1점</span>
                              <span class="user_score_count_bar">
                                <span class="user_score_lowcount_colour"></span>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <hr class="usernaver_border_divider"></hr>
                          <hr class="usernaver_border_divider_horizontal"></hr>
                        </div>
                      </div>

                      <div class="usernaver_review_article">
                        <p class="usernaver_reivew_title">스토어 PICK</p>
                        <p class="usernaver_review_subtitle">판매자가 직접 선정한 베스트 리뷰입니다.</p>
                        <div class="usernaver_review_small_main">
                          <div class="naver_review_userphoto">
                            <span class="position-relative">
                              <img class="usernaver_profile" src="/image/naver_riview_profilephoto.png" alt="" />
                              <p class="reviewbox_user_score">★★★★★<span class="reviewbox_user_score_number">5</span></p>
                              <p class="reviewbox_user_id">MIN***</p>
                              <p class="reviewbox_user_date">24.07.05</p>
                            </span>
                            <p class="reviewbox_user_review">
                              배송 하루만에 왔어요<br />
                              완전 빠르고, 이번에<br />
                              외국 친구들한테 퓨전한국음식<br />
                              만들어서 맛보여주고 싶었는데<br />
                              레시피 박스 그대로 오니까<br />
                              너무 편리한거 같아요 !</p>
                              <img class="reviewbox_user_reviewphoto" src="/image/review_photo.jpg" alt="" />
                          </div>
                        </div>
                        <div class="usernaver_review_small_left"></div>
                        <div class="usernaver_review_small_right"></div>
                    </div>

                    <div>
                      <div class="favorit_iconbox">
                        <i class="bi bi-heart favorit_icon"></i>
                      </div>
                      <div class="comment_iconbox">
                        <i class="bi bi-chat-dots comment_icon"></i>
                      </div>
                      <div class="present_box d-flex justify-content-evenly align-items-center">
                        <i class="bi bi-gift"></i>
                        <p class="usernaver_box_text">선물하기</p>
                      </div>
                      <div class="buy_box d-flex justify-content-evenly align-items-center">
                        <img class="naver_circle_icon" src="/image/naver_icon-circle.png" alt="" />
                        <p class="usernaver_box_text">구매하기</p>
                      </div>
                    </div>
                    </div>   
      </SwiperSlide>
      <SwiperSlide className='twiter'>
      <div class="reviewbox review_text bg-white">
                    
                    <div>
                      <span class="twiter_profile">민서</span>
                      <img class="twiter_logo" src="/image/free-icon-twitter-5968958.png"alt="" />
                      <i class="bi bi-gear twiter_setting"></i>
                    </div>

                    <div class="twiter_top_text">
                      <p class="col-6">For you</p>
                      <p class="col-6">following</p>
                    </div>
                    <div>
                      <hr class="twiter_border_divider_horizontal"></hr>
                    </div>
                    <div>
                      <img class="twiter_review_profile" src="/image/twiter_reivew_profilephoto.png"alt="" />
                      <span class="position-relative d-flex twiter_reviewbox_user_info">
                        <p class="twiter_reviewbox_user_id">민서1112</p>
                        <p class="twiter_reviewbox_user_nikname">@minseo</p>
                      </span>
                      <span class="twiter_reviewbox_reivew_text">
                        <p>어글리어스와 함께 요리하는 지수 보고 가세요 ~</p>
                      </span>             
                    </div>

                    <div>
                          <img class="twiter_rieveiwbox_reviewphoto" src="/image/twiter_reviewbox_photo.jpg"alt="" />
                    </div>

                    <div>
                      <hr class="twiter_border_divider_horizontal"></hr>
                    </div>

                    <div class="twiter_bottomicon">
                      <i class="bi bi-house-door-fill"></i>
                      <i class="bi bi-search"></i>
                      <img class="twiter_followingicon" src="/image/following.png"alt="" />
                      <i class="bi bi-bell-fill"></i>
                      <i class="bi bi-envelope"></i>
                    </div>


                  </div>
      </SwiperSlide>
      <SwiperSlide className='instagram'>
      <div class="reviewbox review_text bg-white">
                    <div>
                      <img class="insta_profilephoto" src="/image/insta_riview_profilephoto.png"alt="" />
                      <span class="position-relative d-flex insta_reviewbox_user_info">
                        <p class="insta_reviewbox_user_id">jennierubyjane</p>
                        <p class="insta_reviewbox_user_country">Korea</p>
                        <i class="bi bi-three-dots-vertical"></i>
                      </span>
                    </div>

                    <div>
                      <img class="insta_reviewbox_photo" src="/image/insta_review_photo.png"alt="" />
                      <span class="insta_reiviewbox_icon">
                        <i class="bi bi-heart-fill"></i>
                        <i class="bi bi-chat"></i>
                        <img class="insta_icon_send" src="/image/send.svg"alt="" />            
                      </span>
                      <span class="insta_follwing_photo">
                        <img src="/image/insta_following_photo.png"alt="" />
                        <img class="insta_follwing_photo_s" src="/image/insta_following_photo_2.png"alt="" />
                        <img class="insta_follwing_photo_t" src="/image/insta_following_photo_3.png"alt="" />
                      </span>
                        <span class="insta_reviewbox_article">
                          <p class="insta_reviewbox_article_f">minseo님 외 <span>5,373,154 명</span>이 좋아합니다</p>
                          <p class="insta_reviewbox_article_s"><span>jennierubyjane</span> 오늘저녁은 어글리어스로 멤버들과 함께</p>              
                          <p class="insta_reviewbox_article_t">#블랙핑크 #어글리어스</p>
                      </span>
                    </div>
                    
                  </div>
      </SwiperSlide>
      <SwiperSlide className='youtube'>
      <div class="reviewbox review_text bg-white">
                    <div class="youtube_icon">
                      <img class="youtube_logo" src="/image/youtube.logo.png"alt="" />
                      <i class="bi bi-cast"></i>
                      <i class="bi bi-bell"></i>
                      <i class="bi bi-search"></i>
                    </div>
                    <div>
                      <img class="youtube_reviewbox_photo" src="/image/youtube_photo.png"alt="" />
                      <p class="youtube_reviewbox_title">어글리어스로 요알못 탈출 ! </p>
                      <p class="youtube_reviewbox_article_f">조회수 33만회
                      <span class="youtube_reviewbox_article_s">3일전</span>
                      <span class="youtube_reviewbox_article_t">더보기</span></p>
                      <img class="youtube_reviewbox_profile" src="/image/youtube_profilephoto.png"alt="" />
                      <p class="youtube_reviewbox_article_four">민서의 브이로그 <span class="youtube_reviewbox_article_five">94만</span> </p>
                    </div>
                    <div class="d-flex justify-content-center align-items-center youtube_bottom_icon">
                      <i class="bi bi-house-door-fill"></i>
                      <img class="youtube_bottom_icon_s" src="/image/Youtube Shorts Logo PNG Images (Transparent HD Photo Clipart).jpg"alt="" />
                      <i class="bi bi-plus-circle"></i>
                      <i class="bi bi-collection-play"></i>
                      <span class="youtube_profile">민서</span>
                    </div>
                  </div>
      </SwiperSlide>
     <SwiperSlide className='naverblog'>
     <div class="reviewbox review_text bg-white">
                    <div class="d-flex justify-content-around align-items-center naverblog_top_icon">
                      <img class="naverblog_logo" src="/image/naverblog_gms.png"alt="" />
                      <i class="bi bi-card-list"></i>
                      <p class="naverblog_top_icon_t">사랑 곱배기 밍서네♥</p>
                      <i class="bi bi-search"></i>
                      <i class="bi bi-list"></i>
                    </div>
                    <div>
                      <hr class="naverblog_border_divider_horizontal"></hr>
                    </div>
                    <div class="d-flex flex-column align-items-center naverblog_review_text">
                      <p class="naverblog_review_text_f">식품</p>
                      <p class="naverblog_review_text_s">
                        어글리어스 구독 후기<br />
                        스탠다드 어글리어스 마켓
                      </p>
                    </div>
                    <div>
                      <img class="naverblog_review_profile" src="/image/naverblog_riview_profilephoto.png"alt="" />
                      <p class="naverblog_review_profile_text_f">민서엄마</p>
                      <p class="naverblog_review_profile_text_s">2024. 11. 12 11:00</p>
                    </div>
                    <div>
                      <hr class="naverblog_border_divider_horizontal_s"></hr>
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                      <p class="naverblog_addfriends"><i class="bi bi-plus"></i>이웃추가</p>
                    </div>
                    <div>
                      <img class="naverblog_review_article_photo" src="/image/naverblog_review_photo.jpg"alt="" />
                      <p class="naverblog_review_article">지난번에 내돈내산으로 시작한<br />
                        어글리어스 마켓 채소박스 정기구독을<br />
                        소개해 드린 이후에<br />
                        지금까지 배송은 7회차를 받게 되었어요<br />
                        처음에는 2주 간격으로 받다가<br />
                        신랑이랑 같이 요리하는거에 빠져서<br />
                        현재는 1주 간격으로 받고 있답니다<br />
                        그동안 왔던 스탠다드 박스 구성을 보여드려요<br />
                        늘 푸짐하게 받으니 좋은거 같아요<br /></p>
                    </div>
                    <div>
                      <hr class="naverblog_border_divider_horizontal_t"></hr>
                    </div>
                    <div class="naverblog_bottom_icon d-flex align-items-center">
                      <img class="naverblog_bottom_naverlogo" src="/image/free-icon-naver-11423248.png"alt="" />
                      <i class="bi bi-arrow-left-short"></i>
                      <i class="bi bi-arrow-right-short"></i>
                      <i class="bi bi-arrow-clockwise"></i>
                      <img class="naverblog_bottom_ano_arrow" src="/image/free-icon-arrow-right-4655041.png"alt="" />
                      <i class="bi bi-list"></i>
                    </div>

                  </div>   
     </SwiperSlide>
      <SwiperSlide className='usernaver'>
      <div class="reviewbox bg-white">
                      <div class="usernaver_topmenu review_text">
                        <p class="bg_light col-4">상세정보</p>
                        <p class="bg_dark col-4">리뷰</p>
                        <p class="bg_light col-4">Q&A</p>
                      </div>

                      <div class="usernaver_rating review_text">
                        <div class="d-flex">
                          <p class="user_score col-6">사용자 총 평점</p>
                          <p class="rating col-6">평점 비율</p>
                        </div>
                        <div class="d-flex">
                          <p class="col-6 user_score_count_size">4.9</p>
                        </div>
                        <div class="d-flex">
                          <p class="col-6 user_score_star">★★★★★</p>
                          <ul class="d-flex user_score_count_margin">
                            <li class="d-flex flex-column-reverse">
                              <span class="letter">5점</span>
                              <span class="user_score_count_bar">
                                <span class="user_score_highcount_colour"></span>
                              </span>
                            </li>
                            <li class="d-flex flex-column-reverse">
                              <span class="letter">4점</span>
                              <span class="user_score_count_bar">
                                <span class="user_score_lowcount_colour"></span>
                              </span>
                            </li>
                            <li class="d-flex flex-column-reverse">
                              <span class="letter">3점</span>
                              <span class="user_score_count_bar">
                                <span class="user_score_lowcount_colour"></span>
                              </span>
                            </li>
                            <li class="d-flex flex-column-reverse">
                              <span class="letter">2점</span>
                              <span class="user_score_count_bar">
                                <span class="user_score_lowcount_colour"></span>
                              </span>
                            </li>
                            <li class="d-flex flex-column-reverse">
                              <span class="letter">1점</span>
                              <span class="user_score_count_bar">
                                <span class="user_score_lowcount_colour"></span>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <hr class="usernaver_border_divider"></hr>
                          <hr class="usernaver_border_divider_horizontal"></hr>
                        </div>
                      </div>

                      <div class="usernaver_review_article">
                        <p class="usernaver_reivew_title">스토어 PICK</p>
                        <p class="usernaver_review_subtitle">판매자가 직접 선정한 베스트 리뷰입니다.</p>
                        <div class="usernaver_review_small_main">
                          <div class="naver_review_userphoto">
                            <span class="position-relative">
                              <img class="usernaver_profile" src="/image/naver_riview_profilephoto.png" alt="" />
                              <p class="reviewbox_user_score">★★★★★<span class="reviewbox_user_score_number">5</span></p>
                              <p class="reviewbox_user_id">MIN***</p>
                              <p class="reviewbox_user_date">24.07.05</p>
                            </span>
                            <p class="reviewbox_user_review">
                              배송 하루만에 왔어요<br />
                              완전 빠르고, 이번에<br />
                              외국 친구들한테 퓨전한국음식<br />
                              만들어서 맛보여주고 싶었는데<br />
                              레시피 박스 그대로 오니까<br />
                              너무 편리한거 같아요 !</p>
                              <img class="reviewbox_user_reviewphoto" src="/image/review_photo.jpg" alt="" />
                          </div>
                        </div>
                        <div class="usernaver_review_small_left"></div>
                        <div class="usernaver_review_small_right"></div>
                    </div>

                    <div>
                      <div class="favorit_iconbox">
                        <i class="bi bi-heart favorit_icon"></i>
                      </div>
                      <div class="comment_iconbox">
                        <i class="bi bi-chat-dots comment_icon"></i>
                      </div>
                      <div class="present_box d-flex justify-content-evenly align-items-center">
                        <i class="bi bi-gift"></i>
                        <p class="usernaver_box_text">선물하기</p>
                      </div>
                      <div class="buy_box d-flex justify-content-evenly align-items-center">
                        <img class="naver_circle_icon" src="/image/naver_icon-circle.png" alt="" />
                        <p class="usernaver_box_text">구매하기</p>
                      </div>
                    </div>
                    </div>   
      </SwiperSlide>
      <SwiperSlide className='twiter'>
      <div class="reviewbox review_text bg-white">
                    
                    <div>
                      <span class="twiter_profile">민서</span>
                      <img class="twiter_logo" src="/image/free-icon-twitter-5968958.png"alt="" />
                      <i class="bi bi-gear twiter_setting"></i>
                    </div>

                    <div class="twiter_top_text">
                      <p class="col-6">For you</p>
                      <p class="col-6">following</p>
                    </div>
                    <div>
                      <hr class="twiter_border_divider_horizontal"></hr>
                    </div>
                    <div>
                      <img class="twiter_review_profile" src="/image/twiter_reivew_profilephoto.png"alt="" />
                      <span class="position-relative d-flex twiter_reviewbox_user_info">
                        <p class="twiter_reviewbox_user_id">민서1112</p>
                        <p class="twiter_reviewbox_user_nikname">@minseo</p>
                      </span>
                      <span class="twiter_reviewbox_reivew_text">
                        <p>어글리어스와 함께 요리하는 지수 보고 가세요 ~</p>
                      </span>             
                    </div>

                    <div>
                          <img class="twiter_rieveiwbox_reviewphoto" src="/image/twiter_reviewbox_photo.jpg"alt="" />
                    </div>

                    <div>
                      <hr class="twiter_border_divider_horizontal"></hr>
                    </div>

                    <div class="twiter_bottomicon">
                      <i class="bi bi-house-door-fill"></i>
                      <i class="bi bi-search"></i>
                      <img class="twiter_followingicon" src="/image/following.png"alt="" />
                      <i class="bi bi-bell-fill"></i>
                      <i class="bi bi-envelope"></i>
                    </div>


                  </div>
      </SwiperSlide>
      <SwiperSlide className='instagram'>
      <div class="reviewbox review_text bg-white">
                    <div>
                      <img class="insta_profilephoto" src="/image/insta_riview_profilephoto.png"alt="" />
                      <span class="position-relative d-flex insta_reviewbox_user_info">
                        <p class="insta_reviewbox_user_id">jennierubyjane</p>
                        <p class="insta_reviewbox_user_country">Korea</p>
                        <i class="bi bi-three-dots-vertical"></i>
                      </span>
                    </div>

                    <div>
                      <img class="insta_reviewbox_photo" src="/image/insta_review_photo.png"alt="" />
                      <span class="insta_reiviewbox_icon">
                        <i class="bi bi-heart-fill"></i>
                        <i class="bi bi-chat"></i>
                        <img class="insta_icon_send" src="/image/send.svg"alt="" />            
                      </span>
                      <span class="insta_follwing_photo">
                        <img src="/image/insta_following_photo.png"alt="" />
                        <img class="insta_follwing_photo_s" src="/image/insta_following_photo_2.png"alt="" />
                        <img class="insta_follwing_photo_t" src="/image/insta_following_photo_3.png"alt="" />
                      </span>
                        <span class="insta_reviewbox_article">
                          <p class="insta_reviewbox_article_f">minseo님 외 <span>5,373,154 명</span>이 좋아합니다</p>
                          <p class="insta_reviewbox_article_s"><span>jennierubyjane</span> 오늘저녁은 어글리어스로 멤버들과 함께</p>              
                          <p class="insta_reviewbox_article_t">#블랙핑크 #어글리어스</p>
                      </span>
                    </div>
                    
                  </div>
      </SwiperSlide>
      <SwiperSlide className='youtube'>
      <div class="reviewbox review_text bg-white">
                    <div class="youtube_icon">
                      <img class="youtube_logo" src="/image/youtube.logo.png"alt="" />
                      <i class="bi bi-cast"></i>
                      <i class="bi bi-bell"></i>
                      <i class="bi bi-search"></i>
                    </div>
                    <div>
                      <img class="youtube_reviewbox_photo" src="/image/youtube_photo.png"alt="" />
                      <p class="youtube_reviewbox_title">어글리어스로 요알못 탈출 ! </p>
                      <p class="youtube_reviewbox_article_f">조회수 33만회
                      <span class="youtube_reviewbox_article_s">3일전</span>
                      <span class="youtube_reviewbox_article_t">더보기</span></p>
                      <img class="youtube_reviewbox_profile" src="/image/youtube_profilephoto.png"alt="" />
                      <p class="youtube_reviewbox_article_four">민서의 브이로그 <span class="youtube_reviewbox_article_five">94만</span> </p>
                    </div>
                    <div class="d-flex justify-content-center align-items-center youtube_bottom_icon">
                      <i class="bi bi-house-door-fill"></i>
                      <img class="youtube_bottom_icon_s" src="/image/Youtube Shorts Logo PNG Images (Transparent HD Photo Clipart).jpg"alt="" />
                      <i class="bi bi-plus-circle"></i>
                      <i class="bi bi-collection-play"></i>
                      <span class="youtube_profile">민서</span>
                    </div>
                  </div>
      </SwiperSlide>
     <SwiperSlide className='naverblog'>
     <div class="reviewbox review_text bg-white">
                    <div class="d-flex justify-content-around align-items-center naverblog_top_icon">
                      <img class="naverblog_logo" src="/image/naverblog_gms.png"alt="" />
                      <i class="bi bi-card-list"></i>
                      <p class="naverblog_top_icon_t">사랑 곱배기 밍서네♥</p>
                      <i class="bi bi-search"></i>
                      <i class="bi bi-list"></i>
                    </div>
                    <div>
                      <hr class="naverblog_border_divider_horizontal"></hr>
                    </div>
                    <div class="d-flex flex-column align-items-center naverblog_review_text">
                      <p class="naverblog_review_text_f">식품</p>
                      <p class="naverblog_review_text_s">
                        어글리어스 구독 후기<br />
                        스탠다드 어글리어스 마켓
                      </p>
                    </div>
                    <div>
                      <img class="naverblog_review_profile" src="/image/naverblog_riview_profilephoto.png"alt="" />
                      <p class="naverblog_review_profile_text_f">민서엄마</p>
                      <p class="naverblog_review_profile_text_s">2024. 11. 12 11:00</p>
                    </div>
                    <div>
                      <hr class="naverblog_border_divider_horizontal_s"></hr>
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                      <p class="naverblog_addfriends"><i class="bi bi-plus"></i>이웃추가</p>
                    </div>
                    <div>
                      <img class="naverblog_review_article_photo" src="/image/naverblog_review_photo.jpg"alt="" />
                      <p class="naverblog_review_article">지난번에 내돈내산으로 시작한<br />
                        어글리어스 마켓 채소박스 정기구독을<br />
                        소개해 드린 이후에<br />
                        지금까지 배송은 7회차를 받게 되었어요<br />
                        처음에는 2주 간격으로 받다가<br />
                        신랑이랑 같이 요리하는거에 빠져서<br />
                        현재는 1주 간격으로 받고 있답니다<br />
                        그동안 왔던 스탠다드 박스 구성을 보여드려요<br />
                        늘 푸짐하게 받으니 좋은거 같아요<br /></p>
                    </div>
                    <div>
                      <hr class="naverblog_border_divider_horizontal_t"></hr>
                    </div>
                    <div class="naverblog_bottom_icon d-flex align-items-center">
                      <img class="naverblog_bottom_naverlogo" src="/image/free-icon-naver-11423248.png"alt="" />
                      <i class="bi bi-arrow-left-short"></i>
                      <i class="bi bi-arrow-right-short"></i>
                      <i class="bi bi-arrow-clockwise"></i>
                      <img class="naverblog_bottom_ano_arrow" src="/image/free-icon-arrow-right-4655041.png"alt="" />
                      <i class="bi bi-list"></i>
                    </div>

                  </div>   
     </SwiperSlide>
    </Swiper>
               
                </div>
                <div className="more_button-wrapper_gms dja_gms">
                    <button className="more_button_gms font_button">더보기</button>
                </div>
        </section>  
    );
  }


  export default ReviewComponent;