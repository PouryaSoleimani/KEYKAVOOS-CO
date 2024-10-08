"use client"
//^ WEB DESIGN PAGE ========================================================================================================================================================== 
import Footer from '@/components/home-components/Footer/Footer'
import Nav from '@/components/home-components/nav'
import React, { useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css';

//^ COMPONENT
const WebDesignPage = () => {
    useEffect(() => { AOS.init({ offset: 50 }) }, [])
    return (
        <div id='WEB__DESIGN__PAGE__CONTAINER' className='web-container w-full overflow-x-hidden'>
            <Nav />
            <div id="WEB__DESIGN__CONTENT_CONTAINER">
                {/* HEADER */}
                <div className='py-4 animate__animated animate__backInDown animate__slow'>
                    <h1 className='BLOG_HEADER_TEXT text-center font-black bg-gradient-to-tr from-blue-300 via-[#4866CF] to-blue-900 bg-clip-text text-3xl lg:text-5xl py-4 text-transparent BLOG_HEADER_TEXT animate__animated animate__heartBeat animate__infinite'>طراحی وبسایت</h1>
                    <h2 className='text-center font-extralight text-md text-zinc-700 bg-zinc-300 py-2 px-4 rounded-xl w-fit mx-auto'>با استفاده از وردپرس و المنتور</h2>
                </div>
                <video src="/VIDEOS/WEB__DESIGN__ANIMATON__5.mp4" loop autoPlay playsInline height={100} className='h-80 w-[90%] mx-auto my-10'></video>
                <div className="divider px-[2%]"></div>
                {/* CAROUSEL */}
                <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col items-start justify-center gap-y-10 mb-10 w-[90%] mx-auto '>
                    <h2 className='text-center font-extralight text-2xl text-zinc-100 bg-gradient-to-tr from-blue-300 via-[#4866CF] to-blue-900  py-2 px-4 rounded-xl w-fit mx-auto'>برخی از نمونه کارها</h2>
                    <Splide aria-label="My Favorite Images" options={{ rewind: true, type: 'loop', autoplay: true, height: "30rem" }}>
                        <SplideSlide>
                            <img className='w-full h-full rounded-2xl' src="/SERVICES/WEB__APPLICATION/1.png" alt="Image 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img className='w-full h-full rounded-2xl' src="/SERVICES/WEB__APPLICATION/2.png" alt="Image 2" />
                        </SplideSlide>
                        <SplideSlide>
                            <img className='w-full h-full rounded-2xl' src="/SERVICES/WEB__APPLICATION/3.png" alt="Image 2" />
                        </SplideSlide>
                        <SplideSlide>
                            <img className='w-full h-full rounded-2xl' src="/SERVICES/WEB__APPLICATION/4.png" alt="Image 2" />
                        </SplideSlide>
                        <SplideSlide>
                            <img className='w-full h-full rounded-2xl' src="/SERVICES/WEB__APPLICATION/5.png" alt="Image 2" />
                        </SplideSlide>
                        <SplideSlide>
                            <img className='w-full h-full rounded-2xl' src="/SERVICES/WEB__APPLICATION/6.png" alt="Image 2" />
                        </SplideSlide>
                        <SplideSlide>
                            <img className='w-screen h-full rounded-2xl' src="/SERVICES/WEB__APPLICATION/7.jpg" alt="Image 2" />
                        </SplideSlide>
                        <SplideSlide>
                            <img className='w-screen h-full rounded-2xl' src="/SERVICES/WEB__APPLICATION/8.png" alt="Image 2" />
                        </SplideSlide>
                        <div className="splide__progress">
                            <div className="splide__progress__bar" />
                        </div>
                    </Splide>
                </div>
                {/* TABLE */}
                <div data-aos="fade-up" data-aos-duration="1000" className='py-4'>
                    <h1 className='BLOG_HEADER_TEXT text-center font-black bg-gradient-to-tr from-blue-300 via-[#4866CF] to-blue-900 bg-clip-text text-3xl lg:text-5xl py-4 text-transparent BLOG_HEADER_TEXT animate__animated animate__heartBeat animate__infinite'>جدول انواع وبسایت ها</h1>
                    <h2 className='text-center font-extralight text-xl text-zinc-700 bg-zinc-300 py-2 px-16 mt-4 rounded-xl w-fit mx-auto'>به همراه ویژگی ها و قیمت</h2>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="overflow-x-auto w-[90%] mx-auto rounded-lg my-10 shadow-lg shadow-zinc-400" dir='rtl'>
                    <table className="table table-sm whitespace-nowrap" dir='rtl'>
                        <thead dir='rtl w-1/8'>
                            <tr>
                                <th className='w-16'>ردیف</th>
                                <th>نوع وبسایت</th>
                                <th>نوع پلن</th>
                                <th>نقاط قوت</th>
                                <th>نقاط ضعف</th>
                                <th>تکنولوژی ها</th>
                                <th>قیمت</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Littel, Schaden and Vandervort</td>
                                <td>Canada</td>
                                <td>12/16/2020</td>
                                <td>ريال</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Zemlak, Daniel and Leannon</td>
                                <td>United States</td>
                                <td>12/5/2020</td>
                                <td>ريال</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Carroll Group</td>
                                <td>China</td>
                                <td>8/15/2020</td>
                                <td>ريال</td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>Marjy Ferencz</td>
                                <td>Office Assistant I</td>
                                <td>Rowe-Schoen</td>
                                <td>Russia</td>
                                <td>3/25/2021</td>
                                <td>ريال</td>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>Yancy Tear</td>
                                <td>Community Outreach Specialist</td>
                                <td>Wyman-Ledner</td>
                                <td>Brazil</td>
                                <td>5/22/2020</td>
                                <td>ريال</td>
                            </tr>
                            <tr>
                                <th>6</th>
                                <td>Irma Vasilik</td>
                                <td>Editor</td>
                                <td>Wiza, Bins and Emard</td>
                                <td>Venezuela</td>
                                <td>12/8/2020</td>
                                <td>ريال</td>
                            </tr>
                            <tr>
                                <th>7</th>
                                <td>Meghann Durtnal</td>
                                <td>Staff Accountant IV</td>
                                <td>Schuster-Schimmel</td>
                                <td>Philippines</td>
                                <td>2/17/2021</td>
                                <td>ريال</td>
                            </tr>
                            <tr>
                                <th>8</th>
                                <td>Sammy Seston</td>
                                <td>Accountant I</td>
                                <td>O'Hara, Welch and Keebler</td>
                                <td>Indonesia</td>
                                <td>5/23/2020</td>
                                <td>ريال</td>
                            </tr>
                            <tr>
                                <th>9</th>
                                <td>Lesya Tinham</td>
                                <td>Safety Technician IV</td>
                                <td>Turner-Kuhlman</td>
                                <td>Philippines</td>
                                <td>2/21/2021</td>
                                <td>ريال</td>
                            </tr>
                            <tr>
                                <th>10</th>
                                <td>Zaneta Tewkesbury</td>
                                <td>VP Marketing</td>
                                <td>Sauer LLC</td>
                                <td>Chad</td>
                                <td>6/23/2020</td>
                                <td>ريال</td>
                            </tr>
                            <tr>
                                <th>11</th>
                                <td>Andy Tipple</td>
                                <td>Librarian</td>
                                <td>Hilpert Group</td>
                                <td>Poland</td>
                                <td>7/9/2020</td>
                                <td>ريال</td>
                            </tr>
                            <tr>
                                <th>12</th>
                                <td>Sophi Biles</td>
                                <td>Recruiting Manager</td>
                                <td>Gutmann Inc</td>
                                <td>Indonesia</td>
                                <td>2/12/2021</td>
                                <td>ريال</td>
                            </tr>
                            <tr>
                                <th>13</th>
                                <td>Florida Garces</td>
                                <td>Web Developer IV</td>
                                <td>Gaylord, Pacocha and Baumbach</td>
                                <td>Poland</td>
                                <td>5/31/2020</td>
                                <td>ريال</td>
                            </tr>
                            <tr>
                                <th>14</th>
                                <td>Maribeth Popping</td>
                                <td>Analyst Programmer</td>
                                <td>Deckow-Pouros</td>
                                <td>Portugal</td>
                                <td>4/27/2021</td>
                                <td>ريال</td>
                            </tr>
                            <tr>
                                <th>15</th>
                                <td>Moritz Dryburgh</td>
                                <td>Dental Hygienist</td>
                                <td>Schiller, Cole and Hackett</td>
                                <td>Sri Lanka</td>
                                <td>8/8/2020</td>
                                <td>ريال</td>
                            </tr>
                            <tr>
                                <th>16</th>
                                <td>Reid Semiras</td>
                                <td>Teacher</td>
                                <td>Sporer, Sipes and Rogahn</td>
                                <td>Poland</td>
                                <td>7/30/2020</td>
                                <td>ريال</td>
                            </tr>
                            <tr>
                                <th>17</th>
                                <td>Alec Lethby</td>
                                <td>Teacher</td>
                                <td>Reichel, Glover and Hamill</td>
                                <td>China</td>
                                <td>2/28/2021</td>
                                <td>ريال</td>
                            </tr>
                            <tr>
                                <th>18</th>
                                <td>Aland Wilber</td>
                                <td>Quality Control Specialist</td>
                                <td>Kshlerin, Rogahn and Swaniawski</td>
                                <td>Czech Republic</td>
                                <td>9/29/2020</td>
                                <td>ريال</td>
                            </tr>
                            <tr>
                                <th>19</th>
                                <td>Teddie Duerden</td>
                                <td>Staff Accountant III</td>
                                <td>Pouros, Ullrich and Windler</td>
                                <td>France</td>
                                <td>10/27/2020</td>
                                <td>ريال</td>
                            </tr>
                            <tr>
                                <th>20</th>
                                <td>Lorelei Blackstone</td>
                                <td>Data Coordiator</td>
                                <td>Witting, Kutch and Greenfelder</td>
                                <td>Kazakhstan</td>
                                <td>6/3/2020</td>
                                <td>ريال</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>ردیف</th>
                                <th>نوع وبسایت</th>
                                <th>نوع پلن</th>
                                <th>نقاط قوت</th>
                                <th>نفاط ضعف</th>
                                <th>تکنولوژی ها</th>
                                <th>قیمت</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                {/* STEPS */}
                <div data-aos="fade-up" data-aos-duration="1000" className='py-4'>
                    <h1 className='BLOG_HEADER_TEXT text-center font-black bg-gradient-to-tr from-blue-300 via-[#4866CF] to-blue-900 bg-clip-text text-3xl lg:text-5xl py-4 text-transparent BLOG_HEADER_TEXT animate__animated animate__heartBeat animate__infinite'>روند طراحی و ساخت یک وبسایت وردپرسی</h1>
                    <h2 className='text-center font-extralight text-xl text-zinc-700 bg-zinc-300 py-2 px-10 rounded-xl w-fit mx-auto'>از طراحی تا تحویل نهایی</h2>
                </div>
                <ul className="steps mx-auto my-10 w-full" data-aos="fade-up" data-aos-duration="1000">
                    <li className="step step-primary">تکمیل سفارش</li>
                    <li className="step step-primary">واریز پیش پرداخت</li>
                    <li className="step step-primary">بررسی نیاز های پروژه</li>
                    <li className="step step-primary">طراحی رابط کاربری</li>
                    <li className="step step-primary">پیاده سازی طرح</li>
                    <li className="step step-primary tracking-tighter">ایجاد درگاه ها و لینک ها</li>
                    <li className="step step-primary">کنترل کیفی نهایی</li>
                    <li className="step step-primary">تحویل وبسایت</li>
                </ul>
                {/* TEXT */}
                <div data-aos="fade-up" data-aos-duration="1000" className='bg-transparent backdrop-blur-sm w-[90%] h-auto mx-auto p-6 pb-16 gap-y-4 rounded-2xl border border-zinc-400 shadow-xl shadow-zinc-600 flex flex-col items-center justify-start mb-10'>
                    <h2 className='text-center text-xl lg:text-3xl font-bold text-[#4866CF] px-6'>انواع وب سایت ها بر اساس سبک</h2>
                    <h3 className='text-center text-md text-zinc-700 font-bold px-2 tracking-tighter'>وب‌سایت‌ها به دسته‌های مختلفی تقسیم می‌شوند که هر کدام هدف و محتوای خاصی دارند. در ادامه به چند نوع از وب‌سایت‌ها اشاره می‌کنم </h3>
                    <span className='text-md text-start p-2 flex flex-col items-start justify-start w-[90%] mx-auto' dir='rtl'>
                        <p className='mt-4'>
                            <b className='text-lg text-[#4866cf]'>وب‌سایت‌های شخصی</b>
                            <span className='flex flex-col gap-y-2 items-start justify-start my-2'>
                                شامل وب‌سایت‌های بلاگ، پروفایل‌های شخصی یا سایت‌های هنری.
                            </span>
                        </p>

                        <div className="divider"></div>
                        <p className='mt-4'>
                            <b className='text-lg text-[#4866cf]'>وب‌سایت‌های شرکتی</b>
                            <span className='flex flex-col gap-y-2 items-start justify-start'>
                                <span className='my-2'>
                                    برای معرفی کسب‌وکارها، خدمات و محصولات. شامل سایت‌های تجاری و وب‌سایت‌های برندینگ.
                                </span>
                            </span>
                        </p>

                        <div className="divider"></div>
                        <p className='mt-4'>
                            <b className='text-lg text-[#4866cf]'>وب‌سایت‌های خبری</b>
                            <span className='flex flex-col gap-y-2 items-start justify-start'>
                                <span className='my-2'>
                                    ارائه اخبار و اطلاعات روز. شامل وب‌سایت‌های خبری و مجلات آنلاین.
                                </span>
                            </span>
                        </p>

                        <div className="divider"></div>
                        <p className='mt-4'>
                            <b className='text-lg text-[#4866cf]'>وب‌سایت‌های آموزشی</b>
                            <span className='flex flex-col gap-y-2 items-start justify-start'>
                                <span className='my-2 text-sm font-thin'>
                                    شامل دوره‌های آنلاین، وبینارها و منابع آموزشی.
                                </span>
                            </span>
                        </p>

                        <div className="divider"></div>
                        <p className='mt-4'>
                            <b className='text-lg text-[#4866cf]'>وب‌سایت‌های فروشگاهی (E-commerce)</b>
                            <span className='flex flex-col gap-y-2 items-start justify-start'>
                                <span className='my-2 text-sm font-thin'>
                                    برای فروش محصولات و خدمات آنلاین. شامل سایت‌های بزرگ مانند آمازون و وب‌سایت‌های کوچک‌تر
                                </span>
                            </span>
                        </p>

                        <div className="divider"></div>
                        <p className='mt-4'>
                            <b className='text-lg text-[#4866cf]'>وب‌سایت‌های انجمن و اجتماعی:</b>
                            <span className='flex flex-col gap-y-2 items-start justify-start'>
                                <span className='my-2 text-sm font-thin'>
                                    شامل پلتفرم‌های شبکه‌های اجتماعی و انجمن‌های آنلاین
                                </span>
                            </span>
                        </p>

                        <div className="divider"></div>
                        <p className='mt-4'>
                            <b className='text-lg text-[#4866cf]'>وب‌سایت‌های سرگرمی:</b>
                            <span className='flex flex-col gap-y-2 items-start justify-start'>
                                <span className='my-2 text-sm font-thin'>
                                    شامل وب‌سایت‌های فیلم، موسیقی، بازی و دیگر محتوای سرگرم‌کننده
                                </span>
                            </span>
                        </p>

                        <div className="divider"></div>
                        <p className='mt-4'>
                            <b className='text-lg text-[#4866cf]'>وب‌سایت‌های غیرانتفاعی</b>
                            <span className='flex flex-col gap-y-2 items-start justify-start'>
                                <span className='my-2 text-sm font-thin'>
                                    برای سازمان‌های خیریه، گروه‌های اجتماعی و پروژه‌های عمومی
                                </span>
                            </span>
                        </p>


                        <div className="divider"></div>
                        <p className='mt-4'>
                            <b className='text-lg text-[#4866cf]'>وب‌سایت‌های دولتی و رسمی</b>
                            <span className='flex flex-col gap-y-2 items-start justify-start'>
                                <span className='my-2 text-sm font-thin'>
                                    شامل سایت‌های دولتی، شهرداری‌ها و سازمان‌های دولتی.
                                </span>
                            </span>
                        </p>

                        <div className="divider"></div>
                        <p className='mt-4'>
                            <b className='text-lg text-[#4866cf]'>وب‌سایت‌های پورتفولیو:</b>
                            <span className='flex flex-col gap-y-2 items-start justify-start'>
                                <span className='my-2 text-sm font-thin'>
                                    برای نمایش آثار و پروژه‌های شخصی، به‌ویژه برای طراحان و هنرمندان.
                                </span>
                            </span>
                        </p>

                        <p className='mt-10 text-center p-6 bg-gradient-to-tr from-blue-200/30 via-[#4877cf30] to-blue-900/30 rounded-2xl shadow-lg mx-auto shadow-zinc-400 flex flex-col items-center justify-center gap-y-2'>
                            <span className='text-center text-md font-extralight leading-9'>
                                این دسته‌ها می‌توانند همپوشانی داشته باشند و بسیاری از وب‌سایت‌ها ممکن است شامل چندین نوع محتوا و هدف باشند.
                            </span>
                        </p>

                    </span>
                </div>
            </div>
            {/* FOOTER */}
            <Footer />
        </div >
    )
}

export default WebDesignPage