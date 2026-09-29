document.addEventListener('DOMContentLoaded',()=>{
  const page=(location.pathname.split('/').pop()||'index.html');

  document.querySelectorAll('.sidebar a').forEach(a=>{
    const href=a.getAttribute('href');
    if(href===page||(page===''&&href==='index.html')) a.classList.add('active');
  });

  const q=document.querySelector('[data-search]');
  if(q){
    q.addEventListener('input',()=>{
      const s=q.value.toLowerCase();
      document.querySelectorAll('[data-search-item]').forEach(x=>{
        x.style.display=x.innerText.toLowerCase().includes(s)?'block':'none';
      });
    });
  }

  // Transcript 2: use Babit's real MySQL production troubleshooting example for Q5.
  if(page==='transcript-2.html'){
    document.querySelectorAll('details').forEach(item=>{
      const summary=item.querySelector('summary');
      if(summary && summary.textContent.trim()==='Q5. Tell me about a challenging problem you solved.'){
        const answer=item.querySelector('p');
        if(answer){
          answer.textContent='One challenging production issue was an unexpected surge in MySQL utilization. I first checked MySQL PROCESSLIST and noticed repeating SELECT activity. To understand what the application processes were actually doing, I captured strace output for the running PHP processes and compared the traces. That helped us identify a long-running process repeatedly following the same database path because of a circular dependency/loop. Once the underlying issue was corrected and the affected process was stopped, the database utilization returned to normal. The key learning for me was to move from the symptom to evidence step by step instead of making assumptions.';
        }
      }
    });
  }
});