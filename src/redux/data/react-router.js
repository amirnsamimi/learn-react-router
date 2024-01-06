import urlExample from "../../assets/url-example.png"
import hyperInstallation from "../../assets/hyper-installation.png"
import CBRCRFER from "../../assets/createBrowserRouter-createRoutesFromElements-Route.png"
import Provider from "../../assets/provider.png"
import NavLink from "../../assets/Navlink.png"
import Link from "../../assets/Link.png"
import DynamicRoutes from "../../assets/dynamicRoutes.png"
import useParams from "../../assets/useParams.png"
import Outlet from "../../assets/Outlet.png"
import Nested from "../../assets/Nested.png"
import useNavigate from "../../assets/useNavigate.png"
import SearchParams from "../../assets/searchParams.png"

export const REACTROUTERCOURSE = {

    Syllabus:[
        {
            component:"span",
            text:"برنامه آموزشی",
            className:"course-title"
        },
        {
            component:"div",
            text:"خلاصه مطالبی که در این دوره یاد خواهید گرفت:",
            className:"course-paragraph"
        },
        {
            component:"ul",
            text:"asda",
            className:"course-paragraph-ul",
            children:[{
                component:"li",
                text:"React-Router چیست و چه مشکلاتی از یک وب اپلیکیشن بر پایه React را حل میکند؟",
                className:"course-list-item",
        },
        {
            component:"li",
            text:"  مباحث ابتدایی Routing. ",
            className:"course-list-item",
    },
    {
        component:"li",
        text:"نحوه افزودن React-Router به پروژه و راه اندازی آن.",
        className:"course-list-item",
},
{
    component:"li",
    text:"پیاده سازی یکسری داده به وسیله JSON و استفاده از آن درون پروژه با کمک Redux.",
    className:"course-list-item",
},
{
    component:"li",
    text:"Static Routes",
    className:"course-list-item",
},
{
    component:"li",
    text:"Linkings",
    className:"course-list-item",
} ,
   {
    component:"li",
    text:"Parameters",
    className:"course-list-item",
},
{
component:"li",
text:"Navigation",
className:"course-list-item",
},
{
    component:"li",
    text:"Nested Routes",
    className:"course-list-item",
    },
{
component:"li",
text:"Query Parameters",
className:"course-list-item",
},

]}
    ],
What_is_react_router:[
    {
        component:"span",
        text:"React-Router چیست و چه مشکلاتی از یک وب اپلیکیشن بر پایه React را حل میکند؟",
        className:"course-title"
    },
    {
        component:"div",
        text:"React-Router در واقع یک کتابخانه برای اپلیکیشن های React می باشد که با کمک آن میتوان بین صفحات مختلف Navigate کرد و به صفحات داخلی یا خارجی با بسیاری امکانات بهینه و ارزنده دسترسی پیدا کرد.",
        className:"course-paragraph"
    },
    {
        component:"span",
        text:"مشکل اول: ریفرش شدن",
        className:"course-sub-title"
    },
    {
        component:"div",
        text:"در HTML و JS شما میتوانستید به کمک نام صفحات با آدرس دهی به صورت استاتیک بین صفحه های درونی جا به جا شوید یا با استفاده از تگ a به یک صفحه خارجی متصل شوید اما هر با که این کار را تکرار میکردید صفحه شما ریفرش میشد و اطلاعات داخل آن به حالت اولیه باز میگشت. ",
        className:"course-paragraph"
    },
    {
        component:"span",
        text:"مشکل دوم: عدم scalable نبودن پروژه",
        className:"course-sub-title"
    },
    {
        component:"div",
        text:"در صورتی که پروژه از چند صفحه ساده فراتر و یا به یک سوپر اپلیکیشن بخواهد تبدیل شود دیگر قادر به Route کردن صفحات به صورت دستی نخواهید بود",
        className:"course-paragraph"
    },
  
],

Routing:[
    {
        component:"span",
        text:"مباحث ابتدایی Routing",
        className:"course-title"
    },
    {
        component:"img",
        link:urlExample,
        className:"course-img"
    },
    {
        component:"span",
        text:"Uniform Resource Loctor",
        className:"course-sub-title"
    },
    
    {
        component:"div",
        text:"URLها شامل درخواست های اختصاصی از پوشه ها یا آدرس های مختلف در سرور یا هاست می باشند. ",
        className:"course-paragraph"
    },
    {
        component:"span",
        text:"پروتکل",
        className:"course-sub-title"
    },
    
    {
        component:"div",
        text:"پروتکل ها نمایان کننده خواسته کاربر از URL می باشند. ",
        className:"course-paragraph"
    },
    {
        component:"span",
        text:"Doamin",
        className:"course-sub-title"
    },
    {
        component:"div",
        text:"نام مشخص با استانداردهای W3C برای دسترسی راحتتر به IP سرور یا هاست مورد نظر.",
        className:"course-paragraph"
    },
    {
        component:"span",
        text:"Path",
        className:"course-sub-title"
    },
    {
        component:"div",
        text:"آدرس پوشه ها و یا فایل های درون سرور/هاست که درخواست می شوند.",
        className:"course-paragraph"
    },
    {
        component:"span",
        text:"Query String",
        className:"course-sub-title"
    },
    {
        component:"div",
        text:"روشی برای انقتال پارامتر ها به همراه کلید و مقدار آنها از طریق URL.",
        className:"course-paragraph"
    },


],

preparing_to_use:[
    {
        component:"span",
        text:"نحوه افزودن React-Router به پروژه و راه اندازی آن.",
        className:"course-title"
    },
    {
        component:"div",
        text:"از طریق دستورات CLI داخل محل پوشه اپلیکیشن خود بعد از نصب React با دستور npm install --save react-router-dom@6 محتویات کتابخانه را به ماژول های Node اضافه میکنیم و در صورت موفقیت آمیز بودن فرآیند میتوانیم در فایل Package عبارت 'react-router-dom':'^6.21.1' را مشاهده کنیم.",
        className:"course-paragraph"
    },
    {
        component:"img",
        link:hyperInstallation,
        className:"course-img"
    },
   

],
use_createBrowserRouter:[
    {
        component:"span",
        text:"استفاده از React Router",
        className:"course-title"
    },
    {
        component:"div",
        text:"در React-Router از روش های مختلفی از Data API ها جهت مدیریت Route ها استفاده می شود که createBrowserRouter یک روش مبتنی بر Browser  و مناسب ترین برای استفاده در اپلیکیشن های بر بستر وب است.",
        className:"course-paragraph"
    },
    {
        component:"span",
        text:"Route ها",
        className:"course-sub-title"
    },
    {
        component:"div",
        text:"جهت استفاده از createBrowserRouter می بایست به چند مطلب دیگر نیز تسلط کافی پیدا کنید. که Route ها یکی از آنهاست. Route در واقع همان component ها یا Layout های شما در اپلیکیشن هستند که توسط React-Router مدیریت شده و Document Object Model (DOM) آن برای دسترسی ساخته می شود.",
        className:"course-paragraph"
    },
    {
        component:"span",
        text:"DOM",
        className:"course-sub-title"
    },
    {
        component:"div",
        text:"Document Object Model همانند یک درخت می ماند که Componentها و Attributeهای استفاده شده یا در شرف استفاده را ترسیم میکند و به شما این قابلیت را میدهد تا هدفمندانه عملیات Routing و Navigation را در اپلیکیشن خود انجام دهید.",
        className:"course-paragraph"
    },
    {
        component:"span",
        text:"createRoutesFromElements",
        className:"course-sub-title"
    },
    {
        component:"div",
        text:"تابع ساخت Route از روی کامپوننت های Route به همراه Props آنها جهت استفاده در createBrowserRouter",
        className:"course-paragraph"
    },

    {
        component:"span",
        text:"RouterProvider",
        className:"course-sub-title"
    },
    {
        component:"div",
        text:"RouterProvider همانند دیگر Provider ها به پکیج این مجوز را می دهد تا در سراسر اپلیکیشن قابل استفاده باشد.",
        className:"course-paragraph"
    },
    {
        component:"span",
        text:"نمونه کد استفاده شده از مفاهیم بالا",
        className:"course-sub-title"
    },
    {
        component:"img",
        link:Provider,
        className:"course-img"
    },
    {
        component:"img",
        link:CBRCRFER,
        className:"course-img"
    },
   
   
    
],
Linkings:[

    {
        component:"span",
        text:"Link / NavLink",
        className:"course-title"
    },
    {
        component:"div",
        text:"لینک ها در React Router همان تگ های a هستند با این تفاوت که استفاده از آنها هنگام تغییر آدرس برای رسیدن به قسمتی دیگر از اپلیکیشن از رندر-مجدد جلوگیری میکند و این یعنی نگه داشتن State ها. ",
        className:"course-paragraph"
    },
    {
        component:"span",
        text:"تفاوت Link و Navlink",
        className:"course-sub-title"
    },
    {
        component:"span",
        text:"تفاوت لینک و نویگیشن لینک در این است که هنگام استفاده از Navlink به صورت اتوماتیک المانی که انتخاب شده است کلاس active میگیرد که با یک تابع میتوان آن را در کلاس هم تغییر داد.",
        className:"course-paragraph"
    },
    {
        component:"img",
        link:NavLink,
        className:"course-img"
    },
    {
        component:"img",
        link:Link,
        className:"course-img"
    },

],
Dynamic_Routes:[

    {
        component:"span",
        text:"Dynamic Routes",
        className:"course-title"
    },
    {
        component:"div",
        text:"روت های داینامیک یکی از پرکاربرد ترین روتینگهایی هستند که در React-Router استفاده می شوند و در کد با : قابل شناسایی هستند. مانند عکس زیر:",
        className:"course-paragraph"
    },
    {
        component:"img",
        link:DynamicRoutes,
        className:"course-img"
    },
    {
        component:"span",
        text:"استفاده از Dynamic ها چه مزیت های دارد؟",
        className:"course-sub-title"
    },
    {
        component:"span",
        text:"مزیت در استفاده از Dynamic Routes  کد نویسی کمتر برای صفحه هایی با محتوای یکسان مثل همین دوره آموزشی، Route های کمتر و کد تمیز تر را میتوان مثال زد.",
        className:"course-paragraph"
    },
   

],
useParams:[

    {
        component:"span",
        text:"useParams",
        className:"course-title"
    },
    {
        component:"div",
        text:"جهت استفاده از محتوای Dynamic Routes از پارامترهای آن بهره میگیریم که با Hook داخل کتابخانه React-Router به نام useParams و از طریق متد Destructuring Assignment  قابل مشاهده خواهند بود.",
        className:"course-paragraph"
    },
    {
        component:"img",
        link:useParams,
        className:"course-img"
    },
    {
        component:"span",
        text:"استفاده از useParams",
        className:"course-sub-title"
    },
    {
        component:"span",
        text:"با تجزیه سازی Dynamic Route خود به نام Path Dynamic داخل Route در React Router میتوانید مقدار ارسال شده در URL را دریافت کنید ",
        className:"course-paragraph"
    },
   

],
Nested_Routes:[

    {
        component:"span",
        text:"Nested Routes",
        className:"course-title"
    },
    {
        component:"div",
        text:"همانند کدهای داخل SASS ( SCSS ) یا Element های تو در تو نوشته میشوند و برای بهینه سازی و مشخص کردن Path های وابسته به یکدیگر کار را ساده تر میکنند.",
        className:"course-paragraph"
    },
    {
        component:"span",
        text:"Outlet",
        className:"course-sub-title"
    },
    {
        component:"span",
        text:"برای استفاده از Elementهای در Route های تو در تو یا همان Nested از کامپوننت <Outlet /> داخل Element در Route مادر استفاده میکنیم.",
        className:"course-paragraph"
    },
    {
        component:"img",
        link:Nested,
        className:"course-img"
    },
    {
        component:"img",
        link:Outlet,
        className:"course-img"
    },
    {
        component:"span",
        text:"index نمایانگر اولین Route ای است که میبایست پس از وارد شدن به / به صورت Default نمایش داده شود ",
        className:"course-paragraph"
    },

],
Navigate_useNavigate:[

    {
        component:"span",
        text:"Navigate و UseNavigate",
        className:"course-title"
    },
    {
        component:"div",
        text:"Navigate همانند لینک ها به صورت کامپوننت قابل استفاده است اما استفاده از آن بیشتر در مواقعی است که کمی حایتی تراند. یکی از مثال های قابل ارائه برای Navigate اعتبار سنجی کاربر هنگام ورود به یک URL است و در صورت تایید یا رد آن به صفحه مناسب دسترسی ایشان هدایت شوند در کنار Navigate هوک useNavigate نیز دقیقا رفتار مشابهی دارد با این تفاوت که useNavigate قابل استفاده در Functional Statements  می باشد. یعنی میتوانید به صورت غیر از تگ از آن استفاده کنید",
        className:"course-paragraph"
    },
    {
        component:"img",
        link:useNavigate,
        className:"course-img"
    },

],
query_parameters:[

    {
        component:"span",
        text:"Query Parameters / Strings",
        className:"course-title"
    },
  
    {
        component:"img",
        link:urlExample,
        className:"course-img"
    },
    {
        component:"div",
        text:"Query Parameter ها یکی از پرکاربرد ترین قسمت های یک URL هستند که هم در Call های مربوط به API به روش Query String استفاده میشوند هم در Search, Sort و موارد مشابه در CSR که میتوان با آنها یک یا چند کلید به همراه مقدار یا مقادیر آن(ها) را به سرور ارسال کرد ",
        className:"course-paragraph"
    },
    {
        component:"span",
        text:"useSearchParams",
        className:"course-sub-title"
    },
    {
        component:"div",
        text:"useSearchParams یک هوک از کتابخانه React-Router است که میتوان با آن به مقادیر Query Parameters در URL صفحه دسترسی پیدا کرد و برای این کار کافیست مانند عکس زیر عمل کنید.",
        className:"course-paragraph"
    },
    {
        component:"img",
        link:SearchParams,
        className:"course-img"
    },
    {
        component:"span",
        text:"createSearchParams",
        className:"course-sub-title"
    },
    {
        component:"div",
        text:"برای ایجاد مقادیر به همراه کلید در URL جهت سرچ یا سورت محتویات صورت میگیرد و به همراه Navigate برای دسترسی استفاده میشود. در Navigate از پارامتر های pathName و Search استفاده میشود.",
        className:"course-paragraph"
    },
]

    

}


//CREATE ELEMENTS WITH REACT DYNAMIC OOP