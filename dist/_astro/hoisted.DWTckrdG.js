document.getElementById("btn_menu").addEventListener("click",d);document.getElementById("menu_before").addEventListener("click",i);document.querySelectorAll("#nav ul li a").forEach(r=>{r.addEventListener("click",function(){document.querySelectorAll("#nav ul li a").forEach(e=>{e.removeAttribute("id")}),this.setAttribute("id","select"),i()})});var c=document.getElementById("nav"),o=document.getElementById("menu_before");function d(){c.style.right="0px",o.style.display="block"}function i(){c.style.right="-250px",o.style.display="none"}document.querySelector(".checkAnswer1").addEventListener("click",()=>{const r=document.getElementById("answer1").value,e=document.getElementById("result1");parseFloat(r)===10?e.innerHTML='<p class="answer" style="color: green">Correcto, la carga almacenada es 10 Coulombs.</p>':e.innerHTML='<p class="answer" style="color: red">Incorrecto, intenta nuevamente.</p>'});document.querySelector(".checkAnswer2").addEventListener("click",()=>{const r=document.getElementById("answer2").value,e=document.getElementById("result2");parseFloat(r)===1.2?e.innerHTML='<p class="answer" style="color: green">Correcto, la capacitancia total es 1.2 Faradios.</p>':(e.innerHTML='<p class="answer style="color: red"">Incorrecto, intenta nuevamente.</p>',alert("intenta nuevamente."))});document.querySelector(".checkAnswer3").addEventListener("click",()=>{const r=document.getElementById("answer3").value,e=document.getElementById("result3");parseFloat(r)===5?e.innerHTML='<p class="answer" style="color: green">Correcto, la capacitancia total es 5 Faradios.</p>':e.innerHTML='<p class="answer" style="color: red">Incorrecto, intenta nuevamente.</p>'});document.querySelector(".checkAnswer4").addEventListener("click",()=>{const r=document.getElementById("answer4").value,e=document.getElementById("result4");parseFloat(r)===15e-12?e.innerHTML='<p class="answer" style="color: green">Correcto, la capacidad del dispositivo es de 1.5 × 10<sup>-11</sup> F.</p>':e.innerHTML='<p class="answer" style="color: red">Incorrecto, intenta nuevamente.</p>'});document.querySelector(".checkAnswer5").addEventListener("click",()=>{const r=document.getElementById("answer5").value,e=document.getElementById("result5");parseFloat(r)===4427e-14?e.innerHTML='<p class="answer" style="color: green">Correcto, la capacitancia total con aire entre las placas es de 4.427 × 10<sup>-11</sup> F.</p>':e.innerHTML='<p class="answer" style="color: red">Incorrecto, intenta nuevamente.</p>'});document.querySelector(".calcularCarga").addEventListener("click",()=>{const r=parseFloat(document.getElementById("capacitancia").value),e=parseFloat(document.getElementById("voltaje").value);if(isNaN(r)||isNaN(e))document.getElementById("resultado").innerText="Por favor, ingrese valores válidos en ambos campos.";else{const t=r*e;document.getElementById("resultado").innerText=`La carga en el condensador es de ${t} µC`}});class a extends HTMLElement{connectedCallback(){const e=this.getAttribute("videoid").split("?");this.videoId=e[0],this.short=e[1];let t=this.querySelector(".lty-playbtn");if(this.playLabel=t&&t.textContent.trim()||this.getAttribute("playlabel")||"Reproducir presentación de La Velada del Año",this.dataset.title=this.getAttribute("title")||"",this.style.backgroundImage||(this.style.backgroundImage=`url("https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg")`,this.upgradePosterImage()),t||(t=document.createElement("button"),t.type="button",t.classList.add("lty-playbtn"),this.append(t)),!t.textContent){const n=document.createElement("span");n.className="lyt-visually-hidden",n.textContent=this.playLabel,t.append(n)}this.addNoscriptIframe(),this.addEventListener("pointerover",a.warmConnections,{once:!0}),this.addEventListener("click",this.activate),this.addEventListener("keydown",this.handleKeyPress),this.needsYTApi=this.hasAttribute("js-api")||navigator.vendor.includes("Apple")||navigator.userAgent.includes("Mobi")}static addPrefetch(e,t,n){const s=document.createElement("link");s.rel=e,s.href=t,n&&(s.as=n),document.head.append(s)}static warmConnections(){a.preconnected||(a.addPrefetch("preconnect","https://www.youtube-nocookie.com"),a.addPrefetch("preconnect","https://www.google.com"),a.addPrefetch("preconnect","https://googleads.g.doubleclick.net"),a.addPrefetch("preconnect","https://static.doubleclick.net"),a.preconnected=!0)}fetchYTPlayerApi(){window.YT||window.YT&&window.YT.Player||(this.ytApiPromise=new Promise((e,t)=>{const n=document.createElement("script");n.src="https://www.youtube.com/iframe_api",n.async=!0,n.onload=s=>{YT.ready(e)},n.onerror=t,this.append(n)}))}async getYTPlayer(){return this.playerPromise||await this.activate(),this.playerPromise}async addYTPlayerIframe(){this.fetchYTPlayerApi(),await this.ytApiPromise;const e=document.createElement("div");this.append(e);const t=Object.fromEntries(this.getParams().entries());this.playerPromise=new Promise(n=>{const s=new YT.Player(e,{width:"100%",videoId:this.videoId,playerVars:t,events:{onReady:l=>{l.target.playVideo(),n(s)}}})})}addNoscriptIframe(){const e=this.createBasicIframe(),t=document.createElement("noscript");t.innerHTML=e.outerHTML,this.append(t)}getParams(){const e=new URLSearchParams(this.getAttribute("params")||[]);return e.append("autoplay","1"),e.append("playsinline","1"),e.append("color","white"),e}async activate(){if(this.classList.contains("lyt-activated"))return;const e=this.querySelector(".lty-playbtn");if(e&&e.hasAttribute("href")&&e.removeAttribute("href"),this.classList.add("lyt-activated"),this.style.backgroundImage!=="unset"&&(this.style.backgroundImage="unset"),this.needsYTApi)return this.addYTPlayerIframe(this.getParams());const t=this.createBasicIframe();this.append(t),t.focus()}handleKeyPress(e){(e.code==="Enter"||e.code==="Space")&&this.activate()}createBasicIframe(){const e=document.createElement("iframe");return e.width=560,e.height=315,e.title=this.playLabel,e.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",e.allowFullscreen=!0,e.src=this.short?`https://www.youtube.com/embed/${encodeURIComponent(this.videoId)}?${this.getParams().toString()}&${this.short}`:`https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.videoId)}?${this.getParams().toString()}`,e}upgradePosterImage(){setTimeout(()=>{const e=`https://i.ytimg.com/vi_webp/${this.videoId}/sddefault.webp`,t=new Image;t.fetchPriority="low",t.referrerpolicy="origin",t.src=e,t.onload=n=>{n.target.naturalHeight===90&&n.target.naturalWidth===120||(this.style.backgroundImage=`url("${e}")`)}},100)}}customElements.define("lite-youtube",a);