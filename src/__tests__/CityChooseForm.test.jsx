import {render, screen} from '@testing-library/react'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import CityChooseForm from '../components/CityChooseForm.component'




describe('With React Testing Library', () => {
    const initialState = {output:10}
    const mockStore = configureStore()
    let store,wrapper
  
    it('Shows "Select City" if cityChoose form render correctly', () => {
      store = mockStore(initialState)
      const { getByText } = render(<Provider store={store}><CityChooseForm /></Provider>)
  
      expect(getByText('Select City')).not.toBeNull()
    })
  })
