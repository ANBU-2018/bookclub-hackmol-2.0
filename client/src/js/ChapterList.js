import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../css/ChapterList.css'
import { ChapterName } from '../redux/action';

function ChapterList({chapterNo,chapterName}) {
    const dispatch = useDispatch();
    const history=useHistory();
    const chapter=()=>{
        dispatch(ChapterName(chapterName));
        history.push(`/Chapter/${chapterNo}`)
    }
    return (
        <div className='chapterList' onClick={chapter}>
            <h5>Chapter-{chapterNo}</h5>
            <h5>{chapterName}</h5>
        </div>
    )
}

export default ChapterList
