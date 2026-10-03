function d(t,e,n){const o=r=>{const a=r==null?"":String(r);return/[",\n]/.test(a)?`"${a.replace(/"/g,'""')}"`:a},s=[e.map(o).join(",")];for(const r of n)s.push(r.map(o).join(","));const c=new Blob([`\uFEFF${s.join(`\r
`)}`],{type:"text/csv;charset=utf-8"});i(c,t.endsWith(".csv")?t:`${t}.csv`)}function p(t,e,n){d(t,e.map(o=>o[1]),(n||[]).map(o=>e.map(s=>typeof s[2]=="function"?s[2](o):o[s[0]])))}function l(t,e,n,o="数据导出"){const s=`<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
<head><meta charset="utf-8"><style>
table{border-collapse:collapse;font-family:"Microsoft YaHei",sans-serif;font-size:12px}
th{background:#eef1f6;border:1px solid #c9cfda;padding:6px 8px;font-weight:600}
td{border:1px solid #d8dde6;padding:5px 8px}
h3{font-family:"Microsoft YaHei",sans-serif}
</style></head><body>
<h3>${o}</h3>
<table><thead><tr>${e.map(r=>`<th>${r}</th>`).join("")}</tr></thead>
<tbody>${n.map(r=>`<tr>${r.map(a=>`<td>${a==null?"":String(a)}</td>`).join("")}</tr>`).join("")}</tbody></table></body></html>`,c=new Blob([`\uFEFF${s}`],{type:"application/vnd.ms-excel;charset=utf-8"});i(c,t.endsWith(".xls")?t:`${t}.xls`)}function i(t,e){const n=URL.createObjectURL(t),o=document.createElement("a");o.href=n,o.download=e,document.body.appendChild(o),o.click(),document.body.removeChild(o),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function f(t){if(!t){window.print();return}t.classList.add("print-area"),window.print(),setTimeout(()=>t.classList.remove("print-area"),300)}export{p as a,l as e,f as p};
