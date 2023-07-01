import React from 'react';

const Header = () => {
    return (
        <header className="py-5 bg-light border-bottom mb-4">
            <div className="container">
                <div className="text-center my-5">
                    <h1 className="fw-bolder">Добро пожаловать Quotes Book!</h1>
                    <p className="lead mb-0">Здесь вы найдете цитаты на все случаи жизни</p>
                </div>
            </div>
        </header>
    );
};

export default Header;