import ReactFilestack, { client } from "filestack-react";
import React from "react";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  onUpload() {
    console.log("Document Uploaded Successfully");
    return <h2>Document Uploaded sccessfully</h2>;

    function getPics(Blob) {
      console.log(JSON.stringify(Blob));
      const handler = Blob.url.substring(Blob.url.lastIndexOf("/") + 1);
      // document.getElementById('button-upload').dataset.handler = handler;
    }
    function picError(FPError) {
      console.log(FPError.toString());
    }
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
        <ReactFilestack
          apikey={"AFADgP4mQICNxkczq4zSpz"}
          mode={"pick"}
          buttonText="Barber Upload"
          buttonClass="classname"
          options={options}
          handle={""}
          onSuccess={this.onUpload}
        />
      </div>
    );
  }
}
