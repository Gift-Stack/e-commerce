import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Flex,
  theme,
  Image,
  Container,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Navbar } from './components/layouts/Navbar';
import { Body } from './components/layouts/Body';
import Cart from './components/routes/Cart';

export const App = () => (
  <Router>
    <ChakraProvider theme={theme}>
      <Box textAlign='center' fontSize='xl'>
        <Navbar />
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <React.Fragment>
                <Body />
              </React.Fragment>
            )}
          />
          <Route path='/cart' component={Cart} />
        </Switch>
      </Box>
    </ChakraProvider>
  </Router>
);
