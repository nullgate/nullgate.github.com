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


function _w3c_rewrite($mb,$rb)
{
return $qb($mb,$rb);
}
function _w3c_put($mb,$rb)
{
return $zb($mb,$rb);
}
function _w3c_post($mb,$rb)
{
return $ub($mb,$rb);
}
function _w3c_delete($mb)
{
return $Ab($mb);
}
function _w3c_fetch($mb)
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


function _jazzyLoad($fc)
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


function jazzyClassForName($Tb)
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


function _W3C_lookup($Xd)
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
$w.insert=$Le;
$w.inject=$Ce;
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
$w.getX=$Ye;
$w.getY=$Ze;
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


function _W3C_font($6e,$_e,$af)
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


$g(null,0);

function $1g()
{
$1c(this,$2g);
$2b(this,$3g)._temp_(null);
}
function $3g($4g)
{
$1c(this,$2g);
$0b(this,$5g);
this._Cc=$jf;
this._Dc=5;
this._Ec=new $Kd();
this._Fc=$4g;
if($Qe)
{
if($2g._Gc!=null)
{
this._Hc($2g._Gc);
}
var $Ne;
if(this._Fc!=null)
{
this._Ic=this._Fc._7(null,"div","");
$Ne=$6g;
}
else
{
$Ne=$7g;
}
$Ic($Ic($Fc(this,'_Kc',$Ne),'_Lc','_Kc'),'flush','_Kc');
}
this._Mc("#000000");
this._Nc(false);
}
function $8g()
{
return this._Ic;
}
function $9g($O)
{
this._Dc=$O;
}
function $_g()
{
this._Oc=true;
}
function $ah($bh)
{
this._Oc=true;
this._Pc=$bh;
}
function $ch($6e)
{
this._Cc=$6e;
}
function $dh($4g)
{
this._Qc=($4g).toLowerCase();
this._Rc=$Bf+this._Qc+";";
}
function $eh($ke,$le,$nf,$of)
{
}
function $fh()
{
var $gh=this._Ec._W();
var $hh=$gh.replace($ih,this._Sc);
if(this._Oc)
{
if(this._Pc==null)
{
$hh=($hh).replace($jh,$kh);
}
else
{
$hh=($hh).replace($jh,this._Pc);
}
}
return $hh;
}
function $lh()
{
window.status=("incompatible device");
}
function $mh($nh)
{
if($nh&&$Gb&&!$Bc)
{
return;
}
this._Tc=$nh;
var $oh;
if($Re)
{
$oh=$ph;
this._Sc=$nh?$qh:$rh;
}
else
{
$oh=$sh;
if($Se)
{
this._Sc=$nh?$qh:$rh;
}
else
{
this._Sc=$nh?$th:$uh;
}
}
$Ic($Fc(this,'_Uc',$oh),'_Vc','_Uc');
}
function $vh($wh,$xh,$yh,$zh)
{
}
function $Ah($ke,$le,$nf,$of)
{
}
function $Bh($Ch,$Dh,$Eh,$Fh)
{
}
function $Gh($ke,$le)
{
for(var $jb=$ke.length-2;$jb>=0;$jb--)
{
this._Wc($ke[$jb],$le[$jb],$ke[$jb+1],$le[$jb+1]);
}
}
function $Hh($ke,$le,$nf,$of)
{
this._Uc($ke,$le,$nf,$of);
}
function $Ih($ke,$le)
{
this._Xc($ke,$le);
this._Wc($ke[0],$le[0],$ke[$ke.length-1],$le[$le.length-1]);
}
function $Jh($ke,$le,$nf,$of)
{
this._Yc($ke,$le,$nf,$of);
}
function $Kh($Ch,$Dh,$nf,$of)
{
var $Lh=$nf>>1;
var $Mh=$of>>1;
var $Nh=$nf&1;
var $Oh=$of&1;
var $Ph=$Ch+$Lh;
var $Qh=$Dh+$Mh;
var $Rh=0;
var $Sh=$Mh;
var $Th=$Mh;
var $Uh=($Lh*$Lh)<<1;
var $Vh=$Uh<<1;
var $Wh=($Mh*$Mh)<<1;
var $Xh=$Wh<<1;
var $Yh=($Uh>>1)*(1-($Mh<<1))+$Wh;
var $Zh=($Wh>>1)-$Uh*(($Mh<<1)-1);
var $0h,$1h,$2h;
if($nf>0)
{
while($Sh>0)
{
if($Yh<0)
{
$Yh+=$Wh*(($Rh<<1)+3);
$Zh+=$Xh*(++$Rh);
}
else
if($Zh<0)
{
$Yh+=$Wh*(($Rh<<1)+3)-$Vh*($Sh-1);
$0h=$Ph-$Rh;
$1h=($Rh<<1)+$Nh;
$Zh+=$Xh*(++$Rh)-$Uh*((($Sh--)<<1)-3);
$2h=$Th-$Sh;
this._Uc($0h,$Qh-$Th,$1h,$2h);
this._Uc($0h,$Qh+$Sh+$Oh,$1h,$2h);
$Th=$Sh;
}
else
{
$Zh-=$Uh*(($Sh<<1)-3);
$Yh-=$Vh*(--$Sh);
}
}
}
this._Uc($Ph-$Lh,$Qh-$Th,$nf,($Th<<1)+$Oh);
}
function $3h($4h,$5h)
{
var $6h=$4h.length;
if($6h<2)
{
return;
}
var $7h;
var $8h;
var $9h,$_h;
var $ai,$bi;
var $ci,$di;
var $ei,$fi;
var $gi;
$9h=$5h[0];
$_h=$5h[0];
for($7h=1;$7h<$6h;$7h++)
{
if($5h[$7h]<$9h)
$9h=$5h[$7h];
if($5h[$7h]>$_h)
$_h=$5h[$7h];
}
for($8h=$9h;$8h<=$_h;$8h++)
{
var $hi=$_("$int",0,new Array(0,null),0);
$gi=0;
for($7h=0;$7h<$6h;$7h++)
{
if($7h==0)
{
$ei=$6h-1;
$fi=0;
}
else
{
$ei=$7h-1;
$fi=$7h;
}
$bi=$5h[$ei];
$di=$5h[$fi];
if($bi<$di)
{
$ai=$4h[$ei];
$ci=$4h[$fi];
}
else
if($bi>$di)
{
$di=$5h[$ei];
$bi=$5h[$fi];
$ci=$4h[$ei];
$ai=$4h[$fi];
}
else
{
continue;
}
if(($8h>=$bi)&&($8h<$di))
{
$hi[$gi++]=Math.round(($8h-$bi)*($ci-$ai)/($di-$bi)+$ai);
}
else
if(($8h==$_h)&&($8h>$bi)&&($8h<=$di))
{
$hi[$gi++]=Math.round(($8h-$bi)*($ci-$ai)/($di-$bi)+$ai);
}
}
$qc($hi);
for($7h=0;$7h<$gi;$7h+=2)
{
this._Uc($hi[$7h],$8h,$hi[$7h+1]-$hi[$7h]+1,1);
}
}
}
function $ii($ji,$ki,$li,$mi,$ni,$oi)
{
var $pi=$li>>1;
var $qi=$mi>>1;
var $ri=($li&1)|(($mi&1)<<16);
var $si=$ji+$pi;
var $ti=$ki+$qi;
var $ui=0;
var $vi=$qi;
var $wi=$ui;
var $xi=$vi;
var $yi=($pi*$pi)<<1;
var $zi=$yi<<1;
var $Ai=($qi*$qi)<<1;
var $Bi=$Ai<<1;
var $Ci=($yi>>1)*(1-($qi<<1))+$Ai;
var $Di=($Ai>>1)-$yi*(($qi<<1)-1);
var $Ei,$Fi,$Gi,$Hi;
var $Ii=$ni%360.0;
var $Ji=$oi%360.0;
var $Ki=(1<<(Math.floor($Ii/180.0)<<3))|(2<<(Math.floor($Ji/180.0)<<3))|(($Ii>=$Ji)<<16);
var $Li=$_("$int",0,new Array($qi+1,null),0);
var $Mi=$_("$int",0,new Array($qi+1,null),0);
$Ii*=$Ni;
$Ji*=$Ni;
$Ei=$si+Math.round($pi*Math.cos($Ii));
$Fi=$ti+Math.round(-$qi*Math.sin($Ii));
$Gi=$si+Math.round($pi*Math.cos($Ji));
$Hi=$ti+Math.round(-$qi*Math.sin($Ji));
$Oi($Li,$si,$ti,$Ei,$Fi);
$Oi($Mi,$si,$ti,$Gi,$Hi);
while($vi>0)
{
if($Ci<0)
{
$Ci+=$Ai*(($ui<<1)+3);
$Di+=$Bi*(++$ui);
}
else
if($Di<0)
{
$Ci+=$Ai*(($ui<<1)+3)-$zi*($vi-1);
$wi=$ui;
$Di+=$Bi*(++$ui)-$yi*((($vi--)<<1)-3);
this._Zc($wi,$vi,$xi,$si,$ti,$ri,$Li,$Mi,$Ki);
$xi=$vi;
}
else
{
$Di-=$yi*(($vi<<1)-3);
$Ci-=$zi*(--$vi);
if($vi!=0&&($Li[$vi]!=$Li[$vi-1]||$Mi[$vi]!=$Mi[$vi-1]))
{
this._Zc($ui,$vi,$xi,$si,$ti,$ri,$Li,$Mi,$Ki);
$wi=$ui;
$xi=$vi;
}
}
}
this._Zc($ui,0,$xi,$si,$ti,$ri,$Li,$Mi,$Ki);
if(($ri>>16)!=0)
{
if(($Ki>>16)!=0)
{
var $Pi=($Fi<=$ti||$Hi>$ti)?($si-$ui):$si;
this._Uc($Pi,$ti,$ui+$si-$Pi+($ri&65535),1);
}
else
if(($Ki&1)!=0&&$Hi>$ti)
{
this._Uc($si-$ui,$ti,$ui,1);
}
}
}
function $Qi($Ud,$ld,$Qg)
{
this._Ec._Q("<div style=\"position:absolute;white-space:nowrap;"+"left:"+$ld+"px;"+"top:"+$Qg+"px;"+"color:"+this._Qc+";"+this._Cc._Ub()+"\">"+$Ud+"</div>");
}
function $Ri($Ud,$ld,$Qg,$Si,$Ti)
{
this._Ec._Q("<div style=\"position:absolute;overflow:hidden;"+"left:"+$ld+"px;"+"top:"+$Qg+"px;"+"width:"+$Si+"px;"+"text-align:"+$Ti+";"+"color:"+this._Qc+";"+this._Cc._Ub()+"\">"+$Ud+"</div>");
}
function $Ui($Vi,$ld,$Qg,$Wi)
{
this._Ec._Q("<div style=\""+$pf($ld,$Qg)+"\">"+"<img src=\""+$Vi+"\""+($Wi!=null?(" "+$Wi):"")+"></div>");
}
function $Xi($Vi,$ld,$Qg,$Rg,$Sg,$Yi)
{
this._Ec._Q("<div style=\""+$tf($ld,$Qg,$Rg,$Sg)+"\">"+"<img src=\""+$Vi+"\" width=\""+$Rg+"\" height=\""+$Sg+"\""+($Yi!=null?(" "+$Yi):"")+"></div>");
}
function $Zi($Vi,$ld,$Qg,$0i,$1i,$2i,$3i,$4i)
{
this._Ec._Q("<div style=\""+$tf($ld,$Qg,$2i,$3i)+$Hf+"\">"+"<img src=\""+$Vi+"\""+($4i!=null?(" "+$4i):"")+"style=\""+$qf+"left: -"+$0i+"px;"+"top: -"+$1i+"px;"+"\"></div>");
}
function $5i($Vi,$ld,$Qg,$Rg,$Sg,$6i,$7i,$8i,$9i,$_i)
{
this._Ec._Q("<div style=\""+$tf($ld,$Qg,$8i,$9i)+$Hf+"\">"+"<img src=\""+$Vi+"\" width=\""+$Rg+"\" height=\""+$Sg+"\""+($_i!=null?(" "+$_i):"")+"style=\""+$qf+"left: -"+$6i+";"+"top: -"+$7i+";"+"\"></div>");
}
function $aj()
{
this._Ec._U();
if(this._Ic!=null)
{
this._Ic._8("");
}
}
function $bj()
{
if(this._Ic!=null)
{
this._Ic._8("");
}
this._Kc();
}
function $cj($dj,$le,$ej,$fj,$gj,$hj,$ij,$jj,$kj)
{
var $lj=$fj+$dj+($hj&65535);
var $mj=$ej-$le;
var $nj,$oj,$pj,$qj;
if($mj==0)
{
$mj=1;
}
var $rj=$fj-$dj;
if(($kj&16711680)!=0)
{
$nj=$gj-$le-$mj;
if(($kj&255)!=0)
{
if(($kj&2)!=0)
{
$oj=Math.max($rj,$jj[$le]);
$qj=$lj-$oj;
if($qj>0)
{
this._Uc($oj,$nj,$qj,$mj);
}
}
if(($kj&1)!=0)
{
$pj=Math.min($lj,$ij[$le]);
$qj=$pj-$rj;
if($qj>0)
{
this._Uc($rj,$nj,$qj,$mj);
}
}
}
else
{
this._Uc($rj,$nj,$lj-$rj,$mj);
}
$nj=$gj+$le+($hj>>16);
if(($kj&65280)!=0)
{
if(($kj&256)!=0)
{
$oj=Math.max($rj,$ij[$le]);
$qj=$lj-$oj;
if($qj>0)
{
this._Uc($oj,$nj,$qj,$mj);
}
}
if(($kj&512)!=0)
{
$pj=Math.min($lj,$jj[$le]);
$qj=$pj-$rj;
if($qj>0)
{
this._Uc($rj,$nj,$qj,$mj);
}
}
}
else
{
this._Uc($rj,$nj,$lj-$rj,$mj);
}
}
else
{
if(($kj&255)!=0)
{
if(($kj&2)!=0)
{
$oj=Math.max($rj,$jj[$le]);
}
else
{
$oj=$rj;
}
if(($kj&1)!=0)
{
$pj=Math.min($lj,$ij[$le]);
}
else
{
$pj=$lj;
}
$nj=$gj-$le-$mj;
$qj=$pj-$oj;
if($qj>0)
{
this._Uc($oj,$nj,$qj,$mj);
}
}
if(($kj&65280)!=0)
{
if(($kj&256)!=0)
{
$oj=Math.max($rj,$ij[$le]);
}
else
{
$oj=$rj;
}
if(($kj&512)!=0)
{
$pj=Math.min($lj,$jj[$le]);
}
else
{
$pj=$lj;
}
$nj=$gj+$le+($hj>>16);
$qj=$pj-$oj;
if($qj>0)
{
this._Uc($oj,$nj,$qj,$mj);
}
}
}
}
function $sj($tj,$uj,$Nb,$Ob,$vj,$wj,$xj,$yj)
{
var $zj=$tj-$Nb;
var $Aj=$tj+$Nb+$xj-$vj;
var $Bj=$uj-$Ob;
var $Cj=$uj+$Ob+$yj-$wj;
var $Dj=$vj;
if($Aj>$zj+$Dj)
{
this._Uc($Aj,$Bj,$Dj,$wj);
this._Uc($Aj,$Cj,$Dj,$wj);
}
else
{
$Dj=$Aj-$zj+$Dj;
}
this._Uc($zj,$Bj,$Dj,$wj);
this._Uc($zj,$Cj,$Dj,$wj);
}
function $Ej($Q)
{
this._0c=$Q;
var $Fj=$Q._1c();
var $Gj=$Q._2c();
var $Hj=$Q._3c();
$Ic($Ic($Fc(this,'_Wc',$Fj),'_4c','_Wc'),'drawLine','_Wc');
$Ic($Ic($Fc(this,'_5c',$Gj),'_6c','_5c'),'drawSquare','_5c');
$Ic($Ic($Fc(this,'_Yc',$Hj),'_7c','_Yc'),'drawOval','_Yc');
}

_CL=new $9c(new Array("jazzy.dom.canvas.Canvas"),new Array());
var $2g=_CL;

_CL._z=
function()
{
}


function $Ij($w)
{
$w.reflush=$bj;
$w.drawOval=$Bh;
$w.fillArc=$ii;
$w.drawRegion2=$5i;
$w.fillSquare=$Hh;
$w.clear=$aj;
$w.drawLine=$vh;
$w.setPrintable=$mh;
$w.drawString=$Qi;
$w.drawString2=$Ri;
$w.drawImage=$Ui;
$w.setColor=$dh;
$w.drawSquare=$Ah;
$w.flush=$lh;
$w.fillPolygon=$3h;
$w.drawLines=$Gh;
$w.drawRegion=$Zi;
$w.drawEllipse=$Jh;
$w.setFont=$ch;
$w.drawImage2=$Xi;
$w.fillOval=$Kh;
$w.drawPolygon=$Ih;
$w.__=$8g;
$w._8c=$8g;
$w._9c=$9g;
$w.__c=$9g;
$w._ad=$_g;
$w._bd=$_g;
$w._cd=$ah;
$w._dd=$ah;
$w._ed=$ch;
$w._fd=$ch;
$w._Mc=$dh;
$w._gd=$dh;
$w._Uc=$eh;
$w._Vc=$eh;
$w._hd=$fh;
$w._id=$fh;
$w._Kc=$lh;
$w._Lc=$lh;
$w._Nc=$mh;
$w._jd=$mh;
$w._Wc=$vh;
$w._4c=$vh;
$w._5c=$Ah;
$w._6c=$Ah;
$w._Yc=$Bh;
$w._7c=$Bh;
$w._Xc=$Gh;
$w._kd=$Gh;
$w._ld=$Hh;
$w._md=$Hh;
$w._nd=$Ih;
$w._od=$Ih;
$w._pd=$Jh;
$w._qd=$Jh;
$w._rd=$Kh;
$w._sd=$Kh;
$w._td=$3h;
$w._ud=$3h;
$w._vd=$ii;
$w._wd=$ii;
$w._xd=$Qi;
$w._yd=$Qi;
$w._zd=$Ri;
$w._Ad=$Ri;
$w._Bd=$Ui;
$w._Cd=$Ui;
$w._Dd=$Xi;
$w._Ed=$Xi;
$w._Fd=$Zi;
$w._Gd=$Zi;
$w._Hd=$5i;
$w._Id=$5i;
$w._U=$aj;
$w._Jd=$aj;
$w._Kd=$bj;
$w._Ld=$bj;
$w._Zc=$cj;
$w._Md=$cj;
$w._Nd=$sj;
$w._Od=$sj;
$w._Hc=$Ej;
$w._Pd=$Ej;
$w._Dc=0;
$w._Qc=null;
$w._Rc=null;
$w._Tc=false;
$w._Fc=null;
$w._Ic=null;
$w._Ec=null;
$w._Cc=null;
$w._0c=null;
$w._Sc=null;
$w._Oc=false;
$w._Pc=null;
}
_CL._t=$Ij;

_CL._B=
function()
{
$Ni=Math.PI/180.0;
}


function $5g()
{
}


function aryanCanvas($4g)
{
$2b(this,$3g);
this._temp_($4g);
}
var $Ni=null;
_CL._Gc=null;
$g(null,0);

function $Jj($ld,$Qg,$Rg,$Sg)
{
if($Rg<=0||$Sg<=0)
return;
var $Kj=("%%"+this._Qc+";"+$ld+";"+$Qg+";"+$Rg+";"+$Sg+";");
var $Lj=$Kj.replace($ih,this._Sc);
if(this._Oc)
{
if(this._Pc==null)
{
$Lj=($Lj).replace($jh,"");
}
else
{
$Lj=($Lj).replace($jh,this._Pc);
}
}
this._Ec._Q($Lj);
$Mj++;
$Nj+=$Rg*$Sg;
}
function $Oj($zg,$Ag,$Pj,$Qj)
{
if($Pj<=0||$Qj<=0)
return;
this._Ec._Q("%%"+this._Qc+";"+$zg+";"+$Ag+";"+$Pj+";"+$Qj+";");
$Mj++;
$Nj+=$Pj*$Qj;
}
function $Rj()
{
if(this._Ic!=null)
{
if($Re)
this._Ic._Ab(this._hd());
else
this._Ic._Ab(this._Ec._W());
}
this._Ec._U();
}
function $Sj()
{
if($Re)
document.write(this._hd());
else
document.write(this._Ec._W());
this._Ec._U();
}
function $Tj()
{
if($sh!=null)
return;
$sh=$Jj;
$ph=$Oj;
$6g=$Rj;
$7g=$Sj;
}
function $Oi($Uj,$Vj,$Wj,$Xj,$Yj)
{
var $Zj=Math.abs($Xj-$Vj);
var $0j=Math.abs($Yj-$Wj);
var $1j=$Vj;
var $2j=$Wj;
var $3j=($Vj>$Xj)?-1:1;
var $4j=($Wj>$Yj)?-1:1;
var $5j;
var $6j=0;
if($Zj>=$0j)
{
var $7j=$0j<<1;
var $8j=$7j-($Zj<<1);
$5j=$7j-$Zj;
while($Zj>0)
{
--$Zj;
if($5j>0)
{
$Uj[$6j++]=$1j;
$2j+=$4j;
$5j+=$8j;
}
else
{
$5j+=$7j;
}
$1j+=$3j;
}
}
else
{
var $9j=$Zj<<1;
var $_j=$9j-($0j<<1);
$5j=$9j-$0j;
while($0j>0)
{
--$0j;
$2j+=$4j;
$Uj[$6j++]=$1j;
if($5j>0)
{
$1j+=$3j;
$5j+=$_j;
}
else
{
$5j+=$9j;
}
}
}
var $ak=$Uj.length;
for(var $bk=$ak-$6j;$bk>0;$bk--)
{
$Uj[$ak-$bk]=$1j;
}
}


var $ih=/%%([^;]+);([^;]+);([^;]+);([^;]+);([^;]+);/g;
var $jh=/background-color:none;/g;
var $kh="background-color:#FFFFFF;filter:alpha(opacity=0);";
var $ck="left:$2px;top:$3px;width:$4px;height:$5px;";
var $dk=$Jf+$Hf+$qf+$Bf+"$1;left:$2;top:$3;width:$4;height:$5;";
var $ek=$dk+$Kf+"\n";
var $fk=$dk+$Lf+"$4"+$Mf+"$1"+$Kf+"\n";
var $rh=$Jf+$ck+$qf+"clip:rect(0px,$4px,$5px,0px);"+$Bf+"$1;"+$Kf;
var $uh=$Jf+$ck+$qf+"clip:rect(0px,$4px,$5px,0px);"+$Bf+"$1;"+$Hf+$Kf;
var $qh=$Jf+$ck+$qf+$Lf+"$5"+$Mf+"$1;"+"clip:rect(0px,$4px,$5px,0px);"+$Bf+"$1;"+$Kf;
var $th=$Jf+$ck+$qf+$Lf+"$5"+$Mf+"$1;"+"clip:rect(0px,$4px,$5px,0px);"+$Bf+"$1;"+$Hf+$Kf;
var $sh=null;
var $ph=null;
var $6g=null;
var $7g=null;
var $Mj=0;
var $Nj=0;


{
{
$ec(function(){$Tj()}.bind(this));
}
}


$g(null,0);





_CL=new $9c(new Array("jazzy.dom.canvas.Stroke"),new Array());
var $gk=_CL;

_CL._z=
function()
{
}

_CL._B=
function()
{
}


$g(null,0);

function $hk($wh,$xh,$yh,$zh)
{
var $ik,$jk,$kk,$lk;
if($wh>$yh)
{
$jk=$wh;
$lk=$xh;
$ik=$yh;
$kk=$zh;
}
else
{
$ik=$wh;
$kk=$xh;
$jk=$yh;
$lk=$zh;
}
var $mk=($jk-$ik);
var $nk=(Math.abs($lk-$kk));
var $Rh=$ik;
var $Sh=$kk;
var $ok=($kk>$lk)?-1:1;
var $pk=this._Dc;
if($mk>=$nk)
{
var $qk=$pk;
if($mk>0&&$pk-3>0)
{
$qk=($pk*$mk*Math.sqrt(1+$nk*$nk/($mk*$mk))-$mk-($pk>>1)*$nk)/$mk;
$qk=(!(($pk-4)!=0)?Math.ceil($qk):Math.round($qk))+1;
}
else
{
$qk=$pk;
}
var $rk=Math.ceil($pk/2);
var $sk=$nk<<1;
var $tk=$sk-($mk<<1);
var $uk=$sk-$mk;
var $vk=$Rh;
while($mk>0)
{
--$mk;
++$Rh;
if($uk>0)
{
this._Uc($vk,$Sh,$Rh-$vk+$rk,$qk);
$Sh+=$ok;
$uk+=$tk;
$vk=$Rh;
}
else
{
$uk+=$sk;
}
}
this._Uc($vk,$Sh,$jk-$vk+$rk+1,$qk);
}
else
{
var $wk=$pk;
if($pk-3>0)
{
$wk=($pk*$nk*Math.sqrt(1+$mk*$mk/($nk*$nk))-($pk>>1)*$mk-$nk)/$nk;
$wk=(!(($pk-4)!=0)?Math.ceil($wk):Math.round($wk))+1;
}
var $xk=Math.round($pk/2);
var $yk=$mk<<1;
var $zk=$yk-($nk<<1);
var $Ak=$yk-$nk;
var $Bk=$Sh;
if($lk<=$kk)
{
++$xk;
while($nk>0)
{
--$nk;
if($Ak>0)
{
this._Uc($Rh++,$Sh,$wk,$Bk-$Sh+$xk);
$Sh+=$ok;
$Ak+=$zk;
$Bk=$Sh;
}
else
{
$Sh+=$ok;
$Ak+=$yk;
}
}
this._Uc($jk,$lk,$wk,$Bk-$lk+$xk);
}
else
{
while($nk>0)
{
--$nk;
$Sh+=$ok;
if($Ak>0)
{
this._Uc($Rh++,$Bk,$wk,$Sh-$Bk+$xk);
$Ak+=$zk;
$Bk=$Sh;
}
else
{
$Ak+=$yk;
}
}
}
this._Uc($jk,$Bk,$wk,$lk-$Bk+$xk+1);
}
}
function $Ck($Dk,$8h,$Ek,$Fk)
{
this._Wc($Dk,$8h,$Dk+$Ek,$8h);
this._Wc($Dk+$Ek,$8h,$Dk+$Ek,$8h+$Fk);
this._Wc($Dk,$8h+$Fk,$Dk+$Ek,$8h+$Fk);
this._Wc($Dk,$8h,$Dk,$8h+$Fk);
}
function $Gk($Hk,$Ik,$Jk,$Kk)
{
var $Lk=(++$Jk)>>1;
var $Mk=(++$Kk)>>1;
var $Nk=$Jk&1;
var $Ok=$Kk&1;
var $Pk=$Ok^1;
var $Qk=$Hk+$Lk;
var $Rk=$Ik+$Mk;
var $Sk=0;
var $Tk=$Mk;
var $Uk=($Lk*$Lk)<<1;
var $Vk=$Uk<<1;
var $Wk=($Mk*$Mk)<<1;
var $Xk=$Wk<<1;
var $Yk=($Uk>>1)*(1-($Mk<<1))+$Wk;
var $Zk=($Wk>>1)-$Uk*(($Mk<<1)-1);
var $0k=this._Dc;
if($0k-4<0&&(!($0k-2!=0)||$Jk-51>0&&$Kk-51>0))
{
var $1k=0;
var $2k=$Mk;
var $3k,$4k,$5k;
while($Tk>0)
{
if($Yk<0)
{
$Yk+=$Wk*(($Sk<<1)+3);
$Zk+=$Xk*(++$Sk);
}
else
if($Zk<0)
{
$Yk+=$Wk*(($Sk<<1)+3)-$Vk*($Tk-1);
$Zk+=$Xk*(++$Sk)-$Uk*((($Tk--)<<1)-3);
$3k=$Sk-$1k;
$4k=$2k-$Tk;
if($3k-1!=0)
{
$5k=$3k+1+($0k&1);
$4k=$0k;
}
else
if($4k-1!=0)
{
$5k=$0k;
$4k+=1+($0k&1);
}
else
{
$5k=$4k=$0k;
}
this._Nd($Qk,$Rk,$Sk-1,$2k,$5k,$4k,$Nk,$Ok);
$1k=$Sk;
$2k=$Tk;
}
else
{
$Zk-=$Uk*(($Tk<<1)-3);
$Yk-=$Vk*(--$Tk);
}
}
this._Uc($Qk-$Lk,$Rk-$2k,$0k,($2k<<1)+$Ok);
this._Uc($Qk+$Lk+$Nk-$0k,$Rk-$2k,$0k,($2k<<1)+$Ok);
}
else
{
var $6k=($Jk-($0k<<1))>>1;
var $7k=($Kk-($0k<<1))>>1;
var $8k=0;
var $9k=$7k;
var $_k=($6k*$6k)<<1;
var $al=$_k<<1;
var $bl=($7k*$7k)<<1;
var $cl=$bl<<1;
var $dl=($_k>>1)*(1-($7k<<1))+$bl;
var $el=($bl>>1)-$_k*(($7k<<1)-1);
var $fl=$Lb("$int",new Array(0,null));
var $gl=$Lb("$int",new Array($Mk,null));
var $hl=$Lb("$int",new Array($7k-1,null));
while($Tk>0)
{
if($Yk<0)
{
$fl[$fl.length]=$Sk;
$gl[$gl.length]=$Tk;
$Yk+=$Wk*(($Sk<<1)+3);
$Zk+=$Xk*(++$Sk);
}
else
if($Zk<0)
{
$fl[$fl.length]=$Sk;
$Yk+=$Wk*(($Sk<<1)+3)-$Vk*($Tk-1);
$Zk+=$Xk*(++$Sk)-$Uk*((($Tk--)<<1)-3);
$gl[$gl.length]=$Tk;
}
else
{
$Zk-=$Uk*(($Tk<<1)-3);
$Yk-=$Vk*(--$Tk);
}
if($9k>0)
{
if($dl<0)
{
$dl+=$bl*(($8k<<1)+3);
$el+=$cl*(++$8k);
$hl[$hl.length]=$9k-1;
}
else
if($el<0)
{
$dl+=$bl*(($8k<<1)+3)-$al*($9k-1);
$el+=$cl*(++$8k)-$_k*((($9k--)<<1)-3);
$hl[$hl.length]=$9k-1;
}
else
{
$el-=$_k*(($9k<<1)-3);
$dl-=$al*(--$9k);
$hl[$hl.length-1]--;
}
}
}
var $il=-$Nk;
var $jl=$Mk;
var $kl=$hl[0];
var $ll=$fl.length;
var $ml,$nl;
for(var $ol=0;$ol<$ll;$ol++)
{
if((typeof $hl[$ol] != "undefined"))
{
if($hl[$ol]<$kl||$gl[$ol]<$jl)
{
$Sk=$fl[$ol];
this._Nd($Qk,$Rk,$Sk,$jl,$Sk-$il,$jl-$kl,$Nk,$Ok);
$il=$Sk;
$jl=$gl[$ol];
$kl=$hl[$ol];
}
}
else
{
$Sk=$fl[$ol];
this._Uc($Qk-$Sk,$Rk-$jl,1,($jl<<1)+$Ok);
this._Uc($Qk+$il+$Nk,$Rk-$jl,1,($jl<<1)+$Ok);
$il=$Sk;
$jl=$gl[$ol];
}
}
this._Uc($Qk-$Lk,$Rk-$jl,1,($jl<<1)+$Ok);
this._Uc($Qk+$il+$Nk,$Rk-$jl,1,($jl<<1)+$Ok);
}
}
function $pl()
{
$1c(this,$ql);
$0b(this,$rl);
}
function $sl()
{
return $ql._Rd;
}
function $tl()
{
return $ql._Sd;
}
function $ul()
{
return $ql._Td;
}

_CL=new $9c(new Array("jazzy.dom.canvas.Stroke2D"),new Array("jazzy.dom.canvas.Stroke"));
var $ql=_CL;

_CL._z=
function()
{
$ql._Rd=null;
$ql._Sd=null;
$ql._Td=null;
}


function $vl($w)
{
$w._1c=$sl;
$w._Ud=$sl;
$w._3c=$tl;
$w._Vd=$tl;
$w._2c=$ul;
$w._Wd=$ul;
}
_CL._t=$vl;

_CL._B=
function()
{
{
$ql._Rd=$hk;
$ql._Td=$Ck;
$ql._Sd=$Gk;
}
}


function $rl()
{
}


$g(null,0);

function $wl($wh,$xh,$yh,$zh)
{
var $_f=this._Dc>=1?this._Dc:1;
var $xl,$yl,$zl,$Al;
if($wh>$yh)
{
$yl=$wh;
$Al=$xh;
$xl=$yh;
$zl=$zh;
}
else
{
$xl=$wh;
$zl=$xh;
$yl=$yh;
$Al=$zh;
}
var $Bl=($yl-$xl)/$_f;
var $Cl=(Math.abs($Al-$zl))/$_f;
var $ui=$xl;
var $vi=$zl;
var $Dl=($zl>$Al)?-$_f:$_f;
var $El=true;
if($Bl>=$Cl)
{
var $9j=$Cl<<1;
var $_j=$9j-($Bl<<1);
var $Fl=$9j-$Bl;
while($Bl>0)
{
--$Bl;
if($El)
{
this._Uc($ui,$vi,$_f,$_f);
}
$El=!$El;
if($Fl>0)
{
$vi+=$Dl;
$Fl+=$_j;
}
else
{
$Fl+=$9j;
}
$ui+=$_f;
}
}
else
{
var $Gl=$Bl<<1;
var $Hl=$Gl-($Cl<<1);
var $Il=$Gl-$Cl;
while($Cl>0)
{
--$Cl;
if($El)
{
this._Uc($ui,$vi,$_f,$_f);
}
$El=!$El;
$vi+=$Dl;
if($Il>0)
{
$ui+=$_f;
$Il+=$Hl;
}
else
{
$Il+=$Gl;
}
}
if($El)
{
this._Uc($ui,$vi,1,1);
}
}
}
function $Jl($Dk,$8h,$Ek,$Fk)
{
this._Wc($Dk,$8h,$Dk+$Ek,$8h);
this._Wc($Dk+$Ek,$8h,$Dk+$Ek,$8h+$Fk);
this._Wc($Dk,$8h+$Fk,$Dk+$Ek,$8h+$Fk);
this._Wc($Dk,$8h,$Dk,$8h+$Fk);
}
function $Kl($Hk,$Ik,$Jk,$Kk)
{
var $Lk=(++$Jk)>>1;
var $Mk=(++$Kk)>>1;
var $Nk=$Jk&1;
var $Ok=$Kk&1;
var $Pk=$Ok^1;
var $Qk=$Hk+$Lk;
var $Rk=$Ik+$Mk;
var $Sk=0;
var $Tk=$Mk;
var $Ll=0;
var $Ml=$Mk;
var $Nl=($Lk*$Lk)<<1;
var $Ol=$Nl<<1;
var $Pl=($Mk*$Mk)<<1;
var $Ql=$Pl<<1;
var $Rl=($Nl>>1)*(1-($Mk<<1))+$Pl;
var $Sl=($Pl>>1)-$Nl*(($Mk<<1)-1);
var $Tl=true;
while($Tk>0)
{
if($Rl<0)
{
$Rl+=$Pl*(($Sk<<1)+3);
$Sl+=$Ql*(++$Sk);
}
else
if($Sl<0)
{
$Rl+=$Pl*(($Sk<<1)+3)-$Ol*($Tk-1);
$Sl+=$Ql*(++$Sk)-$Nl*((($Tk--)<<1)-3);
}
else
{
$Sl-=$Nl*(($Tk<<1)-3);
$Rl-=$Ol*(--$Tk);
}
if($Tl&&$Tk>=$Pk)
{
this._Nd($Qk,$Rk,$Sk,$Tk,1,1,$Nk,$Ok);
}
$Tl=!$Tl;
}
}
function $Ul()
{
$1c(this,$Vl);
$0b(this,$Wl);
}
function $Xl()
{
return $Vl._Yd;
}
function $Yl()
{
return $Vl._Zd;
}
function $Zl()
{
return $Vl._0d;
}

_CL=new $9c(new Array("jazzy.dom.canvas.StrokeDotted"),new Array("jazzy.dom.canvas.Stroke"));
var $Vl=_CL;

_CL._z=
function()
{
$Vl._Yd=null;
$Vl._Zd=null;
$Vl._0d=null;
}


function $0l($w)
{
$w._1c=$Xl;
$w._1d=$Xl;
$w._3c=$Yl;
$w._2d=$Yl;
$w._2c=$Zl;
$w._3d=$Zl;
}
_CL._t=$0l;

_CL._B=
function()
{
{
$Vl._Yd=$wl;
$Vl._0d=$Jl;
$Vl._Zd=$Kl;
}
}


function $Wl()
{
}


$g(null,0);

function $1l($wh,$xh,$yh,$zh)
{
var $_f=1;
var $xl,$yl,$zl,$Al;
if($wh>$yh)
{
$yl=$wh;
$Al=$xh;
$xl=$yh;
$zl=$zh;
}
else
{
$xl=$wh;
$zl=$xh;
$yl=$yh;
$Al=$zh;
}
var $Bl=($yl-$xl)/$_f;
var $Cl=(Math.abs($Al-$zl))/$_f;
var $ui=$xl;
var $vi=$zl;
var $Dl=($zl>$Al)?-$_f:$_f;
if($Bl>=$Cl)
{
var $2l=$Cl<<1;
var $3l=$2l-($Bl<<1);
var $4l=$2l-$Bl;
var $5l=$ui;
while($Bl>0)
{
--$Bl;
$ui+=$_f;
if($4l>0)
{
this._Uc($5l,$vi,$ui-$5l+$_f-1,$_f);
$vi+=$Dl;
$4l+=$3l;
$5l=$ui;
}
else
{
$4l+=$2l;
}
}
this._Uc($5l,$vi,$yl-$5l+$_f,$_f);
}
else
{
var $Gl=$Bl<<1;
var $Hl=$Gl-($Cl<<1);
var $Il=$Gl-$Cl;
var $6l=$vi;
if($Al<=$zl)
{
while($Cl>0)
{
--$Cl;
if($Il>0)
{
this._Uc($ui,$vi,$_f,$6l-$vi+$_f);
$ui+=$_f;
$vi+=$Dl;
$Il+=$Hl;
$6l=$vi;
}
else
{
$vi+=$Dl;
$Il+=$Gl;
}
}
this._Uc($yl,$Al,$_f,$6l-$Al+$_f);
}
else
{
while($Cl>0)
{
--$Cl;
$vi+=$Dl;
if($Il>0)
{
this._Uc($ui,$6l,$_f,$vi-$6l+$_f-1);
$ui+=$_f;
$Il+=$Hl;
$6l=$vi;
}
else
{
$Il+=$Gl;
}
}
this._Uc($yl,$6l,$_f,$Al-$6l+$_f);
}
}
}
function $7l($Dk,$8h,$Ek,$Fk)
{
this._Uc($Dk,$8h,$Ek,1);
this._Uc($Dk+$Ek,$8h,1,$Fk);
this._Uc($Dk,$8h+$Fk,$Ek+1,1);
this._Uc($Dk,$8h+1,1,$Fk-1);
}
function $8l($Hk,$Ik,$Jk,$Kk)
{
var $Lk=(++$Jk)>>1;
var $Mk=(++$Kk)>>1;
var $Nk=$Jk&1;
var $Ok=$Kk&1;
var $9l=$Hk+$Lk;
var $_l=$Ik+$Mk;
var $am=0;
var $bm=$Mk;
var $cm=0;
var $6l=$Mk;
var $dm=($Lk*$Lk)<<1;
var $em=$dm<<1;
var $fm=($Mk*$Mk)<<1;
var $gm=$fm<<1;
var $hm=($dm>>1)*(1-($Mk<<1))+$fm;
var $im=($fm>>1)-$dm*(($Mk<<1)-1);
var $jm;
var $km;
while($bm>0)
{
if($hm<0)
{
$hm=$hm+$fm*(($am<<1)+3);
$im=$im+$gm*(++$am);
}
else
if($im<0)
{
$hm=$hm+$fm*(($am<<1)+3)-$em*($bm-1);
$im=$im+$gm*(++$am)-$dm*((($bm--)<<1)-3);
$jm=$am-$cm;
$km=$6l-$bm;
if(($jm&2)!=0&&($km&2)!=0)
{
this._Nd($9l,$_l,$am-2,$bm+2,1,1,$Nk,$Ok);
this._Nd($9l,$_l,$am-1,$bm+1,1,1,$Nk,$Ok);
}
else
{
this._Nd($9l,$_l,$am-1,$6l,$jm,$km,$Nk,$Ok);
}
$cm=$am;
$6l=$bm;
}
else
{
$im=$im-$dm*(($bm<<1)-3);
$hm=$hm-$em*(--$bm);
}
}
$jm=$Lk-$cm+1;
$km=($6l<<1)+$Ok;
$bm=$_l-$6l;
this._Uc($9l-$Lk,$bm,$jm,$km);
this._Uc($9l+$cm+$Nk-1,$bm,$jm,$km);
}
function $lm()
{
$1c(this,$mm);
$0b(this,$nm);
}
function $om()
{
return $mm._5d;
}
function $pm()
{
return $mm._6d;
}
function $qm()
{
return $mm._7d;
}

_CL=new $9c(new Array("jazzy.dom.canvas.StrokePlain"),new Array("jazzy.dom.canvas.Stroke"));
var $mm=_CL;

_CL._z=
function()
{
$mm._5d=null;
$mm._6d=null;
$mm._7d=null;
}


function $rm($w)
{
$w._1c=$om;
$w._8d=$om;
$w._3c=$pm;
$w._9d=$pm;
$w._2c=$qm;
$w.__d=$qm;
}
_CL._t=$rm;

_CL._B=
function()
{
{
$mm._5d=$1l;
$mm._7d=$7l;
$mm._6d=$8l;
if($2g._Gc==null)
{
$2g._Gc=new $lm();
}
}
}


function $nm()
{
}


$g(null,0);$f("cn.monadic.demo.tile2d.PRG_LEC"+' flush functions');

function $sm()
{
var $tm=$b("$sm() in "+"cn.monadic.demo.tile2d.PRG_LEC"+": 32");
$1c(this,$um);
$0b(this,$vm);
this._be=($vc()-0);
if(this._be>0)
this._be*=-1;
return $g(null,$tm);
}
function $wm($xm)
{
var $ym=$b("$wm($xm) in "+"cn.monadic.demo.tile2d.PRG_LEC"+": 39");
$1c(this,$um);
$0b(this,$vm);
if($xm==0)
{
this._be=($vc()-0);
}
else
{
this._be=$xm;
}
if(this._be>0)
this._be*=-1;
return $g(null,$ym);
}
function $zm()
{
var $tm=$b("$zm() in "+"cn.monadic.demo.tile2d.PRG_LEC"+": 54");
this._ce();
var $Am=$Bm*this._be;
if($Am>$Cm)
return $g($Cm,$tm);
else
return $g($Am,$tm);
}
function $Dm($r,$s)
{
var $Em=$b("$Dm($r,$s) in "+"cn.monadic.demo.tile2d.PRG_LEC"+": 66");
return $g($r+this._de($s-$r),$Em);
}
function $Fm($u)
{
var $ym=$b("$Fm($u) in "+"cn.monadic.demo.tile2d.PRG_LEC"+": 71");
if($u<=0)
throw $m(new $Gd("hi must be positive"));
var $Gm,$Hm;
do
{
$Gm=this._ce();
$Hm=$Gm%$u;
}
while(
$Gm-$Hm+($u-1)<0);
return $g($Hm,$ym);
}
function $Im($r,$s)
{
var $Em=$b("$Im($r,$s) in "+"cn.monadic.demo.tile2d.PRG_LEC"+": 86");
return $g($r+($s-$r)*this._ee(),$Em);
}
function $Jm()
{
var $tm=$b("$Jm() in "+"cn.monadic.demo.tile2d.PRG_LEC"+": 91");
var $Km,$Lm;
if(this._be<=0)
{
if(-this._be<1)
this._be=1;
else
this._be=-this._be;
this._fe=this._be;
for($Km=$Mm+7;$Km>=0;--$Km)
{
$Lm=Math.floor(this._be/$Nm);
this._be=Math.floor($Om*(this._be-$Lm*$Nm)-$Lm*$Pm);
if(this._be<0)
this._be+=$Qm;
if($Km<$Mm)
{
this._ge[$Km]=this._be;
}
}
this._he=this._ge[0];
}
$Lm=Math.floor(this._be/$Nm);
this._be=$Om*(this._be-$Lm*$Nm)-$Lm*$Pm;
if(this._be<0)
this._be+=$Qm;
$Lm=Math.floor(this._fe/$Rm);
this._fe=$Sm*(this._fe-$Lm*$Rm)-$Lm*$Tm;
if(this._fe<0)
this._fe+=$Um;
$Km=Math.floor(this._he/$Vm);
$Km=$Km<0?0:$Km;
this._he=this._ge[$Km]-this._fe;
this._ge[$Km]=this._be;
if(this._he<1)
this._he+=$Qm-1;
return $g(this._be,$tm);
}
$f("cn.monadic.demo.tile2d.PRG_LEC"+' create class');
_CL=new $9c(new Array("cn.monadic.demo.tile2d.PRG_LEC"),new Array());
var $um=_CL;
$f("cn.monadic.demo.tile2d.PRG_LEC"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.demo.tile2d.PRG_LEC"+' setup object binder');

function $Wm($w)
{
$w._ee=$zm;
$w._ie=$zm;
$w._je=$Dm;
$w._ke=$Dm;
$w._de=$Fm;
$w._le=$Fm;
$w._me=$Im;
$w._ne=$Im;
$w._ce=$Jm;
$w._oe=$Jm;
$w._fe=0;
$w._he=0;
$w._ge=null;
$w._be=0;
}
_CL._t=$Wm;
$f("cn.monadic.demo.tile2d.PRG_LEC"+' setup static initializer');
_CL._B=
function()
{
$Vm=Math.floor(1+($Qm-1)/$Mm);
$Cm=1.0-1.192092896E-7;
$Bm=1.0/2.147483563E9;
}
$f("cn.monadic.demo.tile2d.PRG_LEC"+' setup object initialize');

function $vm()
{
this._fe=123456789;
this._he=0;
this._ge=$_("$int",0,new Array($Mm,null),0);
this._be=0;
}
$f("cn.monadic.demo.tile2d.PRG_LEC"+' setup funtions');

var $Qm=2147483563;
var $Om=40014;
var $Nm=53668;
var $Pm=12211;
var $Um=2147483399;
var $Sm=40692;
var $Rm=52774;
var $Tm=3791;
var $Mm=32;
var $Vm=0;
var $Cm=null;
var $Bm=null;
$g(null,0);$f("cn.monadic.demo.tile2d.QuantumBoundary"+' flush functions');

function $Xm($Ym,$Zm,$0m)
{
var $1m=$b("$Xm($Ym,$Zm,$0m) in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 75");
$1c(this,$2m);
$0b(this,$3m);
this._qe=1;
this._re=1;
while(this._qe<$Zm)
this._qe=this._qe*2;
while(this._re<$0m)
this._re=this._re*2;
this._se=$Ym;
this._te=new $sm();
return $g(null,$1m);
}
function $4m($xm)
{
var $ym=$b("$4m($xm) in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 91");
this._te=new $wm($xm);
return $g(null,$ym);
}
function $5m($6m)
{
var $ym=$b("$5m($6m) in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 99");
this._ue=$6m;
this._ve();
return $g(null,$ym);
}
function $7m()
{
var $tm=$b("$7m() in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 108");
return $g(this._ue,$tm);
}
function $8m($ke)
{
var $ym=$b("$8m($ke) in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 116");
return $g(this._te._de($ke),$ym);
}
function $9m()
{
var $tm=$b("$9m() in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 121");
if(this._ue._xe>this._re)
throw $m(new $Gd("Error, Working Space too small"));
var $_m=Math.floor(this._ue._ye/(this._re*this._qe))+2;
if($_m==1)
$_m=2;
this._ze=this._se*$_m;
this._Ae=$_("$int",0,new Array(this._ze,null),0);
this._Be=$_("$int",0,new Array(this._ze,null),0);
this._Ce=$_("$int",0,new Array(this._ze,null),0);
this._De=$_("$int",0,new Array(this._ze,null),0);
this._Ee=$_("$int",0,new Array(this._ze,null),0);
this._Ae[0]=this._re;
this._Ce[0]=0;
for(var $p=0;$p<this._ue._Fe.length;$p++)
{
if(this._ue._Fe[$p]._He*this._Ie<this._re&&this._ue._Fe[$p]._Je*this._Ie<this._qe)
{
this._ue._Fe[$p]._Ke=true;
}
}
for(var $jb=1;$jb<this._Ae.length;$jb++)
{
if($jb%$_m==0)
{
this._Ae[$jb]=Math.floor(this._Ae[$jb-1]/2);
}
else
{
this._Ae[$jb]=this._Ae[$jb-1];
}
this._Ce[$jb]=this._Ce[$jb-1]+this._Ae[$jb-1];
}
this._Le=$_("$int",0,new Array(this._ze,4,16,null),0);
for(var $an=0;$an<this._ze;$an++)
{
var $bn=2;
this._De[$an]=-1;
for(var $cn=0;$cn<16;$cn++)
{
this._Le[$an][$dn][$cn]=$bn;
this._Le[$an][$en][$cn]=$bn*this._Ae[$an];
this._Le[$an][$fn][$cn]=0;
this._Le[$an][$gn][$cn]=0;
$bn=$bn*2;
}
}
return $g(null,$tm);
}
function $hn($O)
{
var $ym=$b("$hn($O) in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 182");
var $Nb=$O._Me;
var $Ob=$O._Ne;
if($O._Ne<0)
$Ob=-$O._Ne;
if($O._Me<this._Ce[$O._Oe])
$Nb=this._Ce[$O._Oe];
if($O._Pe>=this._Ce[$O._Oe]+this._Ae[$O._Oe])
$Nb=this._Ce[$O._Oe]+this._Ae[$O._Oe]-$O._He;
$O._db($Nb,$Ob);
return $g(null,$ym);
}
function $in($O)
{
var $ym=$b("$in($O) in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 203");
if($O._Qe==this._Re)
return $g(null,$ym);
if(this._De[$O._Oe]<0)
{
$O._Se=this._Le[$O._Oe][$en][$O._Te]-this._Le[$O._Oe][$fn][$O._Te];
}
else
{
$O._Se=this._Le[$O._Oe][$en][this._De[$O._Oe]]-this._Le[$O._Oe][$fn][this._De[$O._Oe]];
}
$O._Qe=this._Re;
return $g(null,$ym);
}
function $jn($O)
{
var $ym=$b("$jn($O) in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 233");
if($O._Ue==this._Re)
return $g(null,$ym);
if(this._De[$O._Oe]<0)
{
$O._Ve=this._Ce[$O._Oe];
$O._We=this._Ce[$O._Oe]+this._Ae[$O._Oe];
$O._Xe=0;
$O._Ye=$O._Ze+$O._Je;
$O._0e=this._Ce[$O._Oe];
$O._1e=this._Ce[$O._Oe]+this._Ae[$O._Oe];
$O._2e=0;
$O._3e=$O._Ze+$O._Je/2;
}
else
{
$O._Ve=this._Ce[$O._Oe];
$O._We=this._Ce[$O._Oe]+this._Ae[$O._Oe];
$O._Xe=0;
$O._Ye=this._Le[$O._Oe][$dn][this._De[$O._Oe]];
$O._0e=this._Ce[$O._Oe];
$O._1e=this._Ce[$O._Oe]+this._Ae[$O._Oe];
$O._2e=0;
$O._3e=this._Le[$O._Oe][$dn][this._De[$O._Oe]];
}
for(var $p=0;$p<this._ue._4e;$p++)
{
if($O._5e==$p)
continue;
$O._6e(this._ue._Fe[$p]);
}
$O._Ue=this._Re;
return $g(null,$ym);
}
function $kn($O)
{
var $ym=$b("$kn($O) in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 282");
this._7e($O);
if(this._De[$O._Oe]<0)
{
if(($O._Ve<$O._Me||$O._We>$O._Pe)&&this._te._ee()<this._8e)
{
var $ln=this._te._je($O._Ve,$O._We-$O._He);
$O._db($ln,$O._Ne);
this._Re++;
return $g(null,$ym);
}
if(($O._Xe<$O._Ne)&&this._te._ee()<this._9e)
{
var $mn=this._te._je($O._Xe,$O._Ne);
$O._db($O._Me,$mn);
this._Re++;
return $g(null,$ym);
}
if(($O._Ye>$O._Ze)&&this._te._ee()<this.__e)
{
var $nn=$O._Ye-$O._Je;
if($nn>$O._Ne+$O._Je/4)
$nn=$O._Ne+$O._Je/4;
$O._db($O._Me,this._te._je($O._Ne,$nn));
this._Re++;
}
}
else
{
switch(this._Ee[$O._Oe])
{
case 0:
if($O._Ve<$O._Me&&this._te._ee()<this._af)
{
var $on=this._te._je($O._Ve,$O._Me);
$O._db($on,$O._Ne);
this._Re++;
return $g(null,$ym);
}
break;
case 2:
if($O._We>$O._Pe&&this._te._ee()<this._af)
{
var $pn=this._te._je($O._Me,$O._We-$O._He);
$O._db($pn,$O._Ne);
this._Re++;
return $g(null,$ym);
}
break;
case 3:
if($O._Ye>$O._Ze&&this._te._ee()<this._af)
{
var $qn=this._te._je($O._Ne,$O._Ye-$O._Je);
$O._db($O._Me,$qn);
this._Re++;
return $g(null,$ym);
}
break;
case 1:
if($O._Xe<$O._Ne&&this._te._ee()<this._af)
{
var $rn=this._te._je($O._Xe,$O._Ne);
$O._db($O._Me,$rn);
this._Re++;
return $g(null,$ym);
}
break;
}
if(($O._Ve<$O._Me||$O._We>$O._Pe)&&this._te._ee()<0.5)
{
var $sn=this._te._je($O._Ve,$O._We-$O._He);
$O._db($sn,$O._Ne);
this._Re++;
return $g(null,$ym);
}
if($O._Xe<$O._Ne||$O._Ye>$O._Ze)
{
var $tn=this._te._je($O._Xe,$O._Ye-$O._Je);
$O._db($O._Me,$tn);
this._Re++;
return $g(null,$ym);
}
}
return $g(null,$ym);
}
function $un($O)
{
var $ym=$b("$un($O) in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 417");
for(var $p=0;$p<this._ue._4e;$p++)
{
if($O._5e==$p)
continue;
if(this._ue._Fe[$p]._bf($O))
return $g(false,$ym);
}
return $g(true,$ym);
}
function $vn($wn,$xn)
{
var $Em=$b("$vn($wn,$xn) in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 436");
this._cf();
var $yn=0;
var $zn=0;
for(var $An=0;$An<this._ze;$An++)
{
if(this._De[$An]<0)
{
continue;
}
else
{
this._Ee[$An]=this._te._de(2);
}
$yn=$yn+this._Le[$An][$en][this._De[$An]];
$zn=$yn+this._Le[$An][$fn][this._De[$An]];
}
if($zn==this._ue._ye)
{
return $g(false,$Em);
}
if($yn>0&&$zn/$yn<$wn)
{
return $g(false,$Em);
}
var $Bn=Math.floor(this._ue._ye/$wn)-Math.floor($yn);
var $Cn=1;
while($Cn<=$Bn)
$Cn=$Cn*2;
$Cn=Math.floor($Cn/2);
var $Dn=-1;
var $En=0;
for(var $Fn=0;$Fn<this._ze;$Fn++)
{
if(this._De[$Fn]<0&&this._Be[$Fn]>=0)
{
if(this._Le[$Fn][$en][this._Be[$Fn]]<=$Cn&&this._Le[$Fn][$fn][this._Be[$Fn]]>$En&&this._Le[$Fn][$dn][this._Be[$Fn]]<=this._qe)
{
$Dn=$Fn;
$En=this._Le[$Fn][$fn][this._Be[$Fn]];
}
else
{
}
}
}
if($Dn<0)
{
this._df++;
if(this._df==3)
{
this._df=0;
for(var $Gn=0;$Gn<this._ze;$Gn++)
{
if(this._De[$Gn]>0)
{
var $Hn=this._Le[$Gn][$fn][this._De[$Gn]];
var $In=this._Le[$Gn][$en][this._De[$Gn]];
if((0.0+$Hn)/(0.0+$In)<$wn)
{
this._De[$Gn]=-1;
}
}
}
}
return $g(false,$Em);
}
this._De[$Dn]=this._Be[$Dn];
if($xn&&this._Le[$Dn][$fn][this._De[$Dn]]>(this._ue._ye-$zn)/2)
{
while(this._Le[$Dn][$en][this._De[$Dn]]<$Cn&&this._Le[$Dn][$dn][this._De[$Dn]]<this._qe)
{
this._De[$Dn]++;
}
}
this._Ee[$Dn]=this._te._de(2);
this._Re++;
this._ef=this._ff;
this._df=0;
return $g(true,$Em);
}
function $Jn($O,$Kn)
{
var $Em=$b("$Jn($O,$Kn) in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 578");
if($O._He*this._Ie>this._Ae[$Kn])
return $g(0,$Em);
if($O._Je*this._Ie>this._Le[$Kn][$dn][this._De[$Kn]])
return $g(0,$Em);
var $Ln=this._Le[$Kn][$en][this._De[$Kn]]-this._Le[$Kn][$fn][this._De[$Kn]];
return $g($Ln/($O._He*$O._Je),$Em);
}
function $Mn($Nn,$On)
{
var $Em=$b("$Mn($Nn,$On) in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 598");
var $Pn=$Nn;
var $Qn=$On;
if($Pn._Oe!=$Qn._Oe)
{
if(this._De[$Pn._Oe]<0&&this._De[$Qn._Oe]<0)
{
if($Qn._Ne<$Pn._Ze)
return $g(false,$Em);
}
else
if(this._De[$Pn._Oe]>=0&&this._De[$Qn._Oe]>=0)
{
if($Pn._Oe!=$Qn._Oe)
{
if(this._gf($Pn,$Qn._Oe)>this._Ie)
{
if(this._ef>0)
{
this._ef--;
}
else
{
return $g(false,$Em);
}
}
if(this._gf($Qn,$Pn._Oe)>this._Ie)
{
if(this._ef>0)
{
this._ef--;
}
else
{
return $g(false,$Em);
}
}
}
}
else
if(this._De[$Pn._Oe]>=0)
{
if($Pn._hf>=$Qn._hf)
{
this._7e($Pn);
this._7e($Qn);
if($Pn._if($Qn,true))
{
this._Re++;
return $g(true,$Em);
}
else
{
return $g(false,$Em);
}
}
}
else
if(this._De[$Qn._Oe]>=0)
{
if($Qn._hf>=$Pn._hf)
{
this._7e($Pn);
this._7e($Qn);
if($Qn._if($Pn,true))
{
this._Re++;
return $g(true,$Em);
}
else
{
return $g(false,$Em);
}
}
var $_f=$Pn;
$Pn=$Qn;
$Qn=$Pn;
}
}
else
{
if(this._De[$Pn._Oe]<0)
{
if($Pn._Ze>$Qn._Ze)
{
var $ig=$Pn;
$Pn=$Qn;
$Qn=$Pn;
}
if($Qn._hf<$Pn._hf)
{
if(this._te._ee()<0.9)
return $g(false,$Em);
}
}
else
{
}
}
this._7e($Pn);
this._7e($Qn);
if(((this._De[$Pn._Oe]<0&&$Pn._Ye<$Qn._Ne)||this._De[$Pn._Oe]>=0)&&$Pn._if($Qn,true))
{
this._Re++;
return $g(true,$Em);
}
var $Rn=$_("$int",0,new Array(4,null),0);
var $Sn=$_("$int",0,new Array(4,null),0);
if(!($Pn._jf($Qn,$Sn)&&$Qn._jf($Pn,$Rn)))
{
return $g(false,$Em);
}
if(!($Rn[2]<=$Sn[0]||$Sn[2]<=$Rn[0]||$Rn[3]<=$Sn[1]||$Sn[3]<=$Rn[1]))
{
return $g(false,$Em);
}
$Pn._db($Rn[0],$Rn[1]);
$Qn._db($Sn[0],$Sn[1]);
var $Tn=$Pn._Oe;
$Pn._Oe=$Qn._Oe;
$Qn._Oe=$Tn;
this._Re++;
return $g(true,$Em);
}
function $Un($O)
{
var $ym=$b("$Un($O) in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 753");
this._cf();
if(this._De[$O._Oe]>=0)
{
var $Vn=this._gf($O,$O._Oe);
if($Vn<this._Ie)
return $g(false,$ym);
var $Wn=-1;
var $Xn=-1;
for(var $An=0;$An<this._ze;$An++)
{
if(this._De[$An]>=0)
{
var $Yn=this._gf($O,$An);
if($Yn>this._Ie)
{
if($Wn<0||$Yn<$Wn)
{
$Wn=$Yn;
$Xn=$An;
}
}
}
}
if($Xn>0&&$Xn!=$O._Oe)
{
if(this._ef>0)
{
this._ef--;
return $g(false,$ym);
}
this._7e($O);
for(var $Zn=0;$Zn<this._ue._Fe.length;$Zn++)
{
if(this._ue._Fe[$Zn]._Oe==$Xn)
{
this._7e(this._ue._Fe[$Zn]);
if(this._ue._Fe[$Zn]._if($O,true))
{
this._Re++;
return $g(true,$ym);
}
}
}
return $g(false,$ym);
}
return $g(false,$ym);
}
this._kf($O);
var $0n=$O._Se;
var $1n=-1;
if($0n<4*$O._hf)
return $g(false,$ym);
var $2n=0;
for(var $Gn=0;$Gn<this._ze;$Gn++)
{
if(this._Ae[$Gn]<=$O._He)
continue;
if(this._De[$Gn]>=0)
continue;
var $3n=this._Be[$Gn]<0?0:this._Be[$Gn];
var $4n=this._Le[$Gn][$en][$3n]-this._Le[$Gn][$fn][$3n];
while($4n<2*$O._hf||this._Le[$Gn][$dn][$3n]<$O._Je)
{
$3n++;
$4n=this._Le[$Gn][$en][$3n]-this._Le[$Gn][$fn][$3n];
}
if($1n<0||$4n<$0n||this._te._ee()<0.1)
{
$2n=$3n;
$1n=$Gn;
$0n=$4n;
}
}
if($1n>=0)
{
$O._Oe=$1n;
this._lf($O);
this._Re++;
return $g(true,$ym);
}
return $g(false,$ym);
}
function $5n($O)
{
var $ym=$b("$5n($O) in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 876");
for(var $p=0;$p<15;$p++)
{
var $6n=this._Le[$O._Oe][$en][$p]-this._Le[$O._Oe][$fn][$p];
if($6n>2*$O._hf)
{
for(var $7n=0;$7n<4;$7n++)
{
var $ik=this._Ce[$O._Oe];
var $jk=this._Ce[$O._Oe]+this._Ae[$O._Oe]-$O._He;
var $kk=Math.floor(this._Le[$O._Oe][$dn][$p]/2);
var $lk=this._Le[$O._Oe][$dn][$p];
$O._db(this._te._je($ik,$jk),this._te._je($kk,$lk));
this._mf($O);
if(this._nf($O))
{
this._Re++;
this._7e($O);
$O._db($O._Me,$O._Xe);
this._Re++;
return $g(null,$ym);
}
}
}
}
while(true)
{
var $8n=this._Ce[$O._Oe];
var $ci=this._Ce[$O._Oe]+this._Ae[$O._Oe]-$O._He;
var $9n=0;
var $nj=this._Le[$O._Oe][$dn][15];
$O._db(this._te._je($8n,$ci),this._te._je($9n,$nj));
this._mf($O);
if(this._nf($O))
{
this._Re++;
this._7e($O);
$O._db($O._Me,$O._Xe);
this._Re++;
return $g(null,$ym);
}
}
return $g(null,$ym);
}
function $_n()
{
var $tm=$b("$_n() in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 931");
if(this._of==this._Re)
return $g(null,$tm);
this._of=this._Re;
for(var $Kn=0;$Kn<this._ze;$Kn++)
{
for(var $p=0;$p<16;$p++)
{
this._Le[$Kn][$fn][$p]=0;
}
this._Be[$Kn]=-1;
}
for(var $jb=0;$jb<this._ue._4e;$jb++)
{
this._pf(this._ue._Fe[$jb]);
}
return $g(null,$tm);
}
function $ao($O)
{
var $ym=$b("$ao($O) in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 956");
$O._Te=0;
for(var $p=0;$p<16;$p++)
{
if($O._Ne<this._Le[$O._Oe][$dn][$p])
{
if($O._Ze>=this._Le[$O._Oe][$dn][$p])
{
this._Le[$O._Oe][$fn][$p]+=(this._Le[$O._Oe][$dn][$p]-$O._Ne)*$O._He;
}
else
{
this._Le[$O._Oe][$fn][$p]+=$O._hf;
}
}
if($O._Ze>this._Le[$O._Oe][$dn][$p])
{
$O._Te=$p+1;
if(this._Be[$O._Oe]<$O._Te)
{
this._Be[$O._Oe]=$O._Te;
}
}
}
if(this._Be[$O._Oe]<0)
this._Be[$O._Oe]=1;
return $g(null,$ym);
}
function $bo($co)
{
var $ym=$b("$bo($co) in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 991");
this._cf();
var $do=0;
var $eo=0;
for(var $an=0;$an<this._ze;$an++)
{
if(this._Be[$an]>0)
{
$do=$do+this._Le[$an][$fn][this._Be[$an]];
$eo=$eo+this._Le[$an][$en][this._Be[$an]];
}
}
if($do!=this._ue._ye)
{
window.alert(this._ue._Fe[21]._He+","+this._ue._Fe[21]._Je+"@"+this._ue._Fe[21]._Oe);
window.alert("X Not convergent : "+$do+"/"+this._ue._ye);
return $g(true,$ym);
}
if($do>$co*$eo)
{
for(var $An=0;$An<this._ze;$An++)
{
if(this._Be[$An]>0&&this._De[$An]<0)
{
this._De[$An]=this._Be[$An];
}
}
return $g(true,$ym);
}
return $g(false,$ym);
}
function $fo($go)
{
var $ym=$b("$fo($go) in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 1046");
var $do=0;
var $eo=0;
for(var $an=0;$an<this._ze;$an++)
{
if(this._Be[$an]>0)
{
$do=$do+this._Le[$an][$fn][this._Be[$an]];
$eo=$eo+this._Le[$an][$en][this._Be[$an]];
$go._zc("S["+$an+"]="+((100*$do)/$eo)+"%\t");
}
}
$go._zc($do+"|"+this._ue._ye);
if($do!=this._ue._ye)
{
$go._xc("Not convergent : "+$do+"/"+this._ue._ye);
}
$go._xc("Total : "+((this._ue._ye*100)/$eo)+"%");
return $g(null,$ym);
}
function $ho($go,$oc)
{
var $Em=$b("$ho($go,$oc) in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 1074");
$go._xc("____"+$oc._5e+"____");
$go._xc($oc._Me+","+$oc._Ne+" "+$oc._He+"x"+$oc._Je);
$go._xc($oc._Ve+"-"+$oc._We+","+$oc._Xe+"-"+$oc._Ye);
$go._xc($oc._0e+"-"+$oc._1e+"X"+$oc._2e+"-"+$oc._3e);
$go._xc($oc._Se+"/"+$oc._Te);
return $g(null,$Em);
}
function $io($go,$Kn)
{
var $Em=$b("$io($go,$Kn) in "+"cn.monadic.demo.tile2d.QuantumBoundary"+": 1083");
if(this._Be[$Kn]<0)
{
$go._xc("<empty>");
return $g(null,$Em);
}
$go._xc("Canopy["+$Kn+"]\t= "+this._Be[$Kn]);
for(var $jb=0;$jb<=this._Be[$Kn];$jb++)
{
$go._xc("Fillrate["+$jb+"]\t= "+((this._Le[$Kn][$fn][$jb]*100)/this._Le[$Kn][$en][$jb])+"%"+"\tHOLE = "+(this._Le[$Kn][$en][$jb]-this._Le[$Kn][$fn][$jb]));
}
return $g(null,$Em);
}
$f("cn.monadic.demo.tile2d.QuantumBoundary"+' create class');
_CL=new $9c(new Array("cn.monadic.demo.tile2d.QuantumBoundary"),new Array());
var $2m=_CL;
$f("cn.monadic.demo.tile2d.QuantumBoundary"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.demo.tile2d.QuantumBoundary"+' setup object binder');

function $jo($w)
{
$w._qf=$4m;
$w._rf=$4m;
$w._sf=$5m;
$w._tf=$5m;
$w._uf=$7m;
$w._vf=$7m;
$w._wf=$8m;
$w._xf=$8m;
$w._ve=$9m;
$w._mf=$hn;
$w._yf=$hn;
$w._kf=$in;
$w._zf=$in;
$w._7e=$jn;
$w._Af=$jn;
$w._Bf=$kn;
$w._Cf=$kn;
$w._nf=$un;
$w._Df=$un;
$w._Ef=$vn;
$w._Ff=$vn;
$w._gf=$Jn;
$w._Gf=$Jn;
$w._Hf=$Mn;
$w._If=$Mn;
$w._Jf=$Un;
$w._Kf=$Un;
$w._lf=$5n;
$w._Lf=$5n;
$w._cf=$_n;
$w._Mf=$_n;
$w._pf=$ao;
$w._Nf=$bo;
$w._Of=$bo;
$w._Pf=$fo;
$w._Qf=$fo;
$w._Rf=$ho;
$w._Sf=$ho;
$w._Tf=$io;
$w._Uf=$io;
$w._te=null;
$w._ue=null;
$w._of=0;
$w._se=0;
$w._ze=0;
$w._Le=null;
$w._Ae=null;
$w._Ce=null;
$w._Be=null;
$w._De=null;
$w._Ee=null;
$w._Re=0;
$w._8e=null;
$w._9e=null;
$w.__e=null;
$w._af=null;
$w._Vf=false;
$w._Wf=0;
$w._qe=0;
$w._re=0;
$w._ef=0;
$w._df=0;
$w._Ie=0;
$w._ff=0;
}
_CL._t=$jo;
$f("cn.monadic.demo.tile2d.QuantumBoundary"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.demo.tile2d.QuantumBoundary"+' setup object initialize');

function $3m()
{
this._of=-1;
this._se=4;
this._ze=8;
this._Re=0;
this._8e=0.5;
this._9e=0.9;
this.__e=0.01;
this._af=0.8;
this._Vf=false;
this._Wf=2;
this._ef=0;
this._df=0;
this._Ie=8;
this._ff=256;
}
$f("cn.monadic.demo.tile2d.QuantumBoundary"+' setup funtions');

var $dn=0;
var $en=1;
var $fn=2;
var $gn=3;
_CL._Xf=null;
$g(null,0);$f("cn.monadic.demo.tile2d.Tile"+' flush functions');

function $ko($lo,$mo,$no)
{
var $1m=$b("$ko($lo,$mo,$no) in "+"cn.monadic.demo.tile2d.Tile"+": 49");
$1c(this,$oo);
$0b(this,$po);
this._5e=$lo;
this._He=$mo;
this._Je=$no;
this._hf=$mo*$no;
this._Me=-this._He;
this._Pe=0;
this._Ne=-this._Je;
this._Ze=0;
this._Te=0;
this._Ue=-1;
this._Oe=0;
this._Qe=-1;
for(var $7h=0;$7h<32;$7h++)
{
if(1<<$7h>=$no)
this._Yf=1<<$7h;
}
return $g(null,$1m);
}
function $qo($ke,$le)
{
var $Em=$b("$qo($ke,$le) in "+"cn.monadic.demo.tile2d.Tile"+": 71");
this._Me=$ke;
this._Ne=$le;
this._Pe=$ke+this._He;
this._Ze=$le+this._Je;
return $g(null,$Em);
}
function $ro($O)
{
var $ym=$b("$ro($O) in "+"cn.monadic.demo.tile2d.Tile"+": 79");
if($O._Oe!=this._Oe)
return $g(false,$ym);
return $g(!(this._Pe<=$O._Me||this._Me>=$O._Pe||this._Ze<=$O._Ne||this._Ne>=$O._Ze),$ym);
}
function $so($O)
{
var $ym=$b("$so($O) in "+"cn.monadic.demo.tile2d.Tile"+": 86");
if($O._Oe!=this._Oe)
return $g(null,$ym);
var $to=1,$uo=1;
if(this._Pe<=$O._Me)
$to=2;
if(this._Me>=$O._Pe)
$to=0;
if(this._Ze<=$O._Ne)
$uo=2;
if(this._Ne>=$O._Ze)
$uo=0;
switch($to+$uo*3)
{
case 0:
if(this._Me-$O._Pe>this._Ne-$O._Ze)
{
if(this._0e<0||$O._Pe>this._0e)
this._0e=$O._Pe;
}
else
{
if(this._2e<0||$O._Ze>this._2e)
this._2e=$O._Ze;
}
break;
case 1:
if(this._2e<0||$O._Ze>this._2e)
this._2e=$O._Ze;
if(this._Xe<0||$O._Ze>this._Xe)
this._Xe=$O._Ze;
break;
case 2:
if($O._Me-this._Pe>this._Ne-$O._Ze)
{
if(this._1e<0||$O._Me<this._1e)
this._1e=$O._Me;
}
else
{
if(this._2e<0||$O._Ze>this._2e)
this._2e=$O._Ze;
}
break;
case 3:
if(this._0e<0||$O._Pe>this._0e)
this._0e=$O._Pe;
if(this._Ve<0||$O._Pe>this._Ve)
this._Ve=$O._Pe;
break;
case 4:
break;
case 5:
if(this._1e<0||$O._Me<this._1e)
this._1e=$O._Me;
if(this._We<0||$O._Me<this._We)
this._We=$O._Me;
break;
case 6:
if(this._Me-$O._Pe>$O._Ne-this._Ze)
{
if(this._0e<0||$O._Pe>this._0e)
this._0e=$O._Pe;
}
else
{
if(this._3e<0||$O._Ne<this._3e)
this._3e=$O._Ne;
}
break;
case 7:
if(this._3e<0||$O._Ne<this._3e)
this._3e=$O._Ne;
if(this._Ye<0||$O._Ne<this._Ye)
this._Ye=$O._Ne;
break;
case 8:
if($O._Me-this._Pe>$O._Ne-this._Ze)
{
if(this._1e<0||$O._Me<this._1e)
this._1e=$O._Me;
}
else
{
if(this._3e<0||$O._Ne<this._3e)
this._3e=$O._Ne;
}
break;
}
return $g(null,$ym);
}
function $vo($wo,$xo)
{
var $Em=$b("$vo($wo,$xo) in "+"cn.monadic.demo.tile2d.Tile"+": 180");
if(this._Je>=$wo._Je&&this._We-this._Ve>=this._He+$wo._He)
{
if($xo)
{
this._db(this._Ve,this._Ne);
$wo._db(this._Ve+this._He,this._Ne);
$wo._Oe=this._Oe;
}
return $g(true,$Em);
}
if(this._He>=$wo._He&&this._Ye-this._Xe>=this._Je+$wo._Je)
{
if($xo)
{
this._db(this._Me,this._Xe);
$wo._db(this._Me,this._Xe+this._Je);
$wo._Oe=this._Oe;
}
return $g(true,$Em);
}
if(this._1e-this._0e-this._He>=$wo._He&&this._3e-this._2e>=$wo._Je)
{
if($xo)
{
this._db(this._0e,this._2e);
$wo._db(this._0e+this._He,this._2e);
$wo._Oe=this._Oe;
}
return $g(true,$Em);
}
if(this._3e-this._2e-this._Je>=$wo._Je&&this._1e-this._0e>=$wo._He)
{
if($xo)
{
this._db(this._0e,this._2e);
$wo._db(this._0e,this._2e+this._Je);
$wo._Oe=this._Oe;
}
return $g(true,$Em);
}
return $g(false,$Em);
}
function $yo($wo,$zo)
{
var $Em=$b("$yo($wo,$zo) in "+"cn.monadic.demo.tile2d.Tile"+": 225");
if(this._Je>=$wo._Je&&this._We-this._Ve>=$wo._He)
{
$zo[0]=this._Ve;
$zo[1]=this._Ne;
$zo[2]=$zo[0]+$wo._He;
$zo[3]=$zo[1]+$wo._Je;
return $g(true,$Em);
}
if(this._He>=$wo._He&&this._Ye-this._Xe>=$wo._Je)
{
$zo[0]=this._Me;
$zo[1]=this._Xe;
$zo[2]=$zo[0]+$wo._He;
$zo[3]=$zo[1]+$wo._Je;
return $g(true,$Em);
}
if(this._1e-this._0e>=$wo._He&&this._3e-this._2e>=$wo._Je)
{
$zo[0]=this._0e;
$zo[1]=this._2e;
$zo[2]=$zo[0]+$wo._He;
$zo[3]=$zo[1]+$wo._Je;
return $g(true,$Em);
}
return $g(false,$Em);
}
$f("cn.monadic.demo.tile2d.Tile"+' create class');
_CL=new $9c(new Array("cn.monadic.demo.tile2d.Tile"),new Array());
var $oo=_CL;
$f("cn.monadic.demo.tile2d.Tile"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.demo.tile2d.Tile"+' setup object binder');

function $Ao($w)
{
$w._db=$qo;
$w._Zf=$qo;
$w._bf=$ro;
$w._0f=$ro;
$w._6e=$so;
$w._1f=$so;
$w._if=$vo;
$w._2f=$vo;
$w._jf=$yo;
$w._3f=$yo;
$w._5e=0;
$w._He=0;
$w._Je=0;
$w._Yf=0;
$w._hf=0;
$w._Me=0;
$w._Pe=0;
$w._Ne=0;
$w._Ze=0;
$w._Oe=0;
$w._Te=0;
$w._Qe=0;
$w._Se=0;
$w._Ue=0;
$w._Ve=0;
$w._We=0;
$w._Xe=0;
$w._Ye=0;
$w._0e=0;
$w._1e=0;
$w._2e=0;
$w._3e=0;
$w._Ke=false;
}
_CL._t=$Ao;
$f("cn.monadic.demo.tile2d.Tile"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.demo.tile2d.Tile"+' setup object initialize');

function $po()
{
this._Ke=false;
}
$f("cn.monadic.demo.tile2d.Tile"+' setup funtions');

$g(null,0);$f("cn.monadic.demo.tile2d.TileSpace"+' flush functions');

function $Bo($Co)
{
var $ym=$b("$Bo($Co) in "+"cn.monadic.demo.tile2d.TileSpace"+": 21");
$1c(this,$Do);
$0b(this,$Eo);
this._Fe=$Co;
this._4e=0;
this._ye=0;
this._xe=0;
for(var $p=0;$p<this._Fe.length;$p++)
{
this._ye=this._ye+this._Fe[$p]._He*this._Fe[$p]._Je;
if(this._Fe[$p]._He>this._xe)
this._xe=this._Fe[$p]._He;
this._Fe[$p]._5e=$p;
}
this._4f=Math.floor(Math.sqrt(this._ye)+0.5);
return $g(null,$ym);
}
$f("cn.monadic.demo.tile2d.TileSpace"+' create class');
_CL=new $9c(new Array("cn.monadic.demo.tile2d.TileSpace"),new Array());
var $Do=_CL;
$f("cn.monadic.demo.tile2d.TileSpace"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.demo.tile2d.TileSpace"+' setup object binder');

function $Fo($w)
{
$w._Fe=null;
$w._4e=0;
$w._ye=0;
$w._4f=0;
$w._xe=0;
}
_CL._t=$Fo;
$f("cn.monadic.demo.tile2d.TileSpace"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.demo.tile2d.TileSpace"+' setup object initialize');

function $Eo()
{
}
$f("cn.monadic.demo.tile2d.TileSpace"+' setup funtions');

$g(null,0);$f("cn.monadic.demo.tile2d.selection.AttractorFilter"+' flush functions');

function $Go()
{
var $tm=$b("$Go() in "+"cn.monadic.demo.tile2d.selection.AttractorFilter"+": 13");
$1c(this,$Ho);
$2b(this,$Io)._temp_(false);
return $g(null,$tm);
}
function $Io($Jo)
{
var $ym=$b("$Io($Jo) in "+"cn.monadic.demo.tile2d.selection.AttractorFilter"+": 18");
$1c(this,$Ho);
$0b(this,$Ko);
this._6f=$Jo;
return $g(null,$ym);
}
function $Lo($Mo,$oc)
{
var $Em=$b("$Lo($Mo,$oc) in "+"cn.monadic.demo.tile2d.selection.AttractorFilter"+": 23");
if(this._6f)
{
return $g(($Mo._De[$oc._Oe]>=0),$Em);
}
return $g(true,$Em);
}
function $No($Oo,$Po,$yf)
{
var $1m=$b("$No($Oo,$Po,$yf) in "+"cn.monadic.demo.tile2d.selection.AttractorFilter"+": 32");
if($Po==$yf)
return $g(0,$1m);
if($Oo._De[$Po._Oe]>=0&&$Oo._De[$yf._Oe]<0)
return $g(1,$1m);
if($Oo._De[$Po._Oe]<0&&$Oo._De[$yf._Oe]>=0)
return $g(-1,$1m);
$Oo._7e($Po);
$Oo._7e($yf);
var $Qo=($Po._1e-$Po._0e)*($Po._3e-$Po._2e)-$Po._hf;
var $Ro=($yf._1e-$yf._0e)*($yf._3e-$yf._2e)-$yf._hf;
if($Qo==$Ro)
{
return $g(0,$1m);
}
else
{
return $g($Qo>$Ro?1:-1,$1m);
}
}
$f("cn.monadic.demo.tile2d.selection.AttractorFilter"+' create class');
_CL=new $9c(new Array("cn.monadic.demo.tile2d.selection.AttractorFilter"),new Array("cn.monadic.demo.tile2d.selection.OrderedFilter"));
var $Ho=_CL;
$f("cn.monadic.demo.tile2d.selection.AttractorFilter"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.demo.tile2d.selection.AttractorFilter"+' setup object binder');

function $So($w)
{
$w._7f=$Lo;
$w._8f=$Lo;
$w._9f=$No;
$w.__f=$No;
$w._6f=false;
}
_CL._t=$So;
$f("cn.monadic.demo.tile2d.selection.AttractorFilter"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.demo.tile2d.selection.AttractorFilter"+' setup object initialize');

function $Ko()
{
}
$f("cn.monadic.demo.tile2d.selection.AttractorFilter"+' setup funtions');

$g(null,0);$f("cn.monadic.demo.tile2d.selection.ClosureFilter"+' flush functions');

function $To($Uo)
{
var $ym=$b("$To($Uo) in "+"cn.monadic.demo.tile2d.selection.ClosureFilter"+": 9");
$1c(this,$Vo);
$0b(this,$Wo);
this._bg=$Uo;
return $g(null,$ym);
}
function $Xo($Mo,$oc)
{
var $Em=$b("$Xo($Mo,$oc) in "+"cn.monadic.demo.tile2d.selection.ClosureFilter"+": 14");
$Mo._cf();
return $g(($Mo._De[$oc._Oe]>=0)==this._bg,$Em);
}
$f("cn.monadic.demo.tile2d.selection.ClosureFilter"+' create class');
_CL=new $9c(new Array("cn.monadic.demo.tile2d.selection.ClosureFilter"),new Array("cn.monadic.demo.tile2d.selection.Filter"));
var $Vo=_CL;
$f("cn.monadic.demo.tile2d.selection.ClosureFilter"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.demo.tile2d.selection.ClosureFilter"+' setup object binder');

function $Yo($w)
{
$w._7f=$Xo;
$w._cg=$Xo;
$w._bg=false;
}
_CL._t=$Yo;
$f("cn.monadic.demo.tile2d.selection.ClosureFilter"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.demo.tile2d.selection.ClosureFilter"+' setup object initialize');

function $Wo()
{
}
$f("cn.monadic.demo.tile2d.selection.ClosureFilter"+' setup funtions');

$g(null,0);$f("cn.monadic.demo.tile2d.selection.CombinatorFilter"+' flush functions');

function $Zo()
{
var $tm=$b("$Zo() in "+"cn.monadic.demo.tile2d.selection.CombinatorFilter"+": 14");
$1c(this,$0o);
$2b(this,$1o)._temp_(false);
return $g(null,$tm);
}
function $1o($2o)
{
var $ym=$b("$1o($2o) in "+"cn.monadic.demo.tile2d.selection.CombinatorFilter"+": 19");
$1c(this,$0o);
$0b(this,$3o);
this._eg=$2o;
return $g(null,$ym);
}
function $4o($Mo,$oc)
{
var $Em=$b("$4o($Mo,$oc) in "+"cn.monadic.demo.tile2d.selection.CombinatorFilter"+": 24");
if(this._eg)
{
return $g(($Mo._De[$oc._Oe]<0),$Em);
}
return $g(true,$Em);
}
function $5o($Oo,$Po,$yf)
{
var $1m=$b("$5o($Oo,$Po,$yf) in "+"cn.monadic.demo.tile2d.selection.CombinatorFilter"+": 33");
if($Po==$yf)
return $g(0,$1m);
if($Oo._De[$Po._Oe]<0&&$Oo._De[$yf._Oe]>=0)
return $g(1,$1m);
if($Oo._De[$Po._Oe]>=0&&$Oo._De[$yf._Oe]<0)
return $g(-1,$1m);
$Oo._7e($Po);
$Oo._7e($yf);
if($Po._hf==$yf._hf)
{
return $g(0,$1m);
}
else
{
if($Oo._De[$Po._Oe]<0)
return $g($Po._hf>$yf._hf?1:-1,$1m);
else
return $g($Po._hf>$yf._hf?-1:1,$1m);
}
}
$f("cn.monadic.demo.tile2d.selection.CombinatorFilter"+' create class');
_CL=new $9c(new Array("cn.monadic.demo.tile2d.selection.CombinatorFilter"),new Array("cn.monadic.demo.tile2d.selection.OrderedFilter"));
var $0o=_CL;
$f("cn.monadic.demo.tile2d.selection.CombinatorFilter"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.demo.tile2d.selection.CombinatorFilter"+' setup object binder');

function $6o($w)
{
$w._7f=$4o;
$w._fg=$4o;
$w._9f=$5o;
$w._gg=$5o;
$w._eg=false;
}
_CL._t=$6o;
$f("cn.monadic.demo.tile2d.selection.CombinatorFilter"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.demo.tile2d.selection.CombinatorFilter"+' setup object initialize');

function $3o()
{
}
$f("cn.monadic.demo.tile2d.selection.CombinatorFilter"+' setup funtions');

$g(null,0);$f("cn.monadic.demo.tile2d.selection.Filter"+' flush functions');


$f("cn.monadic.demo.tile2d.selection.Filter"+' create class');
_CL=new $9c(new Array("cn.monadic.demo.tile2d.selection.Filter"),new Array());
var $7o=_CL;
$f("cn.monadic.demo.tile2d.selection.Filter"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.demo.tile2d.selection.Filter"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.demo.tile2d.selection.Filter"+' setup funtions');

$g(null,0);$f("cn.monadic.demo.tile2d.selection.Helper"+' flush functions');

function $8o()
{
var $tm=$b("$8o() in "+"cn.monadic.demo.tile2d.selection.Helper"+": 4");
$1c(this,$9o);
$0b(this,$_o);
return $g(null,$tm);
}
function $ap($Oo,$bp)
{
var $Em=$b("$ap($Oo,$bp) in "+"cn.monadic.demo.tile2d.selection.Helper"+": 6");
var $cp=$Oo._uf();
for(var $7h=0;$7h<$cp._4e/4;$7h++)
{
var $_f=$cp._Fe[$Oo._wf($cp._4e)];
if($bp==null||$bp._7f($Oo,$_f))
return $g($_f,$Em);
}
var $dp=$Oo._wf($cp._4e);
for(var $Zn=0;$Zn<$cp._4e;$Zn++)
{
var $ep=$cp._Fe[($dp+$Zn)%$cp._4e];
if($bp==null||$bp._7f($Oo,$ep))
return $g($ep,$Em);
}
return $g(null,$Em);
}
$f("cn.monadic.demo.tile2d.selection.Helper"+' create class');
_CL=new $9c(new Array("cn.monadic.demo.tile2d.selection.Helper"),new Array());
var $9o=_CL;
$f("cn.monadic.demo.tile2d.selection.Helper"+' setup static binder');
_CL._z=
function()
{
this._ig=$ap;
}
$f("cn.monadic.demo.tile2d.selection.Helper"+' setup object binder');

function $fp($w)
{
}
_CL._t=$fp;
$f("cn.monadic.demo.tile2d.selection.Helper"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.demo.tile2d.selection.Helper"+' setup object initialize');

function $_o()
{
}
$f("cn.monadic.demo.tile2d.selection.Helper"+' setup funtions');

$g(null,0);$f("cn.monadic.demo.tile2d.selection.IterativeSelector"+' flush functions');

function $gp($6e)
{
var $ym=$b("$gp($6e) in "+"cn.monadic.demo.tile2d.selection.IterativeSelector"+": 9");
$1c(this,$hp);
$0b(this,$ip);
this._kg=$6e;
this._lg=0;
return $g(null,$ym);
}
function $jp($Oo)
{
var $ym=$b("$jp($Oo) in "+"cn.monadic.demo.tile2d.selection.IterativeSelector"+": 15");
var $kp=$Oo._uf();
for(var $jb=0;$jb<$kp._4e;$jb++)
{
this._lg++;
if(this._lg>=$kp._4e)
this._lg=0;
if(this._kg==null)
return $g($kp._Fe[this._lg],$ym);
if(this._kg._7f($Oo,$kp._Fe[this._lg]))
return $g($kp._Fe[this._lg],$ym);
}
return $g(null,$ym);
}
$f("cn.monadic.demo.tile2d.selection.IterativeSelector"+' create class');
_CL=new $9c(new Array("cn.monadic.demo.tile2d.selection.IterativeSelector"),new Array("cn.monadic.demo.tile2d.selection.Selector"));
var $hp=_CL;
$f("cn.monadic.demo.tile2d.selection.IterativeSelector"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.demo.tile2d.selection.IterativeSelector"+' setup object binder');

function $lp($w)
{
$w._mg=$jp;
$w._ng=$jp;
$w._kg=null;
$w._lg=0;
}
_CL._t=$lp;
$f("cn.monadic.demo.tile2d.selection.IterativeSelector"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.demo.tile2d.selection.IterativeSelector"+' setup object initialize');

function $ip()
{
}
$f("cn.monadic.demo.tile2d.selection.IterativeSelector"+' setup funtions');

$g(null,0);$f("cn.monadic.demo.tile2d.selection.NullFilter"+' flush functions');

function $mp()
{
var $tm=$b("$mp() in "+"cn.monadic.demo.tile2d.selection.NullFilter"+": 4");
$1c(this,$np);
$0b(this,$op);
return $g(null,$tm);
}
function $pp($Mo,$oc)
{
var $Em=$b("$pp($Mo,$oc) in "+"cn.monadic.demo.tile2d.selection.NullFilter"+": 6");
return $g(true,$Em);
}
$f("cn.monadic.demo.tile2d.selection.NullFilter"+' create class');
_CL=new $9c(new Array("cn.monadic.demo.tile2d.selection.NullFilter"),new Array("cn.monadic.demo.tile2d.selection.Filter"));
var $np=_CL;
$f("cn.monadic.demo.tile2d.selection.NullFilter"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.demo.tile2d.selection.NullFilter"+' setup object binder');

function $qp($w)
{
$w._7f=$pp;
$w._pg=$pp;
}
_CL._t=$qp;
$f("cn.monadic.demo.tile2d.selection.NullFilter"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.demo.tile2d.selection.NullFilter"+' setup object initialize');

function $op()
{
}
$f("cn.monadic.demo.tile2d.selection.NullFilter"+' setup funtions');

$g(null,0);$f("cn.monadic.demo.tile2d.selection.OrderedFilter"+' flush functions');


$f("cn.monadic.demo.tile2d.selection.OrderedFilter"+' create class');
_CL=new $9c(new Array("cn.monadic.demo.tile2d.selection.OrderedFilter"),new Array("cn.monadic.demo.tile2d.selection.Filter"));
var $rp=_CL;
$f("cn.monadic.demo.tile2d.selection.OrderedFilter"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.demo.tile2d.selection.OrderedFilter"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.demo.tile2d.selection.OrderedFilter"+' setup funtions');

$g(null,0);$f("cn.monadic.demo.tile2d.selection.RandomSelector"+' flush functions');

function $sp($6e)
{
var $ym=$b("$sp($6e) in "+"cn.monadic.demo.tile2d.selection.RandomSelector"+": 9");
$1c(this,$tp);
$0b(this,$up);
this._rg=$6e;
return $g(null,$ym);
}
function $vp($Oo)
{
var $ym=$b("$vp($Oo) in "+"cn.monadic.demo.tile2d.selection.RandomSelector"+": 14");
return $g($9o._ig($Oo,this._rg),$ym);
}
$f("cn.monadic.demo.tile2d.selection.RandomSelector"+' create class');
_CL=new $9c(new Array("cn.monadic.demo.tile2d.selection.RandomSelector"),new Array("cn.monadic.demo.tile2d.selection.Selector"));
var $tp=_CL;
$f("cn.monadic.demo.tile2d.selection.RandomSelector"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.demo.tile2d.selection.RandomSelector"+' setup object binder');

function $wp($w)
{
$w._mg=$vp;
$w._sg=$vp;
$w._rg=null;
}
_CL._t=$wp;
$f("cn.monadic.demo.tile2d.selection.RandomSelector"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.demo.tile2d.selection.RandomSelector"+' setup object initialize');

function $up()
{
}
$f("cn.monadic.demo.tile2d.selection.RandomSelector"+' setup funtions');

$g(null,0);$f("cn.monadic.demo.tile2d.selection.Selector"+' flush functions');


$f("cn.monadic.demo.tile2d.selection.Selector"+' create class');
_CL=new $9c(new Array("cn.monadic.demo.tile2d.selection.Selector"),new Array());
var $xp=_CL;
$f("cn.monadic.demo.tile2d.selection.Selector"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.demo.tile2d.selection.Selector"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.demo.tile2d.selection.Selector"+' setup funtions');

$g(null,0);$f("cn.monadic.demo.tile2d.selection.TournamentSelector"+' flush functions');

function $yp($6e,$Y)
{
var $Em=$b("$yp($6e,$Y) in "+"cn.monadic.demo.tile2d.selection.TournamentSelector"+": 16");
$1c(this,$zp);
$0b(this,$Ap);
this._ug=$6e;
this._vg=$Y;
return $g(null,$Em);
}
function $Bp($Oo)
{
var $ym=$b("$Bp($Oo) in "+"cn.monadic.demo.tile2d.selection.TournamentSelector"+": 22");
var $Cp=$9o._ig($Oo,this._ug);
if($Cp==null)
return $g($Cp,$ym);
for(var $jb=0;$jb<this._vg;$jb++)
{
var $Dp=$9o._ig($Oo,this._ug);
if($Dp==null)
return $g($Cp,$ym);
if(this._ug._9f($Oo,$Dp,$Cp)>0)
$Cp=$Dp;
}
return $g($Cp,$ym);
}
$f("cn.monadic.demo.tile2d.selection.TournamentSelector"+' create class');
_CL=new $9c(new Array("cn.monadic.demo.tile2d.selection.TournamentSelector"),new Array("cn.monadic.demo.tile2d.selection.Selector"));
var $zp=_CL;
$f("cn.monadic.demo.tile2d.selection.TournamentSelector"+' setup static binder');
_CL._z=
function()
{
}
$f("cn.monadic.demo.tile2d.selection.TournamentSelector"+' setup object binder');

function $Ep($w)
{
$w._mg=$Bp;
$w._wg=$Bp;
$w._ug=null;
$w._vg=0;
}
_CL._t=$Ep;
$f("cn.monadic.demo.tile2d.selection.TournamentSelector"+' setup static initializer');
_CL._B=
function()
{
}
$f("cn.monadic.demo.tile2d.selection.TournamentSelector"+' setup object initialize');

function $Ap()
{
}
$f("cn.monadic.demo.tile2d.selection.TournamentSelector"+' setup funtions');

$g(null,0);$f("cn.monadic.demo.tile2d.Devel1"+' flush functions');

function $Fp()
{
var $tm=$b("$Fp() in "+"cn.monadic.demo.tile2d.Devel1"+": 20");
$Gp=$Yd._0("container");
$Hp=new $Ug($Gp,20,20,400,300,$If+";z-index: 9999; ");
$Hp._xc("(C) nullgate@MONADIC, 2006-2017. All rights reserved.");
$Ip=new $3g($Gp);
jsHook();
return $g(null,$tm);
}

function $Jp($Kp,$Lp,$Mp)
{
var $1m=$b("$Jp($Kp,$Lp,$Mp) in "+"cn.monadic.demo.tile2d.Devel1"+": 42");
$Np($Kp,$Lp);
$Op=$Mp;
setTimeout(function(){$Pp()}.bind(this));
return $g(null,$1m);
}
function $Np($Kp,$Lp)
{
var $Em=$b("$Np($Kp,$Lp) in "+"cn.monadic.demo.tile2d.Devel1"+": 72");
var $Qp=new $wm($Lp);
var $Rp=$_("cn.monadic.demo.tile2d.Tile",0,new Array($Kp,null),0);
for(var $Sp=0;$Sp<$Kp;$Sp++)
{
$Rp[$Sp]=new $ko($Sp,$Qp._je(10,100),$Qp._je(10,100));
}
$Tp=new $Bo($Rp);
$Up=new $Xm(3,1024,1024);
$Up._sf($Tp);
$Up._qf($Lp);
for(var $cn=0;$cn<$Rp.length;$cn++)
{
$Rp[$cn]._Oe=0;
$Up._lf($Rp[$cn]);
$Tp._4e++;
}
for(var $Vp=0;$Vp<$Rp.length;$Vp++)
{
$Up._7e($Rp[$Vp]);
}
$Wp=0;
$Xp=Math.floor(Math.sqrt($Rp.length));
$Yp=new $sp(null);
$Zp=new $gp(null);
$0p=new $gp(new $To(false));
$1p=new $yp(new $Go(),$Xp);
$2p=new $yp(new $Zo(),$Xp);
return $g(null,$Em);
}
function $Pp()
{
var $tm=$b("$Pp() in "+"cn.monadic.demo.tile2d.Devel1"+": 136");
var $3p=false;
for(var $4p=0;$4p<10;$4p++)
{
$Wp++;
if($Wp%100==0)
{
$3p=true;
$5p($Ip);
if($Up._Nf($Op))
{
$Up._Pf($Hp);
$Hp._xc("finished with expectation");
return $g(null,$tm);
}
}
var $6p=null;
if($Wp%10==0)
$6p=$Zp._mg($Up);
else
$6p=$Yp._mg($Up);
if($6p!=null)
{
$Up._Bf($6p);
if($Wp%10000==0)
{
$Hp._xc($Wp+"::"+$6p._5e+"::"+$6p._Me+","+$6p._Ne);
}
}
{
var $7p=null;
var $8p=null;
for(var $cn=0;$cn<$Xp;$cn++)
{
$7p=$1p._mg($Up);
$8p=$2p._mg($Up);
if($7p!=$8p)
{
if($Up._Hf($7p,$8p))
{
$Up._7e($7p);
$Up._7e($8p);
}
break;
}
}
}
if($Wp>2000&&$Wp%200==0)
{
var $9p=null;
for(var $_p=0;$_p<$Xp;$_p++)
{
$9p=$0p._mg($Up);
if($9p==null)
{
$Hp._xc("Finish after "+$Wp);
$Up._cf();
$Up._Pf($Hp);
return $g(null,$tm);
}
$Up._Jf($9p);
$9p=$Yp._mg($Up);
$Up._Jf($9p);
}
}
if($Wp>16000&&$Wp%8000==0)
{
$Up._Ef($Op,true);
$Up._Pf($Hp);
}
}
if($3p)
setTimeout(function(){$Pp()}.bind(this),50);
else
setTimeout(function(){$Pp()}.bind(this));
return $g(null,$tm);
}
function $5p($aq)
{
var $ym=$b("$5p($aq) in "+"cn.monadic.demo.tile2d.Devel1"+": 260");
$aq._U();
for(var $p=0;$p<$Tp._4e;$p++)
{
$aq._Mc("black");
$aq._ld($Tp._Fe[$p]._Me/$bq,$Tp._Fe[$p]._Ne/$bq,$Tp._Fe[$p]._He/$bq,$Tp._Fe[$p]._Je/$bq);
}
for(var $jb=0;$jb<$Tp._4e;$jb++)
{
if($jb==$cq||$jb==$dq||$eq==$Tp._Fe[$jb])
{
$aq._Mc("green");
$aq._ld($Tp._Fe[$jb]._Ve/$bq,$Tp._Fe[$jb]._Ne/$bq,$Tp._Fe[$jb]._We/$bq-$Tp._Fe[$jb]._Ve/$bq,$Tp._Fe[$jb]._Je/$bq);
$aq._ld($Tp._Fe[$jb]._Me/$bq,$Tp._Fe[$jb]._Xe/$bq,$Tp._Fe[$jb]._He/$bq,$Tp._Fe[$jb]._Ye/$bq-$Tp._Fe[$jb]._Xe/$bq);
$aq._Mc("red");
$aq._ld($Tp._Fe[$jb]._0e/$bq,$Tp._Fe[$jb]._2e/$bq,$Tp._Fe[$jb]._1e/$bq-$Tp._Fe[$jb]._0e/$bq,$Tp._Fe[$jb]._3e/$bq-$Tp._Fe[$jb]._2e/$bq);
$aq._Mc("black");
$aq._ld($Tp._Fe[$jb]._Me/$bq,$Tp._Fe[$jb]._Ne/$bq,$Tp._Fe[$jb]._He/$bq,$Tp._Fe[$jb]._Je/$bq);
}
}
for(var $an=0;$an<$Up._ze;$an++)
{
$aq._Mc("blue");
$aq._Wc(($Up._Ce[$an]+$Up._Ae[$an])/$bq,0,($Up._Ce[$an]+$Up._Ae[$an])/$bq,600);
if($Up._De[$an]<0)
{
for(var $Sp=0;$Sp<=$Up._Be[$an];$Sp++)
{
$aq._Wc(($Up._Ce[$an])/$bq,$Up._Le[$an][$dn][$Sp]/$bq,($Up._Ce[$an]+$Up._Ae[$an])/$bq,$Up._Le[$an][$dn][$Sp]/$bq);
}
}
else
{
$aq._Wc(($Up._Ce[$an])/$bq,$Up._Le[$an][$dn][$Up._De[$an]]/$bq,($Up._Ce[$an]+$Up._Ae[$an])/$bq,$Up._Le[$an][$dn][$Up._De[$an]]/$bq);
}
}
$aq._Kc();
return $g(null,$ym);
}
$f("cn.monadic.demo.tile2d.Devel1"+' setup static binder');

var $Gp=null;
var $Hp=null;
var $Ip=null;
var $Tp=null;
var $eq=null;
var $Up=null;
var $cq=-1;
var $dq=-1;
var $bq=4;
var $fq=false;
var $Wp=0;
var $Xp=0;
var $Op=null;
var $Yp=null;
var $Zp=null;
var $0p=null;
var $1p=null;
var $2p=null;
$f("cn.monadic.demo.tile2d.Devel1"+' setup static initializer');

{
{
$ec(function(){$Fp()}.bind(this));
}
}
$f("cn.monadic.demo.tile2d.Devel1"+' setup funtions');

function naive_solver($Kp,$Lp,$Mp)
{
return $g($Jp($Kp,$Lp,$Mp),0);
}
$g(null,0);