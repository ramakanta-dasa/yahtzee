/* RK Dice Theme Studio. Additive enhancement for the existing app. */
(() => {
"use strict";
const themes = {
Moss:{bg:"#F2F0E6",panel:"#FAF9F3",ink:"#303B32",accent:"#71856B",muted:"#828679",die:"#FFFDF6",line:"#D8D9C9",held:"#DDE7D4",font:'ui-rounded, "SF Pro Rounded", system-ui, sans-serif',mood:"quiet, grounded, and green"},
Moon:{bg:"#E9EDF4",panel:"#F7F8FC",ink:"#30394D",accent:"#7389B2",muted:"#7F8798",die:"#FFFFFF",line:"#D2D9E5",held:"#D8E2F4",font:'"Trebuchet MS", "Segoe UI", sans-serif',mood:"cool, calm, and moonlit"},
Clay:{bg:"#F4EAE1",panel:"#FBF6F0",ink:"#4A3830",accent:"#B47C60",muted:"#8D786C",die:"#FFFCF7",line:"#E3D0C2",held:"#F0D9CA",font:'Georgia, "Times New Roman", serif',mood:"warm, tactile, and earthy"},
Night:{bg:"#202722",panel:"#2A332D",ink:"#F1F0E5",accent:"#B4C69A",muted:"#A4AD9E",die:"#364039",line:"#485449",held:"#455C48",font:'"Courier New", monospace',mood:"quiet, deep, and starlit"},
Prism:{bg:"#FFF3FC",panel:"#FFFFFF",ink:"#462B56",accent:"#C14DAB",muted:"#8A6E91",die:"#FFFFFF",line:"#EACDE8",held:"#F8D5F0",font:'"Trebuchet MS", system-ui, sans-serif',mood:"bright, playful, and full of colour"},
Aurora:{bg:"#EAF8F5",panel:"#F8FFFD",ink:"#173F47",accent:"#1E9B91",muted:"#648A8B",die:"#FFFFFF",line:"#C8E7E0",held:"#C8F0E7",font:"Verdana, Geneva, sans-serif",mood:"fresh, fluid, and luminous"},
"Golden Hour":{bg:"#FFF0D9",panel:"#FFF9EF",ink:"#543B24",accent:"#C98231",muted:"#96764E",die:"#FFFEF8",line:"#EED6B0",held:"#F8DCA9",font:"Georgia, serif",mood:"sunny, gentle, and golden"},
"Firefly Forest":{bg:"#E6F0E4",panel:"#F5FAF2",ink:"#233C2D",accent:"#477C51",muted:"#71866F",die:"#FCFFF9",line:"#C9DCC5",held:"#CDE5C8",font:'"Palatino Linotype", Palatino, serif',mood:"woodland calm with a little sparkle"},
"First Light":{bg:"#F0EEFF",panel:"#FBFAFF",ink:"#373252",accent:"#8C7CC8",muted:"#8984A8",die:"#FFFFFF",line:"#DCD7F1",held:"#E0D9FF",font:'"Segoe UI", system-ui, sans-serif',mood:"airy, hopeful, and soft"},
"Rose Garden":{bg:"#F8E8EC",panel:"#FFF8F9",ink:"#542D3D",accent:"#B85F7C",muted:"#997581",die:"#FFFEFE",line:"#EACBD5",held:"#F4D1DD",font:"Georgia, serif",mood:"tender, floral, and romantic"},
"Deep Ocean":{bg:"#DDEBF2",panel:"#F2FAFE",ink:"#17364A",accent:"#287CA2",muted:"#648394",die:"#FFFFFF",line:"#C1D9E5",held:"#BFE4F2",font:'"Trebuchet MS", sans-serif',mood:"clear, expansive, and oceanic"},
"Ember Glow":{bg:"#321F27",panel:"#432832",ink:"#FFF0E5",accent:"#F19A65",muted:"#C9A2A0",die:"#56313A",line:"#6C4650",held:"#74463F",font:'"Courier New", monospace',mood:"bold, glowing, and ember-warm"},
Monochrome:{bg:"#ECECEC",panel:"#FAFAFA",ink:"#242424",accent:"#505050",muted:"#777777",die:"#FFFFFF",line:"#D1D1D1",held:"#DCDCDC",font:"Arial, Helvetica, sans-serif",mood:"clean, crisp, and considered"}
};
const descriptions = {
Moss:["The garden is growing.","A steady hand, a lovely roll.","Let the small joys count."],
Moon:["A quiet constellation.","The night has a pattern.","Hold on to what shines."],
Clay:["Something is taking shape.","A good roll, warm as clay.","One more chance to shape it."],
Night:["Signals in the dark.","The pattern is emerging.","Make this last roll count."],
Prism:["Look at those colours.","A little pattern magic.","Let the whole spectrum shine."],
Aurora:["The colours are flowing.","A bright little alignment.","Ride the wave."],
"Golden Hour":["A warm little streak.","Golden chances ahead.","Make this moment glow."],
"Firefly Forest":["Tiny lights are gathering.","The forest has a pattern.","Follow the little sparks."],
"First Light":["A fresh start is forming.","A hopeful little pattern.","Let the next moment open."],
"Rose Garden":["A lovely little gathering.","A pattern in bloom.","Give this roll room to flower."],
"Deep Ocean":["A current is forming.","A clear pattern rises.","Let the next wave come."],
"Ember Glow":["The embers are catching.","A strong pattern is glowing.","One last spark."],
Monochrome:["The numbers are settling.","A clean little pattern.","One final roll."]
};
const css = '#rk-theme-studio{border:1px solid var(--line);border-radius:18px;padding:16px;background:var(--panel);color:var(--ink);display:flex;flex-direction:column;gap:15px}'+
'#rk-theme-studio .rk-kicker{font-size:10px;letter-spacing:.14em;font-weight:800;color:var(--muted);text-transform:uppercase}'+
'#rk-theme-studio .rk-theme-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}'+
'#rk-theme-studio .rk-theme-choice{display:flex;align-items:center;gap:9px;text-align:left;border:1px solid var(--line);border-radius:12px;padding:10px;background:var(--bg);color:var(--ink);font:inherit;font-size:12px;cursor:pointer;min-width:0}'+
'#rk-theme-studio .rk-theme-choice[aria-pressed="true"]{outline:2px solid var(--accent);outline-offset:1px}'+
'#rk-theme-studio .rk-theme-dot{width:22px;height:22px;flex:0 0 22px;border-radius:50%;border:1px solid #0001;background:linear-gradient(135deg,var(--sw-a) 0 50%,var(--sw-b) 50% 100%)}'+
'#rk-theme-studio .rk-control{display:flex;flex-direction:column;gap:7px}'+
'#rk-theme-studio .rk-control label{font-size:12px;font-weight:700}'+
'#rk-theme-studio .rk-control select{width:100%;border:1px solid var(--line);border-radius:11px;background:var(--bg);color:var(--ink);padding:11px;font:inherit;font-size:13px}'+
'#rk-theme-studio .rk-range-row{display:flex;align-items:center;gap:10px}'+
'#rk-theme-studio input[type=range]{width:100%;accent-color:var(--accent)}'+
'#rk-theme-studio .rk-size-value{font-size:12px;color:var(--muted);min-width:38px;text-align:right;font-variant-numeric:tabular-nums}'+
'#rk-theme-studio .rk-description{font-size:12px;color:var(--muted);line-height:1.45;margin:0}'+
'body[data-rk-die-style="soft"] .die{border-radius:25px;box-shadow:0 7px 14px #0001}'+
'body[data-rk-die-style="glass"] .die{background:linear-gradient(145deg,var(--panel),var(--die));box-shadow:inset 0 1px 0 #ffffff80,0 7px 16px #0001;border-radius:19px}'+
'body[data-rk-die-style="sketch"] .die{border:2px dashed var(--accent);border-radius:10px;box-shadow:none}'+
'body[data-rk-die-style="botanical"] .die{border-radius:22px 12px 22px 12px;border:1px solid var(--accent);box-shadow:inset 0 0 0 3px var(--held)}'+
'body[data-rk-die-style="classic"] .die{border-radius:17px}'+
'.die .face{transform:scale(var(--rk-face-scale,1));transition:transform .12s}'+
'@media(min-width:420px){#rk-theme-studio .rk-theme-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}'+
'@media(prefers-reduced-motion:reduce){.die,.die .face{transition:none!important}}';
const style=document.createElement("style");style.textContent=css;document.head.appendChild(style);
function applyTheme(name,persist=true){
 const t=themes[name]||themes.Moss,root=document.documentElement;
 ["bg","panel","ink","accent","muted","die","line","held"].forEach(k=>root.style.setProperty("--"+k,t[k]));
 document.body.style.fontFamily=t.font;
 const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=t.bg;
 document.querySelectorAll("#rk-theme-studio .rk-theme-choice").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.rkTheme===name)));
 document.querySelectorAll(".swatch").forEach(b=>b.classList.remove("active"));
 if(persist)try{localStorage.setItem("rk-dice-theme",name)}catch(e){}
 document.body.dataset.rkTheme=name;
 const mood=document.querySelector("#rk-theme-studio .rk-description");if(mood)mood.textContent=t.mood;
 updateRollDescription();
}
function diceValues(){
 const map={"⚀":1,"⚁":2,"⚂":3,"⚃":4,"⚄":5,"⚅":6};
 return Array.from(document.querySelectorAll("#dice .die .face")).map(el=>map[el.textContent.trim()]||0).filter(Boolean);
}
function patternName(values){
 if(values.length!==5)return "";
 const counts=Object.values(values.reduce((a,v)=>(a[v]=(a[v]||0)+1,a),{})).sort((a,b)=>b-a);
 const unique=Array.from(new Set(values)).sort((a,b)=>a-b);
 const str=unique.join("");
 if(counts[0]===5)return "Yahtzee! Five of a kind!";
 if(counts[0]===4)return "Four of a kind!";
 if(counts[0]===3&&counts[1]===2)return "Full house!";
 if(str==="12345"||str==="23456")return "Large straight!";
 if(["1234","2345","3456"].some(s=>Array.from(s).every(n=>unique.includes(Number(n)))))return "Small straight!";
 if(counts[0]===3)return "Three of a kind!";
 if(counts[0]===2&&counts[1]===2)return "Two pairs!";
 if(counts[0]===2)return "A pair is taking shape.";
 return values.reduce((a,b)=>a+b,0)>=20?"A high scoring hand!":"A fresh roll, full of possibility.";
}
function updateRollDescription(){
 const status=document.getElementById("status"),headline=document.getElementById("headline"),subline=document.getElementById("subline");
 if(!status||!headline||!subline||status.textContent.includes("READY"))return;
 const name=document.body.dataset.rkTheme||"Moss",vals=diceValues();if(vals.length!==5)return;
 const p=patternName(vals),voice=descriptions[name]||descriptions.Moss;
 const heldCount=document.querySelectorAll("#dice .die.held").length;
 headline.textContent=p;
 if(p.includes("Yahtzee"))subline.textContent="Five matching dice. What a moment.";
 else if(p.includes("straight"))subline.textContent="A beautiful run of consecutive numbers.";
 else if(p.includes("Full house"))subline.textContent="Three of one number, two of another.";
 else {const match=status.textContent.match(/\d+/),idx=Math.min(2,Math.max(0,Number(match?match[0]:1)-1));subline.textContent=heldCount+" held · "+(5-heldCount)+" available to reroll. "+voice[idx];}
}
function buildPanel(){
 const paletteSection=document.querySelector("#palettes")&&document.querySelector("#palettes").closest("section");
 if(!paletteSection||document.getElementById("rk-theme-studio"))return;
 const panel=document.createElement("section");panel.id="rk-theme-studio";
 panel.innerHTML='<div><div class="rk-kicker">RK Dice Theme Studio</div><div class="section-title" style="margin:6px 0">Set the mood</div><p class="rk-description">Choose a palette to change the colours and typography together.</p></div><div class="rk-theme-grid" role="group" aria-label="Theme presets"></div><div class="rk-control"><label for="rk-die-size">Dice size</label><div class="rk-range-row"><input id="rk-die-size" type="range" min="80" max="125" step="5" value="100"><span class="rk-size-value" id="rk-die-size-value">100%</span></div></div><div class="rk-control"><label for="rk-die-style">Dice finish</label><select id="rk-die-style"><option value="classic">Classic</option><option value="soft">Soft rounded</option><option value="glass">Luminous glass</option><option value="sketch">Hand drawn</option><option value="botanical">Botanical edge</option></select></div><p class="rk-description">Your choices are saved on this device. The original game controls remain in place.</p>';
 paletteSection.insertAdjacentElement("afterend",panel);
 const grid=panel.querySelector(".rk-theme-grid");
 Object.entries(themes).forEach(([name,t])=>{
  const b=document.createElement("button");b.type="button";b.className="rk-theme-choice";b.dataset.rkTheme=name;b.setAttribute("aria-pressed","false");
  b.innerHTML='<span class="rk-theme-dot" style="--sw-a:'+t.accent+';--sw-b:'+t.bg+'"></span><span>'+name+'</span>';
  b.addEventListener("click",()=>applyTheme(name));grid.appendChild(b);
 });
 const size=panel.querySelector("#rk-die-size"),sizeValue=panel.querySelector("#rk-die-size-value");
 function setSize(v,persist=true){const n=Math.max(80,Math.min(125,Number(v)||100));document.documentElement.style.setProperty("--rk-face-scale",n/100);size.value=n;sizeValue.textContent=n+"%";if(persist)try{localStorage.setItem("rk-dice-size",String(n))}catch(e){}}
 size.addEventListener("input",()=>setSize(size.value));
 const finish=panel.querySelector("#rk-die-style");
 finish.addEventListener("change",()=>{document.body.dataset.rkDieStyle=finish.value;try{localStorage.setItem("rk-dice-finish",finish.value)}catch(e){}});
 try{setSize(localStorage.getItem("rk-dice-size")||100,false);const f=localStorage.getItem("rk-dice-finish");if(f&&["classic","soft","glass","sketch","botanical"].includes(f)){finish.value=f;document.body.dataset.rkDieStyle=f}}catch(e){setSize(100,false)}
 document.querySelectorAll(".swatch").forEach(b=>b.addEventListener("click",()=>{if(themes[b.dataset.palette])applyTheme(b.dataset.palette)}));
 let saved="Moss";try{saved=localStorage.getItem("rk-dice-theme")||localStorage.getItem("rk-dice-palette")||"Moss"}catch(e){}
 applyTheme(themes[saved]?saved:"Moss",false);
 const observer=new MutationObserver(updateRollDescription),dice=document.getElementById("dice"),status=document.getElementById("status");
 if(dice)observer.observe(dice,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:["class"]});
 if(status)observer.observe(status,{childList:true,characterData:true,subtree:true});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",buildPanel,{once:true});else buildPanel();
})();