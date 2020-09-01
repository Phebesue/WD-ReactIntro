import React from "react";
import fatArrowPict from "../../assets/arow2.jpg"
import reactJsPict from "../../assets/rjs2.png"
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

const FunctionalComponentDemo = () => {
  return (
    <Container className="main">
      <Row>
        <Col xs="12">
          {/* <div className="mainDiv"> */}
          <h1> React Functional Components</h1>

          <p>
            Functional components are the primary tool in React tobuild a small,
            modular piece of your page..
          </p>
          <dl>
            <dt>Can use state</dt>
            <dd>
              With the 'useState' hook, functional components can now contain
              State values within it. This gives you the ability to use internal
              data within the component, and when that data is changed it will
              cause a "re-render" of the component, refreshing data that is
              placed on the dom.
            </dd>
            <dt>No 'this' keyword</dt>
            <dd>
              React has what is called a 'class based component' where you use
              an ES6 javascript class object for your components. In order to
              store data specifically for that individual 'instance' of the
              class object, to refer to it's location it uses a keyword called
              'this'. Think of having multiple Image components, and you want to
              change the url that the second Image component is showing. In
              order to do that, you choose that component and it refreshes
              "it's" internal data. "This" means "me" when it comes to specific
              objects.
            </dd>
            <dt>Can use effects</dt>
            <dd>
              React components have different event moments through the
              lifecycle of the component. You can utililize the 'useEffect'
              react hook function to perform a specific task at one of those
              event moments. An example would be when your component is going to
              be mounted to the screen, maybe you would like to send a message
              to the server saying "this user is now on their profile page”.
              This is incredibly useful because you can update some data based
              on when some other thing updates. More on this later!
            </dd>
            <dt>return()</dt>
            <dd>
              Must return a single element, but this element may have nested
              elements inside.
            </dd>
          </dl>
        </Col>
      </Row>
      <hr />
      {/* <h1>Functional Syntax vs Arrow Function</h1> */}
      <h2>Challenge</h2>
      <hr />
      <Row>
        <Col md="6">
          <FatArrow className="logo" />
        </Col>
        <Col md="6">
          <ReactJs />
        </Col>
      </Row>
    </Container>
  );
};

const FatArrow = function () {
  return (
    <div>
      <Card>
        <img
          width="100%"
          height="280px"
          src={fatArrowPict}
          alt="Card cap"
        />
        <CardBody>
          <CardTitle>Fat Arrow </CardTitle>
          <CardSubtitle>A JS Library</CardSubtitle>
          <CardText>
            <pre>const HelloWorld = () => </pre>
          </CardText>
          <Button>Go elsewhere</Button>
        </CardBody>
      </Card>
    </div>
  );
};

const ReactJs = function () {
  return (
    <div>
      <Card>
        <img
          width="100%"
          height="280px"
          src={reactJsPict}
          alt="Card cap"
        />
        <CardBody>
          <CardTitle>Regular 'ole Function</CardTitle>
          <CardSubtitle>A JS Library</CardSubtitle>
          <CardText>
            <pre>const HelloWorld = function()</pre>
          </CardText>
          <Button>Go elsewhere</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default FunctionalComponentDemo;
