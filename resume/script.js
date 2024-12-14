"use strict";
let ref_section = document.getElementById('ref');
let ref_btn = document.getElementById('ref_btn');
let exp_section = document.getElementById('experience');
let exp_btn = document.getElementById('exp_btn');
ref_btn?.addEventListener('click', () => {
    ref_section.classList.toggle('hide');
});
exp_btn?.addEventListener('click', () => {
    exp_section.classList.toggle('hide');
});
let print_btn = document.getElementById('print_btn');
print_btn?.addEventListener('click', () => {
    window.print();
});
