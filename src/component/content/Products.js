import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './Products.module.css'

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
                                    <a href="/" class="btn btn-primary">know More</a>
                                    <br />
                                    {/* <p className="card-text">{overview.slice(0, 150)}....</p> */}
                                    {/* <Modal movieId={id} BASE_URL={BASE_URL} API_KEY={API_KEY}></Modal> */}
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