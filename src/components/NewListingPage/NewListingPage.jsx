import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './_NewListingPage.scss';

export default function NewListingPage() {
  const dispatch = useDispatch();
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
    // const createdDate = new DateTime(now);
    //  const currentDateTime = new Date();
    //  setDateTime(currentDateTime.toString());

    const newItem = {
      headline,
      item,
      category,
      description,
      condition,
      estimated_value: estimatedValue,
      color,
      user_id: userId,
      // date_posted: createdDate,
    };

    dispatch({
      type: 'ADD_USER_ITEM',
      payload: newItem,
    });
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
        <div className="row jc-space-between">
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
          id="w3review"
          name="w3review"
          rows="4"
          cols="50"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        >
          At w3schools.com you will learn how to make a website. They offer free
          tutorials in all web development technologies.
        </textarea>
        <h3>Upload item picture</h3>

        {/* TODO: PHOTO UPLOAD */}
        <form
        //   method="POST"
        //   action="/profile-upload-multiple"
        //   enctype="multipart/form-data"
        >
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
              value={uploadedFile}
              onChange={(e) => setUploadedFile(e.target.value)}
              name="profile-files"
            />

            {/* <input type="submit" value="Upload" /> */}
          </div>
        </form>
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
          <h3>Category</h3>
          <select
            name="condition"
            id="condition"
            // defaultValue={'Select Condition'}
            value={condition}
            style={{ width: '15em', height: '3em' }}
            onChange={(e) => setCondition(e.target.value)}
          >
            {/* <option value="" disabled>
              Select an option
            </option> */}
            <option value="Excellent">Excellent</option>
            <option value="Like New">New</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
          </select>
          <b>Estimated Value (Optional)</b>
          <input
            type="text"
            value={estimatedValue}
            onChange={(e) => setEstimatedValue(e.target.value)}
          />
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
