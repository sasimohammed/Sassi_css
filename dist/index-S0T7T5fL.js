(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23F7DF1E'%20d='M0%200h256v256H0V0Z'%3e%3c/path%3e%3cpath%20d='m67.312%20213.932l19.59-11.856c3.78%206.701%207.218%2012.371%2015.465%2012.371c7.905%200%2012.89-3.092%2012.89-15.12v-81.798h24.057v82.138c0%2024.917-14.606%2036.259-35.916%2036.259c-19.245%200-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157%208.421%2011.859%2014.607%2023.715%2014.607c9.969%200%2016.325-4.984%2016.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044%2013.747-31.792%2035.228-31.792c15.294%200%2026.292%205.328%2034.196%2019.247l-18.732%2012.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046%200-11.514%204.468-11.514%2010.31c0%207.217%204.468%2010.14%2014.778%2014.608l6.014%202.577c20.45%208.765%2031.963%2017.7%2031.963%2037.804c0%2021.654-17.012%2033.51-39.867%2033.51c-22.339%200-36.774-10.654-43.819-24.574'%3e%3c/path%3e%3c/svg%3e",p="/vite.svg";function f(l){let o=0;const s=r=>{o=r,l.innerHTML=`count is ${o}`};l.addEventListener("click",()=>s(o+1)),s(0)}class v extends HTMLElement{static get observedAttributes(){return["bg-color","text-color","hover-color","bg-hover"]}constructor(){super();const o=this.attachShadow({mode:"open"}),s=this.getAttribute("bg-color")||"#ffffff",r=this.getAttribute("text-color")||"#1e1e2f",e=this.getAttribute("hover-color")||"#faba1b",t=this.getAttribute("bg-hover")||"rgba(0,0,0,0.03)";o.innerHTML=`
      <style>
        :host {
          display: block;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: var(--bg-color, ${s});
          color: var(--text-color, ${r});
          padding: 1rem 2rem;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          flex-wrap: wrap;
          transform: translateY(-10px);
          animation: slideDown 0.5s ease-out forwards;
        }

        .menu ::slotted(a) {
          text-decoration: none;
          color: var(--text-color, ${r});
          transition: color 0.3s ease, transform 0.2s;
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          font-size: 1.1rem;     
          font-weight: bold;     
          font-family: 'Segoe UI', sans-serif;  
        }

        .menu ::slotted(a.active),
        .menu ::slotted(a:hover) {
          color: var(--hover-color, ${e});
          background-color: var(--bg-hover, ${t});
          transform: scale(1.05);
        }

        .toggle {
          display: none;
          cursor: pointer;
          font-size: 1.8rem;
          background: none;
          border: none;
          color: inherit;
        }

        .close-btn{
          display:none;
        }

        @keyframes slideDown {
          from { transform: translateY(-30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @media (max-width: 768px) {
          nav { position: relative; }
          .menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 30%;
            height: 100vh;
            background-color: var(--bg-color, ${s});
            color: var(--text-color, ${r});
            padding: 1rem 2rem;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
            flex-direction: column;
            gap: 1rem;
            overflow: hidden;
            transition: right 0.3s ease, opacity 0.3s ease;
            z-index: 1000;
            opacity: 0;
          }

          .menu.open { right: 0; opacity: 1; }

          .toggle { display: block; }

          .close-btn {
            align-self: flex-end;
            background: none;
            border: none;
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
            color: var(--text-color, ${r});
            margin-bottom: 1rem;
            display: block;
          }
        }
      </style>

      <nav>
        <div class="logo-container">
          <slot name="logo-image"></slot> 
          <slot name="logo-icon"></slot>
          <div class="logo-text"><slot name="logo">SassiKit</slot></div>
        </div>
        <button class="toggle">☰</button>
        <ul class="menu">
          <button class="close-btn">✕</button>
          <slot name="links"></slot>
        </ul>
      </nav>
    `;const n=o.querySelector('slot[name="links"]');n.addEventListener("slotchange",()=>{const d=n.assignedElements().filter(c=>c.tagName.toLowerCase()==="a");d.forEach(c=>{c.addEventListener("click",function(){d.forEach(u=>u.classList.remove("active")),this.classList.add("active")})})});const i=o.querySelector(".close-btn"),g=o.querySelector(".toggle"),a=o.querySelector(".menu");i.addEventListener("click",()=>a.classList.remove("open")),g.addEventListener("click",()=>a.classList.toggle("open")),this._updateColors(s,r,e,t)}attributeChangedCallback(o,s,r){if(s===r)return;this.shadowRoot.querySelector("nav");const e=this.getAttribute("bg-color")||"#ffffff",t=this.getAttribute("text-color")||"#1e1e2f",n=this.getAttribute("hover-color")||"#faba1b",i=this.getAttribute("bg-hover")||"rgba(0,0,0,0.03)";this._updateColors(e,t,n,i)}_updateColors(o,s,r,e){const t=this.shadowRoot.querySelector("nav");t.style.setProperty("--bg-color",o),t.style.setProperty("--text-color",s),t.style.setProperty("--hover-color",r),t.style.setProperty("--bg-hover",e)}}customElements.define("sassi-nav",v);document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${p}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${h}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;f(document.querySelector("#counter"));
