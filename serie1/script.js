let keyName = "lucifert4";
const fs_BotoesLightbox = document.querySelectorAll(".fs-abrir-lightbox");
if (fs_BotoesLightbox) {
for (var i = 0; i < fs_BotoesLightbox.length; i++) {
fs_BotoesLightbox[i].onclick = function(fs_VideoAtual) {
fs_VideoAtual.preventDefault();
const fs_VideoLightbox = fs_VideoAtual.currentTarget.getAttribute('data-video');
const fs_UrlVideo = "" + fs_VideoLightbox;
const fs_ContentVideo = document.querySelector("#lightbox-content");
localStorage.setItem(keyName + '-enlace', fs_UrlVideo);
localStorage.setItem(keyName + '-title', fs_VideoAtual.currentTarget.innerText);
fs_ContentVideo.innerHTML = '<iframe class="responsive-iframe" id="video-adicionado" width="100%" height="100%" sandbox="allow-same-origin allow-scripts" scrolling="no" style="  border-radius:5px;" src="' + fs_UrlVideo + '" frameborder="0" allowfullscreen></iframe>';
document.location.reload();}}}
window.scrollTo({
top: 0,
behavior: 'smooth'});

let elIframe = document.querySelector('#lightbox-content iframe'),
title = document.getElementById('title');
if (localStorage.getItem(keyName + '-enlace') != null) {
elIframe.setAttribute('src', localStorage.getItem(keyName + '-enlace'))}
if (localStorage.getItem(keyName + '-title') != null) {
title.innerText = localStorage.getItem(keyName + '-title')}

var boxes = document.querySelectorAll("input[type='checkbox']");
for (var i = 0; i < boxes.length; i++) {
var box = boxes[i];
if (box.hasAttribute("store")) {
setupBox(box);}}
function setupBox(box) {
var storageId = box.getAttribute("store");
var oldVal    = localStorage.getItem(storageId);
box.checked = oldVal === "true" ? true : false;
box.addEventListener("change", function() {
localStorage.setItem(storageId, this.checked);});}
