import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';


class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: '',
            touched :{
                firstName:false,
                lastName:false,
                phoneNum:false,
                email:false
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
        this.handleBlur =this.handleBlur.bind(this)
    }

    validate(firstName,lastName,phoneNum,email){
        const error={
            firstName:"",
            lastName:"",
            phoneNum:"",
            email:""
        }
        if (this.state.touched.firstName){
            if (firstName.lenght < 2){
                error.firstName = `First name must be atleat 2 character`;
            }
            else if (firstName.length > 15){
                error.firstName="first name must be 15 and less";
            }
        }
        if (this.state.touched.lastName){
            if (lastName.lenght < 2){
                error.lastName = `First name must be atleat 2 character`;
            }
            else if (lastName.length > 15){
                error.lasttName="first name must be 15 and less";
            }
        }
        const  reg = / ^\d+$/;
        if (this.state.touched.phoneNum && !reg.test(phoneNum)){
            error.phoneNum="it should contain numbers";
        }
        if (this.state.touched.email && !email.includes("@"))
        {
            error.email="email should contain @";
        }
        return error;
    }
    handleBlur = (field) =>()=>{
        this.setState({
            touched : {...this.state.touched, [field]:true}

        });
    } 
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
    
        this.setState({
          [name]: value
        });
    }
    handleSubmit(event){
        console.log(`current state is:`+ JSON.stringify(this.state));
        alert(`Current state is : `+JSON.stringify(this.state));
        event.preventDefault();
    }
    render()
    {
    const error = this.validate(this.state.firstName,this.state.lastName,this.state.phoneNum,this.state.email);
        
            return (
                
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                            </Breadcrumb>
                                
                            <h2>Contact Us</h2>
                            <hr />
                        </div>
                    </div>
        
                    <div className="row row-content align-items-center">
                        <div className="col-sm-4">
                            <h5>Our Address</h5>
                            <address>
                                1 Nucamp Way<br />
                                Seattle, WA 98001<br />
                                U.S.A.
                            </address>
                        </div>
                        <div className="col">
                            <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone"></i> 1-206-555-1234</a><br />
                            <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o"></i> campsites@nucamp.co</a>
                        </div>
                    </div>
                
                <div className="row row-content">
                <div className="col-12">
                   <h2>Send us your Feedback</h2>
                   <hr />
                </div>
                 <div className="col-md-10">
                     <Form onSubmit={this.handleSubmit}>
                         <FormGroup row>
                             <Label htmlFor="firstName" md={2}>First Name</Label>
                             <Col md={10}>
                                 <Input type="text" id="firstName" name="firstName"
                                     placeholder="First Name"
                                     value={this.state.firstName}
                                     invalid={error.firstName}
                                     onChange={this.handleInputChange} 
                                     onBlur={this.handleBlur("firstName")}
                                     />
                                     <FormFeedback>{error.firstName}</FormFeedback>
                                     
                             </Col>
                         </FormGroup>
                         <FormGroup row>
                             <Label htmlFor="lastName" md={2}>Last Name</Label>
                             <Col md={10}>
                                 <Input type="text" id="lastName" name="lastName"
                                     placeholder="Last Name"
                                     value={this.state.lastName}
                                     invalid={error.lastName}
                                     onChange={this.handleInputChange}
                                        onBlur= {this.handleBlur("lastName")}
                                        />
                                        <FormFeedback>{error.lastName}</FormFeedback>   
                             </Col>                        
                         </FormGroup>
                         <FormGroup row>
                             <Label htmlFor="phoneNum" md={2}>Phone</Label>
                             <Col md={10}>
                                 <Input type="tel" id="phoneNum" name="phoneNum"
                                     placeholder="Phone number"
                                     value={this.state.phoneNum}
                                     invalid={error.phoneNum}
                                     onChange={this.handleInputChange}
                                     onBlur={this.handleBlur("phoneNum")}
                                     />
                                     <FormFeedback>{error.phoneNum}</FormFeedback> 
                             </Col>
                         </FormGroup>
                         <FormGroup row>
                             <Label htmlFor="email" md={2}>Email</Label>
                             <Col md={10}>
                                 <Input type="email" id="email" name="email"
                                     placeholder="Email"
                                     value={this.state.email}
                                     invalid={error.email}
                                     onChange={this.handleInputChange}
                                     onBlur={this.handleBlur("email")}
                                     />
                                     <FormFeedback>{error.email}</FormFeedback>
                             </Col>
                         </FormGroup>
                         <FormGroup row>
                             <Col md={{size: 4, offset: 2}}>
                                 <FormGroup check>
                                     <Label check>
                                         <Input type="checkbox"
                                             name="agree"
                                             checked={this.state.agree}
                                             onChange={this.handleInputChange} /> {' '}
                                         <strong>May we contact you?</strong>
                                     </Label>
                                 </FormGroup>
                             </Col>
                             <Col md={4}>
                                 <Input type="select" name="contactType"
                                         value={this.state.contactType}
                                         onChange={this.handleInputChange}>
                                     <option>By Phone</option>
                                     <option>By Email</option>
                                 </Input>
                             </Col>
                         </FormGroup>
                         <FormGroup row>
                             <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                             <Col md={10}>
                                 <Input type="textarea" id="feedback" name="feedback"
                                     rows="12"
                                     value={this.state.feedback}
                                     onChange={this.handleInputChange}></Input>
                             </Col>
                         </FormGroup>
                         <FormGroup row>
                             <Col md={{size: 10, offset: 2}}>
                                 <Button type="submit" color="primary">
                                     Send Feedback
                                 </Button>
                             </Col>
                         </FormGroup>
                     </Form>
                 </div>
             </div>
         </div>
        
        );
 }  
        
            
        

}      
   

export default Contact;