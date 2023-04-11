const buttons = document.querySelectorAll('.bawah button');
const tampil = document.querySelector('.tampil');

const hasil = () => tampil.value = eval(tampil.value);
const hapus = () => tampil.value = '';
const balik = () => tampil.value = tampil.value.substring(0, tampil.value.length - 1);

buttons.forEach((button) => {
    button.onclick = (e) => {
        const gas = e.target.textContent;
        if (e.pointerId === -1) {
            e.target = document.body;
        } else if (gas !== 'C' && gas !== 'DEL' && gas !== '=') {
            if (gas === 'MOD') return tampil.value += '%';
            return tampil.value += gas;
        } else {
            if (gas === 'DEL') return balik();
            if (gas === 'C') return hapus();
            return hasil();
        }
    }
});

document.onkeyup = (e) => {
    if (e.key === 'Enter') hasil();
    if (e.key === 'Backspace') balik();
    if (e.key === 'Delete') hapus();
}