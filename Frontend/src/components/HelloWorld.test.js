import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import HelloWorld from './HelloWorld';

// Mock fetch globally for all tests
global.fetch = require('jest-fetch-mock');

describe('HelloWorld Component', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('should fetch and display the Hello World message', async () => {
        // Mock the GET request response
        fetch.mockResponseOnce(JSON.stringify('Hello World!'));

        render(<HelloWorld />);

        // Simulate button click to fetch data
        fireEvent.click(screen.getByText('Fetch Hello World'));

        // Wait for the async action and check the result
        const response = await screen.findByText('Hello World!');
        expect(response.textContent).toBe('Hello World!');
        expect(fetch).toHaveBeenCalledWith('http://localhost:8000/api/helloWorld');
    });

    it('should post a name and display the response', async () => {
        const name = 'John';
        const responseMessage = `Hello ${name}!`;

        // Mock the POST request response
        fetch.mockResponseOnce(JSON.stringify(responseMessage));

        render(<HelloWorld />);

        // Simulate input change
        fireEvent.change(screen.getByPlaceholderText('Enter a name'), {
            target: { value: name },
        });

        // Simulate button click to post data
        fireEvent.click(screen.getByText('Post Name'));

        const response = await screen.findByText(responseMessage);
        expect(response.textContent).toEqual(responseMessage);
        expect(fetch).toHaveBeenCalledWith(`http://localhost:8000/api/${name}`, { method: 'POST' });
    });
});
