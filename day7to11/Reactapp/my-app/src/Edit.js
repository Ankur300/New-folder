import { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
    function Edit(props) {
        
        const [traineeid, setTraineeid] = useState("");
        const [traineeName, setTraineeName] = useState("");
        const [traineeEmail, setTraineeEmail] = useState("");
        const [traineePassword, setTraineePassword] = useState("");
        const [clientName, setClientName] = useState("");

        let navigate = useNavigate();
        let  eid  = useParams();
        console.log(eid.editId);

        function handleSubmit(e) {
            e.preventDefault();
            var Tid = eid;
         
            var Tname = e.target.tname.value
            var Temail = e.target.temail.value
            var Tpassword = e.target.tpassword.value
            var Cname = e.target.cname.value
            setClientName(Cname);
            setTraineeEmail(Temail);
            setTraineeName(Tname);
            setTraineePassword(Tpassword);
            setTraineeid(Tid);

            const user = JSON.stringify({
                traineeName: Tname,
                traineeEmail: Temail,
                traineePassword: Tpassword,
                clientName: Cname
            });
            console.log(user);
            const headers={
                'Acess-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'
            }
            axios.put(`https://javamongobrilliotraining.herokuapp.com/api/v1/trainee/update/${eid.editId}`, user,{headers:headers})
                .then((res) => {
                    alert('Details edited  ');
                    console.log(res);
                    console.log(res.data);
                });
        }

        return (


            <div className="container" style={{
                backgroundColor: "Grey",
            }}>
<h2>Edit Details</h2>
                <Form onSubmit={handleSubmit}>


             
                    <Form.Group className="mb-3 col-6  " controlId="tname">
                        <Form.Label>Trainee Name</Form.Label>
                        <Form.Control type="text" placeholder="Trainee Name" />

                    </Form.Group>
                    <Form.Group className="mb-3 col-6" controlId="temail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3 col-6" controlId="tpassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-6  " controlId="cname">
                        <Form.Label>Client Name</Form.Label>
                        <Form.Control type="text" placeholder="Client Name" />

                    </Form.Group>



                    <Form.Group className="mb-3 col-4" >
                        <Button variant="primary" className="mb-3 col-4 mr-2 mx-4 " type="submit">  Submit
                        </Button>
                    </Form.Group>


                </Form>
            </div>
        );
    }

    export default Edit;
