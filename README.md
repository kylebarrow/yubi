# Yubi v1.0.4

#### A touch target bookmarklet

Yubi overlays a web page with a finger or thumb touch target, useful for testing how touchable page elements are. To install, simply drag <a href="javascript:(function()%7B'use%20strict';function%20x(r,i)%7Bvar%20s,o=%5B%5D,u=r+i*2,a=u/2,f=%5Ba,r/2%5D;s=v%5Be%5D(S,'svg');s%5Bt%5D('width',u+2);s%5Bt%5D('height',u+2);s%5Bt%5D('pointer-events','none');for(m=0;m%3C2;m+=1)%7Bo%5Bm%5D=v%5Be%5D(S,'circle');o%5Bm%5D%5Bt%5D('cx',a+1);o%5Bm%5D%5Bt%5D('cy',a+1);o%5Bm%5D%5Bt%5D('r',f%5Bm%5D);o%5Bm%5D%5Bt%5D('stroke','white');o%5Bm%5D%5Bt%5D('stroke-width',1);o%5Bm%5D%5Bt%5D('stroke-opacity',.3*(m+1));o%5Bm%5D%5Bt%5D('fill-opacity',.2*(m+1));o%5Bm%5D%5Bt%5D('fill','red');s%5Bn%5D(o%5Bm%5D)%7Dreturn%20s%7Dfunction%20T(e)%7Bg%5Br%5D.top=e.pageY-y+'px';g%5Br%5D.left=e.pageX-y+'px'%7Dfunction%20N(e)%7Bg=e;y=Math.round(g.getBoundingClientRect().width/2);v.body%5Bn%5D(g);b%5Bs%5D%5Bi%5D(b);g%5Br%5D.position='absolute';d%5Bo%5D(u,T,a);d%5Bo%5D('mousemove',T,a);d%5Bo%5D('touchstart',T,a)%7Dfunction%20C()%7Bvar%20e=document.getElementsByTagName('meta');for(m=0;m%3Ce%5Bf%5D;m+=1)if(e%5Bm%5D.getAttribute('name')==='viewport')return!0;return%20a%7Dfunction%20k()%7Bvar%20e=v%5Bl%5D(c),i=v%5Bl%5D(c),s=v%5Bl%5D(c),f=v%5Bl%5D(c),d=v%5Bl%5D(c),m=x(52,13),g=x(45,6),y=C(),E=y?%27%27:%27%3Cdiv%20style=%5C%27font-size:12px;%20padding-top:%2010px%5C%27%3E%3Cspan%20style=%5C%27color:%23F00%5C%27%3EWARNING:%3C/span%3E%20This%20page%20has%20no%20viewport%20meta%20tag,%20touch%20size%20may%20be%20inaccurate%20in%20browsers%20that%20rely%20on%20this%20to%20set%20viewport%20scale%3C/div%3E%27,S=y?240:300;b=v%5Bl%5D(c);b%5Bt%5D(r,%27z-index:%2010000;%20padding:%200;%20margin:%200;%20background-color:%20rgba(255,%20255,%20255,%200.9);%20color:%20%23000;position:%20fixed;%20top:%200;%20bottom:%200;%20left:%200;%20right:%200;%20font-family:%5C%27Helvetica%5C%27,%20%5C%27Helvetica%20Neue%5C%27,%20%5C%27Roboto%5C%27,%20sans-serif;%20font-size:%2012px;%20line-height:%201.5em;%20font-weight:%20200;%20text-align:%20center%27);b.className=w;g%5Bt%5D(h,w);m%5Bt%5D(h,w);e%5Bt%5D(r,%27width:%20280px;%20height:%20%27+S+%27px;%20border-radius:%2010px;%20background-color:%20%23fff;%20position:%20fixed;%20top:%2050%25;%20left:%2050%25;%20margin-top:%20-%27+S/2+%27px;%20margin-left:%20-140px%27);m%5Br%5D.zIndex=1e4;g%5Br%5D.zIndex=1e4;i%5Bt%5D(r,%27float:%20left;%20width:%20115px;%20cursor:%20pointer;%20margin-left:%2020px%27);i%5Bn%5D(m);s%5Bt%5D(r,%27float:%20right;%20width:%20115px;%20cursor:%20pointer;%20margin-right:%2020px;%20padding-top:%2011px%27);s%5Bn%5D(g);f%5Bp%5D=%27%3Cdiv%20style=%5C%27font-size:%2016px;%20padding:%2010px%200%2010px%200%5C%27%3EThumb%3C/div%3E%3Cdiv%3E8mm%20target%3C/div%3E%3Cdiv%3E2mm%20boundary%3C/div%3E%27;i%5Bn%5D(f);d%5Bp%5D=%27%3Cdiv%20style=%5C%27font-size:%2016px;%20padding:%20%2020px%200%2010px%200%5C%27%3EFinger%3C/div%3E%3Cdiv%3E7mm%20target%3C/div%3E%3Cdiv%3E1mm%20boundary%3C/div%3E%27;s%5Bn%5D(d);e%5Bp%5D=%27%3Cdiv%20style=%5C%27padding:%20%2020px%2010px%2020px%2010px;%20font-size:%2020px;%5C%27%3EChoose%20touch%20size%27+E+%27%3C/div%3E%27;e%5Bn%5D(i);e%5Bn%5D(s);b%5Bn%5D(e);v.body%5Bn%5D(b);s%5Bo%5D(u,function()%7BN(g)%7D,a);i%5Bo%5D(u,function()%7BN(m)%7D,a)%7Dvar%20e=%27createElementNS%27,t=%27setAttribute%27,n=%27appendChild%27,r=%27style%27,i=%27removeChild%27,s=%27parentNode%27,o=%27addEventListener%27,u=%27click%27,a=!1,f=%27length%27,l=%27createElement%27,c=%27div%27,h=%27class%27,p=%27innerHTML%27,d=window,v=document,m,g,y,b,w=%27_yubi-%27+%20+(new%20Date),E=v.querySelectorAll(%27%5Bclass%7C=_yubi%5D%27),S=%27http://www.w3.org/2000/svg%27;if(E%5Bf%5D%3E0)for(m=E%5Bf%5D-1;m%3E=0;m-=1)E%5Bm%5D%5Bs%5D%5Bi%5D(E%5Bm%5D);else%20k()%7D)();">Yubi</a> to your bookmarks.

Yubi will launch a dialog to select thumb or finger touch size. The inner circle represents touch target size with an outer halo target boundary.

To remove Yubi from a page, just click the bookmarklet again.

Yubi works on modern desktop and mobile browsers but touch size may be inaccurate on mobile and tablet browsers that rely on a viewport meta tag to set viewport scale but with no viewport meta tag present. Yubi will warn you if this is the case.

Due to CSS limitations, touch size may be slightly off on some devices (see limitations below).

## Touch sizes

Touch sizes are based on [Nokia recommendations](http://www.developer.nokia.com/Resources/Library/Design_and_UX/#!designing-for-nokia-devices/interaction-design/designing-for-touch/usability-considerations/scale-and-positioning-of-controls.html): for thumbs, an 8mm touch target with 2mm boundary and for fingers, a 7mm touch target and 1 mm boundary.

There are numerous usability studies with varying touch size recommendations but I prefer Nokia’s as its finger touch sizes are close to what Apple recommends in their [iOS Human Interface Guidelines](https://developer.apple.com/library/safari/#documentation/UserExperience/Conceptual/MobileHIG/Introduction/Introduction.html) but Nokia also includes thumb sizes. We use our thumbs with touch devices, a lot.

## Limitations

In a prefect would, I would set the touch size using millimetres but unfortunately this doesn’t work so I have to convert millimetres to pixels. To do this, I calculated millimetre to pixel conversions for a number of popular devices when viewport width is set to `device-width` (device independent pixels):

### Thumb size pixel conversions

<table>
<thead>
<tr><th></th><th>Target</th><th>Boundary</th></tr>
</thead>
<tbody>
<tr>
<th>iPhone</th>
<td>52</td>
<td>13</td>
</tr>
<tr>
<th>iPad</th>
<td>42</td>
<td>10</td>
</tr>
<tr>
<th>iPad mini</th>
<td>52</td>
<td>13</td>
</tr>
<tr>
<th>Galaxy Nexus</th>
<td>50</td>
<td>12</td>
</tr>
<tr>
<th>Nexus 7</th>
<td>51</td>
<td>13</td>
</tr>
</tbody>
</table>

### Finger size pixel conversions###

<table>
<thead>
<tr><th></th><th>Target</th><th>Boundary</th></tr>
</thead>
<tbody>
<tr>
<th>iPhone</th>
<td>45</td>
<td>6</td>
</tr>
<tr>
<th>iPad</th>
<td>36</td>
<td>5</td>
</tr>
<tr>
<th>iPad mini</th>
<td>45</td>
<td>6</td>
</tr>
<tr>
<th>Galaxy Nexus</th>
<td>44</td>
<td>6</td>
</tr>
<tr>
<th>Nexus 7</th>
<td>45</td>
<td>6</td>
</tr>
</tbody>
</table>

Based on this, I selected safe pixel sizes: for thumbs, a 52 pixel target with 13 pixel boundary and for fingers, a 45 pixel target and 6 pixel boundary. These sizes will be a little large on devices like the iPad but it’s better to have too large rather than too small touch targets.

