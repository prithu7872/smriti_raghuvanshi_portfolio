(function(){
const D=window.CAMPAIGNS||[],i=D.findIndex(x=>x.s===document.body.dataset.c);
if(i<0){document.getElementById('app').textContent='Campaign record unavailable.';return;}
const c=D[i],P=D[(i+5)%D.length],N=D[(i+1)%D.length];
const mm=s=>Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0');
const sec=(h,b,tag)=>'<section class="sec r"><h2>'+h+(tag?'<small class="tag">'+tag+'</small>':'')+'</h2>'+b+'</section>';
const plat=[
'Opening frame: the first seconds establish the subject or question that gives the viewer a reason to stay.',
'Vertical viewing: the 9:16 presentation is designed for a phone-first social feed.',
'Story rhythm: the sequence of scenes moves from an opening hook to a recognisable moment and a closing message.',
'Institutional identity: the supplied films use LPU branding and close with an institutional end card.'
];
const caption=c.cap
 ? sec('Original Instagram caption','<blockquote>'+c.cap.replace(/\n/g,'<br>')+'</blockquote><p class="sm">'+c.pl+'</p>','Supplied caption')
 : sec('Caption record','<blockquote>'+c.wt+'</blockquote><p class="source-note">The full original Instagram caption was not included in the supplied caption document. The working title above is retained as provided.</p><p>'+c.pl+'</p>','Working title');
document.body.style.setProperty('--a',c.a);document.body.style.setProperty('--b',c.b);
document.getElementById('app').innerHTML=
'<header class="top"><a href="../index.html#projects">← Portfolio</a><a href="../projects/lpu-social-campaigns.html">Project 01 · Campaign archive ↗</a><span>CAMPAIGN '+c.n+' / 06</span></header>'+
'<section class="hero '+c.cls+'"><div class="mot" aria-hidden="true">'+c.mot+'</div><span class="k">'+c.cat+' · Lovely Professional University</span><h1>'+c.h+'</h1><p class="in">'+c.intro+'</p></section>'+
'<div class="wrap '+c.cls+'"><main>'+
sec('The campaign context','<p>'+c.ctx+'</p>')+
sec('The creative insight','<p>'+c.ins+'</p>','Creative reading')+
sec('The central idea','<p class="big">'+c.idea+'</p>','Creative reading')+
(c.chips?sec('Pick a shade','<div class="chips" id="chips">'+c.chips.map(x=>'<button style="--c:'+x[1]+'" data-c="'+x[1]+'" aria-label="'+x[0]+'"><span>'+x[0]+'</span></button>').join('')+'</div><p class="sm" id="cm">Choose a colour to re-theme this page, echoing the film’s opening draw. Nothing is stored.</p>'):'')+
sec('Video storytelling breakdown','<ol class="ch">'+c.ch.map(x=>'<li><button data-t="'+x[0]+'"><b>'+mm(x[0])+'</b><span><strong>'+x[1]+'</strong>'+x[2]+'</span></button></li>').join('')+'</ol><p class="sm">Timestamps are approximate reference points from the supplied video review, not frame-accurate edit markers.</p>')+
sec('Creative execution','<ul>'+c.ex.map(x=>'<li>'+x+'</li>').join('')+'</ul>','Observed in the footage')+
caption+
sec('Platform and audience strategy','<ul>'+plat.map(x=>'<li>'+x+'</li>').join('')+'</ul>','Format analysis · not measured performance')+
sec('Contribution context','<p>The supplied campaign files identify this as part of the LPU social-media work, but they do not document Smriti’s individual responsibilities for this specific reel. This case study therefore analyses the visible creative without attributing unverified tasks.</p>')+
sec('Performance and reflection','<p>No verified views, reach, engagement, link clicks or conversion figures were supplied for this individual campaign. The creative approach is discussed here without presenting unmeasured outcomes as results.</p>')+
sec('Original campaign source','<p>The supplied source set includes the campaign video and the caption text available for this entry. A direct Instagram post URL was not included.</p>')+
'</main><aside><figure class="phone"><video id="v" controls playsinline preload="none" data-src="'+c.v+'" aria-label="'+c.t+' campaign video" hidden></video><div id="vm" class="vm"><div class="poster" style="--pa:'+c.a+';--pb:'+c.b+'"><span>'+c.n+' / 06 · LPU CAMPAIGN</span><strong>'+c.mot+'</strong><b>'+c.t+'</b><small>CAMPAIGN FILM</small></div><p class="source-note">The original MP4 has not yet been added to the hosted portfolio assets. The campaign analysis and storyboard remain available below.</p></div><figcaption>9:16 · original campaign film</figcaption></figure></aside></div>'+
'<nav class="nx"><a href="'+P.s+'.html"><small>← Previous</small>'+P.t+'</a><a href="'+N.s+'.html"><small>Next →</small>'+N.t+'</a></nav>'+
'<footer>Portfolio presentation of supplied LPU campaign material. Original media remains attributed to its respective rights holders; confirm institutional permissions before external distribution.</footer>';
const v=document.getElementById('v'),bs=[...document.querySelectorAll('.ch button')];
const vm=document.getElementById('vm');v.addEventListener('error',()=>{v.hidden=true;vm.hidden=false;});if(v.dataset.src){fetch(v.dataset.src,{method:'HEAD'}).then(r=>{if(!r.ok)throw new Error('Video asset unavailable');v.src=v.dataset.src;v.hidden=false;vm.hidden=true;}).catch(()=>{v.hidden=true;vm.hidden=false;});}
bs.forEach(b=>b.onclick=()=>{if(v.hidden||!v.currentSrc)return;v.currentTime=+b.dataset.t;v.play().catch(()=>{});v.scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});});
v.addEventListener('timeupdate',()=>{let k=0;c.ch.forEach((x,j)=>{if(v.currentTime>=x[0])k=j;});bs.forEach((b,j)=>b.classList.toggle('on',j===k));});
const ch=document.getElementById('chips');if(ch)ch.onclick=e=>{const b=e.target.closest('button');if(!b)return;document.body.style.setProperty('--a',b.dataset.c);ch.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));document.getElementById('cm').textContent='Shade selected: '+b.textContent+'.';};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.1});document.querySelectorAll('.r').forEach(el=>io.observe(el));
})();