const quotes = [
  `Hi Hi B ~
Ca fait longtemps donc j'avais envie de type un petit truc ooops 
[...]`,
  `To be honest, you completely shook off my life & my routines.
[...]`,
  `Celle là, elle est un peu plus personnelllle, tsais que mes premières soirées enjoyables, c'était avec toiii? 
Mes premières cuites, mes premiers vomis, mes premiers champis, ma 1ère pompe car ui je m'étais déja fait pompé mdrrr mais jamais eu de pompe de jaeger !!!`,
  `Y a moyen de Clotairerrrr ouuuu? [...]
[...50 qualités]`,
  `Fiouuuuu from now on ca va surtout etre une photo un souvenirrrrr [...]
Jpensais pas t aurais un enfant avant d'avoir un chat mdrrr !!!`,
  `On rigole On rigole it was ur first time getting isekai'd [...]`,
  `OUR BEST NAILSSSSSSSSSSSSSS [...]`,
  `just uuuuu, certes j'étais sous pollen [...]`,
  `U being the real u ! A w-i-t-c-h oh my gawd`,
  `En vrrrrr le rp tante te va troooop bien [...]`,
  `Tu t'es laissée attendrir par le rp tante? [...]`,
  `Une Shiwwu dans toute sa splendeur [...]`,
  `Encore un rp pute drftgyhujikol`,
  `This one is not for uuuu but for an extension of ur soullll, our cutie bby Boubouille`,
  `This one is our first photoooo togetherrrr [...]`,
  `This one isss ... bah je jure une de mes photos pref [...]`,
  `This one is uuuu shining as much as the flowerrrs`,
  `This one is a reality check mdrrrrr mais tkt luv u too`,
  `This is a work of artttttttt`,
  `C'est pour te rappeler ton passé de furry`,
  `Jte laisse flexxxxxxx`,
  `This one is a SIA cover by Bossiere Alexia .... une paralysie du sommeil`,
  `This is .... kdo sorry`,
  `Tout ça pour dire que we shared sooo many moments together [...]
Wont lose u agaiiiin and dun wowwy we will make our trips to Korea, Japan & China (fais ton passeport chacale nn?) heheeeeee`
];


const images = Array.from({ length: 24 }, (_, i) => `images/img${i + 1}.jpg`);
let currentDay = 0;

const grid = document.querySelector('.grid');

for (let i = 0; i < 24; i++) {
    const btn = document.createElement('button');
    btn.textContent = i + 1;
    btn.disabled = i !== 0;
    btn.onclick = () => showModal(i);
    grid.appendChild(btn);
}

function showModal(index) {
    document.getElementById('quote').textContent = quotes[index];
    document.getElementById('modal-img').src = '';
    document.getElementById('modal').classList.remove('hidden');
    currentDay = index;
}

function nextStep() {
    document.getElementById('modal-img').src = images[currentDay];
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    if (currentDay + 1 < 24) {
        grid.children[currentDay + 1].disabled = false;
    }
}

function startSite() {
    document.querySelector('.intro').classList.add('hidden');
    document.getElementById('calendar').classList.remove('hidden');
}
