import React from 'react';
// import {Form} from 'react-bootstrap';
import 'materialize-css/dist/css/materialize.min.css';
function Form() {
    return (
        <div>
            
            <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea"></textarea>
          <label for="textarea1">Textarea</label>
        </div>
      </div>
    </form>
  </div>
        </div>
    )
}

export default Form;
