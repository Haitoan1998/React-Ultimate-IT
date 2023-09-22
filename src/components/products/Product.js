import React, { useState } from "react";
import "react-18-image-lightbox/style.css";
import Lightbox from "react-18-image-lightbox";

const images = [
  "https://salt.tikicdn.com/cache/368x368/ts/product/f4/d5/80/fbf81791a0ba6b886b9ade8190211993.jpg.webp",
  "https://salt.tikicdn.com/cache/368x368/ts/product/20/88/22/ef2bbcbd4d602f0a23426e3d3749cad6.jpg.webp",
  "https://salt.tikicdn.com/cache/368x368/ts/product/19/b6/ba/5a526850690de14957e4937bb4a7dbe5.jpg.webp",
  "https://salt.tikicdn.com/cache/368x368/ts/product/13/b1/6d/6ceb5e250356eed17433b2300f61ec70.jpg.webp",
];

export default function Product() {
  const [currentImg, setCurrentImg] = useState(
    "https://salt.tikicdn.com/cache/368x368/ts/product/f4/d5/80/fbf81791a0ba6b886b9ade8190211993.jpg.webp"
  );
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="product-container">
      <div className="content-left">
        <div
          className="img-up"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <img src={currentImg} />
        </div>
        <div className="img-down">
          <div
            className="img-small"
            onClick={() => {
              setCurrentImg(
                "https://salt.tikicdn.com/cache/368x368/ts/product/f4/d5/80/fbf81791a0ba6b886b9ade8190211993.jpg.webp"
              );
            }}
          >
            <img src="https://salt.tikicdn.com/cache/368x368/ts/product/f4/d5/80/fbf81791a0ba6b886b9ade8190211993.jpg.webp" />
          </div>
          <div
            className="img-small"
            onClick={() => {
              setCurrentImg(
                "https://salt.tikicdn.com/cache/368x368/ts/product/20/88/22/ef2bbcbd4d602f0a23426e3d3749cad6.jpg.webp"
              );
            }}
          >
            <img src="https://salt.tikicdn.com/cache/368x368/ts/product/20/88/22/ef2bbcbd4d602f0a23426e3d3749cad6.jpg.webp" />
          </div>
          <div
            className="img-small"
            onClick={() => {
              setCurrentImg(
                "https://salt.tikicdn.com/cache/368x368/ts/product/19/b6/ba/5a526850690de14957e4937bb4a7dbe5.jpg.webp"
              );
            }}
          >
            <img src="https://salt.tikicdn.com/cache/368x368/ts/product/19/b6/ba/5a526850690de14957e4937bb4a7dbe5.jpg.webp" />
          </div>
          <div
            className="img-small"
            onClick={() => {
              setCurrentImg(
                "https://salt.tikicdn.com/cache/368x368/ts/product/13/b1/6d/6ceb5e250356eed17433b2300f61ec70.jpg.webp"
              );
            }}
          >
            <img src="https://salt.tikicdn.com/cache/368x368/ts/product/13/b1/6d/6ceb5e250356eed17433b2300f61ec70.jpg.webp" />
          </div>
        </div>
      </div>
      <div className="content-right">
        <div className="title">Giày chạy bộ nam New Balance - M860E11</div>
        <div className="price">3.695.000 đ</div>
        <div className="size">Size:30</div>
        <div className="action">
          <label className="quantity">Số lượng</label>
          <input type="number" min={1} value={1} />
          <button>Chọn mua</button>
        </div>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          animationDisabled={true}
          animationDuration={500}
        />
      )}
      <a href="https://www.weatherapi.com/" title="Free Weather API">
        <img
          src="//cdn.weatherapi.com/weather/64x64/night/263.png"
          alt="Weather data by WeatherAPI.com"
          border="0"
        />
      </a>
    </div>
  );
}
