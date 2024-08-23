import Nav from "@/components/home-components/nav";
import React from "react";
import MobileCard from "./components/mobile-cards/mobile-card";
import CoursesCard from "./components/courses-card";

const Contact = ({ params }: { params: { courseName: string } }) => {
  console.log(params);
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-1 gap-[3%] lg:mb-[10%] mb-[40%]">
        <div dir="rtl" className="font-YekanBakh w-[90%] mx-auto">
          {/* SMALL SCREEN */}
          <div className="lg:hidden grid grid-cols-1 gap-12">
            <MobileCard
              text="صفحه اصلی هر وبسایت وهر چیز بصری است که کاربر با آن در تماس است. همه قسمت هایی است که  کاربران مستقیماً با آنها ارتباط برقرار می کنند ،  همه محتوا و استایلها ، دکمه ها و جلوه های مختلف قبل از اینکه کاربر روی پیوند کلیک کند ، فرم های تماس با فیلدهای ورودی مختلف، کادرهای جستجو و منوهای کشویی است. طرح بندی ها ، متن و رنگ ها . تصاویر و فیلم ها هستند. ولی فرانت اند ، فقط مربوط به استایلها نیست."
              title="دوره جامع فرانت اِند"
              videoLink="/courses/frontendstack1.svg"
              videoLogosLink={[
                "/courses/educationicon.png",
                "/courses/educationicon.png",
                "/courses/educationicon.png",
                "/courses/educationicon.png",
              ]}
              videoLogosText={["پشتیبانی", "پشتیبانی", "پشتیبانی", "پشتیبانی"]}
              logoLink="/courses/frontendstack1.svg"
              logosHeadText="دوره جامع فرانت اِند"
              logosHour="160 ساعت"
              courseAttendees="20 نفر"
              dynamicRoute="front-end"
            />
            <MobileCard
              text="توسعه Backend با فناوری هایی که مسئول ذخیره و تغییر ایمن داده های کاربر هستند ، سر و کار دارد.  بخشی است که به تمام منطق پنهان مرتبط است که به برنامه هایی که کاربران با آن تعامل دارند ، قدرت می دهد. Backend به عنوان بخش سمت سرور یک برنامه در نظر گرفته می شود. Backend تمام کارهای درونی پنهان و فرآیندهای پشت صحنه در یک برنامه وب است. "
              title="دوره جامع بک اِند"
              videoLink="/courses/nodejs2.svg"
              videoLogosLink={[
                "/courses/educationicon.png",
                "/courses/educationicon.png",
                "/courses/educationicon.png",
                "/courses/educationicon.png",
              ]}
              videoLogosText={["پشتیبانی", "پشتیبانی", "پشتیبانی", "پشتیبانی"]}
              logoLink="/courses/nodejs2.svg"
              logosHeadText="دوره جامع بک اِند"
              logosHour="96 ساعت"
              courseAttendees="20 نفر"
              dynamicRoute="back-end"
            />
            <MobileCard
              text="حسابداری از جمله مشاغل ضروری هر کسب‌ و کاری است. هر کسب‌ و کاری بسته به حجم فعالیت ، حداقل  به یک حسابدار برای سر و سامان بخشیدن به امور مالی نیاز دارد. پس اگر شما در ابتدای مسیر انتخاب رشته و حرفه هستید و به حسابداری علاقه‌‌مندید؛ شک نداشته باشید که این حرفه آینده‌ شما را می‌سازد!"
              title="دوره جامع حسابداری"
              videoLink="/courses/accountingicon3.svg"
              videoLogosLink={[
                "/courses/educationicon.png",
                "/courses/educationicon.png",
                "/courses/educationicon.png",
                "/courses/educationicon.png",
              ]}
              videoLogosText={["پشتیبانی", "پشتیبانی", "پشتیبانی", "پشتیبانی"]}
              logoLink="/courses/accountingicon3.svg"
              logosHeadText="دوره جامع حسابداری"
              logosHour="96 ساعت"
              courseAttendees="20 نفر"
              dynamicRoute="accounting"
            />
            <MobileCard
              text="دیجیتال مارکتینگ عملی است برای تبلیغ محصولات یا خدمات با کمک دستگاه ها و فناوری های دیجیتال. 
          به  زبان  ساده،  دیجیتال مارکتینگ به هر شکلی از بازاریابی  گفته می شود که به صورت آنلاین با کمک موبایل ، لپ تاپ ، اینترنت و غیره انجام می شود ، علاوه بر نشانه گذاری دیجیتال و فناوری که ممکن است به اینترنت متصل نباشد."
              title="دوره دیجیتال مارکتینگ"
              videoLink="/courses/digitalmarketing4.svg"
              videoLogosLink={[
                "/courses/educationicon.png",
                "/courses/educationicon.png",
                "/courses/educationicon.png",
                "/courses/educationicon.png",
              ]}
              videoLogosText={["پشتیبانی", "پشتیبانی", "پشتیبانی", "پشتیبانی"]}
              logoLink="/courses/digitalmarketing4.svg"
              logosHeadText="دوره دیجیتال مارکتینگ"
              logosHour="96 ساعت"
              courseAttendees="20 نفر"
              dynamicRoute="digital-marketing"
            />
            <MobileCard
              text=" طراحان رابط کاربری دانش فنی، عناصر طراحی و خلاقیت را برای توسعه و ادغام طراحی های وب سایت جذاب  وواکنش گرا به کار می گیرند.  مهارت های آنها شامل مهارت های سخت و نرم است و بسیاری از طراحان رابط کاربری مهارت های خود را از طریق تجربه عملی توسعه می دهند. برای موفقیت در طراحی رابط کاربری، توسعه مهارت های خود در زمینه های تخصصی مانند ابزارهای طراحی، نرم افزار طراحی رابط کاربری و طراحی گرافیک ضروری است."
              title="دوره طراحی رابط کاربری"
              videoLink="/courses/uxdesign.svg"
              videoLogosLink={[
                "/courses/educationicon.png",
                "/courses/educationicon.png",
                "/courses/educationicon.png",
                "/courses/educationicon.png",
              ]}
              videoLogosText={["پشتیبانی", "پشتیبانی", "پشتیبانی", "پشتیبانی"]}
              logoLink="/courses/uxdesign.svg"
              logosHeadText="دوره طراحی رابط کاربری"
              logosHour="96 ساعت"
              courseAttendees="20 نفر"
              dynamicRoute="ui-design"
            />
          </div>
          {/* LARGE SCREEN */}
          <div className="hidden lg:grid lg:grid-cols-1 gap-12">
            <CoursesCard
              text="صفحه اصلی هر وبسایت و هر چیز بصری است که کاربر با آن در تماس است. همه قسمت هایی است که کاربران مستقیماً با آنها ارتباط برقرار می کنند، همه محتوا و استایلها ، دکمه ها و جلوه های مختلف قبل از اینکه کاربر روی پیوند کلیک کند، فرم های تماس با فیلدهای ورودی مختلف، کادرهای جستجو و منوهای کشویی است. طرح بندی ها، متن و رنگ ها. تصاویر و فیلم ها هستند. ولی فرانت اند ، فقط مربوط به استایلها نیست."
              title="دوره جامع فرانت اِند"
              videoLink="/courses/frontendstack1.svg"
              videoLogosLink={[
                "/courses/educationicon.png",
                "/courses/educationicon.png",
                "/courses/educationicon.png",
                "/courses/educationicon.png",
              ]}
              videoLogosText={["پشتیبانی", "پشتیبانی", "پشتیبانی", "پشتیبانی"]}
              logoLink="/courses/frontendstack1.svg"
              logosHeadText="دوره جامع فرانت اِند"
              logosHour="160 ساعت"
              courseAttendees="20 نفر"
              dynamicRoute="front-end"
            />
            <CoursesCard
              text="توسعه Backend با فناوری هایی که مسئول ذخیره و تغییر ایمن داده های کاربر هستند، سر وکار دارد. بخشی است که به تمام منطق پنهان مرتبط است که به برنامه هایی که کاربران با آن تعامل دارند، قدرت می دهد. Backend به عنوان بخش سمت سرور یک برنامه در نظر گرفته می شود. Backend تمام کارهای درونی پنهان و فرآیندهای پشت صحنه در یک برنامه وب است. "
              title="دوره جامع بک اِند"
              videoLink="/courses/nodejs2.svg"
              videoLogosLink={[
                "/courses/educationicon.png",
                "/courses/educationicon.png",
                "/courses/educationicon.png",
                "/courses/educationicon.png",
              ]}
              videoLogosText={["پشتیبانی", "پشتیبانی", "پشتیبانی", "پشتیبانی"]}
              logoLink="/courses/nodejs2.svg"
              logosHeadText="دوره جامع بک اِند"
              logosHour="96 ساعت"
              courseAttendees="20 نفر"
              dynamicRoute="back-end"
            />
            <CoursesCard
              text="حسابداری از جمله مشاغل ضروری هر کسب‌وکاری است. هر کسب‌وکاری بسته به حجم فعالیت، حداقل به یک حسابدار برای سروسامان بخشیدن امور مالی نیاز دارد. پس اگر شما در ابتدای مسیر انتخاب رشته و حرفه هستید و به حسابداری علاقه‌‌مندید؛ شک نداشته باشید که این حرفه آینده‌ شما را می‌سازد!"
              title="دوره جامع حسابداری"
              videoLink="/courses/accountingicon3.svg"
              videoLogosLink={[
                "/courses/educationicon.png",
                "/courses/educationicon.png",
                "/courses/educationicon.png",
                "/courses/educationicon.png",
              ]}
              videoLogosText={["پشتیبانی", "پشتیبانی", "پشتیبانی", "پشتیبانی"]}
              logoLink="/courses/accountingicon3.svg"
              logosHeadText="دوره جامع حسابداری"
              logosHour="96 ساعت"
              courseAttendees="20 نفر"
              dynamicRoute="accounting"
            />
            <CoursesCard
              text="دیجیتال مارکتینگ عملی است برای تبلیغ محصولات یا خدمات با کمک دستگاه ها و فناوری های دیجیتال.
          به زبان ساده، دیجیتال مارکتینگ به هر شکلی از بازاریابی گفته می شود که به صورت آنلاین با کمک موبایل، لپ تاپ، اینترنت و غیره انجام می شود، علاوه بر نشانه گذاری دیجیتال و فناوری که ممکن است به اینترنت متصل نباشد."
              title="دوره دیجیتال مارکتینگ"
              videoLink="/courses/digitalmarketing4.svg"
              videoLogosLink={[
                "/courses/educationicon.png",
                "/courses/educationicon.png",
                "/courses/educationicon.png",
                "/courses/educationicon.png",
              ]}
              videoLogosText={["پشتیبانی", "پشتیبانی", "پشتیبانی", "پشتیبانی"]}
              logoLink="/courses/digitalmarketing4.svg"
              logosHeadText="دوره دیجیتال مارکتینگ"
              logosHour="96 ساعت"
              courseAttendees="20 نفر"
              dynamicRoute="digital-marketing"
            />
            <CoursesCard
              text=" طراحان رابط کاربری دانش فنی، عناصر طراحی و خلاقیت را برای توسعه و ادغام طراحی های وب سایت جذاب و واکنش گرا به کار می گیرند. مهارت های آنها شامل مهارت های سخت و نرم است و بسیاری از طراحان رابط کاربری مهارت های خود را از طریق تجربه عملی توسعه می دهند. برای موفقیت در طراحی رابط کاربری، توسعه مهارت های خود در زمینه های تخصصی مانند ابزارهای طراحی، نرم افزار طراحی رابط کاربری و طراحی گرافیک ضروری است."
              title="دوره طراحی رابط کاربری"
              videoLink="/courses/uxdesign.svg"
              videoLogosLink={[
                "/courses/educationicon.png",
                "/courses/educationicon.png",
                "/courses/educationicon.png",
                "/courses/educationicon.png",
              ]}
              videoLogosText={["پشتیبانی", "پشتیبانی", "پشتیبانی", "پشتیبانی"]}
              logoLink="/courses/uxdesign.svg"
              logosHeadText="دوره طراحی رابط کاربری"
              logosHour="96 ساعت"
              courseAttendees="20 نفر"
              dynamicRoute="ui-design"
            />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
