import React from 'react';
import {isAuthorized} from '../../utilities/authorizer.jsx';
import ServiceInstanceField from "./service-instance-field.jsx"
class ServiceInstanceFields extends React.Component {

    render () {
        return (
            <div className="service-instance-box">
                <div className="service-instance-box-title">
                    <span>Request Details</span>
                </div>
                <div className="service-instance-box-content">
                    <span className="m-b-20 block label color-grey-600">Information collected from customer.</span>
                    <div className="row">
                        {this.props.instanceProperties.map( field => {
                            if(field.data) {
                                return (<div className="form-group form-group-flex"><br/><ServiceInstanceField key={"item-" + field.id} field={field}/></div>)
                            }

                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default ServiceInstanceFields;
