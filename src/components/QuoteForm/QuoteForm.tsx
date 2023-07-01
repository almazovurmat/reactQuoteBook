import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {CATEGORIES} from "../../categories";
import {IQuote} from "../../types";

interface IProps {
    quote?: IQuote;
    onSubmit: (quote: IQuote) => void;
}
const QuoteForm: React.FC<IProps> = ({ quote, onSubmit }) => {
    const navigate = useNavigate();
    const [createOrUpdatedQuote, setCreateOrUpdatedQuote] = useState<IQuote>(quote || {
        author: '',
        category: '',
        text: '',
    });

    useEffect(() => {
        if (quote) {
            setCreateOrUpdatedQuote(quote);
        }
    }, [quote]);

    const inputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;

        setCreateOrUpdatedQuote((prevPost) => ({
            ...prevPost,
            [name]: value,
        }));
    };

    const submitData = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            if (quote) {
                onSubmit(createOrUpdatedQuote);
            } else {
                onSubmit(createOrUpdatedQuote);
            }

            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="w-75 mx-auto">
                <form onSubmit={submitData}>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <select name="category" className="form-select" id="category" onChange={inputChange} defaultValue={createOrUpdatedQuote.category}>
                            <option disabled>Выберите категорию</option>
                            {CATEGORIES.map((category) => (
                                <option key={category.id}
                                        value={category.id}
                                        selected={createOrUpdatedQuote.category === category.id}
                                >
                            {category.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">Автор</label>
                        <input name="author" type="text" className="form-control" id="author" value={createOrUpdatedQuote.author} onChange={inputChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Цитата</label>
                        <textarea name="text" className="form-control" id="text" rows={5} value={createOrUpdatedQuote.text} onChange={inputChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary my-5">{quote ? 'Отредактировать' : 'Добавить'}</button>
                </form>
            </div>
        </>
    );
};

export default QuoteForm;