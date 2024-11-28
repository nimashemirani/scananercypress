import './ProductCard.css';
import React, { useState } from 'react';

const ProductCard = ({ image, name, price }) => {
    const [count, setCount] = useState(0);

    const increaseCount = () => setCount(count + 1); // تابع افزایش شمارنده
    const decreaseCount = () => {
        if (count > 0) setCount(count - 1); // تابع کاهش شمارنده
    };
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <h3>{name}</h3>
            <p>{price} تومان</p>
            <div className="counter"> {/* اضافه کردن کلاس counter */}
        <button className="counter-button" onClick={decreaseCount}>-</button> {/* دکمه کاهش */}
        <span>{count}</span> {/* نمایش شمارنده */}
        <button className="counter-button" onClick={increaseCount}>+</button> {/* دکمه افزایش */}
    </div>
        </div>
    );
};

export default ProductCard;
