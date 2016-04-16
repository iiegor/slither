var testing = !1;
0 <= window.location.href.indexOf("/testing") && (testing = !0);
var forcing = !1
  , ua = navigator.userAgent.toLowerCase()
  , is_android = 0 <= ua.indexOf("android")
  , is_amazon = 0 <= ua.indexOf("kindle") || 0 <= ua.indexOf("silk/")
  , uua = navigator.userAgent
  , is_ios = 0 <= uua.indexOf("iPad") || 0 <= uua.indexOf("iPhone") || 0 <= uua.indexOf("iPod")
  , is_mobile = 0 <= ua.indexOf("mobile")
  , is_firefox = -1 < ua.indexOf("firefox")
  , is_ie8oo = window.attachEvent && !window.addEventListener
  , is_safari = is_firefox = !1;
0 <= ua.indexOf("safari") && -1 == ua.indexOf("chrome") && (is_safari = !0);
var no_raf = !1
  , raf = function(b) {}
;
window.requestAnimationFrame ? raf = window.requestAnimationFrame : window.mozRequestAnimationFrame ? raf = window.mozRequestAnimationFrame : window.webkitRequestAnimationFrame ? raf = window.webkitRequestAnimationFrame : no_raf = !0;
is_mobile || (no_raf = !0);
var no_raf = !0, a, i, j, k, l, m, n, o, r, fj, d, d2, qq, sc, agpu = "translateZ(0)", ang, sang, vang;
function trf(b, q) {
  b.style.webkitTransform = b.style.OTransform = b.style.msTransform = b.style.MozTransform = b.style.transform = q
}
function trfo(b, q) {
  b.style.webkitTransformOrigin = b.style.OTransformOrigin = b.style.msTransformOrigin = b.style.MozTransformOrigin = b.style.transformOrigin = q
}
var pi2 = 2 * Math.PI
  , animating = !1
  , startAnimation = function() {
  animating = !0;
  no_raf ? is_mobile ? setInterval("oef()", 33) : is_safari ? setInterval("oef()", 33) : setInterval("oef()", 20) : raf(oef)
}
  , ois = []
  , wic = 0
  , ldi = function(b) {
  wic++;
  var q = {}
    , c = document.createElement("img");
  q.ii = c;
  q.sc = 1;
  c.onload = function() {
    for (var b = ois.length - 1; 0 <= b; b--)
      if (ois[b].ii == this) {
        b = ois[b];
        b.ww = this.width;
        b.hh = this.height;
        b.loaded = !0;
        if (b.onload)
          b.onload();
        break
      }
    wic--;
    0 == wic && startAnimation()
  }
  ;
  q.src = b;
  ois.push(q);
  return q
}
;
function addCss(b) {
  var q = document.createElement("style");
  document.getElementsByTagName("head")[0].appendChild(q);
  q.type = "text/css";
  q.styleSheet ? q.styleSheet.cssText = b : q.appendChild(document.createTextNode(b))
}
var nbg = document.getElementById("nbg"), nzbg, sadg, sadu, sadd, p, xx, yy, grw, grh, elem, map, imgd, ctx;
elem = document.createElement("canvas");
var rw = 64
  , rh = 64;
elem.width = rw;
elem.height = rh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, rw, rh);
imgd = map.data;
l = imgd.length;
for (p = 0; p < l; p += 4)
  .5 > Math.random() ? imgd[p] = imgd[p + 1] = imgd[p + 2] = 0 : (imgd[p] = 44,
  imgd[p + 1] = 56,
  imgd[p + 2] = 68),
  imgd[p + 3] = Math.floor(32 * Math.random());
ctx.putImageData(map, 0, 0);
nzbg = elem.toDataURL();
32 < nzbg.length && (nbg.style.backgroundImage = "url(" + nzbg + ")");
grw = 2;
grh = 56;
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
  for (j = (grh - 1 - yy) / (grh - 1),
  j = .5 * (1 - Math.cos(Math.PI * j)),
  xx = 0; xx < grw; xx++)
    imgd[p] = Math.min(255, Math.floor(54.4 + 32 * j)),
    imgd[p + 1] = Math.min(255, Math.floor(108.8 + 64 * j)),
    imgd[p + 2] = Math.min(255, Math.floor(81.6 + 48 * j)),
    imgd[p + 3] = 255,
    p += 4;
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
  for (j = (grh - 1 - yy) / (grh - 1),
  j = .5 * (1 - Math.cos(Math.PI * j)),
  xx = 0; xx < grw; xx++)
    imgd[p] = Math.min(255, Math.floor(72 + .95 * 48 * j)),
    imgd[p + 1] = Math.min(255, Math.floor(171 + 93.1 * j)),
    imgd[p + 2] = Math.min(255, Math.floor(132 + .95 * 87 * j)),
    imgd[p + 3] = 255,
    p += 4;
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
  for (j = yy / (grh - 1),
  j = .5 * (1 - Math.cos(Math.PI * j)),
  xx = 0; xx < grw; xx++)
    imgd[p] = Math.floor(.1 * 48 + 36 * j),
    imgd[p + 1] = Math.floor(7 + 52.5 * j),
    imgd[p + 2] = Math.floor(6.4 + 48 * j),
    imgd[p + 3] = 255,
    p += 4;
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
32 < sadg.length && 32 < sadu.length && 32 < sadd.length && addCss(".sadg1 { background-image:url(" + sadg + "); }  .sadu1 { background-image:url(" + sadu + "); }  .sadd1 { background-image:url(" + sadd + "); }");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
  for (j = (grh - 1 - yy) / (grh - 1),
  j = .5 * (1 - Math.cos(Math.PI * j)),
  xx = 0; xx < grw; xx++)
    imgd[p] = Math.min(255, Math.floor(.85 * 52 + 26 * j)),
    imgd[p + 1] = Math.min(255, Math.floor(81.6 + 48 * j)),
    imgd[p + 2] = Math.min(255, Math.floor(.85 * 144 + 72 * j)),
    imgd[p + 3] = 255,
    p += 4;
ctx.putImageData(map, 0, 0);
sadg = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
  for (j = (grh - 1 - yy) / (grh - 1),
  j = .5 * (1 - Math.cos(Math.PI * j)),
  xx = 0; xx < grw; xx++)
    imgd[p] = Math.min(255, Math.floor(72 + .95 * 48 * j)),
    imgd[p + 1] = Math.min(255, Math.floor(132 + .95 * 87 * j)),
    imgd[p + 2] = Math.min(255, Math.floor(171 + 93.1 * j)),
    imgd[p + 3] = 255,
    p += 4;
ctx.putImageData(map, 0, 0);
sadu = elem.toDataURL();
elem = document.createElement("canvas");
elem.width = grw;
elem.height = grh;
ctx = elem.getContext("2d");
map = ctx.getImageData(0, 0, grw, grh);
imgd = map.data;
l = imgd.length;
for (yy = p = 0; yy < grh; yy++)
  for (j = yy / (grh - 1),
  j = .5 * (1 - Math.cos(Math.PI * j)),
  xx = 0; xx < grw; xx++)
    imgd[p] = Math.floor(.1 * 48 + 36 * j),
    imgd[p + 1] = Math.floor(5.4 + 40.5 * j),
    imgd[p + 2] = Math.floor(7 + 52.5 * j),
    imgd[p + 3] = 255,
    p += 4;
ctx.putImageData(map, 0, 0);
sadd = elem.toDataURL();
32 < sadg.length && 32 < sadu.length && 32 < sadd.length && addCss(".sadg2 { background-image:url(" + sadg + "); }  .sadu2 { background-image:url(" + sadu + "); }  .sadd2 { background-image:url(" + sadd + "); }");
var mos = []
  , m_iv = -1
  , swmup = !1;
function mkBtn(b, q, c, h) {
  var u = document.createElement("div");
  b.tagName || (b = document.getElementById(b),
  b.style.width = c + "px",
  b.style.height = h + "px",
  u.style.width = c + "px",
  u.style.height = h + "px");
  var f = {
    lic: 0
  };
  f.elem = b;
  f.md = !1;
  f.mo = !1;
  f.mdf = 0;
  f.mof = 0;
  var e = !0;
  b.style && b.style.position && ("absolute" == (b.style.position + "").toLowerCase() && (e = !1),
  "fixed" == (b.style.position + "").toLowerCase() && (e = !1));
  e && (b.style.position = "relative");
  u.style.position = "absolute";
  u.style.opacity = 0;
  u.style.left = "0px";
  u.style.top = "0px";
  b.appendChild(u);
  f.ho = u;
  f.alic = function() {
    this.lic++;
    if (3 == this.lic && (this.ho.style.opacity = 1,
    this.onload))
      this.onload()
  }
  ;
  mos.push(f);
  f.setEnabled = function(b) {
    b ? (this.disabled = !1,
    this.upi.style.opacity = this.mof,
    this.downi.style.opacity = this.mdf,
    this.elem.style.opacity = 1,
    this.elem.style.cursor = "pointer") : (this.disabled = !0,
    this.upi.style.opacity = 0,
    this.downi.style.opacity = 0,
    this.elem.style.opacity = .38,
    this.elem.style.cursor = "default")
  }
  ;
  if (q)
    for (e = 1; 3 >= e; e++) {
      var y = document.createElement("img");
      y.draggable = 
      !1;
      y.style.position = "absolute";
      y.style.left = "0px";
      y.style.top = "0px";
      y.border = 0;
      y.width = c;
      y.height = h;
      y.className = "nsi";
      u.appendChild(y);
      1 == e ? (f.normi = y,
      y.onload = function() {
        for (var b = mos.length - 1; 0 <= b; b--) {
          var e = mos[b];
          if (e.normi == this) {
            e.alic();
            break
          }
        }
      }
      ,
      y.src = q + ".png") : 2 == e ? (f.upi = y,
      y.style.opacity = 0,
      y.onload = function() {
        for (var b = mos.length - 1; 0 <= b; b--) {
          var e = mos[b];
          if (e.upi == this) {
            e.alic();
            break
          }
        }
      }
      ,
      y.src = q + "up.png") : 3 == e && (f.downi = y,
      y.style.opacity = 0,
      y.onload = function() {
        for (var b = mos.length - 1; 0 <= b; b--) {
          var e = 
          mos[b];
          if (e.downi == this) {
            e.alic();
            break
          }
        }
      }
      ,
      y.src = q + "down.png")
    }
  else
    u.style.opacity = 1;
  b.onmouseenter = function() {
    for (var b = mos.length - 1; 0 <= b; b--) {
      var e = mos[b];
      if (e.elem == this) {
        if (!e.disabled && !e.mo) {
          e.mo = !0;
          if (e.onmouseenter)
            e.onmouseenter();
          -1 == m_iv && (m_iv = setInterval("hmos()", 25))
        }
        break
      }
    }
  }
  ;
  b.onmouseleave = function() {
    for (var b = mos.length - 1; 0 <= b; b--) {
      var e = mos[b];
      if (e.elem == this) {
        if (e.mo) {
          e.mo = !1;
          if (e.onmouseleave)
            e.onmouseleave();
          -1 == m_iv && (m_iv = setInterval("hmos()", 25))
        }
        break
      }
    }
  }
  ;
  b.onmousedown = function(b) {
    for (var e = 
    mos.length - 1; 0 <= e; e--) {
      var f = mos[e];
      if (f.elem == this) {
        if (!f.disabled && !f.md) {
          f.md = !0;
          if (f.onmousedown)
            f.onmousedown(b, f);
          -1 == m_iv && (m_iv = setInterval("hmos()", 25));
          return !1
        }
        break
      }
    }
  }
  ;
  b.onmouseup = b.ondragend = function(b) {
    for (var e = mos.length - 1; 0 <= e; e--) {
      var f = mos[e];
      if (f.elem == this) {
        if (f.md) {
          f.mdf = 1;
          f.md = !1;
          if (f.onmouseup && (f.onmouseup(b, f),
          is_mobile))
            f.elem.onmouseleave();
          -1 == m_iv && (m_iv = setInterval("hmos()", 25))
        }
        break
      }
    }
  }
  ;
  swmup || (swmup = !0,
  window.onmouseup = window.ondragover = window.ondragend = function() {
    for (var b = 
    mos.length - 1; 0 <= b; b--) {
      var e = mos[b];
      e.md && (e.md = !1,
      -1 == m_iv && (m_iv = setInterval("hmos()", 25)))
    }
  }
  );
  return f
}
function hmos() {
  for (var b, q = !1, c = mos.length - 1; 0 <= c; c--) {
    var h = mos[c];
    b = !1;
    h.mo ? 1 != h.mof && (q = !0,
    h.mof += .33,
    1 <= h.mof && (h.mof = 1),
    b = !0) : 0 != h.mof && (q = !0,
    h.mof -= .2,
    0 >= h.mof && (h.mof = 0),
    b = !0);
    b && (h.upi.style.opacity = h.disabled ? 0 : h.mof);
    b = !1;
    h.md ? 1 != h.mdf && (q = !0,
    h.mdf += .33,
    1 <= h.mdf && (h.mdf = 1),
    b = !0) : 0 != h.mdf && (q = !0,
    h.mdf -= .2,
    0 >= h.mdf && (h.mdf = 0),
    b = !0);
    b && (h.downi.style.opacity = h.disabled ? 0 : h.mdf)
  }
  q || (clearInterval(m_iv),
  m_iv = -1)
}
function makeTextBtn(b, q, c, h, u) {
  q || (q = 56);
  56 < q && (q = 56);
  c || (c = 15);
  h || (h = 14);
  var f = document.createElement("div");
  f.className = "btnt nsi sadg" + u;
  var e = f.style;
  e.position = "absolute";
  e.width = "auto";
  e.color = "#ffffff";
  e.fontWeight = "bold";
  e.textAlign = "center";
  e.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
  e.fontSize = c + "px";
  f.textContent = b;
  e.cursor = "pointer";
  document.body.appendChild(f);
  var y = Math.ceil(35 + f.offsetWidth);
  document.body.removeChild(f);
  f.textContent = "";
  e.width = y + "px";
  e.height = q + 
  "px";
  e.lineHeight = q + "px";
  is_mobile || (e.boxShadow = "0px 3px 20px rgba(0,0,0, .75)");
  e.borderRadius = h + "px";
  var F = document.createElement("div")
    , e = F.style;
  e.position = "absolute";
  e.left = e.top = "0px";
  e.width = y + "px";
  e.height = q + "px";
  e.borderRadius = h + 1 + "px";
  e.opacity = 0;
  F.className = "sadu" + u;
  var B = document.createElement("div")
    , e = B.style;
  e.position = "absolute";
  e.left = e.top = "-1px";
  e.width = y + 2 + "px";
  e.height = q + 2 + "px";
  e.borderRadius = h + "px";
  e.opacity = 0;
  B.className = "sadd" + u;
  var w = mkBtn(f);
  w.a = 1;
  w.ho.appendChild(F);
  w.upi = 
  F;
  w.ho.appendChild(B);
  w.downi = B;
  w.ts = c;
  w.ww = y;
  w.bgm = u;
  w.setText = function(b) {
    var e = document.createElement("div");
    e.className = "nsi sadg" + this.bgm;
    var f = e.style;
    f.position = "absolute";
    f.width = "auto";
    f.color = "#ffffff";
    f.fontWeight = "bold";
    f.textAlign = "center";
    f.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
    f.fontSize = this.ts + "px";
    e.textContent = b;
    document.body.appendChild(e);
    f = Math.ceil(35 + e.offsetWidth);
    document.body.removeChild(e);
    this.btnf.textContent = b;
    this.ww = f;
    this.elem.style.width = f + 
    "px";
    this.upi.style.width = f + "px";
    this.downi.style.width = f + 2 + "px";
    this.btnf.style.width = f + "px"
  }
  ;
  c = document.createElement("div");
  f.appendChild(c);
  w.btnf = c;
  e = c.style;
  e.position = "absolute";
  e.left = e.top = "0px";
  e.width = y + "px";
  e.height = q + "px";
  e.borderRadius = h + "px";
  c.textContent = b;
  c.className = "nsi";
  e.color = "#ffffff";
  e.opacity = .9;
  w.ho.appendChild(c);
  return w
}
var sos = [], sis = [], bso, u_m = [64, 32, 16, 8, 4, 2, 1], lgbsc = 1, lgcsc = 1, lb_fr = 0, login_fr = 0, llgmtm = Date.now(), login_iv = -1;
function loginFade() {
  var b = Date.now()
    , q = (b - llgmtm) / 25;
  llgmtm = b;
  login_fr += .05 * q;
  choosing_skin && (login_fr += .06 * q);
  1 <= login_fr ? (login_fr = 1,
  login.style.display = "none",
  cstx.style.display = "none",
  fbh.style.display = "none",
  twth.style.display = "none",
  cskh.style.display = "none",
  grqh.style.display = "none",
  plq.style.display = "none",
  clq.style.display = "none",
  social.style.display = "none",
  login.style.opacity = 1,
  cstx.style.opacity = 1,
  fbh.style.opacity = 1,
  twth.style.opacity = 1,
  cskh.style.opacity = 1,
  grqh.style.opacity = 1,
  plq.style.opacity = 
  1,
  clq.style.opacity = 1,
  social.style.opacity = 1,
  pskh.style.opacity = 1,
  nskh.style.opacity = 1,
  skodiv.style.opacity = 1,
  tip_fr = -1,
  tips.style.display = "none",
  mc.style.opacity = 1,
  loch.style.opacity = 1,
  clearInterval(login_iv),
  login_iv = -1,
  -1 != showlogo_iv && (ncka = lgss = lga = 1,
  showLogo(!0),
  -1 != showlogo_iv && (clearInterval(showlogo_iv),
  showlogo_iv = -1))) : (lgcsc = 1 + .1 * Math.pow(login_fr, 2),
  b = Math.round(lgbsc * lgcsc * 1E5) / 1E5,
  trf(login, "scale(" + b + "," + b + ")"),
  login.style.opacity = 1 - login_fr,
  cstx.style.opacity = 1 - login_fr,
  fbh.style.opacity = 
  1 - login_fr,
  twth.style.opacity = 1 - login_fr,
  cskh.style.opacity = 1 - login_fr,
  grqh.style.opacity = 1 - login_fr,
  plq.style.opacity = 1 - login_fr,
  clq.style.opacity = 1 - login_fr,
  social.style.opacity = 1 - login_fr,
  pskh.style.opacity = login_fr,
  nskh.style.opacity = login_fr,
  skodiv.style.opacity = login_fr,
  mc.style.opacity = login_fr,
  loch.style.opacity = login_fr)
}
var ss_a = 0
  , ss_sh = 0
  , spinner_shown = !1
  , ldmc = document.createElement("canvas");
ldmc.width = 128;
ldmc.height = 128;
ldmc.style.position = "fixed";
ldmc.style.left = "0px";
ldmc.style.top = "0px";
ldmc.style.zIndex = 8388607;
ldmc.style.display = "none";
document.body.appendChild(ldmc);
var lsfr = 0
  , lcldtm = Date.now()
  , sstr = "Save";
"FR" == country ? sstr = "Bien" : "BR" == country && (sstr = "OK");
var sko_btn = o = makeTextBtn(String.fromCharCode(160) + sstr + String.fromCharCode(160), 47, 20, 34, 1)
  , skodiv = o.elem;
skodiv.style.zIndex = 53;
skodiv.style.position = "fixed";
skodiv.style.left = "300px";
skodiv.style.top = "300px";
skodiv.style.display = "none";
skodiv.style.opacity = 0;
document.body.appendChild(skodiv);
o.elem.onclick = function() {
  if (playing) {
    try {
      localStorage.snakercv = snake.rcv
    } catch (b) {}
    playing = connected = !1;
    dead_mtm = Date.now() - 5E3
  }
}
;
var nick = document.getElementById("nick")
  , victory = document.getElementById("victory")
  , victory_bg = document.getElementById("victory_bg")
  , logo = document.getElementById("logo")
  , login = document.getElementById("login")
  , lastscore = document.getElementById("lastscore")
  , nick_holder = document.getElementById("nick_holder")
  , victory_holder = document.getElementById("victory_holder")
  , pstr = "Play";
"DE" == country ? pstr = "Spielen" : "FR" == country ? (pstr = "Jouer",
nick.placeholder = "Surnom") : "BR" == country && (pstr = "Joga",
nick.placeholder = "Apelido");
var play_btn = o = makeTextBtn(String.fromCharCode(160) + pstr + String.fromCharCode(160), 47, 20, 34, 1)
  , pbdiv = o.elem;
pbdiv.style.position = "relative";
pbdiv.style.display = "inline-block";
pbdiv.style.marginTop = "20px";
pbdiv.style.marginBottom = "50px";
var playh = document.getElementById("playh");
playh.style.opacity = 0;
playh.appendChild(pbdiv);
var tips = document.getElementById("tips")
  , tipss = ["Eat to grow longer!", "Don't run into other snakes!", "When longer, hold the mouse for a speed boost!"];
"DE" == country ? tipss = ["Esse um zu wachsen!", "Klicke f\u00fcr mehr Geschwindigkeit!", "Bewege dich nicht in andere Schlangen!"] : "FR" == country ? tipss = ["Mangez de cro\u00eetre!", "Cliquez et vous courrez!", "Ne laissez pas votre t\u00eate toucher d'autres serpents!"] : "BR" == country && (tipss = ["Coma para crescer!", "Clique para correr!", "N\u00e3o deixe que sua cabe\u00e7a para tocar outras cobras!"]);
var tip_pos = -1
  , tip_fr = 1.9;
o.elem.onclick = function() {
  play_btn.disabled || -1 != dead_mtm || (play_btn_click_mtm = Date.now(),
  play_btn.setEnabled(!1),
  spinner_shown = nick.disabled = !0,
  ldmc.style.display = "inline",
  connect())
}
;
var save_btn = o = makeTextBtn(String.fromCharCode(160) + "Save Message" + String.fromCharCode(160), 47, 20, 34, 2)
  , sbdiv = o.elem;
sbdiv.style.position = "relative";
sbdiv.style.display = "inline-block";
sbdiv.style.marginTop = "30px";
sbdiv.style.marginBottom = "50px";
var saveh = document.getElementById("saveh");
saveh.appendChild(sbdiv);
o.elem.onclick = function() {
  if (!save_btn.disabled) {
    var b = asciize(victory.value);
    140 < b.length && (b = b.substr(0, 140));
    if (5 <= protocol_version) {
      var q = new Uint8Array(2 + b.length);
      q[0] = 255;
      q[1] = 118;
      for (var c = 0; c < b.length; c++)
        q[c + 2] = b.charCodeAt(c)
    } else
      for (q = new Uint8Array(1 + b.length),
      q[0] = 118,
      c = 0; c < b.length; c++)
        q[c + 1] = b.charCodeAt(c);
    ws.send(q);
    save_btn.setEnabled(!1);
    victory.disabled = !0
  }
}
;
var wide = !1
  , mww = 850
  , mhh = 700
  , mwwp50 = mww + 50
  , mhhp50 = mhh + 50
  , mwwp150 = mww + 150
  , mhhp150 = mhh + 150
  , mww2 = mww / 2
  , mhh2 = mhh / 2
  , mc = document.createElement("canvas");
mc.style.position = "fixed";
mc.style.left = "0px";
mc.style.top = "0px";
mc.style.zIndex = 5;
mc.width = mww;
mc.height = mhh;
mc.className = "nsi";
document.body.appendChild(mc);
mc.style.display = "none";
mc.style.pointerEvents = "none";
var lbh = document.createElement("div");
lbh.className = "nsi";
lbh.style.position = "fixed";
lbh.style.right = "4px";
lbh.style.top = "4px";
lbh.style.textAlign = "center";
lbh.style.width = "255px";
lbh.style.height = "28px";
lbh.style.color = "#ffffff";
lbh.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbh.style.fontSize = "21px";
lbh.style.fontWeight = "bold";
lbh.style.overflow = "hidden";
lbh.style.opacity = .5;
lbh.style.zIndex = 7;
lbh.style.display = "none";
lbh.style.cursor = "default";
var lstr = "Leaderboard";
"DE" == country ? lstr = "Bestenliste" : "FR" == country ? lstr = "Gagnants" : "BR" == country && (lstr = "L\u00edderes");
lbh.textContent = lstr;
trf(lbh, agpu);
document.body.appendChild(lbh);
var lbs = document.createElement("div");
lbs.className = "nsi";
lbs.style.position = "fixed";
lbs.style.textAlign = "center";
lbs.style.right = "4px";
lbs.style.top = "32px";
lbs.style.width = "50px";
lbs.style.height = "800px";
lbs.style.color = "#ffffff";
lbs.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbs.style.fontSize = "12px";
lbs.style.overflow = "hidden";
lbs.style.opacity = .7;
lbs.style.zIndex = 7;
lbs.style.display = "none";
lbs.style.cursor = "default";
lbs.style.lineHeight = "150%";
trf(lbs, agpu);
document.body.appendChild(lbs);
var lbn = document.createElement("div");
lbn.className = "nsi";
lbn.style.position = "fixed";
lbn.style.textAlign = "left";
lbn.style.whiteSpace = "nowrap";
lbn.style.right = "64px";
lbn.style.top = "32px";
lbn.style.width = "150px";
lbn.style.height = "800px";
lbn.style.color = "#ffffff";
lbn.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbn.style.fontSize = "12px";
lbn.style.overflow = "hidden";
lbn.style.opacity = .7;
lbn.style.zIndex = 8;
lbn.style.display = "none";
lbn.style.cursor = "default";
lbn.style.lineHeight = "150%";
trf(lbn, agpu);
document.body.appendChild(lbn);
var lbp = document.createElement("div");
lbp.className = "nsi";
lbp.style.position = "fixed";
lbp.style.textAlign = "right";
lbp.style.right = "230px";
lbp.style.top = "32px";
lbp.style.width = "30px";
lbp.style.height = "800px";
lbp.style.color = "#ffffff";
lbp.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbp.style.fontSize = "12px";
lbp.style.overflow = "hidden";
lbp.style.opacity = .7;
lbp.style.zIndex = 9;
lbp.style.display = "none";
lbp.style.cursor = "default";
lbp.style.lineHeight = "150%";
trf(lbp, agpu);
document.body.appendChild(lbp);
var lbf = document.createElement("div");
lbf.className = "nsi";
lbf.style.position = "fixed";
lbf.style.left = "8px";
lbf.style.bottom = "4px";
lbf.style.width = "200px";
lbf.style.height = "37px";
lbf.style.color = "#ffffff";
lbf.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
lbf.style.fontSize = "12px";
lbf.style.overflow = "hidden";
lbf.style.opacity = .5;
lbf.style.zIndex = 7;
lbf.style.display = "none";
lbf.style.cursor = "default";
lbf.style.lineHeight = "150%";
trf(lbf, agpu);
document.body.appendChild(lbf);
var vcm = document.createElement("div");
vcm.className = "nsi";
vcm.style.position = "fixed";
vcm.style.left = "8px";
vcm.style.top = "4px";
vcm.style.width = "300px";
vcm.style.height = "228px";
vcm.style.color = "#ffffff";
vcm.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';
vcm.style.fontSize = "13px";
vcm.style.overflow = "hidden";
vcm.style.wordWrap = "break-word";
vcm.style.opacity = .5;
vcm.style.zIndex = 7;
vcm.style.display = "none";
vcm.style.cursor = "default";
trf(vcm, agpu);
document.body.appendChild(vcm);
var loch = document.createElement("div");
loch.className = "nsi";
loch.style.position = "fixed";
loch.style.right = "16px";
loch.style.bottom = "16px";
loch.style.width = loch.style.height = "104px";
loch.style.zIndex = 10;
loch.style.display = "none";
document.body.appendChild(loch);
var loc = document.createElement("img")
  , lc = document.createElement("canvas");
lc.width = lc.height = 104;
ctx = lc.getContext("2d");
ctx.save();
ctx.fillStyle = "#485868";
ctx.shadowBlur = 12;
ctx.shadowOffsetY = 3;
ctx.shadowColor = "#000000";
ctx.beginPath();
ctx.arc(52, 52, 40, 0, pi2);
ctx.fill();
ctx.restore();
ctx.fillStyle = "#708090";
ctx.beginPath();
ctx.moveTo(52, 52);
ctx.arc(52, 52, 40, 0, Math.PI / 2);
ctx.lineTo(52, 52);
ctx.fill();
ctx.beginPath();
ctx.moveTo(52, 52);
ctx.arc(52, 52, 40, Math.PI, 3 * Math.PI / 2);
ctx.lineTo(52, 52);
ctx.fill();
ctx.strokeStyle = "#202630";
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(52, 12);
ctx.lineTo(52, 92);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(12, 52);
ctx.lineTo(92, 52);
ctx.stroke();
loc.src = lc.toDataURL();
loc.className = "nsi";
loc.style.position = "absolute";
loc.style.left = "0px";
loc.style.top = "0px";
loc.style.opacity = .45;
loc.style.zIndex = 11;
trf(loc, agpu);
loch.appendChild(loc);
var asmc = document.createElement("canvas");
asmc.width = 80;
asmc.height = 80;
asmc.className = "nsi";
asmc.style.position = "absolute";
asmc.style.left = asmc.style.top = "12px";
asmc.style.zIndex = 12;
asmc.style.opacity = .25;
loch.appendChild(asmc);
var myloc = document.createElement("img");
lc.width = lc.height = 14;
ctx = lc.getContext("2d");
ctx.fillStyle = "#DDDDDD";
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.arc(7, 7, 2.5, 0, pi2);
ctx.stroke();
ctx.fill();
myloc.src = lc.toDataURL();
myloc.className = "nsi";
myloc.style.position = "absolute";
myloc.style.left = "0px";
myloc.style.top = "0px";
myloc.style.opacity = 1;
myloc.style.zIndex = 13;
trf(myloc, agpu);
loch.appendChild(myloc);
ctx = mc.getContext("2d");
var bgi2 = document.createElement("canvas")
  , bgp2 = null 
  , bgw2 = 599
  , bgh2 = 519
  , ii = document.createElement("img");
ii.onload = function() {
  bgi2.width = bgw2;
  bgi2.height = bgh2;
  var b = bgi2.getContext("2d");
  try {
    b.drawImage(this, 0, 0),
    bgp2 = b.createPattern(bgi2, "repeat")
  } catch (q) {}
}
;
ii.src = "/s/bg45.jpg";
function rdgbg() {
  if (ggbg) {
    gbgmc || (gbgmc = document.createElement("canvas"));
    gbgmc.width = mww;
    gbgmc.height = mhh;
    var b = gbgmc.getContext("2d");
    try {
      b.drawImage(gbgi, 0, 0, 512, 512, 0, 0, mww, mhh)
    } catch (q) {}
  }
}
var ggbg = !1
  , gbgmc = null 
  , gbgi = document.createElement("img");
gbgi.onload = function() {
  ggbg = !0;
  rdgbg()
}
;
gbgi.src = "/s/gbg.jpg";
function newDeadpool() {
  return {
    os: [],
    end_pos: 0,
    add: function(b) {
      this.end_pos == this.os.length ? this.os.push(b) : this.os[this.end_pos] = b;
      this.end_pos++
    },
    get: function() {
      if (1 <= this.end_pos) {
        this.end_pos--;
        var b = this.os[this.end_pos];
        this.os[this.end_pos] = null ;
        return b
      }
      return null 
    }
  }
}
var bpx1, bpy1, bpx2, bpy2, fpx1, fpy1, fpx2, fpy2, sgsc = .9, gsc = sgsc, nsep = 4.5, tasty = 0, shifty = !1, rr, gg, bb, render_mode = 2;
is_mobile && (render_mode = 1);
var wumsts = !1, rank = 0, best_rank = 999999999, snake_count = 0, biggest_snake_count = 0, cm1, snakes = [], foods = [], foods_c = 0, preys = [], points_dp = newDeadpool(), os = {}, lsang = 0, want_e = !1, last_e_mtm = 0, sectors = [], sector_size = 480, sector_count_along_edge = 130, spangdv = 4.8, nsp1 = 4.25, nsp2 = .5, nsp3 = 12, mamu = .033, mamu2 = .028, cst = .43, lfas = [], lfc = 128;
for (i = 0; i < lfc; i++)
  j = .5 * (1 - Math.cos(Math.PI * (lfc - 1 - i) / (lfc - 1))),
  lfas.push(j);
var rfas = []
  , rfc = 43;
for (i = 0; i < rfc; i++)
  j = .5 * (1 - Math.cos(Math.PI * (rfc - 1 - i) / (rfc - 1))),
  rfas.push(j);
for (var fao = {}, fc = 3; 100 >= fc; fc++) {
  var fas = [];
  for (i = 0; i < fc; i++)
    j = .5 * (1 - Math.cos(Math.PI * (fc - 1 - i) / (fc - 1))),
    fas.push(j);
  fao["a" + fc] = fas
}
var hfc = 92
  , hfas = new Float32Array(hfc);
for (i = 0; i < hfc; i++)
  j = .5 * (1 - Math.cos(Math.PI * (hfc - 1 - i) / (hfc - 1))),
  hfas[i] = j;
var afas = []
  , afc = 26;
for (i = 0; i < afc; i++)
  j = .5 * (1 - Math.cos(Math.PI * (afc - 1 - i) / (afc - 1))),
  afas.push(j);
var nlc = 48, vfas = [], vfc = 62, fvpos = 0, fvtg = 0, ovxx, ovyy, fvxs = [], fvys = [];
for (i = 0; i < vfc; i++)
  j = .5 * (1 - Math.cos(Math.PI * (vfc - 1 - i) / (vfc - 1))),
  j += .5 * (.5 * (1 - Math.cos(Math.PI * j)) - j),
  vfas.push(j),
  fvxs.push(0),
  fvys.push(0);
function pwr(b) {
  for (var q = new Float32Array(125), c = 0; 125 > c; c++)
    q[c] = Math.pow(b, c);
  return q
}
function pca(b) {
  for (var q = new Float32Array(125), c = 0; 125 > c; c++)
    q[c] = 1 - Math.pow(1 - b, c);
  return q
}
var p1a = pca(.1)
  , p35a = pca(.35)
  , pwr4 = pwr(.4)
  , pwr35 = pwr(.35)
  , pwr93 = pwr(.93);
function setMscps(b) {
  if (b != mscps) {
    mscps = b;
    fmlts = [];
    fpsls = [];
    for (b = 0; b <= mscps; b++)
      b >= mscps ? fmlts.push(fmlts[b - 1]) : fmlts.push(Math.pow(1 - b / mscps, 2.25)),
      0 == b ? fpsls.push(0) : fpsls.push(fpsls[b - 1] + 1 / fmlts[b - 1]);
    var q = fmlts[fmlts.length - 1]
      , c = fpsls[fpsls.length - 1];
    for (b = 0; 2048 > b; b++)
      fmlts.push(q),
      fpsls.push(c)
  }
}
function startShowGame() {
  llgmtm = Date.now();
  login_iv = setInterval("loginFade()", 25);
  mc.style.opacity = 0;
  mc.style.display = "inline";
  lbh.style.opacity = lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = 0;
  loch.style.opacity = 0;
  lb_fr = -1
}
function setSkin(b, q) {
  b.rcv = q;
  b.er = 6;
  b.ec = "#ffffff";
  b.eca = .75;
  b.ppa = 1;
  b.ppc = "#000000";
  b.antenna = !1;
  if (19 == q) {
    b.ec = "#ee5500";
    b.er = 4.5;
    b.ppa = 0;
    b.antenna = !0;
    b.atba = 0;
    b.atc1 = "#505050";
    b.atc2 = "#FFFFFF";
    b.atia = .5;
    b.apbs = !0;
    var c = 8;
    b.atx = new Float32Array(c);
    b.aty = new Float32Array(c);
    b.atvx = new Float32Array(c);
    b.atvy = new Float32Array(c);
    b.atax = new Float32Array(c);
    b.atay = new Float32Array(c);
    for (--c; 0 <= c; c--)
      b.atx[c] = b.xx,
      b.aty[c] = b.yy;
    b.bulb = rabulb;
    b.blbx = -10;
    b.blby = -10;
    b.blbw = 20;
    b.blbh = 20;
    b.bsc = 1;
    b.blba = 
    1
  } else if (24 == q) {
    b.antenna = !0;
    b.atba = 0;
    b.atc1 = "#00688c";
    b.atc2 = "#64c8e7";
    b.atwg = !0;
    b.atia = .35;
    b.abrot = !1;
    c = 8;
    b.atx = new Float32Array(c);
    b.aty = new Float32Array(c);
    b.atvx = new Float32Array(c);
    b.atvy = new Float32Array(c);
    b.atax = new Float32Array(c);
    b.atay = new Float32Array(c);
    for (--c; 0 <= c; c--)
      b.atx[c] = b.xx,
      b.aty[c] = b.yy;
    b.bulb = acbulb;
    b.blbx = -5;
    b.blby = -10;
    b.blbw = 20;
    b.blbh = 20;
    b.bsc = 1;
    b.blba = .75
  } else if (25 == q) {
    b.ec = "#ff5609";
    b.eca = 1;
    b.antenna = !0;
    b.atba = 0;
    b.atc1 = "#000000";
    b.atc2 = "#6625c7";
    b.atia = 1;
    b.abrot = !0;
    c = 8;
    b.atx = new Float32Array(c);
    b.aty = new Float32Array(c);
    b.atvx = new Float32Array(c);
    b.atvy = new Float32Array(c);
    b.atax = new Float32Array(c);
    b.atay = new Float32Array(c);
    for (--c; 0 <= c; c--)
      b.atx[c] = b.xx,
      b.aty[c] = b.yy;
    b.bulb = cdbulb;
    b.blbx = -5;
    b.blby = -10;
    b.blbw = 20;
    b.blbh = 20;
    b.bsc = 1.6;
    b.blba = 1
  }
  c = null ;
  9 == q ? c = [7, 9, 7, 9, 7, 9, 7, 9, 7, 9, 7, 10, 10, 10, 10, 10, 10, 10, 10, 10] : 10 == q ? c = [9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7] : 11 == q ? c = [11, 11, 11, 11, 11, 7, 7, 7, 7, 7, 12, 12, 12, 12, 12] : 12 == q ? c = [7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13] : 13 == q ? c = [14, 14, 14, 
  14, 14, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7] : 14 == q ? c = [9, 9, 9, 9, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7] : 15 == q ? c = [0, 1, 2, 3, 4, 5, 6, 7, 8] : 16 == q ? c = [15, 15, 15, 15, 15, 15, 15, 4, 4, 4, 4, 4, 4, 4] : 17 == q ? c = [9, 9, 9, 9, 9, 9, 9, 16, 16, 16, 16, 16, 16, 16] : 18 == q ? c = [7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 9] : 19 == q ? c = [9] : 20 == q ? c = [3, 3, 3, 3, 3, 0, 0, 0, 0, 0] : 21 == q ? c = [3, 3, 3, 3, 3, 3, 3, 18, 18, 18, 18, 18, 18, 20, 19, 20, 19, 20, 19, 20, 18, 18, 18, 18, 18, 18] : 22 == q ? c = [5, 5, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13, 13, 13] : 23 == q ? c = [16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 18, 18, 18, 18, 7, 7, 7, 7, 7, 7, 7] : 24 == q ? c = [23, 23, 23, 23, 23, 23, 23, 23, 
  23, 18, 18, 18, 18, 18, 18, 18, 18, 18] : 25 == q ? c = [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22] : q %= 9;
  c && (q = c[0]);
  b.rbcs = c;
  b.cv = q
}
function newSnake(b, q, c, h, u, f) {
  var e = {};
  e.id = b;
  e.xx = q;
  e.yy = c;
  setSkin(e, h);
  h = e.cv;
  e.fnfr = 0;
  e.na = 1;
  e.chl = 0;
  e.tsp = 0;
  e.sfr = 0;
  e.rr = Math.min(255, rrs[h] + Math.floor(20 * Math.random()));
  e.gg = Math.min(255, ggs[h] + Math.floor(20 * Math.random()));
  e.bb = Math.min(255, bbs[h] + Math.floor(20 * Math.random()));
  b = "00" + Math.min(255, Math.max(0, Math.round(e.rr))).toString(16);
  q = "00" + Math.min(255, Math.max(0, Math.round(e.gg))).toString(16);
  c = "00" + Math.min(255, Math.max(0, Math.round(e.bb))).toString(16);
  b = b.substr(b.length - 2);
  q = q.substr(q.length - 
  2);
  c = c.substr(c.length - 2);
  e.cs = "#" + b + q + c;
  b = "00" + Math.min(255, Math.max(0, Math.round(.4 * e.rr))).toString(16);
  q = "00" + Math.min(255, Math.max(0, Math.round(.4 * e.gg))).toString(16);
  c = "00" + Math.min(255, Math.max(0, Math.round(.4 * e.bb))).toString(16);
  b = b.substr(b.length - 2);
  q = q.substr(q.length - 2);
  c = c.substr(c.length - 2);
  e.cs04 = "#" + b + q + c;
  b = "00" + Math.min(255, Math.max(0, Math.round(.5 * (255 + e.rr)))).toString(16);
  q = "00" + Math.min(255, Math.max(0, Math.round(.5 * (255 + e.gg)))).toString(16);
  c = "00" + Math.min(255, Math.max(0, Math.round(.5 * 
  (255 + e.bb)))).toString(16);
  b = b.substr(b.length - 2);
  q = q.substr(q.length - 2);
  c = c.substr(c.length - 2);
  e.csw = "#" + b + q + c;
  e.sc = 1;
  e.ssp = nsp1 + nsp2 * e.sc;
  e.fsp = e.ssp + .1;
  e.msp = nsp3;
  e.fxs = new Float32Array(rfc);
  e.fys = new Float32Array(rfc);
  e.fchls = new Float32Array(rfc);
  e.fpos = 0;
  e.ftg = 0;
  e.fx = 0;
  e.fy = 0;
  e.fchl = 0;
  e.fas = new Float32Array(afc);
  e.fapos = 0;
  e.fatg = 0;
  e.fa = 0;
  e.ehang = u;
  e.wehang = u;
  e.ehl = 1;
  e.msl = 42;
  e.fam = 0;
  e.ang = u;
  e.eang = u;
  e.wang = u;
  e.rex = 0;
  e.rey = 0;
  e.sp = 2;
  f ? (e.lnp = f[f.length - 1],
  e.pts = f,
  e.sct = f.length,
  f[0].dying && e.sct--) : 
  (e.pts = [],
  e.sct = 0);
  e.flpos = 0;
  e.fls = new Float32Array(lfc);
  e.fl = 0;
  e.fltg = 0;
  e.tl = e.sct + e.fam;
  e.cfl = e.tl;
  e.scang = 1;
  e.dead_amt = 0;
  e.alive_amt = 0;
  snakes.splice(0, 0, e);
  return os["s" + e.id] = e
}
function snl(b) {
  var q = b.tl;
  b.tl = b.sct + b.fam;
  for (var q = b.tl - q, c = b.flpos, h = 0; h < lfc; h++)
    b.fls[c] -= q * lfas[h],
    c++,
    c >= lfc && (c = 0);
  b.fl = b.fls[b.flpos];
  b.fltg = lfc;
  b == snake && (wumsts = !0)
}
function newFood(b, q, c, h, u, f) {
  var e = {};
  e.id = b;
  e.xx = q;
  e.yy = c;
  e.rx = q;
  e.ry = c;
  e.rsp = u ? 2 : 1;
  e.cv = f;
  e.rad = 1E-5;
  e.sz = h;
  b = per_color_imgs[e.cv];
  e.cv2 = Math.floor(b.ic * gsc * e.sz / 16.5);
  0 > e.cv2 && (e.cv2 = 0);
  e.cv2 >= b.ic && (e.cv2 = b.ic - 1);
  testing && (window.biggestcv2 || (window.biggestcv2 = e.cv2),
  e.cv2 > window.biggestcv2 && (window.biggestcv2 = e.cv2,
  console.log("biggest cv2 seen: " + e.cv2 + " out of " + (b.ic - 1) + " (fo.sz = " + e.sz + " which means its server-side rad is " + 5 * e.sz + ")")));
  e.fi = b.imgs[e.cv2];
  e.fw = b.fws[e.cv2];
  e.fh = b.fhs[e.cv2];
  e.fw2 = b.fw2s[e.cv2];
  e.fh2 = b.fh2s[e.cv2];
  e.ofi = b.oimgs[e.cv2];
  e.ofw = b.ofws[e.cv2];
  e.ofh = b.ofhs[e.cv2];
  e.ofw2 = b.ofw2s[e.cv2];
  e.ofh2 = b.ofh2s[e.cv2];
  e.gcv = Math.floor(b.ic * gsc * (.25 + .75 * e.sz / 16.5));
  0 > e.gcv && (e.gcv = 0);
  e.gcv >= b.ic && (e.gcv = b.ic - 1);
  e.gfi = b.gimgs[e.gcv];
  e.gfw = b.gfws[e.gcv];
  e.gfh = b.gfhs[e.gcv];
  e.gfw2 = b.gfw2s[e.gcv];
  e.gfh2 = b.gfh2s[e.gcv];
  e.g2cv = Math.floor(b.ic * gsc * 2 * (.25 + .75 * e.sz / 16.5));
  0 > e.g2cv && (e.g2cv = 0);
  e.g2cv >= b.ic && (e.g2cv = b.ic - 1);
  e.g2fi = b.gimgs[e.g2cv];
  e.g2fw = b.gfws[e.g2cv];
  e.g2fh = b.gfhs[e.g2cv];
  e.g2fw2 = b.gfw2s[e.g2cv];
  e.g2fh2 = b.gfh2s[e.g2cv];
  e.fr = 0;
  e.gfr = 64 * Math.random();
  e.gr = .65 + .1 * e.sz;
  e.wsp = .0225 * (2 * Math.random() - 1);
  e.eaten_fr = 0;
  e.eaten_fr4 = 0;
  return foods[foods_c++] = e
}
function newPrey(b, q, c, h, u, f, e, y, F) {
  var B = {};
  B.id = b;
  B.xx = q;
  B.yy = c;
  B.rad = 1E-5;
  B.sz = h;
  B.cv = u;
  B.dir = f;
  B.wang = e;
  B.ang = y;
  B.sp = F;
  B.fr = 0;
  B.gfr = 64 * Math.random();
  B.gr = .5 + .15 * Math.random() + .1 * B.sz;
  B.rr = Math.min(255, rrs[u]);
  B.gg = Math.min(255, ggs[u]);
  B.bb = Math.min(255, bbs[u]);
  b = "00" + Math.min(255, Math.max(0, Math.round(B.rr))).toString(16);
  q = "00" + Math.min(255, Math.max(0, Math.round(B.gg))).toString(16);
  c = "00" + Math.min(255, Math.max(0, Math.round(B.bb))).toString(16);
  b = b.substr(b.length - 2);
  q = q.substr(q.length - 2);
  c = 
  c.substr(c.length - 2);
  B.cs = "#" + b + q + c;
  B.cv2 = Math.floor(per_color_imgs[B.cv].pr_imgs.length * gsc * B.sz / 9);
  0 > B.cv2 && (B.cv2 = 0);
  B.cv2 >= per_color_imgs[B.cv].pr_imgs.length && (B.cv2 = per_color_imgs[B.cv].pr_imgs.length - 1);
  B.fi = per_color_imgs[B.cv].pr_imgs[B.cv2];
  B.fw = per_color_imgs[B.cv].pr_fws[B.cv2];
  B.fh = per_color_imgs[B.cv].pr_fhs[B.cv2];
  B.fw2 = per_color_imgs[B.cv].pr_fw2s[B.cv2];
  B.fh2 = per_color_imgs[B.cv].pr_fh2s[B.cv2];
  B.gcv = per_color_imgs[B.cv].gimgs.length - 1;
  B.gfi = per_color_imgs[B.cv].gimgs[B.gcv];
  B.gfw = 
  per_color_imgs[B.cv].gfws[B.gcv];
  B.gfh = per_color_imgs[B.cv].gfhs[B.gcv];
  B.gfw2 = per_color_imgs[B.cv].gfw2s[B.gcv];
  B.gfh2 = per_color_imgs[B.cv].gfh2s[B.gcv];
  B.fxs = new Float32Array(rfc);
  B.fys = new Float32Array(rfc);
  B.fpos = 0;
  B.ftg = 0;
  B.fx = 0;
  B.fy = 0;
  B.eaten = !1;
  B.eaten_fr = 0;
  B.eaten_fr4 = 0;
  preys.push(B);
  return B
}
var kdmc = document.createElement("canvas");
kdmc.width = kdmc.height = 32;
ctx = kdmc.getContext("2d");
ctx.fillStyle = "#FF9966";
ctx.arc(16, 16, 16, 0, pi2);
ctx.fill();
var sz = 52
  , komc = document.createElement("canvas");
komc.width = komc.height = sz;
ctx = komc.getContext("2d");
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4) {
  var v = Math.abs(Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) - 16)
    , v = 4 >= v ? 1 - v / 4 : 0
    , v = .8 * v;
  imgd[p] = imgd[p + 1] = imgd[p + 2] = 0;
  imgd[p + 3] = Math.floor(255 * v);
  xx++;
  xx >= sz && (xx = 0,
  yy++)
}
ctx.putImageData(map, 0, 0);
var sz = 62
  , ksmc = document.createElement("canvas");
ksmc.width = ksmc.height = sz;
ctx = ksmc.getContext("2d");
map = ctx.getImageData(0, 0, sz, sz);
imgd = map.data;
l = imgd.length;
for (p = yy = xx = 0; p < l; p += 4)
  v = Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 + 3 - yy, 2)) - 15,
  v *= .1,
  0 > v && (v = -v),
  1 < v && (v = 1),
  v = 1 - v,
  v *= .25,
  imgd[p] = imgd[p + 1] = imgd[p + 2] = 0,
  imgd[p + 3] = Math.floor(255 * v),
  xx++,
  xx >= sz && (xx = 0,
  yy++);
ctx.putImageData(map, 0, 0);
var rabulb = document.createElement("canvas");
rabulb.width = rabulb.height = 64;
ctx = rabulb.getContext("2d");
var g = ctx.createRadialGradient(32, 32, 1, 32, 32, 31);
g.addColorStop(0, "rgba(255, 255, 255, 1)");
g.addColorStop(.83, "rgba(150,150,150, 1)");
g.addColorStop(.84, "rgba(80,80,80, 1)");
g.addColorStop(.99, "rgba(80,80,80, 1)");
g.addColorStop(1, "rgba(80,80,80, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
var cdbulb = document.createElement("canvas");
cdbulb.width = 84;
cdbulb.height = 84;
var cdbulb2 = document.createElement("canvas");
cdbulb2.width = 84;
cdbulb2.height = 84;
ctx = cdbulb2.getContext("2d");
ctx.fillStyle = "#ff5609";
ctx.fillRect(13, 10, 29, 64);
ctx.fillRect(13, 10, 58, 22);
ctx.fillRect(13, 54, 58, 22);
ctx = cdbulb.getContext("2d");
ctx.shadowColor = "#000000";
ctx.shadowBlur = 20;
ctx.drawImage(cdbulb2, 0, 0);
ctx.drawImage(cdbulb2, 0, 0);
var acbulb = document.createElement("canvas");
acbulb.width = acbulb.height = 64;
ctx = acbulb.getContext("2d");
g = ctx.createRadialGradient(32, 32, 1, 32, 32, 31);
g.addColorStop(0, "rgba(255, 128, 128, 1)");
g.addColorStop(.5, "rgba(222, 3, 3, 1)");
g.addColorStop(.96, "rgba(157, 18, 18, 1)");
g.addColorStop(1, "rgba(0,0,0, 0)");
ctx.fillStyle = g;
ctx.fillRect(0, 0, 64, 64);
var colc;
testing && (colc = document.createElement("canvas"),
colc.width = 256,
colc.height = 66,
colc.style.position = "fixed",
colc.style.left = "0px",
colc.style.top = "200px",
colc.style.zIndex = 2147483647,
document.body.appendChild(colc));
var pbx = new Float32Array(32767)
  , pby = new Float32Array(32767)
  , pba = new Float32Array(32767)
  , pbu = new Uint8Array(32767)
  , per_color_imgs = []
  , rrs = [192, 144, 128, 128, 238, 255, 255, 255, 224, 255, 144, 80, 255, 40, 100, 120, 72, 160, 255, 56, 56, 62, 255, 101]
  , ggs = [128, 153, 208, 255, 238, 160, 144, 64, 48, 255, 153, 80, 192, 136, 117, 134, 84, 80, 224, 68, 68, 19, 86, 200]
  , bbs = [255, 255, 208, 128, 112, 96, 144, 64, 224, 255, 255, 80, 80, 96, 255, 255, 255, 255, 64, 255, 255, 160, 9, 232]
  , max_skin_cv = 24;
for (i = 0; i < rrs.length; i++) {
  o = {
    imgs: [],
    fws: [],
    fhs: [],
    fw2s: [],
    fh2s: [],
    gimgs: [],
    gfws: [],
    gfhs: [],
    gfw2s: [],
    gfh2s: [],
    oimgs: [],
    ofws: [],
    ofhs: [],
    ofw2s: [],
    ofh2s: []
  };
  var rs = "00" + rrs[i].toString(16)
    , gs = "00" + ggs[i].toString(16)
    , bs = "00" + bbs[i].toString(16)
    , rs = rs.substr(rs.length - 2)
    , gs = gs.substr(gs.length - 2)
    , bs = bs.substr(bs.length - 2);
  o.cs = "#" + rs + gs + bs;
  var sz = 62
    , kfmc = document.createElement("canvas");
  kfmc.width = kfmc.height = sz;
  ctx = kfmc.getContext("2d");
  map = ctx.getImageData(0, 0, sz, sz);
  imgd = map.data;
  l = imgd.length;
  for (p = 
  yy = xx = 0; p < l; p += 4)
    v = Math.abs(Math.sqrt(Math.pow(sz / 2 - xx, 2) + Math.pow(sz / 2 - yy, 2)) - 16),
    v = 15 >= v ? 1 - v / 15 : 0,
    imgd[p] = rrs[i],
    imgd[p + 1] = ggs[i],
    imgd[p + 2] = bbs[i],
    imgd[p + 3] = Math.floor(255 * v),
    xx++,
    xx >= sz && (xx = 0,
    yy++);
  ctx.putImageData(map, 0, 0);
  o.kfmc = kfmc;
  var ksz = 48
    , ksz2 = ksz / 2
    , kmc = document.createElement("canvas");
  kmc.width = kmc.height = ksz;
  ctx = kmc.getContext("2d");
  ctx.fillStyle = "#FFFFFF";
  ctx.arc(ksz2, ksz2, ksz2, 0, pi2);
  ctx.fill();
  map = ctx.getImageData(0, 0, ksz, ksz);
  imgd = map.data;
  l = imgd.length;
  yy = xx = 0;
  var kmcs = [];
  for (j = 
  0; 7 > j; j++) {
    for (p = xx = yy = 0; p < l; p += 4) {
      var v = Math.pow(Math.max(0, Math.min(1, 1 - Math.abs(yy - ksz2) / ksz2)), .35)
        , v2 = Math.max(0, Math.min(1, 1 - Math.sqrt(Math.pow(xx - ksz2, 2) + Math.pow(yy - ksz2, 2)) / 34))
        , v = v + .375 * (v2 - v)
        , v = v * (1.22 - .44 * j / 6);
      rr = rrs[i];
      gg = ggs[i];
      bb = bbs[i];
      imgd[p] = Math.max(0, Math.min(255, Math.floor(rr * v)));
      imgd[p + 1] = Math.max(0, Math.min(255, Math.floor(gg * v)));
      imgd[p + 2] = Math.max(0, Math.min(255, Math.floor(bb * v)));
      xx++;
      xx >= ksz && (xx = 0,
      yy++)
    }
    ctx.putImageData(map, 0, 0);
    var kmc2 = document.createElement("canvas");
    kmc2.width = kmc2.height = ksz;
    var ctx2 = kmc2.getContext("2d");
    ctx2.drawImage(kmc, 0, 0);
    if (10 == i)
      for (k = -1; 1 >= k; k++) {
        var tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 8) * 13
          , ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 8) * 13;
        ctx2.fillStyle = "#FFFFFF";
        ctx2.beginPath();
        for (m = 0; 5 >= m; m++)
          xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * .05 * 24,
          yy = ty + ksz / 32 * Math.sin(2 * Math.PI * m / 5) * .05 * 24,
          0 == m ? ctx2.moveTo(xx, yy) : ctx2.lineTo(xx, yy),
          xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + .5) / 5) * 3.1,
          yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + .5) / 5) * 3.1,
          ctx2.lineTo(xx, yy);
        ctx2.fill()
      }
    else if (19 == i)
      for (k = -2; 2 >= k; k++) {
        tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
        ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
        ctx2.save();
        ctx2.globalAlpha = .7;
        ctx2.fillStyle = "#FFFFFF";
        ctx2.beginPath();
        for (m = 0; 5 >= m; m++)
          xx = tx + ksz / 32 * Math.cos(2 * Math.PI * m / 5) * .05 * 12,
          yy = ty + ksz / 32 * Math.sin(2 * Math.PI * m / 5) * .05 * 12,
          0 == m ? ctx2.moveTo(xx, yy) : ctx2.lineTo(xx, yy),
          xx = tx + ksz / 32 * Math.cos(2 * Math.PI * (m + .5) / 5) * 1.55,
          yy = ty + ksz / 32 * Math.sin(2 * Math.PI * (m + .5) / 5) * 1.55,
          ctx2.lineTo(xx, yy);
        ctx2.fill();
        ctx2.restore()
      }
    else if (20 == 
    i)
      for (k = -1.5; 1.5 >= k; k++) {
        tx = ksz2 + ksz2 / 16 * Math.cos(2 * Math.PI * k / 15) * 13;
        ty = ksz2 + ksz2 / 16 * Math.sin(2 * Math.PI * k / 15) * 13;
        ctx2.save();
        ctx2.globalAlpha = .7;
        ctx2.fillStyle = "#FFFFFF";
        ctx2.beginPath();
        for (m = 0; 5 >= m; m++)
          xx = tx + ksz2 / 16 * Math.cos(2 * Math.PI * m / 5) * .05 * 14,
          yy = ty + ksz2 / 16 * Math.sin(2 * Math.PI * m / 5) * .05 * 14,
          0 == m ? ctx2.moveTo(xx, yy) : ctx2.lineTo(xx, yy),
          xx = tx + ksz2 / 16 * Math.cos(2 * Math.PI * (m + .5) / 5) * 1.8,
          yy = ty + ksz2 / 16 * Math.sin(2 * Math.PI * (m + .5) / 5) * 1.8,
          ctx2.lineTo(xx, yy);
        ctx2.fill();
        ctx2.restore()
      }
    kmcs.push(kmc2)
  }
  o.kmcs = kmcs;
  per_color_imgs.push(o);
  for (j = 2.8; 18.8 >= j; j += 1) {
    var cc = document.createElement("canvas")
      , sz = Math.ceil(2.5 * j + 28);
    cc.width = cc.height = sz;
    ctx = cc.getContext("2d");
    ctx.fillStyle = o.cs;
    ctx.arc(sz / 2, sz / 2, .65 * j, 0, pi2);
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = "#" + rs + gs + bs;
    ctx.globalAlpha = .8;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.fill();
    o.imgs.push(cc);
    o.fws.push(sz);
    o.fhs.push(sz);
    o.fw2s.push(sz / 2);
    o.fh2s.push(sz / 2);
    sz = Math.ceil(8 * j + 6);
    cc = document.createElement("canvas");
    cc.width = cc.height = sz;
    ctx = cc.getContext("2d");
    g = ctx.createRadialGradient(sz / 2, sz / 2, 1, sz / 2, sz / 2, 4 * j);
    g.addColorStop(0, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 1)");
    g.addColorStop(1, "rgba(" + rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, sz, sz);
    o.gimgs.push(cc);
    o.gfws.push(sz);
    o.gfhs.push(sz);
    o.gfw2s.push(sz / 2);
    o.gfh2s.push(sz / 2);
    cc = document.createElement("canvas");
    sz = Math.ceil(1.3 * j + 6);
    cc.width = cc.height = sz;
    ctx = cc.getContext("2d");
    var eam = .2
      , g = ctx.createRadialGradient(sz / 2, sz / 2, 0, sz / 2, sz / 2, j / 2);
    g.addColorStop(0, "rgba(" + 
    rrs[i] + ", " + ggs[i] + ", " + bbs[i] + ", 1)");
    g.addColorStop(.99, "rgba(" + Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 1)");
    g.addColorStop(1, "rgba(" + Math.floor(rrs[i] * eam) + ", " + Math.floor(ggs[i] * eam) + ", " + Math.floor(bbs[i] * eam) + ", 0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, sz, sz);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.arc(sz / 2, sz / 2, .65 * j, 0, pi2);
    ctx.globalAlpha = 1;
    ctx.stroke();
    o.oimgs.push(cc);
    o.ofws.push(sz);
    o.ofhs.push(sz);
    o.ofw2s.push(sz / 2);
    o.ofh2s.push(sz / 2)
  }
  o.ic = 
  o.imgs.length;
  o.pr_imgs = [];
  o.pr_fws = [];
  o.pr_fhs = [];
  o.pr_fw2s = [];
  o.pr_fh2s = [];
  for (j = 3; 24 >= j; j += 1)
    cc = document.createElement("canvas"),
    sz = Math.ceil(2 * j + 38),
    cc.width = cc.height = sz,
    ctx = cc.getContext("2d"),
    ctx.fillStyle = o.cs,
    ctx.arc(sz / 2, sz / 2, j / 2, 0, pi2),
    ctx.shadowBlur = 22,
    ctx.shadowOffsetY = 0,
    ctx.shadowColor = "#" + rs + gs + bs,
    ctx.fill(),
    ctx.fill(),
    o.pr_imgs.push(cc),
    o.pr_fws.push(sz),
    o.pr_fhs.push(sz),
    o.pr_fw2s.push(sz / 2),
    o.pr_fh2s.push(sz / 2)
}
if (testing)
  for (ctx = colc.getContext("2d"),
  ctx.fillStyle = "#000000",
  ctx.fillRect(0, 0, colc.width, colc.height),
  ctx.fillStyle = "#FFFFFF",
  ctx.font = "10px Arial, Helvetica Neue, Helvetica, sans-serif",
  ctx.textBaseline = "top",
  ctx.textAlign = "center",
  i = yy = xx = 0; i < rrs.length; i++) {
    var pci = per_color_imgs[i]
      , kmc = pci.kmcs[0];
    ctx.drawImage(kmc, 0, 0, kmc.width, kmc.height, xx, yy, 16, 16);
    ntx = o.xx + o.fx;
    nty = o.yy + o.fy;
    ntx = mww2 + (ntx - view_xx) * gsc;
    nty = mhh2 + (nty - view_yy) * gsc;
    ctx.fillText("" + i, xx + 8, yy + 16);
    xx += 16;
    xx > colc.width - 16 && (xx = 
    0,
    yy += 28)
  }
var view_xx = 0, view_yy = 0, view_ang = 0, view_dist = 0, fvx = 0, fvy = 0, xm = 0, ym = 0, lsxm = 0, lsym = 0, snake = null , dhx, dhy, hsz, fr = 0, lfr = 0, ltm = Date.now(), vfr = 0, vfrb = 0, avfr = 0, fr2 = 0, lfr2 = 0, vfrb2 = 0, cptm = 0, lptm = 0, lpstm = 0, last_ping_mtm = 0, lagging = !1, lag_mult = 1, wfpr = !1, high_quality = !0, gla = 1, wdfg = 0, qsm = 1, mqsm = 1.7, playing = !1, connected = !1, want_close_socket = !1, want_victory_message = !1, want_victory_focus = !1, want_hide_victory = 0, hvfr = 0, dead_mtm = -1, at2lt = new Float32Array(65536);
for (yy = 0; 256 > yy; yy++)
  for (xx = 0; 256 > xx; xx++)
    at2lt[yy << 8 | xx] = Math.atan2(yy - 128, xx - 128);
var kd_l_frb = 0
  , kd_r_frb = 0
  , kd_l = !1
  , kd_r = !1
  , kd_u = !1
  , lkstm = 0
  , social = document.createElement("iframe");
try {
  social.frameBorder = 0
} catch (b) {}
social.style.position = "fixed";
social.style.left = "6px";
social.style.top = "6px";
social.style.border = "0px";
social.style.zIndex = 9999999;
social.width = 200;
social.height = 150;
social.src = "/social.html";
document.body.appendChild(social);
var oef = function() {
  var b = Date.now();
  avfr = vfr = (b - ltm) / 8;
  ltm = b;
  choosing_skin || (lagging || wfpr && 420 < b - last_ping_mtm && (lagging = !0),
  lagging ? (lag_mult *= .85,
  .01 > lag_mult && (lag_mult = .01)) : 1 > lag_mult && (lag_mult += .05,
  1 <= lag_mult && (lag_mult = 1)));
  120 < vfr && (vfr = 120);
  vfr *= lag_mult;
  etm *= lag_mult;
  lfr = fr;
  fr += vfr;
  vfrb = Math.floor(fr) - Math.floor(lfr);
  lfr2 = fr2;
  fr2 += 2 * vfr;
  vfrb2 = Math.floor(fr2) - Math.floor(lfr2);
  kd_l && (kd_l_frb += vfrb);
  kd_r && (kd_r_frb += vfrb);
  if (spinner_shown) {
    lsfr += avfr;
    var q = ldmc.getContext("2d");
    q.clearRect(0, 
    0, 512, 128);
    for (var c, h, u = 1; 2 >= u; u++) {
      q.beginPath();
      1 == u ? (q.fillStyle = "#60FF70",
      h = 0) : (q.fillStyle = "#9850FF",
      h = Math.PI);
      for (var f = 0; 256 >= f; f++)
        c = 32 + 5 * Math.cos(h + lsfr / 6 + 8 * f / 256) + 8 * f / 256,
        256 == f && (c += 10),
        xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * f / 256) * c * 1.25,
        yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * f / 256) * c,
        0 == f ? q.moveTo(xx, yy) : q.lineTo(xx, yy);
      c = 32;
      xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * (f + 47) / 256) * c * 1.25;
      yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * (f + 47) / 256) * c;
      q.lineTo(xx, yy);
      for (f = 256; 0 <= f; f--)
        c = 32 + 5 * Math.cos(h + lsfr / 6 + 
        8 * f / 256) - 8 * f / 256,
        256 == f && (c -= 10),
        xx = 64 + Math.cos(h + lsfr / 44 + .8 * Math.PI * f / 256) * c * 1.25,
        yy = 64 + Math.sin(h + lsfr / 44 + .8 * Math.PI * f / 256) * c,
        q.lineTo(xx, yy);
      q.fill()
    }
    connecting ? (ss_a += avfr / 86,
    1 <= ss_a && (ss_a = 1),
    ss_sh += avfr / 93,
    1 <= ss_sh && (ss_sh = 1)) : (ss_a -= avfr / 86,
    0 >= ss_a && (ss_sh = ss_a = 0,
    ldmc.style.display = "none",
    trf(ldmc, "")));
    ldmc.style.opacity = ss_a;
    f = Math.round(.1 + .9 * ss_sh * (1 + 2 * Math.pow(1 - ss_a, 2)) * 1E5) / 1E5;
    trf(ldmc, "scale(" + f + "," + f + ")")
  }
  if (-1 != play_btn_click_mtm && 6666 < b - play_btn_click_mtm) {
    f = document.createElement("img");
    h = [];
    h.push("bso=" + encodeURIComponent(bso));
    if (bso)
      for (var e in bso)
        h.push(e + "=" + encodeURIComponent(bso[e]));
    h.push("waiting_for_sos=" + (waiting_for_sos ? "true" : "false"));
    h.push("soslen=" + sos.length);
    h.push("sislen=" + sis.length);
    f.src = "http://slither.io/cnc.jpg?" + h.join("&");
    play_btn_click_mtm = -1
  }
  waiting_for_sos && b > sos_ready_after_mtm && (connecting || connected || connect());
  connecting && 3E3 < b - start_connect_mtm && (bso && (bso.tainted = !0),
  connect());
  if (choosing_skin) {
    for (f = snakes.length - 1; 0 <= f; f--)
      for (e = snakes[f],
      u = e.pts.length - 1; 0 <= u; u--)
        e.pts[u].yy = grd / 2 + 15 * Math.cos(u / 4 + fr / 19) * (1 - u / e.pts.length);
    view_xx -= vfr
  }
  playing && (high_quality ? (1 > gla && (gla += .0075 * vfr,
  1 < gla && (gla = 1)),
  1 < qsm && (qsm -= 4E-5 * vfr,
  1 > qsm && (qsm = 1))) : (0 < gla && (gla -= .0075 * vfr,
  0 > gla && (gla = 0)),
  qsm < mqsm && (qsm += 4E-5 * vfr,
  qsm > mqsm && (qsm = mqsm))));
  0 != want_hide_victory && (1 == want_hide_victory ? (hvfr += .02 * vfr,
  1 <= hvfr ? (hvfr = 0,
  want_hide_victory = 2,
  victory_holder.style.opacity = 1,
  saveh.style.opacity = 1,
  victory_holder.style.display = "none",
  saveh.style.display = "none",
  nick_holder.style.opacity = 0,
  playh.style.opacity = 0,
  smh.style.opacity = 0,
  nick_holder.style.display = "inline-block",
  playh.style.display = "block",
  smh.style.display = "block") : (victory_holder.style.opacity = 1 - hvfr,
  saveh.style.opacity = 1 - hvfr)) : 2 == want_hide_victory && (hvfr += .02 * vfr,
  1 <= hvfr && (hvfr = 1,
  want_hide_victory = 0),
  nick_holder.style.opacity = hvfr,
  playh.style.opacity = hvfr,
  smh.style.opacity = hvfr));
  1 != login_fr && -1 != tip_fr && (tip_fr += .017 * vfr,
  tip_fr >= pi2 && (tip_fr -= pi2,
  tip_pos++,
  tip_pos >= tipss.length && (tip_pos = 0),
  tips.textContent = tipss[tip_pos]),
  u = .5 - .5 * Math.cos(tip_fr),
  tips.style.opacity = Math.round(1E5 * Math.pow(u, .5)) / 1E5);
  if (-1 == dead_mtm)
    -1 != lb_fr && 1 != lb_fr && (lb_fr += .01 * vfr,
    1 <= lb_fr && (lb_fr = 1),
    lbh.style.opacity = .85 * lb_fr,
    lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr);
  else if (1600 < b - dead_mtm) {
    if (-1 == login_iv) {
      login_iv = -2;
      login.style.display = "inline";
      try {
        "1" != localStorage.edttsg ? cstx.style.display = "inline" : cskh.style.display = "inline"
      } catch (y) {}
      fbh.style.display = 
      "inline";
      twth.style.display = "inline";
      plq.style.display = "inline";
      clq.style.display = "inline";
      grqh.style.display = "inline";
      social.style.display = "inline";
      want_victory_focus && (want_victory_focus = !1,
      victory.focus())
    }
    -2 == login_iv && (login_fr -= .004 * vfr,
    choosing_skin && (login_fr -= .007 * vfr),
    lb_fr = login_fr,
    0 >= login_fr && (login_fr = 0,
    dead_mtm = -1,
    nick.disabled = !1,
    nick.focus(),
    lb_fr = -1,
    playing = !1,
    choosing_skin && (choosing_skin = !1,
    resetGame(),
    pskh.style.display = "none",
    nskh.style.display = "none",
    skodiv.style.display = "none")),
    pbdiv.style.opacity = 1 - .5 * Math.max(0, Math.min(1, 6 * login_fr)),
    lgcsc = 1 + .1 * Math.pow(login_fr, 2),
    f = Math.round(lgbsc * lgcsc * 1E5) / 1E5,
    1 == f ? trf(login, "") : trf(login, "scale(" + f + "," + f + ")"),
    login.style.opacity = 1 - login_fr,
    cstx.style.opacity = 1 - login_fr,
    fbh.style.opacity = 1 - login_fr,
    twth.style.opacity = 1 - login_fr,
    cskh.style.opacity = 1 - login_fr,
    grqh.style.opacity = 1 - login_fr,
    plq.style.opacity = 1 - login_fr,
    clq.style.opacity = 1 - login_fr,
    social.style.opacity = 1 - login_fr,
    pskh.style.opacity = login_fr,
    nskh.style.opacity = login_fr,
    skodiv.style.opacity = login_fr,
    mc.style.opacity = login_fr,
    loch.style.opacity = login_fr,
    lbh.style.opacity = .85 * lb_fr,
    lbs.style.opacity = lbn.style.opacity = lbp.style.opacity = lbf.style.opacity = vcm.style.opacity = lb_fr)
  }
  want_close_socket && -1 == dead_mtm && (want_close_socket = !1,
  ws && (ws.close(),
  ws = null ,
  playing = connected = !1),
  resetGame());
  want_victory_message && (victory_bg.style.opacity = .92 + .08 * Math.cos(fr / 10));
  connected && ((0 < kd_l_frb || 0 < kd_r_frb) && 150 < b - lkstm && (lkstm = b,
  0 < kd_r_frb && kd_l_frb > kd_r_frb && (kd_l_frb -= kd_r_frb,
  kd_r_frb = 0),
  0 < kd_l_frb && kd_r_frb > kd_l_frb && (kd_r_frb -= kd_l_frb,
  kd_l_frb = 0),
  0 < kd_l_frb ? (v = kd_l_frb,
  127 < v && (v = 127),
  kd_l_frb -= v,
  5 <= protocol_version ? (f = new Uint8Array(2),
  f[0] = 252) : (f = new Uint8Array(2),
  f[0] = 108),
  f[1] = v,
  ws.send(f),
  snake.eang -= mamu * v * snake.scang * snake.spang) : 0 < kd_r_frb && (v = kd_r_frb,
  127 < v && (v = 127),
  kd_r_frb -= v,
  5 <= protocol_version ? (v += 128,
  f = new Uint8Array(2),
  f[0] = 252) : (f = new Uint8Array(2),
  f[0] = 114),
  f[1] = v,
  snake.eang += mamu * v * snake.scang * snake.spang,
  ws.send(f))),
  !wfpr && 250 < b - last_ping_mtm && (last_ping_mtm = 
  b,
  wfpr = !0,
  f = new Uint8Array(1),
  f[0] = 5 <= protocol_version ? 251 : 112,
  ws.send(f),
  lpstm = b));
  null  != snake && 2147483647 != grd && 1E3 < b - locu_mtm && (locu_mtm = Date.now(),
  myloc.style.left = Math.round(52 + 40 * (snake.xx - grd) / grd - 7) + "px",
  myloc.style.top = Math.round(52 + 40 * (snake.yy - grd) / grd - 7) + "px");
  if (1E3 < b - lrd_mtm) {
    if (testing && console && console.log) {
      console.log("FPS: " + fps);
      h = [];
      trdps += rdps;
      playing && tcsecs++;
      h.push("FPS: " + fps);
      h.push("sectors: " + sectors.length);
      h.push("foods: " + foods_c);
      h.push("bytes/sec: " + rdps);
      h.push("bytes/sec avg: " + 
      Math.round(trdps / tcsecs));
      h.push("");
      for (f = e = 0; f < rdpspc.length; f++)
        0 <= rdpspc[f] && (e += rdpspc[f]);
      for (f = 0; f < rdpspc.length; f++)
        0 <= rdpspc[f] && h.push(String.fromCharCode(f) + ": " + rdpspc[f] + " (" + Math.round(rdpspc[f] / e * 1E3) / 10 + "%)");
      h.push("total: " + e);
      maxp = pf_ep = pf_nap = pf_remove = pf_new_add = pf_add = 0;
      h.push("");
      for (f = 1; f < pfs.length; f++)
        0 != pfs[f] && (h.push(f + ": " + Math.round(1E3 * pfs[f]) / 1E3),
        pfs[f] = 0);
      pft = 0;
      pfd.innerHTML = h.join("<br>")
    }
    playing && 1 == want_quality && (32 >= fps ? high_quality && (wdfg++,
    1 <= wdfg && (high_quality = 
    !1)) : (high_quality || 48 <= fps) && 0 < wdfg && (wdfg--,
    0 >= wdfg && (high_quality = !0)));
    wangnuc = angnuc = anguc = fps = reps = rsps = rnps = rfps = rdps = 0;
    lrd_mtm = Date.now()
  }
  etm *= Math.pow(.993, vfrb);
  if (null  != snake) {
    if (xm != lsxm || ym != lsym)
      want_e = !0;
    want_e && 100 < b - last_e_mtm && (want_e = !1,
    last_e_mtm = b,
    lsxm = xm,
    lsym = ym,
    d2 = xm * xm + ym * ym,
    256 < d2 ? (ang = Math.atan2(ym, xm),
    snake.eang = ang) : ang = snake.wang,
    ang %= pi2,
    0 > ang && (ang += pi2),
    5 <= protocol_version ? (sang = Math.floor(251 * ang / pi2),
    sang != lsang && (lsang = sang,
    f = new Uint8Array(1),
    f[0] = sang & 255,
    lpstm = 
    b,
    ws.send(f.buffer))) : (sang = Math.floor(16777215 * ang / pi2),
    sang != lsang && (lsang = sang,
    f = new Uint8Array(4),
    f[0] = 101,
    f[1] = sang >> 16 & 255,
    f[2] = sang >> 8 & 255,
    f[3] = sang & 255,
    lpstm = b,
    ws.send(f.buffer))))
  }
  if (!choosing_skin)
    for (f = snakes.length - 1; 0 <= f; f--) {
      e = snakes[f];
      q = mamu * vfr * e.scang * e.spang;
      b = e.sp * vfr / 4;
      b > e.msl && (b = e.msl);
      if (!e.dead) {
        e.tsp != e.sp && (e.tsp < e.sp ? (e.tsp += .3 * vfr,
        e.tsp > e.sp && (e.tsp = e.sp)) : (e.tsp -= .3 * vfr,
        e.tsp < e.sp && (e.tsp = e.sp)));
        e.tsp > e.fsp && (e.sfr += (e.tsp - e.fsp) * vfr * .021);
        if (0 < e.fltg)
          for (h = vfrb,
          h > e.fltg && 
          (h = e.fltg),
          e.fltg -= h,
          qq = 0; qq < h; qq++)
            e.fl = e.fls[e.flpos],
            e.fls[e.flpos] = 0,
            e.flpos++,
            e.flpos >= lfc && (e.flpos = 0);
        else
          0 == e.fltg && (e.fltg = -1,
          e.fl = 0);
        e.cfl = e.tl + e.fl
      }
      if (1 == e.dir) {
        e.ang -= q;
        if (0 > e.ang || e.ang >= pi2)
          e.ang %= pi2;
        0 > e.ang && (e.ang += pi2);
        h = (e.wang - e.ang) % pi2;
        0 > h && (h += pi2);
        h > Math.PI && (h -= pi2);
        0 < h && (e.ang = e.wang,
        e.dir = 0)
      } else if (2 == e.dir) {
        e.ang += q;
        if (0 > e.ang || e.ang >= pi2)
          e.ang %= pi2;
        0 > e.ang && (e.ang += pi2);
        h = (e.wang - e.ang) % pi2;
        0 > h && (h += pi2);
        h > Math.PI && (h -= pi2);
        0 > h && (e.ang = e.wang,
        e.dir = 0)
      } else
        e.ang = e.wang;
      1 != e.ehl && (e.ehl += .03 * vfr,
      1 <= e.ehl && (e.ehl = 1));
      q = e.pts[e.pts.length - 1];
      e.wehang = Math.atan2(e.yy + e.fy - q.yy - q.fy + q.eby * (1 - e.ehl), e.xx + e.fx - q.xx - q.fx + q.ebx * (1 - e.ehl));
      e.dead || e.ehang == e.wehang || (h = (e.wehang - e.ehang) % pi2,
      0 > h && (h += pi2),
      h > Math.PI && (h -= pi2),
      0 > h ? e.edir = 1 : 0 < h && (e.edir = 2));
      if (1 == e.edir) {
        e.ehang -= .1 * vfr;
        if (0 > e.ehang || e.ehang >= pi2)
          e.ehang %= pi2;
        0 > e.ehang && (e.ehang += pi2);
        h = (e.wehang - e.ehang) % pi2;
        0 > h && (h += pi2);
        h > Math.PI && (h -= pi2);
        0 < h && (e.ehang = e.wehang,
        e.edir = 0)
      } else if (2 == e.edir) {
        e.ehang += .1 * vfr;
        if (0 > e.ehang || e.ehang >= pi2)
          e.ehang %= pi2;
        0 > e.ehang && (e.ehang += pi2);
        h = (e.wehang - e.ehang) % pi2;
        0 > h && (h += pi2);
        h > Math.PI && (h -= pi2);
        0 > h && (e.ehang = e.wehang,
        e.edir = 0)
      }
      e.dead || (e.xx += Math.cos(e.ang) * b,
      e.yy += Math.sin(e.ang) * b,
      e.chl += b / e.msl);
      if (0 < vfrb) {
        for (u = e.pts.length - 1; 0 <= u; u--)
          q = e.pts[u],
          q.dying && (q.da += .0015 * vfrb,
          1 < q.da && (e.pts.splice(u, 1),
          q.dying = !1,
          points_dp.add(q)));
        for (u = e.pts.length - 1; 0 <= u; u--)
          if (q = e.pts[u],
          0 < q.eiu) {
            fy = fx = 0;
            for (qq = cm1 = q.eiu - 1; 0 <= qq; qq--)
              q.efs[qq] = 2 == q.ems[qq] ? q.efs[qq] + vfrb2 : q.efs[qq] + 
              vfrb,
              h = q.efs[qq],
              h >= hfc ? (qq != cm1 && (q.exs[qq] = q.exs[cm1],
              q.eys[qq] = q.eys[cm1],
              q.efs[qq] = q.efs[cm1],
              q.ems[qq] = q.ems[cm1]),
              q.eiu--,
              cm1--) : (fx += q.exs[qq] * hfas[h],
              fy += q.eys[qq] * hfas[h]);
            q.fx = fx;
            q.fy = fy
          }
      }
      b = 2.3 * Math.cos(e.eang);
      h = 2.3 * Math.sin(e.eang);
      e.rex < b && (e.rex += vfr / 6,
      e.rex >= b && (e.rex = b));
      e.rey < h && (e.rey += vfr / 6,
      e.rey >= h && (e.rey = h));
      e.rex > b && (e.rex -= vfr / 6,
      e.rex <= b && (e.rex = b));
      e.rey > h && (e.rey -= vfr / 6,
      e.rey <= h && (e.rey = h));
      if (0 < vfrb) {
        if (0 < e.ftg)
          for (h = vfrb,
          h > e.ftg && (h = e.ftg),
          e.ftg -= h,
          qq = 0; qq < h; qq++)
            e.fx = 
            e.fxs[e.fpos],
            e.fy = e.fys[e.fpos],
            e.fchl = e.fchls[e.fpos],
            e.fxs[e.fpos] = 0,
            e.fys[e.fpos] = 0,
            e.fchls[e.fpos] = 0,
            e.fpos++,
            e.fpos >= rfc && (e.fpos = 0);
        else
          0 == e.ftg && (e.ftg = -1,
          e.fx = 0,
          e.fy = 0,
          e.fchl = 0);
        if (0 < e.fatg)
          for (h = vfrb,
          h > e.fatg && (h = e.fatg),
          e.fatg -= h,
          qq = 0; qq < h; qq++)
            e.fa = e.fas[e.fapos],
            e.fas[e.fapos] = 0,
            e.fapos++,
            e.fapos >= afc && (e.fapos = 0);
        else
          0 == e.fatg && (e.fatg = -1,
          e.fa = 0)
      }
      e.dead ? (e.dead_amt += .02 * vfr,
      1 <= e.dead_amt && snakes.splice(f, 1)) : 1 != e.alive_amt && (e.alive_amt += .015 * vfr,
      1 <= e.alive_amt && (e.alive_amt = 1))
    }
  for (f = 
  preys.length - 1; 0 <= f; f--) {
    u = preys[f];
    q = mamu2 * vfr;
    b = u.sp * vfr / 4;
    if (0 < vfrb)
      if (0 < u.ftg)
        for (h = vfrb,
        h > u.ftg && (h = u.ftg),
        u.ftg -= h,
        qq = 1; qq <= h; qq++)
          qq == h && (u.fx = u.fxs[u.fpos],
          u.fy = u.fys[u.fpos]),
          u.fxs[u.fpos] = 0,
          u.fys[u.fpos] = 0,
          u.fpos++,
          u.fpos >= rfc && (u.fpos = 0);
      else
        0 == u.ftg && (u.fx = 0,
        u.fy = 0,
        u.ftg = -1);
    if (1 == u.dir) {
      u.ang -= q;
      if (0 > u.ang || u.ang >= pi2)
        u.ang %= pi2;
      0 > u.ang && (u.ang += pi2);
      h = (u.wang - u.ang) % pi2;
      0 > h && (h += pi2);
      h > Math.PI && (h -= pi2);
      0 < h && (u.ang = u.wang,
      u.dir = 0)
    } else if (2 == u.dir) {
      u.ang += q;
      if (0 > u.ang || u.ang >= pi2)
        u.ang %= 
        pi2;
      0 > u.ang && (u.ang += pi2);
      h = (u.wang - u.ang) % pi2;
      0 > h && (h += pi2);
      h > Math.PI && (h -= pi2);
      0 > h && (u.ang = u.wang,
      u.dir = 0)
    } else
      u.ang = u.wang;
    u.xx += Math.cos(u.ang) * b;
    u.yy += Math.sin(u.ang) * b;
    u.gfr += vfr * u.gr;
    u.eaten ? (1.5 != u.fr && (u.fr += vfr / 150,
    1.5 <= u.fr && (u.fr = 1.5)),
    u.eaten_fr += vfr / 47,
    u.gfr += vfr,
    e = u.eaten_by,
    1 <= u.eaten_fr || !e ? preys.splice(f, 1) : (u.eaten_fr4 = Math.pow(u.eaten_fr, 4),
    u.rad = 1 - Math.pow(u.eaten_fr, 3))) : 1 != u.fr && (u.fr += vfr / 150,
    1 <= u.fr ? (u.fr = 1,
    u.rad = 1) : (u.rad = .5 * (1 - Math.cos(Math.PI * u.fr)),
    u.rad += .66 * (.5 * (1 - 
    Math.cos(Math.PI * u.rad)) - u.rad)))
  }
  for (f = cm1 = foods_c - 1; 0 <= f; f--)
    b = foods[f],
    b.gfr += vfr * b.gr,
    b.eaten ? (1.5 != b.fr && (b.fr += vfr / 150,
    1.5 <= b.fr && (b.fr = 1.5)),
    b.eaten_fr += vfr / 41,
    b.rad = 1 - Math.pow(b.eaten_fr, 3),
    e = b.eaten_by,
    1 <= b.eaten_fr || !e ? (f == cm1 ? foods[f] = null  : (foods[f] = foods[cm1],
    foods[cm1] = null ),
    foods_c--,
    cm1--) : (e = b.eaten_by,
    h = b.eaten_fr * b.eaten_fr,
    b.eaten_fr4 = h * h,
    b.rad = 1 - b.eaten_fr * h,
    b.rx = b.xx + (e.xx + e.fx + Math.cos(e.ang + e.fa) * (43 - 24 * h) * (1 - h) - b.xx) * h,
    b.ry = b.yy + (e.yy + e.fy + Math.sin(e.ang + e.fa) * (43 - 24 * h) * (1 - 
    h) - b.yy) * h,
    b.rx += 6 * Math.cos(b.wsp * b.gfr) * (1 - b.eaten_fr),
    b.ry += 6 * Math.sin(b.wsp * b.gfr) * (1 - b.eaten_fr))) : (1 != b.fr && (b.fr += b.rsp * vfr / 150,
    1 <= b.fr ? (b.fr = 1,
    b.rad = 1) : (b.rad = .5 * (1 - Math.cos(Math.PI * b.fr)),
    b.rad += .66 * (.5 * (1 - Math.cos(Math.PI * b.rad)) - b.rad))),
    b.rx = b.xx,
    b.ry = b.yy,
    b.rx = b.xx + 6 * Math.cos(b.wsp * b.gfr),
    b.ry = b.yy + 6 * Math.sin(b.wsp * b.gfr));
  vfrb = vfr = 0;
  redraw();
  no_raf || raf(oef)
}
, bgx = 0, bgy = 0, bgx2 = 0, bgy2 = 0, fgfr = 0, px, py, lpx, lpy, ax, ay, lax, lay, pax, pay, fx, fy, fs, maxp = 0, fps = 0, redraw = function() {
  fps++;
  var b = mc.getContext("2d");
  if (animating) {
    if (snake) {
      var q = .5 + .4 / Math.max(1, (snake.sct + 16) / 36);
      gsc != q && (gsc < q ? (gsc += 2E-4,
      gsc >= q && (gsc = q)) : (gsc -= 2E-4,
      gsc <= q && (gsc = q)))
    }
    var q = view_xx
      , c = view_yy;
    null  != snake && (0 < fvtg && (fvtg--,
    fvx = fvxs[fvpos],
    fvy = fvys[fvpos],
    fvxs[fvpos] = 0,
    fvys[fvpos] = 0,
    fvpos++,
    fvpos >= vfc && (fvpos = 0)),
    view_xx = snake.xx + snake.fx + fvx,
    view_yy = snake.yy + snake.fy + fvy,
    choosing_skin && (view_xx -= 104,
    gsc = 1),
    view_ang = Math.atan2(view_yy - grd, view_xx - grd),
    view_dist = Math.sqrt((view_xx - grd) * (view_xx - grd) + (view_yy - grd) * (view_yy - grd)),
    bpx1 = view_xx - (mww2 / gsc + 84),
    bpy1 = view_yy - (mhh2 / gsc + 84),
    bpx2 = view_xx + (mww2 / gsc + 84),
    bpy2 = view_yy + (mhh2 / gsc + 84),
    fpx1 = view_xx - (mww2 / gsc + 24),
    fpy1 = view_yy - (mhh2 / gsc + 24),
    fpx2 = view_xx + (mww2 / gsc + 24),
    fpy2 = view_yy + (mhh2 / gsc + 24));
    bgx2 -= 1 * (view_xx - q) / bgw2;
    bgy2 -= 1 * (view_yy - c) / bgh2;
    bgx2 %= 1;
    0 > bgx2 && (bgx2 += 1);
    bgy2 %= 1;
    0 > bgy2 && (bgy2 += 1);
    ggbg && (high_quality || 0 < gla) ? (b.save(),
    b.fillStyle = "#000000",
    b.fillRect(0, 0, mww, mhh),
    b.globalAlpha = .3 * gla,
    b.drawImage(gbgmc, 0, 0),
    b.restore()) : (b.fillStyle = "#000000",
    b.fillRect(0, 0, mww, 
    mhh));
    if (bgp2) {
      b.save();
      b.fillStyle = bgp2;
      b.translate(mww2, mhh2);
      b.scale(gsc, gsc);
      b.translate(bgx2 * bgw2, bgy2 * bgh2);
      b.globalAlpha = .4 + .6 * (1 - gla);
      b.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh / gsc);
      if (high_quality || 0 < gla)
        b.globalCompositeOperation = "lighter",
        b.globalAlpha = .4 * gla,
        b.fillRect(3 * -mww / gsc, 3 * -mhh / gsc, 5 * mww / gsc, 5 * mhh / gsc);
      b.restore()
    }
    if (testing)
      for (q = sectors.length - 1; 0 <= q; q--)
        c = sectors[q],
        b.fillStyle = "rgba(0, 255, 0, .1)",
        b.fillRect(mww2 + (c.xx * sector_size - view_xx) * gsc, mhh2 + (c.yy * sector_size - 
        view_yy) * gsc, sector_size * gsc - 4, sector_size * gsc - 4);
    if (high_quality || 0 < gla) {
      var h = 1.75;
      1 != gla && (h = 1.75 * gla);
      b.save();
      for (q = foods_c - 1; 0 <= q; q--)
        c = foods[q],
        c.rx >= fpx1 && c.ry >= fpy1 && c.rx <= fpx2 && c.ry <= fpy2 && (1 == c.rad ? (A = mww2 + gsc * (c.rx - view_xx) - c.ofw2,
        t = mhh2 + gsc * (c.ry - view_yy) - c.ofh2,
        -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha = h * c.fr,
        b.drawImage(c.ofi, A, t))) : (A = mww2 + gsc * (c.rx - view_xx) - c.ofw2 * c.rad,
        t = mhh2 + gsc * (c.ry - view_yy) - c.ofh2 * c.rad,
        -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha = h * c.fr,
        b.drawImage(c.ofi, 
        0, 0, c.ofw, c.ofh, A, t, c.ofw * c.rad, c.ofh * c.rad))));
      b.restore()
    }
    b.save();
    b.globalCompositeOperation = "lighter";
    if (high_quality || 0 < gla) {
      h = .75;
      1 != gla && (h = .75 * gla);
      var u = .75;
      1 != gla && (u = 1 - .25 * gla);
      for (q = foods_c - 1; 0 <= q; q--)
        c = foods[q],
        c.rx >= fpx1 && c.ry >= fpy1 && c.rx <= fpx2 && c.ry <= fpy2 && (1 == c.rad ? (A = mww2 + gsc * (c.rx - view_xx) - c.fw2,
        t = mhh2 + gsc * (c.ry - view_yy) - c.fh2,
        -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha = u * c.fr,
        b.drawImage(c.fi, A, t),
        b.globalAlpha = h * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr,
        b.drawImage(c.fi, A, t))) : 
        (A = mww2 + gsc * (c.rx - view_xx) - c.fw2 * c.rad,
        t = mhh2 + gsc * (c.ry - view_yy) - c.fh2 * c.rad,
        -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha = u * c.fr,
        b.drawImage(c.fi, 0, 0, c.fw, c.fh, A, t, c.fw * c.rad, c.fh * c.rad),
        b.globalAlpha = h * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr,
        b.drawImage(c.fi, 0, 0, c.fw, c.fh, A, t, c.fw * c.rad, c.fh * c.rad))))
    } else
      for (q = foods_c - 1; 0 <= q; q--)
        c = foods[q],
        c.rx >= fpx1 && c.ry >= fpy1 && c.rx <= fpx2 && c.ry <= fpy2 && (1 == c.rad ? (A = mww2 + gsc * (c.rx - view_xx) - c.fw2,
        t = mhh2 + gsc * (c.ry - view_yy) - c.fh2,
        -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && 
        (b.globalAlpha = c.fr,
        b.drawImage(c.fi, A, t))) : (A = mww2 + gsc * (c.rx - view_xx) - c.fw2 * c.rad,
        t = mhh2 + gsc * (c.ry - view_yy) - c.fh2 * c.rad,
        -50 <= A && -50 <= t && A <= mwwp50 && t <= mhhp50 && (b.globalAlpha = c.fr,
        b.drawImage(c.fi, 0, 0, c.fw, c.fh, A, t, c.fw * c.rad, c.fh * c.rad))));
    b.restore();
    b.save();
    b.globalCompositeOperation = "lighter";
    for (q = preys.length - 1; 0 <= q; q--)
      if (h = preys[q],
      e = h.xx + h.fx,
      y = h.yy + h.fy,
      px = mww2 + gsc * (e - view_xx),
      py = mhh2 + gsc * (y - view_yy),
      -50 <= px && -50 <= py && px <= mwwp50 && py <= mhhp50) {
        if (h.eaten) {
          var c = h.eaten_by
            , f = Math.pow(h.eaten_fr, 
          2)
            , e = e + (c.xx + c.fx + Math.cos(c.ang + c.fa) * (43 - 24 * f) * (1 - f) - e) * f
            , y = y + (c.yy + c.fy + Math.sin(c.ang + c.fa) * (43 - 24 * f) * (1 - f) - y) * f;
          px = mww2 + gsc * (e - view_xx);
          py = mhh2 + gsc * (y - view_yy)
        }
        1 == h.rad ? (A = px - h.fw2,
        t = py - h.fh2,
        b.globalAlpha = .75 * h.fr,
        b.drawImage(h.fi, A, t),
        b.globalAlpha = .75 * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
        b.drawImage(h.fi, A, t)) : (A = px - h.fw2 * h.rad,
        t = py - h.fh2 * h.rad,
        b.globalAlpha = .75 * h.fr,
        b.drawImage(h.fi, 0, 0, h.fw, h.fh, A, t, h.fw * h.rad, h.fh * h.rad),
        b.globalAlpha = .75 * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
        b.drawImage(h.fi, 0, 0, 
        h.fw, h.fh, A, t, h.fw * h.rad, h.fh * h.rad))
      }
    b.restore();
    b.save();
    b.strokeStyle = "#90C098";
    for (var e, y, F, q = snakes.length - 1; 0 <= q; q--)
      c = snakes[q],
      e = c.xx + c.fx,
      y = c.yy + c.fy + 40,
      0 < c.na && e >= bpx1 - 100 && y >= bpy1 && e <= bpx2 + 100 && y <= bpy2 && (c == snake && (c.fnfr++,
      200 < c.fnfr && (c.na -= .004,
      0 > c.na && (c.na = 0))),
      b.save(),
      b.globalAlpha = .5 * c.na * c.alive_amt * (1 - c.dead_amt),
      b.font = "12px Arial, Helvetica Neue, Helvetica, sans-serif",
      b.fillStyle = c.csw,
      b.textBaseline = "middle",
      b.textAlign = "center",
      h = c.xx + c.fx,
      u = c.yy + c.fy,
      h = mww2 + (h - view_xx) * 
      gsc,
      u = mhh2 + (u - view_yy) * gsc,
      b.fillText(c.nk, h, u + 32 + 7 * c.sc * gsc),
      b.restore());
    for (q = snakes.length - 1; 0 <= q; q--)
      for (c = snakes[q],
      c.iiv = !1,
      x = c.pts.length - 1; 0 <= x; x--)
        if (e = c.pts[x],
        px = e.xx + e.fx,
        py = e.yy + e.fy,
        px >= bpx1 && py >= bpy1 && px <= bpx2 && py <= bpy2) {
          c.iiv = !0;
          break
        }
    for (q = snakes.length - 1; 0 <= q; q--)
      if (c = snakes[q],
      c.iiv) {
        h = c.xx + c.fx;
        u = c.yy + c.fy;
        px = h;
        py = u;
        F = c.ehang;
        var B = c.sc
          , w = 29 * B
          , D = c.cfl;
        e = c.pts[c.pts.length - 1];
        if (1 == render_mode) {
          b.save();
          b.beginPath();
          b.moveTo(mww2 + (px - view_xx) * gsc, mhh2 + (py - view_yy) * gsc);
          y = !1;
          for (var x = 
          c.pts.length - 1; 0 <= x; x--) {
            e = c.pts[x];
            lpx = px;
            lpy = py;
            px = e.xx;
            py = e.yy;
            var A = e.fx
              , t = e.fy;
            0 < D && (px += A,
            py += t,
            lax = ax,
            lay = ay,
            ax = (px + lpx) / 2,
            ay = (py + lpy) / 2,
            y || (lax = ax,
            lay = ay),
            1 > D && (f = 1 - D,
            lpx += (lax - lpx) * f,
            lpy += (lay - lpy) * f,
            ax += (lax - ax) * f,
            ay += (lay - ay) * f),
            y ? D-- : D -= c.chl + c.fchl,
            y ? b.quadraticCurveTo(mww2 + (lpx - view_xx) * gsc, mhh2 + (lpy - view_yy) * gsc, mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc) : (b.lineTo(mww2 + (ax - view_xx) * gsc, mhh2 + (ay - view_yy) * gsc),
            y = !0))
          }
          b.save();
          b.lineJoin = "round";
          b.lineCap = "round";
          is_firefox ? (c.sp > c.fsp && 
          (x = c.alive_amt * (1 - c.dead_amt) * Math.max(0, Math.min(1, (c.sp - c.ssp) / (c.msp - c.ssp))),
          b.save(),
          b.strokeStyle = c.cs,
          b.globalAlpha = .3 * x,
          b.lineWidth = (w + 6) * gsc,
          b.stroke(),
          b.lineWidth = (w + 9) * gsc,
          b.stroke(),
          b.lineWidth = (w + 12) * gsc,
          b.stroke(),
          b.restore()),
          b.globalAlpha = 1 * c.alive_amt * (1 - c.dead_amt),
          b.strokeStyle = "#000000",
          b.lineWidth = (w + 5) * gsc) : (c.sp > c.fsp && (x = c.alive_amt * (1 - c.dead_amt) * Math.max(0, Math.min(1, (c.sp - c.ssp) / (c.msp - c.ssp))),
          b.save(),
          b.lineWidth = (w - 2) * gsc,
          b.shadowBlur = 30 * gsc,
          b.shadowColor = "rgba(" + c.rr + 
          "," + c.gg + "," + c.bb + ", " + Math.round(1E4 * x) / 1E4 + ")",
          b.stroke(),
          b.stroke(),
          b.restore()),
          b.globalAlpha = .4 * c.alive_amt * (1 - c.dead_amt),
          b.strokeStyle = "#000000",
          b.lineWidth = (w + 5) * gsc,
          b.stroke(),
          b.strokeStyle = c.cs,
          b.lineWidth = w * gsc,
          b.strokeStyle = "#000000",
          b.globalAlpha = 1 * c.alive_amt * (1 - c.dead_amt));
          b.stroke();
          b.strokeStyle = c.cs;
          b.globalAlpha = .8 * c.alive_amt * (1 - c.dead_amt);
          b.lineWidth = w * gsc;
          b.stroke();
          b.restore();
          b.strokeStyle = c.cs;
          c.dead && (t = (.5 + .5 * Math.abs(Math.sin(5 * Math.PI * c.dead_amt))) * Math.sin(Math.PI * 
          c.dead_amt),
          b.save(),
          b.lineJoin = "round",
          b.lineCap = "round",
          b.globalCompositeOperation = "lighter",
          b.lineWidth = (w - 3) * gsc,
          b.globalAlpha = t,
          b.strokeStyle = "#FFCC99",
          b.stroke(),
          b.restore());
          b.restore()
        }
        if (2 == render_mode) {
          var w = .5 * w, H, z, L, I, C, K, M, O, A = 0;
          px = h;
          py = u;
          C = px;
          K = py;
          C >= bpx1 && K >= bpy1 && C <= bpx2 && K <= bpy2 ? (pbx[0] = C,
          pby[0] = K,
          pba[0] = Math.atan2(u - (e.yy + e.fy), h - (e.xx + e.fx)) + Math.PI,
          pbu[0] = 1) : pbu[0] = 0;
          A = 1;
          n = (c.chl + c.fchl) % .25;
          0 > n && (n += .25);
          n = .25 - n;
          D += 1 - .25 * Math.ceil((c.chl + c.fchl) / .25);
          ax = px;
          ay = py;
          c.sep != c.wsep && 
          (c.sep < c.wsep ? (c.sep += .01,
          c.sep >= c.wsep && (c.sep = c.wsep)) : c.sep > c.wsep && (c.sep -= .01,
          c.sep <= c.wsep && (c.sep = c.wsep)));
          for (var N = c.sep * qsm, J = 0, t = per_color_imgs[c.cv].kmcs, E, G, x = c.pts.length - 1; 0 <= x; x--)
            if (e = c.pts[x],
            lpx = px,
            lpy = py,
            px = e.xx + e.fx,
            py = e.yy + e.fy,
            -.25 < D) {
              L = C;
              I = K;
              C = (px + lpx) / 2;
              K = (py + lpy) / 2;
              M = lpx;
              O = lpy;
              for (f = 0; 1 > f; f += .25) {
                E = n + f;
                e = L + (M - L) * E;
                y = I + (O - I) * E;
                H = M + (C - M) * E;
                z = O + (K - O) * E;
                lax = ax;
                lay = ay;
                ax = e + (H - e) * E;
                ay = y + (z - y) * E;
                0 > D && (ax += -(lax - ax) * D / .25,
                ay += -(lay - ay) * D / .25);
                H = Math.sqrt(Math.pow(ax - lax, 2) + Math.pow(ay - 
                lay, 2));
                if (J + H < N)
                  J += H;
                else {
                  J = -J;
                  for (E = (H - J) / N; 1 <= E; E--)
                    J += N,
                    pax = lax + (ax - lax) * J / H,
                    pay = lay + (ay - lay) * J / H,
                    pax >= bpx1 && pay >= bpy1 && pax <= bpx2 && pay <= bpy2 ? (pbx[A] = pax,
                    pby[A] = pay,
                    pbu[A] = 1,
                    e = ax - lax,
                    y = ay - lay,
                    pba[A] = -15 <= e && -15 <= y && 15 > e && 15 > y ? at2lt[8 * y + 128 << 8 | 8 * e + 128] : -127 <= e && -127 <= y && 127 > e && 127 > y ? at2lt[y + 128 << 8 | e + 128] : Math.atan2(y, e)) : pbu[A] = 0,
                    A++;
                  J = H - J
                }
                if (1 > D && (D -= .25,
                -.25 >= D))
                  break
              }
              1 <= D && D--
            }
          ax >= bpx1 && ay >= bpy1 && ax <= bpx2 && ay <= bpy2 ? (pbu[A] = 1,
          pbx[A] = ax,
          pby[A] = ay,
          pba[A] = Math.atan2(ay - lay, ax - lax)) : pbu[A] = 0;
          A++;
          b.save();
          b.translate(mww2, mhh2);
          f = gsc * w * 52 / 32;
          C = gsc * w * 62 / 32;
          D = c.alive_amt * (1 - c.dead_amt);
          D *= D;
          E = 1;
          if (c.tsp > c.fsp) {
            E = c.alive_amt * (1 - c.dead_amt) * Math.max(0, Math.min(1, (c.tsp - c.ssp) / (c.msp - c.ssp)));
            G = .37 * E;
            y = Math.pow(E, .5);
            J = gsc * w * (1 + .9375 * y);
            e = per_color_imgs[c.cv].kfmc;
            b.save();
            b.globalCompositeOperation = "lighter";
            if (c.rbcs)
              for (K = c.rbcs,
              N = K.length,
              x = A - 1; 0 <= x; x--)
                1 == pbu[x] && (px = pbx[x],
                py = pby[x],
                e = per_color_imgs[K[x % N]],
                e = e.kfmc,
                b.save(),
                b.globalAlpha = D * y * .38 * (.6 + .4 * Math.cos(x / 4 - 1.15 * c.sfr)),
                b.translate((px - 
                view_xx) * gsc, (py - view_yy) * gsc),
                b.drawImage(e, -J, -J, 2 * J, 2 * J),
                b.restore());
            else
              for (x = A - 1; 0 <= x; x--)
                1 == pbu[x] && (px = pbx[x],
                py = pby[x],
                b.save(),
                b.globalAlpha = D * y * .38 * (.6 + .4 * Math.cos(x / 4 - 1.15 * c.sfr)),
                b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                b.drawImage(e, -J, -J, 2 * J, 2 * J),
                b.restore());
            b.restore();
            E = 1 - E
          }
          E *= D;
          if (high_quality || 0 < gla)
            for (e = E,
            1 != gla && (e = E * gla),
            b.globalAlpha = e,
            x = A - 1; 0 <= x; x--)
              1 == pbu[x] && (px = pbx[x],
              py = pby[x],
              b.save(),
              b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
              b.drawImage(komc, -f, -f, 2 * f, 2 * 
              f),
              9 > x && (b.globalAlpha = e * (1 - x / 9),
              b.drawImage(ksmc, -C, -C, 2 * C, 2 * C),
              b.globalAlpha = e),
              b.restore());
          b.globalAlpha = E;
          if (c.rbcs) {
            K = c.rbcs;
            N = K.length;
            for (x = A - 1; 0 <= x; x--)
              1 == pbu[x] && (px = pbx[x],
              py = pby[x],
              2 <= x && (f = x - 2,
              1 == pbu[f] && (e = pbx[f],
              y = pby[f],
              b.save(),
              b.translate((e - view_xx) * gsc, (y - view_yy) * gsc),
              b.globalAlpha = 9 > f ? f / 9 * E : E,
              b.drawImage(ksmc, -C, -C, 2 * C, 2 * C),
              b.restore())),
              b.save(),
              b.globalAlpha = D,
              b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
              b.rotate(pba[x]),
              f = x % (2 * t.length),
              f >= t.length && (f = 2 * t.length - (f + 1)),
              e = per_color_imgs[K[x % N]],
              b.drawImage(e.kmcs[f], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w),
              b.restore());
            if (c.tsp > c.fsp && (high_quality || 0 < gla)) {
              b.save();
              b.globalCompositeOperation = "lighter";
              for (x = A - 1; 0 <= x; x--)
                1 == pbu[x] && (px = pbx[x],
                py = pby[x],
                b.save(),
                b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                b.rotate(pba[x]),
                b.globalAlpha = D * G * gla * (.5 + .5 * Math.cos(x / 4 - c.sfr)),
                f = x % (2 * t.length),
                f >= t.length && (f = 2 * t.length - (f + 1)),
                b.drawImage(per_color_imgs[K[x % N]].kmcs[f], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w),
                b.restore());
              b.restore()
            }
          } else {
            for (x = 
            A - 1; 0 <= x; x--)
              1 == pbu[x] && (px = pbx[x],
              py = pby[x],
              2 <= x && (f = x - 2,
              1 == pbu[f] && (e = pbx[f],
              y = pby[f],
              b.save(),
              b.translate((e - view_xx) * gsc, (y - view_yy) * gsc),
              b.globalAlpha = 9 > f ? f / 9 * E : E,
              b.drawImage(ksmc, -C, -C, 2 * C, 2 * C),
              b.restore())),
              b.save(),
              b.globalAlpha = D,
              b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
              b.rotate(pba[x]),
              f = x % (2 * t.length),
              f >= t.length && (f = 2 * t.length - (f + 1)),
              b.drawImage(t[f], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w),
              b.restore());
            if (c.tsp > c.fsp && (high_quality || 0 < gla)) {
              b.save();
              b.globalCompositeOperation = "lighter";
              for (x = 
              A - 1; 0 <= x; x--)
                1 == pbu[x] && (px = pbx[x],
                py = pby[x],
                f = x % (2 * t.length),
                f >= t.length && (f = 2 * t.length - (f + 1)),
                b.save(),
                b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
                b.rotate(pba[x]),
                b.globalAlpha = D * G * gla * (.5 + .5 * Math.cos(x / 4 - c.sfr)),
                b.drawImage(t[f], -gsc * w, -gsc * w, 2 * gsc * w, 2 * gsc * w),
                b.restore());
              b.restore()
            }
          }
          if (c.antenna && 2 <= A && 1 == pbu[1]) {
            c.atx[0] = pbx[1];
            c.aty[0] = pby[1];
            E = c.sc * gsc;
            fj = c.atx.length - 1;
            if (choosing_skin)
              for (x = 1; x <= fj; x++)
                c.atvx[x] -= .3,
                c.atvy[x] += .14 * Math.cos(fr / 23 - 7 * x / fj);
            for (x = 1; x <= fj; x++)
              xx = c.atx[x - 
              1],
              yy = c.aty[x - 1],
              xx += 2 * Math.random() - 1,
              yy += 2 * Math.random() - 1,
              e = c.atx[x] - xx,
              y = c.aty[x] - yy,
              ang = -4 <= e && -4 <= y && 4 > e && 4 > y ? at2lt[32 * y + 128 << 8 | 32 * e + 128] : -8 <= e && -8 <= y && 8 > e && 8 > y ? at2lt[16 * y + 128 << 8 | 16 * e + 128] : -16 <= e && -16 <= y && 16 > e && 16 > y ? at2lt[8 * y + 128 << 8 | 8 * e + 128] : -127 <= e && -127 <= y && 127 > e && 127 > y ? at2lt[y + 128 << 8 | e + 128] : Math.atan2(y, e),
              xx += 4 * Math.cos(ang) * c.sc,
              yy += 4 * Math.sin(ang) * c.sc,
              c.atvx[x] += .1 * (xx - c.atx[x]),
              c.atvy[x] += .1 * (yy - c.aty[x]),
              c.atx[x] += c.atvx[x],
              c.aty[x] += c.atvy[x],
              c.atvx[x] *= .88,
              c.atvy[x] *= .88,
              e = c.atx[x] - 
              c.atx[x - 1],
              y = c.aty[x] - c.aty[x - 1],
              H = Math.sqrt(e * e + y * y),
              H > 4 * c.sc && (ang = -4 <= e && -4 <= y && 4 > e && 4 > y ? at2lt[32 * y + 128 << 8 | 32 * e + 128] : -8 <= e && -8 <= y && 8 > e && 8 > y ? at2lt[16 * y + 128 << 8 | 16 * e + 128] : -16 <= e && -16 <= y && 16 > e && 16 > y ? at2lt[8 * y + 128 << 8 | 8 * e + 128] : -127 <= e && -127 <= y && 127 > e && 127 > y ? at2lt[y + 128 << 8 | e + 128] : Math.atan2(y, e),
              c.atx[x] = c.atx[x - 1] + 4 * Math.cos(ang) * c.sc,
              c.aty[x] = c.aty[x - 1] + 4 * Math.sin(ang) * c.sc);
            b.globalAlpha = D;
            b.strokeStyle = c.atc1;
            b.lineWidth = 5 * E;
            b.lineCap = "round";
            b.lineJoin = "round";
            b.beginPath();
            fj = c.atx.length - 1;
            e = (c.atx[fj] - 
            view_xx) * gsc;
            y = (c.aty[fj] - view_yy) * gsc;
            b.moveTo(e, y);
            for (x = fj - 1; 1 <= x; x--)
              xx = (c.atx[x] - view_xx) * gsc,
              yy = (c.aty[x] - view_yy) * gsc,
              1 <= Math.abs(xx - e) + Math.abs(yy - y) && (e = xx,
              y = yy,
              b.lineTo(e, y));
            xx = (.5 * (c.atx[1] + c.atx[0]) - view_xx) * gsc;
            yy = (.5 * (c.aty[1] + c.aty[0]) - view_yy) * gsc;
            1 <= Math.abs(xx - e) + Math.abs(yy - y) && (e = xx,
            y = yy,
            b.lineTo(e, y));
            b.stroke();
            b.globalAlpha = c.atia * D;
            b.strokeStyle = c.atc2;
            b.lineWidth = 4 * E;
            b.beginPath();
            fj = c.atx.length - 1;
            e = (c.atx[fj] - view_xx) * gsc;
            y = (c.aty[fj] - view_yy) * gsc;
            b.moveTo(e, y);
            for (x = fj - 
            1; 0 <= x; x--)
              xx = (c.atx[x] - view_xx) * gsc,
              yy = (c.aty[x] - view_yy) * gsc,
              1 <= Math.abs(xx - e) + Math.abs(yy - y) && (e = xx,
              y = yy,
              b.lineTo(e, y));
            b.stroke();
            c.atwg && (b.lineWidth = 3 * E,
            b.stroke(),
            b.lineWidth = 2 * E,
            b.stroke());
            b.globalAlpha = D * c.blba;
            if (c.abrot) {
              b.save();
              b.translate((c.atx[fj] - view_xx) * gsc, (c.aty[fj] - view_yy) * gsc);
              vang = Math.atan2(c.aty[fj] - c.aty[fj - 1], c.atx[fj] - c.atx[fj - 1]) - c.atba;
              if (0 > vang || vang >= pi2)
                vang %= pi2;
              vang < -Math.PI ? vang += pi2 : vang > Math.PI && (vang -= pi2);
              c.atba = (c.atba + .15 * vang) % pi2;
              b.rotate(c.atba);
              b.drawImage(c.bulb, 
              c.blbx * c.bsc * E, c.blby * c.bsc * E, c.blbw * c.bsc * E, c.blbh * c.bsc * E);
              b.restore()
            } else
              b.drawImage(c.bulb, (c.atx[fj] - view_xx + c.blbx * c.bsc * c.sc) * gsc, (c.aty[fj] - view_yy + c.blby * c.bsc * c.sc) * gsc, c.blbw * c.bsc * E, c.blbh * c.bsc * E);
            c.apbs && (b.globalAlpha = .5 * D,
            b.lineWidth = 3 * E,
            b.stroke(),
            b.lineWidth = 2 * E,
            b.stroke())
          }
          if (c.dead) {
            b.save();
            b.globalCompositeOperation = "lighter";
            t = (.15 + .15 * Math.abs(Math.sin(5 * Math.PI * c.dead_amt))) * Math.sin(Math.PI * c.dead_amt);
            w *= gsc;
            for (x = A - 1; 0 <= x; x--)
              1 == pbu[x] && (px = pbx[x],
              py = pby[x],
              b.save(),
              b.globalAlpha = t * (.6 + .4 * Math.cos(x / 4 - 15 * c.dead_amt)),
              b.translate((px - view_xx) * gsc, (py - view_yy) * gsc),
              b.drawImage(kdmc, -w, -w, 2 * w, 2 * w),
              b.restore());
            b.restore()
          }
          b.restore()
        }
        x = 1 == render_mode ? 4 * B : 6 * B;
        w = 6 * B;
        A = Math.cos(F) * x + Math.cos(F - Math.PI / 2) * (w + .5);
        t = Math.sin(F) * x + Math.sin(F - Math.PI / 2) * (w + .5);
        b.fillStyle = c.ec;
        b.globalAlpha = c.eca * c.alive_amt;
        b.beginPath();
        b.arc(mww2 + (A + h - view_xx) * gsc, mhh2 + (t + u - view_yy) * gsc, c.er * B * gsc, 0, pi2);
        b.closePath();
        b.fill();
        b.globalAlpha = c.ppa;
        A = Math.cos(F) * (x + .5) + c.rex * B + Math.cos(F - 
        Math.PI / 2) * w;
        t = Math.sin(F) * (x + .5) + c.rey * B + Math.sin(F - Math.PI / 2) * w;
        b.fillStyle = c.ppc;
        b.beginPath();
        b.arc(mww2 + (A + h - view_xx) * gsc, mhh2 + (t + u - view_yy) * gsc, 3.5 * B * gsc, 0, pi2);
        b.closePath();
        b.fill();
        A = Math.cos(F) * x + Math.cos(F + Math.PI / 2) * (w + .5);
        t = Math.sin(F) * x + Math.sin(F + Math.PI / 2) * (w + .5);
        b.fillStyle = c.ec;
        b.globalAlpha = c.eca * c.alive_amt;
        b.beginPath();
        b.arc(mww2 + (A + h - view_xx) * gsc, mhh2 + (t + u - view_yy) * gsc, c.er * B * gsc, 0, pi2);
        b.closePath();
        b.fill();
        b.globalAlpha = c.ppa;
        A = Math.cos(F) * (x + .5) + c.rex * B + Math.cos(F + Math.PI / 
        2) * w;
        t = Math.sin(F) * (x + .5) + c.rey * B + Math.sin(F + Math.PI / 2) * w;
        b.fillStyle = c.ppc;
        b.beginPath();
        b.arc(mww2 + (A + h - view_xx) * gsc, mhh2 + (t + u - view_yy) * gsc, 3.5 * B * gsc, 0, pi2);
        b.closePath();
        b.fill();
        b.globalAlpha = 1
      }
    if (high_quality || 0 < gla) {
      b.save();
      b.globalCompositeOperation = "lighter";
      for (q = foods_c - 1; 0 <= q; q--)
        c = foods[q],
        c.rx >= fpx1 && c.ry >= fpy1 && c.rx <= fpx2 && c.ry <= fpy2 && (e = c.rx - view_xx,
        y = c.ry - view_yy,
        h = e * e + y * y,
        fs = 1 + .06 * c.rad,
        A = e * fs,
        t = y * fs,
        G = .005 + .09 * (1 - h / (86E3 + h)),
        1 != c.rad && (G *= Math.pow(c.rad, .25)),
        1 != gla && (G *= gla),
        A = 
        A * gsc + mww2,
        t = t * gsc + mhh2,
        1 == c.rad ? -150 <= A && -150 <= t && A <= mwwp150 && t <= mhhp150 && (A -= c.gfw2,
        t -= c.gfh2,
        b.globalAlpha = G * c.fr,
        b.drawImage(c.gfi, A, t),
        b.globalAlpha = G * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr,
        b.drawImage(c.gfi, A, t)) : -150 <= A && -150 <= t && A <= mwwp150 && t <= mhhp150 && (A -= c.gfw2 * c.rad,
        t -= c.gfh2 * c.rad,
        b.globalAlpha = G * c.fr,
        b.drawImage(c.gfi, 0, 0, c.gfw, c.gfh, A, t, c.gfw * c.rad, c.gfh * c.rad),
        b.globalAlpha = G * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr,
        b.drawImage(c.gfi, 0, 0, c.gfw, c.gfh, A, t, c.gfw * c.rad, c.gfh * c.rad)),
        fs = 1 + .32 * c.rad,
        A = e * 
        fs,
        t = y * fs,
        G = .085 * (1 - h / (16500 + h)),
        1 != c.rad && (G *= Math.pow(c.rad, .25)),
        1 != gla && (G *= gla),
        A = A * gsc + mww2,
        t = t * gsc + mhh2,
        1 == c.rad ? -150 <= A && -150 <= t && A <= mwwp150 && t <= mhhp150 && (A -= c.g2fw2,
        t -= c.g2fh2,
        b.globalAlpha = G * c.fr,
        b.drawImage(c.g2fi, A, t),
        b.globalAlpha = G * (.5 + .5 * Math.cos(c.gfr / 13)) * c.fr,
        b.drawImage(c.g2fi, A, t)) : -150 <= A && -150 <= t && A <= mwwp150 && t <= mhhp150 && (A -= c.g2fw2 * c.rad,
        t -= c.g2fh2 * c.rad,
        b.globalAlpha = G * c.fr,
        b.drawImage(c.g2fi, 0, 0, c.g2fw, c.g2fh, A, t, c.g2fw * c.rad, c.g2fh * c.rad),
        b.globalAlpha = G * (.5 + .5 * Math.cos(c.gfr / 
        13)) * c.fr,
        b.drawImage(c.g2fi, 0, 0, c.g2fw, c.g2fh, A, t, c.g2fw * c.rad, c.g2fh * c.rad)));
      b.restore()
    }
    b.save();
    b.globalCompositeOperation = "lighter";
    for (q = preys.length - 1; 0 <= q; q--)
      h = preys[q],
      e = h.xx + h.fx,
      y = h.yy + h.fy,
      h.eaten && (c = h.eaten_by,
      f = Math.pow(h.eaten_fr, 2),
      e += (c.xx + c.fx + Math.cos(c.ang + c.fa) * (43 - 24 * f) * (1 - f) - e) * f,
      y += (c.yy + c.fy + Math.sin(c.ang + c.fa) * (43 - 24 * f) * (1 - f) - y) * f),
      e -= view_xx,
      y -= view_yy,
      c = e * e + y * y,
      fs = 1 + .08 * h.rad,
      px = e * fs,
      py = y * fs,
      G = .4 * (1 - c / (176E3 + c)),
      1 != h.rad && (G *= Math.pow(h.rad, .25)),
      px = px * gsc + mww2,
      py = 
      py * gsc + mhh2,
      1 == h.rad ? -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2,
      py -= h.gfh2,
      b.globalAlpha = G * h.fr,
      b.drawImage(h.gfi, px, py),
      b.globalAlpha = G * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
      b.drawImage(h.gfi, px, py)) : -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2 * h.rad,
      py -= h.gfh2 * h.rad,
      b.globalAlpha = G * h.fr,
      b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * h.rad, h.gfh * h.rad),
      b.globalAlpha = G * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
      b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * h.rad, h.gfh * h.rad)),
      fs = 1 + .32 * h.rad,
      px = e * fs,
      py = y * fs,
      G = .35 * (1 - c / (46500 + c)),
      1 != h.rad && (G *= Math.pow(h.rad, .25)),
      c = 2 * h.rad,
      px = px * gsc + mww2,
      py = py * gsc + mhh2,
      -150 <= px && -150 <= py && px <= mwwp150 && py <= mhhp150 && (px -= h.gfw2 * c,
      py -= h.gfh2 * c,
      b.globalAlpha = G * h.fr,
      b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * c, h.gfh * c),
      b.globalAlpha = G * (.5 + .5 * Math.cos(h.gfr / 13)) * h.fr,
      b.drawImage(h.gfi, 0, 0, h.gfw, h.gfh, px, py, h.gfw * c, h.gfh * c));
    b.restore();
    if (4E3 > Math.abs(grd - view_dist)) {
      b.save();
      b.lineWidth = 23 * gsc;
      b.strokeStyle = "#800000";
      b.fillStyle = "#300000";
      b.beginPath();
      xx = grd + Math.cos(view_ang - 2E3 / grd) * grd * .98;
      yy = grd + Math.sin(view_ang - 2E3 / grd) * grd * .98;
      b.moveTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
      for (x = -2E3; 2E3 >= x; x += 100)
        xx = grd + Math.cos(view_ang + x / grd) * grd * .98,
        yy = grd + Math.sin(view_ang + x / grd) * grd * .98,
        b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
      xx = grd + Math.cos(view_ang + 2E3 / grd) * (grd + 4E3);
      yy = grd + Math.sin(view_ang + 2E3 / grd) * (grd + 4E3);
      b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
      xx = grd + Math.cos(view_ang - 2E3 / grd) * (grd + 4E3);
      yy = grd + Math.sin(view_ang - 
      2E3 / grd) * (grd + 4E3);
      b.lineTo(mww2 + (xx - view_xx) * gsc, mhh2 + (yy - view_yy) * gsc);
      b.closePath();
      b.stroke();
      b.fill();
      b.restore()
    }
    wumsts && 0 < rank && 0 < snake_count && playing && (wumsts = !1,
    c = "Your length",
    q = "of",
    G = "Your rank",
    "DE" == country ? (c = "Deine L\u00e4nge",
    q = "von",
    G = "Dein rang") : "FR" == country ? (c = "Votre longueur",
    q = "de",
    G = "Ton rang") : "BR" == country && (c = "Seu comprimento",
    q = "do",
    G = "Seu classifica\u00e7\u00e3o"),
    c = "" + ('<span style="font-size: 14px;"><span style="opacity: .4;">' + c + ': </span><span style="opacity: .8; font-weight: bold;">' + 
    Math.floor(150 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 50) / 10 + "</span></span>"),
    c += '<BR><span style="opacity: .3;">' + G + ': </span><span style="opacity: .35;">' + rank + '</span><span style="opacity: .3;"> ' + q + ' </span><span style="opacity: .35;">' + snake_count + "</span>",
    lbf.innerHTML = c);
    b.restore()
  }
}
, ww = window.innerWidth, hh = window.innerHeight, lww = 0, lhh = 0, csc, grd = 16384;
function resize() {
  ww = Math.ceil(window.innerWidth);
  hh = Math.ceil(window.innerHeight);
  if (ww != lww || hh != lhh) {
    lww = ww;
    lhh = hh;
    var b = 0;
    if (mbi) {
      var q = ww / 1245;
      mbi.width = 1245 * q;
      b = Math.ceil(260 * q);
      mbi.height = b;
      hh -= b
    }
    ww -= wsu;
    loch.style.bottom = 16 + b + "px";
    lbf.style.bottom = 4 + b + "px";
    lbh.style.right = 4 + wsu + "px";
    lbs.style.right = 4 + wsu + "px";
    lbn.style.right = 64 + wsu + "px";
    lbp.style.right = 230 + wsu + "px";
    loch.style.right = 16 + wsu + "px";
    plq.style.right = 10 + wsu + "px";
    clq.style.left = Math.floor(ww / 2 - 130) + "px";
    login.style.width = ww + "px";
    fbh.style.right = 
    30 + wsu + "px";
    twth.style.right = 130 + wsu + "px";
    cstx.style.right = 240 + wsu + "px";
    grqh.style.right = 20 + wsu + "px";
    pskh.style.left = Math.round(.25 * ww - 44) + "px";
    nskh.style.left = Math.round(.75 * ww - 44) + "px";
    skodiv.style.left = Math.round(ww / 2 - skodiv.offsetWidth / 2) + "px";
    skodiv.style.top = Math.round(hh / 2 + 120) + "px";
    pskh.style.top = Math.round(hh / 2 - 44) + "px";
    nskh.style.top = Math.round(hh / 2 - 44) + "px";
    ldmc.style.left = ww / 2 - 64 + "px";
    ldmc.style.top = hh / 2 - 64 + "px";
    var q = Math.sqrt(ww * ww + hh * hh)
      , b = Math.ceil(1400 * ww / q)
      , c = Math.ceil(1400 * hh / q);
    1100 < b && (c = Math.ceil(1100 * c / b),
    b = 1100);
    1100 < c && (b = Math.ceil(1100 * b / c),
    c = 1100);
    lgbsc = 560 > hh ? Math.max(50, hh) / 560 : 1;
    q = Math.round(lgbsc * lgcsc * 1E5) / 1E5;
    1 == q ? (trf(login, ""),
    login.style.top = "0px") : (login.style.top = -(Math.round(hh * (1 - lgbsc) * 1E5) / 1E5) + "px",
    trf(login, "scale(" + q + "," + q + ")"));
    if (mww != b || mhh != c)
      mww = b,
      mhh = c,
      mc.width = mww,
      mc.height = mhh,
      mwwp50 = mww + 50,
      mhhp50 = mhh + 50,
      mwwp150 = mww + 150,
      mhhp150 = mhh + 150,
      mww2 = mww / 2,
      mhh2 = mhh / 2,
      rdgbg();
    csc = Math.min(ww / mww, hh / mhh);
    trf(mc, "scale(" + csc + "," + csc + ")");
    mc.style.left = 
    Math.floor(ww / 2 - mww / 2) + "px";
    mc.style.top = Math.floor(hh / 2 - mhh / 2) + "px"
  }
  nbg.style.width = ww + "px";
  nbg.style.height = hh + "px";
  redraw()
}
window.onresize = function() {
  resize()
}
;
for (i = ois.length - 1; 0 <= i; i--)
  ois[i].ii.src = ois[i].src;
0 == wic && startAnimation();
window.onmousemove = function(b) {
  (b = b || window.event) && "undefined" != typeof b.clientX && (xm = b.clientX - ww / 2,
  ym = b.clientY - hh / 2)
}
;
function setAcceleration(b) {
  if (null  != snake) {
    snake.md = 1 == b;
    if (5 <= protocol_version) {
      var q = new Uint8Array(1);
      q[0] = 1 == b ? 253 : 254
    } else
      q = new Uint8Array(2),
      q[0] = 109,
      q[1] = b;
    ws.send(q)
  }
}
window.oncontextmenu = function(b) {
  b.preventDefault();
  b.stopPropagation();
  return !1
}
;
window.ontouchmove = function(b) {
  dmutm = Date.now() + 1500;
  null  != snake && (b = b || window.event) && (b = b.touches[0],
  "undefined" != typeof b.clientX ? (xm = b.clientX - ww / 2,
  ym = b.clientY - hh / 2) : (xm = b.pageX - ww / 2,
  ym = b.pageY - hh / 2))
}
;
var dmutm = 0
  , ltchx = -1
  , ltchy = -1
  , ltchmtm = -1;
window.ontouchstart = function(b) {
  dmutm = Date.now() + 1500;
  if (null  != snake) {
    if (b = b || window.event) {
      var q, c;
      c = b.touches[0];
      "undefined" != typeof c.clientX ? (q = c.clientX - ww / 2,
      c = c.clientY - hh / 2) : (q = c.pageX - ww / 2,
      c = c.pageY - hh / 2);
      var h = Date.now();
      24 > Math.abs(q - ltchx) && 24 > Math.abs(c - ltchy) && 400 > h - ltchmtm && setAcceleration(1);
      ltchx = q;
      ltchy = c;
      ltchmtm = h;
      xm = q;
      ym = c
    }
    b.preventDefault()
  }
}
;
window.onmousedown = function(b) {
  if (0 == dmutm || Date.now() > dmutm)
    dmutm = 0,
    null  != snake && (window.onmousemove(b),
    setAcceleration(1),
    b.preventDefault())
}
;
window.ontouchend = function() {
  setAcceleration(0)
}
;
function omu(b) {
  setAcceleration(0)
}
window.addEventListener("mouseup", omu);
var mscps = 0
  , fmlts = []
  , fpsls = []
  , etm = 0
  , ws = null 
  , tcsecs = 0
  , trdps = 0
  , rdps = 0
  , rfps = 0
  , rnps = 0
  , rsps = 0
  , reps = 0
  , rdpspc = []
  , anguc = 0
  , angnuc = 0
  , wangnuc = 0
  , lrd_mtm = Date.now()
  , locu_mtm = 0;
if (testing)
  for (i = 0; 256 > i; i++)
    rdpspc[i] = -1;
var pfs = [], pft = 0, pf1 = 0, pf2 = 0, rpf1, rpf2, pf_nap = 0, pf_ep = 0, rpft = 0, pf;
for (i = 0; 100 > i; i++)
  pfs.push(0);
var pf_add = 0
  , pf_new_add = 0
  , pf_remove = 0
  , tpfa = new Float32Array(4E4);
for (i = 0; i < tpfa.length; i++)
  tpfa[i] = 32 * Math.random();
var pfd;
testing && (pfd = document.createElement("div"),
pfd.style.position = "fixed",
pfd.style.left = "4px",
pfd.style.bottom = "69px",
pfd.style.width = "170px",
pfd.style.height = "364px",
pfd.style.background = "rgba(0, 0, 0, .8)",
pfd.style.color = "#80FF80",
pfd.style.fontFamily = "Verdana",
pfd.style.zIndex = 999999,
pfd.style.fontSize = "11px",
pfd.style.padding = "10px",
pfd.style.borderRadius = "30px",
pfd.textContent = "ayy lmao",
document.body.appendChild(pfd));
function resetGame() {
  ws && (ws.close(),
  ws = null );
  snake = null ;
  want_close_socket = !1;
  snakes = [];
  foods = [];
  foods_c = 0;
  preys = [];
  sectors = [];
  os = {};
  rank = 0;
  best_rank = 999999999;
  biggest_snake_count = snake_count = 0;
  lagging = wfpr = playing = connected = !1;
  for (j = vfc - 1; 0 <= j; j--)
    fvxs[j] = 0,
    fvys[j] = 0;
  fvy = fvx = fvtg = 0;
  lag_mult = 1;
  cptm = 0;
  gsc = sgsc
}
var protocol_version = 2, connecting = !1, start_connect_mtm, play_btn_click_mtm = -1, waiting_for_sos = !1, sos_ready_after_mtm = -1;
function connect() {
  if (0 == sos.length)
    waiting_for_sos || (waiting_for_sos = !0,
    sos_ready_after_mtm = -1);
  else {
    waiting_for_sos = !1;
    sos_ready_after_mtm = -1;
    resetGame();
    connecting = !0;
    start_connect_mtm = Date.now();
    if (!forcing) {
      for (var b = 0; b < sos.length; b++)
        sos[b].ptm = 9999999;
      for (b = 0; b < sis.length; b++) {
        var q = sis[b];
        if (0 < q.ptms.length) {
          for (var c = 0, h = q.ptms.length - 1; 0 <= h; h--)
            c += q.ptms[h];
          c /= q.ptms.length;
          for (h = sos.length - 1; 0 <= h; h--)
            sos[h].ip == q.ip && (sos[h].ptm = c)
        }
      }
      if ("undefined" != typeof rmsos)
        for (b = 0; b < rmsos.length; b++)
          for (q = 
          "." + rmsos[b].a[0] + "." + rmsos[b].a[1] + "." + rmsos[b].a[2],
          c = rmsos[b].a[3],
          h = sos.length - 1; 0 <= h; h--)
            0 <= sos[h].ip.indexOf(q) && sos[h].po == c && sos.splice(h, 1);
      sos.sort(function(b, f) {
        return parseFloat(b.po) - parseFloat(f.po)
      });
      bso = sos[Math.floor(Math.random() * sos.length)];
      for (b = sos.length - 1; 0 <= b; b--)
        sos[b].tainted || sos[b].ptm <= bso.ptm && 30 < sos[b].ac && (bso = sos[b])
    }
    ws = new WebSocket("ws://" + bso.ip + ":" + bso.po + "/slither");
    ws.binaryType = "arraybuffer";
    window.ws = ws;
    ws.onmessage = function(b) {
      if (ws == this && (b = new Uint8Array(b.data),
      rdps += b.length,
      2 <= b.length)) {
        lptm = cptm;
        cptm = Date.now();
        var f = b[0] << 8 | b[1]
          , e = cptm - lptm;
        0 == lptm && (e = 0);
        etm += e - f;
        testing && (rdpspc[b[2]] += b.length);
        var c = String.fromCharCode(b[2])
          , f = 3
          , h = b.length
          , e = b.length - 2
          , q = b.length - 3;
        if ("a" == c)
          connecting = !1,
          playing = connected = !0,
          play_btn_click_mtm = -1,
          grd = b[f] << 16 | b[f + 1] << 8 | b[f + 2],
          f += 3,
          e = b[f] << 8 | b[f + 1],
          f += 2,
          sector_size = b[f] << 8 | b[f + 1],
          f += 2,
          sector_count_along_edge = b[f] << 8 | b[f + 1],
          f += 2,
          spangdv = b[f] / 10,
          f++,
          nsp1 = (b[f] << 8 | b[f + 1]) / 100,
          f += 2,
          nsp2 = (b[f] << 8 | b[f + 1]) / 100,
          f += 2,
          nsp3 = 
          (b[f] << 8 | b[f + 1]) / 100,
          f += 2,
          mamu = (b[f] << 8 | b[f + 1]) / 1E3,
          f += 2,
          mamu2 = (b[f] << 8 | b[f + 1]) / 1E3,
          f += 2,
          cst = (b[f] << 8 | b[f + 1]) / 1E3,
          f += 2,
          f < h && (protocol_version = b[f]),
          console.log("game radius = " + grd),
          setMscps(e),
          lbh.style.display = "inline",
          lbs.style.display = "inline",
          lbn.style.display = "inline",
          lbp.style.display = "inline",
          lbf.style.display = "inline",
          vcm.style.display = "inline",
          loch.style.display = "inline",
          startShowGame();
        else if ("e" == c || "E" == c || "3" == c || "4" == c || "5" == c) {
          var w = b[f] << 8 | b[f + 1]
            , f = f + 2
            , D = h = -1
            , x = -1
            , A = -1;
          if (6 <= protocol_version)
            6 == 
            e ? (h = "e" == c ? 1 : 2,
            D = 2 * b[f] * Math.PI / 256,
            f++,
            x = 2 * b[f] * Math.PI / 256,
            f++,
            A = b[f] / 18) : 5 == e ? "e" == c ? (D = 2 * b[f] * Math.PI / 256,
            f++,
            A = b[f] / 18) : "E" == c ? (h = 1,
            x = 2 * b[f] * Math.PI / 256,
            f++,
            A = b[f] / 18) : "4" == c ? (h = 2,
            x = 2 * b[f] * Math.PI / 256,
            f++,
            A = b[f] / 18) : "3" == c ? (h = 1,
            D = 2 * b[f] * Math.PI / 256,
            f++,
            x = 2 * b[f] * Math.PI / 256) : "5" == c && (h = 2,
            D = 2 * b[f] * Math.PI / 256,
            f++,
            x = 2 * b[f] * Math.PI / 256) : 4 == e && ("e" == c ? D = 2 * b[f] * Math.PI / 256 : "E" == c ? (h = 1,
            x = 2 * b[f] * Math.PI / 256) : "4" == c ? (h = 2,
            x = 2 * b[f] * Math.PI / 256) : "3" == c && (A = b[f] / 18));
          else if (3 <= protocol_version) {
            "3" != c && 
            (8 == e || 7 == e || 6 == e && "3" != c || 5 == e && "3" != c) && (h = "e" == c ? 1 : 2);
            if (8 == e || 7 == e || 5 == e && "3" == c || 6 == e && "3" == c)
              D = 2 * (b[f] << 8 | b[f + 1]) * Math.PI / 65535,
              f += 2;
            if (8 == e || 7 == e || 5 == e && "3" != c || 6 == e && "3" != c)
              x = 2 * (b[f] << 8 | b[f + 1]) * Math.PI / 65535,
              f += 2;
            if (8 == e || 6 == e || 4 == e)
              A = b[f] / 18
          } else {
            if (11 == q || 8 == q || 9 == q || 6 == q)
              h = b[f] - 48,
              f++;
            if (11 == q || 7 == q || 9 == q || 5 == q)
              D = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215,
              f += 3;
            if (11 == q || 8 == q || 9 == q || 6 == q)
              x = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215,
              f += 3;
            if (11 == q || 7 == q || 8 == q || 4 == q)
              A = (b[f] << 8 | b[f + 
              1]) / 1E3
          }
          var t = os["s" + w];
          if (t) {
            -1 != h && (t.dir = h);
            anguc++;
            if (-1 != D) {
              t.ang == D && angnuc++;
              b = (D - t.ang) % pi2;
              0 > b && (b += pi2);
              b > Math.PI && (b -= pi2);
              w = t.fapos;
              for (q = 0; q < afc; q++)
                t.fas[w] -= b * afas[q],
                w++,
                w >= afc && (w = 0);
              t.fatg = afc;
              t.ang = D
            }
            -1 != x && (t.wang == x && wangnuc++,
            t.wang = x,
            t != snake && (t.eang = x));
            -1 != A && (t.sp = A,
            t.spang = t.sp / spangdv,
            1 < t.spang && (t.spang = 1))
          }
        } else if ("h" == c) {
          var w = b[f] << 8 | b[f + 1]
            , f = f + 2
            , H = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 16777215;
          if (t = os["s" + w])
            t.fam = H,
            snl(t)
        } else if ("r" == c) {
          if (w = b[f] << 8 | b[f + 1],
          f += 2,
          t = os["s" + 
          w]) {
            4 <= q && (t.fam = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 16777215);
            for (q = 0; q < t.pts.length; q++)
              if (!t.pts[q].dying) {
                t.pts[q].dying = !0;
                t.sct--;
                t.sc = Math.min(6, 1 + (t.sct - 2) / 106);
                t.scang = .13 + .87 * Math.pow((7 - t.sc) / 6, 2);
                t.ssp = nsp1 + nsp2 * t.sc;
                t.fsp = t.ssp + .1;
                t.wsep = 6 * t.sc;
                b = nsep / gsc;
                t.wsep < b && (t.wsep = b);
                break
              }
            snl(t)
          }
        } else if ("g" == c || "n" == c || "G" == c || "N" == c) {
          if (playing && (H = "n" == c || "N" == c,
          w = b[f] << 8 | b[f + 1],
          f += 2,
          t = os["s" + w])) {
            if (H)
              t.sct++;
            else
              for (q = 0; q < t.pts.length; q++)
                if (!t.pts[q].dying) {
                  t.pts[q].dying = !0;
                  break
                }
            var z = t.pts[t.pts.length - 
            1]
              , q = z
              , h = !1;
            3 <= protocol_version ? "g" == c || "n" == c ? (e = b[f] << 8 | b[f + 1],
            f += 2,
            C = b[f] << 8 | b[f + 1],
            f += 2) : (e = q.xx + b[f] - 128,
            f++,
            C = q.yy + b[f] - 128,
            f++) : (e = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 5,
            f += 3,
            C = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 5,
            f += 3);
            H && (t.fam = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 16777215);
            (z = points_dp.get()) || (z = {
              exs: [],
              eys: [],
              efs: [],
              ems: []
            });
            z.eiu = 0;
            z.xx = e;
            z.yy = C;
            z.fx = 0;
            z.fy = 0;
            z.da = 0;
            z.ebx = z.xx - q.xx;
            z.eby = z.yy - q.yy;
            t.pts.push(z);
            h = !0;
            t.iiv && (b = t.xx + t.fx - z.xx,
            f = t.yy + t.fy - z.yy,
            z.fx += b,
            z.fy += f,
            z.exs[z.eiu] = b,
            z.eys[z.eiu] = f,
            z.efs[z.eiu] = 
            0,
            z.ems[z.eiu] = 1,
            z.eiu++);
            w = t.pts.length - 3;
            if (1 <= w)
              for (D = t.pts[w],
              c = n = 0,
              q = w - 1; 0 <= q; q--)
                w = t.pts[q],
                n++,
                b = w.xx,
                f = w.yy,
                4 >= n && (c = cst * n / 4),
                w.xx += (D.xx - w.xx) * c,
                w.yy += (D.yy - w.yy) * c,
                t.iiv && (b -= w.xx,
                f -= w.yy,
                w.fx += b,
                w.fy += f,
                w.exs[w.eiu] = b,
                w.eys[w.eiu] = f,
                w.efs[w.eiu] = 0,
                w.ems[w.eiu] = 2,
                w.eiu++),
                D = w;
            t.sc = Math.min(6, 1 + (t.sct - 2) / 106);
            t.scang = .13 + .87 * Math.pow((7 - t.sc) / 6, 2);
            t.ssp = nsp1 + nsp2 * t.sc;
            t.fsp = t.ssp + .1;
            t.wsep = 6 * t.sc;
            b = nsep / gsc;
            t.wsep < b && (t.wsep = b);
            H && snl(t);
            t.lnp = z;
            t == snake && (ovxx = snake.xx + snake.fx,
            ovyy = snake.yy + 
            snake.fy);
            z = etm / 8 * t.sp / 4;
            z *= lag_mult;
            q = t.chl - 1;
            t.chl = z / t.msl;
            c = t.xx;
            w = t.yy;
            t.xx = e + Math.cos(t.ang) * z;
            t.yy = C + Math.sin(t.ang) * z;
            b = t.xx - c;
            f = t.yy - w;
            e = t.chl - q;
            w = t.fpos;
            for (q = 0; q < rfc; q++)
              t.fxs[w] -= b * rfas[q],
              t.fys[w] -= f * rfas[q],
              t.fchls[w] -= e * rfas[q],
              w++,
              w >= rfc && (w = 0);
            t.fx = t.fxs[t.fpos];
            t.fy = t.fys[t.fpos];
            t.fchl = t.fchls[t.fpos];
            t.ftg = rfc;
            h && (t.ehl = 0);
            if (t == snake) {
              view_xx = snake.xx + snake.fx;
              view_yy = snake.yy + snake.fy;
              b = view_xx - ovxx;
              f = view_yy - ovyy;
              w = fvpos;
              for (q = 0; q < vfc; q++)
                fvxs[w] -= b * vfas[q],
                fvys[w] -= f * vfas[q],
                w++,
                w >= vfc && (w = 0);
              fvtg = vfc
            }
          }
        } else if ("l" == c) {
          if (playing) {
            wumsts = !0;
            D = z = C = "";
            A = x = 0;
            -1 == lb_fr && -1 == dead_mtm && (lb_fr = 0);
            var L = b[f];
            f++;
            rank = b[f] << 8 | b[f + 1];
            rank < best_rank && (best_rank = rank);
            f += 2;
            snake_count = b[f] << 8 | b[f + 1];
            snake_count > biggest_snake_count && (biggest_snake_count = snake_count);
            for (f += 2; f < h; ) {
              var I = b[f] << 8 | b[f + 1]
                , f = f + 2
                , H = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 16777215
                , f = f + 3
                , t = b[f] % 9;
              f++;
              e = b[f];
              f++;
              c = "";
              for (q = 0; q < e; q++)
                w = b[f],
                c = 38 == w ? c + "&amp;" : 60 == w ? c + "&lt;" : 62 == w ? c + "&gt;" : 32 == w ? c + "&nbsp;" : c + String.fromCharCode(b[f]),
                f++;
              A++;
              x++;
              score = Math.floor(150 * (fpsls[I] + H / fmlts[I] - 1) - 50) / 10;
              w = A == L ? 1 : .7 * (.3 + .7 * (1 - x / 10));
              C += '<span style="opacity:' + w + "; color:" + per_color_imgs[t].cs + ';">' + score + "</span><BR>";
              z += '<span style="opacity:' + w + "; color:" + per_color_imgs[t].cs + ";" + (A == L ? "font-weight:bold;" : "") + '">' + c + "</span><BR>";
              D += '<span style="opacity:' + w + "; color:" + per_color_imgs[t].cs + ';">#' + x + "</span><BR>"
            }
            lbs.innerHTML = C;
            lbn.innerHTML = z;
            lbp.innerHTML = D
          }
        } else if ("v" == c)
          2 == b[f] ? (want_close_socket = !0,
          want_victory_message = !1,
          want_hide_victory = 
          1,
          hvfr = 0) : (dead_mtm = Date.now(),
          play_btn.setEnabled(!0),
          e = Math.floor(150 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 50) / 10,
          twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("I got a length of " + e + " in http://slither.io! Can you beat that? #slitherio"),
          C = "Your final length was",
          "DE" == country ? C = "Deine endg\u00fcltige L\u00e4nge war" : "FR" == country ? C = "Votre longueur finale \u00e9tait de" : "BR" == country && (C = "Seu comprimento final foi de"),
          h = "",
          1E3 < e && (h = "!"),
          lastscore.innerHTML = 
          '<span style="opacity: .45;">' + C + " </span><b>" + e + "</b>" + h,
          e = "Play Again",
          "FR" == country ? e = "Jouer" : "BR" == country && (e = "Joga"),
          play_btn.setText(String.fromCharCode(160) + e + String.fromCharCode(160)),
          1 == b[f] ? (nick_holder.style.display = "none",
          playh.style.display = "none",
          smh.style.display = "none",
          victory_holder.style.display = "inline",
          saveh.style.display = "block",
          want_victory_focus = want_victory_message = !0,
          victory.disabled = !1,
          save_btn.setEnabled(!0)) : want_close_socket = !0);
        else if ("w" == c)
          if (h = b[f],
          f++,
          e = b[f] << 8 | 
          b[f + 1],
          f += 2,
          C = b[f] << 8 | b[f + 1],
          1 == h)
            t = {},
            t.xx = e,
            t.yy = C,
            sectors.push(t);
          else {
            for (z = cm1 = foods_c - 1; 0 <= z; z--)
              q = foods[z],
              q.sx == e && q.sy == C && (z == cm1 ? foods[z] = null  : (foods[z] = foods[cm1],
              foods[cm1] = null ),
              foods_c--,
              cm1--);
            for (z = sectors.length - 1; 0 <= z; z--)
              t = sectors[z],
              t.xx == e && t.yy == C && sectors.splice(z, 1)
          }
        else if ("m" == c) {
          I = b[f] << 16 | b[f + 1] << 8 | b[f + 2];
          f += 3;
          H = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 16777215;
          f += 3;
          C = Math.floor(150 * (fpsls[I] + H / fmlts[I] - 1) - 50) / 10;
          e = b[f];
          f++;
          q = "";
          for (z = 0; z < e; z++)
            q += String.fromCharCode(b[f]),
            f++;
          for (e = 
          ""; f < h; )
            e += String.fromCharCode(b[f]),
            f++;
          q = q.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
          e = e.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
          0 < C && (b = "",
          0 < e.length && (b += "<span style='font-size:17px;'><b><i><span style='opacity: .5;'>&quot;</span>" + e + "<span style='opacity: .5;'>&quot;</span></i></b></span><BR><div style='height: 5px;'></div>"),
          0 < q.length ? (b = 0 < e.length ? b + ("<i><span style='opacity: .5;'>- </span><span style='opacity: .75;'><b>" + q + 
          "</b></span><span style='opacity: .5;'>, today's longest</span></i>") : "<i><span style='opacity: .5;'>Today's longest was </span><span style='opacity: .75;'><b>" + q + "</b></span></i>",
          b += "<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + C + "</b></span></i>") : b = 0 < e.length ? b + "<i><span style='opacity: .5;'>- </span><span style='opacity: .5;'>today's longest</span></i>" + ("<br><i><span style='opacity: .5;'>with a length of </span><span style='opacity: .65;'><b>" + C + 
          "</b></span></i>") : b + ("<i><span style='opacity: .5;'>Today's longest: </span><span style='opacity: .75;'><b>" + C + "</b></span></i>"),
          vcm.innerHTML = b)
        } else if ("p" == c)
          wfpr = !1,
          lagging && (etm *= lag_mult,
          lagging = !1);
        else if ("u" == c) {
          q = asmc.getContext("2d");
          q.clearRect(0, 0, 80, 80);
          q.fillStyle = "#FFFFFF";
          for (var C = e = 0; f < h && !(80 <= C); )
            if (w = b[f++],
            128 <= w)
              for (w -= 128,
              z = 0; z < w && !(e++,
              80 <= e && (e = 0,
              C++,
              80 <= C)); z++)
                ;
            else
              for (z = 0; 7 > z && !(0 < (w & u_m[z]) && q.fillRect(e, C, 1, 1),
              e++,
              80 <= e && (e = 0,
              C++,
              80 <= C)); z++)
                ;
        } else if ("s" == c) {
          if (playing)
            if (w = 
            b[f] << 8 | b[f + 1],
            f += 2,
            6 < q) {
              D = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215;
              f += 3;
              f++;
              x = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215;
              f += 3;
              A = (b[f] << 8 | b[f + 1]) / 1E3;
              f += 2;
              H = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 16777215;
              f += 3;
              t = b[f];
              f++;
              var L = []
                , I = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 5
                , f = f + 3
                , K = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 5
                , f = f + 3
                , e = b[f];
              f++;
              c = "";
              for (q = 0; q < e; q++)
                c += String.fromCharCode(b[f]),
                f++;
              for (var M = q = C = e = 0, O = !1; f < h; )
                q = e,
                M = C,
                O ? (e += (b[f] - 127) / 2,
                f++,
                C += (b[f] - 127) / 2,
                f++) : (e = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 5,
                f += 3,
                C = (b[f] << 16 | b[f + 
                1] << 8 | b[f + 2]) / 5,
                f += 3,
                q = e,
                M = C,
                O = !0),
                (z = points_dp.get()) || (z = {
                  exs: [],
                  eys: [],
                  efs: [],
                  ems: []
                }),
                z.eiu = 0,
                z.xx = e,
                z.yy = C,
                z.fx = 0,
                z.fy = 0,
                z.da = 0,
                z.ebx = e - q,
                z.eby = C - M,
                L.push(z);
              t = newSnake(w, I, K, t, D, L);
              null  == snake && (view_xx = e,
              view_yy = C,
              snake = t);
              t.nk = c;
              t.eang = t.wang = x;
              t.sp = A;
              t.spang = t.sp / spangdv;
              1 < t.spang && (t.spang = 1);
              t.fam = H;
              t.sc = Math.min(6, 1 + (t.sct - 2) / 106);
              t.scang = .13 + .87 * Math.pow((7 - t.sc) / 6, 2);
              t.ssp = nsp1 + nsp2 * t.sc;
              t.fsp = t.ssp + .1;
              t.wsep = 6 * t.sc;
              b = nsep / gsc;
              t.wsep < b && (t.wsep = b);
              t.sep = t.wsep;
              snl(t)
            } else
              for (b = 1 == b[f],
              z = snakes.length - 1; 0 <= z; z--)
                if (snakes[z].id == w) {
                  snakes[z].id = -1234;
                  b ? (snakes[z].dead = !0,
                  snakes[z].dead_amt = 0,
                  snakes[z].edir = 0) : snakes.splice(z, 1);
                  delete os["s" + w];
                  break
                }
        } else if ("F" == c)
          if (4 <= protocol_version) {
            for (c = !1; f < h; )
              t = b[f],
              f++,
              e = b[f] << 8 | b[f + 1],
              f += 2,
              C = b[f] << 8 | b[f + 1],
              f += 2,
              q = b[f] / 5,
              f++,
              w = C * grd * 3 + e,
              q = newFood(w, e, C, q, !0, t),
              c || (c = !0,
              z = Math.floor(e / sector_size),
              H = Math.floor(C / sector_size)),
              q.sx = z,
              q.sy = H;
            t = {};
            t.xx = z;
            t.yy = H;
            sectors.push(t)
          } else
            for (z = b[f] << 8 | b[f + 1],
            f += 2,
            H = b[f] << 8 | b[f + 1],
            f += 2,
            t = {},
            t.xx = 
            z,
            t.yy = H,
            sectors.push(t); f < h; )
              w = b[f] << 16 | b[f + 1] << 8 | b[f + 2],
              f += 3,
              t = b[f],
              f++,
              e = sector_size * (z + b[f] / 255),
              f++,
              C = sector_size * (H + b[f] / 255),
              f++,
              q = b[f] / 5,
              f++,
              q = newFood(w, e, C, q, !0, t),
              q.sx = z,
              q.sy = H;
        else if ("b" == c || "f" == c)
          4 <= protocol_version ? (t = b[f],
          f++,
          4 < q && (e = b[f] << 8 | b[f + 1],
          f += 2,
          C = b[f] << 8 | b[f + 1],
          w = C * grd * 3 + e,
          q = b[f + 2] / 5,
          q = newFood(w, e, C, q, "b" == c, t),
          q.sx = Math.floor(e / sector_size),
          q.sy = Math.floor(C / sector_size))) : (w = b[f] << 16 | b[f + 1] << 8 | b[f + 2],
          f += 3,
          4 < q && (t = b[f],
          f++,
          z = b[f] << 8 | b[f + 1],
          f += 2,
          H = b[f] << 8 | b[f + 1],
          f += 2,
          e = sector_size * 
          (z + b[f] / 255),
          f++,
          C = sector_size * (H + b[f] / 255),
          f++,
          q = b[f] / 5,
          q = newFood(w, e, C, q, "b" == c, t),
          q.sx = z,
          q.sy = H));
        else if ("c" == c) {
          4 <= protocol_version ? (e = b[f] << 8 | b[f + 1],
          f += 2,
          C = b[f] << 8 | b[f + 1],
          f += 2,
          w = C * grd * 3 + e) : (w = b[f] << 16 | b[f + 1] << 8 | b[f + 2],
          f += 3);
          for (z = cm1 = foods_c - 1; 0 <= z; z--)
            if (q = foods[z],
            q.id == w) {
              q.eaten = !0;
              f + 2 <= h ? (b = b[f] << 8 | b[f + 1],
              q.eaten_by = os["s" + b],
              q.eaten_fr = 0) : (z == cm1 ? foods[z] = null  : (foods[z] = foods[cm1],
              foods[cm1] = null ),
              foods_c--,
              cm1--);
              w = -1;
              break
            }
          -1 != w && console.log("wtf")
        } else if ("j" == c) {
          w = b[f] << 8 | b[f + 1];
          f += 
          2;
          e = 1 + 3 * (b[f] << 8 | b[f + 1]);
          f += 2;
          C = 1 + 3 * (b[f] << 8 | b[f + 1]);
          f += 2;
          h = null ;
          for (z = preys.length - 1; 0 <= z; z--)
            if (preys[z].id == w) {
              h = preys[z];
              break
            }
          if (h) {
            z = etm / 8 * h.sp / 4;
            z *= lag_mult;
            c = h.xx;
            w = h.yy;
            15 == q ? (h.dir = b[f] - 48,
            f++,
            h.ang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215,
            f += 3,
            h.wang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215,
            f += 3,
            h.sp = (b[f] << 8 | b[f + 1]) / 1E3) : 11 == q ? (h.ang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215,
            f += 3,
            h.sp = (b[f] << 8 | b[f + 1]) / 1E3) : 12 == q ? (h.dir = b[f] - 48,
            f++,
            h.wang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * 
            Math.PI / 16777215,
            f += 3,
            h.sp = (b[f] << 8 | b[f + 1]) / 1E3) : 13 == q ? (h.dir = b[f] - 48,
            f++,
            h.ang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215,
            f += 3,
            h.wang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215) : 9 == q ? h.ang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215 : 10 == q ? (h.dir = b[f] - 48,
            f++,
            h.wang = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215) : 8 == q && (h.sp = (b[f] << 8 | b[f + 1]) / 1E3);
            h.xx = e + Math.cos(h.ang) * z;
            h.yy = C + Math.sin(h.ang) * z;
            b = h.xx - c;
            f = h.yy - w;
            w = h.fpos;
            for (q = 0; q < rfc; q++)
              h.fxs[w] -= b * rfas[q],
              h.fys[w] -= f * rfas[q],
              w++,
              w >= 
              rfc && (w = 0);
            h.fx = h.fxs[h.fpos];
            h.fy = h.fys[h.fpos];
            h.ftg = rfc
          }
        } else if ("y" == c)
          if (w = b[f] << 8 | b[f + 1],
          f += 2,
          2 == q)
            for (z = preys.length - 1; 0 <= z; z--) {
              if (h = preys[z],
              h.id == w) {
                preys.splice(z, 1);
                break
              }
            }
          else if (4 == q)
            for (b = b[f] << 8 | b[f + 1],
            z = preys.length - 1; 0 <= z; z--) {
              if (h = preys[z],
              h.id == w) {
                h.eaten = !0;
                h.eaten_by = os["s" + b];
                h.eaten_by ? h.eaten_fr = 0 : preys.splice(z, 1);
                break
              }
            }
          else
            t = b[f],
            f++,
            e = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 5,
            f += 3,
            C = (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) / 5,
            f += 3,
            q = b[f] / 5,
            f++,
            h = b[f] - 48,
            f++,
            x = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 
            16777215,
            f += 3,
            D = 2 * (b[f] << 16 | b[f + 1] << 8 | b[f + 2]) * Math.PI / 16777215,
            f += 3,
            A = (b[f] << 8 | b[f + 1]) / 1E3,
            newPrey(w, e, C, q, t, h, x, D, A)
      }
    }
    ;
    ws.onerror = function(b) {}
    ;
    ws.onclose = function(b) {
      ws == this && (playing = connected = !1)
    }
    ;
    ws.onopen = function(b) {
      if (ws == this) {
        b = asciize(nick.value);
        24 < b.length && (b = b.substr(0, 24));
        var c = Math.floor(9 * Math.random());
        try {
          var e = localStorage.snakercv;
          e == "" + Number(e) && (c = Number(e))
        } catch (h) {}
        e = new Uint8Array(3 + b.length);
        e[0] = 115;
        e[1] = 5;
        e[2] = c;
        for (c = 0; c < b.length; c++)
          e[c + 3] = b.charCodeAt(c);
        ws.send(e);
        high_quality = !0;
        gla = 1;
        wdfg = 0;
        qsm = 1;
        0 == want_quality && (high_quality = !1,
        gla = 0,
        qsm = 1.7);
        1 == render_mode && (high_quality = !1,
        gla = 0);
        lpstm = Date.now()
      }
    }
  }
}
function asciize(b) {
  var q, c, h;
  c = b.length;
  var u = !1;
  for (q = 0; q < c; q++)
    if (h = b.charCodeAt(q),
    32 > h || 127 < h) {
      u = !0;
      break
    }
  if (u) {
    u = "";
    for (q = 0; q < c; q++)
      h = b.charCodeAt(q),
      u = 32 > h || 127 < h ? u + " " : u + String.fromCharCode(h);
    return u
  }
  return b
}
var smh = document.getElementById("smh")
  , cstx = document.getElementById("cstx");
cstx.src = "FR" == country ? "/s/customskins-fr.png" : "BR" == country ? "/s/customskins-br.png" : "/s/customskins2.png";
try {
  "1" != localStorage.edttsg && (cstx.style.display = "inline")
} catch (b) {}
var fb = document.getElementById("fb");
fb.href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("http://slither.io");
fb.onclick = function() {
  localStorage.edttsg = "1"
}
;
var fbh = document.getElementById("fbh")
  , twt = document.getElementById("twt");
twt.onclick = function() {
  localStorage.edttsg = "1"
}
;
twt.href = "http://twitter.com/intent/tweet?status=" + encodeURIComponent("Come and play http://slither.io #slitherio");
var twth = document.getElementById("twth")
  , csk = document.getElementById("csk")
  , cskh = document.getElementById("cskh")
  , want_quality = 1
  , grq = document.getElementById("grq")
  , grqh = document.getElementById("grqh")
  , phqi = document.createElement("img")
  , grqi = document.getElementById("grqi");
try {
  "0" == localStorage.qual ? (grqi.src = "/s/lowquality.png",
  want_quality = 0) : (phqi.src = "/s/lowquality.png",
  want_quality = 1)
} catch (b) {}
grq.onclick = function() {
  try {
    "0" == localStorage.qual ? (localStorage.qual = "1",
    grqi.src = "/s/highquality.png",
    want_quality = 1) : (localStorage.qual = "0",
    grqi.src = "/s/lowquality.png",
    want_quality = 0)
  } catch (b) {}
  return !1
}
;
var plq = document.getElementById("plq")
  , clq = document.getElementById("clq");
try {
  "1" == localStorage.edttsg && (cskh.style.display = "inline")
} catch (b) {}
var psk = document.getElementById("psk")
  , pskh = document.getElementById("pskh")
  , nsk = document.getElementById("nsk")
  , nskh = document.getElementById("nskh")
  , choosing_skin = !1;
psk.onclick = function() {
  if (playing && null  != snake) {
    var b = snake.rcv;
    b--;
    0 > b && (b = max_skin_cv);
    setSkin(snake, b)
  }
  return !1
}
;
nsk.onclick = function() {
  if (playing && null  != snake) {
    var b = snake.rcv;
    b++;
    b > max_skin_cv && (b = 0);
    setSkin(snake, b)
  }
  return !1
}
;
csk.onclick = function() {
  if (!playing && -1 == dead_mtm) {
    resetGame();
    choosing_skin = !0;
    pskh.style.opacity = 0;
    nskh.style.opacity = 0;
    skodiv.style.opacity = 0;
    pskh.style.display = "inline";
    nskh.style.display = "inline";
    skodiv.style.display = "inline";
    skodiv.style.left = Math.round(ww / 2 - skodiv.offsetWidth / 2) + "px";
    nick.disabled = !0;
    0 == mscps && setMscps(300);
    gsc = sgsc;
    for (var b = [], q = 22; 1 <= q; q--)
      b.push({
        xx: grd / 2 - 10 * q,
        yy: grd / 2,
        fx: 0,
        fy: 0,
        exs: [],
        eys: [],
        efs: [],
        ems: [],
        eiu: 0,
        fpos: 0,
        da: 0,
        ebx: 10,
        eby: 0
      });
    q = 0;
    try {
      var c = localStorage.snakercv;
      c == "" + Number(c) && (q = Number(c))
    } catch (h) {}
    b = newSnake(1, grd / 2, grd / 2, q, 0, b);
    view_xx = grd / 2 - 105;
    view_yy = grd / 2;
    snake = b;
    b.nk = "";
    b.eang = b.wang = b.ang;
    b.sp = 4.8;
    b.spang = b.sp / spangdv;
    1 < b.spang && (b.spang = 1);
    b.sc = 1;
    b.scang = 1;
    b.ssp = nsp1 + nsp2 * b.sc;
    b.fsp = b.ssp + .1;
    b.wsep = 6 * b.sc;
    c = nsep / gsc;
    b.wsep < c && (b.wsep = c);
    b.sep = b.wsep;
    snl(b);
    b.alive_amt = 1;
    b.rex = 1.66;
    ws = {
      send: function(b) {},
      close: function() {}
    };
    high_quality = playing = connected = !0;
    gla = 1;
    wdfg = 0;
    qsm = 1;
    startShowGame();
    lbh.style.display = "none";
    lbs.style.display = "none";
    lbn.style.display = 
    "none";
    lbp.style.display = "none";
    lbf.style.display = "none";
    vcm.style.display = "none";
    loch.style.display = "none"
  }
  return !1
}
;
nick.oninput = function() {
  var b = this.value
    , q = asciize(b);
  24 < q.length && (q = q.substr(0, 24));
  b != q && (this.value = q)
}
;
victory.oninput = function() {
  var b = this.value
    , q = asciize(b);
  140 < q.length && (q = q.substr(0, 140));
  b != q && (this.value = q)
}
;
nick.focus();
var lmch = document.createElement("div");
lmch.style.width = "450px";
lmch.style.height = "115px";
var lmc2 = document.createElement("canvas")
  , lmc = document.createElement("canvas")
  , lgsc = 1
  , lw = 900
  , lh = 270;
lmc.width = lmc2.width = lw;
lmc.height = lmc2.height = lh;
var lctx = lmc.getContext("2d")
  , lctx2 = lmc2.getContext("2d");
trf(lmc2, "scale(.5, .5)");
trfo(lmc2, "0% 0%");
lmch.appendChild(lmc2);
logo.appendChild(lmch);
var lts = [];
lts.push({
  pts: [107, 107, 80, 83, 53, 98, 31, 115, 55, 131, 98, 147, 101, 162, 101, 190, 66, 188, 49, 187, 34, 173],
  kc: 22,
  ws: 4,
  wr: .025,
  qm: .025,
  sp: .06,
  sz: 11
}, {
  pts: [150, 30, 150, 107, 150, 184],
  kc: 66,
  ws: 4,
  wr: .05,
  qm: .025,
  sp: .06,
  sz: 11
}, {
  pts: [207, 96, 207, 140, 207, 184],
  kc: 46,
  ws: 4,
  wr: .03,
  qm: .035,
  sp: .06,
  sz: 11
}, {
  pts: [207, 47, 207, 48.5, 207, 50],
  kc: 11,
  ws: 2,
  wr: .06,
  qm: .05,
  sp: .06,
  sz: 15,
  r: .5
}, {
  pts: [267, 65, 267, 114.5, 267, 164, 267, 194, 297, 186],
  kc: 66,
  ws: 6,
  wr: -.025,
  qm: -.0125,
  sp: .06,
  sz: 11,
  r: 1.5
}, {
  pts: [243, 94, 268, 94, 293, 94],
  kc: 66,
  ws: 4,
  wr: .015,
  qm: .025,
  sp: .06,
  sz: 9,
  r: 1.2
}, {
  pts: [338, 30, 338, 68.5, 338, 107, 338, 145.5, 338, 184, 338, 164, 338, 144, 338, 104, 378, 104, 418, 104, 418, 144, 418, 164, 418, 184],
  kc: 46,
  ws: 4,
  wr: .005,
  qm: .02,
  sp: .06,
  sz: 11,
  r: 2.1
}, {
  pts: [535, 175, 500, 201, 472, 175, 442, 138, 472, 105, 502, 84, 532, 105, 546, 118, 544, 139, 504, 139, 464, 139],
  kc: 35,
  ws: 6,
  wr: -.013,
  qm: -.025,
  sp: .06,
  sz: 11,
  r: 1.3
}, {
  pts: [591, 96, 591, 140, 591, 184, 591, 155, 591, 126, 613, 82, 652, 109],
  kc: 38,
  ws: 4,
  wr: .01,
  qm: -.035,
  sp: .06,
  sz: 11
}, {
  pts: [663, 177, 663, 178.5, 663, 180],
  kc: 11,
  ws: 2,
  wr: .06,
  qm: .05,
  sp: .06,
  sz: 15
}, {
  pts: [717, 
  96, 717, 140, 717, 184],
  kc: 33,
  ws: 4,
  wr: .06,
  qm: .05,
  sp: .06,
  sz: 11
}, {
  pts: [717, 47, 717, 48.5, 717, 50],
  kc: 11,
  ws: 2,
  wr: .06,
  qm: .05,
  sp: .06,
  sz: 15
}, {
  pts: [814, 186, 860, 188, 858, 136, 854, 96, 814, 96, 770, 96, 770, 136, 770, 186, 814, 186],
  kc: 43,
  ws: 4,
  wr: 0,
  qm: .0274,
  sp: .073,
  sz: 11,
  r: 1.5
});
for (i = 0; i < lts.length; i++)
  lts[i].mwig = 5;
var lga = 0
  , lgss = 0
  , ncka = 0
  , mwig = 4
  , lgfr = 0
  , lgtm = Date.now();
function showLogo(b) {
  var q = Date.now()
    , c = (q - lgtm) / 25;
  lgtm = q;
  var h, u, f, e, y, F, B, w, D, x, A, t, H, z, L;
  lgfr += c;
  if (0 == lts[lts.length - 1].mwig && 1 == lga && 1 == lgss && 1 == ncka)
    clearInterval(showlogo_iv),
    showlogo_iv = -1;
  else {
    if (b || 1 != lga)
      lga += .05 * c,
      1 <= lga && (lga = 1),
      lmc2.style.opacity = lga;
    1 != lgss && (lgss += .00375 * c,
    1 <= lgss && (lgss = 1));
    if (b || 1 != ncka)
      ncka += .006 * c,
      1 <= ncka && (ncka = 1),
      nick_holder.style.opacity = Math.min(1, 6 * ncka),
      is_mobile || (smh.style.opacity = Math.max(0, Math.min(1, 5 * (ncka - .05)))),
      .01 <= ncka && (playh.style.opacity = Math.min(1, 
      5 * (ncka - .01)));
    lctx.clearRect(0, 0, lw, lh);
    for (q = 0; q < lts.length; q++) {
      var I = lts[q]
        , C = I.pts
        , K = I.kc
        , M = I.ws
        , O = I.wr
        , N = I.qm;
      h = I.sp;
      var J = I.sz;
      L = I.r;
      var E = I.mwig;
      b && (I.wch = !0,
      E = 1E-7);
      I.wch && 0 != E && (E *= .982,
      E -= .001 * c,
      1 == render_mode && (E -= .005 * c),
      0 >= E && (E = 0),
      I.mwig = E);
      L || (L = 1);
      lctx.beginPath();
      9 > q ? (f = ctx.createLinearGradient(0, 70 * lgsc, 0, 230 * lgsc),
      f.addColorStop(0, "#80FFA0"),
      f.addColorStop(1, "#008040")) : (f = ctx.createLinearGradient(0, 50 * lgsc, 0, 265 * lgsc),
      f.addColorStop(0, "#9850FF"),
      f.addColorStop(1, "#281060"));
      lctx.fillStyle = 
      f;
      H = !1;
      z = 0;
      f = C[0];
      e = C[1];
      D = f;
      x = e;
      var G = lgfr * h;
      for (A = 2; A < C.length; A += 4) {
        h = f;
        u = e;
        cx2 = C[A];
        cy2 = C[A + 1];
        f = C[A + 2];
        e = C[A + 3];
        for (var Q = 1; Q <= K; Q++) {
          z++;
          var P = Q / K;
          y = h + (cx2 - h) * P;
          F = u + (cy2 - u) * P;
          B = cx2 + (f - cx2) * P;
          w = cy2 + (e - cy2) * P;
          y += (B - y) * P;
          F += (w - F) * P;
          D = Math.atan2(F - x, y - D);
          H ? (D - t > Math.PI ? D -= 2 * Math.PI : D - t < -Math.PI && (D += 2 * Math.PI),
          t += .05 * (D - t),
          t %= 2 * Math.PI) : (H = !0,
          t = D);
          D = y;
          x = F;
          y += Math.cos(Math.PI / 2 + t) * Math.sin(G) * M * E;
          F += Math.sin(Math.PI / 2 + t) * Math.sin(G) * M * E;
          G -= .76 * N * M;
          M += O;
          lctx.beginPath();
          w = 1.15 * J * Math.min(1, lgsc * (.2 + 
          .8 * lga) * (30 * lgss * L - z / 20 - q / 2));
          .5 < w && (lctx.arc(y * lgsc, F * lgsc, w, 0, pi2),
          I.wch = !0);
          lctx.fill()
        }
      }
    }
    lctx2.clearRect(0, 0, lw, lh);
    lctx2.shadowColor = "#000000";
    lctx2.shadowBlur = 16;
    lctx2.shadowOffsetY = 7;
    lctx2.drawImage(lmc, 0, 0)
  }
}
var showlogo_iv = -1;
is_safari || is_mobile ? (ncka = lgss = lga = 1,
showLogo(!0)) : showlogo_iv = setInterval("showLogo(false)", 25);
document.onkeydown = function(b) {
  b = b || window.event;
  var q = b.keyCode;
  if (37 == q)
    kd_l = !0;
  else if (39 == q)
    kd_r = !0;
  else if (38 == q || 32 == q)
    kd_u = !0,
    setAcceleration(1);
  else if (13 == q || 10 == q)
    if (want_victory_message) {
      if (0 < victory.value.length)
        save_btn.elem.onclick()
    } else {
      if (!connecting && !connected)
        play_btn.elem.onclick()
    }
  else
    16 == q && testing && (shifty = !0);
  testing && console.log("keydown: " + b.keyCode)
}
;
document.onkeyup = function(b) {
  b = b || window.event;
  b = b.keyCode;
  37 == b ? kd_l = !1 : 39 == b ? kd_r = !1 : 38 == b || 32 == b ? (kd_u = !1,
  setAcceleration(0)) : 16 == b && testing && (shifty = !1)
}
;
function loadSos(b) {
  if (!forcing && 0 < b.length) {
    sos = [];
    sis = [];
    b.charAt(0);
    for (var q = 1, c = {}, h = 0, c = h = 0, u, f = 0, e = 0, y = [], F = [], B = []; q < b.length; )
      if (u = (b.charCodeAt(q++) - 97 - e) % 26,
      0 > u && (u += 26),
      f *= 16,
      f += u,
      e += 7,
      1 == c) {
        if (0 == h)
          y.push(f),
          4 == y.length && h++;
        else if (1 == h)
          F.push(f),
          3 == F.length && h++;
        else if (2 == h && (B.push(f),
        3 == B.length)) {
          c = {};
          for (h = u = 0; h < F.length; h++)
            u *= 256,
            u += F[h];
          for (h = F = 0; h < B.length; h++)
            F *= 256,
            F += B[h];
          c.ip = y.join(".");
          c.po = u;
          c.ac = F;
          sos.push(c);
          y = [];
          F = [];
          B = [];
          h = 0
        }
        c = f = 0
      } else
        c++;
    for (q = sos.length - 1; 0 <= 
    q; q--) {
      c = 1;
      for (h = sis.length - 1; 0 <= h; h--)
        if (sis[h].ip == sos[q].ip) {
          c = 0;
          break
        }
      if (1 == c) {
        e = b = -1;
        y = [];
        for (h = sos.length - 1; 0 <= h; h--)
          sos[h].ip == sos[q].ip && (y.push(sos[q].po),
          sos[h].ac > e && (b = h,
          e = sos[h].ac));
        sis.push({
          ip: sos[b].ip,
          po: y[Math.floor(Math.random() * y.length)],
          ptms: []
        })
      }
    }
    sis = sos = [{ip: "127.0.0.1", po: 8080, ptms: []}]
    for (h = sis.length - 1; 0 <= h; h--)
      if (c = sis[h],
      q = null ,
      !(.4 > Math.random())) {
        try {
          q = new WebSocket("ws://5.9.60.173:443/ptc")
        } catch (w) {
          q = null 
        }
        q && (q.binaryType = "arraybuffer",
        q.onerror = function(b) {}
        ,
        q.onmessage = function(b) {
          b = new Uint8Array(b.data);
          if (1 == b.length && 112 == b[0])
            for (var c = sis.length - 1; 0 <= c; c--)
              if (b = sis[c],
              b.ps == this) {
                c = Date.now() - b.stm;
                b.ptms.push(c);
                4 > b.ptms.length ? (b.stm = Date.now(),
                b = new Uint8Array(1),
                b[0] = 112,
                this.send(b)) : (waiting_for_sos && -1 == sos_ready_after_mtm && (sos_ready_after_mtm = Date.now() + 2E3),
                this.close(),
                b.ps = null );
                break
              }
        }
        ,
        q.onopen = function(b) {
          b = !1;
          for (var c = sis.length - 1; 0 <= c; c--) {
            var e = sis[c];
            if (e.ps == this) {
              e.stm = Date.now();
              b = new Uint8Array(1);
              b[0] = 112;
              this.send(b);
              b = !0;
              break
            }
          }
          b || this.close()
        }
        ,
        c.ps = q)
      }
  }
}
var mba = null 
  , mbi = null ;
if (is_ios || is_android)
  mba = document.createElement("a"),
  mbi = document.createElement("img"),
  mbi.border = 0,
  mbi.draggable = "false",
  mbi.className = "nsi",
  mbi.width = 1245,
  mbi.height = 260,
  mbi.style.position = "fixed",
  mbi.style.left = "0px",
  mbi.style.bottom = "0px",
  mbi.style.zIndex = 70,
  mbi.src = "/s/n2.jpg",
  mba.appendChild(mbi),
  document.body.appendChild(mba),
  is_ios ? mba.href = "https://itunes.apple.com/us/app/slither.io/id1091944550?ls=1&mt=8" : is_android && (mba.href = is_amazon ? "http://www.amazon.com/Lowtech-Enterprises-slither-io/dp/B01E312TYQ/" : "https://play.google.com/store/apps/details?id=air.com.hypah.io.slither");
resize();
o = {
  f: function(b, q, c) {
    "success" == q && loadSos(b)
  }
};
getData("/i2.txt", o);
