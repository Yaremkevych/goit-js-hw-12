import{a as b,S as q,i as v}from"./assets/vendor-DvfmeZXB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const h=15;async function g(t,s){try{return(await b.get("https://pixabay.com/api/",{params:{key:"53601919-f7ce8619a2e643043945fb1be",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:h}})).data}catch(r){console.log(r)}}const i={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};function M({webformatURL:t,largeImageURL:s,tags:r,likes:n,views:e,comments:a,downloads:l}){return`<li class="gallery-item">
            <a class="gallery-link" href="${s}">
                <img class="gallery-image" src="${t}" alt="${r}">
            </a>
            <ul class="image-statistic">
                <li class="image-statistic-item">
                    <h3 class="statistic-name">Likes</h3>
                    <p class="statistic-value">${n}</p>
                </li>
                <li class="image-statistic-item">
                    <h3 class="statistic-name">Views</h3>
                    <p class="statistic-value">${e}</p>
                </li>
                <li class="image-statistic-item">
                    <h3 class="statistic-name">Comments</h3>
                    <p class="statistic-value">${a}</p>
                </li>
                <li class="image-statistic-item">
                    <h3 class="statistic-name">Downloads</h3>
                    <p class="statistic-value">${l}</p>
                </li>
            </ul>
          </li>`}const P=new q(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function y(t){const s=t.map(M).join("");i.gallery.insertAdjacentHTML("beforeend",s),P.refresh()}function S(){i.gallery.innerHTML=""}function p(){i.loader.classList.remove("hidden")}function L(){i.loader.classList.add("hidden")}function m(){i.loadMoreBtn.classList.remove("hidden")}function w(){i.loadMoreBtn.classList.add("hidden")}const c=t=>{v.show({title:"⚠️",message:t,messageColor:"white",messageSize:"16px",backgroundColor:"red",position:"topRight",timeout:1500})},d=document.querySelector(".form");let u,o,f;d.addEventListener("submit",async t=>{if(t.preventDefault(),S(),p(),w(),u=new FormData(t.target).get("search-text").trim(),o=1,!u){c("Please enter a search query!"),d.reset();return}try{const r=await g(u,o);r.hits.length?(y(r.hits),f=Math.ceil(r.totalHits/h),f>o&&m()):c("Sorry, there are no images matching your search query. Please try again!")}catch{c("Your request is fail!")}finally{L(),d.reset()}});i.loadMoreBtn.addEventListener("click",async()=>{o+=1,p(),w();try{const t=await g(u,o);y(t.hits);const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"}),f>o?m():c("We're sorry, but you've reached the end of search results.")}catch{c("Your request is fail!"),m()}finally{L()}});
//# sourceMappingURL=index.js.map
