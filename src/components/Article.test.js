import React from 'react';
import { render, screen, waitFor }  from '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const propsArticle = {
    id: 5,
    headline: "Lambda School",
    createdOn: moment().subtract(Math.random()*10, "days").format(),
    author:"USA",
    image: 134,
    summary: "Triple-digit temperatures led to a spike in demand across the region.",
    body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
}

const propsArticleEmpty = {
    id: 5,
    headline: "Lambda School",
    createdOn: moment().subtract(Math.random()*10, "days").format(),
    author:"",
    image: 134,
    summary: "Triple-digit temperatures led to a spike in demand across the region.",
    body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home."   
}

test('renders component without errors', () => {
    render(<Article />)

})

test('renders headline, author from the article when passed in through props', ()=> {
// Arrange
    render(<Article article = {propsArticle} />)
// Act

// Assert
    await waitFor(() => {
        const itemHeadline = screen.findAllByText("Lambda School")
        const itemAuthor = screen.findAllByText("USA")

        expect(itemHeadline).toBeInTheDocument()
        expect(itemAuthor).toBeInTheDocument()
    })
});

test('renders "Associated Press" when no author is given', () => {

    // Arrange
    render(<Article article = {propsArticleEmpty} />)
    // Act
    const itemAuthor = screen.findAllByText("Associated Press")
    // Assert 
    expect( itemAuthor ).toBeInTheDocument() 
});

test('executes handleDelete when the delete button is pressed', async () => {
    // Arrange
    render(<Article/>)
    // Act
    
    const button = screen.findByRole("button")
    userEvent.click(button)

    //Assert
    
    await waitFor(() => {
        const item = screen.findById("headline")
        expect(item).not.toBeInTheDocument()
    })

});

//Task List:
//1. Complete all above tests. Create test article data when needed.