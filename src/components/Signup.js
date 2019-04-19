import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import logo from '../images/rocket_logo_o.png';
import './Signup.css';

export default class Signup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                name: '',
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
        this.props.history.push('/events');
        this.mounted = false;
        return fetch('https://wlln33rch5.execute-api.us-east-2.amazonaws.com/default/cognito-signup', {
            method: "POST",
            body: JSON.stringify(this.state.formData),
        }).then(response => response.json());  
    }

    componentDidMount(){
        this.mounted = false;
        if(this.mounted){
            this.handleSubmit();
        }
    }

    componentWillUnmount(){
        this.mounted = false;
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
                <Typography component="h1" variant="h5">Sign Up</Typography>
                <TextValidator
                    label="Name"
                    onChange={this.handleChange}
                    name="name"
                    value={formData.name}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br />
                <TextValidator
                    label="Password"
                    onChange={this.handleChange}
                    name="password"
                    value={formData.password}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <br />
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >
                    {
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'Sign Up')
                    }
                </Button>
            </ValidatorForm>
            <br/>
            <br/>
            Already have an account? <Link to={'/login'}>Log In Here</Link>
            </Paper>
            </div>
        );
    }
}