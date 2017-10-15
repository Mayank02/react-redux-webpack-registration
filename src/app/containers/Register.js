import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser, resetValidationMessage } from '../actions';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import constants from '../utils/constant';

class Register extends Component {
    constructor(props) {
        super(props);
    }

    onRegister(event) {
        event.preventDefault();

        const refs = this.refs;
        const user = {
            email: refs.email.value,
            password: refs.password.value,
            dob: refs.dob.value
        };

        this.props.actions.registerUser(user, this.refs.registerForm);
    }

    onChangeInput() {
        this.props.actions.resetValidationMessage();
    }

    renderAlertMessage() {
        let successMsg;
        let errorMsg;

        if(this.props.registration.validationError) {
            errorMsg = this.props.registration.validationError.message;
        } else if(this.props.registration.registeredUser && this.props.registration.registeredUser.id) {
            successMsg = constants.REGISTRATION_SUCCESS_MSG;
        }

        const alertMessage = errorMsg || successMsg;
        const alertCls = classNames('alert', { 'alert-success': successMsg, 'alert-danger': errorMsg });

        return (<div className={alertCls} role="alert">{ alertMessage }</div>);
    }

    render() {
        return (
            <section className="register">
                <section className="register-form-wrapper col-sm-10 col-md-10 col-lg-8">
                <form className="register-form" ref="registerForm" onSubmit={ (event) => this.onRegister(event) }>
                    <div className="getting-started">
                        <h3>Get started with HCL.</h3>
                    </div>

                    { this.renderAlertMessage() }
                    <div className="form-element col-12">
                        <label htmlFor="email">{constants.EMAIL}</label>
                        <input type="email" className="form-control form-control-lg" id="email" name="email" placeholder="name@company.com" required onChange={ () => this.onChangeInput() } autoFocus ref="email"/>
                    </div>
                    <div className="form-element col-12">
                        <label htmlFor="password">{constants.PASSWORD}</label>
                        <input type="password" className="form-control form-control-lg" id="password" name="password" required onChange={ () => this.onChangeInput() } ref="password"/>
                    </div>
                    <div className="form-element col-12">
                        <label htmlFor="dob">{constants.DOB}</label>
                        <input type="date" className="form-control form-control-lg" id="dob" name="dob" required onChange={ () => this.onChangeInput() } ref="dob"/>
                    </div>
                    <div className="buttons">
                        <button className="btn btn-primary" type="submit">{constants.CONTINUE}</button>
                    </div>
                    <div className="form-element col-12">
                        <p className="footer"> {constants.AGREEMENT} <a href="#">{constants.TERM_CONDITION}</a></p>
                    </div>
                </form>
                </section>
            </section>
        );
    }
}

Register.propTypes = {
    email: React.PropTypes.string,
    password: React.PropTypes.string,
    registration: React.PropTypes.object,
    actions: React.PropTypes.object
};

Register.defaultProps = {
    email: '',
    password: '',
    registeredUser: null,
    validationError: null
};

function mapStateToProps(state) {
    return {
        ...state,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            registerUser,
            resetValidationMessage
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
