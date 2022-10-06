import React from 'react';

const Widgets = () => {
  return (
    <div className="details">
      <div className="details-item">
        <div className="details-item-title">
          <img src="img/icons-details/temp.svg" alt="" />
          <div>Ощущается как</div>
        </div>
        <div className="details-item-main">29°C</div>
        <div className="details-item-text">
          По ощущениям <br />
          примерно так-же
        </div>
      </div>
      <div className="details-item">
        <div className="details-item-title">
          <img src="img/icons-details/wind.svg" alt="" />
          <div>Ветер</div>
        </div>
        <div className="details-item-main">
          <div className="compass-wrapper">
            <img
              className="compass-ellipse"
              src="img/images-details/compas-big/Ellipse 5.svg"
              alt=""
            />
            <img
              src="img/images-details/compas-big/Polygon 1.svg"
              alt=""
              className="compass-top"
            />
            <img
              src="img/images-details/compas-big/Rectangle-bottom 35.svg"
              alt=""
              className="compass-bottom"
            />
            <img
              src="img/images-details/compas-big/Rectangle-side 34.svg"
              alt=""
              className="compass-left"
            />
            <img
              src="img/images-details/compas-big/Rectangle-side 34.svg"
              alt=""
              className="compass-right"
            />

            <div className="compass-letter compass-north">С</div>
            <div className="compass-letter compass-south">Ю</div>
            <div className="compass-letter compass-west">З</div>
            <div className="compass-letter compass-east">В</div>

            <div className="compass-text">
              2<br />
              км/ч
            </div>
            <div className="compass-wind">
              <div className="compass-arrow">
                <img
                  src="img/images-details/compas-big/Line-back 34.svg"
                  alt=""
                  className="compass-arrow-back"
                />
                <img
                  src="img/images-details/compas-big/Line-front 35.svg"
                  alt=""
                  className="compass-arrow-front"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="details-item">
        <div className="details-item-title">
          <img src="img/icons-details/sun.svg" alt="" />
          <div>УФ-Индекс</div>
        </div>
        <div className="details-item-main">
          <div className="uv-index-wrapper">
            <div className="uv-index-text">
              0 <br />
              Низкий
            </div>
            <div className="uv-index-grade">
              <div className="uv-index-grade-dot"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="details-item">
        <div className="details-item-title">
          <img src="img/icons-details/windy.svg" alt="" />
          <div>Влажность</div>
        </div>
        <div className="details-item-main">84%</div>
        <div className="details-item-text">Точка росы сейчас: 14</div>
      </div>
      <div className="details-item">
        <div className="details-item-title">
          <img src="img/icons-details/sunrise.svg" alt="" />
          <div>Восход солнца</div>
        </div>
        <div className="details-item-main">7:36</div>
        <div className="sunrise-wrapper">
          <img
            className="sunrise-curved"
            src="img/images-details/sunrise-time/Vector 11.svg"
            alt=""
          />
          <div className="sunrise-straight"></div>
        </div>
        <div className="details-item-text">Закат : 19:55</div>
      </div>
      <div className="details-item">
        <div className="details-item-title">
          <img src="img/icons-details/visibility.svg" alt="" />
          <div>Видимость</div>
        </div>
        <div className="details-item-main">24 км</div>
        <div className="details-item-text">Сейчас совершенно ясно</div>
      </div>
      <div className="details-item">
        <div className="details-item-title">
          <img src="img/icons-details/compass.svg" alt="" />
          <div>Давление</div>
        </div>
        <div className="details-item-main">
          <div className="pressure-wrapper">
            <img
              src="img/images-details/pressure/Ellipse 7.svg"
              alt=""
              className="pressure-ellipse"
            />
            <div className="pressure-arrow-wrapper">
              <img
                src="img/images-details/pressure/Arrow.svg"
                alt=""
                className="pressure-arrow"
              />
            </div>
          </div>
        </div>
        <div className="details-item-text">
          1117 <br />
          гПа
        </div>
      </div>
      <div className="details-item">
        <div className="details-item-title">
          <div>
            <img src="img/icons-details/cloud.svg" alt="" />
            Процент <br />
            облачности
          </div>
        </div>
        <div className="details-item-main">20%</div>
        <div className="details-item-text">Средняя облачность</div>
      </div>
    </div>
  );
};

export default Widgets;
