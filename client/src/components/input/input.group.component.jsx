import { InputGroup, FormControl, Button } from 'react-bootstrap';

export const EstimationNameInputGroup = (props) => (

    <form onSubmit={props.handleSubmit}>
        <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Estimation Name</InputGroup.Text>
            <FormControl
                aria-label="Estimation Project Name"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Estimation Project Name"
            />
            <Button variant="outline-secondary" id="button-addon2" type="submit" value="Submit">
                Add New Estimation
            </Button>
        </InputGroup>
    </form>
)