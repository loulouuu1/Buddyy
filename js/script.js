const quotes = [
  `Hi Hi B ~
Ca fait longtemps donc j'avais envie de type un petit truc ooops 
En faisant ma Gamify hier, vu que je partais de ton template, j'ai vu que tu voulais coder une page Webbb, let it be a future plan or just a near oneeee.
Je trouvais ça trop cute et rly rly wanted to support uuuuu so depuis hier soiiir je me démène avec ChatGPT afin de te faire une page qui te sera entièrement dédiée to show u that u can do ittt and that i will always support uuuu heheheee 
Nianiaaaa je sais que tu traverses pas la période la plus facile et vraiment just wanna see u smile again cause u rly outshine anyoneeee when u dooo :p 
This is my small token of appreciation for u, luv u`,

  `To be honest, you completely shook off my life & my routines.
Never ever would I have expected that i would spend time to code something, knowing how much I hate coding. Yet, no matter how much I despise it, whenever it's uuuu who talks about ur work, ca switch instant et mon cerveau classe direct ca dans la categorie " interessant, à save " `,

  "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
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
