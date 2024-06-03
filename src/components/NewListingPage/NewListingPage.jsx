import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './_NewListingPage.scss';
import { useHistory } from 'react-router-dom';

export default function NewListingPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector((store) => store.user.id);

  const [headline, setHeadline] = useState('');
  const [item, setItem] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [condition, setCondition] = useState('');
  const [estimatedValue, setEstimatedValue] = useState('');
  const [color, setColor] = useState('');
  const [uploadedFile, setUploadedFile] = useState('');
  // const [dateTime, setDateTime] = useState(null);

  const createListing = () => {
    //const createdDate = new DateTime(now);
    //  const currentDateTime = new Date();
    //  setDateTime(currentDateTime.toString());

    const formData = new FormData();
    formData.append('headline', headline);
    formData.append('item', item);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('condition', condition);
    formData.append('estimated_value', estimatedValue);
    formData.append('color', color);
    formData.append('upload_image', uploadedFile);
    formData.append('user_id', userId);

    // formData.append('date_posted', createDate)

    // const newItem = {
    //   headline,
    //   item,
    //   category,
    //   description,
    //   condition,
    //   estimated_value: estimatedValue,
    //   color,
    //   upload_image: uploadedFile,
    //   user_id: userId,
    //   // date_posted: createdDate,
    // };

    dispatch({
      type: 'ADD_USER_ITEM',
      payload: formData,
    });
    history.push('/discover');
  };

  return (
    <div className="new-listing-page-container row">
      <div className="new-listing-page-content-left column">
        <h2>New Listing Form</h2>

        {/* Headline */}
        <h3>Headline</h3>
        <input
          type="text"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />

        {/* Item and Category */}
        <div className="row jc-space-between wrap">
          <div className="column">
            <h3>Item</h3>
            <input
              type="text"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </div>

          <div
            className="column"
            style={{ marginRight: '5em', alignItem: 'center' }}
          >
            <h3>Category</h3>
            <select
              name="category"
              id="category"
              style={{ width: '15em', height: '3em' }}
              value={category}
              //   defaultValue={'Select Category'}
              onChange={(e) => setCategory(e.target.value)}
            >
              {/* <option value="" disabled>
                Select an option
              </option> */}
              <option value="Apparel">Apparel</option>
              <option value="Beauty">Beauty</option>
              <option value="Baby/Family">Baby/Family</option>
              <option value="Electronics">Electronics</option>
              <option value="Hobbies">Hobbies</option>
              <option value="Home Goods">Home Goods</option>
              <option value="Home Improvement">Home Improvement</option>
              <option value="Music">Music</option>
              <option value="Office">Office</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Pet Supplies">Pet Supplies</option>
              <option value="Sporting Goods">Sporting Goods</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <h3>Description</h3>
        <textarea
          id="description"
          name="description"
          rows="4"
          cols="50"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        >
          At w3schools.com you will learn how to make a website. They offer free
          tutorials in all web development technologies.
        </textarea>
        <h3>Upload item picture</h3>
        <div
          className=""
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginRight: '20em',
          }}
        >
          <input
            type="file"
            onChange={(e) => setUploadedFile(e.target.files[0])}
            name="profile-files"
          />
        </div>
        <div className="jc-end">
          <button className="new-listing-btn" onClick={() => createListing()}>
            Create Listing
          </button>
        </div>
      </div>

      <div className="new-listing-page-content-right column">
        <div>
          <b>Neighborhood / Area</b>
          <p>Downtown - Within 5 miles</p>
          <b>Delivery Method</b>
          <p> Pickup Drop-off Both</p>

          <div>
            <div>
              <b>Category</b>
            </div>
            <select
              name="condition"
              id="condition"
              // defaultValue={'Select Condition'}
              value={condition}
              style={{ width: '15em', height: '3em' }}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Excellent">Excellent</option>
              <option value="Like New">New</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
            </select>
          </div>

          <div>
            <b>Estimated Value (Optional)</b>
            <div>
              $
              <input
                type="number"
                value={estimatedValue}
                onChange={(e) => setEstimatedValue(e.target.value)}
              />
            </div>
          </div>
          <br />
          <b>Color (Optional)</b>
          <br />
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
