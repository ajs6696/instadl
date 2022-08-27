import React, { useState, useEffect } from 'react';

const Main = () => {
    return (
        <>
            <div className='col-md-6 col-sm-4 col-3'>
                <label>Enter Video URL</label>
                <input className="form-control" type="text" id="url" placeholder='https://www.instagram.com/tv/B64xxMBJXdq/' />
                <button className='btn'>GET</button>
            </div>
        </>
    )
};
export default Main;
