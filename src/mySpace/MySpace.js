import React, { useState } from 'react'
import './mySpace.css'
import data from './dataBase.json'
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { useNavigate } from 'react-router-dom';


export default function MySpace() {
    let navigate = useNavigate();
    let tableHead = Object.keys(data[0]);
    let tableRows = Object.values(data);

    function logOut() {
        localStorage.removeItem("isAuth");
        navigate('/login')
    }

    return ( //пока нет изменения/проверки роли и авторизации, нужно понять как вытягивать значение isAuth из Login.js и "экспортировать"
        <div className='mySpace' >
            <div className='buttomOut'>
                {localStorage.getItem('User')}
                <button className='logOut' onClick={() => { logOut() }} >
                    Выйти
                </button>
            </div>
            <div className='main' >
                <div >
                    <h1>
                        Таблица на моей странице
                    </h1>
                </div>
                <div>
                    <table>
                        <thead>
                            {tableHead.map((newHead, index) => { return <th key={index} >{newHead}</th> })}
                        </thead>
                        <tbody>
                            {tableRows.map((newRow, index) => { return <tr key={index}> {Object.values(newRow).map((cell, index) => { return <td key={index}>{cell}</td> })}</tr> })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )


}



