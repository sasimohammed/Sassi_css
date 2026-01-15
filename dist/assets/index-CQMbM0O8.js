(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const i="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23F7DF1E'%20d='M0%200h256v256H0V0Z'%3e%3c/path%3e%3cpath%20d='m67.312%20213.932l19.59-11.856c3.78%206.701%207.218%2012.371%2015.465%2012.371c7.905%200%2012.89-3.092%2012.89-15.12v-81.798h24.057v82.138c0%2024.917-14.606%2036.259-35.916%2036.259c-19.245%200-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157%208.421%2011.859%2014.607%2023.715%2014.607c9.969%200%2016.325-4.984%2016.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044%2013.747-31.792%2035.228-31.792c15.294%200%2026.292%205.328%2034.196%2019.247l-18.732%2012.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046%200-11.514%204.468-11.514%2010.31c0%207.217%204.468%2010.14%2014.778%2014.608l6.014%202.577c20.45%208.765%2031.963%2017.7%2031.963%2037.804c0%2021.654-17.012%2033.51-39.867%2033.51c-22.339%200-36.774-10.654-43.819-24.574'%3e%3c/path%3e%3c/svg%3e",s="/vite.svg";function a(c){let t=0;const r=l=>{t=l,c.innerHTML=`count is ${t}`};c.addEventListener("click",()=>r(t+1)),r(0)}class d extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"});t.innerHTML=`
      <style>
        :host {
          --bg-color: #1e1e2f;
          --text-color: white;
          --hover-color: #faba1b;
          --toggle-color: white;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color:white;
          padding: 1rem;
          color: blue;
          flex-wrap: wrap;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .menu {
          display: flex;
          gap: 1rem;
          list-style: none;
        }

        .menu li a {
          text-decoration: none;
          color: black
          transition: color 0.3s;
        }

        .menu li a:hover {
          color: yellow;
        }

        .toggle {
          display: none;
          cursor: pointer;
          font-size: 1.5rem;
          color: blue;
        }

        @media (max-width: 768px) {
          .menu {
            flex-direction: column;
            width: 100%;
            display: none;
          }

          .menu.open {
            display: flex;
          }

          .toggle {
            display: block;
          }
        }
      </style>

      <nav>
        <div class="logo">MySite</div>
        <div class="toggle">&#9776;</div>
        <ul class="menu">
          <slot name="links"></slot>
        </ul>
      </nav>
    `;const r=t.querySelector(".toggle"),l=t.querySelector(".menu");r.addEventListener("click",()=>{l.classList.toggle("open")})}}customElements.define("my-navbar",d);document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${s}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${i}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;a(document.querySelector("#counter"));
