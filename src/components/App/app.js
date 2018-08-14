document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth / window.innerHeight < 1.2) {
        document.body.classList.add('change');
        document.querySelector('.change-screen').classList.add('active');
    } else {
        if (document.querySelector('.change-screen')) {
            document.querySelector('.change-screen').classList.remove('active');
        }
    }

    if (window.innerWidth < 768 ){
          document.body.classList.add('scrollfix');
    }
});
window.addEventListener('resize', () => {
    if (window.innerWidth / window.innerHeight < 1.2) {
        document.querySelector('.change-screen').classList.add('active');
        document.body.classList.add('change');
    } else {
        if (document.querySelector('.change-screen')) {
            document.body.classList.remove('change');
            document.querySelector('.change-screen').classList.remove('active');
        }
    }
});