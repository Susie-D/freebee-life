import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './_EditListingPage.scss';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function EditListingPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const itemToEdit = useSelector((store) => store.userItems.editUserItem);
  const [preview, setPreview] = useState(null);
  const itemIdToEdit = params.id;

  useEffect(() => {
    dispatch({
      type: 'FETCH_EDIT_USER_ITEM',
      payload: itemIdToEdit,
    });
  }, []);

  const updateListing = (e) => {
    e.preventDefault();
    // Call the Saga function that will actually update the
    // student in our database table:
    const formData = new FormData();
    formData.append('id', itemIdToEdit);
    formData.append('headline', itemToEdit.headline);
    formData.append('item', itemToEdit.item);
    formData.append('category', itemToEdit.category);
    formData.append('description', itemToEdit.description);
    formData.append('condition', itemToEdit.condition);
    formData.append('estimated_value', itemToEdit.estimated_value);
    formData.append('color', itemToEdit.color);
    formData.append('upload_image', itemToEdit.upload_image);
    formData.append('user_id', itemToEdit.user_id);
    dispatch({
      type: 'UPDATE_ITEM',
      // SEND THE UPDATED EDIT INFO W/ ONSUBMIT
      payload: formData,
    });
    // history.push('/my-listings');
  };

  const handleEditItemChange = (e) => {
    dispatch({
      type: 'EDIT_USER_ITEM_INPUT',
      payload: e.target,
    });
  };

  const handleEditItemPhotoChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
    dispatch({
      type: 'EDIT_USER_ITEM_INPUT',
      payload: {
        name: 'upload_image',
        value: file,
      },
    });
  };

  return (
    <form onSubmit={updateListing}>
      <div className="new-listing-page-container row">
        <div className="new-listing-page-content-left column">
          <h2>Edit Listing</h2>
          {/* Headline */}
          <h3>Headline</h3>
          <input
            type="text"
            value={itemToEdit.headline}
            name="headline"
            id="headline"
            onChange={handleEditItemChange}
          />
          {/* Item and Category */}
          <div className="row jc-space-between">
            <div className="column" style={{ margin: '1em 1em 1em 0' }}>
              <h3>Item</h3>
              <input
                type="text"
                value={itemToEdit.item}
                name="item"
                id="item"
                onChange={handleEditItemChange}
              />
            </div>

            <div
              className="column "
              style={{
                margin: '1em 10em 0 0',
                alignItem: 'center',
              }}
            >
              <h3>Category</h3>
              <select
                name="category"
                id="category"
                style={{ width: '15em', height: '3em' }}
                value={itemToEdit.category}
                defaultValue={'Select Category'}
                onChange={handleEditItemChange}
              >
                <option value="" disabled>
                  Select category
                </option>
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
            id="editDescription"
            type="text"
            name="description"
            className="editDescription"
            value={itemToEdit.description}
            rows="4"
            cols="50"
            onChange={handleEditItemChange}
          />

          <h3>Upload item picture</h3>
          {preview ? (
            <img
              src={preview}
              alt="Image Preview"
              style={{ width: '300px', height: 'auto' }}
            />
          ) : (
            <img src={itemToEdit.upload_image} />
          )}

          {/* TODO: PHOTO UPLOAD */}
          <form
            method="POST"
            action="/profile-upload-multiple"
            enctype="multipart/form-data"
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginRight: '20em',
              }}
            >
              <input
                type="file"
                // value={itemIdToEdit.upload_image}
                onChange={handleEditItemPhotoChange}
                name="profile-files"
              />
            </div>
          </form>
          <div className="jc-end">
            <button className="new-listing-btn" type="submit">
              Submit Edits
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
              value={itemToEdit.condition}
              style={{ width: '15em', height: '3em' }}
              onChange={handleEditItemChange}
            >
              <option value="" disabled>
                Select condition
              </option>
              <option value="Excellent">Excellent</option>
              <option value="Like New">New</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
            </select>
            <b>Estimated Value (Optional)</b>
            <input
              type="text"
              name="estimated_value"
              value={itemToEdit.estimated_value}
              onChange={handleEditItemChange}
            />
            <br />
            <b>Color (Optional)</b>
            <br />
            <input
              name="color"
              type="text"
              value={itemToEdit.color}
              onChange={handleEditItemChange}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
