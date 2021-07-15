import {render, screen} from '@testing-library/react'
import { Provider } from 'react-redux'

import App from '../App';
import store from '../store'


test('should render Restaurant component', () => {
    render(<Provider store={store}><App /></Provider>);
    const restaurantElement = screen.getByTestId('app-test-id');
    expect(restaurantElement).toBeInTheDocument();
})