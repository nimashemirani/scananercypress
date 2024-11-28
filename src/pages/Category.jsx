import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';
import './Category.css';
import hat1 from '../assets/images/hats/sss.jpg';
import hat2 from '../assets/images/hats/lautaro-andreani-6FaY0OJmYG4-unsplash.jpg';
import hat3 from '../assets/images/hats/norman-toth-7aOnLgALh2o-unsplash.jpg';
import hat4 from '../assets/images/hats/charlesdeluvio-GsKf0FXVj3Y-unsplash.jpg';
import hat5 from '../assets/images/hats/wild-vibes-0-_h5qxDsc8-unsplash.jpg';

import glove1 from '../assets/images/gloves/istockphoto-1094915042-612x612.webp';
import glove2 from '../assets/images/gloves/branimir-balogovic-fAiQRv7FgE0-unsplash.jpg';
import glove3 from '../assets/images/gloves/peter-burdon-AYlc19ADodk-unsplash.jpg';
import glove4 from '../assets/images/gloves/work.webp';
import glove5 from '../assets/images/gloves/istockphoto-1446042180-612x612.webp';

import tshirts1 from '../assets/images/t-shirt/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';
import tshirts2 from '../assets/images/t-shirt/istockphoto-471188329-612x612.webp';
import tshirts3 from '../assets/images/t-shirt/istockphoto-1331281853-612x612.webp';
import tshirts4 from '../assets/images/t-shirt/istockphoto-1438742272-612x612.webp';
import tshirts5 from '../assets/images/t-shirt/ian-dooley-TT-ROxWj9nA-unsplash.jpg';

import socks1 from '../assets/images/socks/istockphoto-1455386966-612x612.webp';
import socks2 from '../assets/images/socks/freestocks-RmrQTzKNe2M-unsplash.jpg';
import socks3 from '../assets/images/socks/christian-fickinger-MDIGo4Ez-0g-unsplash.jpg';
import socks4 from '../assets/images/socks/istockphoto-492528279-612x612.webp';
import socks5 from '../assets/images/socks/thought-catalog-SqAcgMAWIaM-unsplash.jpg';

import glasses1 from '../assets/images/glasses/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg';
import glasses2 from '../assets/images/glasses/istockphoto-180721942-612x612.webp';
import glasses3 from '../assets/images/glasses/istockphoto-187076721-612x612.webp';
import glasses4 from '../assets/images/glasses/karsten-winegeart-SkEcOeNeMkE-unsplash.jpg';
import glasses5 from '../assets/images/glasses/tai-s-captures-Gk0lbJ0n7KI-unsplash.jpg';

const Category = () => {
    const { name } = useParams();
    
    // نمونه داده برای هر دسته‌بندی
    const products = {
        hats: [
            { id: 1, name: 'کلاه شیک', price: 50000, image: hat1 },
            { id: 2, name: 'کلاه اسپرت', price: 45000, image: hat2 },
            { id: 3, name: 'کلاه پلاستیکی', price: 45000, image: hat3 },
            { id: 4, name: 'کلاه زمستانی', price: 45000, image: hat4 },
            { id: 5, name: 'کلاه زمستانی', price: 45000, image: hat5 },
        ],
        gloves: [
            { id: 1, name: 'دستکش زمستانی', price: 30000, image: glove1 },
            { id: 2, name: 'دستکش چرمی', price: 55000, image: glove2 },
            { id: 3, name: 'دستکش ورزشی', price: 55000, image: glove3 },
            { id: 4, name: 'دستکش کار', price: 55000, image: glove4 },
            { id: 5, name: 'دستکش معمولی', price: 55000, image: glove5 },
        ],
        shirts: [
            { id: 1, name: 'تیشرت زمستانی', price: 30000, image: tshirts1 },
            { id: 2, name: 'تیشرت چرمی', price: 55000, image: tshirts2 },
            { id: 3, name: 'تیشرت استین کوتاه', price: 30000, image: tshirts3 },
            { id: 4, name: 'تیشرت نخی', price: 55000, image: tshirts4 },
            { id: 5, name: 'تیشرت نخی', price: 55000, image: tshirts5 },
        ],
        socks: [
            { id: 1, name: 'جوراب گلدار', price: 30000, image: socks1 },
            { id: 2, name: ' جوراب مشکی', price: 55000, image: socks2 },
            { id: 3, name: 'جوراب مشکی', price: 30000, image: socks3 },
            { id: 4, name: 'جوراب نخی', price: 55000, image: socks4 },
            { id: 5, name: 'جوراب ساده', price: 55000, image: socks5 },
        ],
        glasses: [
            { id: 1, name: 'عینک فریم ', price: 30000, image: glasses1 },
            { id: 2, name: 'عینک ساده', price: 55000, image: glasses2 },
            { id: 3, name: 'عینک ریون', price: 30000, image: glasses3 },
            { id: 4, name: 'عینک بچه گانه', price: 55000, image: glasses4 },
            { id: 5, name: 'عینک طرحدار', price: 55000, image: glasses5 },

        ],
    };

    // const descriptions = {
    //     hats: 'کلاه‌ها تنوع بسیاری دارند و می‌توانند استایل شما را متفاوت کنند.',
    //     gloves: 'دستکش‌ها برای حفظ گرما و راحتی دست‌ها در هوای سرد بسیار مناسب هستند.',
    //     socks: `چرا باید جوراب بپوشیم؟
    //     انواع جوراب و قوانین ست کردن آنها چیست؟
    //     اصول ست کردن جوراب با شلوار چیست؟
    //     بهترین جنس جوراب چیست؟
    //     هنگام شست و شوی جوراب چه نکات رو رعایت کنیم؟`,
    //     shirts: 'تی‌شرت‌ها یکی از محبوب‌ترین و راحت‌ترین لباس‌ها هستند.',
    //     glasses: 'عینک‌ها نه تنها محافظ چشمان هستند، بلکه به استایل نیز جلوه خاصی می‌دهند.',
    // };
    const hatsDetails = [
        { 
            question: 'چرا باید کلاه بپوشیم؟', 
            answer: 'کلاه‌ها از پوست سر و صورت شما در برابر آفتاب محافظت می‌کنند و به استایل شما جذابیت می‌بخشند.' 
        },
        { 
            question: 'انواع کلاه و کاربرد آن‌ها چیست؟', 
            answer: 'کلاه‌ها در انواع مختلف مثل بیسبالی، رسمی، و زمستانی تولید می‌شوند و بسته به نوع آن‌ها برای مواقع مختلف مناسب‌اند.' 
        },
        { 
            question: 'چگونه یک کلاه مناسب برای استایل خود انتخاب کنیم؟', 
            answer: 'با توجه به فرم صورت و استایل لباس خود کلاه مناسبی انتخاب کنید تا جلوه‌ی زیبایی به استایل‌تان ببخشید.' 
        },
        { 
            question: 'بهترین جنس کلاه برای تابستان چیست؟', 
            answer: 'کلاه‌های نخی و سبک برای تابستان مناسب‌تر هستند، زیرا خنک‌تر هستند و تهویه بهتری دارند.' 
        },
        { 
            question: 'نکاتی برای مراقبت از کلاه‌ها', 
            answer: 'کلاه‌های خود را در دمای مناسب شسته و از خشک‌کن استفاده نکنید تا عمر بیشتری داشته باشند.' 
        },
    ];
    const glovesDetails = [
        { question: 'چرا باید از دستکش استفاده کنیم؟', answer: 'دستکش‌ها از دست‌ها در برابر سرما و آسیب‌های محیطی محافظت می‌کنند.' },
        { question: 'انواع دستکش و کاربرد آن‌ها چیست؟', answer: 'دستکش‌ها شامل انواع چرمی، پشمی، و ضدآب هستند که هرکدام برای شرایط مختلف مناسب‌اند.' },
        { question: 'چه نکاتی برای انتخاب دستکش مناسب وجود دارد؟', answer: 'دستکشی انتخاب کنید که به خوبی دست شما را پوشش دهد و جنس آن با نیاز شما هماهنگ باشد.' },
        { question: 'بهترین جنس دستکش برای زمستان چیست؟', answer: 'دستکش‌های پشمی و چرمی برای زمستان مناسب‌تر هستند، زیرا گرم‌ترند و محافظت بیشتری دارند.' },
        { question: 'نکاتی برای مراقبت از دستکش‌ها', answer: 'دستکش‌های چرمی را به دقت بشویید و برای حفظ شکل آن‌ها در معرض گرمای شدید قرار ندهید.' },
    ];

    const shirtsDetails = [
        { question: 'چرا تی‌شرت محبوب است؟', answer: 'تی‌شرت به خاطر راحتی و سبکی که دارد، یکی از پرطرفدارترین لباس‌هاست.' },
        { question: 'چگونه یک تی‌شرت مناسب انتخاب کنیم؟', answer: 'بهتر است تی‌شرتی انتخاب کنید که جنس پارچه‌ی آن مناسب فصل باشد و با استایل شما همخوانی داشته باشد.' },
        { question: 'چه رنگ تی‌شرت برای کدام موقعیت‌ها مناسب است؟', answer: 'تی‌شرت‌های سفید و مشکی برای موقعیت‌های غیررسمی و تی‌شرت‌های رنگی برای موقعیت‌های دوستانه مناسب هستند.' },
        { question: 'بهترین جنس تی‌شرت چیست؟', answer: 'تی‌شرت‌های نخی به خاطر راحتی و تنفس‌پذیری بالا بهترین انتخاب هستند.' },
        { question: 'نکاتی برای شستشوی تی‌شرت', answer: 'بهتر است تی‌شرت‌ها را با آب سرد شسته و از خشک‌کن استفاده نکنید تا رنگ و شکل آن حفظ شود.' },
    ];

    const socksDetails = [
        { 
            question: 'چرا باید جوراب بپوشیم؟', 
            answer: 'جوراب‌ها از پاهای شما محافظت کرده و به کاهش تعریق و جلوگیری از خارش کمک می‌کنند.' 
        },
        { 
            question: 'انواع جوراب و قوانین ست کردن آنها چیست؟', 
            answer: 'انواع مختلفی از جوراب‌ها مثل جوراب‌های نخی، پشمی، و ورزشی وجود دارند. مهم است جوراب‌ها را با استایل و رنگ لباس خود هماهنگ کنید.' 
        },
        { 
            question: 'اصول ست کردن جوراب با شلوار چیست؟', 
            answer: 'بهتر است رنگ جوراب به رنگ شلوار نزدیک باشد یا در تضاد با آن قرار بگیرد برای ایجاد استایل جذاب.' 
        },
        { 
            question: 'بهترین جنس جوراب چیست؟', 
            answer: 'جوراب‌های نخی و پشمی به دلیل تنفس‌پذیری و راحتی بیشتر بهترین انتخاب‌ها هستند.' 
        },
        { 
            question: 'هنگام شست و شوی جوراب چه نکات رو رعایت کنیم؟', 
            answer: 'بهتر است جوراب‌ها را با آب سرد شستشو دهید و از خشک‌کن استفاده نکنید تا عمر بیشتری داشته باشند.' 
        },
    ];
    const glassesDetails = [
        { question: 'چرا باید عینک بزنیم؟', answer: 'عینک از چشمان در برابر نور خورشید و اشعه‌های مضر محافظت می‌کند و دید را بهبود می‌بخشد.' },
        { question: 'انواع عینک و کاربرد آن‌ها چیست؟', answer: 'عینک‌ها شامل عینک‌های آفتابی، طبی و محافظتی هستند که هر کدام برای شرایط مختلف مناسب هستند.' },
        { question: 'اصول انتخاب عینک بر اساس فرم صورت چیست؟', answer: 'عینک‌هایی که با فرم صورت هماهنگ باشند، به زیبایی چهره کمک می‌کنند. مثلاً عینک‌های گرد برای صورت‌های زاویه‌دار مناسب‌اند.' },
        { question: 'بهترین نوع لنز برای عینک چیست؟', answer: 'لنزهای ضدخش و UV برای عینک آفتابی و لنزهای ضدبازتاب برای عینک طبی توصیه می‌شوند.' },
        { question: 'نحوه مراقبت از عینک‌ها', answer: 'عینک‌ها را با دستمال مخصوص تمیز کنید و از قرار دادن آن‌ها در معرض خط و خش خودداری کنید.' },
    ];
    const detailsData = {
        hats: hatsDetails,
        socks: socksDetails,
        shirts: shirtsDetails,
        gloves: glovesDetails,
        glasses: glassesDetails,
    };
    return (
        <div>
        <h2>دسته‌بندی: {name}</h2>

        {(name === 'socks' || name === 'hats' || name === 'shirts' || name === 'gloves' || name === 'glasses' ) && (
            <div className="details">
                {detailsData[name].map((item, index) => (
                    <div key={index} className="detail-item">
                        <h3>{item.question}</h3>
                        <p>{item.answer}</p>
                    </div>
                ))}
            </div>
        )}

        <div className="product-list">
            {products[name] && products[name].map((product) => (
                <ProductCard 
                    key={product.id} 
                    name={product.name} 
                    price={product.price} 
                    image={product.image} 
                />
            ))}
        </div>
    </div>
    );
};

export default Category;
