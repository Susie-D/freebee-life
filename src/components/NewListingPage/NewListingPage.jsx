import './_NewListingPage.scss';

export default function NewListingPage() {
  return (
    <div className="new-listing-page-container row">
      <div className="new-listing-page-content-left column">
        <h2>New Listing Form</h2>
        <h3>Headliner</h3>
        <input type="text" />
        <div className="row jc-space-between">
          <div className="column">
            <h3>Item</h3>
            <input type="text" />
          </div>

          <div
            className="column"
            style={{ marginRight: '5em', alignItem: 'center' }}
          >
            <h3>Category</h3>
            <select
              name="cars"
              id="cars"
              style={{ width: '15em', height: '3em' }}
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <h3>Description</h3>
        <textarea id="w3review" name="w3review" rows="4" cols="50">
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
            <input type="file" name="profile-files" />

            {/* <input type="submit" value="Upload" /> */}
          </div>
        </form>
        <div className="jc-end">
          <button className="new-listing-btn">Create Listing</button>
        </div>
      </div>

      <div className="new-listing-page-content-right column">
        <div>
          <b>Neighborhood / Area</b>
          <p>Downtown - Within 5 miles</p>
          <b>Delivery Method</b>
          <p> Pickup Drop-off Both</p>
          <b>Condition</b>
          <p> Pickup Drop-off Both</p>
          <b>Estimated Value (Optional)</b>
          <input type="text" value="$10" />
          <br />
          <b>Color (Optional)</b>
          <br />
          <input type="text" value="blue" />
        </div>
      </div>
    </div>
  );
}
