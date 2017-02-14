var J$fx = J$fx || {};
(function () {
var $a="jazzy.lang.__string";


function $b($c)
{
$d[$d.length]=$c;
$e=null;
return $d.length-1;
}
function $f($c)
{
if($d.length!=0)
$d[$d.length-1]=$c;
else
$b($c);
$e=null;
return $d.length;
}
function $g($h,$i)
{
if($e==null)
$e=$j();
if($i>=0&&$i<$d.length)
{
$d.length=$i;
}
return $h;
}
function $k()
{
if($d.length!=0)
{
alert("[Exception Stack]\n"+$j());
$d.length=0;
}
}
function $l()
{
if($e==null)
$e=$j();
return $e;
}
function $m($n)
{
$n._c=$j();
return $n;
}
function $j()
{
var $o="";
for(var $p=$d.length-1;$p>=0;$p--)
$o=$o+$d[$p]+"\n";
return $o;
}


var $d=new Array();
var $e=null;


{
}


$g(null,0);












function $q($r,$s)
{
return $r+Math.floor(Math.random()*($s-$r));
}
function $t($u)
{
return Math.floor(Math.random()*$u);
}




{
}


$g(null,0);













function $v($w,$x)
{
var $y=new Object();
$w[$x]=$y;
return $y;
}
function $z($w,$x)
{
var $y=new Array();
$w[$x]=$y;
return $y;
}
function $A($w,$x)
{
if((typeof $w[$x] != "undefined"))
return $w[$x];
var $y=new Object();
$w[$x]=$y;
return $y;
}
function $B($w,$x)
{
if((typeof $w[$x] != "undefined"))
return $w[$x];
var $y=new Array();
$w[$x]=$y;
return $y;
}
function $C($w,$x,$D)
{
$w[$x]=$D;
return $w;
}
function $E($w,$x)
{
return $w[$x];
}
function $F()
{
return new Array();
}




{
}


$g(null,0);








function $G($H,$I)
{
var $J=new Date();
$J.setTime($H.getTime()+$I*3600*24*1000);
return $J;
}
function $K($H,$L)
{
var $J=new Date();
$J.setTime($H.getTime()+$L*1000);
return $J;
}
function $M()
{
return new Date();
}
function $N($O)
{
return new Date($O);
}
function $P($Q)
{
return new Date($Q);
}
function $R($S)
{
return $S*3600*24*7*1000;
}
function $T($U)
{
return $U*3600*24*1000;
}
function $V($W)
{
return $W*3600*1000;
}




{
}


$g(null,0);










function $X($w,$Y)
{
var $Z=$w;
var $0=new Object();
$Z[$Y]=$0;
return $0;
}
function $1($w,$Y)
{
var $Z=$w;
var $0=new Array();
$Z[$Y]=$0;
return $0;
}
function $2($w,$Y)
{
var $Z=$w;
if((typeof $Z[$Y] != "undefined"))
return $Z[$Y];
var $0=new Object();
$Z[$Y]=$0;
return $0;
}
function $3($w,$Y)
{
var $Z=$w;
if((typeof $Z[$Y] != "undefined"))
return $Z[$Y];
var $0=new Array();
$Z[$Y]=$0;
return $0;
}
function $4($w,$Y,$D)
{
var $5=$w;
$5[$Y]=$D;
return $w;
}
function $6($w,$Y)
{
var $Z=$w;
return $Z[$Y];
}
function $7($w,$Y)
{
var $Z=$w;
return (typeof $Z[$Y] != "undefined");
}
function $8($w)
{
var $9=$_($a,0,new Array(0,null),0);
var $Z=$w;
for(var $ab in $w)
{
if($w.hasOwnProperty($ab))
($9).push($ab);
}
return $9;
}
function $bb($w)
{
var $cb=0;
var $Z=$w;
for(var $ab in $w)
{
if($w.hasOwnProperty($ab))
$cb++;
}
return $cb;
}
function $db()
{
return new Object();
}




{
}


$g(null,0);









{
}


$g(null,0);













function $eb($H,$fb)
{
return $H.indexOf($fb)==0;
}
function $gb($H)
{
return $H.length;
}
function $hb($H)
{
if($H==null||$H.length==0)
{
return 0;
}
var $ib=0;
for(var $jb=0;$jb<$H.length;$jb++)
{
var $kb=$H.charCodeAt($jb);
$ib=(($ib<<5)-$ib)+$kb;
$ib=$ib&$ib;
}
return $ib;
}




{
}


$g(null,0);

function $lb($mb)
{
var $nb=$ob();
return $pb($nb,$mb);
}
function $qb($mb,$rb)
{
var $sb=$ob();
$sb.open("POST",$mb,false);
$sb.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
$sb.send($rb);
return $tb($sb);
}
function $ub($mb,$rb)
{
var $vb=$ob();
$vb.open("POST",$mb,false);
try
{
$vb.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
$vb.send($rb);
if($tb($vb))
return $vb.responseText;
else
return null;
}
catch($wb)
{
$g(null,0+1);
var $xb;
if($yb(($xb=$wb),"jazzy.lang.Exception"))
{
return null;
}
}
}
function $zb($mb,$rb)
{
var $vb=$ob();
$vb.open("PUT",$mb,false);
try
{
$vb.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
$vb.send($rb);
if($tb($vb))
return $vb.responseText;
else
return null;
}
catch($wb)
{
$g(null,0+1);
var $xb;
if($yb(($xb=$wb),"jazzy.lang.Exception"))
{
return null;
}
}
}
function $Ab($mb)
{
var $Bb=$ob();
$Bb.open("DELETE",$mb,false);
try
{
$Bb.send(null);
if($tb($Bb))
return $Bb.responseText;
else
return null;
}
catch($Cb)
{
$g(null,0+1);
var $Db;
if($yb(($Db=$Cb),"jazzy.lang.Exception"))
{
return null;
}
}
}

function $tb($w)
{
var $Eb=($w.status-0);
return (($Eb>=200)&&($Eb<300))||($Eb==304)||($Eb==1223)||($Eb==0&&(window.location.protocol=="file:"||window.location.protocol=="chrome:"));
}





function $pb($w,$Fb)
{
$w.open("GET",$Fb,false);
try
{
$w.send(null);
if($tb($w))
return $w.responseText;
else
return null;
}
catch($Cb)
{
$g(null,0+1);
var $Db;
if($yb(($Db=$Cb),"jazzy.lang.Exception"))
{
return null;
}
}
}
function $ob()
{
if($Gb)
{
for(var $x=0;$x<$Hb.length;++$x)
{
var $Ib=$Hb[$x];
var $sb=null;
try
{
$sb=new ActiveXObject($Ib);
}
catch($wb)
{
$g(null,0+1);
var $xb;
if($yb(($xb=$wb),"jazzy.lang.Exception"))
{
}
}
if($sb!=null)
{
$Hb[0]=$Hb[$x];
return $sb;
}
}
return null;
}
else
{
try
{
return (new XMLHttpRequest());
}
catch($Jb)
{
$g(null,0+1);
var $Kb;
if($yb(($Kb=$Jb),"jazzy.lang.Exception"))
{
return null;
}
}
}
}


var $Hb=$Lb($a,new Array("Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0",null));


{
}


J$fx._w3c_post=function($mb,$rb)
{
return $ub($mb,$rb);
}
J$fx._w3c_delete=function($mb)
{
return $Ab($mb);
}
J$fx._w3c_rewrite=function($mb,$rb)
{
return $qb($mb,$rb);
}
J$fx._w3c_put=function($mb,$rb)
{
return $zb($mb,$rb);
}
J$fx._w3c_fetch=function($mb)
{
return $lb($mb);
}
$g(null,0);

function $Mb($Nb,$Ob)
{
return $Nb-$Ob;
}
function $Pb($Qb,$Rb)
{
$Sb[$Qb]=$Rb;
}
function $Lb($Tb,$Ub)
{
$Ub.length=$Ub.length-1;
$Ub.CLASS="array";
$Ub.CONTENT=$Tb;
$Ub.DIMENSION=1;
return $Ub;
}
function $_($Tb,$Vb,$Wb,$Xb)
{
if($Xb==0)
$Wb.length=$Wb.length-1;
if($Wb.length-$Xb==0)
return null;
var $Yb=new Array();
$Yb.CLASS="array";
$Yb.CONTENT=$Tb;
$Yb.DIMENSION=$Vb+$Wb.length-$Xb;
if($Xb<$Wb.length)
{
for(var $Zb=0;$Zb<$Wb[$Xb];$Zb++)
{
$Yb[$Zb]=$_($Tb,$Vb,$Wb,$Xb+1);
}
}
return $Yb;
}
function $0b($w,$1b)
{
$w._temp_=$1b;
return $w._temp_();
}
function $2b($w,$1b)
{
$w._temp_=$1b;
return $w;
}
function $3b($4b,$5b,$6b)
{
for(var $7b in $4b)
{
$5b._l($7b,$4b,$6b);
}
}
function $8b($4b,$9b,$_b)
{
for(var $7b in $4b)
{
$2b($9b,$_b)._temp_($7b,$4b);
}
}
function $ac($w,$bc)
{
return $w[$bc];
}
function $cc($w,$bc,$dc)
{
$w[$bc]=$dc;
}
function $ec($fc)
{
if($gc==null)
{
setTimeout($fc);
}
else
{
$gc.push($fc);
}
}
function $hc()
{
if($gc!=null)
{
if(document.body!=null)
{
$ic=$gc;
$gc=null;
setTimeout(function(){$jc()}.bind(this));
}
else
{
setTimeout(function(){$hc()}.bind(this),50);
$kc=$kc+"\nSystem.prepare() delayed.";
}
}
}
function $jc()
{
if($ic!=null)
{
for(var $lc=$ic.shift();$lc!=null;$lc=$ic.shift())
{
$lc.call(this);
}
$ic=null;
}
}
function $mc($fc)
{
setTimeout($fc);
}
function $nc($fc,$oc)
{
setTimeout($fc,$oc);
}
function $pc()
{
return new Object();
}
function $qc($rc)
{
$rc.sort($sc);
}
function $tc($rc,$uc)
{
$rc.sort($uc);
}
function $vc()
{
return new Date().getTime();
}
function $wc($fc)
{
return eval($fc);
}
function $xc($fc)
{
return $fc.call(this);
}
function $yc($fc)
{
if($Gb&&!$zc)
{
window.execScript($fc);
}
else
{
$Ac.eval($fc);
}
}











var $Ac=this;
var $gc=$F();
var $Sb=$Ac;
var $ic=null;
var $kc="";
var $Gb=(navigator.appName=="Microsoft Internet Explorer");
var $Bc=false;
var $zc=false;
var $sc=$Mb;


{
{
var $Cc=document.createElement("div");
$Cc.innerHTML="<!--[if lt IE 9]><i></i><![endif]-->";
var $Dc=($Cc.getElementsByTagName("i").length==1);
if($Dc)
{
$Bc=true;
}
if(navigator.appName=="Netscape"&&navigator.userAgent.indexOf("Trident")>0)
{
$Gb=true;
$zc=true;
}
}
}


J$fx._jazzyLoad=function($fc)
{
return $yc($fc);
}
$g(null,0);


function $Ec($w,$bc)
{
if(!!($w[$bc]))
{
return $w[$bc].apply($w);
}
return null;
}



function $Fc($w,$Gc,$Hc)
{
$w[$Gc]=$Hc;
return $w;
}
function $Ic($w,$Gc,$Jc)
{
$w[$Gc]=$w[$Jc];
return $w;
}




{
}


$g(null,0);


function $Kc($Lc,$Mc,$Bb)
{
if($Lc.length<=1)
return $Lc;
var $Nc=($Mc==null)?new Array():$Mc.slice(0);
var $Oc=$Bb;
var $Pc=function ()
{
if($Oc==null)
$Oc=this;
var $Rc=arguments;
var $Sc=$Nc;
if($Rc.length>0)
{
$Sc=$Nc.slice(0);
for(var $Tc=0;$Tc<$Rc.length;$Tc++)
$Sc.push($Rc[$Tc]);
}
if($Sc.length>=$Lc.length)
{
return $Lc.apply($Oc,$Sc);
}
else
{
return $Kc($Lc,$Sc,$Oc);
}
};
return $Pc;
}




{
}


$g(null,0);

function $Uc($Vc)
{
if($Wc[$Vc._p]!=null)
{
alert("[Jazzy ClassLoader Exception]\nDuplicate Class:"+$Vc._p);
}
else
{
$Wc[$Vc._p]=$Vc;
$Xc[$Xc.length]=$Vc;
}
}
function $Yc($Tb)
{
var $nb=$Wc[$Tb];
return ($nb)._q();
}
function $Zc($Tb)
{
return $Wc[$Tb];
}
function $0c()
{
for(var $x=0;$x<$Xc.length;$x++)
{
$Xc[$x]._r();
}
for(var $p=0;$p<$Xc.length;$p++)
{
$Xc[$p]._q();
}
$Xc.length=0;
$hc();
}
function $1c($w,$2c)
{
var $3c=$w;
if($3c.CLASS==null)
{
$3c.CLASS=($2c);
if($2c._s==null)
$2c._r();
for(var $4c=0;$4c<$2c._s.length;$4c++)
{
$2c._s[$4c]._q()._t($w);
}
}
}
function $yb($5c,$6c)
{
var $3c=$5c;
if($3c==null)
return true;
if($6c=="jazzy.lang.Throwable"&&($3c instanceof Error||(typeof $3c)=="string"))
return true;
if($3c.CLASS==null)
return false;
var $7c=$3c.CLASS._u($6c);
return $7c;
}
function $8c($5c,$6c)
{
var $3c=$5c;
if($3c==null)
return null;
if($3c.CLASS==null||$3c.CLASS._u($6c)==false)
{
alert("Can't cast "+(typeof $3c)+" into "+$6c);
return null;
}
return $3c;
}


var $Wc=new Object();
var $Xc=$_("jazzy.lang.Class",0,new Array(0,null),0);


{
{
setTimeout(function(){$0c()}.bind(this));
}
}


J$fx.jazzyClassForName=function($Tb)
{
return $Yc($Tb);
}
$g(null,0);

function $9c($_c,$ad)
{
$bd(this);
$0b(this,$cd);
(this).CLASS=(this);
this._p=$_c[$_c.length-1];
this._v=$_c;
this._w=$ad;
this._x=$pc();
$Uc(this);
}
function $dd()
{
return this._p;
}
function $ed()
{
if(this._s==null)
{
this._s=$_("jazzy.lang.Class",0,new Array(this._v.length,null),0);
for(var $fd=0;$fd<this._v.length;$fd++)
{
var $gd=$Zc(this._v[$fd]);
this._s[$fd]=$gd;
if(this._x!=null)
this._x[this._v[$fd]]=$gd;
if($gd._x!=null)
{
$gd._r();
for(var $hd in $gd._x)
{
this._x[$hd]=$gd._x[$hd];
}
}
}
if(this._w!=null)
{
this._y=$_("jazzy.lang.Class",0,new Array(this._w.length,null),0);
for(var $4c=0;$4c<this._w.length;$4c++)
{
var $id=$Zc(this._w[$4c]);
this._y[$4c]=$id;
if(this._x!=null)
this._x[this._w[$4c]]=$id;
if($id._x!=null)
{
$id._r();
for(var $jd in $id._x)
{
this._x[$jd]=$id._x[$jd];
}
}
}
}
this._z();
}
}
function $kd()
{
if(this._A==false)
{
var $ld=$b(this._p+"::class::bind()");
this._r();
this._A=true;
$f(this._p+"::class::init()");
;
this._B();
$g(null,$ld);
}
return this;
}
function $md()
{
}
function $nd($w)
{
}
function $od()
{
}
function $pd($Tb)
{
if($Tb==this._p)
{
return true;
}
if(this._x!=null)
{
return (typeof this._x[$Tb] != "undefined");
}
if(this._y!=null)
{
for(var $qd=0;$qd<this._y.length;$qd++)
{
if(this._y[$qd]._u($Tb))
{
return true;
}
}
}
if(this._s.length>1)
{
return this._s[this._s.length-2]._u($Tb);
}
else
{
return false;
}
}

var _CL=new $9c(new Array("jazzy.lang.Class"),new Array());
var $rd=_CL;

_CL._z=
function()
{
}


function $bd($w)
{
$w._C=$dd;
$w._D=$dd;
$w._r=$ed;
$w._q=$kd;
$w._z=$md;
$w._t=$nd;
$w._B=$od;
$w._u=$pd;
$w._p=null;
$w._E=null;
$w._s=null;
$w._y=null;
$w._v=null;
$w._w=null;
$w._A=false;
$w._x=null;
}
_CL._t=$bd;

_CL._B=
function()
{
}


function $cd()
{
}


$g(null,0);

function $sd($c)
{
$1c(this,$td);
$0b(this,$ud);
var $Bb=this;
$Bb.prototype=($td._G);
$Bb.message=($c);
}

_CL=new $9c(new Array("jazzy.lang.Throwable"),new Array());
var $td=_CL;

_CL._z=
function()
{
this._G=null;
}


function $vd($w)
{
}
_CL._t=$vd;

_CL._B=
function()
{
this._G=new Error();
}


function $ud()
{
}


$g(null,0);

function $wd()
{
$1c(this,$xd);
$2b(this,$yd)._temp_("Jazzy Exception");
}
function $yd($c)
{
$1c(this,$xd);
$2b(this,$sd)._temp_($c);
$0b(this,$zd);
}
function $Ad()
{
alert((this.CLASS)._C()+":"+this.message+"\n"+this._c);
}
function $Bd()
{
return instance().message;
}
function $Cd()
{
return this._c;
}

_CL=new $9c(new Array("jazzy.lang.Throwable","jazzy.lang.Exception"),new Array());
var $xd=_CL;

_CL._z=
function()
{
}


function $Dd($w)
{
$w._H=$Ad;
$w._I=$Ad;
$w._J=$Bd;
$w._K=$Bd;
$w._L=$Cd;
$w._M=$Cd;
$w._c=null;
}
_CL._t=$Dd;

_CL._B=
function()
{
}


function $zd()
{
this._c=null;
}


$g(null,0);

function $Ed()
{
$1c(this,$Fd);
$2b(this,$Gd)._temp_("Runtime Exception");
}
function $Gd($c)
{
$1c(this,$Fd);
$2b(this,$yd)._temp_($c);
$0b(this,$Hd);
}

_CL=new $9c(new Array("jazzy.lang.Throwable","jazzy.lang.Exception","jazzy.lang.RuntimeException"),new Array());
var $Fd=_CL;

_CL._z=
function()
{
}


function $Id($w)
{
}
_CL._t=$Id;

_CL._B=
function()
{
}


function $Hd()
{
}


$g(null,0);



_CL=new $9c(new Array("jazzy.lang.Iteration"),new Array());
var $Jd=_CL;

_CL._z=
function()
{
}

_CL._B=
function()
{
}


$g(null,0);

function $Kd()
{
$1c(this,$Ld);
$0b(this,$Md);
this._P=new Array();
}
function $Nd($Od)
{
this._P[this._P.length]=$Od;
}
function $Pd($5c)
{
this._P[this._P.length]=""+$5c;
}
function $Qd()
{
this._P.length=0;
}
function $Rd()
{
return this._P.join("");
}

_CL=new $9c(new Array("jazzy.lang.StringBuffer"),new Array());
var $Ld=_CL;

_CL._z=
function()
{
}


function $Sd($w)
{
$w._Q=$Nd;
$w._R=$Nd;
$w._S=$Pd;
$w._T=$Pd;
$w._U=$Qd;
$w._V=$Qd;
$w._W=$Rd;
$w._X=$Rd;
$w._P=null;
}
_CL._t=$Sd;

_CL._B=
function()
{
}


function $Md()
{
}


$g(null,0);











{
}


$g(null,0);




function $Td($Ud)
{
if($Gb)
window.clipboardData.setData("Text",$Ud);
}
function $Vd()
{
if($Gb)
return window.clipboardData.getData("Text");
else
return null;
}




{
}


$g(null,0);











function $Wd($Xd)
{
return $Yd._0($Xd);
}




{
}


J$fx._W3C_lookup=function($Xd)
{
return $Wd($Xd);
}
$g(null,0);










function $Zd($0d)
{
if($1d)
{
return window.event.clientX+document.body.scrollLeft;
}
else
{
return $0d.clientX;
}
}
function $2d($0d)
{
if($1d)
{
return window.event.clientY+document.body.scrollTop;
}
else
{
return $0d.clientY;
}
}
function $3d($0d)
{
if($1d)
{
window.event.returnValue=(false);
}
else
{
$Ec($0d,"preventDefault");
}
}




{
}


$g(null,0);




















{
}


$g(null,0);

function $4d($5d)
{
$1c(this,$Yd);
$0b(this,$6d);
this._4=$5d;
}
function $7d($8d,$9d,$_d)
{
$1c(this,$Yd);
$0b(this,$6d);
var $ae=$be+$8d;
if($8d==null||$ce=="")
{
$Yd._5++;
$ae="jazzy$"+$Yd._5;
}
else
if(document.getElementById($ae)!=null)
{
throw $m(new $Gd("duplicate element: "+$ae));
}
if($Bc)
{
var $de=$Yd._6($9d);
this._4=document.createElement("<"+$9d+" id=\""+$ae+"\" "+($_d!=null&&$_d!=""?"style=\""+$_d+"\" ":"")+($de?"/>":"></"+$9d+">"));
}
else
{
this._4=document.createElement($9d);
if($_d!=null&&$_d!="")
{
this._4.setAttribute("style",$_d);
}
this._4.setAttribute("id",$ae);
}
}
function $ee($fe)
{
if($fe=="br")
return true;
if($fe=="hr")
return true;
return false;
}
function $ge()
{
return this._4;
}
function $he($S,$ie)
{
this._4.style.width=($S+"px");
this._4.style.height=($ie+"px");
}
function $je($ke,$le)
{
this._4.style.left=($ke+"px");
this._4.style.top=($le+"px");
}
function $me()
{
return (this._4.style.zIndex-0);
}
function $ne($oe)
{
this._4.style.zIndex=((""+$oe));
}
function $pe()
{
return !(this._4.style.display=="none");
}
function $qe($re)
{
if($re)
{
this._4.style.display=("");
}
else
{
this._4.style.display=("none");
}
}
function $se($Ud)
{
this._4.appendChild(document.createTextNode($Ud));
return this;
}
function $te($8d,$9d,$_d)
{
this._7($8d,$9d,$_d);
return this;
}
function $ue($8d,$9d,$_d)
{
var $xb=new $7d($8d,$9d,$_d);
this._4.appendChild($xb._4);
if($Yd._6($9d))
return this;
else
return $xb;
}
function $ve($we)
{
this._4.appendChild($we._4);
}
function $xe($Xd)
{
var $ye=document.getElementById($Xd);
if($ye==null)
{
return null;
}
else
{
return new $4d($ye);
}
}
function $ze($Xd)
{
var $Ae=$be+$Xd;
var $Be=document.getElementById($Ae);
if($Be==null)
{
return null;
}
else
{
return new $4d($Be);
}
}
function $Ce($De)
{
this._4.innerHTML=($De);
}
function $Ee($Fe)
{
return (this._4)[$Fe];
}
function $Ge($Fe,$He)
{
if((this._4)[$Fe]!=$He)
{
(this._4)[$Fe]=$He;
}
}
function $Ie($Je)
{
var $Ke=this._4.getElementsByTagName($Je);
if($Ke.length>0)
{
return new $4d($Ke[0]);
}
else
{
return null;
}
}
function $Le($De)
{
if($1d)
{
this._4.insertAdjacentHTML("BeforeEnd",$De);
}
else
if($Me)
{
var $Ne=this._7(null,"div","");
if($Ne!=this)
{
$Ne._8($De);
}
}
}

_CL=new $9c(new Array("jazzy.dom.core.Element"),new Array());
var $Yd=_CL;

_CL._z=
function()
{
this._6=$ee;
this._0=$xe;
this._9=$ze;
}


function $Oe($w)
{
$w.setSize=$he;
$w.inject=$Ce;
$w.insert=$Le;
$w.moveTo=$je;
$w.__=$ge;
$w._ab=$ge;
$w._bb=$he;
$w._cb=$he;
$w._db=$je;
$w._eb=$je;
$w._fb=$me;
$w._gb=$me;
$w._hb=$ne;
$w._ib=$ne;
$w._jb=$pe;
$w._kb=$pe;
$w._lb=$qe;
$w._mb=$qe;
$w._Q=$se;
$w._nb=$se;
$w._ob=$te;
$w._pb=$te;
$w._7=$ue;
$w._qb=$ue;
$w._rb=$ve;
$w._sb=$ve;
$w._8=$Ce;
$w._tb=$Ce;
$w._ub=$Ee;
$w._vb=$Ee;
$w._wb=$Ge;
$w._xb=$Ge;
$w._yb=$Ie;
$w._zb=$Ie;
$w._Ab=$Le;
$w._Bb=$Le;
$w._4=null;
}
_CL._t=$Oe;

_CL._B=
function()
{
}


function $6d()
{
}


var $be="jazzy_";
var $ce="jazzy$";
_CL._5=0;
$g(null,0);

function $Pe()
{
if($Qe)
return;
var $ld=document.body;
if($ld==null)
{
throw $m(new $Gd("Cannot locate GUI Environment"));
}
var $p=null;
$1d=!!((!!($ld)&&(typeof $ac($ld,"insertAdjacentHTML") != "undefined")&&!!(document.createElement)&&$Gb));
$Me=(!!($ld)&&!$1d&&(typeof $ac($ld,"appendChild") != "undefined")&&(typeof document.createRange != "undefined")&&(typeof $ac(($p=document.createRange()),"setStartBefore") != "undefined")&&(typeof $ac($p,"createContextualFragment") != "undefined"));
$Re=($1d&&!!(document.all)&&!!(!window.opera));
$Se=($Me&&(typeof $ac($ld.style,"MozOpacity") != "undefined"));
$Qe=!!($1d||$Me);
if($zc)
{
}
window.status=($1d+"/"+$Se+"/"+$Me);
}


var $Qe=false;
var $1d=false;
var $Re=false;
var $Me=false;
var $Se=false;


{
{
$ec(function(){$Pe()}.bind(this));
}
}


$g(null,0);

function $Te($Ue)
{
$1c(this,$Ve);
$0b(this,$We);
this._Db=$Ue;
}
function $Xe()
{
if($1d)
{
return this._Db.srcElement;
}
else
{
return this._Db.target;
}
}
function $Ye()
{
return this._Db.clientX+document.body.scrollLeft;
}
function $Ze()
{
return this._Db.clientY+document.body.scrollTop;
}
function $0e()
{
return this._Db.keyCode;
}
function $1e()
{
if($1d)
{
this._Db.returnValue=(false);
}
else
{
$Ec(this._Db,"preventDefault");
}
}
function $2e()
{
return this._Db;
}
function $3e($Ue)
{
if($1d)
{
return new $Te(window.event);
}
else
{
if(!!($Ue))
{
return new $Te($Ue);
}
else
{
throw $m(new $Gd("null event"));
}
}
}

_CL=new $9c(new Array("jazzy.dom.core.Event"),new Array());
var $Ve=_CL;

_CL._z=
function()
{
this.toEvent=$3e;
this._Eb=$3e;
}


function $4e($w)
{
$w.keyCode=$0e;
$w.getY=$Ze;
$w.getX=$Ye;
$w.consume=$1e;
$w._Fb=$Xe;
$w._Gb=$Xe;
$w._Hb=$Ye;
$w._Ib=$Ye;
$w._Jb=$Ze;
$w._Kb=$Ze;
$w._Lb=$0e;
$w._Mb=$0e;
$w._Nb=$1e;
$w._Ob=$1e;
$w.__=$2e;
$w._Pb=$2e;
$w._Db=null;
}
_CL._t=$4e;

_CL._B=
function()
{
}


function $We()
{
}


$g(null,0);

function $5e($6e)
{
$1c(this,$7e);
$2b(this,$8e)._temp_($6e,null,null);
}
function $9e($6e,$_e)
{
$1c(this,$7e);
$2b(this,$8e)._temp_($6e,$_e,null);
}
function $8e($6e,$_e,$af)
{
$1c(this,$7e);
$0b(this,$bf);
this._Rb=$6e;
this._Sb=$_e==null?$cf:$_e;
this._Tb=$af==null?$df:$af;
}
function $ef()
{
return " font-family: "+this._Rb+"; font-size: "+this._Sb+"; "+this._Tb+";";
}

_CL=new $9c(new Array("jazzy.dom.core.Font"),new Array());
var $7e=_CL;

_CL._z=
function()
{
}


function $ff($w)
{
$w._Ub=$ef;
$w._Vb=$ef;
$w._Rb=null;
$w._Sb=null;
$w._Tb=null;
}
_CL._t=$ff;

_CL._B=
function()
{
$gf=$hf+$if;
$jf=new $5e("tahoma");
}


function $bf()
{
}


J$fx._W3C_font=function($6e,$_e,$af)
{
$2b(this,$8e);
this._temp_($6e,$_e,$af);
}
var $df="font-weight:normal;";
var $if="font-weight:bold;";
var $hf="font-style:italic;";
var $gf=null;
var $cf="12px";
var $jf=null;
$g(null,0);

function $kf($ke,$le)
{
return "left:"+$ke+"px;top:"+$le+"px;";
}
function $lf($S,$ie)
{
return "width:"+$S+"px;height:"+$ie+"px;";
}
function $mf($ke,$le,$nf,$of)
{
return "left:"+$ke+"px;top:"+$le+"px;width:"+$nf+"px;height:"+$of+"px;";
}
function $pf($ke,$le)
{
return "left:"+$ke+"px;top:"+$le+"px;"+$qf;
}
function $rf($ke,$le)
{
return "left:"+$ke+"px;top:"+$le+"px;"+$sf;
}
function $tf($ke,$le,$nf,$of)
{
return "left:"+$ke+"px;top:"+$le+"px;width:"+$nf+"px;height:"+$of+"px;"+$qf;
}
function $uf($ke,$le,$nf,$of)
{
return "left:"+$ke+"px;top:"+$le+"px;width:"+$nf+"px;height:"+$of+"px;"+$sf;
}
function $vf($wf,$xf,$yf)
{
return "#"+$zf[($wf>=0&&$wf<256)?$wf:0]+$zf[($xf>=0&&$xf<256)?$xf:0]+$zf[($yf>=0&&$yf<256)?$yf:0];
}
function $Af($wf,$xf,$yf)
{
return $Bf+$vf($wf,$xf,$yf)+";";
}
function $Cf($Df,$Ef,$Ff,$Gf)
{
return "clip:rect("+$Df+"px,"+$Ef+"px,"+$Ff+"px,"+$Gf+"px);";
}


var $qf="position: absolute;";
var $sf="position: relative;";
var $Hf="overflow: hidden;";
var $If="font-family:tahoma;font-size:12px;";
var $Jf="<div style=\"";
var $Kf="\"></div>";
var $Bf="background-color:";
var $Lf="border-left:";
var $Mf="px solid ";
var $Nf=$_($a,0,new Array(16,null),0);
var $zf=$_($a,0,new Array(256,null),0);


{
{
for(var $Of=0;$Of<10;$Of++)
{
$Nf[$Of]=""+$Of;
}
$Nf[10]="A";
$Nf[11]="B";
$Nf[12]="C";
$Nf[13]="D";
$Nf[14]="E";
$Nf[15]="F";
for(var $x=0;$x<16;$x++)
{
for(var $Pf=0;$Pf<16;$Pf++)
{
$zf[$x*16+$Pf]=$Nf[$x]+$Nf[$Pf];
}
}
}
}


$g(null,0);$f("jazzy.dom.event.AxisPointer"+' flush functions');

function $Qf($Rf)
{
}
function $Sf($H,$ie)
{
var $Tf=new $Uf("SYSTEM");
var $Vf=$ie;
$Tf._Yb($Vf);
$Wf._Zb($H,$Tf);
return $Tf;
}
function $Uf($Q)
{
$1c(this,$Wf);
$0b(this,$Xf);
this._0b=$Q;
this._1b=$Yf;
this._3b=false;
this._4b=$Qf;
}
function $Zf($0f)
{
$Wf._5b=$0f;
}
function $1f($O)
{
this._4b=$O;
}
function $2f($ke,$le)
{
this._6b=$ke;
this._7b=$le;
}
function $3f()
{
return this._8b;
}
function $4f()
{
return this._9b;
}
function $5f()
{
return this._1b;
}
function $6f()
{
return this._0b;
}
function $7f($ke,$le)
{
if(this._1b==$Yf)
return;
var $8f=$ke-this._6b;
var $9f=$le-this._7b;
var $_f=this._4b;
if(this._3b)
{
if(this._1b!=$ag)
{
var $bg=Math.abs($8f-this.__b)+Math.abs($9f-this._ac);
if($bg>$Wf._5b)
{
this._1b=$cg;
this._8b=this.__b;
this._9b=this._ac;
$_f(this);
this._1b=$ag;
}
}
}
else
{
this._1b=$dg;
}
this._8b=$8f;
this._9b=$9f;
$_f(this);
}
function $eg($ke,$le,$fg)
{
var $gg=$ke-this._6b;
var $hg=$le-this._7b;
var $ig=this._4b;
this._8b=$gg;
this._9b=$hg;
if($fg)
{
this._3b=true;
this.__b=$gg;
this._ac=$hg;
this._1b=$jg;
$ig(this);
}
else
{
this._3b=false;
if(this._1b==$ag)
{
this._1b=$kg;
$ig(this);
}
else
{
this._1b=$lg;
this._8b=this.__b;
this._9b=this._ac;
$ig(this);
this._8b=$gg;
this._9b=$hg;
}
this._1b=$mg;
$ig(this);
this._1b=0;
}
}
function $ng($ke,$le,$og)
{
var $pg=this._4b;
if($og)
{
this._1b=$qg;
this._8b=$ke-this._6b;
this._9b=$le-this._7b;
}
else
{
this._1b=$Yf;
}
this._3b=false;
$pg(this);
}
function $rg()
{
return "AxisPointer("+this._1b+","+this._3b+","+this._8b+","+this._9b+")";
}
function $sg($H,$tg)
{
$cc($H.__(),"onmousemove",$Wf._bc($tg));
$cc($H.__(),"onmousedown",$Wf._cc($tg,true));
$cc($H.__(),"onmouseup",$Wf._cc($tg,false));
$cc($H.__(),"onmouseover",$Wf._dc($tg,true));
$cc($H.__(),"onmouseout",$Wf._dc($tg,false));
}
function $ug($vg)
{
var $wg=$vg;
return function ($yg)
{
var $zg=$Zd($yg);
var $Ag=$2d($yg);
$wg._ec($zg,$Ag);
$3d($yg);
};
}
function $Bg($vg,$Cg)
{
var $Tf=$vg;
var $Dg=$Cg;
return function ($Fg)
{
var $Gg=$Zd($Fg);
var $Hg=$2d($Fg);
$Tf._fc($Gg,$Hg,$Dg);
$3d($Fg);
};
}
function $Ig($vg,$Cg)
{
var $Tf=$vg;
var $Jg=$Cg;
return function ($Fg)
{
var $Gg=$Zd($Fg);
var $Hg=$2d($Fg);
$Tf._gc($Gg,$Hg,$Jg);
$3d($Fg);
};
}
$f("jazzy.dom.event.AxisPointer"+' create class');
_CL=new $9c(new Array("jazzy.dom.event.AxisPointer"),new Array("jazzy.dom.event.Pointer"));
var $Wf=_CL;
$f("jazzy.dom.event.AxisPointer"+' setup static binder');
_CL._z=
function()
{
this._hc=$Zf;
this._Zb=$sg;
this._bc=$ug;
this._cc=$Bg;
this._dc=$Ig;
}
$f("jazzy.dom.event.AxisPointer"+' setup object binder');

function $Lg($w)
{
$w.toString=$rg;
$w._Yb=$1f;
$w._ic=$1f;
$w._jc=$2f;
$w._kc=$2f;
$w._Hb=$3f;
$w._lc=$3f;
$w._Jb=$4f;
$w._mc=$4f;
$w._nc=$5f;
$w._oc=$5f;
$w._pc=$6f;
$w._qc=$6f;
$w._ec=$7f;
$w._rc=$7f;
$w._fc=$eg;
$w._sc=$eg;
$w._gc=$ng;
$w._tc=$ng;
$w._W=$rg;
$w._uc=$rg;
$w._0b=null;
$w._6b=0;
$w._7b=0;
$w._8b=0;
$w._9b=0;
$w.__b=0;
$w._ac=0;
$w._1b=0;
$w._3b=false;
$w._4b=null;
}
_CL._t=$Lg;
$f("jazzy.dom.event.AxisPointer"+' setup static initializer');
_CL._B=
function()
{
$Mg=$Sf;
}
$f("jazzy.dom.event.AxisPointer"+' setup object initialize');

function $Xf()
{
}
$f("jazzy.dom.event.AxisPointer"+' setup funtions');

_CL._5b=10;
var $Mg=null;
$g(null,0);$f("jazzy.dom.event.Pointer"+' flush functions');






$f("jazzy.dom.event.Pointer"+' create class');
_CL=new $9c(new Array("jazzy.dom.event.Pointer"),new Array());
var $Ng=_CL;
$f("jazzy.dom.event.Pointer"+' setup static binder');
_CL._z=
function()
{
}
$f("jazzy.dom.event.Pointer"+' setup static initializer');
_CL._B=
function()
{
}
$f("jazzy.dom.event.Pointer"+' setup funtions');

var $qg=1025;
var $Yf=2049;
var $dg=1;
var $jg=4;
var $mg=8;
var $ag=5;
var $cg=37;
var $lg=24;
var $kg=40;
$g(null,0);

function $Og($Pg,$ld,$Qg,$Rg,$Sg)
{
$1c(this,$Tg);
$2b(this,$Ug)._temp_($Pg,$ld,$Qg,$Rg,$Sg,"");
}
function $Ug($Pg,$ld,$Qg,$Rg,$Sg,$Vg)
{
$1c(this,$Tg);
$0b(this,$Wg);
this._wc=$Pg._7(null,"div",$tf($ld,$Qg,$Rg,$Sg)+$Vg);
this._wc._Q("[Terminal]");
this._wc._ob(null,"hr","");
this._wc._Q("> ");
}
function $Xg($Od)
{
this._wc._Q(""+$Od);
this._wc._ob(null,"br","")._Q("> ");
}
function $Yg($Od)
{
this._wc._Q(""+$Od);
}

_CL=new $9c(new Array("jazzy.util.DivTerminal"),new Array("jazzy.util.Terminal"));
var $Tg=_CL;

_CL._z=
function()
{
}


function $Zg($w)
{
$w.println=$Xg;
$w.print=$Yg;
$w._xc=$Xg;
$w._yc=$Xg;
$w._zc=$Yg;
$w._Ac=$Yg;
$w._wc=null;
}
_CL._t=$Zg;

_CL._B=
function()
{
}


function $Wg()
{
}


$g(null,0);




_CL=new $9c(new Array("jazzy.util.Terminal"),new Array());
var $0g=_CL;

_CL._z=
function()
{
}

_CL._B=
function()
{
}


$g(null,0);$f("cn.monadic.sphinx.data.CausalMapping"+' flush functions');




$f("cn.monadic.sphinx.data.CausalMapping"+' create class');
_CL=new $9c(new Array("cn.monadic.sphinx.data.CausalMapping"),new Array());
var $1g=_CL;
$f("cn.monadic.sphinx.data.CausalMapping"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.sphinx.data.CausalMapping"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.sphinx.data.CausalMapping"+' setup funtions');

$g(null,0);$f("cn.monadic.sphinx.data.DateCodec"+' flush functions');

function $2g($3g,$4g)
{
$1c(this,$5g);
$2b(this,$6g)._temp_($3g,$4g,$4g/2);
}
function $6g($3g,$4g,$7g)
{
$1c(this,$5g);
$0b(this,$8g);
this._Cc=$3g.getTime();
this._Dc=$4g;
this._Ec=$7g;
}
function $9g()
{
return $N(this._Cc);
}
function $_g()
{
return this._Dc;
}
function $ah()
{
return this._Ec;
}
function $bh($O)
{
var $ch=$O.getTime()-this._Cc;
return Math.floor(($ch+this._Ec)/this._Dc);
}
function $dh($eh)
{
var $fh=this._Cc+$eh*this._Dc+this._Ec;
return $N($fh);
}
$f("cn.monadic.sphinx.data.DateCodec"+' create class');
_CL=new $9c(new Array("cn.monadic.sphinx.data.DateCodec"),new Array());
var $5g=_CL;
$f("cn.monadic.sphinx.data.DateCodec"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.sphinx.data.DateCodec"+' setup object binder');

function $gh($w)
{
$w.encode=$bh;
$w.getPeriod=$_g;
$w.getEpoch=$9g;
$w.getBuffer=$ah;
$w.decode=$dh;
$w._Fc=$9g;
$w._Gc=$9g;
$w._Hc=$_g;
$w._Ic=$_g;
$w._Jc=$ah;
$w._Kc=$ah;
$w._Lc=$bh;
$w._Mc=$bh;
$w._Nc=$dh;
$w._Oc=$dh;
$w._Cc=0;
$w._Dc=0;
$w._Ec=0;
}
_CL._t=$gh;
$f("cn.monadic.sphinx.data.DateCodec"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.sphinx.data.DateCodec"+' setup object initialize');

function $8g()
{
}
$f("cn.monadic.sphinx.data.DateCodec"+' setup funtions');

$g(null,0);$f("cn.monadic.sphinx.data.FieldParser"+' flush functions');

function $hh($ih,$jh)
{
var $kh=0;
if((typeof $jh != "undefined"))
{
$kh=$jh;
}
return $kh+$6(($ih),"");
}
function $lh($mh)
{
$1c(this,$nh);
$2b(this,$oh)._temp_($mh,"\t");
}
function $oh($mh,$ph)
{
$1c(this,$nh);
$0b(this,$qh);
this._Qc=$mh;
this._Rc=$ph;
}
function $rh()
{
if(this._Sc==null)
{
this._Sc=$F();
var $sh=$2($2(this._Qc,"Field"),"Distribution");
var $th=$8($sh);
for(var $jb=0;$jb<$th.length;$jb++)
{
var $uh=$th[$jb];
var $vh=$uh.split(this._Rc);
var $wh=$db();
for(var $xh=0;$xh<$vh.length;$xh=$xh+2)
{
$4($wh,$vh[$xh],$vh[$xh+1]);
}
$4($wh,"",($6($sh,$uh)-0));
this._Sc.push($wh);
}
}
}
function $yh()
{
return this._Sc;
}
function $zh()
{
var $Ah=$2(this._Qc,"Vertex");
if($Ah==null)
{
return null;
}
else
{
return $8($Ah);
}
}
function $Bh($Ch,$Dh)
{
if(!$7($2(this._Qc,"Vertex"),$Ch))
{
return -1;
}
var $Eh=$6($2($2(this._Qc,"Vertex"),$Ch),$Dh);
if($Eh==null)
{
return -1;
}
else
{
return ($Eh-0);
}
}
function $Fh($Ch)
{
if(!$7($2(this._Qc,"Vertex"),$Ch))
{
return null;
}
var $Gh=$2($2($2(this._Qc,"Vertex"),$Ch),"Distribution");
return $8($Gh);
}
function $Hh($Ch,$Ih)
{
if(!$7($2(this._Qc,"Vertex"),$Ch))
{
return 0;
}
var $Eh=$6($2($2($2(this._Qc,"Vertex"),$Ch),"Distribution"),$Ih);
if($Eh==null)
{
return 0;
}
else
{
return ($Eh-0);
}
}
function $Jh($Ch,$Ih)
{
if(!$7($2(this._Qc,"Vertex"),$Ch))
{
return -1;
}
if(!(typeof $Ih != "undefined"))
{
return this._Tc($Ch,"Residual");
}
var $Eh=$6($2($2($2(this._Qc,"Vertex"),$Ch),"Distribution"),$Ih);
if($Eh==null)
{
return this._Tc($Ch,"Marginal");
}
else
{
return 0;
}
}
function $Kh($Lh,$Mh)
{
var $Nh=$7($2(this._Qc,"Edge"),$Lh+this._Rc+$Mh);
var $Oh=$7($2(this._Qc,"Edge"),$Mh+this._Rc+$Lh);
if(!$Nh&&!$Oh)
{
return null;
}
var $Ph=false;
var $Qh=$db();
$4($Qh,"data",$Nh?$2($2(this._Qc,"Edge"),$Lh+this._Rc+$Mh):$2($2(this._Qc,"Edge"),$Mh+this._Rc+$Lh));
$4($Qh,"covariant",$Nh);
return $Qh;
}
function $Rh($Sh,$Cg,$Th)
{
var $Uh=this._Uc($Sh,$Cg);
if($Uh==null)
return -1;
var $Vh=$6($2($Uh,"data"),$Th);
if($Vh==null)
{
return -1;
}
else
{
return ($Vh-0);
}
}
function $Wh($Sh,$Cg)
{
var $Xh=this._Uc($Sh,$Cg);
if($Xh==null)
return null;
var $Yh=$6($Xh,"covariant");
var $Zh=$2($2($Xh,"data"),"Distribution");
var $0h=$F();
var $1h=$8($Zh);
for(var $2h=0;$2h<$1h.length;$2h++)
{
var $3h=$1h[$2h].split(this._Rc);
var $4h=$6($Zh,$1h[$2h]);
$4($A($0h,$2h),"",$4h);
if($Yh)
{
$4($A($0h,$2h),$Sh,$3h[0]);
$4($A($0h,$2h),$Cg,$3h[1]);
}
else
{
$4($A($0h,$2h),$Cg,$3h[0]);
$4($A($0h,$2h),$Sh,$3h[1]);
}
}
return $0h;
}
function $5h($Sh,$Cg,$6h,$7h)
{
var $8h=this._Uc($Sh,$Cg);
if($8h==null)
return -1;
var $9h=$2($2($8h,"data"),"Distribution");
var $_h=$6($8h,"covariant");
var $ai=$_h?$6h+this._Rc+$7h:$7h+this._Rc+$6h;
var $bi=$6($9h,$ai);
if($bi==null)
{
return 0;
}
else
{
return ($bi-0);
}
}
function $ci($Sh,$Cg,$6h,$7h)
{
var $8h=this._Uc($Sh,$Cg);
if($8h==null)
return -1;
if(!(typeof $6h != "undefined"))
{
return this._Vc($Sh,$Cg,"Residual");
}
var $9h=$2($2($8h,"data"),"Distribution");
var $_h=$6($8h,"covariant");
var $ai=$_h?$6h+this._Rc+$7h:$7h+this._Rc+$6h;
var $bi=$6($9h,$ai);
if($bi==null)
{
return this._Vc($Sh,$Cg,"Marginal");
}
else
{
return 0;
}
}
function $di($ei)
{
return this._Wc(this._Xc($ei));
}
function $fi($gi)
{
return this._Yc($gi,this._Zc());
}
function $hi($gi,$ii)
{
var $ji=null;
if(this._Sc!=null)
{
$ji=$db();
for(var $ki=0;$ki<this._Sc.length;$ki++)
{
var $li=this._Sc[$ki];
var $mi=$gi($li);
var $ni=$ji;
if($mi!=null)
{
$4($ni,"value",$ii($li,$6($ni,"value")));
for(var $oi=0;$oi<$mi.length;$oi++)
{
$ni=$2($2($ni,"children"),$mi[$oi]);
$4($ni,"value",$ii($li,$6($ni,"value")));
}
}
}
}
return $ji;
}
function $pi($ei)
{
var $qi=$ei;
var $ri=function ($ti)
{
var $mi=$_($a,0,new Array($qi.length,null),0);
var $ui=$ti;
for(var $2h=0;$2h<$qi.length;$2h++)
{
if($7($ui,$qi[$2h]))
{
$mi[$2h]=$6($ui,$qi[$2h]);
}
else
{
return null;
}
}
return $mi;
};
return $ri;
}
function $vi()
{
var $wi=$hh;
return $wi;
}
$f("cn.monadic.sphinx.data.FieldParser"+' create class');
_CL=new $9c(new Array("cn.monadic.sphinx.data.FieldParser"),new Array());
var $nh=_CL;
$f("cn.monadic.sphinx.data.FieldParser"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.sphinx.data.FieldParser"+' setup object binder');

function $xi($w)
{
$w.queryUnaryVolume=$Bh;
$w.getCategories=$zh;
$w.derivePivotal2=$hi;
$w.liftPF=$pi;
$w.queryEdgeList=$Wh;
$w.queryVertexNoise=$Jh;
$w.getRows=$yh;
$w.queryEdgeNoise=$ci;
$w.queryEdgeVolume=$5h;
$w.queryJointVolume=$Rh;
$w.queryVertexVolume=$Hh;
$w.liftFF=$vi;
$w.derivePivotal=$fi;
$w.deriveCategorical=$di;
$w.queryVertexList=$Fh;
$w._0c=$rh;
$w._1c=$rh;
$w._2c=$yh;
$w._3c=$yh;
$w._4c=$zh;
$w._5c=$zh;
$w._Tc=$Bh;
$w._6c=$Bh;
$w._7c=$Fh;
$w._8c=$Fh;
$w._9c=$Hh;
$w.__c=$Hh;
$w._ad=$Jh;
$w._bd=$Jh;
$w._Uc=$Kh;
$w._cd=$Kh;
$w._Vc=$Rh;
$w._dd=$Rh;
$w._ed=$Wh;
$w._fd=$Wh;
$w._gd=$5h;
$w._hd=$5h;
$w._id=$ci;
$w._jd=$ci;
$w._kd=$di;
$w._ld=$di;
$w._Wc=$fi;
$w._md=$fi;
$w._Yc=$hi;
$w._nd=$hi;
$w._Xc=$pi;
$w._od=$pi;
$w._Zc=$vi;
$w._pd=$vi;
$w._Qc=null;
$w._Rc=null;
$w._qd=null;
$w._rd=null;
$w._Sc=null;
}
_CL._t=$xi;
$f("cn.monadic.sphinx.data.FieldParser"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.sphinx.data.FieldParser"+' setup object initialize');

function $qh()
{
}
$f("cn.monadic.sphinx.data.FieldParser"+' setup funtions');

$g(null,0);$f("cn.monadic.sphinx.data.LinearParser"+' flush functions');

function $yi($Q)
{
$1c(this,$zi);
$2b(this,$Ai)._temp_($Q,",");
}
function $Ai($Q,$ph)
{
$1c(this,$zi);
$0b(this,$Bi);
this._td=$Q;
this._ud=$ph;
}
function $Ci($Di)
{
if(this._vd==null)
{
var $Ei=(this._td).split("\n");
this._wd=$Di;
this._vd=$Ei;
}
}
function $Fi()
{
if(this._vd==null)
{
var $Gi=(this._td).split("\n");
this._wd=($Gi[0]).split(this._ud);
this._vd=$Gi;
this._vd.shift();
}
}
function $Hi($Ii)
{
if(this._vd==null&&this._wd!=null)
{
var $Ei=(this._td).split("\n");
this._wd=$Ii($Ei[0]);
this._vd=$Ei;
this._vd.shift();
}
}
function $Ji($Ki)
{
if(this._vd!=null&&this._wd!=null&&this._xd==null)
{
this._xd=$db();
for(var $p=0;$p<this._wd.length;$p++)
{
$4(this._xd,this._wd[$p],$p);
}
var $Li=this._wd.length;
var $Mi=$F();
for(var $Ni=0;$Ni<this._vd.length;$Ni++)
{
var $Oi=this._vd[$Ni];
var $Pi=$Oi.split(this._ud);
if($Ki==false||$Pi.length==$Li)
{
$Mi.push($Pi);
}
}
this._vd=$Mi;
}
}
function $Qi()
{
for(var $x=0;$x<this._vd.length;$x++)
{
var $Ri=this._vd[$x];
var $Si=$db();
for(var $Ti=0;$Ti<$Ri.length;$Ti++)
{
$4($Si,this._wd[$Ti],$Ri[$Ti]);
}
this._vd[$x]=$Si;
}
return this;
}
function $Ui($Vi)
{
for(var $p=0;$p<this._vd.length;$p++)
{
$C(this._vd,$p,$Vi($E(this._vd,$p)));
}
return this;
}
function $Wi()
{
return this._wd.length;
}
function $Xi()
{
return this._vd.length;
}
function $Yi($Zi)
{
return this._wd[$Zi];
}
function $0i($1i)
{
return $6(this._xd,$1i);
}
function $2i($Of)
{
return $E(this._vd,$Of);
}
function $3i()
{
return this._vd;
}
function $4i($5i)
{
var $6i=null;
if(this._vd!=null&&this._wd!=null&&this._xd!=null)
{
$6i=$db();
for(var $jb=0;$jb<this._vd.length;$jb++)
{
var $ti=this._vd[$jb];
var $7i=$5i($ti);
if($7i!=null)
{
var $8i=$8($7i);
for(var $xh=0;$xh<$8i.length;$xh++)
{
$3($6i,$8i[$xh]).push($6($7i,$8i[$xh]));
}
}
}
}
return $6i;
}
function $9i($_i,$aj)
{
if(this._vd!=null&&this._wd!=null&&this._xd!=null)
{
var $bj=$8($_i);
for(var $ki=0;$ki<this._vd.length;$ki++)
{
var $li=this._vd[$ki];
var $cj=$aj($li);
if($cj!=null)
{
for(var $xh=0;$xh<$bj.length;$xh++)
{
if($7($cj,$bj[$xh]))
{
$3($_i,$bj[$xh]).push($6($cj,$bj[$xh]));
}
}
}
}
}
return $_i;
}
$f("cn.monadic.sphinx.data.LinearParser"+' create class');
_CL=new $9c(new Array("cn.monadic.sphinx.data.LinearParser"),new Array());
var $zi=_CL;
$f("cn.monadic.sphinx.data.LinearParser"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.sphinx.data.LinearParser"+' setup object binder');

function $dj($w)
{
$w.injectHeader=$Ci;
$w.getColumnCount=$Wi;
$w.getAlias=$Yi;
$w.getColumnIndexBy=$0i;
$w.deriveColumnar=$4i;
$w.getRows=$3i;
$w.getRowCount=$Xi;
$w.parseHeader=$Fi;
$w.revise=$Ui;
$w.parseHeaderEx=$Hi;
$w.reviseByAlias=$Qi;
$w.getRowAt=$2i;
$w._yd=$Ci;
$w._zd=$Ci;
$w._Ad=$Fi;
$w._Bd=$Fi;
$w._Cd=$Hi;
$w._Dd=$Hi;
$w._Ed=$Ji;
$w._Fd=$Ji;
$w._Gd=$Qi;
$w._Hd=$Qi;
$w._Id=$Ui;
$w._Jd=$Ui;
$w._Kd=$Wi;
$w._Ld=$Wi;
$w._Md=$Xi;
$w._Nd=$Xi;
$w._Od=$Yi;
$w._Pd=$Yi;
$w._Qd=$0i;
$w._Rd=$0i;
$w._Sd=$2i;
$w._Td=$2i;
$w._2c=$3i;
$w._Ud=$3i;
$w._Vd=$4i;
$w._Wd=$4i;
$w._Xd=$9i;
$w._Yd=$9i;
$w._td=null;
$w._ud=null;
$w._wd=null;
$w._xd=null;
$w._vd=null;
}
_CL._t=$dj;
$f("cn.monadic.sphinx.data.LinearParser"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.sphinx.data.LinearParser"+' setup object initialize');

function $Bi()
{
}
$f("cn.monadic.sphinx.data.LinearParser"+' setup funtions');

$g(null,0);$f("cn.monadic.sphinx.data.MarkovMapping"+' flush functions');

function $ej($Lc)
{
$1c(this,$fj);
$0b(this,$gj);
this._0d=$Lc;
this._1d=0;
}
function $hj($ij)
{
this._1d=0;
}
function $jj($kj)
{
var $lj=this._0d;
this._1d=$lj(this._1d,$kj);
}
function $mj()
{
return this._1d;
}
$f("cn.monadic.sphinx.data.MarkovMapping"+' create class');
_CL=new $9c(new Array("cn.monadic.sphinx.data.MarkovMapping"),new Array("cn.monadic.sphinx.data.CausalMapping"));
var $fj=_CL;
$f("cn.monadic.sphinx.data.MarkovMapping"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.sphinx.data.MarkovMapping"+' setup object binder');

function $nj($w)
{
$w._2d=$hj;
$w._3d=$hj;
$w._4d=$jj;
$w._5d=$jj;
$w._6d=$mj;
$w._7d=$mj;
$w._0d=null;
$w._1d=null;
}
_CL._t=$nj;
$f("cn.monadic.sphinx.data.MarkovMapping"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.sphinx.data.MarkovMapping"+' setup object initialize');

function $gj()
{
}
$f("cn.monadic.sphinx.data.MarkovMapping"+' setup funtions');

$g(null,0);$f("cn.monadic.sphinx.data.PartialOrder"+' flush functions');

function $oj()
{
$1c(this,$pj);
$0b(this,$qj);
this._9d=$db();
}
function $rj($Sh,$Cg)
{
var $sj=$8($2($2(this._9d,$Cg),">"));
var $tj=$8($2($2(this._9d,$Sh),"<"));
for(var $Ni=0;$Ni<$sj.length;$Ni++)
{
$4($2($2(this._9d,$Sh),">"),$sj[$Ni],"1");
$4($2($2(this._9d,$sj[$Ni]),"<"),$Sh,"1");
}
for(var $uj=0;$uj<$tj.length;$uj++)
{
$4($2($2(this._9d,$Cg),"<"),$tj[$uj],"1");
$4($2($2(this._9d,$tj[$uj]),">"),$Cg,"1");
}
for(var $vj=0;$vj<$sj.length;$vj++)
{
for(var $oi=0;$oi<$tj.length;$oi++)
{
$4($2($2(this._9d,$sj[$vj]),"<"),$tj[$oi],"1");
$4($2($2(this._9d,$tj[$oi]),">"),$sj[$vj],"1");
}
}
}
function $wj($Sh,$Cg)
{
if(!$7(this._9d,$Sh))
{
var $y=$X(this._9d,$Sh);
$X($y,">");
$X($y,"<");
}
if(!$7(this._9d,$Cg))
{
var $0=$X(this._9d,$Cg);
$X($0,">");
$X($0,"<");
}
if($7($2($2(this._9d,$Sh),"<"),$Cg))
{
return null;
}
$4($2($2(this._9d,$Sh),">"),$Cg,"1");
$4($2($2(this._9d,$Cg),"<"),$Sh,"1");
this.__d($Sh,$Cg);
return this;
}
function $xj($Sh,$Cg)
{
if($7($2($2(this._9d,$Sh),">"),$Cg))
{
return 1;
}
if($7($2($2(this._9d,$Sh),"<"),$Cg))
{
return -1;
}
return 0;
}
function $yj($Sh,$Cg)
{
if(!$7($2($2(this._9d,$Sh),">"),$Cg))
return false;
var $sj=$8($2($2(this._9d,$Sh),">"));
for(var $ki=0;$ki<$sj.length;$ki++)
{
if($sj[$ki]!=$Cg)
{
if($7($2($2(this._9d,$sj[$ki]),">"),$Cg))
return false;
}
}
return true;
}
$f("cn.monadic.sphinx.data.PartialOrder"+' create class');
_CL=new $9c(new Array("cn.monadic.sphinx.data.PartialOrder"),new Array());
var $pj=_CL;
$f("cn.monadic.sphinx.data.PartialOrder"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.sphinx.data.PartialOrder"+' setup object binder');

function $zj($w)
{
$w.direct=$yj;
$w.order=$wj;
$w.compare=$xj;
$w.__d=$rj;
$w._ae=$rj;
$w._be=$wj;
$w._ce=$wj;
$w._de=$xj;
$w._ee=$xj;
$w._fe=$yj;
$w._ge=$yj;
$w._9d=null;
}
_CL._t=$zj;
$f("cn.monadic.sphinx.data.PartialOrder"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.sphinx.data.PartialOrder"+' setup object initialize');

function $qj()
{
}
$f("cn.monadic.sphinx.data.PartialOrder"+' setup funtions');

$g(null,0);$f("cn.monadic.sphinx.data.PivotParser"+' flush functions');

function $Aj($Q)
{
$1c(this,$Bj);
$2b(this,$Ai)._temp_($Q,",");
$0b(this,$Cj);
}
function $Dj($Q,$ph)
{
$1c(this,$Bj);
$2b(this,$Ai)._temp_($Q,$ph);
$0b(this,$Cj);
}
function $Ej($gi,$ii)
{
return this._Yc($gi,$ii);
}
function $Fj($gi,$ii)
{
var $ji=null;
if(this._vd!=null&&this._wd!=null&&this._xd!=null)
{
$ji=$db();
for(var $ki=0;$ki<this._vd.length;$ki++)
{
var $li=this._vd[$ki];
var $mi=$gi($li);
var $ni=$ji;
if($mi!=null)
{
$4($ni,"value",$ii($li,$6($ni,"value")));
for(var $oi=0;$oi<$mi.length;$oi++)
{
$ni=$2($2($ni,"children"),$mi[$oi]);
$4($ni,"value",$ii($li,$6($ni,"value")));
}
}
}
}
return $ji;
}
function $Gj($ei)
{
var $qi=$_("$int",0,new Array($ei.length,null),0);
for(var $jb=0;$jb<$qi.length;$jb++)
{
if($7(this._xd,$ei[$jb]))
{
$qi[$jb]=$6(this._xd,$ei[$jb]);
}
else
{
return null;
}
}
var $Hj=function ($li)
{
var $Jj=$_($a,0,new Array($qi.length,null),0);
var $Kj=$li;
for(var $Lj=0;$Lj<$qi.length;$Lj++)
{
$Jj[$Lj]=$E($Kj,$qi[$Lj]);
}
return $Jj;
};
return $Hj;
}
function $Mj($kj)
{
if(!$7(this._xd,$kj))
return null;
var $qd=$6(this._xd,$kj);
var $Nj=function ($ti,$Pj)
{
var $Qj=0;
if((typeof $Pj != "undefined"))
{
$Qj=$Pj;
}
return $Qj+($E(($ti),$qd)-0);
};
return $Nj;
}
$f("cn.monadic.sphinx.data.PivotParser"+' create class');
_CL=new $9c(new Array("cn.monadic.sphinx.data.LinearParser","cn.monadic.sphinx.data.PivotParser"),new Array());
var $Bj=_CL;
$f("cn.monadic.sphinx.data.PivotParser"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.sphinx.data.PivotParser"+' setup object binder');

function $Rj($w)
{
$w.liftFF=$Mj;
$w.liftPF=$Gj;
$w.makePivotal=$Ej;
$w.derivePivotal=$Fj;
$w._ie=$Ej;
$w._je=$Ej;
$w._Yc=$Fj;
$w._ke=$Fj;
$w._Xc=$Gj;
$w._le=$Gj;
$w._me=$Mj;
$w._ne=$Mj;
}
_CL._t=$Rj;
$f("cn.monadic.sphinx.data.PivotParser"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.sphinx.data.PivotParser"+' setup object initialize');

function $Cj()
{
}
$f("cn.monadic.sphinx.data.PivotParser"+' setup funtions');

$g(null,0);$f("cn.monadic.sphinx.data.Timeline"+' flush functions');

function $Sj()
{
$1c(this,$Tj);
$0b(this,$Uj);
}
function $Vj($mh,$Wj)
{
var $Xj=$Wj;
if(!(typeof $Wj != "undefined"))
{
$Xj=1024;
}
return new $Yj($mh,$Xj);
}
function $Zj($3g,$4g,$7g)
{
return new $6g($3g,$4g,$7g);
}
function $0j($Sh,$1j)
{
return $Sh._qe($1j);
}
function $2j($Sh,$1b)
{
return $Sh._re(new $ej($1b));
}
$f("cn.monadic.sphinx.data.Timeline"+' create class');
_CL=new $9c(new Array("cn.monadic.sphinx.data.Timeline"),new Array());
var $Tj=_CL;
$f("cn.monadic.sphinx.data.Timeline"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.sphinx.data.Timeline"+' setup object binder');

function $3j($w)
{
$w.normalize=$0j;
$w.toSeries=$Vj;
$w.convert=$2j;
$w.toCodec=$Zj;
$w._se=$Vj;
$w._te=$Zj;
$w._ue=$0j;
$w._ve=$2j;
}
_CL._t=$3j;
$f("cn.monadic.sphinx.data.Timeline"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.sphinx.data.Timeline"+' setup object initialize');

function $Uj()
{
}
$f("cn.monadic.sphinx.data.Timeline"+' setup funtions');

$g(null,0);$f("cn.monadic.sphinx.data.TimeSeries"+' flush functions');

function $4j($5j)
{
return $P($5j);
}
function $6j($mh)
{
$1c(this,$7j);
$2b(this,$Yj)._temp_($mh,1000);
}
function $Yj($mh,$Wj)
{
$1c(this,$7j);
$0b(this,$8j);
this._we=$mh;
this._xe=$Wj;
}
function $9j($_j)
{
var $ak=$4j;
return this._ye($ak,$_j);
}
function $bk($ck,$dk)
{
if(this._ze==null)
{
this._ze=$dk;
this._Ae=$F();
var $ek=$8(this._we);
for(var $ki=0;$ki<$ek.length;$ki++)
{
var $fk=$ck($ek[$ki]);
if($fk!=null)
{
var $gk=$dk._Lc($fk);
if($gk>=this._xe)
continue;
var $hk=($6(this._we,$ek[$ki])-0);
if($gk>=this._Ae.length)
{
for(var $oi=this._Ae.length;$oi<=$gk;$oi++)
{
$C(this._Ae,$oi,0);
}
}
$C(this._Ae,$gk,$E(this._Ae,$gk)+$hk);
}
}
return this;
}
var $ik=new $Yj(this._we,this._xe);
return $ik._ye($ck,$dk);
}
function $jk()
{
return this._xe;
}
function $kk()
{
return this._Ae.length;
}
function $lk()
{
return this._Ae;
}
function $mk($Lc)
{
var $nk=$F();
for(var $jb=0;$jb<this._Ae.length;$jb++)
{
$C($nk,$jb,$Lc($jb,$E(this._Ae,$jb),this._ze._Nc($jb)));
}
return $nk;
}
function $ok($eh)
{
if($eh<0||$eh>=this._Ae.length)
{
return 0;
}
return $E(this._Ae,$eh);
}
function $pk($eh)
{
return this._ze._Nc($eh);
}
function $qk($rk)
{
if(this._ze==null)
{
return null;
}
var $sk=new $Yj(this._we,this._xe);
$sk._ze=this._ze;
$sk._Ae=$F();
$rk._2d(this._xe);
for(var $jb=0;$jb<this._Ae.length;$jb++)
{
$rk._4d($E(this._Ae,$jb));
$C($sk._Ae,$jb,$rk._6d());
}
return $sk;
}
$f("cn.monadic.sphinx.data.TimeSeries"+' create class');
_CL=new $9c(new Array("cn.monadic.sphinx.data.TimeSeries"),new Array());
var $7j=_CL;
$f("cn.monadic.sphinx.data.TimeSeries"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.sphinx.data.TimeSeries"+' setup object binder');

function $tk($w)
{
$w.getValue=$ok;
$w.transform=$qk;
$w.getDate=$pk;
$w.getDataLength=$kk;
$w.streamline=$bk;
$w.getMaxLength=$jk;
$w.getSeries=$lk;
$w.derive=$mk;
$w._qe=$9j;
$w._Be=$9j;
$w._ye=$bk;
$w._Ce=$bk;
$w._De=$jk;
$w._Ee=$jk;
$w._Fe=$kk;
$w._Ge=$kk;
$w._He=$lk;
$w._Ie=$lk;
$w._Je=$mk;
$w._Ke=$mk;
$w._Le=$ok;
$w._Me=$ok;
$w._Ne=$pk;
$w._Oe=$pk;
$w._re=$qk;
$w._Pe=$qk;
$w._xe=0;
$w._we=null;
$w._Ae=null;
$w._ze=null;
}
_CL._t=$tk;
$f("cn.monadic.sphinx.data.TimeSeries"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.sphinx.data.TimeSeries"+' setup object initialize');

function $8j()
{
}
$f("cn.monadic.sphinx.data.TimeSeries"+' setup funtions');

$g(null,0);$f("cn.monadic.sphinx.tool.Release"+' flush functions');

function $uk()
{
var $ld=document.getElementsByTagName("body");
var $Qg=$ld[0];
var $vk=$Qg.textContent;
var $xb=$Lb("$int",new Array(110,117,108,108,103,97,116,101,64,103,109,97,105,108,46,99,111,109,null));
var $wk="";
for(var $uj=0;$uj<$xb.length;$uj++)
{
$wk=$wk+String.fromCharCode($xb[$uj]);
}
$xk=$wk;
if($vk.indexOf($xk)<0)
{
J$ = {};sphinx_parse_linear=0;sphinx_parse_pivotal=0;;
}
else
{
jsHook();
}
}

function $yk()
{
}
function $zk($Ak)
{
return $lb($Ak);
}
function $Bk($Ak,$rb)
{
return $zb($Ak,$rb);
}
function $Ck($Ak,$rb)
{
return $ub($Ak,$rb);
}
function $Dk($Ak)
{
return $Ab($Ak);
}
function $Ek($Fk,$Gk)
{
return "cached/"+$Fk+"_"+$Gk+".txt";
}
function $Hk($Ik)
{
var $Th=$Ik;
var $Jk=$Th.substring(0,1);
var $Kk=$Th.substring(1,2);
var $zg=$Th.substring(2);
var $Lk=$db();
var $Mk=$zg.split($Jk);
for(var $2h=0;$2h<$Mk.length;$2h++)
{
$zg=$Mk[$2h];
var $Nk=$zg.indexOf($Kk);
if($Nk>0)
{
$4($Lk,$zg.substring(0,$Nk),$zg.substring($Nk+1));
}
}
$C($C($C($1($Lk,"__variant"),0,$Jk),1,$Kk),2,$Ik);
return $Lk;
}
function $Ok()
{
return new $oj();
}
function $Pk($Qk)
{
var $ak=new $yi($Qk);
$ak._Ad();
$ak._Ed(true);
return $ak;
}
function $Rk($Qk)
{
var $ak=new $Aj($Qk);
$ak._Ad();
$ak._Ed(true);
return $ak;
}
function $Sk($Ud)
{
var $ak=new $lh($Tk($Ud));
$ak._0c();
return $ak;
}
function $Tk($Ud)
{
return $wc("("+$Ud+")");
}
function $Uk($Ud)
{
var $ib=$hb($Ud)*16807+2147483647;
return $ib&$ib;
}
function $Vk($Wk)
{
var $Xk=$Wk*127773+2147483399;
$Xk=$Xk&$Xk;
return "rgb("+(($Xk>>20)&255)+","+(($Xk>>10)&255)+","+($Xk&255)+")";
}
function $Yk()
{
return new $Sj();
}
$f("cn.monadic.sphinx.tool.Release"+' setup static binder');

var $Zk=null;
var $0k=null;
var $xk=null;
$f("cn.monadic.sphinx.tool.Release"+' setup static initializer');

{
{
$ec(function(){$uk()}.bind(this));
}
}
$f("cn.monadic.sphinx.tool.Release"+' setup funtions');

J$fx.sphinx_parse_pivotal=function($Qk)
{
return $Rk($Qk);
}
J$fx.sphinx_parse_linear=function($Qk)
{
return $Pk($Qk);
}
J$fx.sphinx_partial_order=function()
{
return $Ok();
}
J$fx.sphinx_resolve_offline=function($Fk,$Gk)
{
return $Ek($Fk,$Gk);
}
J$fx.sphinx_save=function($Ak,$rb)
{
return $Bk($Ak,$rb);
}
J$fx.sphinx_test=function()
{
return $yk();
}
J$fx.sphinx_parse_field=function($Ud)
{
return $Sk($Ud);
}
J$fx.sphinx_remove=function($Ak)
{
return $Dk($Ak);
}
J$fx.sphinx_load=function($Ak)
{
return $zk($Ak);
}
J$fx.sphinx_hash=function($Ud)
{
return $Uk($Ud);
}
J$fx.sphinx_rainbow=function($Wk)
{
return $Vk($Wk);
}
J$fx.sphinx_write=function($Ak,$rb)
{
return $Ck($Ak,$rb);
}
J$fx.sphinx_timeline=function()
{
return $Yk();
}
J$fx.sphinx_parse_json=function($Ud)
{
return $Tk($Ud);
}
J$fx.sphinx_decode=function($Ik)
{
return $Hk($Ik);
}
$g(null,0);})();
