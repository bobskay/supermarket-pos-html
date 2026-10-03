function t(e){const s=typeof e=="string"?e:e==null?void 0:e.barcode,n=String(s||"").replace(/\D/g,"");return n.length<6?"":`./products/${n}.svg`}export{t as p};
