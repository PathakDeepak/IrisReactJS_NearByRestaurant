import {render, screen} from '@testing-library/react'
import { Provider } from 'react-redux'
import store from "../store"

import HomePage from '../pages/HomePage/HomePage.component';


describe('With React Testing Library', () => {
  
    it('Shows "Best Restaurant Near You" if Home Page render correctly', () => {
      const { getByText } = render(<Provider store={store}><HomePage /></Provider>)
  
      expect(getByText('Best Restaurant Near You')).not.toBeNull()
    })
  })
