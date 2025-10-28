// === FUNGSI TUTORIAL & EDITOR ===
function el(tag, text='', cls=''){const e=document.createElement(tag);if(text)e.textContent=text;if(cls)e.className=cls;return e;}
function codeEl(text){const c=document.createElement('code');c.textContent=text;return c;}

function initTutorial(){
  const c=document.getElementById('tutorial-content');
  const analogy=el('div','', 'analogy');
  analogy.innerHTML='<strong>Bayangkan kamu mau bikin rumah:</strong><br>HTML = struktur, CSS = cat & gaya, JS = listrik & interaksi.';
  c.appendChild(analogy);

  c.appendChild(el('h2','1. Apa Itu HTML?'));
  c.appendChild(el('p','HTML membentuk struktur dasar halaman web.'));
  c.appendChild(el('h3','Contoh Tag HTML'));
  const ul=el('ul');
  ['<h1>','<p>','<img>','<a>','<div>'].forEach(tag=>{
    const li=el('li');li.appendChild(codeEl(tag));li.append(' – elemen umum HTML');ul.appendChild(li);
  });
  c.appendChild(ul);

  c.appendChild(el('h2','2. Apa Itu CSS?'));
  c.appendChild(el('p','CSS mengatur tampilan halaman (warna, layout, font).'));
  const preCSS=el('pre');preCSS.textContent='body { background: black; color: white; }';c.appendChild(preCSS);

  c.appendChild(el('h2','3. Apa Itu JavaScript?'));
  c.appendChild(el('p','JavaScript memberi perilaku dan interaksi pada halaman.'));
  const preJS=el('pre');preJS.textContent="<button onclick=\"alert('Halo!')\">Klik</button>";c.appendChild(preJS);

  c.appendChild(el('h2','4. Coba Sendiri!'));
  const btns=el('div');
  ['Level 1','Level 2','Level 3','Level 4'].forEach((t,i)=>{
    const b=el('button',t,'btn');b.onclick=()=>loadExample(i+1);btns.appendChild(b);
  });
  c.appendChild(btns);
}

const editor=document.getElementById('code-editor');
const preview=document.getElementById('preview-frame');
const errorOut=document.getElementById('error-output');
let timeout;

editor.addEventListener('input',()=>{
  clearTimeout(timeout);
  timeout=setTimeout(renderPreview,400);
});

function renderPreview(){
  const code=editor.value.trim();
  if(!code){
    errorOut.textContent="⚠️ Panel kode kosong.";
    preview.srcdoc="<p style='color:#777;text-align:center;margin-top:20px;'>Preview kosong...</p>";
    return;
  }
  try{
    preview.srcdoc=code;
    errorOut.textContent="✅ Preview dimuat!";
    errorOut.className="error-content success";
  }catch(e){
    errorOut.textContent="❌ Error: "+e.message;
    errorOut.className="error-content";
  }
}

function loadExample(level){
  let code="";
  if(level===1) code=`<!DOCTYPE html>
<html><body><h1>Halo Dunia!</h1><p>Ini HTML dasar.</p></body></html>`;
  if(level===2) code=`<style>body{background:#000;color:white}</style><h1>Belajar CSS</h1>`;
  if(level===3) code=`<button onclick="alert('Halo!')">Klik Aku</button>`;
  if(level===4) code=`<script>document.write('Proyek mini berjalan!');<\/script>`;
  editor.value=code;
  renderPreview();
}

initTutorial();