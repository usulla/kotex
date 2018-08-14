import React from 'react';
import PlayBtn from '../PlayBtn/PlayBtn.jsx';

const VideoFullPage = () => {
    return (
        <article className='videofullpage'>
        <div className='videofullpage-iframe'>
        </div>
           <PlayBtn iframesrc='//rutube.ru/play/embed/11266597'/>
        </article>
    );
};

export default VideoFullPage;