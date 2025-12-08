import{a as m,S as u,i as c}from"./assets/vendor-DvfmeZXB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function g(a,s){try{return(await m.get("https://pixabay.com/api/",{params:{key:"53601919-f7ce8619a2e643043945fb1be",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}})).data}catch(i){console.log(i)}}const l={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function p({webformatURL:a,largeImageURL:s,tags:i,likes:r,views:e,comments:t,downloads:o}){return`<li class="gallery-item">
            <a class="gallery-link" href="${s}">
                <img class="gallery-image" src="${a}" alt="${i}">
            </a>
            <ul class="image-statistic">
                <li class="image-statistic-item">
                    <h3 class="statistic-name">Likes</h3>
                    <p class="statistic-value">${r}</p>
                </li>
                <li class="image-statistic-item">
                    <h3 class="statistic-name">Views</h3>
                    <p class="statistic-value">${e}</p>
                </li>
                <li class="image-statistic-item">
                    <h3 class="statistic-name">Comments</h3>
                    <p class="statistic-value">${t}</p>
                </li>
                <li class="image-statistic-item">
                    <h3 class="statistic-name">Downloads</h3>
                    <p class="statistic-value">${o}</p>
                </li>
            </ul>
          </li>`}const d=new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function f(a){const s=a.map(p).join("");l.gallery.innerHTML=s,d.refresh()}function h(){l.gallery.innerHTML=""}function y(){l.loader.classList.remove("hidden")}function w(){l.loader.classList.add("hidden")}const n=document.querySelector(".form");n.addEventListener("submit",async a=>{a.preventDefault(),h();const i=new FormData(a.target).get("search-text").trim();if(i.trim()===""){c.show({title:"⚠️",message:"Please enter a search query!",messageColor:"white",messageSize:"16px",backgroundColor:"red",position:"topRight",timeout:2e3}),n.reset();return}y();try{const r=await g(i);r.hits.length===0?c.show({title:"⚠️",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",messageSize:"16px",backgroundColor:"red",position:"topRight",timeout:2e3}):f(r.hits)}catch{c.show({title:"⚠️",message:"Your request is fail!",messageColor:"white",messageSize:"16px",backgroundColor:"red",position:"topRight",timeout:2e3})}finally{w(),n.reset()}});
//# sourceMappingURL=index.js.map
