import { default as SearchForm } from '.';
import { screen } from '@testing-library/react';

describe('form renders and API is called', ()=>{

    let fetchGitMock;
    beforeEach(() => {
        fetchGitMock = jest.fn();
        render(<SearchForm fetchGit={fetchGitMock}/>);
    });
    test('rendering the form', ()=>{
        let form = screen.getByRole('form');
        expect(form).toBeInTheDocument();;
    });
    // test('it calls the gitAPI', () => {
    //     let gitInput = screen.getByLabelText('username');
    //     userEvent.type(gitInput, "cerise-at{enter}")
    //     expect(fetchGitMock).toHaveBeenNthCalledWith(1, 'cerise-at');
    // });
});