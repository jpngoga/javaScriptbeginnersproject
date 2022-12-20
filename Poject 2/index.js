// Variables

let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// event listners

if (openBtn) {

    openBtn.addEventListener('click', () => {
        modalContainer.style.display = 'block';
    });

}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modalContainer.style.display = 'none';
    });
}

window.addEventListener('click', function(e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
})

// if (btn) {
//     // Not called
//     btn.addEventListener('click', () => {
//       alert('You clicked the button');
//     });
//   }