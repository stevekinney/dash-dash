export const canvas = document.createElement('canvas');
export const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.9;

document.body.appendChild(canvas);
