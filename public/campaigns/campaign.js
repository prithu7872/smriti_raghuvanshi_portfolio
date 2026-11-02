(function(){
const D=window.CAMPAIGNS,i=D.findIndex(x=>x.s===document.body.dataset.c),c=D[i],P=D[(i+5)%6],N=D[(i+1)%6];
const ph=t=>`<span class="ph">${t}</span>`,mm=s=>Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0');
const sec=(h,b,tag)=>`<section class="sec r"><h2>${h}${tag?`<small class="tag">${tag}</small>`:''}</h2>${b}</section>`;
const file=c.v.split('/').pop();
document.body.style.setProperty('--a',c.a);document.body.style.setProperty('--b',c.b);
const plat=['First-frame attention: the opening seconds decide whether a viewer stays.','Mobile viewing: 9:16 fills the phone screen and works without a desktop.','Shareable moments: one memorable beat per film gives viewers something to pass on.','Institutional positioning: the LPU logo and A++ badge stay on screen, and each film ends on the LPU end card.'];
document.getElementById('app').innerHTML=`
<header class="top"><a href="../index.html#projects">← Portfolio</a><span>CAMPAIGN ${c.n} / 06</span></header>
<section class="hero ${c.cls}"><div class="mot" aria-hidden="true">${c.mot}</div><span class="k">${c.cat} · Lovely Professional University</span><h1>${c.h}</h1><p class="in">${c.intro}</p></section>
<div class="wrap ${c.cls}"><main>
${sec('The campaign context',`<p>${c.ctx}</p>`)}
${sec('The creative insight',`<p>${c.ins}</p>`,'Analysis')}
${sec('The central idea',`<p class="big">${c.idea}</p>`,'Analysis')}
${c.chips?sec('Pick a shade',`<div class="chips" id="chips">${c.chips.map(x=>`<button style="--c:${x[1]}" data-c="${x[1]}" aria-label="${x[0]}"><span>${x[0]}</span></button>`).join('')}</div><p class="sm" id="cm">Choose a colour to re-theme this page, echoing the film's opening draw. Nothing is stored.</p>`):''}
${sec('Video storytelling breakdown',`<ol class="ch">${c.ch.map(x=>`<li><button data-t="${x[0]}"><b>${mm(x[0])}</b><span><strong>${x[1]}</strong>${x[2]}</span></button></li>`).join('')}</ol><p class="sm">Timestamps are approximate. Click a chapter to jump to it in the video.</p>`)}
${sec('Creative execution',`<ul>${c.ex.map(x=>`<li>${x}</li>`).join('')}</ul>`,'Observed in the footage')}
${c.cap?sec('Original Instagram caption',`<blockquote>${c.cap.replace(/\n/g,'<br>')}</blockquote><p>${c.pl}</p>`):sec('Working title',`<blockquote>${c.wt}</blockquote><p class="sm">${ph('[EDIT] The full original caption was not supplied, so none is shown.')}</p><p>${c.pl}</p>`)}
${sec('Platform and audience strategy',`<ul>${plat.map(x=>`<li>${x}</li>`).join('')}</ul>`,'Creative analysis, not measured performance')}
${sec('My contribution',`<p>${ph('[EDIT] Describe exactly what Smriti did on this campaign: concept, copy, planning, editing or execution.')}</p>`)}
${sec('Outcome and reflection',`<p>${ph('[EDIT] Add verified views, reach or engagement with the source and date. None are claimed here.')}</p>`)}
${sec('Original campaign source',`<p>${ph('[EDIT] Instagram post link not yet provided')}</p>`)}
</main>
<aside><figure class="phone"><video id="v" controls playsinline preload="none" src="${c.v}" aria-label="${c.t} campaign video"></video><p id="vm" class="vm" hidden>Video not uploaded yet.<br>Add <code>public/assets/campaigns/${file}</code></p><figcaption>9:16 · original reel</figcaption></figure></aside></div>
<nav class="nx"><a href="${P.s}.html"><small>← Previous</small>${P.t}</a><a href="${N.s}.html"><small>Next →</small>${N.t}</a></nav>
<footer>Campaign created for Lovely Professional University. Video and imagery © LPU, shown here as portfolio work. ${ph('[EDIT] confirm LPU permission before publishing')}</footer>`;
const v=document.getElementById('v'),bs=[...document.querySelectorAll('.ch button')];
v.addEventListener('error',()=>{v.hidden=true;document.getElementById('vm').hidden=false});
bs.forEach(b=>b.onclick=()=>{if(v.hidden)return;v.currentTime=+b.dataset.t;v.play().catch(()=>{});v.scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'})});
v.addEventListener('timeupdate',()=>{let k=0;c.ch.forEach((x,j)=>{if(v.currentTime>=x[0])k=j});bs.forEach((b,j)=>b.classList.toggle('on',j===k))});
const ch=document.getElementById('chips');if(ch)ch.onclick=e=>{const b=e.target.closest('button');if(!b)return;document.body.style.setProperty('--a',b.dataset.c);ch.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));document.getElementById('cm').textContent='Shade selected: '+b.textContent+'.'};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.r').forEach(el=>io.observe(el));
})();