(function(f,a){var i=function(){return document.createElement("canvas").getContext("2d")};var e=function(j,k){var l=new Image();var m=j.src||j;if(m.substring(0,5)!=="data:"){l.crossOrigin="Anonymous"}l.onload=function(){var n=i("2d");n.drawImage(l,0,0);var o=n.getImageData(0,0,l.width,l.height);k&&k(o.data)};l.src=m};var c=function(j){return["rgb(",j,")"].join("")};var b=function(j){return j.map(function(k){return c(k.name)})};var h=5;var g=10;var d={};d.colors=function(k,l){l=l||{};var j=l.exclude||[],m=l.paletteSize||g;e(k,function(r){var o=(k.width*k.height)||r.length,q={},u="",t=[],n={dominant:{name:"",count:0},palette:Array.apply(null,new Array(m)).map(Boolean).map(function(w){return{name:"0,0,0",count:0}})};var s=0;while(s<o){t[0]=r[s];t[1]=r[s+1];t[2]=r[s+2];u=t.join(",");if(u in q){q[u]=q[u]+1}else{q[u]=1}if(j.indexOf(c(u))===-1){var v=q[u];if(v>n.dominant.count){n.dominant.name=u;n.dominant.count=v}else{n.palette.some(function(w){if(v>w.count){w.name=u;w.count=v;return true}})}}s+=h*4}if(l.success){var p=b(n.palette);l.success({dominant:c(n.dominant.name),secondary:p[0],palette:p})}})};f.RGBaster=f.RGBaster||d})(window);
