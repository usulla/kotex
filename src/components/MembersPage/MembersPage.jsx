import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import $ from "jquery";
import OwlItem from '../OwlItem/OwlItem.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MembersPage = ({listmembers}) => {
    return (
        <article className='memberpage'>
        <div className='center_block'>
        <div className='members__toggle-blocks'>
           <div className='members__block memberpage__toggle'>
           Участницы<br/> <span>конкурса</span>
           </div>
           <div className='winners__block memberpage__toggle'>
            Победительницы<br/> <span>конкурса</span>
            </div>
        </div>
        <div className="memberpage__container">
            <OwlCarousel options={options} className="owl-carousel">
                    {listmembers.map((item, index) => 
                      <OwlItem key={index} imgsrc={item}/>
                )
                }
            </OwlCarousel>
        </div>
         </div>
        </article>
    );
};
const options = {
    items: 5,
    nav: true,
    navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>'
    ],
    rows: true,
    rowsCount: 2,
    lazyLoad: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        480: {
            items: 2,
            nav: true
        },
        600: {
            items: 3,
            nav: true
        },
        800: {
            items: 4,
            nav: true
        },
        1024: {
            items: 5,
            nav: true
        }
    }
};
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(call2, 1000);
    window.addEventListener('resize', () => {
       call2(); 
    });

    function call2() {
        var membersCarousel;
        membersCarousel = document.querySelector('.memberpage__container');
        const membersToggle = document.querySelector('.members__toggle-blocks');
        const membersCarouselHeight = membersCarousel.offsetHeight + membersToggle.offsetHeight;
        var membersMarginTop = (window.innerHeight - membersCarouselHeight) / 2;
        if (membersMarginTop > 0) {
        membersToggle.style.marginTop = `${membersMarginTop}px`;
        }
    }
});
export default MembersPage;




