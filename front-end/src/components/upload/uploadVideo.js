import React, { Component } from 'react';

export default class UploadComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
      
    }

    uploadSingleFile=(e)=> {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }

    upload=(e)=> {
        e.preventDefault()
        console.log(this.state.file)
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
          $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
    
        return (
            <form>
               <div className="form-group preview">
               {          $imagePreview
}

                </div>

                <div className="form-group">
                    <input type="file" className="form-control" onChange={this.uploadSingleFile} />
                </div>
                <button type="button" className="btn btn-primary btn-block" onClick={this.upload}>Importer un vidéo</button>
            </form >
        )
    }
}