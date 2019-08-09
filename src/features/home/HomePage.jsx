import React, { Fragment,container } from 'react';
import './../../app/assets/styles.css'
import Carrousel from '../../app/layout/components/Carrousel';
import Footer from  './Footer';


import {
  Segment,
  Container,
  Header,
  Image,
  Button,
  Icon
} from 'semantic-ui-react';
import NavBar from '../../features/nav/NavBar/NavBar';
// import Jumbotron from '../../app/layout/components/Jumbotron'

const HomePage = ({history}) => {
  return (
    <Fragment>
    <NavBar />
    {/*<Jumbotron /> */}
    {/* <div style={{position:'relative'}}> */}
    <container style={{position:'relative'}}>
    
     <Carrousel/>
   
    </container>
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container text>
        <Header as='h1' >
          <Image
            size='massive'
            src={require('../../app/assets/user.png')}
            alt='logo'
            style={{ marginBottom: 12 }}
          />
          NII
        </Header>
        <Button size='huge' color='blue' inverted onClick={() => history.push('/Login')}>
          Get started
          <Icon name='right arrow'/>
        </Button>

        <Header as='h2' textAlign='left'  >
          <Image
            size='massive'
            src={require('../../app/assets/Connect.jpg')}
            alt='logo'
            style={{ marginBottom: 12,
                     marginLeft: 0, 
                     marginTop: 1
                    }}
          />
        Welcome to your Alternative Investment Community
        </Header>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Header as='h2' textAlign='right' >
          <Image
            size='massive'
            src={require('../../app/assets/Alternative_Investments.jpg')}
            alt='logo'
            style={{ marginBottom: 12 }}
          />
        Learn About Alternatives
        </Header>
        <br />
        <br />
        <br />
        <br />
        <br />

        <Header as='h2' textAlign='left' >
          <Image
            size='massive'
            src={require('../../app/assets/Providers.jpg')}
            alt='logo'
            style={{ marginBottom: 12 }}
          />
        Connect With Instrument
        Provider/Investor
        </Header>
        <br />
        <br />
        <br />
        <br />
        <br />

        <Header as='h2' textAlign='left' >
          <Image
            size='massive'
            src={require('../../app/assets/Discuss.jpg')}
            alt='logo'
            style={{ marginBottom: 12 }}
          />
       Talk /Discussion/Publish within community
        </Header>
        <br />
        <br />
        <br />
        <br />
        <br />

        <Header as='h2' textAlign='right' >
          <Image
            size='massive'
            src={require('../../app/assets/Wealth_Management_Firm_img.jpg')}
            alt='logo'
            style={{ marginBottom: 12 }}
          />
       Conduct Participate in Events
        </Header>
        
        </Container>
        <Footer />
    </Segment>
    </Fragment>
  );
};

export default HomePage;

