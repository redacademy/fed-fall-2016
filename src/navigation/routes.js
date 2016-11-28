import {
  createRouter,
} from '@exponent/ex-navigation';

import NavigationLayout from './NavigationLayout'
import About from '../components/About'

/**
  * This is where we map route names to route components. Any React
  * component can be a route, it only needs to have a static `route`
  * property defined on it, as in HomeScreen below
  */
export const Router = createRouter(() => ({
  navigationLayout: () => NavigationLayout,
  about: () => About,
}));

export default Router