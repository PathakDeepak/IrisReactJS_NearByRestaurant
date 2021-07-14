import {render, screen} from '@testing-library/react'
import HomePage from '../pages/HomePage/HomePage.component';


test('should render homePage component', () => {
    render(<HomePage />);
    const homePageElement = screen.getByTestId('todo-1');
    expect(homePageElement).toBeInTheDocument();
})
