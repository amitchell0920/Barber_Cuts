import ReactFilestack, { client } from "filestack-react";
import React from "react";
import { GridList, GridTile } from "material-ui/GridList";

export default class Filestack extends React.Component {
  constructor(props) {
    super(props);
    this.onUpload = this.onUpload.bind(this);
    this.state = {
      imgUrl: null
    };
  }

  onUpload(result) {
    this.setState({ uploadedfiles: result.filesUploaded });
    let imagetemp = result.filesUploaded;
    let imageUrl;
    if (imagetemp.length > 1) {
      imageUrl = [];
      imagetemp.forEach((item, index) => {
        imageUrl.push(item.url);
      });
    } else imageUrl = result.filesUploaded[0].url;

    //this will take the image url(from the upload response) and set it to the state
    this.setState({
      imageUrl: imageUrl,
      imgUrl: imageUrl
    });
    this.props.handleImages(imageUrl, this.props.type);
  }

  renderPicker() {
    const apikey = "AiebYQJlSuO1AZHW5n7awz";
    filestackDb = filestack.init(apikey);
    const ratio = 1 / 1;

    filestackDb.pick({
      transformations: {
        crop: {
          aspectRatio: ratio,
          force: true,
          circle: true
        }
      }
    });
  }

  render() {
    const options = {
      accept: "link(url)",
      accept: ["image/*", ".pdf", "video/mp4"],
      maxSize: 1024 * 1024,
      maxFiles: 3
    };

    return (
      <div>
        {Array.isArray(this.state.imageUrl) ? (
          this.state.imageUrl.map(item => (
            <img
              style={{ height: "30vw", width: "30vw" }}
              src={item}
              key={item}
            />
          ))
        ) : (
          <img
            style={{ height: "30vw", width: "30vw" }}
            src={this.state.imageUrl}
          />
        )}
        <ReactFilestack
          apikey={"AiebYQJlSuO1AZHW5n7awz"}
          buttonText="Add Photo"
          buttonClass="classname"
          options={options}
          onSuccess={this.onUpload}
          render={({ onPick }) => (
            <div>
              <button id="filestack" onClick={onPick}>
                Update Photo
              </button>
            </div>
          )}
        />
      </div>
    );
  }
}
