import React from 'react';
import { Jumbotron as Jumbo} from 'react-bootstrap';
//import { Jumbotron as Jumbo} from 'react-bootstrap';
import styled from 'styled-components';
import HomePageImage from '../../../app/assets/Jumbotron.jpg';

const Styles = styled.div`
 .jumbo {
     background: url(${HomePageImage}) no-repeat fixed bottom;
     background-size: cover;
     color: #efefef;
     height: 300px;
     position: relative;
     z-index: -2;
 }
 .overlay {
     background-color: #000;
     opacity: 0.6;
     position: absolute;
     top: 0;
     left: 0;
     bottom: 0;
     right: 0;
     z-index: -1;
 }
.h1 {
    position: absolute;
    top: 70%;
    left: 30%;
    }     
`;

export const Jumbotron = () => (
<Styles>
    <Jumbo fluid className="jumbo">
    <div className="overlay"></div>
    {/* <container> */}
       <div className="h1">
       <h1>Where World Meets Investors</h1>
       </div>
    {/* </container> */}
    </Jumbo>
</Styles>
)

export default Jumbotron;

