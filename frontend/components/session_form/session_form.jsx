import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoHandleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  demoHandleSubmit(e) {
    e.preventDefault();
    const user = {email: 'drkumasaka', password: '123456'};
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="error" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
  

  render() {
    return (

      <div className="background-img">
      <div className="netflix"></div>  
      <div className="black-overlay-flex"> 
        <div className="sign-in-bg">
            <h1 className='header-one-font'>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form">
            <br />
            <label>email:


          


              <br />
              <input className="login-input" type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="email"
                />
            </label>
            <br />
            <label>Password:
                <br /> 
              <input className="login-input" type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="password"
                />
            </label>
            <br /> 
            <button className="sign-in-button" type='submit' value={this.props.formType}>{this.props.formType}</button>
            <br /> 
            <br /> 
            <button className="demo-button" type='submit' onClick={this.demoHandleSubmit}>Demo</button>
            <br /> 
                {this.renderErrors()}
            <br />
            <div className="new-to-netflix">
                New to MyFlix? {this.props.navLink}
            </div>
          </div>
        </form>
      </div>

    </div>
    <div>

    </div>
    </div> 
 
    );
  }
}

export default SessionForm;
