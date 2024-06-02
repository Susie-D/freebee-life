import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import './_ImageSlider.scss';

export default function ImageSlider() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_ITEMS' });
  }, []);

  const itemsListed = useSelector((store) => store.items.items);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
  };

  return (
    <div className="row jc-center" style={{ marginTop: '3.25em' }}>
      <div className="slider-container">
        <Slider {...settings}>
          {itemsListed.map((item) => (
            <div className="slider-content" key={item.key}>
              <div
                className="column"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  className="row"
                  style={{
                    fontWeight: 'bold',
                    margin: '1em',
                    fontSize: '1.25em',
                  }}
                >
                  {item.headline}
                </div>
                <img
                  src={item.upload_image}
                  onClick={() => history.push(`/item/${item.id}`)}
                />
              </div>

              <div className="item-info column">
                <b>Item:</b>

                <div>{item.item}</div>
                <p style={{ fontSize: '0.5em' }}></p>
                <div style={{ fontWeight: 'bold', color: '#2CA89B' }}>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
