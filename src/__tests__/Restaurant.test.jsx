import {render, screen} from '@testing-library/react'
import Restaurant from '../components/Restaurant.component';


test('should render Restaurant component', () => {
    render(<Restaurant />);
    const restaurantElement = screen.getByTestId('restaurant-test-id');
    expect(restaurantElement).toBeInTheDocument();
})