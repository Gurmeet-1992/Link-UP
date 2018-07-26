import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/text_field_group';

class CreateProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayScialInputs:false,
            handle:'',
            company:'',
            website:'',
            location:'',
            status:'',
            skills:'',
            githubusername:'',
            bio:'',
            twitter:'',
            facebok:'',
            linkedin:'',
            youtube:'',
            instagram:'',
            errors:{}

        }
    }
  render() {
    return (
      <div className='create-profile'>
        <div className="container">
            <div className="row">
                <div class="col-md-8 m-auto">
                <h1 class="display-4 text-center">Create Your Profile</h1>
                <p class="lead text-center">Let's get some information to make your profile stand out</p>
                <small class="d-block pb-3">* = required field</small>
                </div> 
            </div>
        </div> 
      </div>
    )
  }
}
CreateProfile.propTypes = {
    profile:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
}
const mapStatToProps = (state) =>({
    profile:state.profile,
    errors:state.errors
})

export default connect(null)(CreateProfile);
