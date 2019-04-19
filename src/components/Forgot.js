import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import logo from '../images/rocket_logo_o.png';
import './Signup.css';

export default class Validator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                email: '',
                password: '',
            },
            submitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit() {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }

    render() {
        const { formData, submitted } = this.state;
        return (
            <div className="main-container">
            <Paper className="form-container">
            <img src={logo} className="logo" alt="Logo"></img>
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <Typography component="h1" variant="h5">Reset Password</Typography>
                <p>Enter your email address and we'll send you a reset confirmation email.</p>
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br/>
                <br/>
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >
                    {
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'Reset')
                    }
                </Button>
            </ValidatorForm>
            <br/>
            <br/>
            <Link to={'/signup'}>Go back to Log In</Link>
            </Paper>
            </div>
        );
    }
}