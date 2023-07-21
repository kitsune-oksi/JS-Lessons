import React from 'react'
import './lesson_4';
import { createPromiseHandle, rejectPromiseHandle, resolvePromiseHandle } from './lesson_4';

const Lesson4 = () => {
    return (
        <div>
            <button id='btn-create-promise' onClick={createPromiseHandle}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={resolvePromiseHandle}>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={rejectPromiseHandle}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;