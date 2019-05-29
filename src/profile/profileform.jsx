import React, { Component } from 'react';
import EntityClassification from './EntityClassification';
import EntityAccountType from './EntityAccountType';
import EntitySubType from './EntitySubType';
import EntityBusinessAddress from './EntityBusinessAddress';
import EntityHomeAddress from './EntityHomeAddress';
import EntityIntrestedParty from './EntityIntrestedParty';
import EntityTeamNomination from './EntityTeamNomination';
import EntityConfirm from './EntityConfirm';
import EntitySuccess from './EntitySuccess';

export class profileform extends Component {
   state = {
       step: 1,
       Entity_Classification_Individual:'',
       Entity_Classification_Individual_Company: '' 
   }
  // proceed to next step
   nextStep = () => {
       const { step } = this.state;
       this.setState({
           step: step + 1
       });
   }
  // Go Back next step
   prevStep = () => {
    const { step } = this.state;
    this.setState({
        step: step - 1
    });
}

   // Handle fields change

   handleChange = input => e => {
       this.setState({[input]: e.target.value});
   }


    render() {
       const { step } = this.state;
       const { Entity_Classification_Individual,Entity_Classification_Individual_Company} = this.state;
       const values = {Entity_Classification_Individual,
       Entity_Classification_Individual_Company}
     switch(step) {
            case 1:
             return (
                 < EntityClassification
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
                  />
             );
             case 2:
              return (
                < EntityAccountType
                 nextStep={this.nextStep}
                 prevStep={this.prevStep}
                 handleChange={this.handleChange}
                 values={values}
                 />
            );
             case 3:
             return (
                < EntitySubType
                 nextStep={this.nextStep}
                 prevStep={this.prevStep}
                 handleChange={this.handleChange}
                 values={values}
                 />
            );
             case 4:
             return (
                < EntityBusinessAddress 
                 nextStep={this.nextStep}
                 prevStep={this.prevStep}
                 handleChange={this.handleChange}
                 values={values}
                 />
            );
             case 5:
             return (
                < EntityHomeAddress
                 nextStep={this.nextStep}
                 prevStep={this.prevStep}
                 handleChange={this.handleChange}
                 values={values}
                 />
            );
             case 6:
             return (
                < EntityIntrestedParty
                 nextStep={this.nextStep}
                 prevStep={this.prevStep}
                 handleChange={this.handleChange}
                 values={values}
                 />
            );
             case 7:
             return (
                < EntityTeamNomination
                 nextStep={this.nextStep}
                 prevStep={this.prevStep}
                 handleChange={this.handleChange}
                 values={values}
                 />
            );
            case 8:
            return (
                < EntityConfirm
                 nextStep={this.nextStep}
                 prevStep={this.prevStep}
                 values={values}
                 />
            );
             case 9:
             return(
                < EntitySuccess
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                />
             )
             default: return null;

     }   
    }
}

export default profileform
