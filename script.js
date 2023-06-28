const kalkulator = () => {
    const tampil = document.querySelector('.tampil');
    const buttons = document.querySelectorAll('.bawah button');
    document.onkeyup = e => {
        if (e.key === 'Enter') hasil();
        if (e.key === 'Backspace') balik();
        if (e.key === 'Delete') hapus();
    }
    buttons.forEach(button => {
        button.onclick = e => {
            validasi(e);
        }
    });
    const validasi = e => {
        const text = e.target.textContent;
        if (e.pointerId === -1) return e.target = document.body;
        if (text !== 'C' && text !== 'DEL' && text !== '=') {
            if (text === 'MOD') return tampil.value += '%';
            return tampil.value += text;
        }
        if (text === 'DEL') return balik();
        if (text === 'C') return hapus();
        return hasil();
    }
    const balik = () => {
        tampil.value = tampil.value.substring(0, tampil.value.length - 1);
    }
    const hapus = () => {
        tampil.value = '';
    }
    const hasil = () => {
        tampil.value === '' ? false : tampil.value = eval(tampil.value);
    }
}

kalkulator();