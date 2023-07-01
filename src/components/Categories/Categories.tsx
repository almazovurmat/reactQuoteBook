import React from 'react';
import {NavLink} from "react-router-dom";
import {CATEGORIES} from "../../categories";

const Categories = () => {
    return (
        <div className="card mb-4">
            <div className="card-header">Categories</div>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-6">
                        <ul className="list-unstyled mb-0">
                            <li key="all">
                                <NavLink to={`/quotes`}>Все цитаты</NavLink>
                            </li>
                            {
                                CATEGORIES.slice(0, Math.ceil(CATEGORIES.length / 2)).map(category => (
                                    <li key={category.id}>
                                        <NavLink to={`/quotes/${category.id}`}>{category.title}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <ul className="list-unstyled mb-0">
                            {
                                CATEGORIES.slice(Math.ceil(CATEGORIES.length / 2)).map(category => (
                                    <li key={category.id}>
                                        <NavLink to={`/quotes/${category.id}`}>{category.title}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;