import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './Products.module.css';
import { Link } from "react-router-dom";

function Products() {
    const [first, setfirst] = useState([])
    useEffect(() => {
        let value = fetch("https://sleepy-ravine-13644.herokuapp.com/api");
        value.then((data) => data.json()).then((output) => setfirst(output))
    }, [])

    return (
        <main>
            <div className='container text-center'>
                <div className="row my-2">
                    {first.map((element) => {
                        return <div className="col-xl-4 col-xl-4 col-sm-6" key={element.id}>
                            <div className="card my-3">
                                <img classname={styles.image} src={element.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title my-2">{element.title}</h5>
                                        <div className="btn btn-primary">know More</div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </main>
    )
}

export default Products