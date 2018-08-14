import React, { Component } from 'react';
import HeaderBlock from '../HeaderBlock/HeaderBlock.jsx';
import VideoFullPage from '../VideoFullPage/VideoFullPage.jsx';
import ContestPage from '../ContestPage/ContestPage.jsx';
import PrizesPage from '../PrizesPage/PrizesPage.jsx';
import MembersPage from '../MembersPage/MembersPage.jsx';
import TestPage from '../TestPage/TestPage.jsx';
import PacksPage from '../PacksPage/PacksPage.jsx';
import Footer from '../Footer/Footer.jsx';
import Nav from '../Nav/Nav.jsx';
import change_or_girl from '../../images/change_or_girl.png';
import {SectionsContainer, Section, Header} from 'react-fullpage';
// import dataSkills from '../../data/dataskills.js';
import './app.js';

class App extends Component {
    render() {
     let options = {
      responsiveWidth: 900,
      sectionClassName:'section',
      anchors:['sectionOne', 'sectionTwo', 'sectionThree', 'section4', 'section5', 'section6', 'section7', 'section8'],
      scrollBar:            false,
      navigation:           false,
      arrowNavigation:      false,
      scrollCallback: (states) => {
        if (states.activeSection != 0){
        document.querySelector('.menu').classList.add('small');
        document.querySelector('.logo').classList.add('small');
        }
        else{
        document.querySelector('.menu').classList.remove('small');
        document.querySelector('.logo').classList.remove('small');
        }
       }
      }
     
        return (
            <div>
            <Header><Nav list={[['Конкурс','sectionThree'],['Тест','section6'],['История успеха','sectionTwo'],['О продукте', 'section8']]}/> </Header>
            <SectionsContainer className="container" {...options}>
                <Section><HeaderBlock/></Section>
                <Section><VideoFullPage/></Section>
                <Section><ContestPage listmembers={listMembers}/></Section>
                <Section><PrizesPage/></Section>
                <Section><MembersPage listmembers={listMembers}/></Section>
                <Section><TestPage datatest={dataTest} dataresults={dataResults}/></Section>
                <Section><PacksPage/></Section>
                <Section><Footer/></Section>
            </SectionsContainer>
            </div>
   
        );
    }
}
const listMembers = ['http://www.cruzo.net/user/images/k/6befd660cb87fdaec9c9c6908a10523f_136.jpg', 'http://www.cruzo.net/user/images/k/6befd660cb87fdaec9c9c6908a10523f_136.jpg', 'http://www.cruzo.net/user/images/k/6befd660cb87fdaec9c9c6908a10523f_136.jpg', 'http://www.cruzo.net/user/images/k/6befd660cb87fdaec9c9c6908a10523f_136.jpg', 'http://www.cruzo.net/user/images/k/6befd660cb87fdaec9c9c6908a10523f_136.jpg', 'http://www.cruzo.net/user/images/k/6befd660cb87fdaec9c9c6908a10523f_136.jpg','http://www.cruzo.net/user/images/k/6befd660cb87fdaec9c9c6908a10523f_136.jpg','http://www.cruzo.net/user/images/k/6befd660cb87fdaec9c9c6908a10523f_136.jpg','http://www.cruzo.net/user/images/k/6befd660cb87fdaec9c9c6908a10523f_136.jpg','http://www.cruzo.net/user/images/k/6befd660cb87fdaec9c9c6908a10523f_136.jpg','http://www.cruzo.net/user/images/k/6befd660cb87fdaec9c9c6908a10523f_136.jpg'];

const dataResults = [{
        'qnum': 1,
        'title':['Ты победитель', 'шоу'],
        'description': 'Твое обаяние сразило телезрителей, а твое мастерство не оставило равнодушным наставников! Ты настолько уверена в себе и своих силах, что легко могла бы стать победителем шоу «ТАНЦЫ» и носить гордое звание лучшего танцовщика страны! Благодаря Kotex ты можешь чувствовать комфорт и уверенность на все 100 и доказать всем, что девчонки могут все!'
    },
    { 'qnum': 2,
        'title':['Ты финалист', 'шоу'],
        'description': 'Тебе не хватило всего одного шага до победы, но ты все равно молодец, ведь ты оказалась среди лучших! Ты дошла до финала шоу и это повод гордиться собой. Kotex дарит тебе комфорт и уверенность на все 100! Докажи всем, что девчонки танцуют не хуже парней!'
    },
    { 'qnum': 3,
        'title':['Ты дошла до середины', 'шоу'],
        'description': 'И это уже большой прорыв. Ты преодолела множество испытаний и обошла многих соперников, и, к тому же, у тебя осталось еще куча сил, чтобы в следующем году попробовать еще раз и на этот раз дойти до финала и победить. Девчонки могут все, ведь Kotex дарит комфорт и уверенность на все 100!'
    },
        { 'qnum': 4,
        'title':['Ты зажгла на кастингах', 'шоу'],
        'description': 'К сожалению, ты не стала победителем и даже не попала ни в одну из команд, но твое зажигательное выступление на кастингах еще долго будут обсуждать в социальных сетях, а наставники точно тебя запомнят. Соберись, и в следующем сезоне ты точно сможешь пройти дальше, ведь такие девчонки, как ты, не привыкли сдаваться! А благодаря Kotex ты можешь всегда чувствовать комфорт и уверенность на все 100!'
    },
        { 'qnum': 5,
                'title':['Твое место в зрительном', 'зале шоу'],
        'description': 'Признайся честно, смотреть на танцы тебе нравится намного больше, чем принимать участие в сложных кастингах и отборах. Да и танцовщикам на сцене очень нужна твоя поддержка. Продолжай поддерживать девчонок и смотри любимое шоу, удобно устроившись перед экраном телевизора, а  Kotex подарит тебе комфорт и уверенность на все 100!'
    }
]
const dataTest = [{
        'qnum': 1,
        'question': 'На этапе кастингов во время твоего танца что-то случилось, и музыка перестала играть. Что ты сделаешь?',
        'answers': [['Я уверена в себе на все 100, поэтому продолжу танцевать, ведь музыка внутри', 2] , ['Остановлюсь и продолжу заново, когда заиграет музыка', -2], ['Возможно, меня это на несколько секунд собьет, но я не остановлюсь и продолжу танцевать', 0]]
    },
    { 'qnum': 2,
        'question': 'Тебе дают задание станцевать тот стиль танца, который тебе совершенно не подходит. Как ты отреагируешь?',
        'answers': [['Попрошу наставника войти в положение и поменять задание', 0], ['Сделаю все возможное, чтобы станцевать максимально хорошо', 2], ['Не буду танцевать, чтобы не позориться', -2]]
    },
        {'qnum': 3,
        'question': 'Представь, что ты пришла на кастинг в дуэте, и после вашего выступления наставники предлагают пройти дальше только тебе.',
        'answers': [['Ни за что не оставлю своего партнера, мы команда!', -2], ['Соглашусь на условия наставников, такой шанс выпадает лишь раз в жизни', 2], ['Поговорю с партнером, такое решение необходимо принимать совместно', 0]]
    },   
        {'qnum': 4,
        'question': 'Ты очень хотел попасть к одному наставнику, но в команду тебя берет другой. Как ты к этому отнесешься?',
        'answers': [['Мне будет комфортно в любой команде, ведь главное, что я в ТАНЦАХ!', 2], ['Расстроюсь, но виду не покажу. Буду усердно работать и получать опыт', 0], ['Откажусь от участия в проекте', -2]]
    },
        {'qnum': 5,
        'question': 'Прямо во время выступления твой партнер случайно роняет тебя, когда наставники спросят, что это было, что ты ответишь?',
        'answers': [['Партнёр допустил ошибку, я тут ни при чем', 0], ['Это элемент танца, так было задумано', 2], ['Сцена у вас какая-то неровная, вот он и оступился!', -2]]
    }

]

export default App;