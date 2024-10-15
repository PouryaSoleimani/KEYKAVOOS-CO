"use client"
// ^ OUR-SERVICES - WEB-APPLICATION PAGE ============================================================================================================================================
import Nav from '@/components/home-components/nav'
import React, { useEffect } from 'react'
import Footer from '@/components/home-components/Footer/Footer';
import GovernmentLearningCarousel from '../../../components/GOVERNMENT__LEARNING__COMPONENTS/GovernmentLearningCarousel';
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css';
import GovernmentLearningCarousel2 from '../../../components/GOVERNMENT__LEARNING__COMPONENTS/GovernmentLearningCarousel2';
import GovernmentLearningCarousel3 from '../../../components/GOVERNMENT__LEARNING__COMPONENTS/GovernmentLearningCarousel3';
import GovernmentLearningCarousel4 from '../../../components/GOVERNMENT__LEARNING__COMPONENTS/GovernmentLearningCarousel4';
import GovernmentLearningCarousel5 from '../../../components/GOVERNMENT__LEARNING__COMPONENTS/GovernmentLearningCarousel5';


//^ COMPONENT
const WebApplicationServicePage: React.FC = () => {
    useEffect(() => {
        AOS.init();
        window.addEventListener('touchmove', () => { AOS.refresh() }, false)
    }, [])

    //^ RETURN 
    return (
        <div className='web-container h-screen overflow-x-hidden'>
            <Nav />
            {/* HEADER */}
            <div className='py-4 animate__animated animate__backInDown animate__slow'>
                <h1 className='BLOG_HEADER_TEXT text-center font-black bg-gradient-to-tr from-blue-300 via-[#4866CF] to-blue-900 bg-clip-text text-3xl lg:text-5xl py-4 text-transparent BLOG_HEADER_TEXT animate__animated animate__heartBeat animate__infinite'>آموزش کارکنان دولت</h1>
                <h2 className='text-center font-extralight text-md text-zinc-700 bg-zinc-300 py-2 px-4 rounded-xl w-fit mx-auto'>آموزش مباحث مبتدی و حرفه ای به کارمندان و کارکنان دولت با تدریس مجرب ترین اساتید</h2>
            </div>
            <video src="/VIDEOS/GOVERNMENT__HEADER__VIDEO.mp4" loop autoPlay playsInline height={100} className='h-80 w-fit mx-auto my-10 rounded-3xl ' />
            <div id="WEB__APPLICATION__PAGE__CONTAINER" className='w-screen h-auto' data-aos="fade-up" data-aos-duration="1000">
            </div>
            {/* CAROUSELS */}
            <div id="WEB__APPLICATION__PAGE__TITLE__CONTAINER" className='flex flex-col items-center justify-center gap-4 py-10' data-aos="fade-up" data-aos-duration="1000">
                <h2 className='text-center text-xl lg:text-4xl font-bold text-[#4866CF] px-6' dir='rtl'>مباحث دوره های آموزشی</h2>
            </div>
            <div className='my-10 py-6'>
                <h3 className='text-center font-extrabold text-2xl my-6 bg-gradient-to-tr from-blue-600/50 via-[#4866CF] shadow-md shadow-zinc-400 to-blue-900/50 w-fit text-white py-4 px-8 mx-auto rounded-2xl tracking-tight'>ICDL آموزش</h3>
                <GovernmentLearningCarousel2 />
            </div>
            <div className="divider"></div>
            <div className='my-10 py-6'>
                <h3 className='text-center font-extrabold text-2xl my-6 bg-gradient-to-tr from-emerald-400/50 via-green-500 shadow-md shadow-zinc-400 to-emerald-700/50 w-fit text-white py-4 px-8 mx-auto rounded-2xl tracking-tight'>آموزش برنامه نویسی فرانت اند</h3>
                <GovernmentLearningCarousel />
            </div>
            <div className="divider"></div>
            <div className='my-10 py-6'>
                <h3 className='text-center font-extrabold text-2xl my-6 bg-gradient-to-tr from-red-400/80 via-red-500 shadow-md shadow-zinc-400 to-red-700/80 w-fit text-white py-4 px-8 mx-auto rounded-2xl tracking-tight'>آموزش برنامه نویسی بک اند</h3>
                <GovernmentLearningCarousel3 />
            </div>
            <div className="divider"></div>
            <div className='my-10 py-6'>
                <h3 className='text-center font-extrabold text-2xl my-6 bg-gradient-to-tr from-yellow-400/80 via-orange-500 shadow-md shadow-zinc-400 to-red-700/80 w-fit text-white py-4 px-8 mx-auto rounded-2xl tracking-tight'>آموزش طراحی رابط کاربری</h3>
                <GovernmentLearningCarousel4 />
            </div>
            <div className="divider"></div>
            <div className='my-10 py-6'>
                <h3 className='text-center font-extrabold text-2xl my-6 bg-gradient-to-tr from-violet-400/80 via-purple-500 shadow-md shadow-zinc-400 to-violet-700/80 w-fit text-white py-4 px-8 mx-auto rounded-2xl tracking-tight'>آموزش حسابداری</h3>
                <GovernmentLearningCarousel5 />
            </div>
            <div className="divider"></div>
            {/* TABLE */}
            <div data-aos="fade-up" data-aos-duration="1000" className='py-4'>
                <h1 className='BLOG_HEADER_TEXT text-center font-black bg-gradient-to-tr from-blue-300 via-[#4866CF] to-blue-900 bg-clip-text text-3xl lg:text-5xl py-4 text-transparent BLOG_HEADER_TEXT animate__animated animate__heartBeat animate__infinite'>جدول انواع دوره های آموزشی</h1>
                <h2 className='text-center font-extralight text-xl text-zinc-700 bg-zinc-300 py-2 px-16 mt-4 rounded-xl w-fit mx-auto'>به همراه ویژگی ها و قیمت</h2>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className="overflow-x-auto w-[90%] mx-auto rounded-lg my-10 shadow-lg shadow-zinc-400" dir='rtl'>
                <table className="table table-sm whitespace-nowrap" dir='rtl'>
                    <thead dir='rtl w-1/8'>
                        <tr>
                            <th className='w-16'>ردیف</th>
                            <th>عنوان دوره</th>
                            <th>مباجث تدریسی</th>
                            <th>مدت دوره</th>
                            <th>نحوه برگزاری</th>
                            <th>محل برگزاری</th>
                            <th>روز و ساعت</th>
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
                            <td>Hara, Welch and Keebler</td>
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
            {/* FOOTER */}
            <Footer />
        </div>
    )
}

export default WebApplicationServicePage