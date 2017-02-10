var $tring="jazzy.lang.__string";


function _SM_jazzy_lang_StackTrace_trackin1(_SL_msg)
{
	_SV_jazzy_lang_StackTrace_stacktrace[_SV_jazzy_lang_StackTrace_stacktrace.length]=_SL_msg;
	_SV_jazzy_lang_StackTrace_peaktrace=null;
	return _SV_jazzy_lang_StackTrace_stacktrace.length-1;
}
function _SM_jazzy_lang_StackTrace_trackon1(_SL_msg)
{
	if(_SV_jazzy_lang_StackTrace_stacktrace.length!=0)
		_SV_jazzy_lang_StackTrace_stacktrace[_SV_jazzy_lang_StackTrace_stacktrace.length-1]=_SL_msg;
	else
		_SM_jazzy_lang_StackTrace_trackin1(_SL_msg);
	_SV_jazzy_lang_StackTrace_peaktrace=null;
	return _SV_jazzy_lang_StackTrace_stacktrace.length;
}
function _SM_jazzy_lang_StackTrace_trackout2(_SL_v,_SL_len)
{
	if(_SV_jazzy_lang_StackTrace_peaktrace==null)
		_SV_jazzy_lang_StackTrace_peaktrace=_SM_jazzy_lang_StackTrace_getStackTrace();
	if(_SL_len>=0&&_SL_len<_SV_jazzy_lang_StackTrace_stacktrace.length)
	{
		_SV_jazzy_lang_StackTrace_stacktrace.length=_SL_len;
	}
	return _SL_v;
}
function _SM_jazzy_lang_StackTrace_alertStackTrace()
{
	if(_SV_jazzy_lang_StackTrace_stacktrace.length!=0)
	{
		alert("[Exception Stack]\n"+_SM_jazzy_lang_StackTrace_getStackTrace());
		_SV_jazzy_lang_StackTrace_stacktrace.length=0;
	}
}
function _SM_jazzy_lang_StackTrace_getPeakTrace()
{
	if(_SV_jazzy_lang_StackTrace_peaktrace==null)
		_SV_jazzy_lang_StackTrace_peaktrace=_SM_jazzy_lang_StackTrace_getStackTrace();
	return _SV_jazzy_lang_StackTrace_peaktrace;
}
function _SM_jazzy_lang_StackTrace_Throw1(_SL_ex)
{
	_SL_ex._OV_jazzy_lang_Exception_stackTrace=_SM_jazzy_lang_StackTrace_getStackTrace();
	return _SL_ex;
}
function _SM_jazzy_lang_StackTrace_getStackTrace()
{
	var _SL_msga="";
	for(var _SL_i=_SV_jazzy_lang_StackTrace_stacktrace.length-1;_SL_i>=0;_SL_i--)
		_SL_msga=_SL_msga+_SV_jazzy_lang_StackTrace_stacktrace[_SL_i]+"\n";
	return _SL_msga;
}


var _SV_jazzy_lang_StackTrace_stacktrace=new Array();
var _SV_jazzy_lang_StackTrace_peaktrace=null;


{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);












function _SM_jazzy_lang_JSO_Math_random2(_SL_lo,_SL_hi)
{
	return _SL_lo+Math.floor(Math.random()*(_SL_hi-_SL_lo));
}
function _SM_jazzy_lang_JSO_Math_random1(_SL_hia)
{
	return Math.floor(Math.random()*_SL_hia);
}




{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);













function _SM_jazzy_lang___array_forkObject2(_SL_instance,_SL_ia)
{
	var _SL_forked=new Object();
	_SL_instance[_SL_ia]=_SL_forked;
	return _SL_forked;
}
function _SM_jazzy_lang___array_forkArray2(_SL_instance,_SL_ia)
{
	var _SL_forked=new Array();
	_SL_instance[_SL_ia]=_SL_forked;
	return _SL_forked;
}
function _SM_jazzy_lang___array_forkedObject2(_SL_instance,_SL_ia)
{
	if((typeof _SL_instance[_SL_ia] != "undefined"))
		return _SL_instance[_SL_ia];
	var _SL_forked=new Object();
	_SL_instance[_SL_ia]=_SL_forked;
	return _SL_forked;
}
function _SM_jazzy_lang___array_forkedArray2(_SL_instance,_SL_ia)
{
	if((typeof _SL_instance[_SL_ia] != "undefined"))
		return _SL_instance[_SL_ia];
	var _SL_forked=new Array();
	_SL_instance[_SL_ia]=_SL_forked;
	return _SL_forked;
}
function _SM_jazzy_lang___array_setProperty3(_SL_instance,_SL_ia,_SL_value)
{
	_SL_instance[_SL_ia]=_SL_value;
	return _SL_instance;
}
function _SM_jazzy_lang___array_getProperty2(_SL_instance,_SL_ia)
{
	return _SL_instance[_SL_ia];
}
function _SM_jazzy_lang___array_create()
{
	return new Array();
}




{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);








function _SM_jazzy_lang___date_addByDays2(_SL_host,_SL_days)
{
	var _SL_newDate=new Date();
	_SL_newDate.setTime(_SL_host.getTime()+_SL_days*3600*24*1000);
	return _SL_newDate;
}
function _SM_jazzy_lang___date_addBySeconds2(_SL_host,_SL_seconds)
{
	var _SL_newDate=new Date();
	_SL_newDate.setTime(_SL_host.getTime()+_SL_seconds*1000);
	return _SL_newDate;
}
function _SM_jazzy_lang___date_create()
{
	return new Date();
}
function _SM_jazzy_lang___date_create1(_SL_t)
{
	return new Date(_SL_t);
}
function _SM_jazzy_lang___date_parse1(_SL_s)
{
	return new Date(_SL_s);
}




{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);










function _SM_jazzy_lang___json_forkObject2a(_SL_instance,_SL_sa)
{
	var _SL_va=_SL_instance;
	var _SL_forkeda=new Object();
	_SL_va[_SL_sa]=_SL_forkeda;
	return _SL_forkeda;
}
function _SM_jazzy_lang___json_forkArray2a(_SL_instance,_SL_sa)
{
	var _SL_va=_SL_instance;
	var _SL_forkeda=new Array();
	_SL_va[_SL_sa]=_SL_forkeda;
	return _SL_forkeda;
}
function _SM_jazzy_lang___json_forkedObject2a(_SL_instance,_SL_sa)
{
	var _SL_va=_SL_instance;
	if((typeof _SL_va[_SL_sa] != "undefined"))
		return _SL_va[_SL_sa];
	var _SL_forkeda=new Object();
	_SL_va[_SL_sa]=_SL_forkeda;
	return _SL_forkeda;
}
function _SM_jazzy_lang___json_forkedArray2a(_SL_instance,_SL_sa)
{
	var _SL_va=_SL_instance;
	if((typeof _SL_va[_SL_sa] != "undefined"))
		return _SL_va[_SL_sa];
	var _SL_forkeda=new Array();
	_SL_va[_SL_sa]=_SL_forkeda;
	return _SL_forkeda;
}
function _SM_jazzy_lang___json_setProperty3a(_SL_instance,_SL_sa,_SL_value)
{
	var _SL_vb=_SL_instance;
	_SL_vb[_SL_sa]=_SL_value;
	return _SL_instance;
}
function _SM_jazzy_lang___json_getProperty2a(_SL_instance,_SL_sa)
{
	var _SL_va=_SL_instance;
	return _SL_va[_SL_sa];
}
function _SM_jazzy_lang___json_hasProperty2(_SL_instance,_SL_sa)
{
	var _SL_va=_SL_instance;
	return (typeof _SL_va[_SL_sa] != "undefined");
}
function _SM_jazzy_lang___json_getKeys1(_SL_instance)
{
	var _SL_keys=_SM_jazzy_lang_System_newArray4($tring,0,new Array(0,null),0);
	var _SL_va=_SL_instance;
	for(var _SL_key in _SL_instance)
	{
		if(_SL_instance.hasOwnProperty(_SL_key))
			(_SL_keys).push(_SL_key);
	}
	return _SL_keys;
}
function _SM_jazzy_lang___json_getSize1(_SL_instance)
{
	var _SL_size=0;
	var _SL_va=_SL_instance;
	for(var _SL_key in _SL_instance)
	{
		if(_SL_instance.hasOwnProperty(_SL_key))
			_SL_size++;
	}
	return _SL_size;
}
function _SM_jazzy_lang___json_create()
{
	return new Object();
}




{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);









{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);













function _SM_jazzy_lang___string_startsWith2(_SL_host,_SL_prefix)
{
	return _SL_host.indexOf(_SL_prefix)==0;
}
function _SM_jazzy_lang___string_length1(_SL_host)
{
	return _SL_host.length;
}
function _SM_jazzy_lang___string_hashCode1(_SL_host)
{
	if(_SL_host==null||_SL_host.length==0)
	{
		return 0;
	}
	var _SL_hash=0;
	for(var _SL_ib=0;_SL_ib<_SL_host.length;_SL_ib++)
	{
		var _SL_character=_SL_host.charCodeAt(_SL_ib);
		_SL_hash=((_SL_hash<<5)-_SL_hash)+_SL_character;
		_SL_hash=_SL_hash&_SL_hash;
	}
	return _SL_hash;
}




{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);

function _SM_jazzy_lang___xhr_FETCH1(_SL_uri)
{
	var _SL_foo=_SM_jazzy_lang___xhr_create();
	return _SM_jazzy_lang___xhr_fetch2(_SL_foo,_SL_uri);
}
function _SM_jazzy_lang___xhr_REWRITE2(_SL_uri,_SL_message)
{
	var _SL_fooa=_SM_jazzy_lang___xhr_create();
	_SL_fooa.open("POST",_SL_uri,false);
	_SL_fooa.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
	_SL_fooa.send(_SL_message);
	return _SM_jazzy_lang___xhr_validate1(_SL_fooa);
}
function _SM_jazzy_lang___xhr_POST2(_SL_uri,_SL_message)
{
	var _SL_instancea=_SM_jazzy_lang___xhr_create();
	_SL_instancea.open("POST",_SL_uri,false);
	try
	{
		_SL_instancea.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
		_SL_instancea.send(_SL_message);
		if(_SM_jazzy_lang___xhr_validate1(_SL_instancea))
			return _SL_instancea.responseText;
		else
			return null;
	}
	catch(_SL_ex5)
	{
		_SM_jazzy_lang_StackTrace_trackout2(null,0+1);
		var _SL_e;
		if(_SM_jazzy_lang_ClassLoader_RTTI2((_SL_e=_SL_ex5),"jazzy.lang.Exception"))
		{
			return null;
		}
	}
}
function _SM_jazzy_lang___xhr_PUT2(_SL_uri,_SL_message)
{
	var _SL_instancea=_SM_jazzy_lang___xhr_create();
	_SL_instancea.open("PUT",_SL_uri,false);
	try
	{
		_SL_instancea.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
		_SL_instancea.send(_SL_message);
		if(_SM_jazzy_lang___xhr_validate1(_SL_instancea))
			return _SL_instancea.responseText;
		else
			return null;
	}
	catch(_SL_ex5)
	{
		_SM_jazzy_lang_StackTrace_trackout2(null,0+1);
		var _SL_e;
		if(_SM_jazzy_lang_ClassLoader_RTTI2((_SL_e=_SL_ex5),"jazzy.lang.Exception"))
		{
			return null;
		}
	}
}
function _SM_jazzy_lang___xhr_DELETE1(_SL_uri)
{
	var _SL_instanceb=_SM_jazzy_lang___xhr_create();
	_SL_instanceb.open("DELETE",_SL_uri,false);
	try
	{
		_SL_instanceb.send(null);
		if(_SM_jazzy_lang___xhr_validate1(_SL_instanceb))
			return _SL_instanceb.responseText;
		else
			return null;
	}
	catch(_SL_ex4)
	{
		_SM_jazzy_lang_StackTrace_trackout2(null,0+1);
		var _SL_ea;
		if(_SM_jazzy_lang_ClassLoader_RTTI2((_SL_ea=_SL_ex4),"jazzy.lang.Exception"))
		{
			return null;
		}
	}
}

function _SM_jazzy_lang___xhr_validate1(_SL_instance)
{
	var _SL_code=(_SL_instance.status-0);
	return ((_SL_code>=200)&&(_SL_code<300))||(_SL_code==304)||(_SL_code==1223)||(_SL_code==0&&(window.location.protocol=="file:"||window.location.protocol=="chrome:"));
}





function _SM_jazzy_lang___xhr_fetch2(_SL_instance,_SL_location)
{
	_SL_instance.open("GET",_SL_location,false);
	try
	{
		_SL_instance.send(null);
		if(_SM_jazzy_lang___xhr_validate1(_SL_instance))
			return _SL_instance.responseText;
		else
			return null;
	}
	catch(_SL_ex4)
	{
		_SM_jazzy_lang_StackTrace_trackout2(null,0+1);
		var _SL_ea;
		if(_SM_jazzy_lang_ClassLoader_RTTI2((_SL_ea=_SL_ex4),"jazzy.lang.Exception"))
		{
			return null;
		}
	}
}
function _SM_jazzy_lang___xhr_create()
{
	if(_SV_jazzy_lang_System_COMPATIBLE_MSIE)
	{
		for(var _SL_ia=0;_SL_ia<_SV_jazzy_lang___xhr_PROGIDS.length;++_SL_ia)
		{
			var _SL_progid=_SV_jazzy_lang___xhr_PROGIDS[_SL_ia];
			var _SL_fooa=null;
			try
			{
				_SL_fooa=new ActiveXObject(_SL_progid);
			}
			catch(_SL_ex5)
			{
				_SM_jazzy_lang_StackTrace_trackout2(null,0+1);
				var _SL_e;
				if(_SM_jazzy_lang_ClassLoader_RTTI2((_SL_e=_SL_ex5),"jazzy.lang.Exception"))
				{
				}
			}
			if(_SL_fooa!=null)
			{
				_SV_jazzy_lang___xhr_PROGIDS[0]=_SV_jazzy_lang___xhr_PROGIDS[_SL_ia];
				return _SL_fooa;
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
		catch(_SL_ex7)
		{
			_SM_jazzy_lang_StackTrace_trackout2(null,0+1);
			var _SL_eb;
			if(_SM_jazzy_lang_ClassLoader_RTTI2((_SL_eb=_SL_ex7),"jazzy.lang.Exception"))
			{
				return null;
			}
		}
	}
}


var _SV_jazzy_lang___xhr_PROGIDS=_SM_jazzy_lang_System_initArray2($tring,new Array("Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0",null));


{
}


function _w3c_post(_SL_uri,_SL_message)
{
	return _SM_jazzy_lang___xhr_POST2(_SL_uri,_SL_message);
}
function _w3c_delete(_SL_uri)
{
	return _SM_jazzy_lang___xhr_DELETE1(_SL_uri);
}
function _w3c_rewrite(_SL_uri,_SL_message)
{
	return _SM_jazzy_lang___xhr_REWRITE2(_SL_uri,_SL_message);
}
function _w3c_put(_SL_uri,_SL_message)
{
	return _SM_jazzy_lang___xhr_PUT2(_SL_uri,_SL_message);
}
function _w3c_fetch(_SL_uri)
{
	return _SM_jazzy_lang___xhr_FETCH1(_SL_uri);
}
_SM_jazzy_lang_StackTrace_trackout2(null,0);

function _SM_jazzy_lang_System_CL0(_SL_x,_SL_y)
{
	return _SL_x-_SL_y;
}
function _SM_jazzy_lang_System_export2(_SL_symbol,_SL_type)
{
	_SV_jazzy_lang_System_EXPORTER[_SL_symbol]=_SL_type;
}
function _SM_jazzy_lang_System_initArray2(_SL_strCL,_SL_array)
{
	_SL_array.length=_SL_array.length-1;
	_SL_array.CLASS="array";
	_SL_array.CONTENT=_SL_strCL;
	_SL_array.DIMENSION=1;
	return _SL_array;
}
function _SM_jazzy_lang_System_newArray4(_SL_strCL,_SL_pending,_SL_dims,_SL_offset)
{
	if(_SL_offset==0)
		_SL_dims.length=_SL_dims.length-1;
	if(_SL_dims.length-_SL_offset==0)
		return null;
	var _SL_arraya=new Array();
	_SL_arraya.CLASS="array";
	_SL_arraya.CONTENT=_SL_strCL;
	_SL_arraya.DIMENSION=_SL_pending+_SL_dims.length-_SL_offset;
	if(_SL_offset<_SL_dims.length)
	{
		for(var _SL_idx=0;_SL_idx<_SL_dims[_SL_offset];_SL_idx++)
		{
			_SL_arraya[_SL_idx]=_SM_jazzy_lang_System_newArray4(_SL_strCL,_SL_pending,_SL_dims,_SL_offset+1);
		}
	}
	return _SL_arraya;
}
function _SM_jazzy_lang_System_CALL2(_SL_instance,_SL_func)
{
	_SL_instance._temp_=_SL_func;
	return _SL_instance._temp_();
}
function _SM_jazzy_lang_System_BIND2(_SL_instance,_SL_func)
{
	_SL_instance._temp_=_SL_func;
	return _SL_instance;
}
function _SM_jazzy_lang_System_iterate3(_SL_source,_SL_it,_SL_extra)
{
	for(var _SL_valuea in _SL_source)
	{
		_SL_it._OM_iterate3a(_SL_valuea,_SL_source,_SL_extra);
	}
}
function _SM_jazzy_lang_System_visit3(_SL_source,_SL_visitor,_SL_funca)
{
	for(var _SL_valuea in _SL_source)
	{
		_SM_jazzy_lang_System_BIND2(_SL_visitor,_SL_funca)._temp_(_SL_valuea,_SL_source);
	}
}
function _SM_jazzy_lang_System_reflect2(_SL_instance,_SL_property)
{
	return _SL_instance[_SL_property];
}
function _SM_jazzy_lang_System_reflect3(_SL_instance,_SL_property,_SL_object)
{
	_SL_instance[_SL_property]=_SL_object;
}
function _SM_jazzy_lang_System_schedule1(_SL_script)
{
	if(_SV_jazzy_lang_System_runonce==null)
	{
		setTimeout(_SL_script);
	}
	else
	{
		_SV_jazzy_lang_System_runonce.push(_SL_script);
	}
}
function _SM_jazzy_lang_System_prepare()
{
	if(_SV_jazzy_lang_System_runonce!=null)
	{
		if(document.body!=null)
		{
			_SV_jazzy_lang_System_running=_SV_jazzy_lang_System_runonce;
			_SV_jazzy_lang_System_runonce=null;
			setTimeout(function(){_SM_jazzy_lang_System_do_prepare()}.bind(this));
		}
		else
		{
			setTimeout(function(){_SM_jazzy_lang_System_prepare()}.bind(this),50);
			_SV_jazzy_lang_System_diagnostics=_SV_jazzy_lang_System_diagnostics+"\nSystem.prepare() delayed.";
		}
	}
}
function _SM_jazzy_lang_System_do_prepare()
{
	if(_SV_jazzy_lang_System_running!=null)
	{
		for(var _SL_procedure=_SV_jazzy_lang_System_running.shift();_SL_procedure!=null;_SL_procedure=_SV_jazzy_lang_System_running.shift())
		{
			_SL_procedure.call(this);
		}
		_SV_jazzy_lang_System_running=null;
	}
}
function _SM_jazzy_lang_System_defer1(_SL_script)
{
	setTimeout(_SL_script);
}
function _SM_jazzy_lang_System_defer2(_SL_script,_SL_ta)
{
	setTimeout(_SL_script,_SL_ta);
}
function _SM_jazzy_lang_System_attain()
{
	return new Object();
}
function _SM_jazzy_lang_System_sort1(_SL_arrayb)
{
	_SL_arrayb.sort(_SV_jazzy_lang_System_NUMCOMP);
}
function _SM_jazzy_lang_System_sort2(_SL_arrayb,_SL_comp)
{
	_SL_arrayb.sort(_SL_comp);
}
function _SM_jazzy_lang_System_currentTimeMillis()
{
	return new Date().getTime();
}
function _SM_jazzy_lang_System_evaluate1(_SL_script)
{
	return eval(_SL_script);
}
function _SM_jazzy_lang_System_call1(_SL_script)
{
	return _SL_script.call(this);
}
function _SM_jazzy_lang_System_loadScript1(_SL_script)
{
	if(_SV_jazzy_lang_System_COMPATIBLE_MSIE&&!_SV_jazzy_lang_System_MODERN_MSIE)
	{
		window.execScript(_SL_script);
	}
	else
	{
		_SV_jazzy_lang_System_GLOBAL.eval(_SL_script);
	}
}











var _SV_jazzy_lang_System_GLOBAL=this;
var _SV_jazzy_lang_System_runonce=_SM_jazzy_lang___array_create();
var _SV_jazzy_lang_System_EXPORTER=_SV_jazzy_lang_System_GLOBAL;
var _SV_jazzy_lang_System_running=null;
var _SV_jazzy_lang_System_diagnostics="";
var _SV_jazzy_lang_System_COMPATIBLE_MSIE=(navigator.appName=="Microsoft Internet Explorer");
var _SV_jazzy_lang_System_LEGACY_MSIE=false;
var _SV_jazzy_lang_System_MODERN_MSIE=false;
var _SV_jazzy_lang_System_NUMCOMP=_SM_jazzy_lang_System_CL0;


{
	{
		var _SL_div=document.createElement("div");
		_SL_div.innerHTML="<!--[if lt IE 9]><i></i><![endif]-->";
		var _SL_isIeLessThan9=(_SL_div.getElementsByTagName("i").length==1);
		if(_SL_isIeLessThan9)
		{
			_SV_jazzy_lang_System_LEGACY_MSIE=true;
		}
		if(navigator.appName=="Netscape"&&navigator.userAgent.indexOf("Trident")>0)
		{
			_SV_jazzy_lang_System_COMPATIBLE_MSIE=true;
			_SV_jazzy_lang_System_MODERN_MSIE=true;
		}
	}
}


function _jazzyLoad(_SL_script)
{
	return _SM_jazzy_lang_System_loadScript1(_SL_script);
}
_SM_jazzy_lang_StackTrace_trackout2(null,0);


function _SM_jazzy_lang_Function_safe_apply2(_SL_instance,_SL_property)
{
	if(!!(_SL_instance[_SL_property]))
	{
		return _SL_instance[_SL_property].apply(_SL_instance);
	}
	return null;
}



function _SM_jazzy_lang_Function_install3(_SL_instance,_SL_symbola,_SL_method)
{
	_SL_instance[_SL_symbola]=_SL_method;
	return _SL_instance;
}
function _SM_jazzy_lang_Function_copycat3(_SL_instance,_SL_symbola,_SL_symbol2)
{
	_SL_instance[_SL_symbola]=_SL_instance[_SL_symbol2];
	return _SL_instance;
}




{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);


function _SM_jazzy_lang_Curry_do_curry3(_SL_funcb,_SL_args,_SL_instanceb)
{
	if(_SL_funcb.length<=1)
		return _SL_funcb;
	var _SL_pendinga=(_SL_args==null)?new Array():_SL_args.slice(0);
	var _SL_space=_SL_instanceb;
	var _SL_curried=function ()
	{
		if(_SL_space==null)
			_SL_space=this;
		var _SL_added=arguments;
		var _SL_accum=_SL_pendinga;
		if(_SL_added.length>0)
		{
			_SL_accum=_SL_pendinga.slice(0);
			for(var _SL_idxa=0;_SL_idxa<_SL_added.length;_SL_idxa++)
				_SL_accum.push(_SL_added[_SL_idxa]);
		}
		if(_SL_accum.length>=_SL_funcb.length)
		{
			return _SL_funcb.apply(_SL_space,_SL_accum);
		}
		else
		{
			return _SM_jazzy_lang_Curry_do_curry3(_SL_funcb,_SL_accum,_SL_space);
		}
	};
	return _SL_curried;
}




{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);

function _SM_jazzy_lang_ClassLoader_load1(_SL_objCL)
{
	if(_SV_jazzy_lang_ClassLoader_classes[_SL_objCL._OV_jazzy_lang_Class_name]!=null)
	{
		alert("[Jazzy ClassLoader Exception]\nDuplicate Class:"+_SL_objCL._OV_jazzy_lang_Class_name);
	}
	else
	{
		_SV_jazzy_lang_ClassLoader_classes[_SL_objCL._OV_jazzy_lang_Class_name]=_SL_objCL;
		_SV_jazzy_lang_ClassLoader_pending[_SV_jazzy_lang_ClassLoader_pending.length]=_SL_objCL;
	}
}
function _SM_jazzy_lang_ClassLoader_forName1(_SL_strCL)
{
	var _SL_foo=_SV_jazzy_lang_ClassLoader_classes[_SL_strCL];
	return (_SL_foo)._OM_jazzy_lang_Class_CL();
}
function _SM_jazzy_lang_ClassLoader_lookup1(_SL_strCL)
{
	return _SV_jazzy_lang_ClassLoader_classes[_SL_strCL];
}
function _SM_jazzy_lang_ClassLoader_prepare()
{
	for(var _SL_ia=0;_SL_ia<_SV_jazzy_lang_ClassLoader_pending.length;_SL_ia++)
	{
		_SV_jazzy_lang_ClassLoader_pending[_SL_ia]._OM_jazzy_lang_Class_prepare();
	}
	for(var _SL_i=0;_SL_i<_SV_jazzy_lang_ClassLoader_pending.length;_SL_i++)
	{
		_SV_jazzy_lang_ClassLoader_pending[_SL_i]._OM_jazzy_lang_Class_CL();
	}
	_SV_jazzy_lang_ClassLoader_pending.length=0;
	_SM_jazzy_lang_System_prepare();
}
function _SM_jazzy_lang_ClassLoader_bind2(_SL_instance,_SL_CL)
{
	var _SL_objecta=_SL_instance;
	if(_SL_objecta.CLASS==null)
	{
		_SL_objecta.CLASS=(_SL_CL);
		if(_SL_CL._OV_jazzy_lang_Class_CLS==null)
			_SL_CL._OM_jazzy_lang_Class_prepare();
		for(var _SL_idxb=0;_SL_idxb<_SL_CL._OV_jazzy_lang_Class_CLS.length;_SL_idxb++)
		{
			_SL_CL._OV_jazzy_lang_Class_CLS[_SL_idxb]._OM_jazzy_lang_Class_CL()._OM_jazzy_lang_Class_bind1(_SL_instance);
		}
	}
}
function _SM_jazzy_lang_ClassLoader_RTTI2(_SL_obj,_SL_strCLa)
{
	var _SL_objecta=_SL_obj;
	if(_SL_objecta==null)
		return true;
	if(_SL_strCLa=="jazzy.lang.Throwable"&&(_SL_objecta instanceof Error||(typeof _SL_objecta)=="string"))
		return true;
	if(_SL_objecta.CLASS==null)
		return false;
	var _SL_rtti=_SL_objecta.CLASS._OM_jazzy_lang_Class_RTTI1(_SL_strCLa);
	return _SL_rtti;
}
function _SM_jazzy_lang_ClassLoader_CAST2(_SL_obj,_SL_strCLa)
{
	var _SL_objecta=_SL_obj;
	if(_SL_objecta==null)
		return null;
	if(_SL_objecta.CLASS==null||_SL_objecta.CLASS._OM_jazzy_lang_Class_RTTI1(_SL_strCLa)==false)
	{
		alert("Can't cast "+(typeof _SL_objecta)+" into "+_SL_strCLa);
		return null;
	}
	return _SL_objecta;
}


var _SV_jazzy_lang_ClassLoader_classes=new Object();
var _SV_jazzy_lang_ClassLoader_pending=_SM_jazzy_lang_System_newArray4("jazzy.lang.Class",0,new Array(0,null),0);


{
	{
		setTimeout(function(){_SM_jazzy_lang_ClassLoader_prepare()}.bind(this));
	}
}


function jazzyClassForName(_SL_strCL)
{
	return _SM_jazzy_lang_ClassLoader_forName1(_SL_strCL);
}
_SM_jazzy_lang_StackTrace_trackout2(null,0);

function _SO_jazzy_lang_Class_Class2(_SL_inherence,_SL_extrinsic)
{
	_SS_jazzy_lang_Class_bind(this);
	_SM_jazzy_lang_System_CALL2(this,_SS_jazzy_lang_Class_init);
	(this).CLASS=(this);
	this._OV_jazzy_lang_Class_name=_SL_inherence[_SL_inherence.length-1];
	this._OV_jazzy_lang_Class_bloodline=_SL_inherence;
	this._OV_jazzy_lang_Class_aspects=_SL_extrinsic;
	this._OV_jazzy_lang_Class_flattened=_SM_jazzy_lang_System_attain();
	_SM_jazzy_lang_ClassLoader_load1(this);
}
function _SM_jazzy_lang_Class_getClassName()
{
	return this._OV_jazzy_lang_Class_name;
}
function _SM_jazzy_lang_Class_prepare()
{
	if(this._OV_jazzy_lang_Class_CLS==null)
	{
		this._OV_jazzy_lang_Class_CLS=_SM_jazzy_lang_System_newArray4("jazzy.lang.Class",0,new Array(this._OV_jazzy_lang_Class_bloodline.length,null),0);
		for(var _SL_idxc=0;_SL_idxc<this._OV_jazzy_lang_Class_bloodline.length;_SL_idxc++)
		{
			var _SL_cl=_SM_jazzy_lang_ClassLoader_lookup1(this._OV_jazzy_lang_Class_bloodline[_SL_idxc]);
			this._OV_jazzy_lang_Class_CLS[_SL_idxc]=_SL_cl;
			if(this._OV_jazzy_lang_Class_flattened!=null)
				this._OV_jazzy_lang_Class_flattened[this._OV_jazzy_lang_Class_bloodline[_SL_idxc]]=_SL_cl;
			if(_SL_cl._OV_jazzy_lang_Class_flattened!=null)
			{
				_SL_cl._OM_jazzy_lang_Class_prepare();
				for(var _SL_aspect in _SL_cl._OV_jazzy_lang_Class_flattened)
				{
					this._OV_jazzy_lang_Class_flattened[_SL_aspect]=_SL_cl._OV_jazzy_lang_Class_flattened[_SL_aspect];
				}
			}
		}
		if(this._OV_jazzy_lang_Class_aspects!=null)
		{
			this._OV_jazzy_lang_Class_INS=_SM_jazzy_lang_System_newArray4("jazzy.lang.Class",0,new Array(this._OV_jazzy_lang_Class_aspects.length,null),0);
			for(var _SL_idxb=0;_SL_idxb<this._OV_jazzy_lang_Class_aspects.length;_SL_idxb++)
			{
				var _SL_cla=_SM_jazzy_lang_ClassLoader_lookup1(this._OV_jazzy_lang_Class_aspects[_SL_idxb]);
				this._OV_jazzy_lang_Class_INS[_SL_idxb]=_SL_cla;
				if(this._OV_jazzy_lang_Class_flattened!=null)
					this._OV_jazzy_lang_Class_flattened[this._OV_jazzy_lang_Class_aspects[_SL_idxb]]=_SL_cla;
				if(_SL_cla._OV_jazzy_lang_Class_flattened!=null)
				{
					_SL_cla._OM_jazzy_lang_Class_prepare();
					for(var _SL_aspecta in _SL_cla._OV_jazzy_lang_Class_flattened)
					{
						this._OV_jazzy_lang_Class_flattened[_SL_aspecta]=_SL_cla._OV_jazzy_lang_Class_flattened[_SL_aspecta];
					}
				}
			}
		}
		this._OM_jazzy_lang_Class_bind();
	}
}
function _SM_jazzy_lang_Class_CL()
{
	if(this._OV_jazzy_lang_Class_inited==false)
	{
		var _SL_xa=_SM_jazzy_lang_StackTrace_trackin1(this._OV_jazzy_lang_Class_name+"::class::bind()");
		this._OM_jazzy_lang_Class_prepare();
		this._OV_jazzy_lang_Class_inited=true;
		_SM_jazzy_lang_StackTrace_trackon1(this._OV_jazzy_lang_Class_name+"::class::init()");
		;
		this._OM_jazzy_lang_Class_init();
		_SM_jazzy_lang_StackTrace_trackout2(null,_SL_xa);
	}
	return this;
}
function _SM_jazzy_lang_Class_bind()
{
}
function _SM_jazzy_lang_Class_bind1(_SL_instance)
{
}
function _SM_jazzy_lang_Class_init()
{
}
function _SM_jazzy_lang_Class_RTTI1(_SL_strCL)
{
	if(_SL_strCL==this._OV_jazzy_lang_Class_name)
	{
		return true;
	}
	if(this._OV_jazzy_lang_Class_flattened!=null)
	{
		return (typeof this._OV_jazzy_lang_Class_flattened[_SL_strCL] != "undefined");
	}
	if(this._OV_jazzy_lang_Class_INS!=null)
	{
		for(var _SL_idxd=0;_SL_idxd<this._OV_jazzy_lang_Class_INS.length;_SL_idxd++)
		{
			if(this._OV_jazzy_lang_Class_INS[_SL_idxd]._OM_jazzy_lang_Class_RTTI1(_SL_strCL))
			{
				return true;
			}
		}
	}
	if(this._OV_jazzy_lang_Class_CLS.length>1)
	{
		return this._OV_jazzy_lang_Class_CLS[this._OV_jazzy_lang_Class_CLS.length-2]._OM_jazzy_lang_Class_RTTI1(_SL_strCL);
	}
	else
	{
		return false;
	}
}

var _CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.lang.Class"),new Array());
var _SC_jazzy_lang_Class=_CL;

_CL._OM_jazzy_lang_Class_bind=
function()
{
}


function _SS_jazzy_lang_Class_bind(_SL_instance)
{
	_SL_instance._OM_getClassName=_SM_jazzy_lang_Class_getClassName;
	_SL_instance._OM_jazzy_lang_Class_getClassName=_SM_jazzy_lang_Class_getClassName;
	_SL_instance._OM_jazzy_lang_Class_prepare=_SM_jazzy_lang_Class_prepare;
	_SL_instance._OM_jazzy_lang_Class_CL=_SM_jazzy_lang_Class_CL;
	_SL_instance._OM_jazzy_lang_Class_bind=_SM_jazzy_lang_Class_bind;
	_SL_instance._OM_jazzy_lang_Class_bind1=_SM_jazzy_lang_Class_bind1;
	_SL_instance._OM_jazzy_lang_Class_init=_SM_jazzy_lang_Class_init;
	_SL_instance._OM_jazzy_lang_Class_RTTI1=_SM_jazzy_lang_Class_RTTI1;
	_SL_instance._OV_jazzy_lang_Class_name=null;
	_SL_instance._OV_jazzy_lang_Class_CLASS=null;
	_SL_instance._OV_jazzy_lang_Class_CLS=null;
	_SL_instance._OV_jazzy_lang_Class_INS=null;
	_SL_instance._OV_jazzy_lang_Class_bloodline=null;
	_SL_instance._OV_jazzy_lang_Class_aspects=null;
	_SL_instance._OV_jazzy_lang_Class_inited=false;
	_SL_instance._OV_jazzy_lang_Class_flattened=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_jazzy_lang_Class_bind;

_CL._OM_jazzy_lang_Class_init=
function()
{
}


function _SS_jazzy_lang_Class_init()
{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);

function _SO_jazzy_lang_Throwable_Throwable1(_SL_msg)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_lang_Throwable);
	_SM_jazzy_lang_System_CALL2(this,_SS_jazzy_lang_Throwable_init);
	var _SL_instanceb=this;
	_SL_instanceb.prototype=(_SC_jazzy_lang_Throwable._OV_jazzy_lang_Throwable_errorType);
	_SL_instanceb.message=(_SL_msg);
}

_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.lang.Throwable"),new Array());
var _SC_jazzy_lang_Throwable=_CL;

_CL._OM_jazzy_lang_Class_bind=
function()
{
	this._OV_jazzy_lang_Throwable_errorType=null;
}


function _SS_jazzy_lang_Throwable_bind(_SL_instance)
{
}
_CL._OM_jazzy_lang_Class_bind1=_SS_jazzy_lang_Throwable_bind;

_CL._OM_jazzy_lang_Class_init=
function()
{
	this._OV_jazzy_lang_Throwable_errorType=new Error();
}


function _SS_jazzy_lang_Throwable_init()
{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);

function _SO_jazzy_lang_Exception_Exception()
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_lang_Exception);
	_SM_jazzy_lang_System_BIND2(this,_SO_jazzy_lang_Exception_Exception1)._temp_("Jazzy Exception");
}
function _SO_jazzy_lang_Exception_Exception1(_SL_msg)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_lang_Exception);
	_SM_jazzy_lang_System_BIND2(this,_SO_jazzy_lang_Throwable_Throwable1)._temp_(_SL_msg);
	_SM_jazzy_lang_System_CALL2(this,_SS_jazzy_lang_Exception_init);
}
function _SM_jazzy_lang_Exception_alertStackTrace()
{
	alert((this.CLASS)._OM_getClassName()+":"+this.message+"\n"+this._OV_jazzy_lang_Exception_stackTrace);
}
function _SM_jazzy_lang_Exception_getMessage()
{
	return instance().message;
}
function _SM_jazzy_lang_Exception_getStackTrace()
{
	return this._OV_jazzy_lang_Exception_stackTrace;
}

_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.lang.Throwable","jazzy.lang.Exception"),new Array());
var _SC_jazzy_lang_Exception=_CL;

_CL._OM_jazzy_lang_Class_bind=
function()
{
}


function _SS_jazzy_lang_Exception_bind(_SL_instance)
{
	_SL_instance._OM_alertStackTrace=_SM_jazzy_lang_Exception_alertStackTrace;
	_SL_instance._OM_jazzy_lang_Exception_alertStackTrace=_SM_jazzy_lang_Exception_alertStackTrace;
	_SL_instance._OM_getMessage=_SM_jazzy_lang_Exception_getMessage;
	_SL_instance._OM_jazzy_lang_Exception_getMessage=_SM_jazzy_lang_Exception_getMessage;
	_SL_instance._OM_getStackTrace=_SM_jazzy_lang_Exception_getStackTrace;
	_SL_instance._OM_jazzy_lang_Exception_getStackTrace=_SM_jazzy_lang_Exception_getStackTrace;
	_SL_instance._OV_jazzy_lang_Exception_stackTrace=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_jazzy_lang_Exception_bind;

_CL._OM_jazzy_lang_Class_init=
function()
{
}


function _SS_jazzy_lang_Exception_init()
{
	this._OV_jazzy_lang_Exception_stackTrace=null;
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);

function _SO_jazzy_lang_RuntimeException_RuntimeException()
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_lang_RuntimeException);
	_SM_jazzy_lang_System_BIND2(this,_SO_jazzy_lang_RuntimeException_RuntimeException1)._temp_("Runtime Exception");
}
function _SO_jazzy_lang_RuntimeException_RuntimeException1(_SL_msg)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_lang_RuntimeException);
	_SM_jazzy_lang_System_BIND2(this,_SO_jazzy_lang_Exception_Exception1)._temp_(_SL_msg);
	_SM_jazzy_lang_System_CALL2(this,_SS_jazzy_lang_RuntimeException_init);
}

_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.lang.Throwable","jazzy.lang.Exception","jazzy.lang.RuntimeException"),new Array());
var _SC_jazzy_lang_RuntimeException=_CL;

_CL._OM_jazzy_lang_Class_bind=
function()
{
}


function _SS_jazzy_lang_RuntimeException_bind(_SL_instance)
{
}
_CL._OM_jazzy_lang_Class_bind1=_SS_jazzy_lang_RuntimeException_bind;

_CL._OM_jazzy_lang_Class_init=
function()
{
}


function _SS_jazzy_lang_RuntimeException_init()
{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);



_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.lang.Iteration"),new Array());
var _SC_jazzy_lang_Iteration=_CL;

_CL._OM_jazzy_lang_Class_bind=
function()
{
}

_CL._OM_jazzy_lang_Class_init=
function()
{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);

function _SO_jazzy_lang_StringBuffer_StringBuffer()
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_lang_StringBuffer);
	_SM_jazzy_lang_System_CALL2(this,_SS_jazzy_lang_StringBuffer_init);
	this._OV_jazzy_lang_StringBuffer_buffer=new Array();
}
function _SM_jazzy_lang_StringBuffer_append1(_SL_str)
{
	this._OV_jazzy_lang_StringBuffer_buffer[this._OV_jazzy_lang_StringBuffer_buffer.length]=_SL_str;
}
function _SM_jazzy_lang_StringBuffer_append1a(_SL_obj)
{
	this._OV_jazzy_lang_StringBuffer_buffer[this._OV_jazzy_lang_StringBuffer_buffer.length]=""+_SL_obj;
}
function _SM_jazzy_lang_StringBuffer_clear()
{
	this._OV_jazzy_lang_StringBuffer_buffer.length=0;
}
function _SM_jazzy_lang_StringBuffer_toString()
{
	return this._OV_jazzy_lang_StringBuffer_buffer.join("");
}

_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.lang.StringBuffer"),new Array());
var _SC_jazzy_lang_StringBuffer=_CL;

_CL._OM_jazzy_lang_Class_bind=
function()
{
}


function _SS_jazzy_lang_StringBuffer_bind(_SL_instance)
{
	_SL_instance._OM_append1=_SM_jazzy_lang_StringBuffer_append1;
	_SL_instance._OM_jazzy_lang_StringBuffer_append1=_SM_jazzy_lang_StringBuffer_append1;
	_SL_instance._OM_append1a=_SM_jazzy_lang_StringBuffer_append1a;
	_SL_instance._OM_jazzy_lang_StringBuffer_append1a=_SM_jazzy_lang_StringBuffer_append1a;
	_SL_instance._OM_clear=_SM_jazzy_lang_StringBuffer_clear;
	_SL_instance._OM_jazzy_lang_StringBuffer_clear=_SM_jazzy_lang_StringBuffer_clear;
	_SL_instance._OM_toString=_SM_jazzy_lang_StringBuffer_toString;
	_SL_instance._OM_jazzy_lang_StringBuffer_toString=_SM_jazzy_lang_StringBuffer_toString;
	_SL_instance._OV_jazzy_lang_StringBuffer_buffer=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_jazzy_lang_StringBuffer_bind;

_CL._OM_jazzy_lang_Class_init=
function()
{
}


function _SS_jazzy_lang_StringBuffer_init()
{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);











{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);




function _SM_jazzy_dom_core_JSO_window_copyToClipboard1(_SL_text)
{
	if(_SV_jazzy_lang_System_COMPATIBLE_MSIE)
		window.clipboardData.setData("Text",_SL_text);
}
function _SM_jazzy_dom_core_JSO_window_readClipboard()
{
	if(_SV_jazzy_lang_System_COMPATIBLE_MSIE)
		return window.clipboardData.getData("Text");
	else
		return null;
}




{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);











function _SM_jazzy_dom_core___element_lookup1(_SL_identifier)
{
	return _SC_jazzy_dom_core_Element._OM_resolve1(_SL_identifier);
}




{
}


function _W3C_lookup(_SL_identifier)
{
	return _SM_jazzy_dom_core___element_lookup1(_SL_identifier);
}
_SM_jazzy_lang_StackTrace_trackout2(null,0);










function _SM_jazzy_dom_core___event_toClientX1(_SL_event)
{
	if(_SV_jazzy_dom_core_Environment_MSIE)
	{
		return window.event.clientX+document.body.scrollLeft;
	}
	else
	{
		return _SL_event.clientX;
	}
}
function _SM_jazzy_dom_core___event_toClientY1(_SL_event)
{
	if(_SV_jazzy_dom_core_Environment_MSIE)
	{
		return window.event.clientY+document.body.scrollTop;
	}
	else
	{
		return _SL_event.clientY;
	}
}
function _SM_jazzy_dom_core___event_consume1(_SL_event)
{
	if(_SV_jazzy_dom_core_Environment_MSIE)
	{
		window.event.returnValue=(false);
	}
	else
	{
		_SM_jazzy_lang_Function_safe_apply2(_SL_event,"preventDefault");
	}
}




{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);




















{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);

function _SO_jazzy_dom_core_Element_Element1(_SL_peer)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_dom_core_Element);
	_SM_jazzy_lang_System_CALL2(this,_SS_jazzy_dom_core_Element_init);
	this._OV_jazzy_dom_core_Element_peerObject=_SL_peer;
}
function _SO_jazzy_dom_core_Element_Element3(_SL_elementId,_SL_tagId,_SL_style)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_dom_core_Element);
	_SM_jazzy_lang_System_CALL2(this,_SS_jazzy_dom_core_Element_init);
	var _SL_id=_SF_jazzy_dom_core_Element_JAZZY_PREFIX+_SL_elementId;
	if(_SL_elementId==null||_SF_jazzy_dom_core_Element_JAZZY_SERIAL=="")
	{
		_SC_jazzy_dom_core_Element._OV_jazzy_dom_core_Element_serialNo++;
		_SL_id="jazzy$"+_SC_jazzy_dom_core_Element._OV_jazzy_dom_core_Element_serialNo;
	}
	else
		if(document.getElementById(_SL_id)!=null)
		{
			throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("duplicate element: "+_SL_id));
		}
	if(_SV_jazzy_lang_System_LEGACY_MSIE)
	{
		var _SL_simple=_SC_jazzy_dom_core_Element._OM_pendant1(_SL_tagId);
		this._OV_jazzy_dom_core_Element_peerObject=document.createElement("<"+_SL_tagId+" id=\""+_SL_id+"\" "+(_SL_style!=null&&_SL_style!=""?"style=\""+_SL_style+"\" ":"")+(_SL_simple?"/>":"></"+_SL_tagId+">"));
	}
	else
	{
		this._OV_jazzy_dom_core_Element_peerObject=document.createElement(_SL_tagId);
		if(_SL_style!=null&&_SL_style!="")
		{
			this._OV_jazzy_dom_core_Element_peerObject.setAttribute("style",_SL_style);
		}
		this._OV_jazzy_dom_core_Element_peerObject.setAttribute("id",_SL_id);
	}
}
function _SM_jazzy_dom_core_Element_pendant1(_SL_tagIda)
{
	if(_SL_tagIda=="br")
		return true;
	if(_SL_tagIda=="hr")
		return true;
	return false;
}
function _SM_jazzy_dom_core_Element_getPeer()
{
	return this._OV_jazzy_dom_core_Element_peerObject;
}
function _SM_jazzy_dom_core_Element_setSize2(_SL_w,_SL_h)
{
	this._OV_jazzy_dom_core_Element_peerObject.style.width=(_SL_w+"px");
	this._OV_jazzy_dom_core_Element_peerObject.style.height=(_SL_h+"px");
}
function _SM_jazzy_dom_core_Element_moveTo2(_SL_xb,_SL_ya)
{
	this._OV_jazzy_dom_core_Element_peerObject.style.left=(_SL_xb+"px");
	this._OV_jazzy_dom_core_Element_peerObject.style.top=(_SL_ya+"px");
}
function _SM_jazzy_dom_core_Element_getZIndex()
{
	return (this._OV_jazzy_dom_core_Element_peerObject.style.zIndex-0);
}
function _SM_jazzy_dom_core_Element_setZIndex1(_SL_zIndex)
{
	this._OV_jazzy_dom_core_Element_peerObject.style.zIndex=((""+_SL_zIndex));
}
function _SM_jazzy_dom_core_Element_isVisible()
{
	return !(this._OV_jazzy_dom_core_Element_peerObject.style.display=="none");
}
function _SM_jazzy_dom_core_Element_setVisible1(_SL_b)
{
	if(_SL_b)
	{
		this._OV_jazzy_dom_core_Element_peerObject.style.display=("");
	}
	else
	{
		this._OV_jazzy_dom_core_Element_peerObject.style.display=("none");
	}
}
function _SM_jazzy_dom_core_Element_append1(_SL_text)
{
	this._OV_jazzy_dom_core_Element_peerObject.appendChild(document.createTextNode(_SL_text));
	return this;
}
function _SM_jazzy_dom_core_Element_spawn3(_SL_elementId,_SL_tagId,_SL_style)
{
	this._OM_derive3(_SL_elementId,_SL_tagId,_SL_style);
	return this;
}
function _SM_jazzy_dom_core_Element_derive3(_SL_elementId,_SL_tagId,_SL_style)
{
	var _SL_e=new _SO_jazzy_dom_core_Element_Element3(_SL_elementId,_SL_tagId,_SL_style);
	this._OV_jazzy_dom_core_Element_peerObject.appendChild(_SL_e._OV_jazzy_dom_core_Element_peerObject);
	if(_SC_jazzy_dom_core_Element._OM_pendant1(_SL_tagId))
		return this;
	else
		return _SL_e;
}
function _SM_jazzy_dom_core_Element_attach1(_SL_child)
{
	this._OV_jazzy_dom_core_Element_peerObject.appendChild(_SL_child._OV_jazzy_dom_core_Element_peerObject);
}
function _SM_jazzy_dom_core_Element_resolve1(_SL_identifier)
{
	var _SL_peera=document.getElementById(_SL_identifier);
	if(_SL_peera==null)
	{
		return null;
	}
	else
	{
		return new _SO_jazzy_dom_core_Element_Element1(_SL_peera);
	}
}
function _SM_jazzy_dom_core_Element_lookup1(_SL_identifier)
{
	var _SL_ida=_SF_jazzy_dom_core_Element_JAZZY_PREFIX+_SL_identifier;
	var _SL_peerb=document.getElementById(_SL_ida);
	if(_SL_peerb==null)
	{
		return null;
	}
	else
	{
		return new _SO_jazzy_dom_core_Element_Element1(_SL_peerb);
	}
}
function _SM_jazzy_dom_core_Element_inject1(_SL_neoHtml)
{
	this._OV_jazzy_dom_core_Element_peerObject.innerHTML=(_SL_neoHtml);
}
function _SM_jazzy_dom_core_Element_get1(_SL_attr)
{
	return (this._OV_jazzy_dom_core_Element_peerObject)[_SL_attr];
}
function _SM_jazzy_dom_core_Element_set2(_SL_attr,_SL_valueb)
{
	if((this._OV_jazzy_dom_core_Element_peerObject)[_SL_attr]!=_SL_valueb)
	{
		(this._OV_jazzy_dom_core_Element_peerObject)[_SL_attr]=_SL_valueb;
	}
}
function _SM_jazzy_dom_core_Element_getFirstChild1(_SL_tagName)
{
	var _SL_list=this._OV_jazzy_dom_core_Element_peerObject.getElementsByTagName(_SL_tagName);
	if(_SL_list.length>0)
	{
		return new _SO_jazzy_dom_core_Element_Element1(_SL_list[0]);
	}
	else
	{
		return null;
	}
}
function _SM_jazzy_dom_core_Element_insert1(_SL_neoHtml)
{
	if(_SV_jazzy_dom_core_Environment_MSIE)
	{
		this._OV_jazzy_dom_core_Element_peerObject.insertAdjacentHTML("BeforeEnd",_SL_neoHtml);
	}
	else
		if(_SV_jazzy_dom_core_Environment_W3CDOM)
		{
			var _SL_device=this._OM_derive3(null,"div","");
			if(_SL_device!=this)
			{
				_SL_device._OM_inject1(_SL_neoHtml);
			}
		}
}

_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.dom.core.Element"),new Array());
var _SC_jazzy_dom_core_Element=_CL;

_CL._OM_jazzy_lang_Class_bind=
function()
{
	this._OM_pendant1=_SM_jazzy_dom_core_Element_pendant1;
	this._OM_resolve1=_SM_jazzy_dom_core_Element_resolve1;
	this._OM_lookup1=_SM_jazzy_dom_core_Element_lookup1;
}


function _SS_jazzy_dom_core_Element_bind(_SL_instance)
{
	_SL_instance.setSize=_SM_jazzy_dom_core_Element_setSize2;
	_SL_instance.inject=_SM_jazzy_dom_core_Element_inject1;
	_SL_instance.insert=_SM_jazzy_dom_core_Element_insert1;
	_SL_instance.moveTo=_SM_jazzy_dom_core_Element_moveTo2;
	_SL_instance._OM_getPeer=_SM_jazzy_dom_core_Element_getPeer;
	_SL_instance._OM_jazzy_dom_core_Element_getPeer=_SM_jazzy_dom_core_Element_getPeer;
	_SL_instance._OM_setSize2=_SM_jazzy_dom_core_Element_setSize2;
	_SL_instance._OM_jazzy_dom_core_Element_setSize2=_SM_jazzy_dom_core_Element_setSize2;
	_SL_instance._OM_moveTo2=_SM_jazzy_dom_core_Element_moveTo2;
	_SL_instance._OM_jazzy_dom_core_Element_moveTo2=_SM_jazzy_dom_core_Element_moveTo2;
	_SL_instance._OM_getZIndex=_SM_jazzy_dom_core_Element_getZIndex;
	_SL_instance._OM_jazzy_dom_core_Element_getZIndex=_SM_jazzy_dom_core_Element_getZIndex;
	_SL_instance._OM_setZIndex1=_SM_jazzy_dom_core_Element_setZIndex1;
	_SL_instance._OM_jazzy_dom_core_Element_setZIndex1=_SM_jazzy_dom_core_Element_setZIndex1;
	_SL_instance._OM_isVisible=_SM_jazzy_dom_core_Element_isVisible;
	_SL_instance._OM_jazzy_dom_core_Element_isVisible=_SM_jazzy_dom_core_Element_isVisible;
	_SL_instance._OM_setVisible1=_SM_jazzy_dom_core_Element_setVisible1;
	_SL_instance._OM_jazzy_dom_core_Element_setVisible1=_SM_jazzy_dom_core_Element_setVisible1;
	_SL_instance._OM_append1=_SM_jazzy_dom_core_Element_append1;
	_SL_instance._OM_jazzy_dom_core_Element_append1=_SM_jazzy_dom_core_Element_append1;
	_SL_instance._OM_spawn3=_SM_jazzy_dom_core_Element_spawn3;
	_SL_instance._OM_jazzy_dom_core_Element_spawn3=_SM_jazzy_dom_core_Element_spawn3;
	_SL_instance._OM_derive3=_SM_jazzy_dom_core_Element_derive3;
	_SL_instance._OM_jazzy_dom_core_Element_derive3=_SM_jazzy_dom_core_Element_derive3;
	_SL_instance._OM_attach1=_SM_jazzy_dom_core_Element_attach1;
	_SL_instance._OM_jazzy_dom_core_Element_attach1=_SM_jazzy_dom_core_Element_attach1;
	_SL_instance._OM_inject1=_SM_jazzy_dom_core_Element_inject1;
	_SL_instance._OM_jazzy_dom_core_Element_inject1=_SM_jazzy_dom_core_Element_inject1;
	_SL_instance._OM_get1=_SM_jazzy_dom_core_Element_get1;
	_SL_instance._OM_jazzy_dom_core_Element_get1=_SM_jazzy_dom_core_Element_get1;
	_SL_instance._OM_set2=_SM_jazzy_dom_core_Element_set2;
	_SL_instance._OM_jazzy_dom_core_Element_set2=_SM_jazzy_dom_core_Element_set2;
	_SL_instance._OM_getFirstChild1=_SM_jazzy_dom_core_Element_getFirstChild1;
	_SL_instance._OM_jazzy_dom_core_Element_getFirstChild1=_SM_jazzy_dom_core_Element_getFirstChild1;
	_SL_instance._OM_insert1=_SM_jazzy_dom_core_Element_insert1;
	_SL_instance._OM_jazzy_dom_core_Element_insert1=_SM_jazzy_dom_core_Element_insert1;
	_SL_instance._OV_jazzy_dom_core_Element_peerObject=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_jazzy_dom_core_Element_bind;

_CL._OM_jazzy_lang_Class_init=
function()
{
}


function _SS_jazzy_dom_core_Element_init()
{
}


var _SF_jazzy_dom_core_Element_JAZZY_PREFIX="jazzy_";
var _SF_jazzy_dom_core_Element_JAZZY_SERIAL="jazzy$";
_CL._OV_jazzy_dom_core_Element_serialNo=0;
_SM_jazzy_lang_StackTrace_trackout2(null,0);

function _SM_jazzy_dom_core_Environment_validate()
{
	if(_SV_jazzy_dom_core_Environment_COMPATIBLE)
		return;
	var _SL_xa=document.body;
	if(_SL_xa==null)
	{
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("Cannot locate GUI Environment"));
	}
	var _SL_i=null;
	_SV_jazzy_dom_core_Environment_MSIE=!!((!!(_SL_xa)&&(typeof _SM_jazzy_lang_System_reflect2(_SL_xa,"insertAdjacentHTML") != "undefined")&&!!(document.createElement)&&_SV_jazzy_lang_System_COMPATIBLE_MSIE));
	_SV_jazzy_dom_core_Environment_W3CDOM=(!!(_SL_xa)&&!_SV_jazzy_dom_core_Environment_MSIE&&(typeof _SM_jazzy_lang_System_reflect2(_SL_xa,"appendChild") != "undefined")&&(typeof document.createRange != "undefined")&&(typeof _SM_jazzy_lang_System_reflect2((_SL_i=document.createRange()),"setStartBefore") != "undefined")&&(typeof _SM_jazzy_lang_System_reflect2(_SL_i,"createContextualFragment") != "undefined"));
	_SV_jazzy_dom_core_Environment_OPTIMAL=(_SV_jazzy_dom_core_Environment_MSIE&&!!(document.all)&&!!(!window.opera));
	_SV_jazzy_dom_core_Environment_MOZILLA=(_SV_jazzy_dom_core_Environment_W3CDOM&&(typeof _SM_jazzy_lang_System_reflect2(_SL_xa.style,"MozOpacity") != "undefined"));
	_SV_jazzy_dom_core_Environment_COMPATIBLE=!!(_SV_jazzy_dom_core_Environment_MSIE||_SV_jazzy_dom_core_Environment_W3CDOM);
	if(_SV_jazzy_lang_System_MODERN_MSIE)
	{
	}
	window.status=(_SV_jazzy_dom_core_Environment_MSIE+"/"+_SV_jazzy_dom_core_Environment_MOZILLA+"/"+_SV_jazzy_dom_core_Environment_W3CDOM);
}


var _SV_jazzy_dom_core_Environment_COMPATIBLE=false;
var _SV_jazzy_dom_core_Environment_MSIE=false;
var _SV_jazzy_dom_core_Environment_OPTIMAL=false;
var _SV_jazzy_dom_core_Environment_W3CDOM=false;
var _SV_jazzy_dom_core_Environment_MOZILLA=false;


{
	{
		_SM_jazzy_lang_System_schedule1(function(){_SM_jazzy_dom_core_Environment_validate()}.bind(this));
	}
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);

function _SO_jazzy_dom_core_Event_Event1(_SL_ec)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_dom_core_Event);
	_SM_jazzy_lang_System_CALL2(this,_SS_jazzy_dom_core_Event_init);
	this._OV_jazzy_dom_core_Event_event=_SL_ec;
}
function _SM_jazzy_dom_core_Event_getContext()
{
	if(_SV_jazzy_dom_core_Environment_MSIE)
	{
		return this._OV_jazzy_dom_core_Event_event.srcElement;
	}
	else
	{
		return this._OV_jazzy_dom_core_Event_event.target;
	}
}
function _SM_jazzy_dom_core_Event_getX()
{
	return this._OV_jazzy_dom_core_Event_event.clientX+document.body.scrollLeft;
}
function _SM_jazzy_dom_core_Event_getY()
{
	return this._OV_jazzy_dom_core_Event_event.clientY+document.body.scrollTop;
}
function _SM_jazzy_dom_core_Event_keyCode()
{
	return this._OV_jazzy_dom_core_Event_event.keyCode;
}
function _SM_jazzy_dom_core_Event_consume()
{
	if(_SV_jazzy_dom_core_Environment_MSIE)
	{
		this._OV_jazzy_dom_core_Event_event.returnValue=(false);
	}
	else
	{
		_SM_jazzy_lang_Function_safe_apply2(this._OV_jazzy_dom_core_Event_event,"preventDefault");
	}
}
function _SM_jazzy_dom_core_Event_getPeer()
{
	return this._OV_jazzy_dom_core_Event_event;
}
function _SM_jazzy_dom_core_Event_toEvent1(_SL_ec)
{
	if(_SV_jazzy_dom_core_Environment_MSIE)
	{
		return new _SO_jazzy_dom_core_Event_Event1(window.event);
	}
	else
	{
		if(!!(_SL_ec))
		{
			return new _SO_jazzy_dom_core_Event_Event1(_SL_ec);
		}
		else
		{
			throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("null event"));
		}
	}
}

_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.dom.core.Event"),new Array());
var _SC_jazzy_dom_core_Event=_CL;

_CL._OM_jazzy_lang_Class_bind=
function()
{
	this.toEvent=_SM_jazzy_dom_core_Event_toEvent1;
	this._OM_toEvent1=_SM_jazzy_dom_core_Event_toEvent1;
}


function _SS_jazzy_dom_core_Event_bind(_SL_instance)
{
	_SL_instance.keyCode=_SM_jazzy_dom_core_Event_keyCode;
	_SL_instance.getY=_SM_jazzy_dom_core_Event_getY;
	_SL_instance.getX=_SM_jazzy_dom_core_Event_getX;
	_SL_instance.consume=_SM_jazzy_dom_core_Event_consume;
	_SL_instance._OM_getContext=_SM_jazzy_dom_core_Event_getContext;
	_SL_instance._OM_jazzy_dom_core_Event_getContext=_SM_jazzy_dom_core_Event_getContext;
	_SL_instance._OM_getX=_SM_jazzy_dom_core_Event_getX;
	_SL_instance._OM_jazzy_dom_core_Event_getX=_SM_jazzy_dom_core_Event_getX;
	_SL_instance._OM_getY=_SM_jazzy_dom_core_Event_getY;
	_SL_instance._OM_jazzy_dom_core_Event_getY=_SM_jazzy_dom_core_Event_getY;
	_SL_instance._OM_keyCode=_SM_jazzy_dom_core_Event_keyCode;
	_SL_instance._OM_jazzy_dom_core_Event_keyCode=_SM_jazzy_dom_core_Event_keyCode;
	_SL_instance._OM_consume=_SM_jazzy_dom_core_Event_consume;
	_SL_instance._OM_jazzy_dom_core_Event_consume=_SM_jazzy_dom_core_Event_consume;
	_SL_instance._OM_getPeer=_SM_jazzy_dom_core_Event_getPeer;
	_SL_instance._OM_jazzy_dom_core_Event_getPeer=_SM_jazzy_dom_core_Event_getPeer;
	_SL_instance._OV_jazzy_dom_core_Event_event=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_jazzy_dom_core_Event_bind;

_CL._OM_jazzy_lang_Class_init=
function()
{
}


function _SS_jazzy_dom_core_Event_init()
{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);

function _SO_jazzy_dom_core_Font_Font1(_SL_f)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_dom_core_Font);
	_SM_jazzy_lang_System_BIND2(this,_SO_jazzy_dom_core_Font_Font3)._temp_(_SL_f,null,null);
}
function _SO_jazzy_dom_core_Font_Font2(_SL_f,_SL_si)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_dom_core_Font);
	_SM_jazzy_lang_System_BIND2(this,_SO_jazzy_dom_core_Font_Font3)._temp_(_SL_f,_SL_si,null);
}
function _SO_jazzy_dom_core_Font_Font3(_SL_f,_SL_si,_SL_st)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_dom_core_Font);
	_SM_jazzy_lang_System_CALL2(this,_SS_jazzy_dom_core_Font_init);
	this._OV_jazzy_dom_core_Font_family=_SL_f;
	this._OV_jazzy_dom_core_Font_size=_SL_si==null?_SF_jazzy_dom_core_Font_SIZE_DEFAULT:_SL_si;
	this._OV_jazzy_dom_core_Font_style=_SL_st==null?_SF_jazzy_dom_core_Font_STYLE_PLAIN:_SL_st;
}
function _SM_jazzy_dom_core_Font_toStyle()
{
	return " font-family: "+this._OV_jazzy_dom_core_Font_family+"; font-size: "+this._OV_jazzy_dom_core_Font_size+"; "+this._OV_jazzy_dom_core_Font_style+";";
}

_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.dom.core.Font"),new Array());
var _SC_jazzy_dom_core_Font=_CL;

_CL._OM_jazzy_lang_Class_bind=
function()
{
}


function _SS_jazzy_dom_core_Font_bind(_SL_instance)
{
	_SL_instance._OM_toStyle=_SM_jazzy_dom_core_Font_toStyle;
	_SL_instance._OM_jazzy_dom_core_Font_toStyle=_SM_jazzy_dom_core_Font_toStyle;
	_SL_instance._OV_jazzy_dom_core_Font_family=null;
	_SL_instance._OV_jazzy_dom_core_Font_size=null;
	_SL_instance._OV_jazzy_dom_core_Font_style=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_jazzy_dom_core_Font_bind;

_CL._OM_jazzy_lang_Class_init=
function()
{
	_SF_jazzy_dom_core_Font_STYLE_BLOODY=_SF_jazzy_dom_core_Font_STYLE_ITALIC+_SF_jazzy_dom_core_Font_STYLE_BOLD;
	_SF_jazzy_dom_core_Font_DEFAULT=new _SO_jazzy_dom_core_Font_Font1("tahoma");
}


function _SS_jazzy_dom_core_Font_init()
{
}


function _W3C_font(_SL_f,_SL_si,_SL_st)
{
	_SM_jazzy_lang_System_BIND2(this,_SO_jazzy_dom_core_Font_Font3);
	this._temp_(_SL_f,_SL_si,_SL_st);
}
var _SF_jazzy_dom_core_Font_STYLE_PLAIN="font-weight:normal;";
var _SF_jazzy_dom_core_Font_STYLE_BOLD="font-weight:bold;";
var _SF_jazzy_dom_core_Font_STYLE_ITALIC="font-style:italic;";
var _SF_jazzy_dom_core_Font_STYLE_BLOODY=null;
var _SF_jazzy_dom_core_Font_SIZE_DEFAULT="12px";
var _SF_jazzy_dom_core_Font_DEFAULT=null;
_SM_jazzy_lang_StackTrace_trackout2(null,0);

function _SM_jazzy_dom_core_Style_locate2(_SL_xb,_SL_ya)
{
	return "left:"+_SL_xb+"px;top:"+_SL_ya+"px;";
}
function _SM_jazzy_dom_core_Style_scale2(_SL_w,_SL_h)
{
	return "width:"+_SL_w+"px;height:"+_SL_h+"px;";
}
function _SM_jazzy_dom_core_Style_clip4(_SL_xb,_SL_ya,_SL_wa,_SL_ha)
{
	return "left:"+_SL_xb+"px;top:"+_SL_ya+"px;width:"+_SL_wa+"px;height:"+_SL_ha+"px;";
}
function _SM_jazzy_dom_core_Style_bindAt2(_SL_xb,_SL_ya)
{
	return "left:"+_SL_xb+"px;top:"+_SL_ya+"px;"+_SV_jazzy_dom_core_Style_ABS;
}
function _SM_jazzy_dom_core_Style_bindTo2(_SL_xb,_SL_ya)
{
	return "left:"+_SL_xb+"px;top:"+_SL_ya+"px;"+_SV_jazzy_dom_core_Style_REL;
}
function _SM_jazzy_dom_core_Style_clipAt4(_SL_xb,_SL_ya,_SL_wa,_SL_ha)
{
	return "left:"+_SL_xb+"px;top:"+_SL_ya+"px;width:"+_SL_wa+"px;height:"+_SL_ha+"px;"+_SV_jazzy_dom_core_Style_ABS;
}
function _SM_jazzy_dom_core_Style_clipTo4(_SL_xb,_SL_ya,_SL_wa,_SL_ha)
{
	return "left:"+_SL_xb+"px;top:"+_SL_ya+"px;width:"+_SL_wa+"px;height:"+_SL_ha+"px;"+_SV_jazzy_dom_core_Style_REL;
}
function _SM_jazzy_dom_core_Style_color3(_SL_r,_SL_g,_SL_ba)
{
	return "#"+_SV_jazzy_dom_core_Style_hex2[(_SL_r>=0&&_SL_r<256)?_SL_r:0]+_SV_jazzy_dom_core_Style_hex2[(_SL_g>=0&&_SL_g<256)?_SL_g:0]+_SV_jazzy_dom_core_Style_hex2[(_SL_ba>=0&&_SL_ba<256)?_SL_ba:0];
}
function _SM_jazzy_dom_core_Style_bgc3(_SL_r,_SL_g,_SL_ba)
{
	return _SV_jazzy_dom_core_Style_BG_+_SM_jazzy_dom_core_Style_color3(_SL_r,_SL_g,_SL_ba)+";";
}
function _SM_jazzy_dom_core_Style_clipRect4(_SL_x1,_SL_y1,_SL_x2,_SL_y2)
{
	return "clip:rect("+_SL_x1+"px,"+_SL_y1+"px,"+_SL_x2+"px,"+_SL_y2+"px);";
}


var _SV_jazzy_dom_core_Style_ABS="position: absolute;";
var _SV_jazzy_dom_core_Style_REL="position: relative;";
var _SV_jazzy_dom_core_Style_HIDE="overflow: hidden;";
var _SV_jazzy_dom_core_Style_DEMO="font-family:tahoma;font-size:12px;";
var _SV_jazzy_dom_core_Style_DIVL="<div style=\"";
var _SV_jazzy_dom_core_Style_DIVR="\"></div>";
var _SV_jazzy_dom_core_Style_BG_="background-color:";
var _SV_jazzy_dom_core_Style_BL_="border-left:";
var _SV_jazzy_dom_core_Style_BL__="px solid ";
var _SV_jazzy_dom_core_Style_hex=_SM_jazzy_lang_System_newArray4($tring,0,new Array(16,null),0);
var _SV_jazzy_dom_core_Style_hex2=_SM_jazzy_lang_System_newArray4($tring,0,new Array(256,null),0);


{
	{
		for(var _SL_ic=0;_SL_ic<10;_SL_ic++)
		{
			_SV_jazzy_dom_core_Style_hex[_SL_ic]=""+_SL_ic;
		}
		_SV_jazzy_dom_core_Style_hex[10]="A";
		_SV_jazzy_dom_core_Style_hex[11]="B";
		_SV_jazzy_dom_core_Style_hex[12]="C";
		_SV_jazzy_dom_core_Style_hex[13]="D";
		_SV_jazzy_dom_core_Style_hex[14]="E";
		_SV_jazzy_dom_core_Style_hex[15]="F";
		for(var _SL_ia=0;_SL_ia<16;_SL_ia++)
		{
			for(var _SL_j=0;_SL_j<16;_SL_j++)
			{
				_SV_jazzy_dom_core_Style_hex2[_SL_ia*16+_SL_j]=_SV_jazzy_dom_core_Style_hex[_SL_ia]+_SV_jazzy_dom_core_Style_hex[_SL_j];
			}
		}
	}
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("jazzy.dom.event.AxisPointer"+' flush functions');

function _SM_jazzy_dom_event_AxisPointer_CL0b(_SL_p)
{
}
function _SM_jazzy_dom_event_AxisPointer_CL4(_SL_host,_SL_h)
{
	var _SL_pointer=new _SO_jazzy_dom_event_AxisPointer_AxisPointer1("SYSTEM");
	var _SL_handler=_SL_h;
	_SL_pointer._OM_bind1a(_SL_handler);
	_SC_jazzy_dom_event_AxisPointer._OM_bind2a(_SL_host,_SL_pointer);
	return _SL_pointer;
}
function _SO_jazzy_dom_event_AxisPointer_AxisPointer1(_SL_s)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_dom_event_AxisPointer);
	_SM_jazzy_lang_System_CALL2(this,_SS_jazzy_dom_event_AxisPointer_init);
	this._OV_jazzy_dom_event_AxisPointer_tag=_SL_s;
	this._OV_jazzy_dom_event_AxisPointer_state=_SF_jazzy_dom_event_Pointer_EXITED;
	this._OV_jazzy_dom_event_AxisPointer_keydown=false;
	this._OV_jazzy_dom_event_AxisPointer_tracker=_SM_jazzy_dom_event_AxisPointer_CL0b;
}
function _SM_jazzy_dom_event_AxisPointer_overrideThreshold1(_SL_threshold)
{
	_SC_jazzy_dom_event_AxisPointer._OV_jazzy_dom_event_AxisPointer_DRAG_THRESHOLD=_SL_threshold;
}
function _SM_jazzy_dom_event_AxisPointer_bind1a(_SL_t)
{
	this._OV_jazzy_dom_event_AxisPointer_tracker=_SL_t;
}
function _SM_jazzy_dom_event_AxisPointer_calibrate2(_SL_xb,_SL_ya)
{
	this._OV_jazzy_dom_event_AxisPointer_offsetX=_SL_xb;
	this._OV_jazzy_dom_event_AxisPointer_offsetY=_SL_ya;
}
function _SM_jazzy_dom_event_AxisPointer_getX()
{
	return this._OV_jazzy_dom_event_AxisPointer_cursorX;
}
function _SM_jazzy_dom_event_AxisPointer_getY()
{
	return this._OV_jazzy_dom_event_AxisPointer_cursorY;
}
function _SM_jazzy_dom_event_AxisPointer_getState()
{
	return this._OV_jazzy_dom_event_AxisPointer_state;
}
function _SM_jazzy_dom_event_AxisPointer_getTag()
{
	return this._OV_jazzy_dom_event_AxisPointer_tag;
}
function _SM_jazzy_dom_event_AxisPointer_moving2(_SL_xb,_SL_ya)
{
	if(this._OV_jazzy_dom_event_AxisPointer_state==_SF_jazzy_dom_event_Pointer_EXITED)
		return;
	var _SL_x1a=_SL_xb-this._OV_jazzy_dom_event_AxisPointer_offsetX;
	var _SL_y1a=_SL_ya-this._OV_jazzy_dom_event_AxisPointer_offsetY;
	var _SL_tb=this._OV_jazzy_dom_event_AxisPointer_tracker;
	if(this._OV_jazzy_dom_event_AxisPointer_keydown)
	{
		if(this._OV_jazzy_dom_event_AxisPointer_state!=_SF_jazzy_dom_event_Pointer_DRAGGING)
		{
			var _SL_dist=Math.abs(_SL_x1a-this._OV_jazzy_dom_event_AxisPointer_anchorX)+Math.abs(_SL_y1a-this._OV_jazzy_dom_event_AxisPointer_anchorY);
			if(_SL_dist>_SC_jazzy_dom_event_AxisPointer._OV_jazzy_dom_event_AxisPointer_DRAG_THRESHOLD)
			{
				this._OV_jazzy_dom_event_AxisPointer_state=_SF_jazzy_dom_event_Pointer_PREDRAG;
				this._OV_jazzy_dom_event_AxisPointer_cursorX=this._OV_jazzy_dom_event_AxisPointer_anchorX;
				this._OV_jazzy_dom_event_AxisPointer_cursorY=this._OV_jazzy_dom_event_AxisPointer_anchorY;
				_SL_tb(this);
				this._OV_jazzy_dom_event_AxisPointer_state=_SF_jazzy_dom_event_Pointer_DRAGGING;
			}
		}
	}
	else
	{
		this._OV_jazzy_dom_event_AxisPointer_state=_SF_jazzy_dom_event_Pointer_MOVING;
	}
	this._OV_jazzy_dom_event_AxisPointer_cursorX=_SL_x1a;
	this._OV_jazzy_dom_event_AxisPointer_cursorY=_SL_y1a;
	_SL_tb(this);
}
function _SM_jazzy_dom_event_AxisPointer_toggling3(_SL_xb,_SL_ya,_SL_pressing)
{
	var _SL_x1b=_SL_xb-this._OV_jazzy_dom_event_AxisPointer_offsetX;
	var _SL_y1b=_SL_ya-this._OV_jazzy_dom_event_AxisPointer_offsetY;
	var _SL_tc=this._OV_jazzy_dom_event_AxisPointer_tracker;
	this._OV_jazzy_dom_event_AxisPointer_cursorX=_SL_x1b;
	this._OV_jazzy_dom_event_AxisPointer_cursorY=_SL_y1b;
	if(_SL_pressing)
	{
		this._OV_jazzy_dom_event_AxisPointer_keydown=true;
		this._OV_jazzy_dom_event_AxisPointer_anchorX=_SL_x1b;
		this._OV_jazzy_dom_event_AxisPointer_anchorY=_SL_y1b;
		this._OV_jazzy_dom_event_AxisPointer_state=_SF_jazzy_dom_event_Pointer_KEYDOWN;
		_SL_tc(this);
	}
	else
	{
		this._OV_jazzy_dom_event_AxisPointer_keydown=false;
		if(this._OV_jazzy_dom_event_AxisPointer_state==_SF_jazzy_dom_event_Pointer_DRAGGING)
		{
			this._OV_jazzy_dom_event_AxisPointer_state=_SF_jazzy_dom_event_Pointer_DRAGGED;
			_SL_tc(this);
		}
		else
		{
			this._OV_jazzy_dom_event_AxisPointer_state=_SF_jazzy_dom_event_Pointer_CLICKED;
			this._OV_jazzy_dom_event_AxisPointer_cursorX=this._OV_jazzy_dom_event_AxisPointer_anchorX;
			this._OV_jazzy_dom_event_AxisPointer_cursorY=this._OV_jazzy_dom_event_AxisPointer_anchorY;
			_SL_tc(this);
			this._OV_jazzy_dom_event_AxisPointer_cursorX=_SL_x1b;
			this._OV_jazzy_dom_event_AxisPointer_cursorY=_SL_y1b;
		}
		this._OV_jazzy_dom_event_AxisPointer_state=_SF_jazzy_dom_event_Pointer_KEYUP;
		_SL_tc(this);
		this._OV_jazzy_dom_event_AxisPointer_state=0;
	}
}
function _SM_jazzy_dom_event_AxisPointer_edging3(_SL_xb,_SL_ya,_SL_inside)
{
	var _SL_td=this._OV_jazzy_dom_event_AxisPointer_tracker;
	if(_SL_inside)
	{
		this._OV_jazzy_dom_event_AxisPointer_state=_SF_jazzy_dom_event_Pointer_ENTERED;
		this._OV_jazzy_dom_event_AxisPointer_cursorX=_SL_xb-this._OV_jazzy_dom_event_AxisPointer_offsetX;
		this._OV_jazzy_dom_event_AxisPointer_cursorY=_SL_ya-this._OV_jazzy_dom_event_AxisPointer_offsetY;
	}
	else
	{
		this._OV_jazzy_dom_event_AxisPointer_state=_SF_jazzy_dom_event_Pointer_EXITED;
	}
	this._OV_jazzy_dom_event_AxisPointer_keydown=false;
	_SL_td(this);
}
function _SM_jazzy_dom_event_AxisPointer_toString()
{
	return "AxisPointer("+this._OV_jazzy_dom_event_AxisPointer_state+","+this._OV_jazzy_dom_event_AxisPointer_keydown+","+this._OV_jazzy_dom_event_AxisPointer_cursorX+","+this._OV_jazzy_dom_event_AxisPointer_cursorY+")";
}
function _SM_jazzy_dom_event_AxisPointer_bind2a(_SL_host,_SL_ap)
{
	_SM_jazzy_lang_System_reflect3(_SL_host._OM_getPeer(),"onmousemove",_SC_jazzy_dom_event_AxisPointer._OM_jazzy_dom_event_AxisPointer_toMoveHandler1(_SL_ap));
	_SM_jazzy_lang_System_reflect3(_SL_host._OM_getPeer(),"onmousedown",_SC_jazzy_dom_event_AxisPointer._OM_jazzy_dom_event_AxisPointer_toButtonHandler2(_SL_ap,true));
	_SM_jazzy_lang_System_reflect3(_SL_host._OM_getPeer(),"onmouseup",_SC_jazzy_dom_event_AxisPointer._OM_jazzy_dom_event_AxisPointer_toButtonHandler2(_SL_ap,false));
	_SM_jazzy_lang_System_reflect3(_SL_host._OM_getPeer(),"onmouseover",_SC_jazzy_dom_event_AxisPointer._OM_jazzy_dom_event_AxisPointer_toEdgeHandler2(_SL_ap,true));
	_SM_jazzy_lang_System_reflect3(_SL_host._OM_getPeer(),"onmouseout",_SC_jazzy_dom_event_AxisPointer._OM_jazzy_dom_event_AxisPointer_toEdgeHandler2(_SL_ap,false));
}
function _SM_jazzy_dom_event_AxisPointer_toMoveHandler1(_SL_apa)
{
	var _SL_pointera=_SL_apa;
	return function (_SL_eventa)
	{
		var _SL_xc=_SM_jazzy_dom_core___event_toClientX1(_SL_eventa);
		var _SL_yb=_SM_jazzy_dom_core___event_toClientY1(_SL_eventa);
		_SL_pointera._OM_moving2(_SL_xc,_SL_yb);
		_SM_jazzy_dom_core___event_consume1(_SL_eventa);
	};
}
function _SM_jazzy_dom_event_AxisPointer_toButtonHandler2(_SL_apa,_SL_bb)
{
	var _SL_pointer=_SL_apa;
	var _SL_pressed=_SL_bb;
	return function (_SL_eventb)
	{
		var _SL_xd=_SM_jazzy_dom_core___event_toClientX1(_SL_eventb);
		var _SL_yc=_SM_jazzy_dom_core___event_toClientY1(_SL_eventb);
		_SL_pointer._OM_toggling3(_SL_xd,_SL_yc,_SL_pressed);
		_SM_jazzy_dom_core___event_consume1(_SL_eventb);
	};
}
function _SM_jazzy_dom_event_AxisPointer_toEdgeHandler2(_SL_apa,_SL_bb)
{
	var _SL_pointer=_SL_apa;
	var _SL_entering=_SL_bb;
	return function (_SL_eventb)
	{
		var _SL_xd=_SM_jazzy_dom_core___event_toClientX1(_SL_eventb);
		var _SL_yc=_SM_jazzy_dom_core___event_toClientY1(_SL_eventb);
		_SL_pointer._OM_edging3(_SL_xd,_SL_yc,_SL_entering);
		_SM_jazzy_dom_core___event_consume1(_SL_eventb);
	};
}
_SM_jazzy_lang_StackTrace_trackon1("jazzy.dom.event.AxisPointer"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.dom.event.AxisPointer"),new Array("jazzy.dom.event.Pointer"));
var _SC_jazzy_dom_event_AxisPointer=_CL;
_SM_jazzy_lang_StackTrace_trackon1("jazzy.dom.event.AxisPointer"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
	this._OM_overrideThreshold1=_SM_jazzy_dom_event_AxisPointer_overrideThreshold1;
	this._OM_bind2a=_SM_jazzy_dom_event_AxisPointer_bind2a;
	this._OM_jazzy_dom_event_AxisPointer_toMoveHandler1=_SM_jazzy_dom_event_AxisPointer_toMoveHandler1;
	this._OM_jazzy_dom_event_AxisPointer_toButtonHandler2=_SM_jazzy_dom_event_AxisPointer_toButtonHandler2;
	this._OM_jazzy_dom_event_AxisPointer_toEdgeHandler2=_SM_jazzy_dom_event_AxisPointer_toEdgeHandler2;
}
_SM_jazzy_lang_StackTrace_trackon1("jazzy.dom.event.AxisPointer"+' setup object binder');

function _SS_jazzy_dom_event_AxisPointer_bind(_SL_instance)
{
	_SL_instance.toString=_SM_jazzy_dom_event_AxisPointer_toString;
	_SL_instance._OM_bind1a=_SM_jazzy_dom_event_AxisPointer_bind1a;
	_SL_instance._OM_jazzy_dom_event_AxisPointer_bind1a=_SM_jazzy_dom_event_AxisPointer_bind1a;
	_SL_instance._OM_calibrate2=_SM_jazzy_dom_event_AxisPointer_calibrate2;
	_SL_instance._OM_jazzy_dom_event_AxisPointer_calibrate2=_SM_jazzy_dom_event_AxisPointer_calibrate2;
	_SL_instance._OM_getX=_SM_jazzy_dom_event_AxisPointer_getX;
	_SL_instance._OM_jazzy_dom_event_AxisPointer_getX=_SM_jazzy_dom_event_AxisPointer_getX;
	_SL_instance._OM_getY=_SM_jazzy_dom_event_AxisPointer_getY;
	_SL_instance._OM_jazzy_dom_event_AxisPointer_getY=_SM_jazzy_dom_event_AxisPointer_getY;
	_SL_instance._OM_getState=_SM_jazzy_dom_event_AxisPointer_getState;
	_SL_instance._OM_jazzy_dom_event_AxisPointer_getState=_SM_jazzy_dom_event_AxisPointer_getState;
	_SL_instance._OM_getTag=_SM_jazzy_dom_event_AxisPointer_getTag;
	_SL_instance._OM_jazzy_dom_event_AxisPointer_getTag=_SM_jazzy_dom_event_AxisPointer_getTag;
	_SL_instance._OM_moving2=_SM_jazzy_dom_event_AxisPointer_moving2;
	_SL_instance._OM_jazzy_dom_event_AxisPointer_moving2=_SM_jazzy_dom_event_AxisPointer_moving2;
	_SL_instance._OM_toggling3=_SM_jazzy_dom_event_AxisPointer_toggling3;
	_SL_instance._OM_jazzy_dom_event_AxisPointer_toggling3=_SM_jazzy_dom_event_AxisPointer_toggling3;
	_SL_instance._OM_edging3=_SM_jazzy_dom_event_AxisPointer_edging3;
	_SL_instance._OM_jazzy_dom_event_AxisPointer_edging3=_SM_jazzy_dom_event_AxisPointer_edging3;
	_SL_instance._OM_toString=_SM_jazzy_dom_event_AxisPointer_toString;
	_SL_instance._OM_jazzy_dom_event_AxisPointer_toString=_SM_jazzy_dom_event_AxisPointer_toString;
	_SL_instance._OV_jazzy_dom_event_AxisPointer_tag=null;
	_SL_instance._OV_jazzy_dom_event_AxisPointer_offsetX=0;
	_SL_instance._OV_jazzy_dom_event_AxisPointer_offsetY=0;
	_SL_instance._OV_jazzy_dom_event_AxisPointer_cursorX=0;
	_SL_instance._OV_jazzy_dom_event_AxisPointer_cursorY=0;
	_SL_instance._OV_jazzy_dom_event_AxisPointer_anchorX=0;
	_SL_instance._OV_jazzy_dom_event_AxisPointer_anchorY=0;
	_SL_instance._OV_jazzy_dom_event_AxisPointer_state=0;
	_SL_instance._OV_jazzy_dom_event_AxisPointer_keydown=false;
	_SL_instance._OV_jazzy_dom_event_AxisPointer_tracker=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_jazzy_dom_event_AxisPointer_bind;
_SM_jazzy_lang_StackTrace_trackon1("jazzy.dom.event.AxisPointer"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
	_SF_jazzy_dom_event_AxisPointer_BINDER=_SM_jazzy_dom_event_AxisPointer_CL4;
}
_SM_jazzy_lang_StackTrace_trackon1("jazzy.dom.event.AxisPointer"+' setup object initialize');

function _SS_jazzy_dom_event_AxisPointer_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("jazzy.dom.event.AxisPointer"+' setup funtions');

_CL._OV_jazzy_dom_event_AxisPointer_DRAG_THRESHOLD=10;
var _SF_jazzy_dom_event_AxisPointer_BINDER=null;
_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("jazzy.dom.event.Pointer"+' flush functions');






_SM_jazzy_lang_StackTrace_trackon1("jazzy.dom.event.Pointer"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.dom.event.Pointer"),new Array());
var _SC_jazzy_dom_event_Pointer=_CL;
_SM_jazzy_lang_StackTrace_trackon1("jazzy.dom.event.Pointer"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("jazzy.dom.event.Pointer"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("jazzy.dom.event.Pointer"+' setup funtions');

var _SF_jazzy_dom_event_Pointer_ENTERED=1025;
var _SF_jazzy_dom_event_Pointer_EXITED=2049;
var _SF_jazzy_dom_event_Pointer_MOVING=1;
var _SF_jazzy_dom_event_Pointer_KEYDOWN=4;
var _SF_jazzy_dom_event_Pointer_KEYUP=8;
var _SF_jazzy_dom_event_Pointer_DRAGGING=5;
var _SF_jazzy_dom_event_Pointer_PREDRAG=37;
var _SF_jazzy_dom_event_Pointer_CLICKED=24;
var _SF_jazzy_dom_event_Pointer_DRAGGED=40;
_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Bitwise2D"+' flush functions');


_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Bitwise2D"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.data.Bitwise2D"),new Array("jazzy.data.Data2D"));
var _SC_jazzy_data_Bitwise2D=_CL;
_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Bitwise2D"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Bitwise2D"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Bitwise2D"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Data2D"+' flush functions');



_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Data2D"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.data.Data2D"),new Array());
var _SC_jazzy_data_Data2D=_CL;
_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Data2D"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Data2D"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Data2D"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Line2D"+' flush functions');

function _SO_jazzy_data_Line2D_Line2D2(_SL_w,_SL_h)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_data_Line2D);
	_SM_jazzy_lang_System_CALL2(this,_SS_jazzy_data_Line2D_init);
	this._OV_jazzy_data_Line2D_width=_SL_w;
	this._OV_jazzy_data_Line2D_height=_SL_h;
	this._OV_jazzy_data_Line2D_matrix=_SM_jazzy_lang_System_attain();
}
function _SM_jazzy_data_Line2D_append3(_SL_xb,_SL_ya,_SL_l)
{
	if(this._OV_jazzy_data_Line2D_sealed)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("sealed"));
	if(this._OV_jazzy_data_Line2D_matrix[_SL_ya]==null)
	{
		this._OV_jazzy_data_Line2D_matrix[_SL_ya]=_SM_jazzy_lang_System_newArray4("$int",0,new Array(2,null),0);
		this._OV_jazzy_data_Line2D_matrix[_SL_ya][0]=_SL_xb;
		this._OV_jazzy_data_Line2D_matrix[_SL_ya][1]=_SL_xb+_SL_l;
	}
	else
	{
		var _SL_lena=this._OV_jazzy_data_Line2D_matrix[_SL_ya].length;
		if(_SL_xb<this._OV_jazzy_data_Line2D_matrix[_SL_ya][_SL_lena-1])
		{
			throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("collision"));
		}
		this._OV_jazzy_data_Line2D_matrix[_SL_ya][_SL_lena]=_SL_xb;
		this._OV_jazzy_data_Line2D_matrix[_SL_ya][_SL_lena+1]=_SL_xb+_SL_l;
	}
}
function _SM_jazzy_data_Line2D_seal()
{
	this._OV_jazzy_data_Line2D_sealed=true;
}
function _SM_jazzy_data_Line2D_getWidth()
{
	return this._OV_jazzy_data_Line2D_width;
}
function _SM_jazzy_data_Line2D_getHeight()
{
	return this._OV_jazzy_data_Line2D_height;
}
function _SM_jazzy_data_Line2D_valueAt2(_SL_xb,_SL_ya)
{
	if(_SL_ya<0||_SL_ya>=this._OV_jazzy_data_Line2D_height)
		return false;
	var _SL_line=this._OV_jazzy_data_Line2D_matrix[_SL_ya];
	if(_SL_line==null)
		return false;
	var _SL_lena=_SL_line.length;
	if(_SL_xb<_SL_line[0]||_SL_xb>=_SL_line[_SL_lena-1])
		return false;
	for(var _SL_ie=0;_SL_ie<_SL_lena;_SL_ie=_SL_ie+2)
	{
		if(_SL_xb<_SL_line[_SL_ie])
			return false;
		if(_SL_xb<_SL_line[_SL_ie+1])
			return true;
	}
	return false;
}
function _SM_jazzy_data_Line2D_rasterize1(_SL_visitora)
{
	for(var _SL_yd=0;_SL_yd<this._OV_jazzy_data_Line2D_height;_SL_yd++)
	{
		var _SL_line=this._OV_jazzy_data_Line2D_matrix[_SL_yd];
		if(_SL_line!=null)
		{
			var _SL_lena=_SL_line.length;
			for(var _SL_ie=0;_SL_ie<_SL_lena;_SL_ie=_SL_ie+2)
			{
				_SL_visitora(_SL_line[_SL_ie],_SL_line[_SL_ie+1],_SL_yd);
			}
		}
	}
}
_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Line2D"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.data.Line2D"),new Array("jazzy.data.Bitwise2D","jazzy.data.Linewise2D"));
var _SC_jazzy_data_Line2D=_CL;
_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Line2D"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Line2D"+' setup object binder');

function _SS_jazzy_data_Line2D_bind(_SL_instance)
{
	_SL_instance._OM_append3=_SM_jazzy_data_Line2D_append3;
	_SL_instance._OM_jazzy_data_Line2D_append3=_SM_jazzy_data_Line2D_append3;
	_SL_instance._OM_seal=_SM_jazzy_data_Line2D_seal;
	_SL_instance._OM_jazzy_data_Line2D_seal=_SM_jazzy_data_Line2D_seal;
	_SL_instance._OM_getWidth=_SM_jazzy_data_Line2D_getWidth;
	_SL_instance._OM_jazzy_data_Line2D_getWidth=_SM_jazzy_data_Line2D_getWidth;
	_SL_instance._OM_getHeight=_SM_jazzy_data_Line2D_getHeight;
	_SL_instance._OM_jazzy_data_Line2D_getHeight=_SM_jazzy_data_Line2D_getHeight;
	_SL_instance._OM_valueAt2=_SM_jazzy_data_Line2D_valueAt2;
	_SL_instance._OM_jazzy_data_Line2D_valueAt2=_SM_jazzy_data_Line2D_valueAt2;
	_SL_instance._OM_rasterize1=_SM_jazzy_data_Line2D_rasterize1;
	_SL_instance._OM_jazzy_data_Line2D_rasterize1=_SM_jazzy_data_Line2D_rasterize1;
	_SL_instance._OV_jazzy_data_Line2D_width=0;
	_SL_instance._OV_jazzy_data_Line2D_height=0;
	_SL_instance._OV_jazzy_data_Line2D_matrix=null;
	_SL_instance._OV_jazzy_data_Line2D_sealed=false;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_jazzy_data_Line2D_bind;
_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Line2D"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Line2D"+' setup object initialize');

function _SS_jazzy_data_Line2D_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Line2D"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Linewise2D"+' flush functions');


_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Linewise2D"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.data.Linewise2D"),new Array("jazzy.data.Data2D"));
var _SC_jazzy_data_Linewise2D=_CL;
_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Linewise2D"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Linewise2D"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Linewise2D"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Scan2D"+' flush functions');

function _SO_jazzy_data_Scan2D_Scan2D4(_SL_w,_SL_h,_SL_xs,_SL_ys)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_data_Scan2D);
	_SM_jazzy_lang_System_CALL2(this,_SS_jazzy_data_Scan2D_init);
	this._OV_jazzy_data_Scan2D_width=_SL_w;
	this._OV_jazzy_data_Scan2D_height=_SL_h;
	this._OV_jazzy_data_Scan2D_xIndex=_SL_xs;
	this._OV_jazzy_data_Scan2D_yIndex=_SL_ys;
}
function _SM_jazzy_data_Scan2D_getWidth()
{
	return this._OV_jazzy_data_Scan2D_width;
}
function _SM_jazzy_data_Scan2D_getHeight()
{
	return this._OV_jazzy_data_Scan2D_height;
}
function _SM_jazzy_data_Scan2D_valueAt2(_SL_xb,_SL_ya)
{
	if(_SL_ya<0||_SL_ya>=this._OV_jazzy_data_Scan2D_height)
		return false;
	var _SL_xIa=this._OV_jazzy_data_Scan2D_yIndex[_SL_ya];
	var _SL_xIb=this._OV_jazzy_data_Scan2D_yIndex[_SL_ya+1];
	for(var _SL_xI=_SL_xIa;_SL_xI<_SL_xIb;_SL_xI+=2)
	{
		if(_SL_xb<this._OV_jazzy_data_Scan2D_xIndex[_SL_xI])
			return false;
		if(_SL_xb<this._OV_jazzy_data_Scan2D_xIndex[_SL_xI+1])
			return true;
	}
	return false;
}
function _SM_jazzy_data_Scan2D_rasterize1(_SL_visitora)
{
	var _SL_xIaa=this._OV_jazzy_data_Scan2D_yIndex[0];
	for(var _SL_y=0;_SL_y<this._OV_jazzy_data_Scan2D_height;_SL_y++)
	{
		var _SL_xIb=this._OV_jazzy_data_Scan2D_yIndex[_SL_y+1];
		for(var _SL_xI=_SL_xIaa;_SL_xI<_SL_xIb;_SL_xI+=2)
		{
			_SL_visitora(this._OV_jazzy_data_Scan2D_xIndex[_SL_xI],this._OV_jazzy_data_Scan2D_xIndex[_SL_xI+1],_SL_y);
		}
		_SL_xIaa=_SL_xIb;
	}
}
function _SM_jazzy_data_Scan2D_toString()
{
	return "Scan2D("+this._OV_jazzy_data_Scan2D_xIndex.length+","+this._OV_jazzy_data_Scan2D_yIndex.length+")";
}
_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Scan2D"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.data.Scan2D"),new Array("jazzy.data.Bitwise2D","jazzy.data.Linewise2D"));
var _SC_jazzy_data_Scan2D=_CL;
_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Scan2D"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Scan2D"+' setup object binder');

function _SS_jazzy_data_Scan2D_bind(_SL_instance)
{
	_SL_instance._OM_getWidth=_SM_jazzy_data_Scan2D_getWidth;
	_SL_instance._OM_jazzy_data_Scan2D_getWidth=_SM_jazzy_data_Scan2D_getWidth;
	_SL_instance._OM_getHeight=_SM_jazzy_data_Scan2D_getHeight;
	_SL_instance._OM_jazzy_data_Scan2D_getHeight=_SM_jazzy_data_Scan2D_getHeight;
	_SL_instance._OM_valueAt2=_SM_jazzy_data_Scan2D_valueAt2;
	_SL_instance._OM_jazzy_data_Scan2D_valueAt2=_SM_jazzy_data_Scan2D_valueAt2;
	_SL_instance._OM_rasterize1=_SM_jazzy_data_Scan2D_rasterize1;
	_SL_instance._OM_jazzy_data_Scan2D_rasterize1=_SM_jazzy_data_Scan2D_rasterize1;
	_SL_instance._OM_toString=_SM_jazzy_data_Scan2D_toString;
	_SL_instance._OM_jazzy_data_Scan2D_toString=_SM_jazzy_data_Scan2D_toString;
	_SL_instance._OV_jazzy_data_Scan2D_width=0;
	_SL_instance._OV_jazzy_data_Scan2D_height=0;
	_SL_instance._OV_jazzy_data_Scan2D_xIndex=null;
	_SL_instance._OV_jazzy_data_Scan2D_yIndex=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_jazzy_data_Scan2D_bind;
_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Scan2D"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Scan2D"+' setup object initialize');

function _SS_jazzy_data_Scan2D_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("jazzy.data.Scan2D"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);

function _SO_jazzy_util_DivTerminal_DivTerminal5(_SL_parent,_SL_xa,_SL_yd,_SL_wb,_SL_hb)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_util_DivTerminal);
	_SM_jazzy_lang_System_BIND2(this,_SO_jazzy_util_DivTerminal_DivTerminal6)._temp_(_SL_parent,_SL_xa,_SL_yd,_SL_wb,_SL_hb,"");
}
function _SO_jazzy_util_DivTerminal_DivTerminal6(_SL_parent,_SL_xa,_SL_yd,_SL_wb,_SL_hb,_SL_stylea)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_util_DivTerminal);
	_SM_jazzy_lang_System_CALL2(this,_SS_jazzy_util_DivTerminal_init);
	this._OV_jazzy_util_DivTerminal_output=_SL_parent._OM_derive3(null,"div",_SM_jazzy_dom_core_Style_clipAt4(_SL_xa,_SL_yd,_SL_wb,_SL_hb)+_SL_stylea);
	this._OV_jazzy_util_DivTerminal_output._OM_append1("[Terminal]");
	this._OV_jazzy_util_DivTerminal_output._OM_spawn3(null,"hr","");
	this._OV_jazzy_util_DivTerminal_output._OM_append1("> ");
}
function _SM_jazzy_util_DivTerminal_println1(_SL_str)
{
	this._OV_jazzy_util_DivTerminal_output._OM_append1(""+_SL_str);
	this._OV_jazzy_util_DivTerminal_output._OM_spawn3(null,"br","")._OM_append1("> ");
}
function _SM_jazzy_util_DivTerminal_print1(_SL_str)
{
	this._OV_jazzy_util_DivTerminal_output._OM_append1(""+_SL_str);
}

_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.util.DivTerminal"),new Array("jazzy.util.Terminal"));
var _SC_jazzy_util_DivTerminal=_CL;

_CL._OM_jazzy_lang_Class_bind=
function()
{
}


function _SS_jazzy_util_DivTerminal_bind(_SL_instance)
{
	_SL_instance.println=_SM_jazzy_util_DivTerminal_println1;
	_SL_instance.print=_SM_jazzy_util_DivTerminal_print1;
	_SL_instance._OM_println1=_SM_jazzy_util_DivTerminal_println1;
	_SL_instance._OM_jazzy_util_DivTerminal_println1=_SM_jazzy_util_DivTerminal_println1;
	_SL_instance._OM_print1=_SM_jazzy_util_DivTerminal_print1;
	_SL_instance._OM_jazzy_util_DivTerminal_print1=_SM_jazzy_util_DivTerminal_print1;
	_SL_instance._OV_jazzy_util_DivTerminal_output=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_jazzy_util_DivTerminal_bind;

_CL._OM_jazzy_lang_Class_init=
function()
{
}


function _SS_jazzy_util_DivTerminal_init()
{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);




_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.util.Terminal"),new Array());
var _SC_jazzy_util_Terminal=_CL;

_CL._OM_jazzy_lang_Class_bind=
function()
{
}

_CL._OM_jazzy_lang_Class_init=
function()
{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);

function _SO_jazzy_dom_canvas_Canvas_Canvas()
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_dom_canvas_Canvas);
	_SM_jazzy_lang_System_BIND2(this,_SO_jazzy_dom_canvas_Canvas_Canvas1)._temp_(null);
}
function _SO_jazzy_dom_canvas_Canvas_Canvas1(_SL_c)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_dom_canvas_Canvas);
	_SM_jazzy_lang_System_CALL2(this,_SS_jazzy_dom_canvas_Canvas_init);
	this._OV_jazzy_dom_canvas_Canvas_font=_SF_jazzy_dom_core_Font_DEFAULT;
	this._OV_jazzy_dom_canvas_Canvas_thick=5;
	this._OV_jazzy_dom_canvas_Canvas_buffer=new _SO_jazzy_lang_StringBuffer_StringBuffer();
	this._OV_jazzy_dom_canvas_Canvas_container=_SL_c;
	if(_SV_jazzy_dom_core_Environment_COMPATIBLE)
	{
		if(_SC_jazzy_dom_canvas_Canvas._OV_jazzy_dom_canvas_Canvas_STROKE!=null)
		{
			this._OM_setStroke1(_SC_jazzy_dom_canvas_Canvas._OV_jazzy_dom_canvas_Canvas_STROKE);
		}
		var _SL_device;
		if(this._OV_jazzy_dom_canvas_Canvas_container!=null)
		{
			this._OV_jazzy_dom_canvas_Canvas_canvas=this._OV_jazzy_dom_canvas_Canvas_container._OM_derive3(null,"div","");
			_SL_device=_SV_jazzy_dom_canvas_Portable_flush_Element;
		}
		else
		{
			_SL_device=_SV_jazzy_dom_canvas_Portable_flush_Root;
		}
		_SM_jazzy_lang_Function_copycat3(_SM_jazzy_lang_Function_copycat3(_SM_jazzy_lang_Function_install3(this,'_OM_flush',_SL_device),'_OM_jazzy_dom_canvas_Canvas_flush','_OM_flush'),'flush','_OM_flush');
	}
	this._OM_setColor1("#000000");
	this._OM_setPrintable1(false);
}
function _SM_jazzy_dom_canvas_Canvas_getPeer()
{
	return this._OV_jazzy_dom_canvas_Canvas_canvas;
}
function _SM_jazzy_dom_canvas_Canvas_setThick1(_SL_t)
{
	this._OV_jazzy_dom_canvas_Canvas_thick=_SL_t;
}
function _SM_jazzy_dom_canvas_Canvas_allowDummyDiv()
{
	this._OV_jazzy_dom_canvas_Canvas_dummy_allowed=true;
}
function _SM_jazzy_dom_canvas_Canvas_allowDummyDiv1(_SL_styleb)
{
	this._OV_jazzy_dom_canvas_Canvas_dummy_allowed=true;
	this._OV_jazzy_dom_canvas_Canvas_dummy_style=_SL_styleb;
}
function _SM_jazzy_dom_canvas_Canvas_setFont1(_SL_f)
{
	this._OV_jazzy_dom_canvas_Canvas_font=_SL_f;
}
function _SM_jazzy_dom_canvas_Canvas_setColor1(_SL_c)
{
	this._OV_jazzy_dom_canvas_Canvas_color=(_SL_c).toLowerCase();
	this._OV_jazzy_dom_canvas_Canvas_bg_color=_SV_jazzy_dom_core_Style_BG_+this._OV_jazzy_dom_canvas_Canvas_color+";";
}
function _SM_jazzy_dom_canvas_Canvas_createDiv4(_SL_xb,_SL_ya,_SL_wa,_SL_ha)
{
}
function _SM_jazzy_dom_canvas_Canvas_replaceHtml()
{
	var _SL_html=this._OV_jazzy_dom_canvas_Canvas_buffer._OM_toString();
	var _SL_replaced=_SL_html.replace(_SV_jazzy_dom_canvas_Portable_REPLICA,this._OV_jazzy_dom_canvas_Canvas_substitution);
	if(this._OV_jazzy_dom_canvas_Canvas_dummy_allowed)
	{
		if(this._OV_jazzy_dom_canvas_Canvas_dummy_style==null)
		{
			_SL_replaced=(_SL_replaced).replace(_SV_jazzy_dom_canvas_Portable_PATCHING,_SV_jazzy_dom_canvas_Portable_PATCHED);
		}
		else
		{
			_SL_replaced=(_SL_replaced).replace(_SV_jazzy_dom_canvas_Portable_PATCHING,this._OV_jazzy_dom_canvas_Canvas_dummy_style);
		}
	}
	return _SL_replaced;
}
function _SM_jazzy_dom_canvas_Canvas_flush()
{
	window.status=("incompatible device");
}
function _SM_jazzy_dom_canvas_Canvas_setPrintable1(_SL_pa)
{
	if(_SL_pa&&_SV_jazzy_lang_System_COMPATIBLE_MSIE&&!_SV_jazzy_lang_System_LEGACY_MSIE)
	{
		return;
	}
	this._OV_jazzy_dom_canvas_Canvas_printable=_SL_pa;
	var _SL_div_creator;
	if(_SV_jazzy_dom_core_Environment_OPTIMAL)
	{
		_SL_div_creator=_SV_jazzy_dom_canvas_Portable_createDiv_MSIE;
		this._OV_jazzy_dom_canvas_Canvas_substitution=_SL_pa?_SV_jazzy_dom_canvas_Portable_ALT_MOZ_PRINT:_SV_jazzy_dom_canvas_Portable_ALT_MOZ;
	}
	else
	{
		_SL_div_creator=_SV_jazzy_dom_canvas_Portable_createDiv_W3CDOM;
		if(_SV_jazzy_dom_core_Environment_MOZILLA)
		{
			this._OV_jazzy_dom_canvas_Canvas_substitution=_SL_pa?_SV_jazzy_dom_canvas_Portable_ALT_MOZ_PRINT:_SV_jazzy_dom_canvas_Portable_ALT_MOZ;
		}
		else
		{
			this._OV_jazzy_dom_canvas_Canvas_substitution=_SL_pa?_SV_jazzy_dom_canvas_Portable_ALT_W3C_PRINT:_SV_jazzy_dom_canvas_Portable_ALT_W3C;
		}
	}
	_SM_jazzy_lang_Function_copycat3(_SM_jazzy_lang_Function_install3(this,'_OM_createDiv4',_SL_div_creator),'_OM_jazzy_dom_canvas_Canvas_createDiv4','_OM_createDiv4');
}
function _SM_jazzy_dom_canvas_Canvas_drawLine4(_SL_xaa,_SL_yaa,_SL_xba,_SL_yba)
{
}
function _SM_jazzy_dom_canvas_Canvas_drawSquare4(_SL_xb,_SL_ya,_SL_wa,_SL_ha)
{
}
function _SM_jazzy_dom_canvas_Canvas_drawOval4(_SL_left,_SL_top,_SL_width,_SL_height)
{
}
function _SM_jazzy_dom_canvas_Canvas_drawLines2(_SL_xb,_SL_ya)
{
	for(var _SL_ib=_SL_xb.length-2;_SL_ib>=0;_SL_ib--)
	{
		this._OM_drawLine4(_SL_xb[_SL_ib],_SL_ya[_SL_ib],_SL_xb[_SL_ib+1],_SL_ya[_SL_ib+1]);
	}
}
function _SM_jazzy_dom_canvas_Canvas_fillSquare4(_SL_xb,_SL_ya,_SL_wa,_SL_ha)
{
	this._OM_createDiv4(_SL_xb,_SL_ya,_SL_wa,_SL_ha);
}
function _SM_jazzy_dom_canvas_Canvas_drawPolygon2(_SL_xb,_SL_ya)
{
	this._OM_drawLines2(_SL_xb,_SL_ya);
	this._OM_drawLine4(_SL_xb[0],_SL_ya[0],_SL_xb[_SL_xb.length-1],_SL_ya[_SL_ya.length-1]);
}
function _SM_jazzy_dom_canvas_Canvas_drawEllipse4(_SL_xb,_SL_ya,_SL_wa,_SL_ha)
{
	this._OM_drawOval4(_SL_xb,_SL_ya,_SL_wa,_SL_ha);
}
function _SM_jazzy_dom_canvas_Canvas_fillOval4(_SL_left,_SL_top,_SL_wa,_SL_ha)
{
	var _SL_a=_SL_wa>>1;
	var _SL_bc=_SL_ha>>1;
	var _SL_wod=_SL_wa&1;
	var _SL_hod=_SL_ha&1;
	var _SL_cx=_SL_left+_SL_a;
	var _SL_cy=_SL_top+_SL_bc;
	var _SL_xe=0;
	var _SL_ye=_SL_bc;
	var _SL_oy=_SL_bc;
	var _SL_aa2=(_SL_a*_SL_a)<<1;
	var _SL_aa4=_SL_aa2<<1;
	var _SL_bb2=(_SL_bc*_SL_bc)<<1;
	var _SL_bb4=_SL_bb2<<1;
	var _SL_sta=(_SL_aa2>>1)*(1-(_SL_bc<<1))+_SL_bb2;
	var _SL_tt=(_SL_bb2>>1)-_SL_aa2*((_SL_bc<<1)-1);
	var _SL_xl,_SL_dw,_SL_dh;
	if(_SL_wa>0)
	{
		while(_SL_ye>0)
		{
			if(_SL_sta<0)
			{
				_SL_sta+=_SL_bb2*((_SL_xe<<1)+3);
				_SL_tt+=_SL_bb4*(++_SL_xe);
			}
			else
				if(_SL_tt<0)
				{
					_SL_sta+=_SL_bb2*((_SL_xe<<1)+3)-_SL_aa4*(_SL_ye-1);
					_SL_xl=_SL_cx-_SL_xe;
					_SL_dw=(_SL_xe<<1)+_SL_wod;
					_SL_tt+=_SL_bb4*(++_SL_xe)-_SL_aa2*(((_SL_ye--)<<1)-3);
					_SL_dh=_SL_oy-_SL_ye;
					this._OM_createDiv4(_SL_xl,_SL_cy-_SL_oy,_SL_dw,_SL_dh);
					this._OM_createDiv4(_SL_xl,_SL_cy+_SL_ye+_SL_hod,_SL_dw,_SL_dh);
					_SL_oy=_SL_ye;
				}
				else
				{
					_SL_tt-=_SL_aa2*((_SL_ye<<1)-3);
					_SL_sta-=_SL_aa4*(--_SL_ye);
				}
		}
	}
	this._OM_createDiv4(_SL_cx-_SL_a,_SL_cy-_SL_oy,_SL_wa,(_SL_oy<<1)+_SL_hod);
}
function _SM_jazzy_dom_canvas_Canvas_fillPolygon2(_SL_array_x,_SL_array_y)
{
	var _SL_n=_SL_array_x.length;
	if(_SL_n<2)
	{
		return;
	}
	var _SL_if;
	var _SL_yf;
	var _SL_miny,_SL_maxy;
	var _SL_x1c,_SL_y1c;
	var _SL_x2a,_SL_y2a;
	var _SL_ind1,_SL_ind2;
	var _SL_ints;
	_SL_miny=_SL_array_y[0];
	_SL_maxy=_SL_array_y[0];
	for(_SL_if=1;_SL_if<_SL_n;_SL_if++)
	{
		if(_SL_array_y[_SL_if]<_SL_miny)
			_SL_miny=_SL_array_y[_SL_if];
		if(_SL_array_y[_SL_if]>_SL_maxy)
			_SL_maxy=_SL_array_y[_SL_if];
	}
	for(_SL_yf=_SL_miny;_SL_yf<=_SL_maxy;_SL_yf++)
	{
		var _SL_polyInts=_SM_jazzy_lang_System_newArray4("$int",0,new Array(0,null),0);
		_SL_ints=0;
		for(_SL_if=0;_SL_if<_SL_n;_SL_if++)
		{
			if(_SL_if==0)
			{
				_SL_ind1=_SL_n-1;
				_SL_ind2=0;
			}
			else
			{
				_SL_ind1=_SL_if-1;
				_SL_ind2=_SL_if;
			}
			_SL_y1c=_SL_array_y[_SL_ind1];
			_SL_y2a=_SL_array_y[_SL_ind2];
			if(_SL_y1c<_SL_y2a)
			{
				_SL_x1c=_SL_array_x[_SL_ind1];
				_SL_x2a=_SL_array_x[_SL_ind2];
			}
			else
				if(_SL_y1c>_SL_y2a)
				{
					_SL_y2a=_SL_array_y[_SL_ind1];
					_SL_y1c=_SL_array_y[_SL_ind2];
					_SL_x2a=_SL_array_x[_SL_ind1];
					_SL_x1c=_SL_array_x[_SL_ind2];
				}
				else
				{
					continue;
				}
			if((_SL_yf>=_SL_y1c)&&(_SL_yf<_SL_y2a))
			{
				_SL_polyInts[_SL_ints++]=Math.round((_SL_yf-_SL_y1c)*(_SL_x2a-_SL_x1c)/(_SL_y2a-_SL_y1c)+_SL_x1c);
			}
			else
				if((_SL_yf==_SL_maxy)&&(_SL_yf>_SL_y1c)&&(_SL_yf<=_SL_y2a))
				{
					_SL_polyInts[_SL_ints++]=Math.round((_SL_yf-_SL_y1c)*(_SL_x2a-_SL_x1c)/(_SL_y2a-_SL_y1c)+_SL_x1c);
				}
		}
		_SM_jazzy_lang_System_sort1(_SL_polyInts);
		for(_SL_if=0;_SL_if<_SL_ints;_SL_if+=2)
		{
			this._OM_createDiv4(_SL_polyInts[_SL_if],_SL_yf,_SL_polyInts[_SL_if+1]-_SL_polyInts[_SL_if]+1,1);
		}
	}
}
function _SM_jazzy_dom_canvas_Canvas_fillArc6(_SL_iL,_SL_iT,_SL_iW,_SL_iH,_SL_angA,_SL_angZ)
{
	var _SL_aa=_SL_iW>>1;
	var _SL_bd=_SL_iH>>1;
	var _SL_odds=(_SL_iW&1)|((_SL_iH&1)<<16);
	var _SL_cxa=_SL_iL+_SL_aa;
	var _SL_cya=_SL_iT+_SL_bd;
	var _SL_xf=0;
	var _SL_yg=_SL_bd;
	var _SL_ox=_SL_xf;
	var _SL_oya=_SL_yg;
	var _SL_aa2a=(_SL_aa*_SL_aa)<<1;
	var _SL_aa4a=_SL_aa2a<<1;
	var _SL_bb2a=(_SL_bd*_SL_bd)<<1;
	var _SL_bb4a=_SL_bb2a<<1;
	var _SL_stb=(_SL_aa2a>>1)*(1-(_SL_bd<<1))+_SL_bb2a;
	var _SL_tta=(_SL_bb2a>>1)-_SL_aa2a*((_SL_bd<<1)-1);
	var _SL_xEndA,_SL_yEndA,_SL_xEndZ,_SL_yEndZ;
	var _SL_fAngA=_SL_angA%360.0;
	var _SL_fAngZ=_SL_angZ%360.0;
	var _SL_iSects=(1<<(Math.floor(_SL_fAngA/180.0)<<3))|(2<<(Math.floor(_SL_fAngZ/180.0)<<3))|((_SL_fAngA>=_SL_fAngZ)<<16);
	var _SL_aBndA=_SM_jazzy_lang_System_newArray4("$int",0,new Array(_SL_bd+1,null),0);
	var _SL_aBndZ=_SM_jazzy_lang_System_newArray4("$int",0,new Array(_SL_bd+1,null),0);
	_SL_fAngA*=_SF_jazzy_dom_canvas_Canvas_PI_ABOVE_180;
	_SL_fAngZ*=_SF_jazzy_dom_canvas_Canvas_PI_ABOVE_180;
	_SL_xEndA=_SL_cxa+Math.round(_SL_aa*Math.cos(_SL_fAngA));
	_SL_yEndA=_SL_cya+Math.round(-_SL_bd*Math.sin(_SL_fAngA));
	_SL_xEndZ=_SL_cxa+Math.round(_SL_aa*Math.cos(_SL_fAngZ));
	_SL_yEndZ=_SL_cya+Math.round(-_SL_bd*Math.sin(_SL_fAngZ));
	_SM_jazzy_dom_canvas_Portable_toVerticalLine5(_SL_aBndA,_SL_cxa,_SL_cya,_SL_xEndA,_SL_yEndA);
	_SM_jazzy_dom_canvas_Portable_toVerticalLine5(_SL_aBndZ,_SL_cxa,_SL_cya,_SL_xEndZ,_SL_yEndZ);
	while(_SL_yg>0)
	{
		if(_SL_stb<0)
		{
			_SL_stb+=_SL_bb2a*((_SL_xf<<1)+3);
			_SL_tta+=_SL_bb4a*(++_SL_xf);
		}
		else
			if(_SL_tta<0)
			{
				_SL_stb+=_SL_bb2a*((_SL_xf<<1)+3)-_SL_aa4a*(_SL_yg-1);
				_SL_ox=_SL_xf;
				_SL_tta+=_SL_bb4a*(++_SL_xf)-_SL_aa2a*(((_SL_yg--)<<1)-3);
				this._OM_drawArcPart9(_SL_ox,_SL_yg,_SL_oya,_SL_cxa,_SL_cya,_SL_odds,_SL_aBndA,_SL_aBndZ,_SL_iSects);
				_SL_oya=_SL_yg;
			}
			else
			{
				_SL_tta-=_SL_aa2a*((_SL_yg<<1)-3);
				_SL_stb-=_SL_aa4a*(--_SL_yg);
				if(_SL_yg!=0&&(_SL_aBndA[_SL_yg]!=_SL_aBndA[_SL_yg-1]||_SL_aBndZ[_SL_yg]!=_SL_aBndZ[_SL_yg-1]))
				{
					this._OM_drawArcPart9(_SL_xf,_SL_yg,_SL_oya,_SL_cxa,_SL_cya,_SL_odds,_SL_aBndA,_SL_aBndZ,_SL_iSects);
					_SL_ox=_SL_xf;
					_SL_oya=_SL_yg;
				}
			}
	}
	this._OM_drawArcPart9(_SL_xf,0,_SL_oya,_SL_cxa,_SL_cya,_SL_odds,_SL_aBndA,_SL_aBndZ,_SL_iSects);
	if((_SL_odds>>16)!=0)
	{
		if((_SL_iSects>>16)!=0)
		{
			var _SL_xla=(_SL_yEndA<=_SL_cya||_SL_yEndZ>_SL_cya)?(_SL_cxa-_SL_xf):_SL_cxa;
			this._OM_createDiv4(_SL_xla,_SL_cya,_SL_xf+_SL_cxa-_SL_xla+(_SL_odds&65535),1);
		}
		else
			if((_SL_iSects&1)!=0&&_SL_yEndZ>_SL_cya)
			{
				this._OM_createDiv4(_SL_cxa-_SL_xf,_SL_cya,_SL_xf,1);
			}
	}
}
function _SM_jazzy_dom_canvas_Canvas_drawString3(_SL_text,_SL_xa,_SL_yd)
{
	this._OV_jazzy_dom_canvas_Canvas_buffer._OM_append1("<div style=\"position:absolute;white-space:nowrap;"+"left:"+_SL_xa+"px;"+"top:"+_SL_yd+"px;"+"color:"+this._OV_jazzy_dom_canvas_Canvas_color+";"+this._OV_jazzy_dom_canvas_Canvas_font._OM_toStyle()+"\">"+_SL_text+"</div>");
}
function _SM_jazzy_dom_canvas_Canvas_drawString5(_SL_text,_SL_xa,_SL_yd,_SL_widtha,_SL_align)
{
	this._OV_jazzy_dom_canvas_Canvas_buffer._OM_append1("<div style=\"position:absolute;overflow:hidden;"+"left:"+_SL_xa+"px;"+"top:"+_SL_yd+"px;"+"width:"+_SL_widtha+"px;"+"text-align:"+_SL_align+";"+"color:"+this._OV_jazzy_dom_canvas_Canvas_color+";"+this._OV_jazzy_dom_canvas_Canvas_font._OM_toStyle()+"\">"+_SL_text+"</div>");
}
function _SM_jazzy_dom_canvas_Canvas_drawImage4(_SL_imgSrc,_SL_xa,_SL_yd,_SL_addon)
{
	this._OV_jazzy_dom_canvas_Canvas_buffer._OM_append1("<div style=\""+_SM_jazzy_dom_core_Style_bindAt2(_SL_xa,_SL_yd)+"\">"+"<img src=\""+_SL_imgSrc+"\""+(_SL_addon!=null?(" "+_SL_addon):"")+"></div>");
}
function _SM_jazzy_dom_canvas_Canvas_drawImage26(_SL_imgSrc,_SL_xa,_SL_yd,_SL_wb,_SL_hb,_SL_addona)
{
	this._OV_jazzy_dom_canvas_Canvas_buffer._OM_append1("<div style=\""+_SM_jazzy_dom_core_Style_clipAt4(_SL_xa,_SL_yd,_SL_wb,_SL_hb)+"\">"+"<img src=\""+_SL_imgSrc+"\" width=\""+_SL_wb+"\" height=\""+_SL_hb+"\""+(_SL_addona!=null?(" "+_SL_addona):"")+"></div>");
}
function _SM_jazzy_dom_canvas_Canvas_drawRegion8(_SL_imgSrc,_SL_xa,_SL_yd,_SL_vx,_SL_vy,_SL_vw,_SL_vh,_SL_addonb)
{
	this._OV_jazzy_dom_canvas_Canvas_buffer._OM_append1("<div style=\""+_SM_jazzy_dom_core_Style_clipAt4(_SL_xa,_SL_yd,_SL_vw,_SL_vh)+_SV_jazzy_dom_core_Style_HIDE+"\">"+"<img src=\""+_SL_imgSrc+"\""+(_SL_addonb!=null?(" "+_SL_addonb):"")+"style=\""+_SV_jazzy_dom_core_Style_ABS+"left: -"+_SL_vx+"px;"+"top: -"+_SL_vy+"px;"+"\"></div>");
}
function _SM_jazzy_dom_canvas_Canvas_drawRegion210(_SL_imgSrc,_SL_xa,_SL_yd,_SL_wb,_SL_hb,_SL_vxa,_SL_vya,_SL_vwa,_SL_vha,_SL_addonc)
{
	this._OV_jazzy_dom_canvas_Canvas_buffer._OM_append1("<div style=\""+_SM_jazzy_dom_core_Style_clipAt4(_SL_xa,_SL_yd,_SL_vwa,_SL_vha)+_SV_jazzy_dom_core_Style_HIDE+"\">"+"<img src=\""+_SL_imgSrc+"\" width=\""+_SL_wb+"\" height=\""+_SL_hb+"\""+(_SL_addonc!=null?(" "+_SL_addonc):"")+"style=\""+_SV_jazzy_dom_core_Style_ABS+"left: -"+_SL_vxa+";"+"top: -"+_SL_vya+";"+"\"></div>");
}
function _SM_jazzy_dom_canvas_Canvas_clear()
{
	this._OV_jazzy_dom_canvas_Canvas_buffer._OM_clear();
	if(this._OV_jazzy_dom_canvas_Canvas_canvas!=null)
	{
		this._OV_jazzy_dom_canvas_Canvas_canvas._OM_inject1("");
	}
}
function _SM_jazzy_dom_canvas_Canvas_reflush()
{
	if(this._OV_jazzy_dom_canvas_Canvas_canvas!=null)
	{
		this._OV_jazzy_dom_canvas_Canvas_canvas._OM_inject1("");
	}
	this._OM_flush();
}
function _SM_jazzy_dom_canvas_Canvas_drawArcPart9(_SL_x0,_SL_ya,_SL_oyb,_SL_cxb,_SL_cyb,_SL_oddsa,_SL_aBndAa,_SL_aBndZa,_SL_iSectsa)
{
	var _SL_xrDef=_SL_cxb+_SL_x0+(_SL_oddsa&65535);
	var _SL_hc=_SL_oyb-_SL_ya;
	var _SL_y2b,_SL_xlb,_SL_xr,_SL_wc;
	if(_SL_hc==0)
	{
		_SL_hc=1;
	}
	var _SL_xg=_SL_cxb-_SL_x0;
	if((_SL_iSectsa&16711680)!=0)
	{
		_SL_y2b=_SL_cyb-_SL_ya-_SL_hc;
		if((_SL_iSectsa&255)!=0)
		{
			if((_SL_iSectsa&2)!=0)
			{
				_SL_xlb=Math.max(_SL_xg,_SL_aBndZa[_SL_ya]);
				_SL_wc=_SL_xrDef-_SL_xlb;
				if(_SL_wc>0)
				{
					this._OM_createDiv4(_SL_xlb,_SL_y2b,_SL_wc,_SL_hc);
				}
			}
			if((_SL_iSectsa&1)!=0)
			{
				_SL_xr=Math.min(_SL_xrDef,_SL_aBndAa[_SL_ya]);
				_SL_wc=_SL_xr-_SL_xg;
				if(_SL_wc>0)
				{
					this._OM_createDiv4(_SL_xg,_SL_y2b,_SL_wc,_SL_hc);
				}
			}
		}
		else
		{
			this._OM_createDiv4(_SL_xg,_SL_y2b,_SL_xrDef-_SL_xg,_SL_hc);
		}
		_SL_y2b=_SL_cyb+_SL_ya+(_SL_oddsa>>16);
		if((_SL_iSectsa&65280)!=0)
		{
			if((_SL_iSectsa&256)!=0)
			{
				_SL_xlb=Math.max(_SL_xg,_SL_aBndAa[_SL_ya]);
				_SL_wc=_SL_xrDef-_SL_xlb;
				if(_SL_wc>0)
				{
					this._OM_createDiv4(_SL_xlb,_SL_y2b,_SL_wc,_SL_hc);
				}
			}
			if((_SL_iSectsa&512)!=0)
			{
				_SL_xr=Math.min(_SL_xrDef,_SL_aBndZa[_SL_ya]);
				_SL_wc=_SL_xr-_SL_xg;
				if(_SL_wc>0)
				{
					this._OM_createDiv4(_SL_xg,_SL_y2b,_SL_wc,_SL_hc);
				}
			}
		}
		else
		{
			this._OM_createDiv4(_SL_xg,_SL_y2b,_SL_xrDef-_SL_xg,_SL_hc);
		}
	}
	else
	{
		if((_SL_iSectsa&255)!=0)
		{
			if((_SL_iSectsa&2)!=0)
			{
				_SL_xlb=Math.max(_SL_xg,_SL_aBndZa[_SL_ya]);
			}
			else
			{
				_SL_xlb=_SL_xg;
			}
			if((_SL_iSectsa&1)!=0)
			{
				_SL_xr=Math.min(_SL_xrDef,_SL_aBndAa[_SL_ya]);
			}
			else
			{
				_SL_xr=_SL_xrDef;
			}
			_SL_y2b=_SL_cyb-_SL_ya-_SL_hc;
			_SL_wc=_SL_xr-_SL_xlb;
			if(_SL_wc>0)
			{
				this._OM_createDiv4(_SL_xlb,_SL_y2b,_SL_wc,_SL_hc);
			}
		}
		if((_SL_iSectsa&65280)!=0)
		{
			if((_SL_iSectsa&256)!=0)
			{
				_SL_xlb=Math.max(_SL_xg,_SL_aBndAa[_SL_ya]);
			}
			else
			{
				_SL_xlb=_SL_xg;
			}
			if((_SL_iSectsa&512)!=0)
			{
				_SL_xr=Math.min(_SL_xrDef,_SL_aBndZa[_SL_ya]);
			}
			else
			{
				_SL_xr=_SL_xrDef;
			}
			_SL_y2b=_SL_cyb+_SL_ya+(_SL_oddsa>>16);
			_SL_wc=_SL_xr-_SL_xlb;
			if(_SL_wc>0)
			{
				this._OM_createDiv4(_SL_xlb,_SL_y2b,_SL_wc,_SL_hc);
			}
		}
	}
}
function _SM_jazzy_dom_canvas_Canvas_drawOvalPart8(_SL_cxc,_SL_cyc,_SL_x,_SL_y,_SL_wd,_SL_hd,_SL_woda,_SL_hoda)
{
	var _SL_xlc=_SL_cxc-_SL_x;
	var _SL_xra=_SL_cxc+_SL_x+_SL_woda-_SL_wd;
	var _SL_yt=_SL_cyc-_SL_y;
	var _SL_ybb=_SL_cyc+_SL_y+_SL_hoda-_SL_hd;
	var _SL_W=_SL_wd;
	if(_SL_xra>_SL_xlc+_SL_W)
	{
		this._OM_createDiv4(_SL_xra,_SL_yt,_SL_W,_SL_hd);
		this._OM_createDiv4(_SL_xra,_SL_ybb,_SL_W,_SL_hd);
	}
	else
	{
		_SL_W=_SL_xra-_SL_xlc+_SL_W;
	}
	this._OM_createDiv4(_SL_xlc,_SL_yt,_SL_W,_SL_hd);
	this._OM_createDiv4(_SL_xlc,_SL_ybb,_SL_W,_SL_hd);
}
function _SM_jazzy_dom_canvas_Canvas_setStroke1(_SL_s)
{
	this._OV_jazzy_dom_canvas_Canvas_stroke=_SL_s;
	var _SL_line_aspect=_SL_s._OM_getLineAspect();
	var _SL_rect_aspect=_SL_s._OM_getSquareAspect();
	var _SL_oval_aspect=_SL_s._OM_getOvalAspect();
	_SM_jazzy_lang_Function_copycat3(_SM_jazzy_lang_Function_copycat3(_SM_jazzy_lang_Function_install3(this,'_OM_drawLine4',_SL_line_aspect),'_OM_jazzy_dom_canvas_Canvas_drawLine4','_OM_drawLine4'),'drawLine','_OM_drawLine4');
	_SM_jazzy_lang_Function_copycat3(_SM_jazzy_lang_Function_copycat3(_SM_jazzy_lang_Function_install3(this,'_OM_drawSquare4',_SL_rect_aspect),'_OM_jazzy_dom_canvas_Canvas_drawSquare4','_OM_drawSquare4'),'drawSquare','_OM_drawSquare4');
	_SM_jazzy_lang_Function_copycat3(_SM_jazzy_lang_Function_copycat3(_SM_jazzy_lang_Function_install3(this,'_OM_drawOval4',_SL_oval_aspect),'_OM_jazzy_dom_canvas_Canvas_drawOval4','_OM_drawOval4'),'drawOval','_OM_drawOval4');
}

_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.dom.canvas.Canvas"),new Array());
var _SC_jazzy_dom_canvas_Canvas=_CL;

_CL._OM_jazzy_lang_Class_bind=
function()
{
}


function _SS_jazzy_dom_canvas_Canvas_bind(_SL_instance)
{
	_SL_instance.drawImage2=_SM_jazzy_dom_canvas_Canvas_drawImage26;
	_SL_instance.drawString2=_SM_jazzy_dom_canvas_Canvas_drawString5;
	_SL_instance.fillSquare=_SM_jazzy_dom_canvas_Canvas_fillSquare4;
	_SL_instance.fillOval=_SM_jazzy_dom_canvas_Canvas_fillOval4;
	_SL_instance.setFont=_SM_jazzy_dom_canvas_Canvas_setFont1;
	_SL_instance.setPrintable=_SM_jazzy_dom_canvas_Canvas_setPrintable1;
	_SL_instance.drawLines=_SM_jazzy_dom_canvas_Canvas_drawLines2;
	_SL_instance.drawEllipse=_SM_jazzy_dom_canvas_Canvas_drawEllipse4;
	_SL_instance.drawString=_SM_jazzy_dom_canvas_Canvas_drawString3;
	_SL_instance.drawSquare=_SM_jazzy_dom_canvas_Canvas_drawSquare4;
	_SL_instance.drawOval=_SM_jazzy_dom_canvas_Canvas_drawOval4;
	_SL_instance.fillArc=_SM_jazzy_dom_canvas_Canvas_fillArc6;
	_SL_instance.clear=_SM_jazzy_dom_canvas_Canvas_clear;
	_SL_instance.setColor=_SM_jazzy_dom_canvas_Canvas_setColor1;
	_SL_instance.flush=_SM_jazzy_dom_canvas_Canvas_flush;
	_SL_instance.drawRegion2=_SM_jazzy_dom_canvas_Canvas_drawRegion210;
	_SL_instance.drawImage=_SM_jazzy_dom_canvas_Canvas_drawImage4;
	_SL_instance.reflush=_SM_jazzy_dom_canvas_Canvas_reflush;
	_SL_instance.fillPolygon=_SM_jazzy_dom_canvas_Canvas_fillPolygon2;
	_SL_instance.drawRegion=_SM_jazzy_dom_canvas_Canvas_drawRegion8;
	_SL_instance.drawLine=_SM_jazzy_dom_canvas_Canvas_drawLine4;
	_SL_instance.drawPolygon=_SM_jazzy_dom_canvas_Canvas_drawPolygon2;
	_SL_instance._OM_getPeer=_SM_jazzy_dom_canvas_Canvas_getPeer;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_getPeer=_SM_jazzy_dom_canvas_Canvas_getPeer;
	_SL_instance._OM_setThick1=_SM_jazzy_dom_canvas_Canvas_setThick1;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_setThick1=_SM_jazzy_dom_canvas_Canvas_setThick1;
	_SL_instance._OM_allowDummyDiv=_SM_jazzy_dom_canvas_Canvas_allowDummyDiv;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_allowDummyDiv=_SM_jazzy_dom_canvas_Canvas_allowDummyDiv;
	_SL_instance._OM_allowDummyDiv1=_SM_jazzy_dom_canvas_Canvas_allowDummyDiv1;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_allowDummyDiv1=_SM_jazzy_dom_canvas_Canvas_allowDummyDiv1;
	_SL_instance._OM_setFont1=_SM_jazzy_dom_canvas_Canvas_setFont1;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_setFont1=_SM_jazzy_dom_canvas_Canvas_setFont1;
	_SL_instance._OM_setColor1=_SM_jazzy_dom_canvas_Canvas_setColor1;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_setColor1=_SM_jazzy_dom_canvas_Canvas_setColor1;
	_SL_instance._OM_createDiv4=_SM_jazzy_dom_canvas_Canvas_createDiv4;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_createDiv4=_SM_jazzy_dom_canvas_Canvas_createDiv4;
	_SL_instance._OM_replaceHtml=_SM_jazzy_dom_canvas_Canvas_replaceHtml;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_replaceHtml=_SM_jazzy_dom_canvas_Canvas_replaceHtml;
	_SL_instance._OM_flush=_SM_jazzy_dom_canvas_Canvas_flush;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_flush=_SM_jazzy_dom_canvas_Canvas_flush;
	_SL_instance._OM_setPrintable1=_SM_jazzy_dom_canvas_Canvas_setPrintable1;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_setPrintable1=_SM_jazzy_dom_canvas_Canvas_setPrintable1;
	_SL_instance._OM_drawLine4=_SM_jazzy_dom_canvas_Canvas_drawLine4;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_drawLine4=_SM_jazzy_dom_canvas_Canvas_drawLine4;
	_SL_instance._OM_drawSquare4=_SM_jazzy_dom_canvas_Canvas_drawSquare4;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_drawSquare4=_SM_jazzy_dom_canvas_Canvas_drawSquare4;
	_SL_instance._OM_drawOval4=_SM_jazzy_dom_canvas_Canvas_drawOval4;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_drawOval4=_SM_jazzy_dom_canvas_Canvas_drawOval4;
	_SL_instance._OM_drawLines2=_SM_jazzy_dom_canvas_Canvas_drawLines2;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_drawLines2=_SM_jazzy_dom_canvas_Canvas_drawLines2;
	_SL_instance._OM_fillSquare4=_SM_jazzy_dom_canvas_Canvas_fillSquare4;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_fillSquare4=_SM_jazzy_dom_canvas_Canvas_fillSquare4;
	_SL_instance._OM_drawPolygon2=_SM_jazzy_dom_canvas_Canvas_drawPolygon2;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_drawPolygon2=_SM_jazzy_dom_canvas_Canvas_drawPolygon2;
	_SL_instance._OM_drawEllipse4=_SM_jazzy_dom_canvas_Canvas_drawEllipse4;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_drawEllipse4=_SM_jazzy_dom_canvas_Canvas_drawEllipse4;
	_SL_instance._OM_fillOval4=_SM_jazzy_dom_canvas_Canvas_fillOval4;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_fillOval4=_SM_jazzy_dom_canvas_Canvas_fillOval4;
	_SL_instance._OM_fillPolygon2=_SM_jazzy_dom_canvas_Canvas_fillPolygon2;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_fillPolygon2=_SM_jazzy_dom_canvas_Canvas_fillPolygon2;
	_SL_instance._OM_fillArc6=_SM_jazzy_dom_canvas_Canvas_fillArc6;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_fillArc6=_SM_jazzy_dom_canvas_Canvas_fillArc6;
	_SL_instance._OM_drawString3=_SM_jazzy_dom_canvas_Canvas_drawString3;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_drawString3=_SM_jazzy_dom_canvas_Canvas_drawString3;
	_SL_instance._OM_drawString5=_SM_jazzy_dom_canvas_Canvas_drawString5;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_drawString5=_SM_jazzy_dom_canvas_Canvas_drawString5;
	_SL_instance._OM_drawImage4=_SM_jazzy_dom_canvas_Canvas_drawImage4;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_drawImage4=_SM_jazzy_dom_canvas_Canvas_drawImage4;
	_SL_instance._OM_drawImage26=_SM_jazzy_dom_canvas_Canvas_drawImage26;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_drawImage26=_SM_jazzy_dom_canvas_Canvas_drawImage26;
	_SL_instance._OM_drawRegion8=_SM_jazzy_dom_canvas_Canvas_drawRegion8;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_drawRegion8=_SM_jazzy_dom_canvas_Canvas_drawRegion8;
	_SL_instance._OM_drawRegion210=_SM_jazzy_dom_canvas_Canvas_drawRegion210;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_drawRegion210=_SM_jazzy_dom_canvas_Canvas_drawRegion210;
	_SL_instance._OM_clear=_SM_jazzy_dom_canvas_Canvas_clear;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_clear=_SM_jazzy_dom_canvas_Canvas_clear;
	_SL_instance._OM_reflush=_SM_jazzy_dom_canvas_Canvas_reflush;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_reflush=_SM_jazzy_dom_canvas_Canvas_reflush;
	_SL_instance._OM_drawArcPart9=_SM_jazzy_dom_canvas_Canvas_drawArcPart9;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_drawArcPart9=_SM_jazzy_dom_canvas_Canvas_drawArcPart9;
	_SL_instance._OM_drawOvalPart8=_SM_jazzy_dom_canvas_Canvas_drawOvalPart8;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_drawOvalPart8=_SM_jazzy_dom_canvas_Canvas_drawOvalPart8;
	_SL_instance._OM_setStroke1=_SM_jazzy_dom_canvas_Canvas_setStroke1;
	_SL_instance._OM_jazzy_dom_canvas_Canvas_setStroke1=_SM_jazzy_dom_canvas_Canvas_setStroke1;
	_SL_instance._OV_jazzy_dom_canvas_Canvas_thick=0;
	_SL_instance._OV_jazzy_dom_canvas_Canvas_color=null;
	_SL_instance._OV_jazzy_dom_canvas_Canvas_bg_color=null;
	_SL_instance._OV_jazzy_dom_canvas_Canvas_printable=false;
	_SL_instance._OV_jazzy_dom_canvas_Canvas_container=null;
	_SL_instance._OV_jazzy_dom_canvas_Canvas_canvas=null;
	_SL_instance._OV_jazzy_dom_canvas_Canvas_buffer=null;
	_SL_instance._OV_jazzy_dom_canvas_Canvas_font=null;
	_SL_instance._OV_jazzy_dom_canvas_Canvas_stroke=null;
	_SL_instance._OV_jazzy_dom_canvas_Canvas_substitution=null;
	_SL_instance._OV_jazzy_dom_canvas_Canvas_dummy_allowed=false;
	_SL_instance._OV_jazzy_dom_canvas_Canvas_dummy_style=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_jazzy_dom_canvas_Canvas_bind;

_CL._OM_jazzy_lang_Class_init=
function()
{
	_SF_jazzy_dom_canvas_Canvas_PI_ABOVE_180=Math.PI/180.0;
}


function _SS_jazzy_dom_canvas_Canvas_init()
{
}


function aryanCanvas(_SL_c)
{
	_SM_jazzy_lang_System_BIND2(this,_SO_jazzy_dom_canvas_Canvas_Canvas1);
	this._temp_(_SL_c);
}
var _SF_jazzy_dom_canvas_Canvas_PI_ABOVE_180=null;
_CL._OV_jazzy_dom_canvas_Canvas_STROKE=null;
_SM_jazzy_lang_StackTrace_trackout2(null,0);

function _SM_jazzy_dom_canvas_Portable_CL0c(_SL_xa,_SL_yd,_SL_wb,_SL_hb)
{
	if(_SL_wb<=0||_SL_hb<=0)
		return;
	var _SL_proto=("%%"+this._OV_jazzy_dom_canvas_Canvas_color+";"+_SL_xa+";"+_SL_yd+";"+_SL_wb+";"+_SL_hb+";");
	var _SL_htmla=_SL_proto.replace(_SV_jazzy_dom_canvas_Portable_REPLICA,this._OV_jazzy_dom_canvas_Canvas_substitution);
	if(this._OV_jazzy_dom_canvas_Canvas_dummy_allowed)
	{
		if(this._OV_jazzy_dom_canvas_Canvas_dummy_style==null)
		{
			_SL_htmla=(_SL_htmla).replace(_SV_jazzy_dom_canvas_Portable_PATCHING,"");
		}
		else
		{
			_SL_htmla=(_SL_htmla).replace(_SV_jazzy_dom_canvas_Portable_PATCHING,this._OV_jazzy_dom_canvas_Canvas_dummy_style);
		}
	}
	this._OV_jazzy_dom_canvas_Canvas_buffer._OM_append1(_SL_htmla);
	_SV_jazzy_dom_canvas_Portable__Div_all++;
	_SV_jazzy_dom_canvas_Portable__Pix_all+=_SL_wb*_SL_hb;
}
function _SM_jazzy_dom_canvas_Portable_CL1a(_SL_xc,_SL_yb,_SL_we,_SL_he)
{
	if(_SL_we<=0||_SL_he<=0)
		return;
	this._OV_jazzy_dom_canvas_Canvas_buffer._OM_append1("%%"+this._OV_jazzy_dom_canvas_Canvas_color+";"+_SL_xc+";"+_SL_yb+";"+_SL_we+";"+_SL_he+";");
	_SV_jazzy_dom_canvas_Portable__Div_all++;
	_SV_jazzy_dom_canvas_Portable__Pix_all+=_SL_we*_SL_he;
}
function _SM_jazzy_dom_canvas_Portable_CL2a()
{
	if(this._OV_jazzy_dom_canvas_Canvas_canvas!=null)
	{
		if(_SV_jazzy_dom_core_Environment_OPTIMAL)
			this._OV_jazzy_dom_canvas_Canvas_canvas._OM_insert1(this._OM_replaceHtml());
		else
			this._OV_jazzy_dom_canvas_Canvas_canvas._OM_insert1(this._OV_jazzy_dom_canvas_Canvas_buffer._OM_toString());
	}
	this._OV_jazzy_dom_canvas_Canvas_buffer._OM_clear();
}
function _SM_jazzy_dom_canvas_Portable_CL3a()
{
	if(_SV_jazzy_dom_core_Environment_OPTIMAL)
		document.write(this._OM_replaceHtml());
	else
		document.write(this._OV_jazzy_dom_canvas_Canvas_buffer._OM_toString());
	this._OV_jazzy_dom_canvas_Canvas_buffer._OM_clear();
}
function _SM_jazzy_dom_canvas_Portable_init()
{
	if(_SV_jazzy_dom_canvas_Portable_createDiv_W3CDOM!=null)
		return;
	_SV_jazzy_dom_canvas_Portable_createDiv_W3CDOM=_SM_jazzy_dom_canvas_Portable_CL0c;
	_SV_jazzy_dom_canvas_Portable_createDiv_MSIE=_SM_jazzy_dom_canvas_Portable_CL1a;
	_SV_jazzy_dom_canvas_Portable_flush_Element=_SM_jazzy_dom_canvas_Portable_CL2a;
	_SV_jazzy_dom_canvas_Portable_flush_Root=_SM_jazzy_dom_canvas_Portable_CL3a;
}
function _SM_jazzy_dom_canvas_Portable_toVerticalLine5(_SL_aLin,_SL_x1d,_SL_y1d,_SL_x2b,_SL_y2c)
{
	var _SL_dx=Math.abs(_SL_x2b-_SL_x1d);
	var _SL_dy=Math.abs(_SL_y2c-_SL_y1d);
	var _SL_xh=_SL_x1d;
	var _SL_yh=_SL_y1d;
	var _SL_xIncr=(_SL_x1d>_SL_x2b)?-1:1;
	var _SL_yIncr=(_SL_y1d>_SL_y2c)?-1:1;
	var _SL_pb;
	var _SL_ig=0;
	if(_SL_dx>=_SL_dy)
	{
		var _SL_pr=_SL_dy<<1;
		var _SL_pru=_SL_pr-(_SL_dx<<1);
		_SL_pb=_SL_pr-_SL_dx;
		while(_SL_dx>0)
		{
			--_SL_dx;
			if(_SL_pb>0)
			{
				_SL_aLin[_SL_ig++]=_SL_xh;
				_SL_yh+=_SL_yIncr;
				_SL_pb+=_SL_pru;
			}
			else
			{
				_SL_pb+=_SL_pr;
			}
			_SL_xh+=_SL_xIncr;
		}
	}
	else
	{
		var _SL_pra=_SL_dx<<1;
		var _SL_prua=_SL_pra-(_SL_dy<<1);
		_SL_pb=_SL_pra-_SL_dy;
		while(_SL_dy>0)
		{
			--_SL_dy;
			_SL_yh+=_SL_yIncr;
			_SL_aLin[_SL_ig++]=_SL_xh;
			if(_SL_pb>0)
			{
				_SL_xh+=_SL_xIncr;
				_SL_pb+=_SL_prua;
			}
			else
			{
				_SL_pb+=_SL_pra;
			}
		}
	}
	var _SL_lenb=_SL_aLin.length;
	for(var _SL_ja=_SL_lenb-_SL_ig;_SL_ja>0;_SL_ja--)
	{
		_SL_aLin[_SL_lenb-_SL_ja]=_SL_xh;
	}
}


var _SV_jazzy_dom_canvas_Portable_REPLICA=/%%([^;]+);([^;]+);([^;]+);([^;]+);([^;]+);/g;
var _SV_jazzy_dom_canvas_Portable_PATCHING=/background-color:none;/g;
var _SV_jazzy_dom_canvas_Portable_PATCHED="background-color:#FFFFFF;filter:alpha(opacity=0);";
var _SV_jazzy_dom_canvas_Portable_ALT_VIEW="left:$2px;top:$3px;width:$4px;height:$5px;";
var _SV_jazzy_dom_canvas_Portable_ALT_BASE=_SV_jazzy_dom_core_Style_DIVL+_SV_jazzy_dom_core_Style_HIDE+_SV_jazzy_dom_core_Style_ABS+_SV_jazzy_dom_core_Style_BG_+"$1;left:$2;top:$3;width:$4;height:$5;";
var _SV_jazzy_dom_canvas_Portable_ALT_MSIE=_SV_jazzy_dom_canvas_Portable_ALT_BASE+_SV_jazzy_dom_core_Style_DIVR+"\n";
var _SV_jazzy_dom_canvas_Portable_ALT_MSIE_PRINT=_SV_jazzy_dom_canvas_Portable_ALT_BASE+_SV_jazzy_dom_core_Style_BL_+"$4"+_SV_jazzy_dom_core_Style_BL__+"$1"+_SV_jazzy_dom_core_Style_DIVR+"\n";
var _SV_jazzy_dom_canvas_Portable_ALT_MOZ=_SV_jazzy_dom_core_Style_DIVL+_SV_jazzy_dom_canvas_Portable_ALT_VIEW+_SV_jazzy_dom_core_Style_ABS+"clip:rect(0px,$4px,$5px,0px);"+_SV_jazzy_dom_core_Style_BG_+"$1;"+_SV_jazzy_dom_core_Style_DIVR;
var _SV_jazzy_dom_canvas_Portable_ALT_W3C=_SV_jazzy_dom_core_Style_DIVL+_SV_jazzy_dom_canvas_Portable_ALT_VIEW+_SV_jazzy_dom_core_Style_ABS+"clip:rect(0px,$4px,$5px,0px);"+_SV_jazzy_dom_core_Style_BG_+"$1;"+_SV_jazzy_dom_core_Style_HIDE+_SV_jazzy_dom_core_Style_DIVR;
var _SV_jazzy_dom_canvas_Portable_ALT_MOZ_PRINT=_SV_jazzy_dom_core_Style_DIVL+_SV_jazzy_dom_canvas_Portable_ALT_VIEW+_SV_jazzy_dom_core_Style_ABS+_SV_jazzy_dom_core_Style_BL_+"$5"+_SV_jazzy_dom_core_Style_BL__+"$1;"+"clip:rect(0px,$4px,$5px,0px);"+_SV_jazzy_dom_core_Style_BG_+"$1;"+_SV_jazzy_dom_core_Style_DIVR;
var _SV_jazzy_dom_canvas_Portable_ALT_W3C_PRINT=_SV_jazzy_dom_core_Style_DIVL+_SV_jazzy_dom_canvas_Portable_ALT_VIEW+_SV_jazzy_dom_core_Style_ABS+_SV_jazzy_dom_core_Style_BL_+"$5"+_SV_jazzy_dom_core_Style_BL__+"$1;"+"clip:rect(0px,$4px,$5px,0px);"+_SV_jazzy_dom_core_Style_BG_+"$1;"+_SV_jazzy_dom_core_Style_HIDE+_SV_jazzy_dom_core_Style_DIVR;
var _SV_jazzy_dom_canvas_Portable_createDiv_W3CDOM=null;
var _SV_jazzy_dom_canvas_Portable_createDiv_MSIE=null;
var _SV_jazzy_dom_canvas_Portable_flush_Element=null;
var _SV_jazzy_dom_canvas_Portable_flush_Root=null;
var _SV_jazzy_dom_canvas_Portable__Div_all=0;
var _SV_jazzy_dom_canvas_Portable__Pix_all=0;


{
	{
		_SM_jazzy_lang_System_schedule1(function(){_SM_jazzy_dom_canvas_Portable_init()}.bind(this));
	}
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);





_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.dom.canvas.Stroke"),new Array());
var _SC_jazzy_dom_canvas_Stroke=_CL;

_CL._OM_jazzy_lang_Class_bind=
function()
{
}

_CL._OM_jazzy_lang_Class_init=
function()
{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);

function _SM_jazzy_dom_canvas_Stroke2D_CL0c(_SL_xaa,_SL_yaa,_SL_xba,_SL_yba)
{
	var _SL_x1e,_SL_x2c,_SL_y1e,_SL_y2d;
	if(_SL_xaa>_SL_xba)
	{
		_SL_x2c=_SL_xaa;
		_SL_y2d=_SL_yaa;
		_SL_x1e=_SL_xba;
		_SL_y1e=_SL_yba;
	}
	else
	{
		_SL_x1e=_SL_xaa;
		_SL_y1e=_SL_yaa;
		_SL_x2c=_SL_xba;
		_SL_y2d=_SL_yba;
	}
	var _SL_dxa=(_SL_x2c-_SL_x1e);
	var _SL_dya=(Math.abs(_SL_y2d-_SL_y1e));
	var _SL_xe=_SL_x1e;
	var _SL_ye=_SL_y1e;
	var _SL_yIncra=(_SL_y1e>_SL_y2d)?-1:1;
	var _SL_sb=this._OV_jazzy_dom_canvas_Canvas_thick;
	if(_SL_dxa>=_SL_dya)
	{
		var _SL__s=_SL_sb;
		if(_SL_dxa>0&&_SL_sb-3>0)
		{
			_SL__s=(_SL_sb*_SL_dxa*Math.sqrt(1+_SL_dya*_SL_dya/(_SL_dxa*_SL_dxa))-_SL_dxa-(_SL_sb>>1)*_SL_dya)/_SL_dxa;
			_SL__s=(!((_SL_sb-4)!=0)?Math.ceil(_SL__s):Math.round(_SL__s))+1;
		}
		else
		{
			_SL__s=_SL_sb;
		}
		var _SL_ad=Math.ceil(_SL_sb/2);
		var _SL_prb=_SL_dya<<1;
		var _SL_prub=_SL_prb-(_SL_dxa<<1);
		var _SL_pc=_SL_prb-_SL_dxa;
		var _SL_oxa=_SL_xe;
		while(_SL_dxa>0)
		{
			--_SL_dxa;
			++_SL_xe;
			if(_SL_pc>0)
			{
				this._OM_createDiv4(_SL_oxa,_SL_ye,_SL_xe-_SL_oxa+_SL_ad,_SL__s);
				_SL_ye+=_SL_yIncra;
				_SL_pc+=_SL_prub;
				_SL_oxa=_SL_xe;
			}
			else
			{
				_SL_pc+=_SL_prb;
			}
		}
		this._OM_createDiv4(_SL_oxa,_SL_ye,_SL_x2c-_SL_oxa+_SL_ad+1,_SL__s);
	}
	else
	{
		var _SL__sa=_SL_sb;
		if(_SL_sb-3>0)
		{
			_SL__sa=(_SL_sb*_SL_dya*Math.sqrt(1+_SL_dxa*_SL_dxa/(_SL_dya*_SL_dya))-(_SL_sb>>1)*_SL_dxa-_SL_dya)/_SL_dya;
			_SL__sa=(!((_SL_sb-4)!=0)?Math.ceil(_SL__sa):Math.round(_SL__sa))+1;
		}
		var _SL_ada=Math.round(_SL_sb/2);
		var _SL_prc=_SL_dxa<<1;
		var _SL_pruc=_SL_prc-(_SL_dya<<1);
		var _SL_pd=_SL_prc-_SL_dya;
		var _SL_oyc=_SL_ye;
		if(_SL_y2d<=_SL_y1e)
		{
			++_SL_ada;
			while(_SL_dya>0)
			{
				--_SL_dya;
				if(_SL_pd>0)
				{
					this._OM_createDiv4(_SL_xe++,_SL_ye,_SL__sa,_SL_oyc-_SL_ye+_SL_ada);
					_SL_ye+=_SL_yIncra;
					_SL_pd+=_SL_pruc;
					_SL_oyc=_SL_ye;
				}
				else
				{
					_SL_ye+=_SL_yIncra;
					_SL_pd+=_SL_prc;
				}
			}
			this._OM_createDiv4(_SL_x2c,_SL_y2d,_SL__sa,_SL_oyc-_SL_y2d+_SL_ada);
		}
		else
		{
			while(_SL_dya>0)
			{
				--_SL_dya;
				_SL_ye+=_SL_yIncra;
				if(_SL_pd>0)
				{
					this._OM_createDiv4(_SL_xe++,_SL_oyc,_SL__sa,_SL_ye-_SL_oyc+_SL_ada);
					_SL_pd+=_SL_pruc;
					_SL_oyc=_SL_ye;
				}
				else
				{
					_SL_pd+=_SL_prc;
				}
			}
		}
		this._OM_createDiv4(_SL_x2c,_SL_oyc,_SL__sa,_SL_y2d-_SL_oyc+_SL_ada+1);
	}
}
function _SM_jazzy_dom_canvas_Stroke2D_CL1a(_SL_xi,_SL_yf,_SL_wf,_SL_hf)
{
	this._OM_drawLine4(_SL_xi,_SL_yf,_SL_xi+_SL_wf,_SL_yf);
	this._OM_drawLine4(_SL_xi+_SL_wf,_SL_yf,_SL_xi+_SL_wf,_SL_yf+_SL_hf);
	this._OM_drawLine4(_SL_xi,_SL_yf+_SL_hf,_SL_xi+_SL_wf,_SL_yf+_SL_hf);
	this._OM_drawLine4(_SL_xi,_SL_yf,_SL_xi,_SL_yf+_SL_hf);
}
function _SM_jazzy_dom_canvas_Stroke2D_CL2b(_SL_lefta,_SL_topa,_SL_widthb,_SL_heighta)
{
	var _SL_ab=(++_SL_widthb)>>1;
	var _SL_be=(++_SL_heighta)>>1;
	var _SL_wodb=_SL_widthb&1;
	var _SL_hodb=_SL_heighta&1;
	var _SL_hodu=_SL_hodb^1;
	var _SL_cxd=_SL_lefta+_SL_ab;
	var _SL_cyd=_SL_topa+_SL_be;
	var _SL_xj=0;
	var _SL_yi=_SL_be;
	var _SL_aa2b=(_SL_ab*_SL_ab)<<1;
	var _SL_aa4b=_SL_aa2b<<1;
	var _SL_bb2b=(_SL_be*_SL_be)<<1;
	var _SL_bb4b=_SL_bb2b<<1;
	var _SL_stc=(_SL_aa2b>>1)*(1-(_SL_be<<1))+_SL_bb2b;
	var _SL_ttb=(_SL_bb2b>>1)-_SL_aa2b*((_SL_be<<1)-1);
	var _SL_sc=this._OV_jazzy_dom_canvas_Canvas_thick;
	if(_SL_sc-4<0&&(!(_SL_sc-2!=0)||_SL_widthb-51>0&&_SL_heighta-51>0))
	{
		var _SL_oxb=0;
		var _SL_oyd=_SL_be;
		var _SL_wg,_SL_hg,_SL_pxw;
		while(_SL_yi>0)
		{
			if(_SL_stc<0)
			{
				_SL_stc+=_SL_bb2b*((_SL_xj<<1)+3);
				_SL_ttb+=_SL_bb4b*(++_SL_xj);
			}
			else
				if(_SL_ttb<0)
				{
					_SL_stc+=_SL_bb2b*((_SL_xj<<1)+3)-_SL_aa4b*(_SL_yi-1);
					_SL_ttb+=_SL_bb4b*(++_SL_xj)-_SL_aa2b*(((_SL_yi--)<<1)-3);
					_SL_wg=_SL_xj-_SL_oxb;
					_SL_hg=_SL_oyd-_SL_yi;
					if(_SL_wg-1!=0)
					{
						_SL_pxw=_SL_wg+1+(_SL_sc&1);
						_SL_hg=_SL_sc;
					}
					else
						if(_SL_hg-1!=0)
						{
							_SL_pxw=_SL_sc;
							_SL_hg+=1+(_SL_sc&1);
						}
						else
						{
							_SL_pxw=_SL_hg=_SL_sc;
						}
					this._OM_drawOvalPart8(_SL_cxd,_SL_cyd,_SL_xj-1,_SL_oyd,_SL_pxw,_SL_hg,_SL_wodb,_SL_hodb);
					_SL_oxb=_SL_xj;
					_SL_oyd=_SL_yi;
				}
				else
				{
					_SL_ttb-=_SL_aa2b*((_SL_yi<<1)-3);
					_SL_stc-=_SL_aa4b*(--_SL_yi);
				}
		}
		this._OM_createDiv4(_SL_cxd-_SL_ab,_SL_cyd-_SL_oyd,_SL_sc,(_SL_oyd<<1)+_SL_hodb);
		this._OM_createDiv4(_SL_cxd+_SL_ab+_SL_wodb-_SL_sc,_SL_cyd-_SL_oyd,_SL_sc,(_SL_oyd<<1)+_SL_hodb);
	}
	else
	{
		var _SL__a=(_SL_widthb-(_SL_sc<<1))>>1;
		var _SL__b=(_SL_heighta-(_SL_sc<<1))>>1;
		var _SL__x=0;
		var _SL__y=_SL__b;
		var _SL__aa2=(_SL__a*_SL__a)<<1;
		var _SL__aa4=_SL__aa2<<1;
		var _SL__bb2=(_SL__b*_SL__b)<<1;
		var _SL__bb4=_SL__bb2<<1;
		var _SL__st=(_SL__aa2>>1)*(1-(_SL__b<<1))+_SL__bb2;
		var _SL__tt=(_SL__bb2>>1)-_SL__aa2*((_SL__b<<1)-1);
		var _SL_pxl=_SM_jazzy_lang_System_initArray2("$int",new Array(0,null));
		var _SL_pxt=_SM_jazzy_lang_System_initArray2("$int",new Array(_SL_be,null));
		var _SL__pxb=_SM_jazzy_lang_System_initArray2("$int",new Array(_SL__b-1,null));
		while(_SL_yi>0)
		{
			if(_SL_stc<0)
			{
				_SL_pxl[_SL_pxl.length]=_SL_xj;
				_SL_pxt[_SL_pxt.length]=_SL_yi;
				_SL_stc+=_SL_bb2b*((_SL_xj<<1)+3);
				_SL_ttb+=_SL_bb4b*(++_SL_xj);
			}
			else
				if(_SL_ttb<0)
				{
					_SL_pxl[_SL_pxl.length]=_SL_xj;
					_SL_stc+=_SL_bb2b*((_SL_xj<<1)+3)-_SL_aa4b*(_SL_yi-1);
					_SL_ttb+=_SL_bb4b*(++_SL_xj)-_SL_aa2b*(((_SL_yi--)<<1)-3);
					_SL_pxt[_SL_pxt.length]=_SL_yi;
				}
				else
				{
					_SL_ttb-=_SL_aa2b*((_SL_yi<<1)-3);
					_SL_stc-=_SL_aa4b*(--_SL_yi);
				}
			if(_SL__y>0)
			{
				if(_SL__st<0)
				{
					_SL__st+=_SL__bb2*((_SL__x<<1)+3);
					_SL__tt+=_SL__bb4*(++_SL__x);
					_SL__pxb[_SL__pxb.length]=_SL__y-1;
				}
				else
					if(_SL__tt<0)
					{
						_SL__st+=_SL__bb2*((_SL__x<<1)+3)-_SL__aa4*(_SL__y-1);
						_SL__tt+=_SL__bb4*(++_SL__x)-_SL__aa2*(((_SL__y--)<<1)-3);
						_SL__pxb[_SL__pxb.length]=_SL__y-1;
					}
					else
					{
						_SL__tt-=_SL__aa2*((_SL__y<<1)-3);
						_SL__st-=_SL__aa4*(--_SL__y);
						_SL__pxb[_SL__pxb.length-1]--;
					}
			}
		}
		var _SL_oxc=-_SL_wodb;
		var _SL_oye=_SL_be;
		var _SL__oy=_SL__pxb[0];
		var _SL_la=_SL_pxl.length;
		var _SL_wh,_SL_hh;
		for(var _SL_ih=0;_SL_ih<_SL_la;_SL_ih++)
		{
			if((typeof _SL__pxb[_SL_ih] != "undefined"))
			{
				if(_SL__pxb[_SL_ih]<_SL__oy||_SL_pxt[_SL_ih]<_SL_oye)
				{
					_SL_xj=_SL_pxl[_SL_ih];
					this._OM_drawOvalPart8(_SL_cxd,_SL_cyd,_SL_xj,_SL_oye,_SL_xj-_SL_oxc,_SL_oye-_SL__oy,_SL_wodb,_SL_hodb);
					_SL_oxc=_SL_xj;
					_SL_oye=_SL_pxt[_SL_ih];
					_SL__oy=_SL__pxb[_SL_ih];
				}
			}
			else
			{
				_SL_xj=_SL_pxl[_SL_ih];
				this._OM_createDiv4(_SL_cxd-_SL_xj,_SL_cyd-_SL_oye,1,(_SL_oye<<1)+_SL_hodb);
				this._OM_createDiv4(_SL_cxd+_SL_oxc+_SL_wodb,_SL_cyd-_SL_oye,1,(_SL_oye<<1)+_SL_hodb);
				_SL_oxc=_SL_xj;
				_SL_oye=_SL_pxt[_SL_ih];
			}
		}
		this._OM_createDiv4(_SL_cxd-_SL_ab,_SL_cyd-_SL_oye,1,(_SL_oye<<1)+_SL_hodb);
		this._OM_createDiv4(_SL_cxd+_SL_oxc+_SL_wodb,_SL_cyd-_SL_oye,1,(_SL_oye<<1)+_SL_hodb);
	}
}
function _SO_jazzy_dom_canvas_Stroke2D_Stroke2D()
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_dom_canvas_Stroke2D);
	_SM_jazzy_lang_System_CALL2(this,_SS_jazzy_dom_canvas_Stroke2D_init);
}
function _SM_jazzy_dom_canvas_Stroke2D_getLineAspect()
{
	return _SC_jazzy_dom_canvas_Stroke2D._OV_jazzy_dom_canvas_Stroke2D_drawLine;
}
function _SM_jazzy_dom_canvas_Stroke2D_getOvalAspect()
{
	return _SC_jazzy_dom_canvas_Stroke2D._OV_jazzy_dom_canvas_Stroke2D_drawOval;
}
function _SM_jazzy_dom_canvas_Stroke2D_getSquareAspect()
{
	return _SC_jazzy_dom_canvas_Stroke2D._OV_jazzy_dom_canvas_Stroke2D_drawSquare;
}

_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.dom.canvas.Stroke2D"),new Array("jazzy.dom.canvas.Stroke"));
var _SC_jazzy_dom_canvas_Stroke2D=_CL;

_CL._OM_jazzy_lang_Class_bind=
function()
{
	_SC_jazzy_dom_canvas_Stroke2D._OV_jazzy_dom_canvas_Stroke2D_drawLine=null;
	_SC_jazzy_dom_canvas_Stroke2D._OV_jazzy_dom_canvas_Stroke2D_drawOval=null;
	_SC_jazzy_dom_canvas_Stroke2D._OV_jazzy_dom_canvas_Stroke2D_drawSquare=null;
}


function _SS_jazzy_dom_canvas_Stroke2D_bind(_SL_instance)
{
	_SL_instance._OM_getLineAspect=_SM_jazzy_dom_canvas_Stroke2D_getLineAspect;
	_SL_instance._OM_jazzy_dom_canvas_Stroke2D_getLineAspect=_SM_jazzy_dom_canvas_Stroke2D_getLineAspect;
	_SL_instance._OM_getOvalAspect=_SM_jazzy_dom_canvas_Stroke2D_getOvalAspect;
	_SL_instance._OM_jazzy_dom_canvas_Stroke2D_getOvalAspect=_SM_jazzy_dom_canvas_Stroke2D_getOvalAspect;
	_SL_instance._OM_getSquareAspect=_SM_jazzy_dom_canvas_Stroke2D_getSquareAspect;
	_SL_instance._OM_jazzy_dom_canvas_Stroke2D_getSquareAspect=_SM_jazzy_dom_canvas_Stroke2D_getSquareAspect;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_jazzy_dom_canvas_Stroke2D_bind;

_CL._OM_jazzy_lang_Class_init=
function()
{
	{
		_SC_jazzy_dom_canvas_Stroke2D._OV_jazzy_dom_canvas_Stroke2D_drawLine=_SM_jazzy_dom_canvas_Stroke2D_CL0c;
		_SC_jazzy_dom_canvas_Stroke2D._OV_jazzy_dom_canvas_Stroke2D_drawSquare=_SM_jazzy_dom_canvas_Stroke2D_CL1a;
		_SC_jazzy_dom_canvas_Stroke2D._OV_jazzy_dom_canvas_Stroke2D_drawOval=_SM_jazzy_dom_canvas_Stroke2D_CL2b;
	}
}


function _SS_jazzy_dom_canvas_Stroke2D_init()
{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);

function _SM_jazzy_dom_canvas_StrokeDotted_CL0c(_SL_xaa,_SL_yaa,_SL_xba,_SL_yba)
{
	var _SL_tb=this._OV_jazzy_dom_canvas_Canvas_thick>=1?this._OV_jazzy_dom_canvas_Canvas_thick:1;
	var _SL_x1f,_SL_x2d,_SL_y1f,_SL_y2e;
	if(_SL_xaa>_SL_xba)
	{
		_SL_x2d=_SL_xaa;
		_SL_y2e=_SL_yaa;
		_SL_x1f=_SL_xba;
		_SL_y1f=_SL_yba;
	}
	else
	{
		_SL_x1f=_SL_xaa;
		_SL_y1f=_SL_yaa;
		_SL_x2d=_SL_xba;
		_SL_y2e=_SL_yba;
	}
	var _SL_dxb=(_SL_x2d-_SL_x1f)/_SL_tb;
	var _SL_dyb=(Math.abs(_SL_y2e-_SL_y1f))/_SL_tb;
	var _SL_xf=_SL_x1f;
	var _SL_yg=_SL_y1f;
	var _SL_yIncrb=(_SL_y1f>_SL_y2e)?-_SL_tb:_SL_tb;
	var _SL_oddsb=true;
	if(_SL_dxb>=_SL_dyb)
	{
		var _SL_pra=_SL_dyb<<1;
		var _SL_prua=_SL_pra-(_SL_dxb<<1);
		var _SL_pe=_SL_pra-_SL_dxb;
		while(_SL_dxb>0)
		{
			--_SL_dxb;
			if(_SL_oddsb)
			{
				this._OM_createDiv4(_SL_xf,_SL_yg,_SL_tb,_SL_tb);
			}
			_SL_oddsb=!_SL_oddsb;
			if(_SL_pe>0)
			{
				_SL_yg+=_SL_yIncrb;
				_SL_pe+=_SL_prua;
			}
			else
			{
				_SL_pe+=_SL_pra;
			}
			_SL_xf+=_SL_tb;
		}
	}
	else
	{
		var _SL_prd=_SL_dxb<<1;
		var _SL_prud=_SL_prd-(_SL_dyb<<1);
		var _SL_pf=_SL_prd-_SL_dyb;
		while(_SL_dyb>0)
		{
			--_SL_dyb;
			if(_SL_oddsb)
			{
				this._OM_createDiv4(_SL_xf,_SL_yg,_SL_tb,_SL_tb);
			}
			_SL_oddsb=!_SL_oddsb;
			_SL_yg+=_SL_yIncrb;
			if(_SL_pf>0)
			{
				_SL_xf+=_SL_tb;
				_SL_pf+=_SL_prud;
			}
			else
			{
				_SL_pf+=_SL_prd;
			}
		}
		if(_SL_oddsb)
		{
			this._OM_createDiv4(_SL_xf,_SL_yg,1,1);
		}
	}
}
function _SM_jazzy_dom_canvas_StrokeDotted_CL1a(_SL_xi,_SL_yf,_SL_wf,_SL_hf)
{
	this._OM_drawLine4(_SL_xi,_SL_yf,_SL_xi+_SL_wf,_SL_yf);
	this._OM_drawLine4(_SL_xi+_SL_wf,_SL_yf,_SL_xi+_SL_wf,_SL_yf+_SL_hf);
	this._OM_drawLine4(_SL_xi,_SL_yf+_SL_hf,_SL_xi+_SL_wf,_SL_yf+_SL_hf);
	this._OM_drawLine4(_SL_xi,_SL_yf,_SL_xi,_SL_yf+_SL_hf);
}
function _SM_jazzy_dom_canvas_StrokeDotted_CL2b(_SL_lefta,_SL_topa,_SL_widthb,_SL_heighta)
{
	var _SL_ab=(++_SL_widthb)>>1;
	var _SL_be=(++_SL_heighta)>>1;
	var _SL_wodb=_SL_widthb&1;
	var _SL_hodb=_SL_heighta&1;
	var _SL_hodu=_SL_hodb^1;
	var _SL_cxd=_SL_lefta+_SL_ab;
	var _SL_cyd=_SL_topa+_SL_be;
	var _SL_xj=0;
	var _SL_yi=_SL_be;
	var _SL_oxd=0;
	var _SL_oyf=_SL_be;
	var _SL_aa2c=(_SL_ab*_SL_ab)<<1;
	var _SL_aa4c=_SL_aa2c<<1;
	var _SL_bb2c=(_SL_be*_SL_be)<<1;
	var _SL_bb4c=_SL_bb2c<<1;
	var _SL_std=(_SL_aa2c>>1)*(1-(_SL_be<<1))+_SL_bb2c;
	var _SL_ttc=(_SL_bb2c>>1)-_SL_aa2c*((_SL_be<<1)-1);
	var _SL_flag=true;
	while(_SL_yi>0)
	{
		if(_SL_std<0)
		{
			_SL_std+=_SL_bb2c*((_SL_xj<<1)+3);
			_SL_ttc+=_SL_bb4c*(++_SL_xj);
		}
		else
			if(_SL_ttc<0)
			{
				_SL_std+=_SL_bb2c*((_SL_xj<<1)+3)-_SL_aa4c*(_SL_yi-1);
				_SL_ttc+=_SL_bb4c*(++_SL_xj)-_SL_aa2c*(((_SL_yi--)<<1)-3);
			}
			else
			{
				_SL_ttc-=_SL_aa2c*((_SL_yi<<1)-3);
				_SL_std-=_SL_aa4c*(--_SL_yi);
			}
		if(_SL_flag&&_SL_yi>=_SL_hodu)
		{
			this._OM_drawOvalPart8(_SL_cxd,_SL_cyd,_SL_xj,_SL_yi,1,1,_SL_wodb,_SL_hodb);
		}
		_SL_flag=!_SL_flag;
	}
}
function _SO_jazzy_dom_canvas_StrokeDotted_StrokeDotted()
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_dom_canvas_StrokeDotted);
	_SM_jazzy_lang_System_CALL2(this,_SS_jazzy_dom_canvas_StrokeDotted_init);
}
function _SM_jazzy_dom_canvas_StrokeDotted_getLineAspect()
{
	return _SC_jazzy_dom_canvas_StrokeDotted._OV_jazzy_dom_canvas_StrokeDotted_drawLine;
}
function _SM_jazzy_dom_canvas_StrokeDotted_getOvalAspect()
{
	return _SC_jazzy_dom_canvas_StrokeDotted._OV_jazzy_dom_canvas_StrokeDotted_drawOval;
}
function _SM_jazzy_dom_canvas_StrokeDotted_getSquareAspect()
{
	return _SC_jazzy_dom_canvas_StrokeDotted._OV_jazzy_dom_canvas_StrokeDotted_drawSquare;
}

_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.dom.canvas.StrokeDotted"),new Array("jazzy.dom.canvas.Stroke"));
var _SC_jazzy_dom_canvas_StrokeDotted=_CL;

_CL._OM_jazzy_lang_Class_bind=
function()
{
	_SC_jazzy_dom_canvas_StrokeDotted._OV_jazzy_dom_canvas_StrokeDotted_drawLine=null;
	_SC_jazzy_dom_canvas_StrokeDotted._OV_jazzy_dom_canvas_StrokeDotted_drawOval=null;
	_SC_jazzy_dom_canvas_StrokeDotted._OV_jazzy_dom_canvas_StrokeDotted_drawSquare=null;
}


function _SS_jazzy_dom_canvas_StrokeDotted_bind(_SL_instance)
{
	_SL_instance._OM_getLineAspect=_SM_jazzy_dom_canvas_StrokeDotted_getLineAspect;
	_SL_instance._OM_jazzy_dom_canvas_StrokeDotted_getLineAspect=_SM_jazzy_dom_canvas_StrokeDotted_getLineAspect;
	_SL_instance._OM_getOvalAspect=_SM_jazzy_dom_canvas_StrokeDotted_getOvalAspect;
	_SL_instance._OM_jazzy_dom_canvas_StrokeDotted_getOvalAspect=_SM_jazzy_dom_canvas_StrokeDotted_getOvalAspect;
	_SL_instance._OM_getSquareAspect=_SM_jazzy_dom_canvas_StrokeDotted_getSquareAspect;
	_SL_instance._OM_jazzy_dom_canvas_StrokeDotted_getSquareAspect=_SM_jazzy_dom_canvas_StrokeDotted_getSquareAspect;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_jazzy_dom_canvas_StrokeDotted_bind;

_CL._OM_jazzy_lang_Class_init=
function()
{
	{
		_SC_jazzy_dom_canvas_StrokeDotted._OV_jazzy_dom_canvas_StrokeDotted_drawLine=_SM_jazzy_dom_canvas_StrokeDotted_CL0c;
		_SC_jazzy_dom_canvas_StrokeDotted._OV_jazzy_dom_canvas_StrokeDotted_drawSquare=_SM_jazzy_dom_canvas_StrokeDotted_CL1a;
		_SC_jazzy_dom_canvas_StrokeDotted._OV_jazzy_dom_canvas_StrokeDotted_drawOval=_SM_jazzy_dom_canvas_StrokeDotted_CL2b;
	}
}


function _SS_jazzy_dom_canvas_StrokeDotted_init()
{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);

function _SM_jazzy_dom_canvas_StrokePlain_CL0c(_SL_xaa,_SL_yaa,_SL_xba,_SL_yba)
{
	var _SL_tb=1;
	var _SL_x1f,_SL_x2d,_SL_y1f,_SL_y2e;
	if(_SL_xaa>_SL_xba)
	{
		_SL_x2d=_SL_xaa;
		_SL_y2e=_SL_yaa;
		_SL_x1f=_SL_xba;
		_SL_y1f=_SL_yba;
	}
	else
	{
		_SL_x1f=_SL_xaa;
		_SL_y1f=_SL_yaa;
		_SL_x2d=_SL_xba;
		_SL_y2e=_SL_yba;
	}
	var _SL_dxb=(_SL_x2d-_SL_x1f)/_SL_tb;
	var _SL_dyb=(Math.abs(_SL_y2e-_SL_y1f))/_SL_tb;
	var _SL_xf=_SL_x1f;
	var _SL_yg=_SL_y1f;
	var _SL_yIncrb=(_SL_y1f>_SL_y2e)?-_SL_tb:_SL_tb;
	if(_SL_dxb>=_SL_dyb)
	{
		var _SL_pre=_SL_dyb<<1;
		var _SL_prue=_SL_pre-(_SL_dxb<<1);
		var _SL_pg=_SL_pre-_SL_dxb;
		var _SL_oxe=_SL_xf;
		while(_SL_dxb>0)
		{
			--_SL_dxb;
			_SL_xf+=_SL_tb;
			if(_SL_pg>0)
			{
				this._OM_createDiv4(_SL_oxe,_SL_yg,_SL_xf-_SL_oxe+_SL_tb-1,_SL_tb);
				_SL_yg+=_SL_yIncrb;
				_SL_pg+=_SL_prue;
				_SL_oxe=_SL_xf;
			}
			else
			{
				_SL_pg+=_SL_pre;
			}
		}
		this._OM_createDiv4(_SL_oxe,_SL_yg,_SL_x2d-_SL_oxe+_SL_tb,_SL_tb);
	}
	else
	{
		var _SL_prd=_SL_dxb<<1;
		var _SL_prud=_SL_prd-(_SL_dyb<<1);
		var _SL_pf=_SL_prd-_SL_dyb;
		var _SL_oyg=_SL_yg;
		if(_SL_y2e<=_SL_y1f)
		{
			while(_SL_dyb>0)
			{
				--_SL_dyb;
				if(_SL_pf>0)
				{
					this._OM_createDiv4(_SL_xf,_SL_yg,_SL_tb,_SL_oyg-_SL_yg+_SL_tb);
					_SL_xf+=_SL_tb;
					_SL_yg+=_SL_yIncrb;
					_SL_pf+=_SL_prud;
					_SL_oyg=_SL_yg;
				}
				else
				{
					_SL_yg+=_SL_yIncrb;
					_SL_pf+=_SL_prd;
				}
			}
			this._OM_createDiv4(_SL_x2d,_SL_y2e,_SL_tb,_SL_oyg-_SL_y2e+_SL_tb);
		}
		else
		{
			while(_SL_dyb>0)
			{
				--_SL_dyb;
				_SL_yg+=_SL_yIncrb;
				if(_SL_pf>0)
				{
					this._OM_createDiv4(_SL_xf,_SL_oyg,_SL_tb,_SL_yg-_SL_oyg+_SL_tb-1);
					_SL_xf+=_SL_tb;
					_SL_pf+=_SL_prud;
					_SL_oyg=_SL_yg;
				}
				else
				{
					_SL_pf+=_SL_prd;
				}
			}
			this._OM_createDiv4(_SL_x2d,_SL_oyg,_SL_tb,_SL_y2e-_SL_oyg+_SL_tb);
		}
	}
}
function _SM_jazzy_dom_canvas_StrokePlain_CL1a(_SL_xi,_SL_yf,_SL_wf,_SL_hf)
{
	this._OM_createDiv4(_SL_xi,_SL_yf,_SL_wf,1);
	this._OM_createDiv4(_SL_xi+_SL_wf,_SL_yf,1,_SL_hf);
	this._OM_createDiv4(_SL_xi,_SL_yf+_SL_hf,_SL_wf+1,1);
	this._OM_createDiv4(_SL_xi,_SL_yf+1,1,_SL_hf-1);
}
function _SM_jazzy_dom_canvas_StrokePlain_CL2b(_SL_lefta,_SL_topa,_SL_widthb,_SL_heighta)
{
	var _SL_ab=(++_SL_widthb)>>1;
	var _SL_be=(++_SL_heighta)>>1;
	var _SL_wodb=_SL_widthb&1;
	var _SL_hodb=_SL_heighta&1;
	var _SL_cxe=_SL_lefta+_SL_ab;
	var _SL_cye=_SL_topa+_SL_be;
	var _SL_xk=0;
	var _SL_yj=_SL_be;
	var _SL_oxf=0;
	var _SL_oyg=_SL_be;
	var _SL_aa2d=(_SL_ab*_SL_ab)<<1;
	var _SL_aa4d=_SL_aa2d<<1;
	var _SL_bb2d=(_SL_be*_SL_be)<<1;
	var _SL_bb4d=_SL_bb2d<<1;
	var _SL_ste=(_SL_aa2d>>1)*(1-(_SL_be<<1))+_SL_bb2d;
	var _SL_ttd=(_SL_bb2d>>1)-_SL_aa2d*((_SL_be<<1)-1);
	var _SL_wi;
	var _SL_hj;
	while(_SL_yj>0)
	{
		if(_SL_ste<0)
		{
			_SL_ste=_SL_ste+_SL_bb2d*((_SL_xk<<1)+3);
			_SL_ttd=_SL_ttd+_SL_bb4d*(++_SL_xk);
		}
		else
			if(_SL_ttd<0)
			{
				_SL_ste=_SL_ste+_SL_bb2d*((_SL_xk<<1)+3)-_SL_aa4d*(_SL_yj-1);
				_SL_ttd=_SL_ttd+_SL_bb4d*(++_SL_xk)-_SL_aa2d*(((_SL_yj--)<<1)-3);
				_SL_wi=_SL_xk-_SL_oxf;
				_SL_hj=_SL_oyg-_SL_yj;
				if((_SL_wi&2)!=0&&(_SL_hj&2)!=0)
				{
					this._OM_drawOvalPart8(_SL_cxe,_SL_cye,_SL_xk-2,_SL_yj+2,1,1,_SL_wodb,_SL_hodb);
					this._OM_drawOvalPart8(_SL_cxe,_SL_cye,_SL_xk-1,_SL_yj+1,1,1,_SL_wodb,_SL_hodb);
				}
				else
				{
					this._OM_drawOvalPart8(_SL_cxe,_SL_cye,_SL_xk-1,_SL_oyg,_SL_wi,_SL_hj,_SL_wodb,_SL_hodb);
				}
				_SL_oxf=_SL_xk;
				_SL_oyg=_SL_yj;
			}
			else
			{
				_SL_ttd=_SL_ttd-_SL_aa2d*((_SL_yj<<1)-3);
				_SL_ste=_SL_ste-_SL_aa4d*(--_SL_yj);
			}
	}
	_SL_wi=_SL_ab-_SL_oxf+1;
	_SL_hj=(_SL_oyg<<1)+_SL_hodb;
	_SL_yj=_SL_cye-_SL_oyg;
	this._OM_createDiv4(_SL_cxe-_SL_ab,_SL_yj,_SL_wi,_SL_hj);
	this._OM_createDiv4(_SL_cxe+_SL_oxf+_SL_wodb-1,_SL_yj,_SL_wi,_SL_hj);
}
function _SO_jazzy_dom_canvas_StrokePlain_StrokePlain()
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_jazzy_dom_canvas_StrokePlain);
	_SM_jazzy_lang_System_CALL2(this,_SS_jazzy_dom_canvas_StrokePlain_init);
}
function _SM_jazzy_dom_canvas_StrokePlain_getLineAspect()
{
	return _SC_jazzy_dom_canvas_StrokePlain._OV_jazzy_dom_canvas_StrokePlain_drawLine;
}
function _SM_jazzy_dom_canvas_StrokePlain_getOvalAspect()
{
	return _SC_jazzy_dom_canvas_StrokePlain._OV_jazzy_dom_canvas_StrokePlain_drawOval;
}
function _SM_jazzy_dom_canvas_StrokePlain_getSquareAspect()
{
	return _SC_jazzy_dom_canvas_StrokePlain._OV_jazzy_dom_canvas_StrokePlain_drawSquare;
}

_CL=new _SO_jazzy_lang_Class_Class2(new Array("jazzy.dom.canvas.StrokePlain"),new Array("jazzy.dom.canvas.Stroke"));
var _SC_jazzy_dom_canvas_StrokePlain=_CL;

_CL._OM_jazzy_lang_Class_bind=
function()
{
	_SC_jazzy_dom_canvas_StrokePlain._OV_jazzy_dom_canvas_StrokePlain_drawLine=null;
	_SC_jazzy_dom_canvas_StrokePlain._OV_jazzy_dom_canvas_StrokePlain_drawOval=null;
	_SC_jazzy_dom_canvas_StrokePlain._OV_jazzy_dom_canvas_StrokePlain_drawSquare=null;
}


function _SS_jazzy_dom_canvas_StrokePlain_bind(_SL_instance)
{
	_SL_instance._OM_getLineAspect=_SM_jazzy_dom_canvas_StrokePlain_getLineAspect;
	_SL_instance._OM_jazzy_dom_canvas_StrokePlain_getLineAspect=_SM_jazzy_dom_canvas_StrokePlain_getLineAspect;
	_SL_instance._OM_getOvalAspect=_SM_jazzy_dom_canvas_StrokePlain_getOvalAspect;
	_SL_instance._OM_jazzy_dom_canvas_StrokePlain_getOvalAspect=_SM_jazzy_dom_canvas_StrokePlain_getOvalAspect;
	_SL_instance._OM_getSquareAspect=_SM_jazzy_dom_canvas_StrokePlain_getSquareAspect;
	_SL_instance._OM_jazzy_dom_canvas_StrokePlain_getSquareAspect=_SM_jazzy_dom_canvas_StrokePlain_getSquareAspect;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_jazzy_dom_canvas_StrokePlain_bind;

_CL._OM_jazzy_lang_Class_init=
function()
{
	{
		_SC_jazzy_dom_canvas_StrokePlain._OV_jazzy_dom_canvas_StrokePlain_drawLine=_SM_jazzy_dom_canvas_StrokePlain_CL0c;
		_SC_jazzy_dom_canvas_StrokePlain._OV_jazzy_dom_canvas_StrokePlain_drawSquare=_SM_jazzy_dom_canvas_StrokePlain_CL1a;
		_SC_jazzy_dom_canvas_StrokePlain._OV_jazzy_dom_canvas_StrokePlain_drawOval=_SM_jazzy_dom_canvas_StrokePlain_CL2b;
		if(_SC_jazzy_dom_canvas_Canvas._OV_jazzy_dom_canvas_Canvas_STROKE==null)
		{
			_SC_jazzy_dom_canvas_Canvas._OV_jazzy_dom_canvas_Canvas_STROKE=new _SO_jazzy_dom_canvas_StrokePlain_StrokePlain();
		}
	}
}


function _SS_jazzy_dom_canvas_StrokePlain_init()
{
}


_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.DeckAdaptor"+' flush functions');

function _SO_cn_monadic_phantom_sample_DeckAdaptor_DeckAdaptor()
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_sample_DeckAdaptor);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_sample_DeckAdaptor_init);
	this._OV_cn_monadic_phantom_sample_DeckAdaptor_decking=new _SO_cn_monadic_phantom_causal_AxisThermal_AxisThermal1(2);
	this._OV_cn_monadic_phantom_sample_DeckAdaptor_decking._OM_bind1b("deck");
	this._OV_cn_monadic_phantom_sample_DeckAdaptor_selected=-1;
	var _SL_self=this;
}
function _SM_cn_monadic_phantom_sample_DeckAdaptor_indexOf1(_SL_v)
{
	if(_SL_v==null)
		return -1;
	var _SL_p=_SL_v._OM_parent();
	var _SL_N=_SL_p._OM_count();
	for(var _SL_if=0;_SL_if<_SL_N;_SL_if++)
	{
		if(_SL_p._OM_child1(_SL_if)==_SL_v)
			return _SL_if;
	}
	return -1;
}
function _SM_cn_monadic_phantom_sample_DeckAdaptor_adapt1(_SL_event)
{
	if(_SL_event._OV_cn_monadic_phantom_render_Trapped_type!=_SF_jazzy_dom_event_Pointer_CLICKED&&(_SL_event._OV_cn_monadic_phantom_render_Trapped_type&_SF_jazzy_dom_event_Pointer_MOVING)==0)
	{
		return null;
	}
	{
		var _SL_card=null;
		if(_SL_event._OV_cn_monadic_phantom_render_Trapped_source==null)
		{
			_SL_card=null;
		}
		else
			if(_SM_jazzy_lang_ClassLoader_RTTI2(_SL_event._OV_cn_monadic_phantom_render_Trapped_source._OM_parent(),"cn.monadic.phantom.sample.GameCard"))
			{
				_SL_card=_SL_event._OV_cn_monadic_phantom_render_Trapped_source._OM_parent();
			}
			else
				if(_SM_jazzy_lang_ClassLoader_RTTI2(_SL_event._OV_cn_monadic_phantom_render_Trapped_source,"cn.monadic.phantom.sample.GameCard"))
				{
					_SL_card=_SL_event._OV_cn_monadic_phantom_render_Trapped_source;
				}
		if(_SL_card!=this._OV_cn_monadic_phantom_sample_DeckAdaptor_pointed)
		{
			var _SL_n=this._OM_indexOf1(_SL_card);
			this._OV_cn_monadic_phantom_sample_DeckAdaptor_decking._OM_set2a(_SF_cn_monadic_phantom_sample_DeckAdaptor_INDEX_EVENT,_SF_cn_monadic_phantom_sample_DeckAdaptor_HOVER);
			this._OV_cn_monadic_phantom_sample_DeckAdaptor_decking._OM_set2a(_SF_cn_monadic_phantom_sample_DeckAdaptor_INDEX_INDEX,_SL_n);
			this._OV_cn_monadic_phantom_sample_DeckAdaptor_pointed=_SL_card;
			return this._OV_cn_monadic_phantom_sample_DeckAdaptor_decking;
		}
		else
			if(_SL_event._OV_cn_monadic_phantom_render_Trapped_type==_SF_jazzy_dom_event_Pointer_CLICKED&&_SL_card!=null)
			{
				var _SL_na=this._OM_indexOf1(_SL_card);
				if(this._OV_cn_monadic_phantom_sample_DeckAdaptor_selected!=_SL_na)
					this._OV_cn_monadic_phantom_sample_DeckAdaptor_selected=_SL_na;
				else
					this._OV_cn_monadic_phantom_sample_DeckAdaptor_selected=-1;
				this._OV_cn_monadic_phantom_sample_DeckAdaptor_decking._OM_set2a(_SF_cn_monadic_phantom_sample_DeckAdaptor_INDEX_EVENT,_SF_cn_monadic_phantom_sample_DeckAdaptor_SELECT);
				this._OV_cn_monadic_phantom_sample_DeckAdaptor_decking._OM_set2a(_SF_cn_monadic_phantom_sample_DeckAdaptor_INDEX_INDEX,this._OV_cn_monadic_phantom_sample_DeckAdaptor_selected);
				return this._OV_cn_monadic_phantom_sample_DeckAdaptor_decking;
			}
	}
	return null;
}
function _SM_cn_monadic_phantom_sample_DeckAdaptor_yield1(_SL_analyzer)
{
	return null;
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.DeckAdaptor"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.sample.DeckAdaptor"),new Array("cn.monadic.phantom.render.TrapAdaptor"));
var _SC_cn_monadic_phantom_sample_DeckAdaptor=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.DeckAdaptor"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.DeckAdaptor"+' setup object binder');

function _SS_cn_monadic_phantom_sample_DeckAdaptor_bind(_SL_instance)
{
	_SL_instance._OM_indexOf1=_SM_cn_monadic_phantom_sample_DeckAdaptor_indexOf1;
	_SL_instance._OM_cn_monadic_phantom_sample_DeckAdaptor_indexOf1=_SM_cn_monadic_phantom_sample_DeckAdaptor_indexOf1;
	_SL_instance._OM_adapt1=_SM_cn_monadic_phantom_sample_DeckAdaptor_adapt1;
	_SL_instance._OM_cn_monadic_phantom_sample_DeckAdaptor_adapt1=_SM_cn_monadic_phantom_sample_DeckAdaptor_adapt1;
	_SL_instance._OM_yield1=_SM_cn_monadic_phantom_sample_DeckAdaptor_yield1;
	_SL_instance._OM_cn_monadic_phantom_sample_DeckAdaptor_yield1=_SM_cn_monadic_phantom_sample_DeckAdaptor_yield1;
	_SL_instance._OV_cn_monadic_phantom_sample_DeckAdaptor_pointed=null;
	_SL_instance._OV_cn_monadic_phantom_sample_DeckAdaptor_decking=null;
	_SL_instance._OV_cn_monadic_phantom_sample_DeckAdaptor_selected=0;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_sample_DeckAdaptor_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.DeckAdaptor"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.DeckAdaptor"+' setup object initialize');

function _SS_cn_monadic_phantom_sample_DeckAdaptor_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.DeckAdaptor"+' setup funtions');

var _SF_cn_monadic_phantom_sample_DeckAdaptor_HOVER=1;
var _SF_cn_monadic_phantom_sample_DeckAdaptor_SELECT=0;
var _SF_cn_monadic_phantom_sample_DeckAdaptor_INDEX_EVENT=1;
var _SF_cn_monadic_phantom_sample_DeckAdaptor_INDEX_INDEX=2;
_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.DeckLayout"+' flush functions');

function _SO_cn_monadic_phantom_sample_DeckLayout_DeckLayout()
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_sample_DeckLayout);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_sample_DeckLayout_init);
}
function _SM_cn_monadic_phantom_sample_DeckLayout_setHover1(_SL_index)
{
	this._OV_cn_monadic_phantom_sample_DeckLayout_hovering=_SL_index;
}
function _SM_cn_monadic_phantom_sample_DeckLayout_arrange5(_SL_node,_SL_hint,_SL_x,_SL_y,_SL_z)
{
	var _SL_offsetY=_SL_y+40;
	if(_SL_hint==this._OV_cn_monadic_phantom_sample_DeckLayout_selected)
		_SL_offsetY=_SL_y;
	var _SL_offsetX=_SL_x+this._OV_cn_monadic_phantom_sample_DeckLayout_shift_normal*_SL_hint;
	if(this._OV_cn_monadic_phantom_sample_DeckLayout_hovering>=0&&_SL_hint>this._OV_cn_monadic_phantom_sample_DeckLayout_hovering)
		_SL_offsetX=_SL_offsetX+this._OV_cn_monadic_phantom_sample_DeckLayout_shift_hover;
	var _SL_oldX=_SL_node._OM_measure1(_SF_cn_monadic_phantom_render_Visual_OFFSET_X);
	if(_SL_offsetX-_SL_oldX>5)
	{
		_SL_offsetX=_SL_oldX+5+Math.floor((_SL_offsetX-_SL_oldX)/5);
		this._OV_cn_monadic_phantom_sample_DeckLayout_pending=true;
	}
	else
		if(_SL_offsetX-_SL_oldX<-5)
		{
			_SL_offsetX=_SL_oldX-5-Math.floor((_SL_oldX-_SL_offsetX)/5);
			this._OV_cn_monadic_phantom_sample_DeckLayout_pending=true;
		}
	_SL_node._OM_locate3(_SL_offsetX,_SL_offsetY,_SL_z+10*_SL_hint);
	_SL_node._OM_render1(true);
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.DeckLayout"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.sample.DeckLayout"),new Array("cn.monadic.phantom.render.Layout"));
var _SC_cn_monadic_phantom_sample_DeckLayout=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.DeckLayout"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.DeckLayout"+' setup object binder');

function _SS_cn_monadic_phantom_sample_DeckLayout_bind(_SL_instance)
{
	_SL_instance._OM_setHover1=_SM_cn_monadic_phantom_sample_DeckLayout_setHover1;
	_SL_instance._OM_cn_monadic_phantom_sample_DeckLayout_setHover1=_SM_cn_monadic_phantom_sample_DeckLayout_setHover1;
	_SL_instance._OM_arrange5=_SM_cn_monadic_phantom_sample_DeckLayout_arrange5;
	_SL_instance._OM_cn_monadic_phantom_sample_DeckLayout_arrange5=_SM_cn_monadic_phantom_sample_DeckLayout_arrange5;
	_SL_instance._OV_cn_monadic_phantom_sample_DeckLayout_shift_normal=0;
	_SL_instance._OV_cn_monadic_phantom_sample_DeckLayout_shift_hover=0;
	_SL_instance._OV_cn_monadic_phantom_sample_DeckLayout_shift_step=0;
	_SL_instance._OV_cn_monadic_phantom_sample_DeckLayout_hovering=0;
	_SL_instance._OV_cn_monadic_phantom_sample_DeckLayout_selected=0;
	_SL_instance._OV_cn_monadic_phantom_sample_DeckLayout_pending=false;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_sample_DeckLayout_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.DeckLayout"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.DeckLayout"+' setup object initialize');

function _SS_cn_monadic_phantom_sample_DeckLayout_init()
{
	this._OV_cn_monadic_phantom_sample_DeckLayout_shift_normal=60;
	this._OV_cn_monadic_phantom_sample_DeckLayout_shift_hover=60;
	this._OV_cn_monadic_phantom_sample_DeckLayout_shift_step=5;
	this._OV_cn_monadic_phantom_sample_DeckLayout_hovering=-1;
	this._OV_cn_monadic_phantom_sample_DeckLayout_selected=-1;
	this._OV_cn_monadic_phantom_sample_DeckLayout_pending=false;
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.DeckLayout"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.DragAdaptor"+' flush functions');

function _SO_cn_monadic_phantom_sample_DragAdaptor_DragAdaptor()
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_sample_DragAdaptor);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_sample_DragAdaptor_init);
	this._OV_cn_monadic_phantom_sample_DragAdaptor_dragging=new _SO_cn_monadic_phantom_causal_AxisThermal_AxisThermal1(3);
	this._OV_cn_monadic_phantom_sample_DragAdaptor_dragging._OM_bind1b("part");
	this._OV_cn_monadic_phantom_sample_DragAdaptor_dragging._OM_set2a(_SF_cn_monadic_phantom_sample_PartRadiator_INDEX_VIEW,_SF_cn_monadic_phantom_sample_PartRadiator_DRAG);
	this._OV_cn_monadic_phantom_sample_DragAdaptor_toggling=new _SO_cn_monadic_phantom_causal_AxisThermal_AxisThermal1(3);
	this._OV_cn_monadic_phantom_sample_DragAdaptor_toggling._OM_bind1b("trap");
	this._OV_cn_monadic_phantom_sample_DragAdaptor_toggling._OM_set2a(1,-9999);
	this._OV_cn_monadic_phantom_sample_DragAdaptor_toggling._OM_set2a(2,0);
	this._OV_cn_monadic_phantom_sample_DragAdaptor_toggling._OM_set2a(3,0);
	this._OV_cn_monadic_phantom_sample_DragAdaptor_signing=new _SO_cn_monadic_phantom_causal_AxisThermal_AxisThermal1(2);
	this._OV_cn_monadic_phantom_sample_DragAdaptor_signing._OM_bind1b("sign");
	this._OV_cn_monadic_phantom_sample_DragAdaptor_signing._OM_chain1(this._OV_cn_monadic_phantom_sample_DragAdaptor_toggling);
}
function _SM_cn_monadic_phantom_sample_DragAdaptor_adapt1(_SL_event)
{
	switch(_SL_event._OV_cn_monadic_phantom_render_Trapped_type)
	{
		case _SF_jazzy_dom_event_Pointer_EXITED:
			this._OV_cn_monadic_phantom_sample_DragAdaptor_card=null;
			this._OV_cn_monadic_phantom_sample_DragAdaptor_flexible=null;
			this._OV_cn_monadic_phantom_sample_DragAdaptor_toggling._OM_set2a(2,0);
			return this._OV_cn_monadic_phantom_sample_DragAdaptor_toggling;
		case _SF_jazzy_dom_event_Pointer_PREDRAG:
			if(_SL_event._OV_cn_monadic_phantom_render_Trapped_source!=null&&_SL_event._OV_cn_monadic_phantom_render_Trapped_source._OM_query1("effect")!=null)
			{
				this._OV_cn_monadic_phantom_sample_DragAdaptor_card=_SL_event._OV_cn_monadic_phantom_render_Trapped_source;
				this._OV_cn_monadic_phantom_sample_DragAdaptor_toggling._OM_set2a(2,2);
				return this._OV_cn_monadic_phantom_sample_DragAdaptor_toggling;
			}
			else
				if(_SL_event._OV_cn_monadic_phantom_render_Trapped_source!=null&&_SL_event._OV_cn_monadic_phantom_render_Trapped_source._OM_query1("flex")!=null)
				{
					this._OV_cn_monadic_phantom_sample_DragAdaptor_flexible=_SL_event._OV_cn_monadic_phantom_render_Trapped_source;
					this._OV_cn_monadic_phantom_sample_DragAdaptor_toggling._OM_set2a(2,1);
					this._OV_cn_monadic_phantom_sample_DragAdaptor_ox=_SL_event._OV_cn_monadic_phantom_render_Trapped_x;
					this._OV_cn_monadic_phantom_sample_DragAdaptor_oy=_SL_event._OV_cn_monadic_phantom_render_Trapped_y;
					return this._OV_cn_monadic_phantom_sample_DragAdaptor_toggling;
				}
			break;
		case _SF_jazzy_dom_event_Pointer_DRAGGING:
			if(this._OV_cn_monadic_phantom_sample_DragAdaptor_card!=null)
			{
				this._OV_cn_monadic_phantom_sample_DragAdaptor_toggling._OM_set2a(2,2);
				if(this._OV_cn_monadic_phantom_sample_DragAdaptor_card!=null&&_SL_event._OV_cn_monadic_phantom_render_Trapped_source!=null&&_SL_event._OV_cn_monadic_phantom_render_Trapped_source._OM_query1("part")!=null)
				{
					var _SL_x=this._OV_cn_monadic_phantom_sample_DragAdaptor_card._OM_query1("effect");
					var _SL_ph=_SL_event._OV_cn_monadic_phantom_render_Trapped_source._OM_query1("part");
					if(_SM_jazzy_lang___string_startsWith2(_SL_ph,"gun")&&_SL_x=="gun")
					{
						this._OV_cn_monadic_phantom_sample_DragAdaptor_toggling._OM_set2a(2,1);
					}
					else
						if(_SM_jazzy_lang___string_startsWith2(_SL_ph,"head")&&_SL_x=="head")
						{
							this._OV_cn_monadic_phantom_sample_DragAdaptor_toggling._OM_set2a(2,1);
						}
				}
				return this._OV_cn_monadic_phantom_sample_DragAdaptor_toggling;
			}
			return null;
		case _SF_jazzy_dom_event_Pointer_DRAGGED:
			this._OV_cn_monadic_phantom_sample_DragAdaptor_toggling._OM_set2a(2,0);
			if(this._OV_cn_monadic_phantom_sample_DragAdaptor_card!=null&&_SL_event._OV_cn_monadic_phantom_render_Trapped_source!=null&&_SL_event._OV_cn_monadic_phantom_render_Trapped_source._OM_query1("part")!=null)
			{
				var _SL_xi=this._OV_cn_monadic_phantom_sample_DragAdaptor_card._OM_query1("effect");
				var _SL_pi=_SL_event._OV_cn_monadic_phantom_render_Trapped_source._OM_query1("part");
				this._OV_cn_monadic_phantom_sample_DragAdaptor_card=null;
				if(_SM_jazzy_lang___string_startsWith2(_SL_pi,"gun")&&_SL_xi=="gun")
				{
					this._OV_cn_monadic_phantom_sample_DragAdaptor_dragging._OM_set2a(_SF_cn_monadic_phantom_sample_PartRadiator_INDEX_PART,1);
					this._OV_cn_monadic_phantom_sample_DragAdaptor_dragging._OM_chain1(this._OV_cn_monadic_phantom_sample_DragAdaptor_toggling);
					this._OV_cn_monadic_phantom_sample_DragAdaptor_dragging._OM_set2a(_SF_cn_monadic_phantom_sample_PartRadiator_INDEX_HOST,(_SL_event._OV_cn_monadic_phantom_render_Trapped_source._OM_parent()._OM_parent()._OM_query1("cowboy")-0));
					return this._OV_cn_monadic_phantom_sample_DragAdaptor_dragging;
				}
				else
					if(_SM_jazzy_lang___string_startsWith2(_SL_pi,"head")&&_SL_xi=="head")
					{
						this._OV_cn_monadic_phantom_sample_DragAdaptor_dragging._OM_set2a(_SF_cn_monadic_phantom_sample_PartRadiator_INDEX_PART,2);
						this._OV_cn_monadic_phantom_sample_DragAdaptor_dragging._OM_chain1(this._OV_cn_monadic_phantom_sample_DragAdaptor_toggling);
						this._OV_cn_monadic_phantom_sample_DragAdaptor_dragging._OM_set2a(_SF_cn_monadic_phantom_sample_PartRadiator_INDEX_HOST,(_SL_event._OV_cn_monadic_phantom_render_Trapped_source._OM_parent()._OM_parent()._OM_query1("cowboy")-0));
						return this._OV_cn_monadic_phantom_sample_DragAdaptor_dragging;
					}
			}
			else
				if(this._OV_cn_monadic_phantom_sample_DragAdaptor_flexible!=null)
				{
					var _SL_x0a=this._OV_cn_monadic_phantom_sample_DragAdaptor_flexible._OM_measure1(_SF_cn_monadic_phantom_render_Visual_OFFSET_X);
					var _SL_y0=this._OV_cn_monadic_phantom_sample_DragAdaptor_flexible._OM_measure1(_SF_cn_monadic_phantom_render_Visual_OFFSET_Y);
					this._OV_cn_monadic_phantom_sample_DragAdaptor_signing._OM_set2a(1,_SL_x0a+_SL_event._OV_cn_monadic_phantom_render_Trapped_x-this._OV_cn_monadic_phantom_sample_DragAdaptor_ox);
					this._OV_cn_monadic_phantom_sample_DragAdaptor_signing._OM_set2a(2,_SL_y0+_SL_event._OV_cn_monadic_phantom_render_Trapped_y-this._OV_cn_monadic_phantom_sample_DragAdaptor_oy);
					this._OV_cn_monadic_phantom_sample_DragAdaptor_signing._OM_set2b("flex",this._OV_cn_monadic_phantom_sample_DragAdaptor_flexible._OM_query1("flex"));
					this._OV_cn_monadic_phantom_sample_DragAdaptor_flexible=null;
					return this._OV_cn_monadic_phantom_sample_DragAdaptor_signing;
				}
			this._OV_cn_monadic_phantom_sample_DragAdaptor_card=null;
			return this._OV_cn_monadic_phantom_sample_DragAdaptor_toggling;
	}
	return null;
}
function _SM_cn_monadic_phantom_sample_DragAdaptor_yield1(_SL_analyzer)
{
	return null;
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.DragAdaptor"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.sample.DragAdaptor"),new Array("cn.monadic.phantom.render.TrapAdaptor"));
var _SC_cn_monadic_phantom_sample_DragAdaptor=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.DragAdaptor"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.DragAdaptor"+' setup object binder');

function _SS_cn_monadic_phantom_sample_DragAdaptor_bind(_SL_instance)
{
	_SL_instance._OM_adapt1=_SM_cn_monadic_phantom_sample_DragAdaptor_adapt1;
	_SL_instance._OM_cn_monadic_phantom_sample_DragAdaptor_adapt1=_SM_cn_monadic_phantom_sample_DragAdaptor_adapt1;
	_SL_instance._OM_yield1=_SM_cn_monadic_phantom_sample_DragAdaptor_yield1;
	_SL_instance._OM_cn_monadic_phantom_sample_DragAdaptor_yield1=_SM_cn_monadic_phantom_sample_DragAdaptor_yield1;
	_SL_instance._OV_cn_monadic_phantom_sample_DragAdaptor_card=null;
	_SL_instance._OV_cn_monadic_phantom_sample_DragAdaptor_timestamp=null;
	_SL_instance._OV_cn_monadic_phantom_sample_DragAdaptor_dragging=null;
	_SL_instance._OV_cn_monadic_phantom_sample_DragAdaptor_toggling=null;
	_SL_instance._OV_cn_monadic_phantom_sample_DragAdaptor_signing=null;
	_SL_instance._OV_cn_monadic_phantom_sample_DragAdaptor_flexible=null;
	_SL_instance._OV_cn_monadic_phantom_sample_DragAdaptor_ox=0;
	_SL_instance._OV_cn_monadic_phantom_sample_DragAdaptor_oy=0;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_sample_DragAdaptor_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.DragAdaptor"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.DragAdaptor"+' setup object initialize');

function _SS_cn_monadic_phantom_sample_DragAdaptor_init()
{
	this._OV_cn_monadic_phantom_sample_DragAdaptor_card=null;
	this._OV_cn_monadic_phantom_sample_DragAdaptor_flexible=null;
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.DragAdaptor"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.Exported"+' flush functions');

function _SM_cn_monadic_phantom_sample_Exported__demo_debug()
{
	_SM_cn_monadic_phantom_sample_Test_initialize1(0);
}
function _SM_cn_monadic_phantom_sample_Exported__demo_record()
{
	_SM_cn_monadic_phantom_sample_Test_initialize1(1);
}
function _SM_cn_monadic_phantom_sample_Exported__demo_replay()
{
	_SM_cn_monadic_phantom_sample_Test_initialize1(2);
}
function _SM_cn_monadic_phantom_sample_Exported_speak1(_SL_s)
{
	_SV_cn_monadic_phantom_sample_Exported_producer._OM_facilitate2("speak",_SL_s);
}
function _SM_cn_monadic_phantom_sample_Exported_doNote()
{
	_SV_cn_monadic_phantom_sample_Exported_producer._OM_facilitate2("freeze",true);
}
function _SM_cn_monadic_phantom_sample_Exported_beginNote()
{
	_SV_cn_monadic_phantom_sample_Exported_producer._OM_facilitate2("sketch","");
}
function _SM_cn_monadic_phantom_sample_Exported_endNote()
{
	_SV_cn_monadic_phantom_sample_Exported_producer._OM_facilitate2("freeze",false);
}
function _SM_cn_monadic_phantom_sample_Exported_clearNote()
{
	_SV_cn_monadic_phantom_sample_Exported_producer._OM_facilitate2("sketch",null);
}
function _SM_cn_monadic_phantom_sample_Exported_tapeOut()
{
	_SV_cn_monadic_phantom_sample_Exported_producer._OM_facilitate2("tapeout","");
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.Exported"+' setup static binder');

var _SV_cn_monadic_phantom_sample_Exported_producer=null;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.Exported"+' setup static initializer');

{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.Exported"+' setup funtions');

function _demo_record()
{
	return _SM_cn_monadic_phantom_sample_Exported__demo_record();
}
function clearNote()
{
	return _SM_cn_monadic_phantom_sample_Exported_clearNote();
}
function doNote()
{
	return _SM_cn_monadic_phantom_sample_Exported_doNote();
}
function endNote()
{
	return _SM_cn_monadic_phantom_sample_Exported_endNote();
}
function beginNote()
{
	return _SM_cn_monadic_phantom_sample_Exported_beginNote();
}
function speak(_SL_s)
{
	return _SM_cn_monadic_phantom_sample_Exported_speak1(_SL_s);
}
function _demo_replay()
{
	return _SM_cn_monadic_phantom_sample_Exported__demo_replay();
}
function _demo_debug()
{
	return _SM_cn_monadic_phantom_sample_Exported__demo_debug();
}
function tapeOut()
{
	return _SM_cn_monadic_phantom_sample_Exported_tapeOut();
}
_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.GameCard"+' flush functions');

function _SO_cn_monadic_phantom_sample_GameCard_GameCard1(_SL_idb)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_sample_GameCard);
	_SM_jazzy_lang_System_BIND2(this,_SO_cn_monadic_phantom_render_Layer_Layer1)._temp_(_SL_idb);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_sample_GameCard_init);
}
function _SM_cn_monadic_phantom_sample_GameCard_bind4(_SL_carda,_SL_face,_SL_rank,_SL_title)
{
	this._OV_cn_monadic_phantom_render_Layer_candidates=_SM_jazzy_lang_System_initArray2("cn.monadic.phantom.render.Visual",new Array(_SL_carda,_SL_face,_SL_rank,_SL_title,null));
	this._OM__x_accept1(this._OV_cn_monadic_phantom_render_Layer_candidates);
	this._OV_cn_monadic_phantom_render_Layer_N=4;
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.GameCard"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.render.Visualizing","cn.monadic.phantom.render.Layer","cn.monadic.phantom.sample.GameCard"),new Array());
var _SC_cn_monadic_phantom_sample_GameCard=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.GameCard"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.GameCard"+' setup object binder');

function _SS_cn_monadic_phantom_sample_GameCard_bind(_SL_instance)
{
	_SL_instance._OM_bind4=_SM_cn_monadic_phantom_sample_GameCard_bind4;
	_SL_instance._OM_cn_monadic_phantom_sample_GameCard_bind4=_SM_cn_monadic_phantom_sample_GameCard_bind4;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_sample_GameCard_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.GameCard"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.GameCard"+' setup object initialize');

function _SS_cn_monadic_phantom_sample_GameCard_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.GameCard"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.HintAdaptor"+' flush functions');

function _SO_cn_monadic_phantom_sample_HintAdaptor_HintAdaptor()
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_sample_HintAdaptor);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_sample_HintAdaptor_init);
	this._OV_cn_monadic_phantom_sample_HintAdaptor_hinting=new _SO_cn_monadic_phantom_causal_AxisThermal_AxisThermal1(4);
	this._OV_cn_monadic_phantom_sample_HintAdaptor_hinting._OM_bind1b("hint");
}
function _SM_cn_monadic_phantom_sample_HintAdaptor_adapt1(_SL_event)
{
	if((_SL_event._OV_cn_monadic_phantom_render_Trapped_type&_SF_jazzy_dom_event_Pointer_MOVING)!=0)
	{
		this._OV_cn_monadic_phantom_sample_HintAdaptor_focus=_SL_event._OV_cn_monadic_phantom_render_Trapped_source;
	}
	if(this._OV_cn_monadic_phantom_sample_HintAdaptor_hinted)
	{
		this._OV_cn_monadic_phantom_sample_HintAdaptor_hinted=false;
		this._OV_cn_monadic_phantom_sample_HintAdaptor_hinting._OM_set2a(_SF_cn_monadic_phantom_sample_HintAdaptor_INDEX_VIEW,_SF_cn_monadic_phantom_sample_HintAdaptor_HIDE);
		return this._OV_cn_monadic_phantom_sample_HintAdaptor_hinting;
	}
	else
	{
		return null;
	}
}
function _SM_cn_monadic_phantom_sample_HintAdaptor_yield1(_SL_analyzer)
{
	if(this._OV_cn_monadic_phantom_sample_HintAdaptor_focus!=null&&this._OV_cn_monadic_phantom_sample_HintAdaptor_focus._OM_query1("hint")!=null&&_SM_jazzy_lang_System_currentTimeMillis()-_SL_analyzer._OM_timestamp()>500)
	{
		this._OV_cn_monadic_phantom_sample_HintAdaptor_hinted=true;
		var _SL_hx=0;
		var _SL_hy=0;
		if(this._OV_cn_monadic_phantom_sample_HintAdaptor_focus._OM_query1("hint-x")!=null)
		{
			_SL_hx=(this._OV_cn_monadic_phantom_sample_HintAdaptor_focus._OM_query1("hint-x")-0);
		}
		if(this._OV_cn_monadic_phantom_sample_HintAdaptor_focus._OM_query1("hint-y")!=null)
		{
			_SL_hy=(this._OV_cn_monadic_phantom_sample_HintAdaptor_focus._OM_query1("hint-y")-0);
		}
		this._OV_cn_monadic_phantom_sample_HintAdaptor_hinting._OM_set2a(_SF_cn_monadic_phantom_sample_HintAdaptor_INDEX_VIEW,_SF_cn_monadic_phantom_sample_HintAdaptor_SHOW);
		this._OV_cn_monadic_phantom_sample_HintAdaptor_hinting._OM_set2a(_SF_cn_monadic_phantom_sample_HintAdaptor_INDEX_X,this._OV_cn_monadic_phantom_sample_HintAdaptor_focus._OM_measure1(_SF_cn_monadic_phantom_render_Visual_OFFSET_X)+_SL_hx);
		this._OV_cn_monadic_phantom_sample_HintAdaptor_hinting._OM_set2a(_SF_cn_monadic_phantom_sample_HintAdaptor_INDEX_Y,this._OV_cn_monadic_phantom_sample_HintAdaptor_focus._OM_measure1(_SF_cn_monadic_phantom_render_Visual_OFFSET_Y)+_SL_hy);
		this._OV_cn_monadic_phantom_sample_HintAdaptor_hinting._OM_set2a(_SF_cn_monadic_phantom_sample_HintAdaptor_INDEX_Z,2000);
		this._OV_cn_monadic_phantom_sample_HintAdaptor_hinting._OM_set2b("hint",this._OV_cn_monadic_phantom_sample_HintAdaptor_focus._OM_query1("hint"));
		this._OV_cn_monadic_phantom_sample_HintAdaptor_focus=null;
		return this._OV_cn_monadic_phantom_sample_HintAdaptor_hinting;
	}
	else
	{
		return null;
	}
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.HintAdaptor"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.sample.HintAdaptor"),new Array("cn.monadic.phantom.render.TrapAdaptor"));
var _SC_cn_monadic_phantom_sample_HintAdaptor=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.HintAdaptor"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.HintAdaptor"+' setup object binder');

function _SS_cn_monadic_phantom_sample_HintAdaptor_bind(_SL_instance)
{
	_SL_instance._OM_adapt1=_SM_cn_monadic_phantom_sample_HintAdaptor_adapt1;
	_SL_instance._OM_cn_monadic_phantom_sample_HintAdaptor_adapt1=_SM_cn_monadic_phantom_sample_HintAdaptor_adapt1;
	_SL_instance._OM_yield1=_SM_cn_monadic_phantom_sample_HintAdaptor_yield1;
	_SL_instance._OM_cn_monadic_phantom_sample_HintAdaptor_yield1=_SM_cn_monadic_phantom_sample_HintAdaptor_yield1;
	_SL_instance._OV_cn_monadic_phantom_sample_HintAdaptor_focus=null;
	_SL_instance._OV_cn_monadic_phantom_sample_HintAdaptor_hinted=false;
	_SL_instance._OV_cn_monadic_phantom_sample_HintAdaptor_hinting=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_sample_HintAdaptor_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.HintAdaptor"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.HintAdaptor"+' setup object initialize');

function _SS_cn_monadic_phantom_sample_HintAdaptor_init()
{
	this._OV_cn_monadic_phantom_sample_HintAdaptor_focus=null;
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.HintAdaptor"+' setup funtions');

var _SF_cn_monadic_phantom_sample_HintAdaptor_SHOW=1;
var _SF_cn_monadic_phantom_sample_HintAdaptor_HIDE=0;
var _SF_cn_monadic_phantom_sample_HintAdaptor_INDEX_VIEW=1;
var _SF_cn_monadic_phantom_sample_HintAdaptor_INDEX_X=2;
var _SF_cn_monadic_phantom_sample_HintAdaptor_INDEX_Y=3;
var _SF_cn_monadic_phantom_sample_HintAdaptor_INDEX_Z=4;
_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.Linkage"+' flush functions');

function _SM_cn_monadic_phantom_sample_Linkage_CL0d(_SL_context,_SL_td)
{
	var _SL_lHint=_SL_context._OM_executive1("lHint");
	switch(_SL_td._OM_quantify1(_SF_cn_monadic_phantom_sample_HintAdaptor_INDEX_VIEW))
	{
		case _SF_cn_monadic_phantom_sample_HintAdaptor_HIDE:
			_SC_cn_monadic_phantom_render_AxisLayout._OM_toggle2(_SL_lHint,false);
			break;
		case _SF_cn_monadic_phantom_sample_HintAdaptor_SHOW:
			var _SL_info=_SL_td._OM_bundled1("hint");
			var _SL_xh=_SL_td._OM_quantify1(_SF_cn_monadic_phantom_sample_HintAdaptor_INDEX_X);
			var _SL_yh=_SL_td._OM_quantify1(_SF_cn_monadic_phantom_sample_HintAdaptor_INDEX_Y);
			var _SL_za=_SL_td._OM_quantify1(_SF_cn_monadic_phantom_sample_HintAdaptor_INDEX_Z);
			_SL_lHint._OM_locate3(_SL_xh-25,_SL_yh-105,_SL_za+1000);
			(_SL_lHint._OM_child1(0))._OM_manipulate1(function (_SL_el)
			{
				_SL_el._OM_getPeer().childNodes[0].innerHTML=(_SL_info);
			});
			_SC_cn_monadic_phantom_render_AxisLayout._OM_toggle2(_SL_lHint,true);
			break;
	}
}
function _SM_cn_monadic_phantom_sample_Linkage_CL2c(_SL_contexta,_SL_te)
{
	var _SL_nodea=_SL_contexta._OM_executive1("lDemo");
	switch(_SL_te._OM_quantify1(1))
	{
		case 0:
			_SL_nodea._OM_record2("frame","-20");
			break;
		case 1:
			_SC_cn_monadic_phantom_render_AxisLayout._OM_toggle2(_SL_nodea,true);
			var _SL_infoa=_SL_te._OM_bundled1("demo");
			(_SL_nodea._OM_child1(0))._OM_manipulate1(function (_SL_el)
			{
				_SL_el._OM_getPeer().childNodes[0].innerHTML=(_SL_infoa);
			});
			_SL_nodea._OM_record2("frame","10");
			break;
	}
}
function _SM_cn_monadic_phantom_sample_Linkage_CL4a(_SL_contextb,_SL_tf)
{
	var _SL_overlay=_SL_contextb._OM_executive1("$overlay");
	if(_SL_overlay==null)
		return;
	switch(_SL_tf._OM_quantify1(1))
	{
		case 0:
			_SL_overlay._OM_clear();
			break;
		case 1:
			var _SL_infob=_SL_tf._OM_bundled1("line");
			var _SL_params=(_SL_infob).split("_");
			var _SL_lenc=_SL_params.length/2;
			var _SL_xsa=_SM_jazzy_lang_System_newArray4("$int",0,new Array(_SL_lenc,null),0);
			var _SL_ysa=_SM_jazzy_lang_System_newArray4("$int",0,new Array(_SL_lenc,null),0);
			for(var _SL_ii=0;_SL_ii<_SL_lenc;_SL_ii++)
			{
				_SL_xsa[_SL_ii]=(_SL_params[_SL_ii*2]-0);
				_SL_ysa[_SL_ii]=(_SL_params[_SL_ii*2+1]-0);
			}
			_SL_overlay._OM_drawLines2(_SL_xsa,_SL_ysa);
			_SL_overlay._OM_flush();
			break;
	}
}
function _SM_cn_monadic_phantom_sample_Linkage_CL5(_SL_contextc,_SL_tg)
{
	var _SL_lDeck=_SL_contextc._OM_executive1("lDeck");
	var _SL_right=_SL_lDeck._OM_getLayout();
	switch(_SL_tg._OM_quantify1(_SF_cn_monadic_phantom_sample_DeckAdaptor_INDEX_EVENT))
	{
		case _SF_cn_monadic_phantom_sample_DeckAdaptor_HOVER:
			_SL_right._OM_setHover1(_SL_tg._OM_quantify1(_SF_cn_monadic_phantom_sample_DeckAdaptor_INDEX_INDEX));
			_SL_right._OV_cn_monadic_phantom_sample_DeckLayout_pending=true;
			break;
		case _SF_cn_monadic_phantom_sample_DeckAdaptor_SELECT:
			_SL_right._OV_cn_monadic_phantom_sample_DeckLayout_selected=_SL_tg._OM_quantify1(_SF_cn_monadic_phantom_sample_DeckAdaptor_INDEX_INDEX);
			_SL_right._OV_cn_monadic_phantom_sample_DeckLayout_pending=true;
			break;
	}
}
function _SM_cn_monadic_phantom_sample_Linkage_CL6(_SL_contextd,_SL_th)
{
	var _SL_lSign=_SL_contextd._OM_executive1("lSign");
	var _SL_nb=_SL_th._OM_bundled1("flex");
	var _SL_vc=_SL_lSign._OM_child1((_SL_nb-0));
	var _SL_xm=_SL_th._OM_quantify1(1);
	var _SL_yk=_SL_th._OM_quantify1(2);
	var _SL_zb=_SL_vc._OM_measure1(_SF_cn_monadic_phantom_render_Visual_OFFSET_Z);
	_SL_vc._OM_locate3(_SL_xm,_SL_yk,_SL_zb);
}
function _SM_cn_monadic_phantom_sample_Linkage_CL7(_SL_contexte,_SL_ti)
{
	var _SL_lHand=_SL_contexte._OM_executive1("lHand");
	var _SL_xn=_SL_ti._OM_quantify1(1);
	var _SL_yl=_SL_ti._OM_quantify1(2);
	var _SL_zc=9999;
	if(_SL_xn==-9999)
	{
		_SL_lHand._OM_slide1(_SL_yl);
	}
	else
	{
		_SL_lHand._OM_locate3(_SL_xn,_SL_yl,_SL_zc);
	}
}
function _SM_cn_monadic_phantom_sample_Linkage_CL8(_SL_hosta,_SL_sequence,_SL_timestamp)
{
	var _SL_param=_SL_hosta._OM_query1("frame");
	if(_SL_param==null||_SL_param=="0")
		return;
	var _SL_frame=(_SL_param-0);
	if(_SL_frame>0)
	{
		_SL_frame--;
		_SL_hosta._OM_locate3(250-_SL_frame*25,250,9999);
		if(_SL_frame==0&&_SV_jazzy_lang_System_COMPATIBLE_MSIE)
		{
			_SM_cn_monadic_phantom_sample_Plugin_playback1("assets/clip/typing.wav");
		}
	}
	else
		if(_SL_frame<0)
		{
			_SL_frame++;
			if(_SL_frame==0)
			{
				_SC_cn_monadic_phantom_render_AxisLayout._OM_toggle2(_SL_hosta,false);
			}
			else
			{
				_SL_hosta._OM_locate3(250+(20+_SL_frame)*40,250,9999);
			}
		}
	_SL_hosta._OM_record2("frame",""+_SL_frame);
}
function _SM_cn_monadic_phantom_sample_Linkage_CL9(_SL_hostb,_SL_sequencea,_SL_timestampa)
{
	var _SL_lb=_SL_hostb;
	var _SL_d=_SL_lb._OM_getLayout();
	if(_SL_d._OV_cn_monadic_phantom_sample_DeckLayout_pending)
	{
		_SL_d._OV_cn_monadic_phantom_sample_DeckLayout_pending=false;
		_SL_lb._OM_refresh();
	}
}
function _SM_cn_monadic_phantom_sample_Linkage_CL10(_SL_context,_SL_td)
{
	if(_SL_td!=null)
		_SM_cn_monadic_phantom_sample_Loader_output1("lost = "+_SL_td);
}
function _SM_cn_monadic_phantom_sample_Linkage_CL11(_SL_contextf,_SL_data)
{
	var _SL_taper=_SL_contextf._OM_executive1("$recorder");
	if(_SL_taper!=null)
		_SL_taper._OM_skip();
	var _SL_director=_SL_contextf._OM_executive1("$director");
	var _SL_speech=new _SO_cn_monadic_phantom_causal_AxisThermal_AxisThermal1(1);
	_SL_speech._OM_bind1b("demo");
	_SL_speech._OM_set2a(1,1);
	_SL_speech._OM_set2b("demo",""+_SL_data);
	_SL_director._OM_radiate1(_SL_speech);
	var _SL_deactive=function ()
	{
		_SL_speech._OM_set2a(1,0);
		_SL_speech._OM_set2b("demo","");
		_SL_director._OM_radiate1(_SL_speech);
	};
	_SM_jazzy_lang_System_defer2(_SL_deactive,3000);
}
function _SM_cn_monadic_phantom_sample_Linkage_CL13(_SL_contextg,_SL_dataa)
{
	var _SL_actual=_SL_contextg;
	_SL_actual._OM_toggle1((!!_SL_dataa));
}
function _SM_cn_monadic_phantom_sample_Linkage_CL14(_SL_contexth,_SL_datab)
{
	var _SL_analyzera=_SL_contexth._OM_executive1("$analyzer");
	if(_SL_analyzera==null)
		return;
	var _SL_actuala=_SL_contexth;
	var _SL_directora=_SL_contexth._OM_executive1("$director");
	if(_SL_datab==null)
	{
		_SL_actuala._OM_toggle1(false);
		var _SL_eventc=new _SO_cn_monadic_phantom_causal_AxisThermal_AxisThermal1(1);
		_SL_eventc._OM_set2a(1,0);
		_SL_eventc._OM_bind1b("note");
		_SL_directora._OM_radiate1(_SL_eventc);
		return;
	}
	_SL_actuala._OM_toggle1(false);
	var _SL_foob=_SL_analyzera._OM_trace();
	if(_SL_foob!="")
	{
		var _SL_eventd=new _SO_cn_monadic_phantom_causal_AxisThermal_AxisThermal1(1);
		_SL_eventd._OM_set2a(1,1);
		_SL_eventd._OM_set2b("line",_SL_foob);
		_SL_eventd._OM_bind1b("note");
		_SL_directora._OM_radiate1(_SL_eventd);
	}
	_SL_actuala._OM_toggle1(true);
}
function _SM_cn_monadic_phantom_sample_Linkage_CL15(_SL_contexti,_SL_datac)
{
	var _SL_tapera=_SL_contexti._OM_executive1("$recorder");
	if(_SL_tapera!=null)
	{
		var _SL_taped=_SL_tapera._OM_eject();
		_SM_cn_monadic_phantom_sample_Loader_output1(_SL_taped);
		_SM_jazzy_dom_core_JSO_window_copyToClipboard1(_SL_taped);
	}
}
function _SM_cn_monadic_phantom_sample_Linkage_linkDirective1(_SL_producer)
{
	var _SL_hinta=new _SO_cn_monadic_phantom_master_ExecRadiator_ExecRadiator1("hint");
	_SL_hinta._OM_bind1c(_SM_cn_monadic_phantom_sample_Linkage_CL0d);
	_SL_producer._OM_directive1(_SL_hinta);
	var _SL_demo=new _SO_cn_monadic_phantom_master_ExecRadiator_ExecRadiator1("demo");
	_SL_demo._OM_bind1c(_SM_cn_monadic_phantom_sample_Linkage_CL2c);
	_SL_producer._OM_directive1(_SL_demo);
	var _SL_note=new _SO_cn_monadic_phantom_master_ExecRadiator_ExecRadiator1("note");
	_SL_note._OM_bind1c(_SM_cn_monadic_phantom_sample_Linkage_CL4a);
	_SL_producer._OM_directive1(_SL_note);
	var _SL_deck=new _SO_cn_monadic_phantom_master_ExecRadiator_ExecRadiator1("deck");
	_SL_deck._OM_bind1c(_SM_cn_monadic_phantom_sample_Linkage_CL5);
	_SL_producer._OM_directive1(_SL_deck);
	var _SL_sign=new _SO_cn_monadic_phantom_master_ExecRadiator_ExecRadiator1("sign");
	_SL_sign._OM_bind1c(_SM_cn_monadic_phantom_sample_Linkage_CL6);
	_SL_producer._OM_directive1(_SL_sign);
	var _SL_trap=new _SO_cn_monadic_phantom_master_ExecRadiator_ExecRadiator1("trap");
	_SL_trap._OM_bind1c(_SM_cn_monadic_phantom_sample_Linkage_CL7);
	_SL_producer._OM_directive1(_SL_trap);
	var _SL_part=new _SO_cn_monadic_phantom_sample_PartRadiator_PartRadiator1("part");
	_SL_producer._OM_directive1(_SL_part);
	var _SL_lDemo=_SL_producer._OM_executive1("lDemo");
	_SL_lDemo._OM_alter1(_SM_cn_monadic_phantom_sample_Linkage_CL8);
	var _SL_lDecka=_SL_producer._OM_executive1("lDeck");
	_SL_lDecka._OM_alter1(_SM_cn_monadic_phantom_sample_Linkage_CL9);
}
function _SM_cn_monadic_phantom_sample_Linkage_linkExtension1(_SL_producer)
{
	var _SL_dump=new _SO_cn_monadic_phantom_master_ExecRadiator_ExecRadiator1("dump");
	_SL_dump._OM_bind1c(_SM_cn_monadic_phantom_sample_Linkage_CL10);
	_SL_producer._OM_enableSalvager1(_SL_dump);
	_SL_producer._OM_enableOverlay1("z-Index: 7777; position: absolute;");
	var _SL_synt=new _SO_cn_monadic_phantom_causal_AxisSynthesizer_AxisSynthesizer();
	_SL_synt._OM_install3a("axis",_SF_cn_monadic_phantom_causal_AxisThermal_NEUTRALIZE,_SF_cn_monadic_phantom_causal_AxisThermal_SYNTHESIZE);
	_SL_producer._OM_install1(_SL_synt);
}
function _SM_cn_monadic_phantom_sample_Linkage_linkOptional1(_SL_producer)
{
	var _SL_ax=new _SO_cn_monadic_phantom_render_AxisAnalyzer_AxisAnalyzer();
	var _SL_lHanda=_SL_producer._OM_executive1("lHand");
	_SL_ax._OM_bind1d(_SL_lHanda);
	_SL_producer._OM_enableTrapping1(_SL_ax);
	_SL_producer._OM_creative1(new _SO_cn_monadic_phantom_sample_HintAdaptor_HintAdaptor());
	_SL_producer._OM_creative1(new _SO_cn_monadic_phantom_sample_DeckAdaptor_DeckAdaptor());
	_SL_producer._OM_creative1(new _SO_cn_monadic_phantom_sample_PartAdaptor_PartAdaptor());
	_SL_producer._OM_creative1(new _SO_cn_monadic_phantom_sample_DragAdaptor_DragAdaptor());
	var _SL_speak=new _SO_cn_monadic_phantom_master_ExecFacility_ExecFacility1("speak");
	_SL_speak._OM_bind1e(_SM_cn_monadic_phantom_sample_Linkage_CL11);
	_SL_producer._OM_intrinsic1(_SL_speak);
	var _SL_freeze=new _SO_cn_monadic_phantom_master_ExecFacility_ExecFacility1("freeze");
	_SL_freeze._OM_bind1e(_SM_cn_monadic_phantom_sample_Linkage_CL13);
	_SL_producer._OM_intrinsic1(_SL_freeze);
	var _SL_sketch=new _SO_cn_monadic_phantom_master_ExecFacility_ExecFacility1("sketch");
	_SL_sketch._OM_bind1e(_SM_cn_monadic_phantom_sample_Linkage_CL14);
	_SL_producer._OM_intrinsic1(_SL_sketch);
	var _SL_tapeout=new _SO_cn_monadic_phantom_master_ExecFacility_ExecFacility1("tapeout");
	_SL_tapeout._OM_bind1e(_SM_cn_monadic_phantom_sample_Linkage_CL15);
	_SL_producer._OM_intrinsic1(_SL_tapeout);
}
function _SM_cn_monadic_phantom_sample_Linkage_linkOptional4Replay1(_SL_producer)
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.Linkage"+' setup static binder');

_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.Linkage"+' setup static initializer');

{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.Linkage"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.Loader"+' flush functions');

function _SM_cn_monadic_phantom_sample_Loader_timing1(_SL_xb)
{
	var _SL_tj=_SM_jazzy_lang_System_currentTimeMillis();
	if(_SL_xb!=null)
		_SM_cn_monadic_phantom_sample_Loader_output1(_SL_xb+(_SL_tj-_SV_cn_monadic_phantom_sample_Loader_timestamp)+"ms");
	_SV_cn_monadic_phantom_sample_Loader_timestamp=_SL_tj;
}
function _SM_cn_monadic_phantom_sample_Loader_init()
{
	if(!_SV_cn_monadic_phantom_sample_Loader_forged)
	{
		_SV_cn_monadic_phantom_sample_Loader_forged=true;
		_SV_cn_monadic_phantom_sample_Loader_gallery=new _SO_cn_monadic_phantom_assets_Gallery_Gallery();
		_SV_cn_monadic_phantom_sample_Loader_trappers=_SM_jazzy_lang_System_attain();
		_SV_cn_monadic_phantom_sample_Loader_data2d=_SM_jazzy_lang_System_attain();
		_SV_cn_monadic_phantom_sample_Loader_loaded=_SM_jazzy_lang_System_attain();
		_SV_cn_monadic_phantom_sample_Loader_templates=_SM_jazzy_lang_System_attain();
		_SV_cn_monadic_phantom_sample_Loader_timestamp=_SM_jazzy_lang_System_currentTimeMillis();
	}
}
function _SM_cn_monadic_phantom_sample_Loader_install1a(_SL_t)
{
	_SV_cn_monadic_phantom_sample_Loader_terminal=_SL_t;
}
function _SM_cn_monadic_phantom_sample_Loader_output1(_SL_t)
{
	if(_SV_cn_monadic_phantom_sample_Loader_terminal!=null)
		_SV_cn_monadic_phantom_sample_Loader_terminal._OM_println1(_SL_t);
}
function _SM_cn_monadic_phantom_sample_Loader_getBasedir()
{
	return _SV_cn_monadic_phantom_sample_Loader_basedir;
}
function _SM_cn_monadic_phantom_sample_Loader_getAsset1(_SL_idb)
{
	return _SV_cn_monadic_phantom_sample_Loader_gallery._OM_get1(_SL_idb);
}
function _SM_cn_monadic_phantom_sample_Loader_fetch1(_SL_idb)
{
	return _SM_cn_monadic_phantom_sample_Loader_spawn2(_SL_idb,_SL_idb);
}
function _SM_cn_monadic_phantom_sample_Loader_getTrapper1(_SL_idb)
{
	return _SV_cn_monadic_phantom_sample_Loader_trappers[_SL_idb];
}
function _SM_cn_monadic_phantom_sample_Loader_loadTemplate2(_SL_locator,_SL_idc)
{
	if(!(typeof _SV_cn_monadic_phantom_sample_Loader_templates[_SL_idc] != "undefined"))
	{
		var _SL_datad=_SV_cn_monadic_phantom_sample_Loader_basedir+_SL_locator;
		_SL_datad=_SL_datad+".txt";
		_SM_cn_monadic_phantom_sample_Loader_output1("overlay@"+_SL_datad+" is loading");
		var _SL_td=_SM_jazzy_lang___xhr_FETCH1(_SL_datad);
		_SV_cn_monadic_phantom_sample_Loader_templates[_SL_idc]=_SL_td.split("%%%");
		_SM_cn_monadic_phantom_sample_Loader_timing1(_SL_locator+" loaded in ");
	}
}
function _SM_cn_monadic_phantom_sample_Loader_loadTemplate22(_SL_locator,_SL_idc)
{
	if(!(typeof _SV_cn_monadic_phantom_sample_Loader_templates[_SL_idc] != "undefined"))
	{
		var _SL_datad=_SV_cn_monadic_phantom_sample_Loader_basedir+_SL_locator;
		if(_SV_jazzy_dom_core_Environment_MOZILLA)
			_SL_datad=_SL_datad+".moz";
		_SL_datad=_SL_datad+".txt";
		_SM_cn_monadic_phantom_sample_Loader_output1("overlay@"+_SL_datad+" is loading");
		var _SL_td=_SM_jazzy_lang___xhr_FETCH1(_SL_datad);
		_SV_cn_monadic_phantom_sample_Loader_templates[_SL_idc]=_SL_td.split("%%%");
		_SM_cn_monadic_phantom_sample_Loader_timing1(_SL_locator+" loaded in ");
	}
}
function _SM_cn_monadic_phantom_sample_Loader_require1(_SL_locator)
{
	if(!(typeof _SV_cn_monadic_phantom_sample_Loader_loaded[_SL_locator] != "undefined"))
	{
		_SV_cn_monadic_phantom_sample_Loader_loaded[_SL_locator]=true;
		_SM_cn_monadic_phantom_sample_Loader_output1(_SL_locator+" is loading...");
		_SM_jazzy_lang_System_loadScript1(_SM_jazzy_lang___xhr_FETCH1(_SV_cn_monadic_phantom_sample_Loader_basedir+_SL_locator+".txt"));
		_SM_cn_monadic_phantom_sample_Loader_timing1(_SL_locator+" loaded in ");
	}
}
function _SM_cn_monadic_phantom_sample_Loader_addImage7(_SL_idb,_SL_uria,_SL_x,_SL_y,_SL_z,_SL_wj,_SL_hk)
{
	_SV_cn_monadic_phantom_sample_Loader_gallery._OM_add2(_SL_idb,new _SO_cn_monadic_phantom_assets_Image_Image7(_SL_idb,_SV_cn_monadic_phantom_sample_Loader_basedir+_SL_uria,_SL_x,_SL_y,_SL_z,_SL_wj,_SL_hk));
}
function _SM_cn_monadic_phantom_sample_Loader_addTemplate8(_SL_idb,_SL_tid,_SL_tidx,_SL_xo,_SL_ym,_SL_zd,_SL_wf,_SL_hf)
{
	var _SL_tk=new _SO_cn_monadic_phantom_assets_Template_Template6(_SL_idb,_SL_xo,_SL_ym,0,_SL_wf,_SL_hf);
	_SL_tk._OM_bind1b((_SV_cn_monadic_phantom_sample_Loader_templates[_SL_tid])[_SL_tidx]);
	_SV_cn_monadic_phantom_sample_Loader_gallery._OM_add2("static_"+_SL_idb,_SL_tk);
}
function _SM_cn_monadic_phantom_sample_Loader_addPure6(_SL_idb,_SL_xa,_SL_yd,_SL_ze,_SL_wd,_SL_hd)
{
	_SV_cn_monadic_phantom_sample_Loader_gallery._OM_add2("dynamic_"+_SL_idb,new _SO_cn_monadic_phantom_assets_AxisSketch_AxisSketch5(_SL_idb,_SL_xa,_SL_yd,0,_SM_cn_monadic_phantom_sample_Loader_getScan1(_SL_idb)));
	_SV_cn_monadic_phantom_sample_Loader_trappers[_SL_idb]=new _SO_cn_monadic_phantom_assets_AxisTrapper_AxisTrapper5(_SL_idb,_SL_xa,_SL_yd,_SL_ze,_SM_cn_monadic_phantom_sample_Loader_getScan1(_SL_idb));
}
function _SM_cn_monadic_phantom_sample_Loader_spawn2(_SL_pid,_SL_aid)
{
	var _SL_prj=new _SO_cn_monadic_phantom_render_Projection_Projection1(_SL_pid);
	_SL_prj._OM_bind1f(_SM_cn_monadic_phantom_sample_Loader_getAsset1(_SL_aid));
	return _SL_prj;
}
function _SM_cn_monadic_phantom_sample_Loader_getScan1(_SL_idb)
{
	return _SV_cn_monadic_phantom_sample_Loader_data2d["scan_"+_SL_idb];
}
function _SM_cn_monadic_phantom_sample_Loader_getLine1(_SL_idb)
{
	return _SV_cn_monadic_phantom_sample_Loader_data2d["line_"+_SL_idb];
}
function _SM_cn_monadic_phantom_sample_Loader_createScan5(_SL_idb,_SL_wk,_SL_hl,_SL_xIndex,_SL_yIndex)
{
	_SV_cn_monadic_phantom_sample_Loader_data2d["scan_"+_SL_idb]=new _SO_jazzy_data_Scan2D_Scan2D4(_SL_wk,_SL_hl,_SL_xIndex,_SL_yIndex);
}
function _SM_cn_monadic_phantom_sample_Loader_startLine6(_SL_idb,_SL_xa,_SL_yd,_SL_ze,_SL_wd,_SL_hd)
{
	_SV_cn_monadic_phantom_sample_Loader_lining=new _SO_jazzy_data_Line2D_Line2D2(_SL_wd,_SL_hd);
	_SV_cn_monadic_phantom_sample_Loader_lining_id=_SL_idb;
}
function _SM_cn_monadic_phantom_sample_Loader_writeLine3(_SL_xb,_SL_ya,_SL_l)
{
	_SV_cn_monadic_phantom_sample_Loader_lining._OM_append3(_SL_xb,_SL_ya,_SL_l);
}
function _SM_cn_monadic_phantom_sample_Loader_closeLine()
{
	_SV_cn_monadic_phantom_sample_Loader_lining._OM_seal();
	_SV_cn_monadic_phantom_sample_Loader_data2d["line_"+_SV_cn_monadic_phantom_sample_Loader_lining_id]=_SV_cn_monadic_phantom_sample_Loader_lining;
	_SV_cn_monadic_phantom_sample_Loader_lining=null;
	_SV_cn_monadic_phantom_sample_Loader_lining_id="";
}
function _SM_cn_monadic_phantom_sample_Loader_update()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.Loader"+' setup static binder');

var _SV_cn_monadic_phantom_sample_Loader_forged=false;
var _SV_cn_monadic_phantom_sample_Loader_terminal=null;
var _SV_cn_monadic_phantom_sample_Loader_timestamp=null;
var _SV_cn_monadic_phantom_sample_Loader_gallery=null;
var _SV_cn_monadic_phantom_sample_Loader_basedir="assets/";
var _SV_cn_monadic_phantom_sample_Loader_templates=null;
var _SV_cn_monadic_phantom_sample_Loader_trappers=null;
var _SV_cn_monadic_phantom_sample_Loader_loaded=null;
var _SV_cn_monadic_phantom_sample_Loader_data2d=null;
var _SV_cn_monadic_phantom_sample_Loader_lining_id=null;
var _SV_cn_monadic_phantom_sample_Loader_lining=null;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.Loader"+' setup static initializer');

{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.Loader"+' setup funtions');

function _write_line(_SL_xb,_SL_ya,_SL_l)
{
	return _SM_cn_monadic_phantom_sample_Loader_writeLine3(_SL_xb,_SL_ya,_SL_l);
}
function _asset_init()
{
	return _SM_cn_monadic_phantom_sample_Loader_init();
}
function _close_line()
{
	return _SM_cn_monadic_phantom_sample_Loader_closeLine();
}
function _asset_get(_SL_idb)
{
	return _SM_cn_monadic_phantom_sample_Loader_getAsset1(_SL_idb);
}
function _start_line(_SL_idb,_SL_xa,_SL_yd,_SL_ze,_SL_wd,_SL_hd)
{
	return _SM_cn_monadic_phantom_sample_Loader_startLine6(_SL_idb,_SL_xa,_SL_yd,_SL_ze,_SL_wd,_SL_hd);
}
function _asset_temp(_SL_idb,_SL_tid,_SL_tidx,_SL_xo,_SL_ym,_SL_zd,_SL_wf,_SL_hf)
{
	return _SM_cn_monadic_phantom_sample_Loader_addTemplate8(_SL_idb,_SL_tid,_SL_tidx,_SL_xo,_SL_ym,_SL_zd,_SL_wf,_SL_hf);
}
function _asset_scan2d(_SL_idb,_SL_wk,_SL_hl,_SL_xIndex,_SL_yIndex)
{
	return _SM_cn_monadic_phantom_sample_Loader_createScan5(_SL_idb,_SL_wk,_SL_hl,_SL_xIndex,_SL_yIndex);
}
function _asset_require(_SL_locator)
{
	return _SM_cn_monadic_phantom_sample_Loader_require1(_SL_locator);
}
function _asset_pure(_SL_idb,_SL_xa,_SL_yd,_SL_ze,_SL_wd,_SL_hd)
{
	return _SM_cn_monadic_phantom_sample_Loader_addPure6(_SL_idb,_SL_xa,_SL_yd,_SL_ze,_SL_wd,_SL_hd);
}
function _asset_img(_SL_idb,_SL_uria,_SL_x,_SL_y,_SL_z,_SL_wj,_SL_hk)
{
	return _SM_cn_monadic_phantom_sample_Loader_addImage7(_SL_idb,_SL_uria,_SL_x,_SL_y,_SL_z,_SL_wj,_SL_hk);
}
_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.PartAdaptor"+' flush functions');

function _SO_cn_monadic_phantom_sample_PartAdaptor_PartAdaptor()
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_sample_PartAdaptor);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_sample_PartAdaptor_init);
	this._OV_cn_monadic_phantom_sample_PartAdaptor_highlight=new _SO_cn_monadic_phantom_causal_AxisThermal_AxisThermal1(3);
	this._OV_cn_monadic_phantom_sample_PartAdaptor_highlight._OM_bind1b("part");
	var _SL_self=this;
}
function _SM_cn_monadic_phantom_sample_PartAdaptor_adapt1(_SL_event)
{
	if((_SL_event._OV_cn_monadic_phantom_render_Trapped_type&_SF_jazzy_dom_event_Pointer_MOVING)!=0)
	{
		if(_SL_event._OV_cn_monadic_phantom_render_Trapped_source!=null&&_SL_event._OV_cn_monadic_phantom_render_Trapped_source._OM_query1("part")!=null)
		{
			var _SL_p=_SL_event._OV_cn_monadic_phantom_render_Trapped_source._OM_query1("part");
			if(this._OV_cn_monadic_phantom_sample_PartAdaptor_last==_SL_event._OV_cn_monadic_phantom_render_Trapped_source)
				return null;
			this._OV_cn_monadic_phantom_sample_PartAdaptor_last=_SL_event._OV_cn_monadic_phantom_render_Trapped_source;
			this._OV_cn_monadic_phantom_sample_PartAdaptor_highlight._OM_set2a(_SF_cn_monadic_phantom_sample_PartRadiator_INDEX_VIEW,_SF_cn_monadic_phantom_sample_PartRadiator_SHOW);
			this._OV_cn_monadic_phantom_sample_PartAdaptor_highlight._OM_set2a(_SF_cn_monadic_phantom_sample_PartRadiator_INDEX_HOST,0);
			if(_SM_jazzy_lang___string_startsWith2(_SL_p,"gun"))
			{
				this._OV_cn_monadic_phantom_sample_PartAdaptor_highlight._OM_set2a(_SF_cn_monadic_phantom_sample_PartRadiator_INDEX_PART,1);
				this._OV_cn_monadic_phantom_sample_PartAdaptor_highlight._OM_set2a(_SF_cn_monadic_phantom_sample_PartRadiator_INDEX_HOST,(this._OV_cn_monadic_phantom_sample_PartAdaptor_last._OM_parent()._OM_parent()._OM_query1("cowboy")-0));
			}
			else
				if(_SM_jazzy_lang___string_startsWith2(_SL_p,"head"))
				{
					this._OV_cn_monadic_phantom_sample_PartAdaptor_highlight._OM_set2a(_SF_cn_monadic_phantom_sample_PartRadiator_INDEX_PART,2);
					this._OV_cn_monadic_phantom_sample_PartAdaptor_highlight._OM_set2a(_SF_cn_monadic_phantom_sample_PartRadiator_INDEX_HOST,(this._OV_cn_monadic_phantom_sample_PartAdaptor_last._OM_parent()._OM_parent()._OM_query1("cowboy")-0));
				}
				else
				{
					this._OV_cn_monadic_phantom_sample_PartAdaptor_highlight._OM_set2a(_SF_cn_monadic_phantom_sample_PartRadiator_INDEX_PART,0);
					this._OV_cn_monadic_phantom_sample_PartAdaptor_highlight._OM_set2a(_SF_cn_monadic_phantom_sample_PartRadiator_INDEX_HOST,(this._OV_cn_monadic_phantom_sample_PartAdaptor_last._OM_parent()._OM_query1("cowboy")-0));
				}
			return this._OV_cn_monadic_phantom_sample_PartAdaptor_highlight;
		}
		if(this._OV_cn_monadic_phantom_sample_PartAdaptor_last!=null)
		{
			this._OV_cn_monadic_phantom_sample_PartAdaptor_last=null;
			this._OV_cn_monadic_phantom_sample_PartAdaptor_highlight._OM_set2a(_SF_cn_monadic_phantom_sample_PartRadiator_INDEX_VIEW,_SF_cn_monadic_phantom_sample_PartRadiator_HIDE);
			return this._OV_cn_monadic_phantom_sample_PartAdaptor_highlight;
		}
	}
	return null;
}
function _SM_cn_monadic_phantom_sample_PartAdaptor_yield1(_SL_analyzer)
{
	return null;
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.PartAdaptor"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.sample.PartAdaptor"),new Array("cn.monadic.phantom.render.TrapAdaptor"));
var _SC_cn_monadic_phantom_sample_PartAdaptor=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.PartAdaptor"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.PartAdaptor"+' setup object binder');

function _SS_cn_monadic_phantom_sample_PartAdaptor_bind(_SL_instance)
{
	_SL_instance._OM_adapt1=_SM_cn_monadic_phantom_sample_PartAdaptor_adapt1;
	_SL_instance._OM_cn_monadic_phantom_sample_PartAdaptor_adapt1=_SM_cn_monadic_phantom_sample_PartAdaptor_adapt1;
	_SL_instance._OM_yield1=_SM_cn_monadic_phantom_sample_PartAdaptor_yield1;
	_SL_instance._OM_cn_monadic_phantom_sample_PartAdaptor_yield1=_SM_cn_monadic_phantom_sample_PartAdaptor_yield1;
	_SL_instance._OV_cn_monadic_phantom_sample_PartAdaptor_highlight=null;
	_SL_instance._OV_cn_monadic_phantom_sample_PartAdaptor_last=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_sample_PartAdaptor_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.PartAdaptor"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.PartAdaptor"+' setup object initialize');

function _SS_cn_monadic_phantom_sample_PartAdaptor_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.PartAdaptor"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.PartRadiator"+' flush functions');

function _SO_cn_monadic_phantom_sample_PartRadiator_PartRadiator1(_SL_s)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_sample_PartRadiator);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_sample_PartRadiator_init);
	this._OV_cn_monadic_phantom_sample_PartRadiator_id=_SL_s;
}
function _SM_cn_monadic_phantom_sample_PartRadiator_identifier()
{
	return this._OV_cn_monadic_phantom_sample_PartRadiator_id;
}
function _SM_cn_monadic_phantom_sample_PartRadiator_assist1(_SL_s)
{
	this._OV_cn_monadic_phantom_sample_PartRadiator_root=_SL_s._OM_executive1("lPart");
}
function _SM_cn_monadic_phantom_sample_PartRadiator_highlight2(_SL_s,_SL_vd)
{
	_SL_s._OM_cascadeAt1(_SL_vd?50:0);
}
function _SM_cn_monadic_phantom_sample_PartRadiator_radiate1(_SL_t)
{
	if(this._OV_cn_monadic_phantom_sample_PartRadiator_root==null)
		return;
	var _SL_cowboy=this._OV_cn_monadic_phantom_sample_PartRadiator_root._OM_child1(_SL_t._OM_quantify1(_SF_cn_monadic_phantom_sample_PartRadiator_INDEX_HOST));
	var _SL_va;
	switch(_SL_t._OM_quantify1(_SF_cn_monadic_phantom_sample_PartRadiator_INDEX_VIEW))
	{
		case _SF_cn_monadic_phantom_sample_PartRadiator_DRAG:
			if(this._OV_cn_monadic_phantom_sample_PartRadiator_latest!=null)
			{
				this._OM_highlight2(this._OV_cn_monadic_phantom_sample_PartRadiator_latest,false);
				this._OV_cn_monadic_phantom_sample_PartRadiator_latest=null;
			}
			_SL_va=_SL_cowboy._OM_child1(_SL_t._OM_quantify1(_SF_cn_monadic_phantom_sample_PartRadiator_INDEX_PART));
			if(_SL_va!=null)
			{
				var _SL_parta=null;
				if(_SM_jazzy_lang_ClassLoader_RTTI2(_SL_va,"cn.monadic.phantom.render.Slides"))
				{
					_SM_cn_monadic_phantom_sample_Plugin_playback1(_SL_va._OM_query1("sfx"));
					var _SL_sd=_SL_va;
					var _SL_nc=_SL_sd._OM_measure1(_SF_cn_monadic_phantom_render_Slides_SLIDE);
					var _SL_Na=_SL_sd._OM_measure1(_SF_cn_monadic_phantom_render_Visual_CHILDREN);
					if(_SL_Na==5)
						_SL_sd._OM_slide1((_SL_nc+_SL_Na-1)%_SL_Na);
					else
						_SL_sd._OM_slide1((_SL_nc+1)%_SL_Na);
				}
			}
			break;
		case _SF_cn_monadic_phantom_sample_PartRadiator_HIDE:
			if(this._OV_cn_monadic_phantom_sample_PartRadiator_latest!=null)
			{
				this._OM_highlight2(this._OV_cn_monadic_phantom_sample_PartRadiator_latest,false);
				this._OV_cn_monadic_phantom_sample_PartRadiator_latest=null;
			}
			break;
		case _SF_cn_monadic_phantom_sample_PartRadiator_SHOW:
			var _SL_pj=_SL_t._OM_quantify1(_SF_cn_monadic_phantom_sample_PartRadiator_INDEX_PART);
			_SL_va=_SL_cowboy._OM_child1(_SL_pj);
			if(_SL_va!=null)
			{
				var _SL_partb=null;
				if(_SM_jazzy_lang_ClassLoader_RTTI2(_SL_va,"cn.monadic.phantom.render.Slides"))
				{
					var _SL_se=_SL_va._OM_measure1(_SF_cn_monadic_phantom_render_Slides_SLIDE);
					_SL_partb=_SL_va._OM_child1(_SL_se);
				}
				else
				{
					_SL_partb=_SL_va;
				}
				if(_SL_partb!=this._OV_cn_monadic_phantom_sample_PartRadiator_latest&&this._OV_cn_monadic_phantom_sample_PartRadiator_latest!=null)
				{
					this._OM_highlight2(this._OV_cn_monadic_phantom_sample_PartRadiator_latest,false);
				}
				this._OM_highlight2(_SL_partb,true);
				this._OV_cn_monadic_phantom_sample_PartRadiator_latest=_SL_partb;
			}
			break;
	}
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.PartRadiator"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.sample.PartRadiator"),new Array("cn.monadic.phantom.causal.Radiative","cn.monadic.phantom.master.Operative"));
var _SC_cn_monadic_phantom_sample_PartRadiator=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.PartRadiator"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.PartRadiator"+' setup object binder');

function _SS_cn_monadic_phantom_sample_PartRadiator_bind(_SL_instance)
{
	_SL_instance._OM_identifier=_SM_cn_monadic_phantom_sample_PartRadiator_identifier;
	_SL_instance._OM_cn_monadic_phantom_sample_PartRadiator_identifier=_SM_cn_monadic_phantom_sample_PartRadiator_identifier;
	_SL_instance._OM_assist1=_SM_cn_monadic_phantom_sample_PartRadiator_assist1;
	_SL_instance._OM_cn_monadic_phantom_sample_PartRadiator_assist1=_SM_cn_monadic_phantom_sample_PartRadiator_assist1;
	_SL_instance._OM_highlight2=_SM_cn_monadic_phantom_sample_PartRadiator_highlight2;
	_SL_instance._OM_cn_monadic_phantom_sample_PartRadiator_highlight2=_SM_cn_monadic_phantom_sample_PartRadiator_highlight2;
	_SL_instance._OM_radiate1=_SM_cn_monadic_phantom_sample_PartRadiator_radiate1;
	_SL_instance._OM_cn_monadic_phantom_sample_PartRadiator_radiate1=_SM_cn_monadic_phantom_sample_PartRadiator_radiate1;
	_SL_instance._OV_cn_monadic_phantom_sample_PartRadiator_id=null;
	_SL_instance._OV_cn_monadic_phantom_sample_PartRadiator_root=null;
	_SL_instance._OV_cn_monadic_phantom_sample_PartRadiator_latest=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_sample_PartRadiator_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.PartRadiator"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.PartRadiator"+' setup object initialize');

function _SS_cn_monadic_phantom_sample_PartRadiator_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.PartRadiator"+' setup funtions');

var _SF_cn_monadic_phantom_sample_PartRadiator_SHOW=1;
var _SF_cn_monadic_phantom_sample_PartRadiator_HIDE=0;
var _SF_cn_monadic_phantom_sample_PartRadiator_DRAG=2;
var _SF_cn_monadic_phantom_sample_PartRadiator_INDEX_VIEW=1;
var _SF_cn_monadic_phantom_sample_PartRadiator_INDEX_PART=2;
var _SF_cn_monadic_phantom_sample_PartRadiator_INDEX_HOST=3;
_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.Plugin"+' flush functions');

function _SM_cn_monadic_phantom_sample_Plugin_playback1(_SL_s)
{
	if(_SV_jazzy_lang_System_COMPATIBLE_MSIE)
	{
		if(_SV_cn_monadic_phantom_sample_Plugin_sound==null)
			_SV_cn_monadic_phantom_sample_Plugin_sound=_SC_jazzy_dom_core_Element._OM_resolve1("snd");
		if(_SV_cn_monadic_phantom_sample_Plugin_sound!=null)
			_SM_jazzy_lang_System_reflect3(_SV_cn_monadic_phantom_sample_Plugin_sound._OM_getPeer(),"src",_SL_s);
	}
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.Plugin"+' setup static binder');

var _SV_cn_monadic_phantom_sample_Plugin_sound=null;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.Plugin"+' setup static initializer');

{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.Plugin"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.Test"+' flush functions');

function _SM_cn_monadic_phantom_sample_Test_CL0e(_SL_vd,_SL_p)
{
	var _SL_vxb=_SL_vd;
	_SM_cn_monadic_phantom_sample_Loader_output1(_SL_p+": "+_SL_vxb._OM_toString());
}
function _SM_cn_monadic_phantom_sample_Test_CL1c(_SL_cid)
{
	var _SL_id=_SL_cid+"L";
	var _SL_xc=_SM_cn_monadic_phantom_sample_Test_bundle23(_SL_id,"dynamic_mask_"+_SL_id,1000);
	_SL_xc._OM_mount1(_SM_cn_monadic_phantom_sample_Loader_getTrapper1("mask_"+_SL_id));
	_SL_xc._OM_shade1(true);
	_SL_xc._OM_record2("part",_SL_cid);
	return _SL_xc;
}
function _SM_cn_monadic_phantom_sample_Test_CL2d(_SL_cid)
{
	var _SL_id=_SL_cid+"R";
	var _SL_xc=_SM_cn_monadic_phantom_sample_Test_bundle23(_SL_id,"dynamic_mask_"+_SL_id,1000);
	_SL_xc._OM_mount1(_SM_cn_monadic_phantom_sample_Loader_getTrapper1("mask_"+_SL_id));
	_SL_xc._OM_shade1(true);
	_SL_xc._OM_record2("part",_SL_cid);
	return _SL_xc;
}
function _SM_cn_monadic_phantom_sample_Test_main()
{
	_SM_cn_monadic_phantom_sample_Loader_init();
	_SM_cn_monadic_phantom_sample_Loader_require1(_demo_loader);
}
function _SM_cn_monadic_phantom_sample_Test_initialize1(_SL_typea)
{
	var _SL_viewport=_SC_jazzy_dom_core_Element._OM_resolve1("Canvas");
	if(_SL_viewport==null)
	{
		window.alert("missing viewport");
		return;
	}
	if(_SL_typea!=1)
	{
		_SV_cn_monadic_phantom_sample_Test_terminal=new _SO_jazzy_util_DivTerminal_DivTerminal6(_SC_jazzy_dom_core_Element._OM_resolve1("Output"),0,0,480,640,"border: 1px solid black;z-Index: 90;padding: 4px 4px 4px 4px;background-color: #AAAAAA; overflow: auto;");
		_SV_cn_monadic_phantom_sample_Test_terminal._OM_println1(_SV_jazzy_lang_System_diagnostics);
		_SM_cn_monadic_phantom_sample_Loader_install1a(_SV_cn_monadic_phantom_sample_Test_terminal);
		_SM_cn_monadic_phantom_sample_Loader_timing1("bootstrap = ");
		_SM_cn_monadic_phantom_sample_Loader_require1("opt/console");
	}
	_SM_cn_monadic_phantom_sample_Loader_require1("bang/scan2d");
	_SM_cn_monadic_phantom_sample_Loader_require1("bang/assets");
	_SM_cn_monadic_phantom_sample_Test_linkAsset();
	var _SL_va=new _SO_cn_monadic_phantom_render_Visualization_Visualization3("carddeck",1000,640);
	_SV_cn_monadic_phantom_sample_Test_producer=new _SO_cn_monadic_phantom_master_AxisScenario_AxisScenario1(_SL_va);
	_SV_cn_monadic_phantom_sample_Test_facade=_SL_va;
	var _SL_lDeckb=_SM_cn_monadic_phantom_sample_Test_buildDeck();
	_SV_cn_monadic_phantom_sample_Test_base=_SM_cn_monadic_phantom_sample_Test_linkLayers1(_SL_lDeckb);
	_SV_cn_monadic_phantom_sample_Test_producer._OM_bind1g(_SV_cn_monadic_phantom_sample_Test_base);
	_SV_cn_monadic_phantom_sample_Test_producer._OM_assign2("lHint",_SV_cn_monadic_phantom_sample_Test_base._OM_child1(0)._OM_child1(1));
	_SV_cn_monadic_phantom_sample_Test_producer._OM_assign2("lDemo",_SV_cn_monadic_phantom_sample_Test_base._OM_child1(0)._OM_child1(2));
	_SV_cn_monadic_phantom_sample_Test_producer._OM_assign2("lHand",_SV_cn_monadic_phantom_sample_Test_base._OM_child1(0)._OM_child1(0));
	_SV_cn_monadic_phantom_sample_Test_producer._OM_assign2("lSign",_SV_cn_monadic_phantom_sample_Test_base._OM_child1(1));
	_SV_cn_monadic_phantom_sample_Test_producer._OM_assign2("lPart",_SV_cn_monadic_phantom_sample_Test_base._OM_child1(2));
	_SV_cn_monadic_phantom_sample_Test_producer._OM_assign2("lDeck",_SL_lDeckb);
	_SM_cn_monadic_phantom_sample_Linkage_linkDirective1(_SV_cn_monadic_phantom_sample_Test_producer);
	_SL_va._OM_attach1(_SL_viewport);
	_SL_va._OM_render1(true);
	_SL_va._OM_element()._OM_setZIndex1(3000);
	_SM_cn_monadic_phantom_sample_Linkage_linkExtension1(_SV_cn_monadic_phantom_sample_Test_producer);
	if(_SL_typea==0)
	{
		_SM_cn_monadic_phantom_sample_Linkage_linkOptional1(_SV_cn_monadic_phantom_sample_Test_producer);
		_SV_cn_monadic_phantom_sample_Test_producer._OM_enableVerifying();
	}
	else
		if(_SL_typea==1)
		{
			_SM_cn_monadic_phantom_sample_Linkage_linkOptional1(_SV_cn_monadic_phantom_sample_Test_producer);
			_SV_cn_monadic_phantom_sample_Test_producer._OM_enableRecording();
			_SV_cn_monadic_phantom_sample_Test_taper=_SV_cn_monadic_phantom_sample_Test_producer._OM_executive1("$recorder");
		}
		else
			if(_SL_typea==2)
			{
				_SM_cn_monadic_phantom_sample_Linkage_linkOptional4Replay1(_SV_cn_monadic_phantom_sample_Test_producer);
				_SV_cn_monadic_phantom_sample_Test_producer._OM_enableReplaying();
				var _SL_player=_SV_cn_monadic_phantom_sample_Test_producer._OM_executive1("$player");
				var _SL_xp=_SM_jazzy_dom_core_JSO_window_readClipboard();
				if(_SL_xp==null||(_SL_xp).indexOf("%%axis|trap")<0)
				{
					_SL_xp=_SM_jazzy_lang___xhr_FETCH1("assets/demo/tape.txt");
				}
				_SL_player._OM_immit1(_SL_xp);
			}
	_SV_cn_monadic_phantom_sample_Test_producer._OM_prepare();
	_SV_cn_monadic_phantom_sample_Test_last_update=_SM_jazzy_lang_System_currentTimeMillis();
	setTimeout(function(){_SM_cn_monadic_phantom_sample_Test_update_debug()}.bind(this));
	_SV_cn_monadic_phantom_sample_Exported_producer=_SV_cn_monadic_phantom_sample_Test_producer;
}
function _SM_cn_monadic_phantom_sample_Test_vis_walker()
{
	return _SM_cn_monadic_phantom_sample_Test_CL0e;
}
function _SM_cn_monadic_phantom_sample_Test_update_debug()
{
	var _SL_timestampb=_SM_jazzy_lang_System_currentTimeMillis();
	_SV_cn_monadic_phantom_sample_Test_producer._OM_update();
	var _SL_t2=_SM_jazzy_lang_System_currentTimeMillis();
	var _SL_l1=_SL_timestampb-_SV_cn_monadic_phantom_sample_Test_last_update;
	var _SL_l2=_SL_t2-_SL_timestampb;
	window.status=(""+_SL_l1+","+_SL_l2);
	if(_SL_l1>300||_SL_l2>250)
		_SM_cn_monadic_phantom_sample_Loader_output1("Latency = "+_SL_l1+","+_SL_l2);
	_SV_cn_monadic_phantom_sample_Test_last_update=_SL_t2;
	setTimeout(function(){_SM_cn_monadic_phantom_sample_Test_update_debug()}.bind(this),50);
}
function _SM_cn_monadic_phantom_sample_Test_update()
{
	_SV_cn_monadic_phantom_sample_Test_producer._OM_update();
	setTimeout(function(){_SM_cn_monadic_phantom_sample_Test_update()}.bind(this),50);
}
function _SM_cn_monadic_phantom_sample_Test_spawnCard2(_SL_facea,_SL_color)
{
	var _SL_face0=new _SO_cn_monadic_phantom_assets_Image_Image7("action","assets/card/face0.png",0,0,0,150,200);
	var _SL_face1=new _SO_cn_monadic_phantom_assets_Image_Image7("equip","assets/card/face1.png",0,0,0,150,200);
	var _SL_sd=new _SO_cn_monadic_phantom_render_Slides_Slides1("face");
	var _SL_p0=new _SO_cn_monadic_phantom_render_Projection_Projection1("action");
	_SL_p0._OM_bind2b(_SL_face0,null);
	var _SL_p1=new _SO_cn_monadic_phantom_render_Projection_Projection1("equip");
	_SL_p1._OM_bind2b(_SL_face1,null);
	_SL_sd._OM_bind1h(_SM_jazzy_lang_System_initArray2("cn.monadic.phantom.render.Visual",new Array(_SL_p0,_SL_p1,null)));
	_SL_sd._OM_slide1(_SL_facea);
	var _SL_anim=new _SO_cn_monadic_phantom_render_Animation_Animation1("color");
	_SL_anim._OM_bind3("assets/card/color.png",25,25);
	_SL_anim._OM_shift1(_SL_color);
	_SL_anim._OM_mount1(new _SO_cn_monadic_phantom_assets_ClipTrapper_ClipTrapper6("rect",0,0,0,25,25));
	var _SL_tk=new _SO_cn_monadic_phantom_assets_Template_Template6("rank",0,0,0,20,20);
	_SL_tk._OM_bind1b("<div style=\"width: 24px;height: 20px;%%\">10</div>");
	var _SL_p2=new _SO_cn_monadic_phantom_render_Projection_Projection1("rank");
	_SL_p2._OM_bind2b(_SL_tk,{rule: 'font-family: Arial Black; font-size: 16px; color: red;text-align: center;'});
	_SL_p2._OM_mount1(new _SO_cn_monadic_phantom_assets_ClipTrapper_ClipTrapper6("rect",0,0,0,24,20));
	var _SL_t2a=new _SO_cn_monadic_phantom_assets_Template_Template6("rank",0,0,0,100,30);
	if(_SL_facea==0)
		_SL_t2a._OM_bind1b("<div style=\"width: 100px;height: 30px;%%\">Bang!</div>");
	else
		_SL_t2a._OM_bind1b("<div style=\"width: 100px;height: 30px;%%\">Gun</div>");
	var _SL_p3=new _SO_cn_monadic_phantom_render_Projection_Projection1("rank");
	_SL_p3._OM_bind2b(_SL_t2a,{rule: 'font-family: Segoe Script, Tahoma; font-size: 25px; color: black;text-align: left;'});
	_SL_p2._OM_record2("hint","Value, not used in this game");
	_SL_anim._OM_record2("hint","Coloring, not used in this game.");
	var _SL_cardb=new _SO_cn_monadic_phantom_sample_GameCard_GameCard1("card");
	_SL_cardb._OM_bind4(_SL_sd,_SL_anim,_SL_p2,_SL_p3);
	var _SL_layout=new _SO_cn_monadic_phantom_render_AxisLayout_AxisLayout1(4);
	_SL_layout._OM_override5(1,0,8,32,10);
	_SL_layout._OM_override5(2,0,8,8,10);
	_SL_layout._OM_override5(3,0,40,6,10);
	_SL_cardb._OM_setLayout1(_SL_layout);
	_SL_cardb._OM_mount1(new _SO_cn_monadic_phantom_assets_ClipTrapper_ClipTrapper6("rect",0,0,0,150,200));
	if(_SL_facea==0)
	{
		_SL_cardb._OM_record2("effect","head");
		_SL_cardb._OM_record2("hint","Attacking card, drag it to head");
	}
	else
	{
		_SL_cardb._OM_record2("effect","gun");
		_SL_cardb._OM_record2("hint","Equipment card, drag it to hand");
	}
	_SL_cardb._OM_record2("hint-x","-5");
	_SL_cardb._OM_record2("hint-y","-7");
	return _SL_cardb;
}
function _SM_cn_monadic_phantom_sample_Test_bundle23(_SL_idb,_SL_asset_mask,_SL_zf)
{
	var _SL_bundled=new _SO_cn_monadic_phantom_render_Layer_Layer1(_SL_idb);
	var _SL_overmask=new _SO_cn_monadic_phantom_render_Projection_Projection1("overmask");
	var _SL_scripta="({rule: 'background: url("+_SM_cn_monadic_phantom_sample_Loader_getBasedir()+"bang/line.png) no-repeat; ' })";
	_SL_overmask._OM_bind2b(_SM_cn_monadic_phantom_sample_Loader_getAsset1(_SL_asset_mask),_SM_jazzy_lang_System_evaluate1(_SL_scripta));
	var _SL_baseline=_SM_cn_monadic_phantom_sample_Loader_spawn2("baseline",_SL_idb);
	_SL_baseline._OM_cascade1(_SL_overmask);
	if(_SM_jazzy_lang___string_startsWith2((_SL_idb),"gun"))
	{
		_SL_baseline._OM_record2("hint","Weapon, id = "+_SL_idb);
		_SL_baseline._OM_record2("hint-y","120");
		_SL_baseline._OM_record2("hint-x","160");
	}
	return _SL_baseline;
}
function _SM_cn_monadic_phantom_sample_Test_spawnCowboyL1(_SL_name)
{
	return _SM_cn_monadic_phantom_sample_Test_spawnCowboy2(_SM_cn_monadic_phantom_sample_Test_CL1c,_SL_name);
}
function _SM_cn_monadic_phantom_sample_Test_spawnCowboyR1(_SL_name)
{
	return _SM_cn_monadic_phantom_sample_Test_spawnCowboy2(_SM_cn_monadic_phantom_sample_Test_CL2d,_SL_name);
}
function _SM_cn_monadic_phantom_sample_Test_spawnCowboy2(_SL_partc,_SL_namea)
{
	_SM_cn_monadic_phantom_sample_Loader_timing1(null);
	var _SL_body=_SL_partc("body");
	var _SL_gun=new _SO_cn_monadic_phantom_render_Slides_Slides1("gun");
	_SL_gun._OM_record2("sfx","assets/clip/reload.wav");
	_SL_gun._OM_bind1h(_SM_jazzy_lang_System_initArray2("cn.monadic.phantom.render.Visual",new Array(_SL_partc("gun_0"),_SL_partc("gun_1"),_SL_partc("gun_2"),_SL_partc("gun_3"),_SL_partc("gun_4"),_SL_partc("gun_5"),null)));
	_SL_gun._OM_slide1(1);
	var _SL_head=new _SO_cn_monadic_phantom_render_Slides_Slides1("head");
	_SL_head._OM_bind1h(_SM_jazzy_lang_System_initArray2("cn.monadic.phantom.render.Visual",new Array(_SL_partc("head_1"),_SL_partc("head_2"),_SL_partc("head_3"),_SL_partc("head_4"),_SL_partc("head_5"),null)));
	_SL_head._OM_record2("sfx","assets/clip/attack.wav");
	_SL_head._OM_slide1(4);
	var _SL_cowboya=new _SO_cn_monadic_phantom_render_Layer_Layer1(_SL_namea);
	_SL_cowboya._OM_bind1h(_SM_jazzy_lang_System_initArray2("cn.monadic.phantom.render.Visual",new Array(_SL_body,_SL_gun,_SL_head,null)));
	var _SL_layouta=new _SO_cn_monadic_phantom_render_AxisLayout_AxisLayout1(3);
	_SL_layouta._OM_override5(0,0,0,0,100);
	_SL_layouta._OM_override5(1,0,0,0,200);
	_SL_layouta._OM_override5(2,0,0,0,300);
	_SL_cowboya._OM_setLayout1(_SL_layouta);
	_SL_gun._OM_clipChildren();
	_SL_head._OM_clipChildren();
	_SL_cowboya._OM_clipChildren();
	_SM_cn_monadic_phantom_sample_Loader_timing1("spawn::assembled = ");
	return _SL_cowboya;
}
function _SM_cn_monadic_phantom_sample_Test_buildDeck()
{
	var _SL_lDeckc=new _SO_cn_monadic_phantom_render_Layer_Layer1("sample");
	_SL_lDeckc._OM_setLayout1(new _SO_cn_monadic_phantom_sample_DeckLayout_DeckLayout());
	_SL_lDeckc._OM_bind1h(_SM_jazzy_lang_System_initArray2("cn.monadic.phantom.render.Visual",new Array(_SM_cn_monadic_phantom_sample_Test_spawnCard2(1,2),_SM_cn_monadic_phantom_sample_Test_spawnCard2(0,3),_SM_cn_monadic_phantom_sample_Test_spawnCard2(0,0),_SM_cn_monadic_phantom_sample_Test_spawnCard2(1,1),_SM_cn_monadic_phantom_sample_Test_spawnCard2(1,2),_SM_cn_monadic_phantom_sample_Test_spawnCard2(0,3),_SM_cn_monadic_phantom_sample_Test_spawnCard2(0,0),_SM_cn_monadic_phantom_sample_Test_spawnCard2(1,1),null)));
	_SL_lDeckc._OM_bound2(1000,300);
	return _SL_lDeckc;
}
function _SM_cn_monadic_phantom_sample_Test_linkLayers1(_SL_lDeckd)
{
	var _SL_node_1=_SM_cn_monadic_phantom_sample_Loader_spawn2("pointer-normal","pointer-normal");
	var _SL_node_2=_SM_cn_monadic_phantom_sample_Loader_spawn2("pointer-dragon","pointer-dragon");
	var _SL_node_3=_SM_cn_monadic_phantom_sample_Loader_spawn2("pointer-dragoff","pointer-dragoff");
	var _SL_node_4=new _SO_cn_monadic_phantom_render_Slides_Slides1("cursor");
	_SL_node_4._OM_bind1h(_SM_jazzy_lang_System_initArray2("cn.monadic.phantom.render.Visual",new Array(_SL_node_1,_SL_node_2,_SL_node_3,null)));
	_SL_node_4._OM_slide1(0);
	var _SL_node_5=_SM_cn_monadic_phantom_sample_Loader_spawn2("static_hint-text","static_hint-text");
	var _SL_node_6=_SM_cn_monadic_phantom_sample_Loader_spawn2("hint-dialog","hint-dialog");
	_SL_node_6._OM_cascade1(_SL_node_5);
	_SL_node_6._OM_cascadeAt1(10);
	var _SL_node_7=_SM_cn_monadic_phantom_sample_Loader_spawn2("static_demo-text","static_demo-text");
	var _SL_node_8=_SM_cn_monadic_phantom_sample_Loader_spawn2("demo-dialog","demo-dialog");
	_SL_node_8._OM_cascade1(_SL_node_7);
	_SL_node_8._OM_cascadeAt1(10);
	var _SL_node_9=new _SO_cn_monadic_phantom_render_Layer_Layer1("system");
	_SL_node_9._OM_bind1h(_SM_jazzy_lang_System_initArray2("cn.monadic.phantom.render.Visual",new Array(_SL_node_4,_SL_node_6,_SL_node_8,null)));
	_SL_node_9._OM_shade1(true);
	var _SL_node_10=new _SO_cn_monadic_phantom_render_AxisLayout_AxisLayout1(3);
	_SL_node_10._OM_override2(0,-1);
	_SL_node_10._OM_override2(1,1);
	_SL_node_10._OM_override2(2,1);
	_SL_node_9._OM_setLayout1(_SL_node_10);
	var _SL_node_11=_SM_cn_monadic_phantom_sample_Loader_spawn2("sign1","sign1");
	_SL_node_11._OM_record2("flex","0");
	_SL_node_11._OM_locate3(700,100,7001);
	_SL_node_11._OM_mount1(_SM_cn_monadic_phantom_sample_Loader_getTrapper1("mask_sign1"));
	var _SL_node_12=_SM_cn_monadic_phantom_sample_Loader_spawn2("sign2","sign2");
	_SL_node_12._OM_record2("flex","1");
	_SL_node_12._OM_locate3(700,300,7001);
	_SL_node_12._OM_mount1(_SM_cn_monadic_phantom_sample_Loader_getTrapper1("mask_sign2"));
	var _SL_node_13=new _SO_cn_monadic_phantom_render_Layer_Layer1("gadget");
	_SL_node_13._OM_bind1h(_SM_jazzy_lang_System_initArray2("cn.monadic.phantom.render.Visual",new Array(_SL_node_11,_SL_node_12,null)));
	var _SL_node_14=new _SO_cn_monadic_phantom_render_AxisLayout_AxisLayout1(2);
	_SL_node_14._OM_override2(0,-1);
	_SL_node_14._OM_override2(1,-1);
	_SL_node_13._OM_setLayout1(_SL_node_14);
	var _SL_node_15=_SM_cn_monadic_phantom_sample_Test_spawnCowboyL1("cowboy0");
	_SL_node_15._OM_record2("cowboy","0");
	var _SL_node_16=_SM_cn_monadic_phantom_sample_Test_spawnCowboyR1("cowboy1");
	_SL_node_16._OM_record2("cowboy","1");
	var _SL_node_17=new _SO_cn_monadic_phantom_render_Layer_Layer1("cowboys");
	_SL_node_17._OM_bind1h(_SM_jazzy_lang_System_initArray2("cn.monadic.phantom.render.Visual",new Array(_SL_node_15,_SL_node_16,null)));
	var _SL_node_18=new _SO_cn_monadic_phantom_render_AxisLayout_AxisLayout1(2);
	_SL_node_18._OM_override5(0,0,100,20,500);
	_SL_node_18._OM_override5(1,0,400,20,500);
	_SL_node_17._OM_setLayout1(_SL_node_18);
	var _SL_node_19=new _SO_cn_monadic_phantom_render_Layer_Layer1("game");
	_SL_node_19._OM_bind1h(_SM_jazzy_lang_System_initArray2("cn.monadic.phantom.render.Visual",new Array(_SL_node_9,_SL_node_13,_SL_node_17,_SL_lDeckd,null)));
	var _SL_node_20=new _SO_cn_monadic_phantom_render_AxisLayout_AxisLayout1(4);
	_SL_node_20._OM_override2(0,-1);
	_SL_node_20._OM_override2(1,-1);
	_SL_node_20._OM_override5(2,0,1,2,3);
	_SL_node_20._OM_override5(3,0,50,380,1000);
	_SL_node_19._OM_setLayout1(_SL_node_20);
	return _SL_node_19;
}
function _SM_cn_monadic_phantom_sample_Test_linkAsset()
{
	_SM_cn_monadic_phantom_sample_Loader_loadTemplate2("base/html","base");
	_SM_cn_monadic_phantom_sample_Loader_addTemplate8("hint-text","base",0,22,30,0,140,60);
	_SM_cn_monadic_phantom_sample_Loader_addTemplate8("demo-text","base",1,130,10,0,400,100);
	_SM_cn_monadic_phantom_sample_Loader_addImage7("pointer-normal","base/bullet1.png",0,0,0,24,24);
	_SM_cn_monadic_phantom_sample_Loader_addImage7("pointer-dragon","base/bullet2.png",0,0,0,24,24);
	_SM_cn_monadic_phantom_sample_Loader_addImage7("pointer-dragoff","base/bullet3.png",0,0,0,24,24);
	_SM_cn_monadic_phantom_sample_Loader_addImage7("hint-dialog","base/hint.png",0,0,0,200,120);
	_SM_cn_monadic_phantom_sample_Loader_addImage7("demo-dialog","base/explain.png",0,0,0,500,125);
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.Test"+' setup static binder');

var _SV_cn_monadic_phantom_sample_Test_terminal=null;
var _SV_cn_monadic_phantom_sample_Test_facade=null;
var _SV_cn_monadic_phantom_sample_Test_base=null;
var _SV_cn_monadic_phantom_sample_Test_taper=null;
var _SV_cn_monadic_phantom_sample_Test_producer=null;
var _SV_cn_monadic_phantom_sample_Test_last_update=null;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.Test"+' setup static initializer');

{
	{
		_SM_jazzy_lang_System_schedule1(function(){_SM_cn_monadic_phantom_sample_Test_main()}.bind(this));
	}
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.sample.Test"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.AxisSketch"+' flush functions');

function _SO_cn_monadic_phantom_assets_AxisSketch_AxisSketch5(_SL_idb,_SL_xa,_SL_yd,_SL_ze,_SL_lc)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_assets_AxisSketch);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_assets_AxisSketch_init);
	this._OV_cn_monadic_phantom_assets_AxisSketch_identifier=_SL_idb;
	this._OV_cn_monadic_phantom_assets_AxisSketch_offsetX=_SL_xa;
	this._OV_cn_monadic_phantom_assets_AxisSketch_offsetY=_SL_yd;
	this._OV_cn_monadic_phantom_assets_AxisSketch_offsetZ=_SL_ze;
	this._OV_cn_monadic_phantom_assets_AxisSketch_collage=_SL_lc;
	this._OV_cn_monadic_phantom_assets_AxisSketch_width=_SL_lc._OM_getWidth();
	this._OV_cn_monadic_phantom_assets_AxisSketch_height=_SL_lc._OM_getHeight();
}
function _SM_cn_monadic_phantom_assets_AxisSketch_seal()
{
}
function _SM_cn_monadic_phantom_assets_AxisSketch_identifier()
{
	return this._OV_cn_monadic_phantom_assets_AxisSketch_identifier;
}
function _SM_cn_monadic_phantom_assets_AxisSketch_getOffsetX()
{
	return this._OV_cn_monadic_phantom_assets_AxisSketch_offsetX;
}
function _SM_cn_monadic_phantom_assets_AxisSketch_getOffsetY()
{
	return this._OV_cn_monadic_phantom_assets_AxisSketch_offsetY;
}
function _SM_cn_monadic_phantom_assets_AxisSketch_getOffsetZ()
{
	return this._OV_cn_monadic_phantom_assets_AxisSketch_offsetZ;
}
function _SM_cn_monadic_phantom_assets_AxisSketch_getWidth()
{
	return this._OV_cn_monadic_phantom_assets_AxisSketch_width;
}
function _SM_cn_monadic_phantom_assets_AxisSketch_getHeight()
{
	return this._OV_cn_monadic_phantom_assets_AxisSketch_height;
}
function _SM_cn_monadic_phantom_assets_AxisSketch_attach2(_SL_host,_SL_paramsa)
{
	var _SL_stylec=_SV_jazzy_dom_core_Style_ABS;
	if(_SL_paramsa!=null&&(typeof _SL_paramsa["style"] != "undefined"))
	{
		_SL_stylec=_SL_paramsa["style"];
	}
	var _SL_rule=null;
	if(_SL_paramsa!=null&&(typeof _SL_paramsa["rule"] != "undefined"))
	{
		_SL_rule=_SL_paramsa["rule"];
	}
	var _SL_nodeb=_SL_host._OM_derive3(null,"div",_SL_stylec+_SM_jazzy_dom_core_Style_scale2(this._OV_cn_monadic_phantom_assets_AxisSketch_width,this._OV_cn_monadic_phantom_assets_AxisSketch_height)+_SV_jazzy_dom_core_Style_HIDE);
	var _SL_ca=new _SO_jazzy_dom_canvas_Canvas_Canvas1(_SL_nodeb);
	_SL_ca._OM_allowDummyDiv1(_SL_rule);
	_SL_ca._OM_setColor1("none");
	this._OV_cn_monadic_phantom_assets_AxisSketch_collage._OM_rasterize1(function (_SL_x1g,_SL_x2e,_SL_yh)
	{
		_SL_ca._OM_drawLine4(_SL_x1g,_SL_yh,_SL_x2e-1,_SL_yh);
	});
	_SL_ca._OM_flush();
	return _SL_nodeb;
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.AxisSketch"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.assets.AxisSketch"),new Array("cn.monadic.phantom.assets.HtmlAsset"));
var _SC_cn_monadic_phantom_assets_AxisSketch=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.AxisSketch"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.AxisSketch"+' setup object binder');

function _SS_cn_monadic_phantom_assets_AxisSketch_bind(_SL_instance)
{
	_SL_instance._OM_seal=_SM_cn_monadic_phantom_assets_AxisSketch_seal;
	_SL_instance._OM_cn_monadic_phantom_assets_AxisSketch_seal=_SM_cn_monadic_phantom_assets_AxisSketch_seal;
	_SL_instance._OM_identifier=_SM_cn_monadic_phantom_assets_AxisSketch_identifier;
	_SL_instance._OM_cn_monadic_phantom_assets_AxisSketch_identifier=_SM_cn_monadic_phantom_assets_AxisSketch_identifier;
	_SL_instance._OM_getOffsetX=_SM_cn_monadic_phantom_assets_AxisSketch_getOffsetX;
	_SL_instance._OM_cn_monadic_phantom_assets_AxisSketch_getOffsetX=_SM_cn_monadic_phantom_assets_AxisSketch_getOffsetX;
	_SL_instance._OM_getOffsetY=_SM_cn_monadic_phantom_assets_AxisSketch_getOffsetY;
	_SL_instance._OM_cn_monadic_phantom_assets_AxisSketch_getOffsetY=_SM_cn_monadic_phantom_assets_AxisSketch_getOffsetY;
	_SL_instance._OM_getOffsetZ=_SM_cn_monadic_phantom_assets_AxisSketch_getOffsetZ;
	_SL_instance._OM_cn_monadic_phantom_assets_AxisSketch_getOffsetZ=_SM_cn_monadic_phantom_assets_AxisSketch_getOffsetZ;
	_SL_instance._OM_getWidth=_SM_cn_monadic_phantom_assets_AxisSketch_getWidth;
	_SL_instance._OM_cn_monadic_phantom_assets_AxisSketch_getWidth=_SM_cn_monadic_phantom_assets_AxisSketch_getWidth;
	_SL_instance._OM_getHeight=_SM_cn_monadic_phantom_assets_AxisSketch_getHeight;
	_SL_instance._OM_cn_monadic_phantom_assets_AxisSketch_getHeight=_SM_cn_monadic_phantom_assets_AxisSketch_getHeight;
	_SL_instance._OM_attach2=_SM_cn_monadic_phantom_assets_AxisSketch_attach2;
	_SL_instance._OM_cn_monadic_phantom_assets_AxisSketch_attach2=_SM_cn_monadic_phantom_assets_AxisSketch_attach2;
	_SL_instance._OV_cn_monadic_phantom_assets_AxisSketch_offsetX=0;
	_SL_instance._OV_cn_monadic_phantom_assets_AxisSketch_offsetY=0;
	_SL_instance._OV_cn_monadic_phantom_assets_AxisSketch_offsetZ=0;
	_SL_instance._OV_cn_monadic_phantom_assets_AxisSketch_width=0;
	_SL_instance._OV_cn_monadic_phantom_assets_AxisSketch_height=0;
	_SL_instance._OV_cn_monadic_phantom_assets_AxisSketch_identifier=null;
	_SL_instance._OV_cn_monadic_phantom_assets_AxisSketch_collage=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_assets_AxisSketch_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.AxisSketch"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.AxisSketch"+' setup object initialize');

function _SS_cn_monadic_phantom_assets_AxisSketch_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.AxisSketch"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.AxisTrapper"+' flush functions');

function _SO_cn_monadic_phantom_assets_AxisTrapper_AxisTrapper5(_SL_idb,_SL_xa,_SL_yd,_SL_ze,_SL_m)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_assets_AxisTrapper);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_assets_AxisTrapper_init);
	this._OV_cn_monadic_phantom_assets_AxisTrapper_identifier=_SL_idb;
	this._OV_cn_monadic_phantom_assets_AxisTrapper_offsetX=_SL_xa;
	this._OV_cn_monadic_phantom_assets_AxisTrapper_offsetY=_SL_yd;
	this._OV_cn_monadic_phantom_assets_AxisTrapper_offsetZ=_SL_ze;
	this._OV_cn_monadic_phantom_assets_AxisTrapper_matrix=_SL_m;
	this._OV_cn_monadic_phantom_assets_AxisTrapper_width=_SL_m._OM_getWidth();
	this._OV_cn_monadic_phantom_assets_AxisTrapper_height=_SL_m._OM_getHeight();
}
function _SM_cn_monadic_phantom_assets_AxisTrapper_seal()
{
}
function _SM_cn_monadic_phantom_assets_AxisTrapper_identifier()
{
	return this._OV_cn_monadic_phantom_assets_AxisTrapper_identifier;
}
function _SM_cn_monadic_phantom_assets_AxisTrapper_getOffsetX()
{
	return this._OV_cn_monadic_phantom_assets_AxisTrapper_offsetX;
}
function _SM_cn_monadic_phantom_assets_AxisTrapper_getOffsetY()
{
	return this._OV_cn_monadic_phantom_assets_AxisTrapper_offsetY;
}
function _SM_cn_monadic_phantom_assets_AxisTrapper_getOffsetZ()
{
	return this._OV_cn_monadic_phantom_assets_AxisTrapper_offsetZ;
}
function _SM_cn_monadic_phantom_assets_AxisTrapper_getWidth()
{
	return this._OV_cn_monadic_phantom_assets_AxisTrapper_width;
}
function _SM_cn_monadic_phantom_assets_AxisTrapper_getHeight()
{
	return this._OV_cn_monadic_phantom_assets_AxisTrapper_height;
}
function _SM_cn_monadic_phantom_assets_AxisTrapper_trap2(_SL_xb,_SL_ya)
{
	var _SL_hitY=_SL_ya-this._OV_cn_monadic_phantom_assets_AxisTrapper_offsetY;
	var _SL_hitX=_SL_xb-this._OV_cn_monadic_phantom_assets_AxisTrapper_offsetX;
	if(_SL_hitX>=0&&_SL_hitX<this._OV_cn_monadic_phantom_assets_AxisTrapper_width&&_SL_hitY>=0&&_SL_hitY<this._OV_cn_monadic_phantom_assets_AxisTrapper_height&&this._OV_cn_monadic_phantom_assets_AxisTrapper_matrix._OM_valueAt2(_SL_hitX,_SL_hitY))
		return this._OV_cn_monadic_phantom_assets_AxisTrapper_offsetZ;
	return -1;
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.AxisTrapper"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.assets.AxisTrapper"),new Array("cn.monadic.phantom.assets.HtmlTrapper"));
var _SC_cn_monadic_phantom_assets_AxisTrapper=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.AxisTrapper"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.AxisTrapper"+' setup object binder');

function _SS_cn_monadic_phantom_assets_AxisTrapper_bind(_SL_instance)
{
	_SL_instance._OM_seal=_SM_cn_monadic_phantom_assets_AxisTrapper_seal;
	_SL_instance._OM_cn_monadic_phantom_assets_AxisTrapper_seal=_SM_cn_monadic_phantom_assets_AxisTrapper_seal;
	_SL_instance._OM_identifier=_SM_cn_monadic_phantom_assets_AxisTrapper_identifier;
	_SL_instance._OM_cn_monadic_phantom_assets_AxisTrapper_identifier=_SM_cn_monadic_phantom_assets_AxisTrapper_identifier;
	_SL_instance._OM_getOffsetX=_SM_cn_monadic_phantom_assets_AxisTrapper_getOffsetX;
	_SL_instance._OM_cn_monadic_phantom_assets_AxisTrapper_getOffsetX=_SM_cn_monadic_phantom_assets_AxisTrapper_getOffsetX;
	_SL_instance._OM_getOffsetY=_SM_cn_monadic_phantom_assets_AxisTrapper_getOffsetY;
	_SL_instance._OM_cn_monadic_phantom_assets_AxisTrapper_getOffsetY=_SM_cn_monadic_phantom_assets_AxisTrapper_getOffsetY;
	_SL_instance._OM_getOffsetZ=_SM_cn_monadic_phantom_assets_AxisTrapper_getOffsetZ;
	_SL_instance._OM_cn_monadic_phantom_assets_AxisTrapper_getOffsetZ=_SM_cn_monadic_phantom_assets_AxisTrapper_getOffsetZ;
	_SL_instance._OM_getWidth=_SM_cn_monadic_phantom_assets_AxisTrapper_getWidth;
	_SL_instance._OM_cn_monadic_phantom_assets_AxisTrapper_getWidth=_SM_cn_monadic_phantom_assets_AxisTrapper_getWidth;
	_SL_instance._OM_getHeight=_SM_cn_monadic_phantom_assets_AxisTrapper_getHeight;
	_SL_instance._OM_cn_monadic_phantom_assets_AxisTrapper_getHeight=_SM_cn_monadic_phantom_assets_AxisTrapper_getHeight;
	_SL_instance._OM_trap2=_SM_cn_monadic_phantom_assets_AxisTrapper_trap2;
	_SL_instance._OM_cn_monadic_phantom_assets_AxisTrapper_trap2=_SM_cn_monadic_phantom_assets_AxisTrapper_trap2;
	_SL_instance._OV_cn_monadic_phantom_assets_AxisTrapper_identifier=null;
	_SL_instance._OV_cn_monadic_phantom_assets_AxisTrapper_offsetX=0;
	_SL_instance._OV_cn_monadic_phantom_assets_AxisTrapper_offsetY=0;
	_SL_instance._OV_cn_monadic_phantom_assets_AxisTrapper_offsetZ=0;
	_SL_instance._OV_cn_monadic_phantom_assets_AxisTrapper_width=0;
	_SL_instance._OV_cn_monadic_phantom_assets_AxisTrapper_height=0;
	_SL_instance._OV_cn_monadic_phantom_assets_AxisTrapper_matrix=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_assets_AxisTrapper_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.AxisTrapper"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.AxisTrapper"+' setup object initialize');

function _SS_cn_monadic_phantom_assets_AxisTrapper_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.AxisTrapper"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.ClipTrapper"+' flush functions');

function _SO_cn_monadic_phantom_assets_ClipTrapper_ClipTrapper6(_SL_idb,_SL_xa,_SL_yd,_SL_ze,_SL_wd,_SL_hd)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_assets_ClipTrapper);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_assets_ClipTrapper_init);
	this._OV_cn_monadic_phantom_assets_ClipTrapper_identifier=_SL_idb;
	this._OV_cn_monadic_phantom_assets_ClipTrapper_offsetX=_SL_xa;
	this._OV_cn_monadic_phantom_assets_ClipTrapper_offsetY=_SL_yd;
	this._OV_cn_monadic_phantom_assets_ClipTrapper_offsetZ=_SL_ze;
	this._OV_cn_monadic_phantom_assets_ClipTrapper_width=_SL_wd;
	this._OV_cn_monadic_phantom_assets_ClipTrapper_height=_SL_hd;
}
function _SM_cn_monadic_phantom_assets_ClipTrapper_bind1i(_SL_c)
{
	if(this._OV_cn_monadic_phantom_assets_ClipTrapper_sealed)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("error"));
	this._OV_cn_monadic_phantom_assets_ClipTrapper_clipper=_SL_c;
}
function _SM_cn_monadic_phantom_assets_ClipTrapper_seal()
{
	this._OV_cn_monadic_phantom_assets_ClipTrapper_sealed=true;
}
function _SM_cn_monadic_phantom_assets_ClipTrapper_identifier()
{
	return this._OV_cn_monadic_phantom_assets_ClipTrapper_identifier;
}
function _SM_cn_monadic_phantom_assets_ClipTrapper_getOffsetX()
{
	return this._OV_cn_monadic_phantom_assets_ClipTrapper_offsetX;
}
function _SM_cn_monadic_phantom_assets_ClipTrapper_getOffsetY()
{
	return this._OV_cn_monadic_phantom_assets_ClipTrapper_offsetY;
}
function _SM_cn_monadic_phantom_assets_ClipTrapper_getOffsetZ()
{
	return this._OV_cn_monadic_phantom_assets_ClipTrapper_offsetZ;
}
function _SM_cn_monadic_phantom_assets_ClipTrapper_getWidth()
{
	return this._OV_cn_monadic_phantom_assets_ClipTrapper_width;
}
function _SM_cn_monadic_phantom_assets_ClipTrapper_getHeight()
{
	return this._OV_cn_monadic_phantom_assets_ClipTrapper_height;
}
function _SM_cn_monadic_phantom_assets_ClipTrapper_trap2(_SL_xb,_SL_ya)
{
	var _SL_hitY=_SL_ya-this._OV_cn_monadic_phantom_assets_ClipTrapper_offsetY;
	var _SL_hitX=_SL_xb-this._OV_cn_monadic_phantom_assets_ClipTrapper_offsetX;
	if(_SL_hitX>=0&&_SL_hitX<this._OV_cn_monadic_phantom_assets_ClipTrapper_width&&_SL_hitY>=0&&_SL_hitY<this._OV_cn_monadic_phantom_assets_ClipTrapper_height)
	{
		if(this._OV_cn_monadic_phantom_assets_ClipTrapper_clipper==null)
		{
			return this._OV_cn_monadic_phantom_assets_ClipTrapper_offsetZ;
		}
		else
		{
			var _SL_fa=this._OV_cn_monadic_phantom_assets_ClipTrapper_clipper;
			return _SL_fa(_SL_hitX,_SL_hitY,this._OV_cn_monadic_phantom_assets_ClipTrapper_offsetZ);
		}
	}
	return -1;
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.ClipTrapper"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.assets.ClipTrapper"),new Array("cn.monadic.phantom.assets.HtmlTrapper"));
var _SC_cn_monadic_phantom_assets_ClipTrapper=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.ClipTrapper"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.ClipTrapper"+' setup object binder');

function _SS_cn_monadic_phantom_assets_ClipTrapper_bind(_SL_instance)
{
	_SL_instance._OM_bind1i=_SM_cn_monadic_phantom_assets_ClipTrapper_bind1i;
	_SL_instance._OM_cn_monadic_phantom_assets_ClipTrapper_bind1i=_SM_cn_monadic_phantom_assets_ClipTrapper_bind1i;
	_SL_instance._OM_seal=_SM_cn_monadic_phantom_assets_ClipTrapper_seal;
	_SL_instance._OM_cn_monadic_phantom_assets_ClipTrapper_seal=_SM_cn_monadic_phantom_assets_ClipTrapper_seal;
	_SL_instance._OM_identifier=_SM_cn_monadic_phantom_assets_ClipTrapper_identifier;
	_SL_instance._OM_cn_monadic_phantom_assets_ClipTrapper_identifier=_SM_cn_monadic_phantom_assets_ClipTrapper_identifier;
	_SL_instance._OM_getOffsetX=_SM_cn_monadic_phantom_assets_ClipTrapper_getOffsetX;
	_SL_instance._OM_cn_monadic_phantom_assets_ClipTrapper_getOffsetX=_SM_cn_monadic_phantom_assets_ClipTrapper_getOffsetX;
	_SL_instance._OM_getOffsetY=_SM_cn_monadic_phantom_assets_ClipTrapper_getOffsetY;
	_SL_instance._OM_cn_monadic_phantom_assets_ClipTrapper_getOffsetY=_SM_cn_monadic_phantom_assets_ClipTrapper_getOffsetY;
	_SL_instance._OM_getOffsetZ=_SM_cn_monadic_phantom_assets_ClipTrapper_getOffsetZ;
	_SL_instance._OM_cn_monadic_phantom_assets_ClipTrapper_getOffsetZ=_SM_cn_monadic_phantom_assets_ClipTrapper_getOffsetZ;
	_SL_instance._OM_getWidth=_SM_cn_monadic_phantom_assets_ClipTrapper_getWidth;
	_SL_instance._OM_cn_monadic_phantom_assets_ClipTrapper_getWidth=_SM_cn_monadic_phantom_assets_ClipTrapper_getWidth;
	_SL_instance._OM_getHeight=_SM_cn_monadic_phantom_assets_ClipTrapper_getHeight;
	_SL_instance._OM_cn_monadic_phantom_assets_ClipTrapper_getHeight=_SM_cn_monadic_phantom_assets_ClipTrapper_getHeight;
	_SL_instance._OM_trap2=_SM_cn_monadic_phantom_assets_ClipTrapper_trap2;
	_SL_instance._OM_cn_monadic_phantom_assets_ClipTrapper_trap2=_SM_cn_monadic_phantom_assets_ClipTrapper_trap2;
	_SL_instance._OV_cn_monadic_phantom_assets_ClipTrapper_identifier=null;
	_SL_instance._OV_cn_monadic_phantom_assets_ClipTrapper_offsetX=0;
	_SL_instance._OV_cn_monadic_phantom_assets_ClipTrapper_offsetY=0;
	_SL_instance._OV_cn_monadic_phantom_assets_ClipTrapper_offsetZ=0;
	_SL_instance._OV_cn_monadic_phantom_assets_ClipTrapper_width=0;
	_SL_instance._OV_cn_monadic_phantom_assets_ClipTrapper_height=0;
	_SL_instance._OV_cn_monadic_phantom_assets_ClipTrapper_clipper=null;
	_SL_instance._OV_cn_monadic_phantom_assets_ClipTrapper_sealed=false;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_assets_ClipTrapper_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.ClipTrapper"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.ClipTrapper"+' setup object initialize');

function _SS_cn_monadic_phantom_assets_ClipTrapper_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.ClipTrapper"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.Gallery"+' flush functions');

function _SO_cn_monadic_phantom_assets_Gallery_Gallery()
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_assets_Gallery);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_assets_Gallery_init);
	this._OV_cn_monadic_phantom_assets_Gallery_pool=_SM_jazzy_lang_System_attain();
}
function _SM_cn_monadic_phantom_assets_Gallery_add2(_SL_idb,_SL_asset)
{
	this._OV_cn_monadic_phantom_assets_Gallery_pool[_SL_idb]=_SL_asset;
}
function _SM_cn_monadic_phantom_assets_Gallery_get1(_SL_idb)
{
	return this._OV_cn_monadic_phantom_assets_Gallery_pool[_SL_idb];
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.Gallery"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.assets.Gallery"),new Array());
var _SC_cn_monadic_phantom_assets_Gallery=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.Gallery"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.Gallery"+' setup object binder');

function _SS_cn_monadic_phantom_assets_Gallery_bind(_SL_instance)
{
	_SL_instance._OM_add2=_SM_cn_monadic_phantom_assets_Gallery_add2;
	_SL_instance._OM_cn_monadic_phantom_assets_Gallery_add2=_SM_cn_monadic_phantom_assets_Gallery_add2;
	_SL_instance._OM_get1=_SM_cn_monadic_phantom_assets_Gallery_get1;
	_SL_instance._OM_cn_monadic_phantom_assets_Gallery_get1=_SM_cn_monadic_phantom_assets_Gallery_get1;
	_SL_instance._OV_cn_monadic_phantom_assets_Gallery_pool=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_assets_Gallery_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.Gallery"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.Gallery"+' setup object initialize');

function _SS_cn_monadic_phantom_assets_Gallery_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.Gallery"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.HtmlAsset"+' flush functions');









_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.HtmlAsset"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.assets.HtmlAsset"),new Array());
var _SC_cn_monadic_phantom_assets_HtmlAsset=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.HtmlAsset"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.HtmlAsset"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.HtmlAsset"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.HtmlTrapper"+' flush functions');









_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.HtmlTrapper"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.assets.HtmlTrapper"),new Array());
var _SC_cn_monadic_phantom_assets_HtmlTrapper=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.HtmlTrapper"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.HtmlTrapper"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.HtmlTrapper"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.Image"+' flush functions');

function _SO_cn_monadic_phantom_assets_Image_Image7(_SL_idb,_SL_uria,_SL_x,_SL_y,_SL_z,_SL_wj,_SL_hk)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_assets_Image);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_assets_Image_init);
	this._OV_cn_monadic_phantom_assets_Image_identifier=_SL_idb;
	this._OV_cn_monadic_phantom_assets_Image_locator=_SL_uria;
	this._OV_cn_monadic_phantom_assets_Image_offsetX=_SL_x;
	this._OV_cn_monadic_phantom_assets_Image_offsetY=_SL_y;
	this._OV_cn_monadic_phantom_assets_Image_offsetZ=_SL_z;
	this._OV_cn_monadic_phantom_assets_Image_width=_SL_wj;
	this._OV_cn_monadic_phantom_assets_Image_height=_SL_hk;
}
function _SM_cn_monadic_phantom_assets_Image_seal()
{
}
function _SM_cn_monadic_phantom_assets_Image_identifier()
{
	return this._OV_cn_monadic_phantom_assets_Image_identifier;
}
function _SM_cn_monadic_phantom_assets_Image_locator()
{
	return this._OV_cn_monadic_phantom_assets_Image_locator;
}
function _SM_cn_monadic_phantom_assets_Image_getOffsetX()
{
	return this._OV_cn_monadic_phantom_assets_Image_offsetX;
}
function _SM_cn_monadic_phantom_assets_Image_getOffsetY()
{
	return this._OV_cn_monadic_phantom_assets_Image_offsetY;
}
function _SM_cn_monadic_phantom_assets_Image_getOffsetZ()
{
	return this._OV_cn_monadic_phantom_assets_Image_offsetZ;
}
function _SM_cn_monadic_phantom_assets_Image_getWidth()
{
	return this._OV_cn_monadic_phantom_assets_Image_width;
}
function _SM_cn_monadic_phantom_assets_Image_getHeight()
{
	return this._OV_cn_monadic_phantom_assets_Image_height;
}
function _SM_cn_monadic_phantom_assets_Image_attach2(_SL_host,_SL_paramsa)
{
	var _SL_stylec=_SV_jazzy_dom_core_Style_ABS;
	if(_SL_paramsa!=null&&(typeof _SL_paramsa["style"] != "undefined"))
	{
		_SL_stylec=_SL_paramsa["style"];
	}
	var _SL_img=_SL_host._OM_derive3(null,"img",_SL_stylec);
	_SL_img._OM_setVisible1(false);
	_SM_jazzy_lang_System_reflect3(_SL_img._OM_getPeer(),"src",this._OV_cn_monadic_phantom_assets_Image_locator);
	_SM_jazzy_lang_System_reflect3(_SL_img._OM_getPeer(),"width",this._OV_cn_monadic_phantom_assets_Image_width);
	_SM_jazzy_lang_System_reflect3(_SL_img._OM_getPeer(),"height",this._OV_cn_monadic_phantom_assets_Image_height);
	return _SL_img;
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.Image"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.assets.Image"),new Array("cn.monadic.phantom.assets.HtmlAsset"));
var _SC_cn_monadic_phantom_assets_Image=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.Image"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.Image"+' setup object binder');

function _SS_cn_monadic_phantom_assets_Image_bind(_SL_instance)
{
	_SL_instance._OM_seal=_SM_cn_monadic_phantom_assets_Image_seal;
	_SL_instance._OM_cn_monadic_phantom_assets_Image_seal=_SM_cn_monadic_phantom_assets_Image_seal;
	_SL_instance._OM_identifier=_SM_cn_monadic_phantom_assets_Image_identifier;
	_SL_instance._OM_cn_monadic_phantom_assets_Image_identifier=_SM_cn_monadic_phantom_assets_Image_identifier;
	_SL_instance._OM_locator=_SM_cn_monadic_phantom_assets_Image_locator;
	_SL_instance._OM_cn_monadic_phantom_assets_Image_locator=_SM_cn_monadic_phantom_assets_Image_locator;
	_SL_instance._OM_getOffsetX=_SM_cn_monadic_phantom_assets_Image_getOffsetX;
	_SL_instance._OM_cn_monadic_phantom_assets_Image_getOffsetX=_SM_cn_monadic_phantom_assets_Image_getOffsetX;
	_SL_instance._OM_getOffsetY=_SM_cn_monadic_phantom_assets_Image_getOffsetY;
	_SL_instance._OM_cn_monadic_phantom_assets_Image_getOffsetY=_SM_cn_monadic_phantom_assets_Image_getOffsetY;
	_SL_instance._OM_getOffsetZ=_SM_cn_monadic_phantom_assets_Image_getOffsetZ;
	_SL_instance._OM_cn_monadic_phantom_assets_Image_getOffsetZ=_SM_cn_monadic_phantom_assets_Image_getOffsetZ;
	_SL_instance._OM_getWidth=_SM_cn_monadic_phantom_assets_Image_getWidth;
	_SL_instance._OM_cn_monadic_phantom_assets_Image_getWidth=_SM_cn_monadic_phantom_assets_Image_getWidth;
	_SL_instance._OM_getHeight=_SM_cn_monadic_phantom_assets_Image_getHeight;
	_SL_instance._OM_cn_monadic_phantom_assets_Image_getHeight=_SM_cn_monadic_phantom_assets_Image_getHeight;
	_SL_instance._OM_attach2=_SM_cn_monadic_phantom_assets_Image_attach2;
	_SL_instance._OM_cn_monadic_phantom_assets_Image_attach2=_SM_cn_monadic_phantom_assets_Image_attach2;
	_SL_instance._OV_cn_monadic_phantom_assets_Image_offsetX=0;
	_SL_instance._OV_cn_monadic_phantom_assets_Image_offsetY=0;
	_SL_instance._OV_cn_monadic_phantom_assets_Image_offsetZ=0;
	_SL_instance._OV_cn_monadic_phantom_assets_Image_width=0;
	_SL_instance._OV_cn_monadic_phantom_assets_Image_height=0;
	_SL_instance._OV_cn_monadic_phantom_assets_Image_identifier=null;
	_SL_instance._OV_cn_monadic_phantom_assets_Image_locator=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_assets_Image_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.Image"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.Image"+' setup object initialize');

function _SS_cn_monadic_phantom_assets_Image_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.Image"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.Template"+' flush functions');

function _SO_cn_monadic_phantom_assets_Template_Template6(_SL_idb,_SL_xa,_SL_yd,_SL_ze,_SL_wd,_SL_hd)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_assets_Template);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_assets_Template_init);
	this._OV_cn_monadic_phantom_assets_Template_identifier=_SL_idb;
	this._OV_cn_monadic_phantom_assets_Template_offsetX=_SL_xa;
	this._OV_cn_monadic_phantom_assets_Template_offsetY=_SL_yd;
	this._OV_cn_monadic_phantom_assets_Template_offsetZ=_SL_ze;
	this._OV_cn_monadic_phantom_assets_Template_width=_SL_wd;
	this._OV_cn_monadic_phantom_assets_Template_height=_SL_hd;
}
function _SM_cn_monadic_phantom_assets_Template_bind1b(_SL_t)
{
	if(this._OV_cn_monadic_phantom_assets_Template_sealed)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("sealed"));
	this._OV_cn_monadic_phantom_assets_Template_content=_SL_t;
}
function _SM_cn_monadic_phantom_assets_Template_seal()
{
	this._OV_cn_monadic_phantom_assets_Template_sealed=true;
}
function _SM_cn_monadic_phantom_assets_Template_identifier()
{
	return this._OV_cn_monadic_phantom_assets_Template_identifier;
}
function _SM_cn_monadic_phantom_assets_Template_getOffsetX()
{
	return this._OV_cn_monadic_phantom_assets_Template_offsetX;
}
function _SM_cn_monadic_phantom_assets_Template_getOffsetY()
{
	return this._OV_cn_monadic_phantom_assets_Template_offsetY;
}
function _SM_cn_monadic_phantom_assets_Template_getOffsetZ()
{
	return this._OV_cn_monadic_phantom_assets_Template_offsetZ;
}
function _SM_cn_monadic_phantom_assets_Template_getWidth()
{
	return this._OV_cn_monadic_phantom_assets_Template_width;
}
function _SM_cn_monadic_phantom_assets_Template_getHeight()
{
	return this._OV_cn_monadic_phantom_assets_Template_height;
}
function _SM_cn_monadic_phantom_assets_Template_attach2(_SL_host,_SL_paramsa)
{
	var _SL_stylec=_SV_jazzy_dom_core_Style_ABS;
	if(_SL_paramsa!=null&&(typeof _SL_paramsa["style"] != "undefined"))
	{
		_SL_stylec=_SL_paramsa["style"];
	}
	var _SL_nodec=_SL_host._OM_derive3(null,"div",_SL_stylec);
	_SL_nodec._OM_setVisible1(false);
	var _SL_rulea="";
	if(_SL_paramsa!=null&&(typeof _SL_paramsa["rule"] != "undefined"))
	{
		_SL_rulea=_SL_paramsa["rule"];
	}
	var _SL_tmp=this._OV_cn_monadic_phantom_assets_Template_content;
	var _SL_htmla=_SL_tmp.replace(/%%/g,_SL_rulea);
	_SL_nodec._OM_inject1(_SL_htmla);
	return _SL_nodec;
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.Template"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.assets.Template"),new Array("cn.monadic.phantom.assets.HtmlAsset"));
var _SC_cn_monadic_phantom_assets_Template=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.Template"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.Template"+' setup object binder');

function _SS_cn_monadic_phantom_assets_Template_bind(_SL_instance)
{
	_SL_instance._OM_bind1b=_SM_cn_monadic_phantom_assets_Template_bind1b;
	_SL_instance._OM_cn_monadic_phantom_assets_Template_bind1b=_SM_cn_monadic_phantom_assets_Template_bind1b;
	_SL_instance._OM_seal=_SM_cn_monadic_phantom_assets_Template_seal;
	_SL_instance._OM_cn_monadic_phantom_assets_Template_seal=_SM_cn_monadic_phantom_assets_Template_seal;
	_SL_instance._OM_identifier=_SM_cn_monadic_phantom_assets_Template_identifier;
	_SL_instance._OM_cn_monadic_phantom_assets_Template_identifier=_SM_cn_monadic_phantom_assets_Template_identifier;
	_SL_instance._OM_getOffsetX=_SM_cn_monadic_phantom_assets_Template_getOffsetX;
	_SL_instance._OM_cn_monadic_phantom_assets_Template_getOffsetX=_SM_cn_monadic_phantom_assets_Template_getOffsetX;
	_SL_instance._OM_getOffsetY=_SM_cn_monadic_phantom_assets_Template_getOffsetY;
	_SL_instance._OM_cn_monadic_phantom_assets_Template_getOffsetY=_SM_cn_monadic_phantom_assets_Template_getOffsetY;
	_SL_instance._OM_getOffsetZ=_SM_cn_monadic_phantom_assets_Template_getOffsetZ;
	_SL_instance._OM_cn_monadic_phantom_assets_Template_getOffsetZ=_SM_cn_monadic_phantom_assets_Template_getOffsetZ;
	_SL_instance._OM_getWidth=_SM_cn_monadic_phantom_assets_Template_getWidth;
	_SL_instance._OM_cn_monadic_phantom_assets_Template_getWidth=_SM_cn_monadic_phantom_assets_Template_getWidth;
	_SL_instance._OM_getHeight=_SM_cn_monadic_phantom_assets_Template_getHeight;
	_SL_instance._OM_cn_monadic_phantom_assets_Template_getHeight=_SM_cn_monadic_phantom_assets_Template_getHeight;
	_SL_instance._OM_attach2=_SM_cn_monadic_phantom_assets_Template_attach2;
	_SL_instance._OM_cn_monadic_phantom_assets_Template_attach2=_SM_cn_monadic_phantom_assets_Template_attach2;
	_SL_instance._OV_cn_monadic_phantom_assets_Template_offsetX=0;
	_SL_instance._OV_cn_monadic_phantom_assets_Template_offsetY=0;
	_SL_instance._OV_cn_monadic_phantom_assets_Template_offsetZ=0;
	_SL_instance._OV_cn_monadic_phantom_assets_Template_width=0;
	_SL_instance._OV_cn_monadic_phantom_assets_Template_height=0;
	_SL_instance._OV_cn_monadic_phantom_assets_Template_identifier=null;
	_SL_instance._OV_cn_monadic_phantom_assets_Template_content=null;
	_SL_instance._OV_cn_monadic_phantom_assets_Template_sealed=false;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_assets_Template_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.Template"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.Template"+' setup object initialize');

function _SS_cn_monadic_phantom_assets_Template_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.assets.Template"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Animation"+' flush functions');

function _SO_cn_monadic_phantom_render_Animation_Animation1(_SL_idb)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_render_Animation);
	_SM_jazzy_lang_System_BIND2(this,_SO_cn_monadic_phantom_render_Visualizing_Visualizing1)._temp_(_SL_idb);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_render_Animation_init);
}
function _SM_cn_monadic_phantom_render_Animation_bind3(_SL_uri,_SL_wk,_SL_hl)
{
	if(this._OV_cn_monadic_phantom_render_Visualizing_activated)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("cannot bind after activated"));
	this._OV_cn_monadic_phantom_render_Animation_resource=_SL_uri;
	this._OV_cn_monadic_phantom_render_Animation_width=_SL_wk;
	this._OV_cn_monadic_phantom_render_Animation_height=_SL_hl;
}
function _SM_cn_monadic_phantom_render_Animation_shift1(_SL_f)
{
	if(this._OV_cn_monadic_phantom_render_Animation_frame!=_SL_f)
	{
		this._OV_cn_monadic_phantom_render_Animation_frame=_SL_f;
		this._OM_refresh();
	}
}
function _SM_cn_monadic_phantom_render_Animation_offset2(_SL_xb,_SL_ya)
{
	if(_SL_xb!=this._OV_cn_monadic_phantom_render_Animation_anchorX||_SL_ya!=this._OV_cn_monadic_phantom_render_Animation_anchorY)
	{
		this._OV_cn_monadic_phantom_render_Animation_anchorX=_SL_xb;
		this._OV_cn_monadic_phantom_render_Animation_anchorY=_SL_ya;
		this._OM_refresh();
	}
}
function _SM_cn_monadic_phantom_render_Animation_refresh()
{
	if(this._OV_cn_monadic_phantom_render_Animation_viewport!=null)
	{
		this._OV_cn_monadic_phantom_render_Animation_viewport._OM_setVisible1(this._OV_cn_monadic_phantom_render_Visualizing_visible);
		if(this._OV_cn_monadic_phantom_render_Visualizing_visible)
		{
			this._OV_cn_monadic_phantom_render_Animation_viewport._OM_setZIndex1(this._OV_cn_monadic_phantom_render_Visualizing_offsetZ);
			this._OV_cn_monadic_phantom_render_Animation_viewport._OM_moveTo2(this._OV_cn_monadic_phantom_render_Visualizing_offsetX+this._OV_cn_monadic_phantom_render_Animation_anchorX,this._OV_cn_monadic_phantom_render_Visualizing_offsetY+this._OV_cn_monadic_phantom_render_Animation_anchorY);
			this._OV_cn_monadic_phantom_render_Animation_graphics._OM_moveTo2(-this._OV_cn_monadic_phantom_render_Animation_frame*this._OV_cn_monadic_phantom_render_Animation_width,0);
		}
	}
}
function _SM_cn_monadic_phantom_render_Animation__x_online()
{
	if(this._OV_cn_monadic_phantom_render_Animation_resource==null)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("not ready"));
	this._OV_cn_monadic_phantom_render_Animation_viewport=this._OV_cn_monadic_phantom_render_Visualizing_root._OM_element()._OM_derive3(null,"div",_SM_jazzy_dom_core_Style_clipAt4(0,0,this._OV_cn_monadic_phantom_render_Animation_width,this._OV_cn_monadic_phantom_render_Animation_height)+_SV_jazzy_dom_core_Style_HIDE);
	this._OV_cn_monadic_phantom_render_Animation_graphics=this._OV_cn_monadic_phantom_render_Animation_viewport._OM_derive3(null,"img","position: absolute; left: 0; top: 0");
	_SM_jazzy_lang_System_reflect3(this._OV_cn_monadic_phantom_render_Animation_graphics._OM_getPeer(),"src",this._OV_cn_monadic_phantom_render_Animation_resource);
}
function _SM_cn_monadic_phantom_render_Animation__x_offline()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Animation"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.render.Visualizing","cn.monadic.phantom.render.Animation"),new Array());
var _SC_cn_monadic_phantom_render_Animation=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Animation"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Animation"+' setup object binder');

function _SS_cn_monadic_phantom_render_Animation_bind(_SL_instance)
{
	_SL_instance._OM_bind3=_SM_cn_monadic_phantom_render_Animation_bind3;
	_SL_instance._OM_cn_monadic_phantom_render_Animation_bind3=_SM_cn_monadic_phantom_render_Animation_bind3;
	_SL_instance._OM_shift1=_SM_cn_monadic_phantom_render_Animation_shift1;
	_SL_instance._OM_cn_monadic_phantom_render_Animation_shift1=_SM_cn_monadic_phantom_render_Animation_shift1;
	_SL_instance._OM_offset2=_SM_cn_monadic_phantom_render_Animation_offset2;
	_SL_instance._OM_cn_monadic_phantom_render_Animation_offset2=_SM_cn_monadic_phantom_render_Animation_offset2;
	_SL_instance._OM_refresh=_SM_cn_monadic_phantom_render_Animation_refresh;
	_SL_instance._OM_cn_monadic_phantom_render_Animation_refresh=_SM_cn_monadic_phantom_render_Animation_refresh;
	_SL_instance._OM__x_online=_SM_cn_monadic_phantom_render_Animation__x_online;
	_SL_instance._OM_cn_monadic_phantom_render_Animation__x_online=_SM_cn_monadic_phantom_render_Animation__x_online;
	_SL_instance._OM__x_offline=_SM_cn_monadic_phantom_render_Animation__x_offline;
	_SL_instance._OM_cn_monadic_phantom_render_Animation__x_offline=_SM_cn_monadic_phantom_render_Animation__x_offline;
	_SL_instance._OV_cn_monadic_phantom_render_Animation_viewport=null;
	_SL_instance._OV_cn_monadic_phantom_render_Animation_graphics=null;
	_SL_instance._OV_cn_monadic_phantom_render_Animation_resource=null;
	_SL_instance._OV_cn_monadic_phantom_render_Animation_frame=0;
	_SL_instance._OV_cn_monadic_phantom_render_Animation_width=0;
	_SL_instance._OV_cn_monadic_phantom_render_Animation_height=0;
	_SL_instance._OV_cn_monadic_phantom_render_Animation_anchorX=0;
	_SL_instance._OV_cn_monadic_phantom_render_Animation_anchorY=0;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_render_Animation_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Animation"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Animation"+' setup object initialize');

function _SS_cn_monadic_phantom_render_Animation_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Animation"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.AxisAnalyzer"+' flush functions');

function _SO_cn_monadic_phantom_render_AxisAnalyzer_AxisAnalyzer()
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_render_AxisAnalyzer);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_render_AxisAnalyzer_init);
	this._OV_cn_monadic_phantom_render_AxisAnalyzer_curve=new _SO_jazzy_lang_StringBuffer_StringBuffer();
}
function _SM_cn_monadic_phantom_render_AxisAnalyzer_bind1d(_SL_v)
{
	this._OV_cn_monadic_phantom_render_AxisAnalyzer_cursor=_SL_v;
}
function _SM_cn_monadic_phantom_render_AxisAnalyzer_consume1a(_SL_t)
{
	this._OV_cn_monadic_phantom_render_AxisAnalyzer_stamp=_SM_jazzy_lang_System_currentTimeMillis();
	if(this._OV_cn_monadic_phantom_render_AxisAnalyzer_cursor!=null)
		this._OV_cn_monadic_phantom_render_AxisAnalyzer_cursor._OM_locate3(_SL_t._OV_cn_monadic_phantom_render_Trapped_x,_SL_t._OV_cn_monadic_phantom_render_Trapped_y,9999);
	if(_SL_t._OV_cn_monadic_phantom_render_Trapped_type==_SF_jazzy_dom_event_Pointer_PREDRAG)
	{
		this._OV_cn_monadic_phantom_render_AxisAnalyzer_curve._OM_clear();
		this._OV_cn_monadic_phantom_render_AxisAnalyzer_curve._OM_append1(_SL_t._OV_cn_monadic_phantom_render_Trapped_x+"_"+_SL_t._OV_cn_monadic_phantom_render_Trapped_y);
	}
	if(_SL_t._OV_cn_monadic_phantom_render_Trapped_type==_SF_jazzy_dom_event_Pointer_MOVING||_SL_t._OV_cn_monadic_phantom_render_Trapped_type==_SF_jazzy_dom_event_Pointer_DRAGGING)
	{
		if(_SL_t._OV_cn_monadic_phantom_render_Trapped_type==_SF_jazzy_dom_event_Pointer_DRAGGING)
			this._OV_cn_monadic_phantom_render_AxisAnalyzer_curve._OM_append1("_"+_SL_t._OV_cn_monadic_phantom_render_Trapped_x+"_"+_SL_t._OV_cn_monadic_phantom_render_Trapped_y);
		if(this._OV_cn_monadic_phantom_render_AxisAnalyzer_latest==_SL_t._OV_cn_monadic_phantom_render_Trapped_source)
			return true;
		this._OV_cn_monadic_phantom_render_AxisAnalyzer_latest=_SL_t._OV_cn_monadic_phantom_render_Trapped_source;
	}
	else
	{
		this._OV_cn_monadic_phantom_render_AxisAnalyzer_latest=null;
	}
	return false;
}
function _SM_cn_monadic_phantom_render_AxisAnalyzer_timestamp()
{
	return this._OV_cn_monadic_phantom_render_AxisAnalyzer_stamp;
}
function _SM_cn_monadic_phantom_render_AxisAnalyzer_trace()
{
	return this._OV_cn_monadic_phantom_render_AxisAnalyzer_curve._OM_toString();
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.AxisAnalyzer"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.render.AxisAnalyzer"),new Array("cn.monadic.phantom.render.TrapAnalyzer"));
var _SC_cn_monadic_phantom_render_AxisAnalyzer=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.AxisAnalyzer"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.AxisAnalyzer"+' setup object binder');

function _SS_cn_monadic_phantom_render_AxisAnalyzer_bind(_SL_instance)
{
	_SL_instance._OM_bind1d=_SM_cn_monadic_phantom_render_AxisAnalyzer_bind1d;
	_SL_instance._OM_cn_monadic_phantom_render_AxisAnalyzer_bind1d=_SM_cn_monadic_phantom_render_AxisAnalyzer_bind1d;
	_SL_instance._OM_consume1a=_SM_cn_monadic_phantom_render_AxisAnalyzer_consume1a;
	_SL_instance._OM_cn_monadic_phantom_render_AxisAnalyzer_consume1a=_SM_cn_monadic_phantom_render_AxisAnalyzer_consume1a;
	_SL_instance._OM_timestamp=_SM_cn_monadic_phantom_render_AxisAnalyzer_timestamp;
	_SL_instance._OM_cn_monadic_phantom_render_AxisAnalyzer_timestamp=_SM_cn_monadic_phantom_render_AxisAnalyzer_timestamp;
	_SL_instance._OM_trace=_SM_cn_monadic_phantom_render_AxisAnalyzer_trace;
	_SL_instance._OM_cn_monadic_phantom_render_AxisAnalyzer_trace=_SM_cn_monadic_phantom_render_AxisAnalyzer_trace;
	_SL_instance._OV_cn_monadic_phantom_render_AxisAnalyzer_stamp=null;
	_SL_instance._OV_cn_monadic_phantom_render_AxisAnalyzer_latest=null;
	_SL_instance._OV_cn_monadic_phantom_render_AxisAnalyzer_cursor=null;
	_SL_instance._OV_cn_monadic_phantom_render_AxisAnalyzer_curve=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_render_AxisAnalyzer_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.AxisAnalyzer"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.AxisAnalyzer"+' setup object initialize');

function _SS_cn_monadic_phantom_render_AxisAnalyzer_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.AxisAnalyzer"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.AxisLayout"+' flush functions');

function _SO_cn_monadic_phantom_render_AxisLayout_AxisLayout1(_SL_nd)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_render_AxisLayout);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_render_AxisLayout_init);
	this._OV_cn_monadic_phantom_render_AxisLayout_N=_SL_nd;
	var _SL_N4=this._OV_cn_monadic_phantom_render_AxisLayout_N*4;
	this._OV_cn_monadic_phantom_render_AxisLayout_layout=_SM_jazzy_lang_System_newArray4("$int",0,new Array(_SL_N4,null),0);
	for(var _SL_ib=0;_SL_ib<_SL_N4;_SL_ib++)
		this._OV_cn_monadic_phantom_render_AxisLayout_layout[_SL_ib]=0;
}
function _SM_cn_monadic_phantom_render_AxisLayout_query2(_SL_index,_SL_vd)
{
	if(_SL_index<0||_SL_index>=this._OV_cn_monadic_phantom_render_AxisLayout_N||_SL_vd<0||_SL_vd>3)
		return -1;
	var _SL_offset=_SL_index*4;
	return this._OV_cn_monadic_phantom_render_AxisLayout_layout[_SL_offset+_SL_vd];
}
function _SM_cn_monadic_phantom_render_AxisLayout_override2(_SL_index,_SL_state)
{
	if(_SL_index<0||_SL_index>=this._OV_cn_monadic_phantom_render_AxisLayout_N)
		return;
	var _SL_offset=_SL_index*4;
	this._OV_cn_monadic_phantom_render_AxisLayout_layout[_SL_offset]=_SL_state;
}
function _SM_cn_monadic_phantom_render_AxisLayout_override5(_SL_index,_SL_state,_SL_xoffset,_SL_yoffset,_SL_zoffset)
{
	if(_SL_index<0||_SL_index>=this._OV_cn_monadic_phantom_render_AxisLayout_N)
		return;
	var _SL_offseta=_SL_index*4;
	this._OV_cn_monadic_phantom_render_AxisLayout_layout[_SL_offseta]=_SL_state;
	this._OV_cn_monadic_phantom_render_AxisLayout_layout[_SL_offseta+1]=_SL_xoffset;
	this._OV_cn_monadic_phantom_render_AxisLayout_layout[_SL_offseta+2]=_SL_yoffset;
	this._OV_cn_monadic_phantom_render_AxisLayout_layout[_SL_offseta+3]=_SL_zoffset;
}
function _SM_cn_monadic_phantom_render_AxisLayout_arrange5(_SL_node,_SL_indexa,_SL_x,_SL_y,_SL_z)
{
	if(_SL_indexa<0||_SL_indexa>=this._OV_cn_monadic_phantom_render_AxisLayout_N)
		return;
	var _SL_offseta=_SL_indexa*4;
	switch(this._OV_cn_monadic_phantom_render_AxisLayout_layout[_SL_offseta])
	{
		case _SF_cn_monadic_phantom_render_AxisLayout_STATE_HIDDEN:
			_SL_node._OM_render1(false);
			break;
		case _SF_cn_monadic_phantom_render_AxisLayout_STATE_FLOAT:
			_SL_node._OM_render1(true);
			break;
		default:
			_SL_node._OM_locate3(_SL_x+this._OV_cn_monadic_phantom_render_AxisLayout_layout[_SL_offseta+1],_SL_y+this._OV_cn_monadic_phantom_render_AxisLayout_layout[_SL_offseta+2],_SL_z+this._OV_cn_monadic_phantom_render_AxisLayout_layout[_SL_offseta+3]);
			_SL_node._OM_render1(true);
			break;
	}
}
function _SM_cn_monadic_phantom_render_AxisLayout_toggle2(_SL_node,_SL_show)
{
	var _SL_parenta=_SM_jazzy_lang_ClassLoader_CAST2(_SL_node._OM_parent(),"cn.monadic.phantom.render.Layer");
	var _SL_layoutb=_SM_jazzy_lang_ClassLoader_CAST2(_SL_parenta._OM_getLayout(),"cn.monadic.phantom.render.AxisLayout");
	var _SL_ne=_SC_cn_monadic_phantom_render_Layer._OM_indexOf2(_SL_parenta,_SL_node);
	_SL_layoutb._OM_override2(_SL_ne,_SL_show?_SF_cn_monadic_phantom_render_AxisLayout_STATE_FLOAT:_SF_cn_monadic_phantom_render_AxisLayout_STATE_HIDDEN);
	_SL_node._OM_render1(_SL_show);
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.AxisLayout"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.render.AxisLayout"),new Array("cn.monadic.phantom.render.Layout"));
var _SC_cn_monadic_phantom_render_AxisLayout=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.AxisLayout"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
	this._OM_toggle2=_SM_cn_monadic_phantom_render_AxisLayout_toggle2;
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.AxisLayout"+' setup object binder');

function _SS_cn_monadic_phantom_render_AxisLayout_bind(_SL_instance)
{
	_SL_instance._OM_query2=_SM_cn_monadic_phantom_render_AxisLayout_query2;
	_SL_instance._OM_cn_monadic_phantom_render_AxisLayout_query2=_SM_cn_monadic_phantom_render_AxisLayout_query2;
	_SL_instance._OM_override2=_SM_cn_monadic_phantom_render_AxisLayout_override2;
	_SL_instance._OM_cn_monadic_phantom_render_AxisLayout_override2=_SM_cn_monadic_phantom_render_AxisLayout_override2;
	_SL_instance._OM_override5=_SM_cn_monadic_phantom_render_AxisLayout_override5;
	_SL_instance._OM_cn_monadic_phantom_render_AxisLayout_override5=_SM_cn_monadic_phantom_render_AxisLayout_override5;
	_SL_instance._OM_arrange5=_SM_cn_monadic_phantom_render_AxisLayout_arrange5;
	_SL_instance._OM_cn_monadic_phantom_render_AxisLayout_arrange5=_SM_cn_monadic_phantom_render_AxisLayout_arrange5;
	_SL_instance._OV_cn_monadic_phantom_render_AxisLayout_N=0;
	_SL_instance._OV_cn_monadic_phantom_render_AxisLayout_layout=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_render_AxisLayout_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.AxisLayout"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
	_SF_cn_monadic_phantom_render_AxisLayout_STATE_FLOAT=-1;
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.AxisLayout"+' setup object initialize');

function _SS_cn_monadic_phantom_render_AxisLayout_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.AxisLayout"+' setup funtions');

var _SF_cn_monadic_phantom_render_AxisLayout_STATE_NORMAL=0;
var _SF_cn_monadic_phantom_render_AxisLayout_STATE_HIDDEN=1;
var _SF_cn_monadic_phantom_render_AxisLayout_STATE_FLOAT=0;
var _SF_cn_monadic_phantom_render_AxisLayout_QUERY_STATE=0;
var _SF_cn_monadic_phantom_render_AxisLayout_QUERY_X=1;
var _SF_cn_monadic_phantom_render_AxisLayout_QUERY_Y=2;
var _SF_cn_monadic_phantom_render_AxisLayout_QUERY_Z=3;
_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Layer"+' flush functions');

function _SO_cn_monadic_phantom_render_Layer_Layer1(_SL_idb)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_render_Layer);
	_SM_jazzy_lang_System_BIND2(this,_SO_cn_monadic_phantom_render_Visualizing_Visualizing1)._temp_(_SL_idb);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_render_Layer_init);
	this._OV_cn_monadic_phantom_render_Layer_layout=_SF_cn_monadic_phantom_render_PureLayout__;
}
function _SM_cn_monadic_phantom_render_Layer_bind1h(_SL_c)
{
	this._OM__x_accept1(_SL_c);
	this._OV_cn_monadic_phantom_render_Layer_N=_SL_c.length;
	this._OV_cn_monadic_phantom_render_Layer_candidates=_SL_c;
}
function _SM_cn_monadic_phantom_render_Layer_count()
{
	return this._OV_cn_monadic_phantom_render_Layer_N;
}
function _SM_cn_monadic_phantom_render_Layer_child1(_SL_index)
{
	return this._OV_cn_monadic_phantom_render_Layer_candidates[_SL_index];
}
function _SM_cn_monadic_phantom_render_Layer_setLayout1(_SL_ld)
{
	this._OV_cn_monadic_phantom_render_Layer_layout=_SL_ld;
	if(this._OV_cn_monadic_phantom_render_Visualizing_activated)
		this._OM_refresh();
}
function _SM_cn_monadic_phantom_render_Layer_getLayout()
{
	return this._OV_cn_monadic_phantom_render_Layer_layout;
}
function _SM_cn_monadic_phantom_render_Layer_measure1(_SL_metaid)
{
	return this._OM_cn_monadic_phantom_render_Visualizing_measure1(_SL_metaid);
}
function _SM_cn_monadic_phantom_render_Layer_query1(_SL_metaname)
{
	return this._OM_cn_monadic_phantom_render_Visualizing_query1(_SL_metaname);
}
function _SM_cn_monadic_phantom_render_Layer_clipChildren()
{
	var _SL_x0b=this._OV_cn_monadic_phantom_render_Visualizing_offsetX;
	var _SL_y0a=this._OV_cn_monadic_phantom_render_Visualizing_offsetY;
	for(var _SL_ib=0;_SL_ib<this._OV_cn_monadic_phantom_render_Layer_N;_SL_ib++)
	{
		this._OV_cn_monadic_phantom_render_Layer_layout._OM_arrange5(this._OV_cn_monadic_phantom_render_Layer_candidates[_SL_ib],_SL_ib,this._OV_cn_monadic_phantom_render_Visualizing_offsetX,this._OV_cn_monadic_phantom_render_Visualizing_offsetY,this._OV_cn_monadic_phantom_render_Visualizing_offsetZ);
		var _SL_x1b=this._OV_cn_monadic_phantom_render_Layer_candidates[_SL_ib]._OM_measure1(_SF_cn_monadic_phantom_render_Visual_MAXIMUM_X);
		var _SL_y1b=this._OV_cn_monadic_phantom_render_Layer_candidates[_SL_ib]._OM_measure1(_SF_cn_monadic_phantom_render_Visual_MAXIMUM_Y);
		if(_SL_x1b>_SL_x0b)
			_SL_x0b=_SL_x1b;
		if(_SL_y1b>_SL_y0a)
			_SL_y0a=_SL_y1b;
	}
	this._OV_cn_monadic_phantom_render_Visualizing_width=_SL_x0b-this._OV_cn_monadic_phantom_render_Visualizing_offsetX;
	this._OV_cn_monadic_phantom_render_Visualizing_height=_SL_y0a-this._OV_cn_monadic_phantom_render_Visualizing_offsetY;
	this._OM_refresh();
}
function _SM_cn_monadic_phantom_render_Layer_refresh()
{
	if(!this._OV_cn_monadic_phantom_render_Visualizing_visible)
	{
		for(var _SL_ia=0;_SL_ia<this._OV_cn_monadic_phantom_render_Layer_N;_SL_ia++)
		{
			this._OV_cn_monadic_phantom_render_Layer_candidates[_SL_ia]._OM_render1(false);
		}
		return;
	}
	for(var _SL_i=0;_SL_i<this._OV_cn_monadic_phantom_render_Layer_N;_SL_i++)
	{
		this._OV_cn_monadic_phantom_render_Layer_layout._OM_arrange5(this._OV_cn_monadic_phantom_render_Layer_candidates[_SL_i],_SL_i,this._OV_cn_monadic_phantom_render_Visualizing_offsetX,this._OV_cn_monadic_phantom_render_Visualizing_offsetY,this._OV_cn_monadic_phantom_render_Visualizing_offsetZ);
	}
}
function _SM_cn_monadic_phantom_render_Layer__x_hitting1(_SL_t)
{
	for(var _SL_i=0;_SL_i<this._OV_cn_monadic_phantom_render_Layer_N;_SL_i++)
	{
		this._OV_cn_monadic_phantom_render_Layer_candidates[_SL_i]._OM_hitting1(_SL_t);
	}
}
function _SM_cn_monadic_phantom_render_Layer__x_online()
{
	if(this._OV_cn_monadic_phantom_render_Layer_candidates==null)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("not ready"));
	for(var _SL_ia=0;_SL_ia<this._OV_cn_monadic_phantom_render_Layer_N;_SL_ia++)
		this._OV_cn_monadic_phantom_render_Layer_candidates[_SL_ia]._OM_visualize1(this._OV_cn_monadic_phantom_render_Visualizing_root);
}
function _SM_cn_monadic_phantom_render_Layer__x_offline()
{
	for(var _SL_ia=0;_SL_ia<this._OV_cn_monadic_phantom_render_Layer_N;_SL_ia++)
		this._OV_cn_monadic_phantom_render_Layer_candidates[_SL_ia]._OM_visualize1(null);
}
function _SM_cn_monadic_phantom_render_Layer_indexOf2(_SL_parent,_SL_childa)
{
	var _SL_sf=_SL_childa._OM_query1("$layer.index");
	if(_SL_sf!=null)
		return (_SL_sf-0);
	var _SL_Nb=_SL_parent._OM_count();
	for(var _SL_ie=0;_SL_ie<_SL_Nb;_SL_ie++)
	{
		if(_SL_parent._OM_child1(_SL_ie)==_SL_childa)
		{
			_SL_childa._OM_record2("$layer.index",""+_SL_ie);
			return _SL_ie;
		}
	}
	throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("illegal"));
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Layer"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.render.Visualizing","cn.monadic.phantom.render.Layer"),new Array());
var _SC_cn_monadic_phantom_render_Layer=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Layer"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
	this._OM_indexOf2=_SM_cn_monadic_phantom_render_Layer_indexOf2;
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Layer"+' setup object binder');

function _SS_cn_monadic_phantom_render_Layer_bind(_SL_instance)
{
	_SL_instance._OM_bind1h=_SM_cn_monadic_phantom_render_Layer_bind1h;
	_SL_instance._OM_cn_monadic_phantom_render_Layer_bind1h=_SM_cn_monadic_phantom_render_Layer_bind1h;
	_SL_instance._OM_count=_SM_cn_monadic_phantom_render_Layer_count;
	_SL_instance._OM_cn_monadic_phantom_render_Layer_count=_SM_cn_monadic_phantom_render_Layer_count;
	_SL_instance._OM_child1=_SM_cn_monadic_phantom_render_Layer_child1;
	_SL_instance._OM_cn_monadic_phantom_render_Layer_child1=_SM_cn_monadic_phantom_render_Layer_child1;
	_SL_instance._OM_setLayout1=_SM_cn_monadic_phantom_render_Layer_setLayout1;
	_SL_instance._OM_cn_monadic_phantom_render_Layer_setLayout1=_SM_cn_monadic_phantom_render_Layer_setLayout1;
	_SL_instance._OM_getLayout=_SM_cn_monadic_phantom_render_Layer_getLayout;
	_SL_instance._OM_cn_monadic_phantom_render_Layer_getLayout=_SM_cn_monadic_phantom_render_Layer_getLayout;
	_SL_instance._OM_measure1=_SM_cn_monadic_phantom_render_Layer_measure1;
	_SL_instance._OM_cn_monadic_phantom_render_Layer_measure1=_SM_cn_monadic_phantom_render_Layer_measure1;
	_SL_instance._OM_query1=_SM_cn_monadic_phantom_render_Layer_query1;
	_SL_instance._OM_cn_monadic_phantom_render_Layer_query1=_SM_cn_monadic_phantom_render_Layer_query1;
	_SL_instance._OM_clipChildren=_SM_cn_monadic_phantom_render_Layer_clipChildren;
	_SL_instance._OM_cn_monadic_phantom_render_Layer_clipChildren=_SM_cn_monadic_phantom_render_Layer_clipChildren;
	_SL_instance._OM_refresh=_SM_cn_monadic_phantom_render_Layer_refresh;
	_SL_instance._OM_cn_monadic_phantom_render_Layer_refresh=_SM_cn_monadic_phantom_render_Layer_refresh;
	_SL_instance._OM__x_hitting1=_SM_cn_monadic_phantom_render_Layer__x_hitting1;
	_SL_instance._OM_cn_monadic_phantom_render_Layer__x_hitting1=_SM_cn_monadic_phantom_render_Layer__x_hitting1;
	_SL_instance._OM__x_online=_SM_cn_monadic_phantom_render_Layer__x_online;
	_SL_instance._OM_cn_monadic_phantom_render_Layer__x_online=_SM_cn_monadic_phantom_render_Layer__x_online;
	_SL_instance._OM__x_offline=_SM_cn_monadic_phantom_render_Layer__x_offline;
	_SL_instance._OM_cn_monadic_phantom_render_Layer__x_offline=_SM_cn_monadic_phantom_render_Layer__x_offline;
	_SL_instance._OV_cn_monadic_phantom_render_Layer_candidates=null;
	_SL_instance._OV_cn_monadic_phantom_render_Layer_N=0;
	_SL_instance._OV_cn_monadic_phantom_render_Layer_layout=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_render_Layer_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Layer"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Layer"+' setup object initialize');

function _SS_cn_monadic_phantom_render_Layer_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Layer"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Layout"+' flush functions');


_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Layout"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.render.Layout"),new Array());
var _SC_cn_monadic_phantom_render_Layout=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Layout"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Layout"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Layout"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Projection"+' flush functions');

function _SO_cn_monadic_phantom_render_Projection_Projection1(_SL_idb)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_render_Projection);
	_SM_jazzy_lang_System_BIND2(this,_SO_cn_monadic_phantom_render_Visualizing_Visualizing1)._temp_(_SL_idb);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_render_Projection_init);
	this._OV_cn_monadic_phantom_render_Visualizing_shading=true;
}
function _SM_cn_monadic_phantom_render_Projection_bind1f(_SL_haa)
{
	if(_SL_haa==null)
	{
		window.alert("binding null to "+this._OV_cn_monadic_phantom_render_Visualizing_identifier);
		return;
	}
	this._OV_cn_monadic_phantom_render_Projection_asset=_SL_haa;
	this._OV_cn_monadic_phantom_render_Visualizing_width=this._OV_cn_monadic_phantom_render_Projection_asset._OM_getOffsetX()+this._OV_cn_monadic_phantom_render_Projection_asset._OM_getWidth();
	this._OV_cn_monadic_phantom_render_Visualizing_height=this._OV_cn_monadic_phantom_render_Projection_asset._OM_getOffsetY()+this._OV_cn_monadic_phantom_render_Projection_asset._OM_getHeight();
}
function _SM_cn_monadic_phantom_render_Projection_bind2b(_SL_haa,_SL_paramsa)
{
	this._OV_cn_monadic_phantom_render_Projection_asset=_SL_haa;
	this._OV_cn_monadic_phantom_render_Projection_parameters=_SL_paramsa;
	this._OV_cn_monadic_phantom_render_Visualizing_width=this._OV_cn_monadic_phantom_render_Projection_asset._OM_getOffsetX()+this._OV_cn_monadic_phantom_render_Projection_asset._OM_getWidth();
	this._OV_cn_monadic_phantom_render_Visualizing_height=this._OV_cn_monadic_phantom_render_Projection_asset._OM_getOffsetY()+this._OV_cn_monadic_phantom_render_Projection_asset._OM_getHeight();
}
function _SM_cn_monadic_phantom_render_Projection_cascade1(_SL_pa)
{
	this._OV_cn_monadic_phantom_render_Projection_cascaded=_SL_pa;
	this._OV_cn_monadic_phantom_render_Projection_cascaded._OV_cn_monadic_phantom_render_Visualizing_visible=false;
	this._OV_cn_monadic_phantom_render_Projection_cascaded._OV_cn_monadic_phantom_render_Visualizing_host=this;
	this._OV_cn_monadic_phantom_render_Projection_cascadez=0;
}
function _SM_cn_monadic_phantom_render_Projection_cascadeAt1(_SL_oz)
{
	if(this._OV_cn_monadic_phantom_render_Projection_cascaded!=null&&_SL_oz!=this._OV_cn_monadic_phantom_render_Projection_cascadez)
	{
		this._OV_cn_monadic_phantom_render_Projection_cascadez=_SL_oz;
		if(this._OV_cn_monadic_phantom_render_Projection_cascadez==0)
		{
			this._OV_cn_monadic_phantom_render_Projection_cascaded._OM_render1(false);
		}
		else
		{
			this._OV_cn_monadic_phantom_render_Projection_cascaded._OM_locate3(this._OV_cn_monadic_phantom_render_Visualizing_offsetX,this._OV_cn_monadic_phantom_render_Visualizing_offsetY,this._OV_cn_monadic_phantom_render_Visualizing_offsetZ+_SL_oz);
			this._OV_cn_monadic_phantom_render_Projection_cascaded._OM_render1(this._OV_cn_monadic_phantom_render_Visualizing_visible);
		}
	}
}
function _SM_cn_monadic_phantom_render_Projection_count()
{
	return this._OV_cn_monadic_phantom_render_Projection_cascaded==null?0:1;
}
function _SM_cn_monadic_phantom_render_Projection_child1(_SL_index)
{
	return _SL_index==0?this._OV_cn_monadic_phantom_render_Projection_cascaded:null;
}
function _SM_cn_monadic_phantom_render_Projection_manipulate1(_SL_manipulator)
{
	if(this._OV_cn_monadic_phantom_render_Projection_projected!=null)
	{
		_SL_manipulator(this._OV_cn_monadic_phantom_render_Projection_projected);
	}
	else
	{
		if(this._OV_cn_monadic_phantom_render_Projection_pending==null)
		{
			this._OV_cn_monadic_phantom_render_Projection_pending=_SM_jazzy_lang___array_create();
		}
		this._OV_cn_monadic_phantom_render_Projection_pending.push(_SL_manipulator);
	}
}
function _SM_cn_monadic_phantom_render_Projection_project()
{
	return this._OV_cn_monadic_phantom_render_Projection_projected;
}
function _SM_cn_monadic_phantom_render_Projection_measure1(_SL_metaid)
{
	return this._OM_cn_monadic_phantom_render_Visualizing_measure1(_SL_metaid);
}
function _SM_cn_monadic_phantom_render_Projection_query1(_SL_metaname)
{
	return this._OM_cn_monadic_phantom_render_Visualizing_query1(_SL_metaname);
}
function _SM_cn_monadic_phantom_render_Projection__x_online()
{
	if(this._OV_cn_monadic_phantom_render_Projection_asset==null)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("not ready"));
	if(this._OV_cn_monadic_phantom_render_Projection_cascaded!=null)
		this._OV_cn_monadic_phantom_render_Projection_cascaded._OM_visualize1(this._OV_cn_monadic_phantom_render_Visualizing_root);
}
function _SM_cn_monadic_phantom_render_Projection__x_offline()
{
}
function _SM_cn_monadic_phantom_render_Projection_refresh()
{
	if(this._OV_cn_monadic_phantom_render_Projection_projected==null)
	{
		if(!this._OV_cn_monadic_phantom_render_Visualizing_visible)
			return;
		this._OV_cn_monadic_phantom_render_Projection_projected=this._OV_cn_monadic_phantom_render_Projection_asset._OM_attach2(this._OV_cn_monadic_phantom_render_Visualizing_root._OM_element(),this._OV_cn_monadic_phantom_render_Projection_parameters);
		if(this._OV_cn_monadic_phantom_render_Projection_pending!=null)
		{
			while(this._OV_cn_monadic_phantom_render_Projection_pending.length>0)
			{
				var _SL_op=this._OV_cn_monadic_phantom_render_Projection_pending.shift();
				_SL_op(this._OV_cn_monadic_phantom_render_Projection_projected);
			}
			this._OV_cn_monadic_phantom_render_Projection_pending=null;
		}
		if(this._OV_cn_monadic_phantom_render_Projection_projected==null)
			throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("illegal projecting"));
	}
	this._OV_cn_monadic_phantom_render_Projection_projected._OM_setVisible1(this._OV_cn_monadic_phantom_render_Visualizing_visible);
	if(this._OV_cn_monadic_phantom_render_Visualizing_visible)
	{
		this._OV_cn_monadic_phantom_render_Projection_projected._OM_moveTo2(this._OV_cn_monadic_phantom_render_Visualizing_offsetX+this._OV_cn_monadic_phantom_render_Projection_asset._OM_getOffsetX(),this._OV_cn_monadic_phantom_render_Visualizing_offsetY+this._OV_cn_monadic_phantom_render_Projection_asset._OM_getOffsetY());
		this._OV_cn_monadic_phantom_render_Projection_projected._OM_setZIndex1(this._OV_cn_monadic_phantom_render_Visualizing_offsetZ+this._OV_cn_monadic_phantom_render_Projection_asset._OM_getOffsetZ());
	}
	if(this._OV_cn_monadic_phantom_render_Projection_cascaded!=null)
	{
		this._OV_cn_monadic_phantom_render_Projection_cascaded._OV_cn_monadic_phantom_render_Visualizing_visible=this._OV_cn_monadic_phantom_render_Projection_cascadez==0?false:this._OV_cn_monadic_phantom_render_Visualizing_visible;
		this._OV_cn_monadic_phantom_render_Projection_cascaded._OV_cn_monadic_phantom_render_Visualizing_offsetX=this._OV_cn_monadic_phantom_render_Visualizing_offsetX;
		this._OV_cn_monadic_phantom_render_Projection_cascaded._OV_cn_monadic_phantom_render_Visualizing_offsetY=this._OV_cn_monadic_phantom_render_Visualizing_offsetY;
		this._OV_cn_monadic_phantom_render_Projection_cascaded._OV_cn_monadic_phantom_render_Visualizing_offsetZ=this._OV_cn_monadic_phantom_render_Visualizing_offsetZ+this._OV_cn_monadic_phantom_render_Projection_cascadez;
		this._OV_cn_monadic_phantom_render_Projection_cascaded._OM_refresh();
	}
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Projection"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.render.Visualizing","cn.monadic.phantom.render.Projection"),new Array());
var _SC_cn_monadic_phantom_render_Projection=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Projection"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Projection"+' setup object binder');

function _SS_cn_monadic_phantom_render_Projection_bind(_SL_instance)
{
	_SL_instance._OM_bind1f=_SM_cn_monadic_phantom_render_Projection_bind1f;
	_SL_instance._OM_cn_monadic_phantom_render_Projection_bind1f=_SM_cn_monadic_phantom_render_Projection_bind1f;
	_SL_instance._OM_bind2b=_SM_cn_monadic_phantom_render_Projection_bind2b;
	_SL_instance._OM_cn_monadic_phantom_render_Projection_bind2b=_SM_cn_monadic_phantom_render_Projection_bind2b;
	_SL_instance._OM_cascade1=_SM_cn_monadic_phantom_render_Projection_cascade1;
	_SL_instance._OM_cn_monadic_phantom_render_Projection_cascade1=_SM_cn_monadic_phantom_render_Projection_cascade1;
	_SL_instance._OM_cascadeAt1=_SM_cn_monadic_phantom_render_Projection_cascadeAt1;
	_SL_instance._OM_cn_monadic_phantom_render_Projection_cascadeAt1=_SM_cn_monadic_phantom_render_Projection_cascadeAt1;
	_SL_instance._OM_count=_SM_cn_monadic_phantom_render_Projection_count;
	_SL_instance._OM_cn_monadic_phantom_render_Projection_count=_SM_cn_monadic_phantom_render_Projection_count;
	_SL_instance._OM_child1=_SM_cn_monadic_phantom_render_Projection_child1;
	_SL_instance._OM_cn_monadic_phantom_render_Projection_child1=_SM_cn_monadic_phantom_render_Projection_child1;
	_SL_instance._OM_manipulate1=_SM_cn_monadic_phantom_render_Projection_manipulate1;
	_SL_instance._OM_cn_monadic_phantom_render_Projection_manipulate1=_SM_cn_monadic_phantom_render_Projection_manipulate1;
	_SL_instance._OM_project=_SM_cn_monadic_phantom_render_Projection_project;
	_SL_instance._OM_cn_monadic_phantom_render_Projection_project=_SM_cn_monadic_phantom_render_Projection_project;
	_SL_instance._OM_measure1=_SM_cn_monadic_phantom_render_Projection_measure1;
	_SL_instance._OM_cn_monadic_phantom_render_Projection_measure1=_SM_cn_monadic_phantom_render_Projection_measure1;
	_SL_instance._OM_query1=_SM_cn_monadic_phantom_render_Projection_query1;
	_SL_instance._OM_cn_monadic_phantom_render_Projection_query1=_SM_cn_monadic_phantom_render_Projection_query1;
	_SL_instance._OM__x_online=_SM_cn_monadic_phantom_render_Projection__x_online;
	_SL_instance._OM_cn_monadic_phantom_render_Projection__x_online=_SM_cn_monadic_phantom_render_Projection__x_online;
	_SL_instance._OM__x_offline=_SM_cn_monadic_phantom_render_Projection__x_offline;
	_SL_instance._OM_cn_monadic_phantom_render_Projection__x_offline=_SM_cn_monadic_phantom_render_Projection__x_offline;
	_SL_instance._OM_refresh=_SM_cn_monadic_phantom_render_Projection_refresh;
	_SL_instance._OM_cn_monadic_phantom_render_Projection_refresh=_SM_cn_monadic_phantom_render_Projection_refresh;
	_SL_instance._OV_cn_monadic_phantom_render_Projection_projected=null;
	_SL_instance._OV_cn_monadic_phantom_render_Projection_asset=null;
	_SL_instance._OV_cn_monadic_phantom_render_Projection_parameters=null;
	_SL_instance._OV_cn_monadic_phantom_render_Projection_pending=null;
	_SL_instance._OV_cn_monadic_phantom_render_Projection_cascaded=null;
	_SL_instance._OV_cn_monadic_phantom_render_Projection_cascadez=0;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_render_Projection_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Projection"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Projection"+' setup object initialize');

function _SS_cn_monadic_phantom_render_Projection_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Projection"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.PureLayout"+' flush functions');

function _SO_cn_monadic_phantom_render_PureLayout_PureLayout()
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_render_PureLayout);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_render_PureLayout_init);
}
function _SM_cn_monadic_phantom_render_PureLayout_arrange5(_SL_node,_SL_indexa,_SL_x,_SL_y,_SL_z)
{
	_SL_node._OM_locate3(_SL_x,_SL_y,_SL_z+_SL_indexa);
	_SL_node._OM_render1(true);
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.PureLayout"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.render.PureLayout"),new Array("cn.monadic.phantom.render.Layout"));
var _SC_cn_monadic_phantom_render_PureLayout=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.PureLayout"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.PureLayout"+' setup object binder');

function _SS_cn_monadic_phantom_render_PureLayout_bind(_SL_instance)
{
	_SL_instance._OM_arrange5=_SM_cn_monadic_phantom_render_PureLayout_arrange5;
	_SL_instance._OM_cn_monadic_phantom_render_PureLayout_arrange5=_SM_cn_monadic_phantom_render_PureLayout_arrange5;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_render_PureLayout_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.PureLayout"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
	_SF_cn_monadic_phantom_render_PureLayout__=new _SO_cn_monadic_phantom_render_PureLayout_PureLayout();
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.PureLayout"+' setup object initialize');

function _SS_cn_monadic_phantom_render_PureLayout_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.PureLayout"+' setup funtions');

var _SF_cn_monadic_phantom_render_PureLayout__=null;
_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Slides"+' flush functions');

function _SO_cn_monadic_phantom_render_Slides_Slides1(_SL_idb)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_render_Slides);
	_SM_jazzy_lang_System_BIND2(this,_SO_cn_monadic_phantom_render_Visualizing_Visualizing1)._temp_(_SL_idb);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_render_Slides_init);
}
function _SM_cn_monadic_phantom_render_Slides_bind1h(_SL_c)
{
	this._OM__x_accept1(_SL_c);
	this._OV_cn_monadic_phantom_render_Slides_N=_SL_c.length;
	this._OV_cn_monadic_phantom_render_Slides_candidates=_SL_c;
}
function _SM_cn_monadic_phantom_render_Slides_count()
{
	return this._OV_cn_monadic_phantom_render_Slides_N;
}
function _SM_cn_monadic_phantom_render_Slides_child1(_SL_index)
{
	return this._OV_cn_monadic_phantom_render_Slides_candidates[_SL_index];
}
function _SM_cn_monadic_phantom_render_Slides_slide1(_SL_index)
{
	if(_SL_index<0||_SL_index>=this._OV_cn_monadic_phantom_render_Slides_N)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("parameter error"));
	this._OV_cn_monadic_phantom_render_Slides_n=_SL_index;
	if(this._OV_cn_monadic_phantom_render_Slides_candidates[_SL_index]!=this._OV_cn_monadic_phantom_render_Slides_visualized)
	{
		if(this._OV_cn_monadic_phantom_render_Slides_visualized!=null)
		{
			this._OV_cn_monadic_phantom_render_Slides_visualized._OM_render1(false);
		}
		this._OV_cn_monadic_phantom_render_Slides_visualized=this._OV_cn_monadic_phantom_render_Slides_candidates[_SL_index];
		this._OM_refresh();
	}
}
function _SM_cn_monadic_phantom_render_Slides_measure1(_SL_metaid)
{
	switch(_SL_metaid)
	{
		case _SF_cn_monadic_phantom_render_Slides_SLIDE:
			return this._OV_cn_monadic_phantom_render_Slides_n;
	}
	return this._OM_cn_monadic_phantom_render_Visualizing_measure1(_SL_metaid);
}
function _SM_cn_monadic_phantom_render_Slides_query1(_SL_metaname)
{
	return this._OM_cn_monadic_phantom_render_Visualizing_query1(_SL_metaname);
}
function _SM_cn_monadic_phantom_render_Slides_clipChildren()
{
	var _SL_x0b=this._OV_cn_monadic_phantom_render_Visualizing_offsetX;
	var _SL_y0a=this._OV_cn_monadic_phantom_render_Visualizing_offsetY;
	for(var _SL_ib=0;_SL_ib<this._OV_cn_monadic_phantom_render_Slides_N;_SL_ib++)
	{
		this._OV_cn_monadic_phantom_render_Slides_candidates[_SL_ib]._OM_locate3(this._OV_cn_monadic_phantom_render_Visualizing_offsetX,this._OV_cn_monadic_phantom_render_Visualizing_offsetY,this._OV_cn_monadic_phantom_render_Visualizing_offsetZ);
		this._OV_cn_monadic_phantom_render_Slides_candidates[_SL_ib]._OM_render1(true);
		var _SL_x1b=this._OV_cn_monadic_phantom_render_Slides_candidates[_SL_ib]._OM_measure1(_SF_cn_monadic_phantom_render_Visual_MAXIMUM_X);
		var _SL_y1b=this._OV_cn_monadic_phantom_render_Slides_candidates[_SL_ib]._OM_measure1(_SF_cn_monadic_phantom_render_Visual_MAXIMUM_Y);
		if(_SL_x1b>_SL_x0b)
			_SL_x0b=_SL_x1b;
		if(_SL_y1b>_SL_y0a)
			_SL_y0a=_SL_y1b;
		this._OV_cn_monadic_phantom_render_Slides_candidates[_SL_ib]._OM_render1(false);
	}
	this._OV_cn_monadic_phantom_render_Visualizing_width=_SL_x0b-this._OV_cn_monadic_phantom_render_Visualizing_offsetX;
	this._OV_cn_monadic_phantom_render_Visualizing_height=_SL_y0a-this._OV_cn_monadic_phantom_render_Visualizing_offsetY;
	this._OM_refresh();
}
function _SM_cn_monadic_phantom_render_Slides_refresh()
{
	if(this._OV_cn_monadic_phantom_render_Slides_visualized!=null)
	{
		if(this._OV_cn_monadic_phantom_render_Visualizing_visible)
			this._OV_cn_monadic_phantom_render_Slides_candidates[this._OV_cn_monadic_phantom_render_Slides_n]._OM_locate3(this._OV_cn_monadic_phantom_render_Visualizing_offsetX,this._OV_cn_monadic_phantom_render_Visualizing_offsetY,this._OV_cn_monadic_phantom_render_Visualizing_offsetZ);
		this._OV_cn_monadic_phantom_render_Slides_candidates[this._OV_cn_monadic_phantom_render_Slides_n]._OM_render1(this._OV_cn_monadic_phantom_render_Visualizing_visible);
	}
}
function _SM_cn_monadic_phantom_render_Slides__x_hitting1(_SL_t)
{
	if(this._OV_cn_monadic_phantom_render_Slides_visualized!=null)
		this._OV_cn_monadic_phantom_render_Slides_visualized._OM_hitting1(_SL_t);
}
function _SM_cn_monadic_phantom_render_Slides__x_online()
{
	if(this._OV_cn_monadic_phantom_render_Slides_candidates==null)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("not ready"));
	for(var _SL_ia=0;_SL_ia<this._OV_cn_monadic_phantom_render_Slides_N;_SL_ia++)
		this._OV_cn_monadic_phantom_render_Slides_candidates[_SL_ia]._OM_visualize1(this._OV_cn_monadic_phantom_render_Visualizing_root);
}
function _SM_cn_monadic_phantom_render_Slides__x_offline()
{
	for(var _SL_ia=0;_SL_ia<this._OV_cn_monadic_phantom_render_Slides_N;_SL_ia++)
		this._OV_cn_monadic_phantom_render_Slides_candidates[_SL_ia]._OM_visualize1(null);
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Slides"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.render.Visualizing","cn.monadic.phantom.render.Slides"),new Array());
var _SC_cn_monadic_phantom_render_Slides=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Slides"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Slides"+' setup object binder');

function _SS_cn_monadic_phantom_render_Slides_bind(_SL_instance)
{
	_SL_instance._OM_bind1h=_SM_cn_monadic_phantom_render_Slides_bind1h;
	_SL_instance._OM_cn_monadic_phantom_render_Slides_bind1h=_SM_cn_monadic_phantom_render_Slides_bind1h;
	_SL_instance._OM_count=_SM_cn_monadic_phantom_render_Slides_count;
	_SL_instance._OM_cn_monadic_phantom_render_Slides_count=_SM_cn_monadic_phantom_render_Slides_count;
	_SL_instance._OM_child1=_SM_cn_monadic_phantom_render_Slides_child1;
	_SL_instance._OM_cn_monadic_phantom_render_Slides_child1=_SM_cn_monadic_phantom_render_Slides_child1;
	_SL_instance._OM_slide1=_SM_cn_monadic_phantom_render_Slides_slide1;
	_SL_instance._OM_cn_monadic_phantom_render_Slides_slide1=_SM_cn_monadic_phantom_render_Slides_slide1;
	_SL_instance._OM_measure1=_SM_cn_monadic_phantom_render_Slides_measure1;
	_SL_instance._OM_cn_monadic_phantom_render_Slides_measure1=_SM_cn_monadic_phantom_render_Slides_measure1;
	_SL_instance._OM_query1=_SM_cn_monadic_phantom_render_Slides_query1;
	_SL_instance._OM_cn_monadic_phantom_render_Slides_query1=_SM_cn_monadic_phantom_render_Slides_query1;
	_SL_instance._OM_clipChildren=_SM_cn_monadic_phantom_render_Slides_clipChildren;
	_SL_instance._OM_cn_monadic_phantom_render_Slides_clipChildren=_SM_cn_monadic_phantom_render_Slides_clipChildren;
	_SL_instance._OM_refresh=_SM_cn_monadic_phantom_render_Slides_refresh;
	_SL_instance._OM_cn_monadic_phantom_render_Slides_refresh=_SM_cn_monadic_phantom_render_Slides_refresh;
	_SL_instance._OM__x_hitting1=_SM_cn_monadic_phantom_render_Slides__x_hitting1;
	_SL_instance._OM_cn_monadic_phantom_render_Slides__x_hitting1=_SM_cn_monadic_phantom_render_Slides__x_hitting1;
	_SL_instance._OM__x_online=_SM_cn_monadic_phantom_render_Slides__x_online;
	_SL_instance._OM_cn_monadic_phantom_render_Slides__x_online=_SM_cn_monadic_phantom_render_Slides__x_online;
	_SL_instance._OM__x_offline=_SM_cn_monadic_phantom_render_Slides__x_offline;
	_SL_instance._OM_cn_monadic_phantom_render_Slides__x_offline=_SM_cn_monadic_phantom_render_Slides__x_offline;
	_SL_instance._OV_cn_monadic_phantom_render_Slides_visualized=null;
	_SL_instance._OV_cn_monadic_phantom_render_Slides_candidates=null;
	_SL_instance._OV_cn_monadic_phantom_render_Slides_N=0;
	_SL_instance._OV_cn_monadic_phantom_render_Slides_n=0;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_render_Slides_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Slides"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Slides"+' setup object initialize');

function _SS_cn_monadic_phantom_render_Slides_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Slides"+' setup funtions');

var _SF_cn_monadic_phantom_render_Slides_SLIDE=88801;
_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Transient"+' flush functions');


_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Transient"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.render.Transient"),new Array());
var _SC_cn_monadic_phantom_render_Transient=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Transient"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Transient"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Transient"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapAdaptor"+' flush functions');



_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapAdaptor"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.render.TrapAdaptor"),new Array());
var _SC_cn_monadic_phantom_render_TrapAdaptor=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapAdaptor"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapAdaptor"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapAdaptor"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapAnalyzer"+' flush functions');



_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapAnalyzer"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.render.TrapAnalyzer"),new Array());
var _SC_cn_monadic_phantom_render_TrapAnalyzer=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapAnalyzer"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapAnalyzer"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapAnalyzer"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Trapped"+' flush functions');

function _SO_cn_monadic_phantom_render_Trapped_Trapped1(_SL_s)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_render_Trapped);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_render_Trapped_init);
	this._OV_cn_monadic_phantom_render_Trapped_signature=_SL_s;
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Trapped"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.render.Trapped"),new Array());
var _SC_cn_monadic_phantom_render_Trapped=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Trapped"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Trapped"+' setup object binder');

function _SS_cn_monadic_phantom_render_Trapped_bind(_SL_instance)
{
	_SL_instance._OV_cn_monadic_phantom_render_Trapped_signature=null;
	_SL_instance._OV_cn_monadic_phantom_render_Trapped_type=0;
	_SL_instance._OV_cn_monadic_phantom_render_Trapped_x=0;
	_SL_instance._OV_cn_monadic_phantom_render_Trapped_y=0;
	_SL_instance._OV_cn_monadic_phantom_render_Trapped_z=0;
	_SL_instance._OV_cn_monadic_phantom_render_Trapped_source=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_render_Trapped_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Trapped"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Trapped"+' setup object initialize');

function _SS_cn_monadic_phantom_render_Trapped_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Trapped"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapRadiance"+' flush functions');

function _SO_cn_monadic_phantom_render_TrapRadiance_TrapRadiance()
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_render_TrapRadiance);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_render_TrapRadiance_init);
	this._OV_cn_monadic_phantom_render_TrapRadiance_adaptors=_SM_jazzy_lang_System_newArray4("cn.monadic.phantom.render.TrapAdaptor",0,new Array(0,null),0);
	this._OV_cn_monadic_phantom_render_TrapRadiance_N=0;
}
function _SM_cn_monadic_phantom_render_TrapRadiance_append1b(_SL_hm)
{
	(this._OV_cn_monadic_phantom_render_TrapRadiance_adaptors).push(_SL_hm);
	this._OV_cn_monadic_phantom_render_TrapRadiance_N=this._OV_cn_monadic_phantom_render_TrapRadiance_adaptors.length;
}
function _SM_cn_monadic_phantom_render_TrapRadiance_bind1j(_SL_r)
{
	this._OV_cn_monadic_phantom_render_TrapRadiance_processor=_SL_r;
}
function _SM_cn_monadic_phantom_render_TrapRadiance_analyze1(_SL_taa)
{
	if(_SL_taa==null)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("null parameter"));
	this._OV_cn_monadic_phantom_render_TrapRadiance_analyzer=_SL_taa;
}
function _SM_cn_monadic_phantom_render_TrapRadiance_immit1(_SL_source)
{
	var _SL_tj=_SL_source;
	if(this._OV_cn_monadic_phantom_render_TrapRadiance_analyzer._OM_consume1a(_SL_tj))
		return;
	for(var _SL_ib=0;_SL_ib<this._OV_cn_monadic_phantom_render_TrapRadiance_N;_SL_ib++)
	{
		var _SL_tx=this._OV_cn_monadic_phantom_render_TrapRadiance_adaptors[_SL_ib]._OM_adapt1(_SL_tj);
		while(_SL_tx!=null)
		{
			this._OV_cn_monadic_phantom_render_TrapRadiance_processor._OM_radiate1(_SL_tx);
			_SL_tx=_SL_tx._OM_cascaded();
		}
	}
}
function _SM_cn_monadic_phantom_render_TrapRadiance_evolve2(_SL_sequenceb,_SL_timestampb)
{
	for(var _SL_ib=0;_SL_ib<this._OV_cn_monadic_phantom_render_TrapRadiance_N;_SL_ib++)
	{
		var _SL_tx=this._OV_cn_monadic_phantom_render_TrapRadiance_adaptors[_SL_ib]._OM_yield1(this._OV_cn_monadic_phantom_render_TrapRadiance_analyzer);
		while(_SL_tx!=null)
		{
			this._OV_cn_monadic_phantom_render_TrapRadiance_processor._OM_radiate1(_SL_tx);
			_SL_tx=_SL_tx._OM_cascaded();
		}
	}
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapRadiance"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.render.TrapRadiance"),new Array("cn.monadic.phantom.causal.Radiant","cn.monadic.phantom.render.Transient"));
var _SC_cn_monadic_phantom_render_TrapRadiance=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapRadiance"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapRadiance"+' setup object binder');

function _SS_cn_monadic_phantom_render_TrapRadiance_bind(_SL_instance)
{
	_SL_instance._OM_append1b=_SM_cn_monadic_phantom_render_TrapRadiance_append1b;
	_SL_instance._OM_cn_monadic_phantom_render_TrapRadiance_append1b=_SM_cn_monadic_phantom_render_TrapRadiance_append1b;
	_SL_instance._OM_bind1j=_SM_cn_monadic_phantom_render_TrapRadiance_bind1j;
	_SL_instance._OM_cn_monadic_phantom_render_TrapRadiance_bind1j=_SM_cn_monadic_phantom_render_TrapRadiance_bind1j;
	_SL_instance._OM_analyze1=_SM_cn_monadic_phantom_render_TrapRadiance_analyze1;
	_SL_instance._OM_cn_monadic_phantom_render_TrapRadiance_analyze1=_SM_cn_monadic_phantom_render_TrapRadiance_analyze1;
	_SL_instance._OM_immit1=_SM_cn_monadic_phantom_render_TrapRadiance_immit1;
	_SL_instance._OM_cn_monadic_phantom_render_TrapRadiance_immit1=_SM_cn_monadic_phantom_render_TrapRadiance_immit1;
	_SL_instance._OM_evolve2=_SM_cn_monadic_phantom_render_TrapRadiance_evolve2;
	_SL_instance._OM_cn_monadic_phantom_render_TrapRadiance_evolve2=_SM_cn_monadic_phantom_render_TrapRadiance_evolve2;
	_SL_instance._OV_cn_monadic_phantom_render_TrapRadiance_processor=null;
	_SL_instance._OV_cn_monadic_phantom_render_TrapRadiance_analyzer=null;
	_SL_instance._OV_cn_monadic_phantom_render_TrapRadiance_adaptors=null;
	_SL_instance._OV_cn_monadic_phantom_render_TrapRadiance_N=0;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_render_TrapRadiance_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapRadiance"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapRadiance"+' setup object initialize');

function _SS_cn_monadic_phantom_render_TrapRadiance_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapRadiance"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapReplica"+' flush functions');

function _SO_cn_monadic_phantom_render_TrapReplica_TrapReplica1(_SL_target)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_render_TrapReplica);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_render_TrapReplica_init);
	this._OV_cn_monadic_phantom_render_TrapReplica_tracking=new _SO_cn_monadic_phantom_causal_AxisThermal_AxisThermal1(2);
	this._OV_cn_monadic_phantom_render_TrapReplica_tracking._OM_bind1b(_SL_target);
	this._OV_cn_monadic_phantom_render_TrapReplica_reference=_SM_jazzy_lang_System_currentTimeMillis();
}
function _SM_cn_monadic_phantom_render_TrapReplica_identifier()
{
	return "trap";
}
function _SM_cn_monadic_phantom_render_TrapReplica_bind1j(_SL_r)
{
	this._OV_cn_monadic_phantom_render_TrapReplica_cascaded=_SL_r;
}
function _SM_cn_monadic_phantom_render_TrapReplica_replicate1(_SL_pa)
{
	this._OV_cn_monadic_phantom_render_TrapReplica_pointer=_SL_pa;
}
function _SM_cn_monadic_phantom_render_TrapReplica_radiate1(_SL_t)
{
	this._OV_cn_monadic_phantom_render_TrapReplica_reference=_SM_jazzy_lang_System_currentTimeMillis();
	this._OV_cn_monadic_phantom_render_TrapReplica_tracking._OM_set2a(1,this._OV_cn_monadic_phantom_render_TrapReplica_pointer._OM_getX());
	this._OV_cn_monadic_phantom_render_TrapReplica_tracking._OM_set2a(2,this._OV_cn_monadic_phantom_render_TrapReplica_pointer._OM_getY());
	this._OV_cn_monadic_phantom_render_TrapReplica_cascaded._OM_radiate1(this._OV_cn_monadic_phantom_render_TrapReplica_tracking);
	this._OV_cn_monadic_phantom_render_TrapReplica_cascaded._OM_radiate1(_SL_t);
}
function _SM_cn_monadic_phantom_render_TrapReplica_update()
{
	var _SL_t2b=_SM_jazzy_lang_System_currentTimeMillis();
	if(_SL_t2b-this._OV_cn_monadic_phantom_render_TrapReplica_reference>250)
	{
		this._OV_cn_monadic_phantom_render_TrapReplica_tracking._OM_set2a(1,this._OV_cn_monadic_phantom_render_TrapReplica_pointer._OM_getX());
		this._OV_cn_monadic_phantom_render_TrapReplica_tracking._OM_set2a(2,this._OV_cn_monadic_phantom_render_TrapReplica_pointer._OM_getY());
		this._OV_cn_monadic_phantom_render_TrapReplica_cascaded._OM_radiate1(this._OV_cn_monadic_phantom_render_TrapReplica_tracking);
		this._OV_cn_monadic_phantom_render_TrapReplica_reference=_SL_t2b;
	}
}
function _SM_cn_monadic_phantom_render_TrapReplica_evolve2(_SL_sequenceb,_SL_timestampb)
{
	if(_SL_timestampb-this._OV_cn_monadic_phantom_render_TrapReplica_reference>250)
	{
		this._OV_cn_monadic_phantom_render_TrapReplica_tracking._OM_set2a(1,this._OV_cn_monadic_phantom_render_TrapReplica_pointer._OM_getX());
		this._OV_cn_monadic_phantom_render_TrapReplica_tracking._OM_set2a(2,this._OV_cn_monadic_phantom_render_TrapReplica_pointer._OM_getY());
		this._OV_cn_monadic_phantom_render_TrapReplica_cascaded._OM_radiate1(this._OV_cn_monadic_phantom_render_TrapReplica_tracking);
		this._OV_cn_monadic_phantom_render_TrapReplica_reference=_SL_timestampb;
	}
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapReplica"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.render.TrapReplica"),new Array("cn.monadic.phantom.causal.Radiative","cn.monadic.phantom.render.Transient"));
var _SC_cn_monadic_phantom_render_TrapReplica=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapReplica"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapReplica"+' setup object binder');

function _SS_cn_monadic_phantom_render_TrapReplica_bind(_SL_instance)
{
	_SL_instance._OM_identifier=_SM_cn_monadic_phantom_render_TrapReplica_identifier;
	_SL_instance._OM_cn_monadic_phantom_render_TrapReplica_identifier=_SM_cn_monadic_phantom_render_TrapReplica_identifier;
	_SL_instance._OM_bind1j=_SM_cn_monadic_phantom_render_TrapReplica_bind1j;
	_SL_instance._OM_cn_monadic_phantom_render_TrapReplica_bind1j=_SM_cn_monadic_phantom_render_TrapReplica_bind1j;
	_SL_instance._OM_replicate1=_SM_cn_monadic_phantom_render_TrapReplica_replicate1;
	_SL_instance._OM_cn_monadic_phantom_render_TrapReplica_replicate1=_SM_cn_monadic_phantom_render_TrapReplica_replicate1;
	_SL_instance._OM_radiate1=_SM_cn_monadic_phantom_render_TrapReplica_radiate1;
	_SL_instance._OM_cn_monadic_phantom_render_TrapReplica_radiate1=_SM_cn_monadic_phantom_render_TrapReplica_radiate1;
	_SL_instance._OM_update=_SM_cn_monadic_phantom_render_TrapReplica_update;
	_SL_instance._OM_cn_monadic_phantom_render_TrapReplica_update=_SM_cn_monadic_phantom_render_TrapReplica_update;
	_SL_instance._OM_evolve2=_SM_cn_monadic_phantom_render_TrapReplica_evolve2;
	_SL_instance._OM_cn_monadic_phantom_render_TrapReplica_evolve2=_SM_cn_monadic_phantom_render_TrapReplica_evolve2;
	_SL_instance._OV_cn_monadic_phantom_render_TrapReplica_tracking=null;
	_SL_instance._OV_cn_monadic_phantom_render_TrapReplica_cascaded=null;
	_SL_instance._OV_cn_monadic_phantom_render_TrapReplica_pointer=null;
	_SL_instance._OV_cn_monadic_phantom_render_TrapReplica_reference=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_render_TrapReplica_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapReplica"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapReplica"+' setup object initialize');

function _SS_cn_monadic_phantom_render_TrapReplica_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.TrapReplica"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Visual"+' flush functions');















_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Visual"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.render.Visual"),new Array());
var _SC_cn_monadic_phantom_render_Visual=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Visual"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Visual"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Visual"+' setup funtions');

var _SF_cn_monadic_phantom_render_Visual_WIDTH=77701;
var _SF_cn_monadic_phantom_render_Visual_HEIGHT=77702;
var _SF_cn_monadic_phantom_render_Visual_CHILDREN=77703;
var _SF_cn_monadic_phantom_render_Visual_OFFSET_X=77711;
var _SF_cn_monadic_phantom_render_Visual_OFFSET_Y=77712;
var _SF_cn_monadic_phantom_render_Visual_OFFSET_Z=77713;
var _SF_cn_monadic_phantom_render_Visual_MAXIMUM_X=77715;
var _SF_cn_monadic_phantom_render_Visual_MAXIMUM_Y=77716;
var _SF_cn_monadic_phantom_render_Visual_CEILING_Z=77717;
_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Visualization"+' flush functions');

function _SO_cn_monadic_phantom_render_Visualization_Visualization3(_SL_idb,_SL_wk,_SL_hl)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_render_Visualization);
	_SM_jazzy_lang_System_BIND2(this,_SO_cn_monadic_phantom_render_Visualizing_Visualizing1)._temp_(_SL_idb);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_render_Visualization_init);
	this._OV_cn_monadic_phantom_render_Visualizing_width=_SL_wk;
	this._OV_cn_monadic_phantom_render_Visualizing_height=_SL_hl;
	this._OV_cn_monadic_phantom_render_Visualization_cause=new _SO_cn_monadic_phantom_render_Trapped_Trapped1("trap@"+_SL_idb);
	this._OV_cn_monadic_phantom_render_Visualization_sequence=0;
	this._OV_cn_monadic_phantom_render_Visualization_automata=_SM_jazzy_lang_System_newArray4("cn.monadic.phantom.render.Transient",0,new Array(0,null),0);
}
function _SM_cn_monadic_phantom_render_Visualization_attach1(_SL_hm)
{
	if(this._OV_cn_monadic_phantom_render_Visualizing_activated)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("reenter"));
	if(this._OV_cn_monadic_phantom_render_Visualization_visualizing==null)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("not ready"));
	this._OV_cn_monadic_phantom_render_Visualization_host=_SL_hm;
	this._OV_cn_monadic_phantom_render_Visualization_localized=this._OV_cn_monadic_phantom_render_Visualization_host._OM_derive3(null,"div",_SM_jazzy_dom_core_Style_clipAt4(0,0,this._OV_cn_monadic_phantom_render_Visualizing_width,this._OV_cn_monadic_phantom_render_Visualizing_height)+_SV_jazzy_dom_core_Style_HIDE);
	this._OV_cn_monadic_phantom_render_Visualizing_activated=true;
	this._OM__x_online();
}
function _SM_cn_monadic_phantom_render_Visualization_element()
{
	return this._OV_cn_monadic_phantom_render_Visualization_localized;
}
function _SM_cn_monadic_phantom_render_Visualization_bind1d(_SL_root)
{
	this._OV_cn_monadic_phantom_render_Visualization_visualizing=_SL_root;
	this._OV_cn_monadic_phantom_render_Visualization_visualizing._OM_attach1a(this);
	this._OM_refresh();
}
function _SM_cn_monadic_phantom_render_Visualization_count()
{
	if(this._OV_cn_monadic_phantom_render_Visualization_visualizing==null)
		return 0;
	else
		return 1;
}
function _SM_cn_monadic_phantom_render_Visualization_child1(_SL_index)
{
	if(_SL_index==0)
		return this._OV_cn_monadic_phantom_render_Visualization_visualizing;
	else
		return null;
}
function _SM_cn_monadic_phantom_render_Visualization_refresh()
{
	if(this._OV_cn_monadic_phantom_render_Visualization_visualizing!=null)
	{
		this._OV_cn_monadic_phantom_render_Visualization_visualizing._OM_render1(this._OV_cn_monadic_phantom_render_Visualizing_visible);
		if(this._OV_cn_monadic_phantom_render_Visualizing_visible)
		{
			this._OV_cn_monadic_phantom_render_Visualization_visualizing._OM_locate3(this._OV_cn_monadic_phantom_render_Visualizing_offsetX,this._OV_cn_monadic_phantom_render_Visualizing_offsetY,this._OV_cn_monadic_phantom_render_Visualizing_offsetZ);
		}
	}
}
function _SM_cn_monadic_phantom_render_Visualization__x_online()
{
	if(this._OV_cn_monadic_phantom_render_Visualization_localized!=null&&this._OV_cn_monadic_phantom_render_Visualization_visualizing!=null)
	{
		this._OV_cn_monadic_phantom_render_Visualization_visualizing._OM_render1(this._OV_cn_monadic_phantom_render_Visualizing_visible);
		this._OV_cn_monadic_phantom_render_Visualization_visualizing._OM_visualize1(this);
		if(this._OV_cn_monadic_phantom_render_Visualizing_visible)
		{
			this._OV_cn_monadic_phantom_render_Visualization_visualizing._OM_locate3(this._OV_cn_monadic_phantom_render_Visualizing_offsetX,this._OV_cn_monadic_phantom_render_Visualizing_offsetY,this._OV_cn_monadic_phantom_render_Visualizing_offsetZ);
		}
	}
}
function _SM_cn_monadic_phantom_render_Visualization__x_offline()
{
}
function _SM_cn_monadic_phantom_render_Visualization_moveTo2(_SL_xb,_SL_ya)
{
	this._OV_cn_monadic_phantom_render_Visualization_shiftX=_SL_xb;
	this._OV_cn_monadic_phantom_render_Visualization_shiftY=_SL_ya;
	this._OV_cn_monadic_phantom_render_Visualization_localized._OM_moveTo2(_SL_xb,_SL_ya);
}
function _SM_cn_monadic_phantom_render_Visualization_mount1(_SL_t)
{
	if(this._OV_cn_monadic_phantom_render_Visualization_localized!=null)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("cannot mount on root"));
	this._OM_cn_monadic_phantom_render_Visualizing_mount1(_SL_t);
}
function _SM_cn_monadic_phantom_render_Visualization_enablePointer1(_SL_binder)
{
	if(this._OV_cn_monadic_phantom_render_Visualization_overlay!=null)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("reenter"));
	if(this._OV_cn_monadic_phantom_render_Visualizing_width<=0||this._OV_cn_monadic_phantom_render_Visualizing_height<=0)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("not bound"));
	if(_SV_jazzy_lang_System_COMPATIBLE_MSIE)
	{
		this._OV_cn_monadic_phantom_render_Visualization_overlay=this._OV_cn_monadic_phantom_render_Visualization_localized._OM_derive3(null,"div",_SM_jazzy_dom_core_Style_clipAt4(0,0,this._OV_cn_monadic_phantom_render_Visualizing_width,this._OV_cn_monadic_phantom_render_Visualizing_height)+_SV_jazzy_dom_core_Style_HIDE+";background-color: rgba(255,255,255,0);cursor: crosshair;");
	}
	else
	{
		this._OV_cn_monadic_phantom_render_Visualization_overlay=this._OV_cn_monadic_phantom_render_Visualization_localized._OM_derive3(null,"div",_SM_jazzy_dom_core_Style_clipAt4(0,0,this._OV_cn_monadic_phantom_render_Visualizing_width,this._OV_cn_monadic_phantom_render_Visualizing_height)+_SV_jazzy_dom_core_Style_HIDE+"cursor: crosshair;");
	}
	this._OV_cn_monadic_phantom_render_Visualization_overlay._OM_setZIndex1(10000);
	var _SL_selfa=this;
	var _SL_handlera=function (_SL_pk)
	{
		_SL_selfa._OV_cn_monadic_phantom_render_Visualization_cause._OV_cn_monadic_phantom_render_Trapped_x=_SL_pk._OM_getX();
		_SL_selfa._OV_cn_monadic_phantom_render_Visualization_cause._OV_cn_monadic_phantom_render_Trapped_y=_SL_pk._OM_getY();
		_SL_selfa._OV_cn_monadic_phantom_render_Visualization_cause._OV_cn_monadic_phantom_render_Trapped_z=-1;
		_SL_selfa._OV_cn_monadic_phantom_render_Visualization_cause._OV_cn_monadic_phantom_render_Trapped_type=_SL_pk._OM_getState();
		_SL_selfa._OV_cn_monadic_phantom_render_Visualization_cause._OV_cn_monadic_phantom_render_Trapped_source=null;
		_SL_selfa._OV_cn_monadic_phantom_render_Visualization_visualizing._OM_hitting1(_SL_selfa._OV_cn_monadic_phantom_render_Visualization_cause);
		if(_SL_selfa._OV_cn_monadic_phantom_render_Visualization_cause._OV_cn_monadic_phantom_render_Trapped_z>0)
		{
			_SL_selfa._OV_cn_monadic_phantom_render_Visualization_cause._OV_cn_monadic_phantom_render_Trapped_source._OM_hitted1(_SL_selfa._OV_cn_monadic_phantom_render_Visualization_cause);
			_SL_selfa._OM_hitted1(_SL_selfa._OV_cn_monadic_phantom_render_Visualization_cause);
		}
		else
		{
			_SL_selfa._OM_hitted1(_SL_selfa._OV_cn_monadic_phantom_render_Visualization_cause);
		}
	};
	this._OV_cn_monadic_phantom_render_Visualization_pointer=_SL_binder(this._OV_cn_monadic_phantom_render_Visualization_overlay,_SL_handlera);
	this._OV_cn_monadic_phantom_render_Visualization_pointer._OM_calibrate2(this._OV_cn_monadic_phantom_render_Visualization_shiftX,this._OV_cn_monadic_phantom_render_Visualization_shiftY);
}
function _SM_cn_monadic_phantom_render_Visualization_track()
{
	return this._OV_cn_monadic_phantom_render_Visualization_pointer;
}
function _SM_cn_monadic_phantom_render_Visualization_engage1(_SL_t)
{
	for(var _SL_i=0;_SL_i<this._OV_cn_monadic_phantom_render_Visualization_automata.length;_SL_i++)
	{
		if(this._OV_cn_monadic_phantom_render_Visualization_automata[_SL_i]==null)
		{
			this._OV_cn_monadic_phantom_render_Visualization_automata[_SL_i]=_SL_t;
			return _SL_i;
		}
	}
	this._OV_cn_monadic_phantom_render_Visualization_automata[this._OV_cn_monadic_phantom_render_Visualization_automata.length]=_SL_t;
	return this._OV_cn_monadic_phantom_render_Visualization_automata.length-1;
}
function _SM_cn_monadic_phantom_render_Visualization_dismiss2(_SL_stub,_SL_ta)
{
	if(_SL_stub<0||_SL_stub>=this._OV_cn_monadic_phantom_render_Visualization_automata.length)
	{
		return;
	}
	else
		if(this._OV_cn_monadic_phantom_render_Visualization_automata[_SL_stub]==_SL_ta)
		{
			this._OV_cn_monadic_phantom_render_Visualization_automata[_SL_stub]=null;
		}
}
function _SM_cn_monadic_phantom_render_Visualization_evolve()
{
	this._OV_cn_monadic_phantom_render_Visualization_sequence=this._OV_cn_monadic_phantom_render_Visualization_sequence+1;
	var _SL_timestampb=_SM_jazzy_lang_System_currentTimeMillis();
	var _SL_lend=this._OV_cn_monadic_phantom_render_Visualization_automata.length;
	for(var _SL_ib=0;_SL_ib<_SL_lend;_SL_ib++)
	{
		if(this._OV_cn_monadic_phantom_render_Visualization_automata[_SL_ib]!=null)
		{
			this._OV_cn_monadic_phantom_render_Visualization_automata[_SL_ib]._OM_evolve2(this._OV_cn_monadic_phantom_render_Visualization_sequence,_SL_timestampb);
		}
	}
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Visualization"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.render.Visualizing","cn.monadic.phantom.render.Visualization"),new Array());
var _SC_cn_monadic_phantom_render_Visualization=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Visualization"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Visualization"+' setup object binder');

function _SS_cn_monadic_phantom_render_Visualization_bind(_SL_instance)
{
	_SL_instance._OM_attach1=_SM_cn_monadic_phantom_render_Visualization_attach1;
	_SL_instance._OM_cn_monadic_phantom_render_Visualization_attach1=_SM_cn_monadic_phantom_render_Visualization_attach1;
	_SL_instance._OM_element=_SM_cn_monadic_phantom_render_Visualization_element;
	_SL_instance._OM_cn_monadic_phantom_render_Visualization_element=_SM_cn_monadic_phantom_render_Visualization_element;
	_SL_instance._OM_bind1d=_SM_cn_monadic_phantom_render_Visualization_bind1d;
	_SL_instance._OM_cn_monadic_phantom_render_Visualization_bind1d=_SM_cn_monadic_phantom_render_Visualization_bind1d;
	_SL_instance._OM_count=_SM_cn_monadic_phantom_render_Visualization_count;
	_SL_instance._OM_cn_monadic_phantom_render_Visualization_count=_SM_cn_monadic_phantom_render_Visualization_count;
	_SL_instance._OM_child1=_SM_cn_monadic_phantom_render_Visualization_child1;
	_SL_instance._OM_cn_monadic_phantom_render_Visualization_child1=_SM_cn_monadic_phantom_render_Visualization_child1;
	_SL_instance._OM_refresh=_SM_cn_monadic_phantom_render_Visualization_refresh;
	_SL_instance._OM_cn_monadic_phantom_render_Visualization_refresh=_SM_cn_monadic_phantom_render_Visualization_refresh;
	_SL_instance._OM__x_online=_SM_cn_monadic_phantom_render_Visualization__x_online;
	_SL_instance._OM_cn_monadic_phantom_render_Visualization__x_online=_SM_cn_monadic_phantom_render_Visualization__x_online;
	_SL_instance._OM__x_offline=_SM_cn_monadic_phantom_render_Visualization__x_offline;
	_SL_instance._OM_cn_monadic_phantom_render_Visualization__x_offline=_SM_cn_monadic_phantom_render_Visualization__x_offline;
	_SL_instance._OM_moveTo2=_SM_cn_monadic_phantom_render_Visualization_moveTo2;
	_SL_instance._OM_cn_monadic_phantom_render_Visualization_moveTo2=_SM_cn_monadic_phantom_render_Visualization_moveTo2;
	_SL_instance._OM_mount1=_SM_cn_monadic_phantom_render_Visualization_mount1;
	_SL_instance._OM_cn_monadic_phantom_render_Visualization_mount1=_SM_cn_monadic_phantom_render_Visualization_mount1;
	_SL_instance._OM_enablePointer1=_SM_cn_monadic_phantom_render_Visualization_enablePointer1;
	_SL_instance._OM_cn_monadic_phantom_render_Visualization_enablePointer1=_SM_cn_monadic_phantom_render_Visualization_enablePointer1;
	_SL_instance._OM_track=_SM_cn_monadic_phantom_render_Visualization_track;
	_SL_instance._OM_cn_monadic_phantom_render_Visualization_track=_SM_cn_monadic_phantom_render_Visualization_track;
	_SL_instance._OM_engage1=_SM_cn_monadic_phantom_render_Visualization_engage1;
	_SL_instance._OM_cn_monadic_phantom_render_Visualization_engage1=_SM_cn_monadic_phantom_render_Visualization_engage1;
	_SL_instance._OM_dismiss2=_SM_cn_monadic_phantom_render_Visualization_dismiss2;
	_SL_instance._OM_cn_monadic_phantom_render_Visualization_dismiss2=_SM_cn_monadic_phantom_render_Visualization_dismiss2;
	_SL_instance._OM_evolve=_SM_cn_monadic_phantom_render_Visualization_evolve;
	_SL_instance._OM_cn_monadic_phantom_render_Visualization_evolve=_SM_cn_monadic_phantom_render_Visualization_evolve;
	_SL_instance._OV_cn_monadic_phantom_render_Visualization_host=null;
	_SL_instance._OV_cn_monadic_phantom_render_Visualization_localized=null;
	_SL_instance._OV_cn_monadic_phantom_render_Visualization_overlay=null;
	_SL_instance._OV_cn_monadic_phantom_render_Visualization_visualizing=null;
	_SL_instance._OV_cn_monadic_phantom_render_Visualization_cause=null;
	_SL_instance._OV_cn_monadic_phantom_render_Visualization_sequence=0;
	_SL_instance._OV_cn_monadic_phantom_render_Visualization_automata=null;
	_SL_instance._OV_cn_monadic_phantom_render_Visualization_shiftX=0;
	_SL_instance._OV_cn_monadic_phantom_render_Visualization_shiftY=0;
	_SL_instance._OV_cn_monadic_phantom_render_Visualization_pointer=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_render_Visualization_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Visualization"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Visualization"+' setup object initialize');

function _SS_cn_monadic_phantom_render_Visualization_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Visualization"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Visualizing"+' flush functions');

function _SO_cn_monadic_phantom_render_Visualizing_Visualizing()
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_render_Visualizing);
	_SM_jazzy_lang_System_BIND2(this,_SO_cn_monadic_phantom_render_Visualizing_Visualizing1)._temp_("");
}
function _SO_cn_monadic_phantom_render_Visualizing_Visualizing1(_SL_idb)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_render_Visualizing);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_render_Visualizing_init);
	this._OV_cn_monadic_phantom_render_Visualizing_identifier=_SL_idb;
	this._OV_cn_monadic_phantom_render_Visualizing_width=-1;
	this._OV_cn_monadic_phantom_render_Visualizing_height=-1;
	this._OV_cn_monadic_phantom_render_Visualizing_properties=_SM_jazzy_lang_System_attain();
	this._OV_cn_monadic_phantom_render_Visualizing_trapmask=-1;
}
function _SM_cn_monadic_phantom_render_Visualizing_identifier()
{
	return this._OV_cn_monadic_phantom_render_Visualizing_identifier;
}
function _SM_cn_monadic_phantom_render_Visualizing_attach1a(_SL_pa)
{
	this._OV_cn_monadic_phantom_render_Visualizing_host=_SL_pa;
}
function _SM_cn_monadic_phantom_render_Visualizing_parent()
{
	return this._OV_cn_monadic_phantom_render_Visualizing_host;
}
function _SM_cn_monadic_phantom_render_Visualizing_count()
{
	return 0;
}
function _SM_cn_monadic_phantom_render_Visualizing_child1(_SL_index)
{
	return null;
}
function _SM_cn_monadic_phantom_render_Visualizing_bound2(_SL_w,_SL_h)
{
	this._OV_cn_monadic_phantom_render_Visualizing_width=_SL_w;
	this._OV_cn_monadic_phantom_render_Visualizing_height=_SL_h;
}
function _SM_cn_monadic_phantom_render_Visualizing_visible()
{
	return this._OV_cn_monadic_phantom_render_Visualizing_visible;
}
function _SM_cn_monadic_phantom_render_Visualizing_measure1(_SL_metaid)
{
	switch(_SL_metaid)
	{
		case _SF_cn_monadic_phantom_render_Visual_WIDTH:
			return this._OV_cn_monadic_phantom_render_Visualizing_width;
		case _SF_cn_monadic_phantom_render_Visual_HEIGHT:
			return this._OV_cn_monadic_phantom_render_Visualizing_height;
		case _SF_cn_monadic_phantom_render_Visual_MAXIMUM_X:
			return this._OV_cn_monadic_phantom_render_Visualizing_offsetX+this._OV_cn_monadic_phantom_render_Visualizing_width;
		case _SF_cn_monadic_phantom_render_Visual_MAXIMUM_Y:
			return this._OV_cn_monadic_phantom_render_Visualizing_offsetY+this._OV_cn_monadic_phantom_render_Visualizing_height;
		case _SF_cn_monadic_phantom_render_Visual_CHILDREN:
			return this._OM_count();
		case _SF_cn_monadic_phantom_render_Visual_OFFSET_X:
			return this._OV_cn_monadic_phantom_render_Visualizing_offsetX;
		case _SF_cn_monadic_phantom_render_Visual_OFFSET_Y:
			return this._OV_cn_monadic_phantom_render_Visualizing_offsetY;
		case _SF_cn_monadic_phantom_render_Visual_OFFSET_Z:
			return this._OV_cn_monadic_phantom_render_Visualizing_offsetZ;
		case _SF_cn_monadic_phantom_render_Visual_CEILING_Z:
			return this._OV_cn_monadic_phantom_render_Visualizing_ceilingZ;
		default:
			;
	}
	return -1;
}
function _SM_cn_monadic_phantom_render_Visualizing_record2(_SL_keya,_SL_valueb)
{
	this._OV_cn_monadic_phantom_render_Visualizing_properties[_SL_keya]=_SL_valueb;
}
function _SM_cn_monadic_phantom_render_Visualizing_query1(_SL_metaname)
{
	return this._OV_cn_monadic_phantom_render_Visualizing_properties[_SL_metaname];
}
function _SM_cn_monadic_phantom_render_Visualizing_locate3(_SL_xb,_SL_ya,_SL_zf)
{
	this._OV_cn_monadic_phantom_render_Visualizing_offsetX=_SL_xb;
	this._OV_cn_monadic_phantom_render_Visualizing_offsetY=_SL_ya;
	this._OV_cn_monadic_phantom_render_Visualizing_offsetZ=_SL_zf;
	if(this._OV_cn_monadic_phantom_render_Visualizing_trapper!=null)
		this._OV_cn_monadic_phantom_render_Visualizing_ceilingZ=this._OV_cn_monadic_phantom_render_Visualizing_offsetZ+this._OV_cn_monadic_phantom_render_Visualizing_trapper._OM_getOffsetZ();
	if(this._OV_cn_monadic_phantom_render_Visualizing_activated)
	{
		this._OM_refresh();
	}
}
function _SM_cn_monadic_phantom_render_Visualizing_render1(_SL_v)
{
	this._OV_cn_monadic_phantom_render_Visualizing_visible=_SL_v;
	if(this._OV_cn_monadic_phantom_render_Visualizing_activated)
	{
		this._OM_refresh();
	}
}
function _SM_cn_monadic_phantom_render_Visualizing_visualize1(_SL_c)
{
	if(_SL_c!=this._OV_cn_monadic_phantom_render_Visualizing_root&&this._OV_cn_monadic_phantom_render_Visualizing_root!=null)
	{
		this._OV_cn_monadic_phantom_render_Visualizing_activated=false;
		if(this._OV_cn_monadic_phantom_render_Visualizing_engagement>=0)
		{
			this._OV_cn_monadic_phantom_render_Visualizing_root._OM_dismiss2(this._OV_cn_monadic_phantom_render_Visualizing_engagement,this);
		}
		this._OM__x_offline();
	}
	this._OV_cn_monadic_phantom_render_Visualizing_root=_SL_c;
	if(this._OV_cn_monadic_phantom_render_Visualizing_root!=null)
	{
		this._OM__x_online();
		if(this._OV_cn_monadic_phantom_render_Visualizing_alternation!=null)
			this._OV_cn_monadic_phantom_render_Visualizing_engagement=this._OV_cn_monadic_phantom_render_Visualizing_root._OM_engage1(this);
		else
			this._OV_cn_monadic_phantom_render_Visualizing_engagement=-1;
		this._OV_cn_monadic_phantom_render_Visualizing_activated=true;
		this._OM_refresh();
	}
}
function _SM_cn_monadic_phantom_render_Visualizing_mount1(_SL_t)
{
	this._OV_cn_monadic_phantom_render_Visualizing_trapper=_SL_t;
	if(this._OV_cn_monadic_phantom_render_Visualizing_trapper!=null)
	{
		this._OV_cn_monadic_phantom_render_Visualizing_ceilingZ=this._OV_cn_monadic_phantom_render_Visualizing_offsetZ+this._OV_cn_monadic_phantom_render_Visualizing_trapper._OM_getOffsetZ();
	}
}
function _SM_cn_monadic_phantom_render_Visualizing_filter1(_SL_mask)
{
	this._OV_cn_monadic_phantom_render_Visualizing_trapmask=_SL_mask;
}
function _SM_cn_monadic_phantom_render_Visualizing_shade1(_SL_s)
{
	this._OV_cn_monadic_phantom_render_Visualizing_shading=_SL_s;
}
function _SM_cn_monadic_phantom_render_Visualizing_oversee1(_SL_r)
{
	this._OV_cn_monadic_phantom_render_Visualizing_observer=_SL_r;
}
function _SM_cn_monadic_phantom_render_Visualizing_hitted1(_SL_t)
{
	if(this._OV_cn_monadic_phantom_render_Visualizing_observer!=null)
	{
		this._OV_cn_monadic_phantom_render_Visualizing_observer._OM_immit1(_SL_t);
	}
}
function _SM_cn_monadic_phantom_render_Visualizing_hitting1(_SL_t)
{
	if(!this._OV_cn_monadic_phantom_render_Visualizing_visible)
		return;
	var _SL_tX=_SL_t._OV_cn_monadic_phantom_render_Trapped_x-this._OV_cn_monadic_phantom_render_Visualizing_offsetX;
	var _SL_tY=_SL_t._OV_cn_monadic_phantom_render_Trapped_y-this._OV_cn_monadic_phantom_render_Visualizing_offsetY;
	if(this._OV_cn_monadic_phantom_render_Visualizing_width>=0&&(_SL_tX<0||_SL_tX>=this._OV_cn_monadic_phantom_render_Visualizing_width))
		return;
	if(this._OV_cn_monadic_phantom_render_Visualizing_height>=0&&(_SL_tY<0||_SL_tY>=this._OV_cn_monadic_phantom_render_Visualizing_height))
		return;
	if(this._OV_cn_monadic_phantom_render_Visualizing_trapper!=null&&(_SL_t._OV_cn_monadic_phantom_render_Trapped_type&this._OV_cn_monadic_phantom_render_Visualizing_trapmask)!=0&&_SL_t._OV_cn_monadic_phantom_render_Trapped_z<this._OV_cn_monadic_phantom_render_Visualizing_ceilingZ)
		this._OM__x_trap3(_SL_t,_SL_tX,_SL_tY);
	if(!this._OV_cn_monadic_phantom_render_Visualizing_shading)
		this._OM__x_hitting1(_SL_t);
}
function _SM_cn_monadic_phantom_render_Visualizing__x_hitting1(_SL_t)
{
}
function _SM_cn_monadic_phantom_render_Visualizing__x_trap3(_SL_t,_SL_tXa,_SL_tYa)
{
	var _SL_tZ=this._OV_cn_monadic_phantom_render_Visualizing_trapper._OM_trap2(_SL_tXa,_SL_tYa);
	if(_SL_tZ<0)
		return;
	var _SL_zDepth=this._OV_cn_monadic_phantom_render_Visualizing_offsetZ+_SL_tZ;
	if(_SL_zDepth<=_SL_t._OV_cn_monadic_phantom_render_Trapped_z)
		return;
	_SL_t._OV_cn_monadic_phantom_render_Trapped_z=_SL_zDepth;
	_SL_t._OV_cn_monadic_phantom_render_Trapped_source=this;
}
function _SM_cn_monadic_phantom_render_Visualizing__x_accept1(_SL_children)
{
	if(this._OV_cn_monadic_phantom_render_Visualizing_activated)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("cannot bind after activated"));
	if(_SL_children==null)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("null parameter"));
	for(var _SL_i=0;_SL_i<_SL_children.length;_SL_i++)
		if(_SL_children[_SL_i]==null)
			throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("null parameter"));
	for(var _SL_ib=0;_SL_ib<_SL_children.length;_SL_ib++)
	{
		_SL_children[_SL_ib]._OM_attach1a(this);
	}
}
function _SM_cn_monadic_phantom_render_Visualizing_alter1(_SL_alt)
{
	if(this._OV_cn_monadic_phantom_render_Visualizing_activated)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("cannot alter after activated"));
	this._OV_cn_monadic_phantom_render_Visualizing_alternation=_SL_alt;
}
function _SM_cn_monadic_phantom_render_Visualizing_evolve2(_SL_sequenceb,_SL_timestampb)
{
	if(this._OV_cn_monadic_phantom_render_Visualizing_alternation!=null)
	{
		var _SL_fb=this._OV_cn_monadic_phantom_render_Visualizing_alternation;
		_SL_fb(this,_SL_sequenceb,_SL_timestampb);
	}
}


function _SM_cn_monadic_phantom_render_Visualizing_toString()
{
	return this._OV_cn_monadic_phantom_render_Visualizing_identifier+"("+this._OV_cn_monadic_phantom_render_Visualizing_offsetX+","+this._OV_cn_monadic_phantom_render_Visualizing_offsetY+","+this._OV_cn_monadic_phantom_render_Visualizing_offsetZ+","+this._OV_cn_monadic_phantom_render_Visualizing_visible+")";
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Visualizing"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.render.Visualizing"),new Array("cn.monadic.phantom.render.Visual","cn.monadic.phantom.render.Transient"));
var _SC_cn_monadic_phantom_render_Visualizing=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Visualizing"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Visualizing"+' setup object binder');

function _SS_cn_monadic_phantom_render_Visualizing_bind(_SL_instance)
{
	_SL_instance.toString=_SM_cn_monadic_phantom_render_Visualizing_toString;
	_SL_instance._OM_identifier=_SM_cn_monadic_phantom_render_Visualizing_identifier;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_identifier=_SM_cn_monadic_phantom_render_Visualizing_identifier;
	_SL_instance._OM_attach1a=_SM_cn_monadic_phantom_render_Visualizing_attach1a;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_attach1a=_SM_cn_monadic_phantom_render_Visualizing_attach1a;
	_SL_instance._OM_parent=_SM_cn_monadic_phantom_render_Visualizing_parent;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_parent=_SM_cn_monadic_phantom_render_Visualizing_parent;
	_SL_instance._OM_count=_SM_cn_monadic_phantom_render_Visualizing_count;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_count=_SM_cn_monadic_phantom_render_Visualizing_count;
	_SL_instance._OM_child1=_SM_cn_monadic_phantom_render_Visualizing_child1;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_child1=_SM_cn_monadic_phantom_render_Visualizing_child1;
	_SL_instance._OM_bound2=_SM_cn_monadic_phantom_render_Visualizing_bound2;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_bound2=_SM_cn_monadic_phantom_render_Visualizing_bound2;
	_SL_instance._OM_visible=_SM_cn_monadic_phantom_render_Visualizing_visible;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_visible=_SM_cn_monadic_phantom_render_Visualizing_visible;
	_SL_instance._OM_measure1=_SM_cn_monadic_phantom_render_Visualizing_measure1;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_measure1=_SM_cn_monadic_phantom_render_Visualizing_measure1;
	_SL_instance._OM_record2=_SM_cn_monadic_phantom_render_Visualizing_record2;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_record2=_SM_cn_monadic_phantom_render_Visualizing_record2;
	_SL_instance._OM_query1=_SM_cn_monadic_phantom_render_Visualizing_query1;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_query1=_SM_cn_monadic_phantom_render_Visualizing_query1;
	_SL_instance._OM_locate3=_SM_cn_monadic_phantom_render_Visualizing_locate3;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_locate3=_SM_cn_monadic_phantom_render_Visualizing_locate3;
	_SL_instance._OM_render1=_SM_cn_monadic_phantom_render_Visualizing_render1;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_render1=_SM_cn_monadic_phantom_render_Visualizing_render1;
	_SL_instance._OM_visualize1=_SM_cn_monadic_phantom_render_Visualizing_visualize1;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_visualize1=_SM_cn_monadic_phantom_render_Visualizing_visualize1;
	_SL_instance._OM_mount1=_SM_cn_monadic_phantom_render_Visualizing_mount1;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_mount1=_SM_cn_monadic_phantom_render_Visualizing_mount1;
	_SL_instance._OM_filter1=_SM_cn_monadic_phantom_render_Visualizing_filter1;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_filter1=_SM_cn_monadic_phantom_render_Visualizing_filter1;
	_SL_instance._OM_shade1=_SM_cn_monadic_phantom_render_Visualizing_shade1;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_shade1=_SM_cn_monadic_phantom_render_Visualizing_shade1;
	_SL_instance._OM_oversee1=_SM_cn_monadic_phantom_render_Visualizing_oversee1;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_oversee1=_SM_cn_monadic_phantom_render_Visualizing_oversee1;
	_SL_instance._OM_hitted1=_SM_cn_monadic_phantom_render_Visualizing_hitted1;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_hitted1=_SM_cn_monadic_phantom_render_Visualizing_hitted1;
	_SL_instance._OM_hitting1=_SM_cn_monadic_phantom_render_Visualizing_hitting1;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_hitting1=_SM_cn_monadic_phantom_render_Visualizing_hitting1;
	_SL_instance._OM__x_hitting1=_SM_cn_monadic_phantom_render_Visualizing__x_hitting1;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing__x_hitting1=_SM_cn_monadic_phantom_render_Visualizing__x_hitting1;
	_SL_instance._OM__x_trap3=_SM_cn_monadic_phantom_render_Visualizing__x_trap3;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing__x_trap3=_SM_cn_monadic_phantom_render_Visualizing__x_trap3;
	_SL_instance._OM__x_accept1=_SM_cn_monadic_phantom_render_Visualizing__x_accept1;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing__x_accept1=_SM_cn_monadic_phantom_render_Visualizing__x_accept1;
	_SL_instance._OM_alter1=_SM_cn_monadic_phantom_render_Visualizing_alter1;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_alter1=_SM_cn_monadic_phantom_render_Visualizing_alter1;
	_SL_instance._OM_evolve2=_SM_cn_monadic_phantom_render_Visualizing_evolve2;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_evolve2=_SM_cn_monadic_phantom_render_Visualizing_evolve2;
	_SL_instance._OM_toString=_SM_cn_monadic_phantom_render_Visualizing_toString;
	_SL_instance._OM_cn_monadic_phantom_render_Visualizing_toString=_SM_cn_monadic_phantom_render_Visualizing_toString;
	_SL_instance._OV_cn_monadic_phantom_render_Visualizing_root=null;
	_SL_instance._OV_cn_monadic_phantom_render_Visualizing_host=null;
	_SL_instance._OV_cn_monadic_phantom_render_Visualizing_identifier=null;
	_SL_instance._OV_cn_monadic_phantom_render_Visualizing_visible=false;
	_SL_instance._OV_cn_monadic_phantom_render_Visualizing_offsetX=0;
	_SL_instance._OV_cn_monadic_phantom_render_Visualizing_offsetY=0;
	_SL_instance._OV_cn_monadic_phantom_render_Visualizing_offsetZ=0;
	_SL_instance._OV_cn_monadic_phantom_render_Visualizing_width=0;
	_SL_instance._OV_cn_monadic_phantom_render_Visualizing_height=0;
	_SL_instance._OV_cn_monadic_phantom_render_Visualizing_activated=false;
	_SL_instance._OV_cn_monadic_phantom_render_Visualizing_trapper=null;
	_SL_instance._OV_cn_monadic_phantom_render_Visualizing_trapmask=0;
	_SL_instance._OV_cn_monadic_phantom_render_Visualizing_ceilingZ=0;
	_SL_instance._OV_cn_monadic_phantom_render_Visualizing_observer=null;
	_SL_instance._OV_cn_monadic_phantom_render_Visualizing_shading=false;
	_SL_instance._OV_cn_monadic_phantom_render_Visualizing_properties=null;
	_SL_instance._OV_cn_monadic_phantom_render_Visualizing_alternation=null;
	_SL_instance._OV_cn_monadic_phantom_render_Visualizing_engagement=0;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_render_Visualizing_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Visualizing"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Visualizing"+' setup object initialize');

function _SS_cn_monadic_phantom_render_Visualizing_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.render.Visualizing"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.AxisRadiator"+' flush functions');

function _SO_cn_monadic_phantom_causal_AxisRadiator_AxisRadiator1(_SL_s)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_causal_AxisRadiator);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_causal_AxisRadiator_init);
	this._OV_cn_monadic_phantom_causal_AxisRadiator_id=_SL_s;
}
function _SM_cn_monadic_phantom_causal_AxisRadiator_identifier()
{
	return this._OV_cn_monadic_phantom_causal_AxisRadiator_id;
}
function _SM_cn_monadic_phantom_causal_AxisRadiator_bind1k(_SL_f)
{
	this._OV_cn_monadic_phantom_causal_AxisRadiator_delegated=_SL_f;
}
function _SM_cn_monadic_phantom_causal_AxisRadiator_radiate1(_SL_t)
{
	var _SL_funca=this._OV_cn_monadic_phantom_causal_AxisRadiator_delegated;
	_SL_funca(_SL_t);
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.AxisRadiator"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.causal.AxisRadiator"),new Array("cn.monadic.phantom.causal.Radiative"));
var _SC_cn_monadic_phantom_causal_AxisRadiator=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.AxisRadiator"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.AxisRadiator"+' setup object binder');

function _SS_cn_monadic_phantom_causal_AxisRadiator_bind(_SL_instance)
{
	_SL_instance._OM_identifier=_SM_cn_monadic_phantom_causal_AxisRadiator_identifier;
	_SL_instance._OM_cn_monadic_phantom_causal_AxisRadiator_identifier=_SM_cn_monadic_phantom_causal_AxisRadiator_identifier;
	_SL_instance._OM_bind1k=_SM_cn_monadic_phantom_causal_AxisRadiator_bind1k;
	_SL_instance._OM_cn_monadic_phantom_causal_AxisRadiator_bind1k=_SM_cn_monadic_phantom_causal_AxisRadiator_bind1k;
	_SL_instance._OM_radiate1=_SM_cn_monadic_phantom_causal_AxisRadiator_radiate1;
	_SL_instance._OM_cn_monadic_phantom_causal_AxisRadiator_radiate1=_SM_cn_monadic_phantom_causal_AxisRadiator_radiate1;
	_SL_instance._OV_cn_monadic_phantom_causal_AxisRadiator_id=null;
	_SL_instance._OV_cn_monadic_phantom_causal_AxisRadiator_delegated=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_causal_AxisRadiator_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.AxisRadiator"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.AxisRadiator"+' setup object initialize');

function _SS_cn_monadic_phantom_causal_AxisRadiator_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.AxisRadiator"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.AxisSynthesizer"+' flush functions');

function _SO_cn_monadic_phantom_causal_AxisSynthesizer_AxisSynthesizer()
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_causal_AxisSynthesizer);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_causal_AxisSynthesizer_init);
	this._OV_cn_monadic_phantom_causal_AxisSynthesizer_neutralizes=_SM_jazzy_lang_System_attain();
	this._OV_cn_monadic_phantom_causal_AxisSynthesizer_synthesizes=_SM_jazzy_lang_System_attain();
}
function _SM_cn_monadic_phantom_causal_AxisSynthesizer_install3a(_SL_typea,_SL_stf,_SL_ts)
{
	this._OV_cn_monadic_phantom_causal_AxisSynthesizer_neutralizes[_SL_typea]=_SL_stf;
	this._OV_cn_monadic_phantom_causal_AxisSynthesizer_synthesizes[_SL_typea]=_SL_ts;
}
function _SM_cn_monadic_phantom_causal_AxisSynthesizer_neutralize1(_SL_t)
{
	var _SL_fc=this._OV_cn_monadic_phantom_causal_AxisSynthesizer_neutralizes[_SL_t._OM_signature()];
	return (_SL_fc!=null)?_SL_fc(_SL_t):null;
}
function _SM_cn_monadic_phantom_causal_AxisSynthesizer_synthesize1(_SL_s)
{
	var _SL_paramsb=(_SL_s).split(_SF_cn_monadic_phantom_causal_AxisSynthesizer_SEPARATOR);
	var _SL_fb=this._OV_cn_monadic_phantom_causal_AxisSynthesizer_synthesizes[_SL_paramsb[0]];
	return (_SL_fb!=null)?_SL_fb(_SL_paramsb):null;
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.AxisSynthesizer"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.causal.AxisSynthesizer"),new Array("cn.monadic.phantom.causal.Synthesizer"));
var _SC_cn_monadic_phantom_causal_AxisSynthesizer=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.AxisSynthesizer"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.AxisSynthesizer"+' setup object binder');

function _SS_cn_monadic_phantom_causal_AxisSynthesizer_bind(_SL_instance)
{
	_SL_instance._OM_install3a=_SM_cn_monadic_phantom_causal_AxisSynthesizer_install3a;
	_SL_instance._OM_cn_monadic_phantom_causal_AxisSynthesizer_install3a=_SM_cn_monadic_phantom_causal_AxisSynthesizer_install3a;
	_SL_instance._OM_neutralize1=_SM_cn_monadic_phantom_causal_AxisSynthesizer_neutralize1;
	_SL_instance._OM_cn_monadic_phantom_causal_AxisSynthesizer_neutralize1=_SM_cn_monadic_phantom_causal_AxisSynthesizer_neutralize1;
	_SL_instance._OM_synthesize1=_SM_cn_monadic_phantom_causal_AxisSynthesizer_synthesize1;
	_SL_instance._OM_cn_monadic_phantom_causal_AxisSynthesizer_synthesize1=_SM_cn_monadic_phantom_causal_AxisSynthesizer_synthesize1;
	_SL_instance._OV_cn_monadic_phantom_causal_AxisSynthesizer_neutralizes=null;
	_SL_instance._OV_cn_monadic_phantom_causal_AxisSynthesizer_synthesizes=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_causal_AxisSynthesizer_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.AxisSynthesizer"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.AxisSynthesizer"+' setup object initialize');

function _SS_cn_monadic_phantom_causal_AxisSynthesizer_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.AxisSynthesizer"+' setup funtions');

var _SF_cn_monadic_phantom_causal_AxisSynthesizer_SEPARATOR="|";
_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.AxisThermal"+' flush functions');

function _SM_cn_monadic_phantom_causal_AxisThermal_CL0g(_SL_t)
{
	var _SL_obja=_SM_jazzy_lang_ClassLoader_CAST2(_SL_t,"cn.monadic.phantom.causal.AxisThermal");
	var _SL_buffer=new _SO_jazzy_lang_StringBuffer_StringBuffer();
	_SL_buffer._OM_append1("axis");
	_SL_buffer._OM_append1(_SF_cn_monadic_phantom_causal_AxisSynthesizer_SEPARATOR);
	_SL_buffer._OM_append1(_SL_obja._OV_cn_monadic_phantom_causal_AxisThermal_handler);
	_SL_buffer._OM_append1(_SF_cn_monadic_phantom_causal_AxisSynthesizer_SEPARATOR);
	_SL_buffer._OM_append1("[");
	for(var _SL_if=0;_SL_if<_SL_obja._OV_cn_monadic_phantom_causal_AxisThermal_params.length;_SL_if++)
	{
		if(_SL_if!=0)
			_SL_buffer._OM_append1(",");
		_SL_buffer._OM_append1(_SL_obja._OV_cn_monadic_phantom_causal_AxisThermal_params[_SL_if]+"");
	}
	_SL_buffer._OM_append1("]");
	_SL_buffer._OM_append1(_SF_cn_monadic_phantom_causal_AxisSynthesizer_SEPARATOR);
	_SL_buffer._OM_append1("({");
	var _SL_first=true;
	for(var _SL_keyb in _SL_obja._OV_cn_monadic_phantom_causal_AxisThermal_values)
	{
		if(_SL_first)
		{
			_SL_first=false;
		}
		else
		{
			_SL_buffer._OM_append1(",");
		}
		_SL_buffer._OM_append1(""+_SL_keyb+":\""+_SL_obja._OV_cn_monadic_phantom_causal_AxisThermal_values[_SL_keyb]+"\"");
	}
	_SL_buffer._OM_append1("})");
	return _SL_buffer._OM_toString();
}
function _SM_cn_monadic_phantom_causal_AxisThermal_CL1d(_SL_ss)
{
	return new _SO_cn_monadic_phantom_causal_AxisThermal_AxisThermal3(_SL_ss[1],_SM_jazzy_lang_System_evaluate1(_SL_ss[2]),_SM_jazzy_lang_System_evaluate1(_SL_ss[3]));
}
function _SO_cn_monadic_phantom_causal_AxisThermal_AxisThermal1(_SL_Nc)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_causal_AxisThermal);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_causal_AxisThermal_init);
	this._OV_cn_monadic_phantom_causal_AxisThermal_params=_SM_jazzy_lang_System_newArray4("$int",0,new Array(_SL_Nc,null),0);
	this._OV_cn_monadic_phantom_causal_AxisThermal_values=_SM_jazzy_lang_System_attain();
}
function _SO_cn_monadic_phantom_causal_AxisThermal_AxisThermal3(_SL_hm,_SL_pl,_SL_ve)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_causal_AxisThermal);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_causal_AxisThermal_init);
	this._OV_cn_monadic_phantom_causal_AxisThermal_handler=_SL_hm;
	this._OV_cn_monadic_phantom_causal_AxisThermal_params=_SL_pl;
	this._OV_cn_monadic_phantom_causal_AxisThermal_values=_SL_ve;
}
function _SM_cn_monadic_phantom_causal_AxisThermal_bind1b(_SL_s)
{
	this._OV_cn_monadic_phantom_causal_AxisThermal_handler=_SL_s;
}
function _SM_cn_monadic_phantom_causal_AxisThermal_set2a(_SL_index,_SL_vd)
{
	if(_SL_index<=0||_SL_index>this._OV_cn_monadic_phantom_causal_AxisThermal_params.length)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("out of range"));
	this._OV_cn_monadic_phantom_causal_AxisThermal_params[_SL_index-1]=_SL_vd;
}
function _SM_cn_monadic_phantom_causal_AxisThermal_set2b(_SL_keya,_SL_valueb)
{
	this._OV_cn_monadic_phantom_causal_AxisThermal_values[_SL_keya]=_SL_valueb;
}
function _SM_cn_monadic_phantom_causal_AxisThermal_signature()
{
	return "axis";
}
function _SM_cn_monadic_phantom_causal_AxisThermal_target()
{
	return this._OV_cn_monadic_phantom_causal_AxisThermal_handler;
}
function _SM_cn_monadic_phantom_causal_AxisThermal_quantify1(_SL_index)
{
	if(_SL_index<0||_SL_index>this._OV_cn_monadic_phantom_causal_AxisThermal_params.length)
		return -1;
	if(_SL_index==0)
		return this._OV_cn_monadic_phantom_causal_AxisThermal_params.length;
	return this._OV_cn_monadic_phantom_causal_AxisThermal_params[_SL_index-1];
}
function _SM_cn_monadic_phantom_causal_AxisThermal_bundled1(_SL_keya)
{
	return this._OV_cn_monadic_phantom_causal_AxisThermal_values[_SL_keya];
}
function _SM_cn_monadic_phantom_causal_AxisThermal_toString()
{
	return this._OV_cn_monadic_phantom_causal_AxisThermal_handler+"["+this._OV_cn_monadic_phantom_causal_AxisThermal_params+"]";
}
function _SM_cn_monadic_phantom_causal_AxisThermal_chain1(_SL_t)
{
	this._OV_cn_monadic_phantom_causal_AxisThermal_chained=_SL_t;
}
function _SM_cn_monadic_phantom_causal_AxisThermal_cascaded()
{
	return this._OV_cn_monadic_phantom_causal_AxisThermal_chained;
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.AxisThermal"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.causal.AxisThermal"),new Array("cn.monadic.phantom.causal.Thermal"));
var _SC_cn_monadic_phantom_causal_AxisThermal=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.AxisThermal"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.AxisThermal"+' setup object binder');

function _SS_cn_monadic_phantom_causal_AxisThermal_bind(_SL_instance)
{
	_SL_instance.toString=_SM_cn_monadic_phantom_causal_AxisThermal_toString;
	_SL_instance._OM_bind1b=_SM_cn_monadic_phantom_causal_AxisThermal_bind1b;
	_SL_instance._OM_cn_monadic_phantom_causal_AxisThermal_bind1b=_SM_cn_monadic_phantom_causal_AxisThermal_bind1b;
	_SL_instance._OM_set2a=_SM_cn_monadic_phantom_causal_AxisThermal_set2a;
	_SL_instance._OM_cn_monadic_phantom_causal_AxisThermal_set2a=_SM_cn_monadic_phantom_causal_AxisThermal_set2a;
	_SL_instance._OM_set2b=_SM_cn_monadic_phantom_causal_AxisThermal_set2b;
	_SL_instance._OM_cn_monadic_phantom_causal_AxisThermal_set2b=_SM_cn_monadic_phantom_causal_AxisThermal_set2b;
	_SL_instance._OM_signature=_SM_cn_monadic_phantom_causal_AxisThermal_signature;
	_SL_instance._OM_cn_monadic_phantom_causal_AxisThermal_signature=_SM_cn_monadic_phantom_causal_AxisThermal_signature;
	_SL_instance._OM_target=_SM_cn_monadic_phantom_causal_AxisThermal_target;
	_SL_instance._OM_cn_monadic_phantom_causal_AxisThermal_target=_SM_cn_monadic_phantom_causal_AxisThermal_target;
	_SL_instance._OM_quantify1=_SM_cn_monadic_phantom_causal_AxisThermal_quantify1;
	_SL_instance._OM_cn_monadic_phantom_causal_AxisThermal_quantify1=_SM_cn_monadic_phantom_causal_AxisThermal_quantify1;
	_SL_instance._OM_bundled1=_SM_cn_monadic_phantom_causal_AxisThermal_bundled1;
	_SL_instance._OM_cn_monadic_phantom_causal_AxisThermal_bundled1=_SM_cn_monadic_phantom_causal_AxisThermal_bundled1;
	_SL_instance._OM_toString=_SM_cn_monadic_phantom_causal_AxisThermal_toString;
	_SL_instance._OM_cn_monadic_phantom_causal_AxisThermal_toString=_SM_cn_monadic_phantom_causal_AxisThermal_toString;
	_SL_instance._OM_chain1=_SM_cn_monadic_phantom_causal_AxisThermal_chain1;
	_SL_instance._OM_cn_monadic_phantom_causal_AxisThermal_chain1=_SM_cn_monadic_phantom_causal_AxisThermal_chain1;
	_SL_instance._OM_cascaded=_SM_cn_monadic_phantom_causal_AxisThermal_cascaded;
	_SL_instance._OM_cn_monadic_phantom_causal_AxisThermal_cascaded=_SM_cn_monadic_phantom_causal_AxisThermal_cascaded;
	_SL_instance._OV_cn_monadic_phantom_causal_AxisThermal_handler=null;
	_SL_instance._OV_cn_monadic_phantom_causal_AxisThermal_params=null;
	_SL_instance._OV_cn_monadic_phantom_causal_AxisThermal_values=null;
	_SL_instance._OV_cn_monadic_phantom_causal_AxisThermal_chained=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_causal_AxisThermal_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.AxisThermal"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
	_SF_cn_monadic_phantom_causal_AxisThermal_NEUTRALIZE=_SM_cn_monadic_phantom_causal_AxisThermal_CL0g;
	_SF_cn_monadic_phantom_causal_AxisThermal_SYNTHESIZE=_SM_cn_monadic_phantom_causal_AxisThermal_CL1d;
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.AxisThermal"+' setup object initialize');

function _SS_cn_monadic_phantom_causal_AxisThermal_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.AxisThermal"+' setup funtions');

var _SF_cn_monadic_phantom_causal_AxisThermal_NEUTRALIZE=null;
var _SF_cn_monadic_phantom_causal_AxisThermal_SYNTHESIZE=null;
_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.DullRadiator"+' flush functions');

function _SO_cn_monadic_phantom_causal_DullRadiator_DullRadiator()
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_causal_DullRadiator);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_causal_DullRadiator_init);
}
function _SM_cn_monadic_phantom_causal_DullRadiator_identifier()
{
	return "";
}
function _SM_cn_monadic_phantom_causal_DullRadiator_radiate1(_SL_t)
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.DullRadiator"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.causal.DullRadiator"),new Array("cn.monadic.phantom.causal.Radiative"));
var _SC_cn_monadic_phantom_causal_DullRadiator=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.DullRadiator"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
	this._OV_cn_monadic_phantom_causal_DullRadiator__=null;
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.DullRadiator"+' setup object binder');

function _SS_cn_monadic_phantom_causal_DullRadiator_bind(_SL_instance)
{
	_SL_instance._OM_identifier=_SM_cn_monadic_phantom_causal_DullRadiator_identifier;
	_SL_instance._OM_cn_monadic_phantom_causal_DullRadiator_identifier=_SM_cn_monadic_phantom_causal_DullRadiator_identifier;
	_SL_instance._OM_radiate1=_SM_cn_monadic_phantom_causal_DullRadiator_radiate1;
	_SL_instance._OM_cn_monadic_phantom_causal_DullRadiator_radiate1=_SM_cn_monadic_phantom_causal_DullRadiator_radiate1;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_causal_DullRadiator_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.DullRadiator"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
	this._OV_cn_monadic_phantom_causal_DullRadiator__=new _SO_cn_monadic_phantom_causal_DullRadiator_DullRadiator();
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.DullRadiator"+' setup object initialize');

function _SS_cn_monadic_phantom_causal_DullRadiator_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.DullRadiator"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.Radiant"+' flush functions');


_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.Radiant"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.causal.Radiant"),new Array());
var _SC_cn_monadic_phantom_causal_Radiant=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.Radiant"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.Radiant"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.Radiant"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.Radiative"+' flush functions');



_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.Radiative"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.causal.Radiative"),new Array());
var _SC_cn_monadic_phantom_causal_Radiative=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.Radiative"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.Radiative"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.Radiative"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.RootRadiator"+' flush functions');

function _SO_cn_monadic_phantom_causal_RootRadiator_RootRadiator1(_SL_s)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_causal_RootRadiator);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_causal_RootRadiator_init);
	this._OV_cn_monadic_phantom_causal_RootRadiator_id=_SL_s;
	this._OV_cn_monadic_phantom_causal_RootRadiator_monitor=_SC_cn_monadic_phantom_causal_DullRadiator._OV_cn_monadic_phantom_causal_DullRadiator__;
	this._OV_cn_monadic_phantom_causal_RootRadiator_salvager=_SC_cn_monadic_phantom_causal_DullRadiator._OV_cn_monadic_phantom_causal_DullRadiator__;
	this._OV_cn_monadic_phantom_causal_RootRadiator_radiators=_SM_jazzy_lang_System_attain();
}
function _SM_cn_monadic_phantom_causal_RootRadiator_identifier()
{
	return this._OV_cn_monadic_phantom_causal_RootRadiator_id;
}
function _SM_cn_monadic_phantom_causal_RootRadiator_bind2c(_SL_keya,_SL_radiator)
{
	this._OV_cn_monadic_phantom_causal_RootRadiator_radiators[_SL_keya]=_SL_radiator;
}
function _SM_cn_monadic_phantom_causal_RootRadiator_setMute1(_SL_b)
{
	this._OV_cn_monadic_phantom_causal_RootRadiator_muted=_SL_b;
}
function _SM_cn_monadic_phantom_causal_RootRadiator_intercept1(_SL_r)
{
	if(_SL_r==null)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("null parameter"));
	this._OV_cn_monadic_phantom_causal_RootRadiator_monitor=_SL_r;
}
function _SM_cn_monadic_phantom_causal_RootRadiator_salvage1(_SL_r)
{
	if(_SL_r==null)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("null parameter"));
	this._OV_cn_monadic_phantom_causal_RootRadiator_salvager=_SL_r;
}
function _SM_cn_monadic_phantom_causal_RootRadiator_radiate1(_SL_t)
{
	if(this._OV_cn_monadic_phantom_causal_RootRadiator_muted)
		return;
	this._OV_cn_monadic_phantom_causal_RootRadiator_monitor._OM_radiate1(_SL_t);
	var _SL_assigned=this._OV_cn_monadic_phantom_causal_RootRadiator_radiators[_SL_t._OM_target()];
	if(_SL_assigned!=null)
		_SL_assigned._OM_radiate1(_SL_t);
	else
		this._OV_cn_monadic_phantom_causal_RootRadiator_salvager._OM_radiate1(_SL_t);
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.RootRadiator"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.causal.RootRadiator"),new Array("cn.monadic.phantom.causal.Radiative"));
var _SC_cn_monadic_phantom_causal_RootRadiator=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.RootRadiator"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.RootRadiator"+' setup object binder');

function _SS_cn_monadic_phantom_causal_RootRadiator_bind(_SL_instance)
{
	_SL_instance._OM_identifier=_SM_cn_monadic_phantom_causal_RootRadiator_identifier;
	_SL_instance._OM_cn_monadic_phantom_causal_RootRadiator_identifier=_SM_cn_monadic_phantom_causal_RootRadiator_identifier;
	_SL_instance._OM_bind2c=_SM_cn_monadic_phantom_causal_RootRadiator_bind2c;
	_SL_instance._OM_cn_monadic_phantom_causal_RootRadiator_bind2c=_SM_cn_monadic_phantom_causal_RootRadiator_bind2c;
	_SL_instance._OM_setMute1=_SM_cn_monadic_phantom_causal_RootRadiator_setMute1;
	_SL_instance._OM_cn_monadic_phantom_causal_RootRadiator_setMute1=_SM_cn_monadic_phantom_causal_RootRadiator_setMute1;
	_SL_instance._OM_intercept1=_SM_cn_monadic_phantom_causal_RootRadiator_intercept1;
	_SL_instance._OM_cn_monadic_phantom_causal_RootRadiator_intercept1=_SM_cn_monadic_phantom_causal_RootRadiator_intercept1;
	_SL_instance._OM_salvage1=_SM_cn_monadic_phantom_causal_RootRadiator_salvage1;
	_SL_instance._OM_cn_monadic_phantom_causal_RootRadiator_salvage1=_SM_cn_monadic_phantom_causal_RootRadiator_salvage1;
	_SL_instance._OM_radiate1=_SM_cn_monadic_phantom_causal_RootRadiator_radiate1;
	_SL_instance._OM_cn_monadic_phantom_causal_RootRadiator_radiate1=_SM_cn_monadic_phantom_causal_RootRadiator_radiate1;
	_SL_instance._OV_cn_monadic_phantom_causal_RootRadiator_id=null;
	_SL_instance._OV_cn_monadic_phantom_causal_RootRadiator_radiators=null;
	_SL_instance._OV_cn_monadic_phantom_causal_RootRadiator_monitor=null;
	_SL_instance._OV_cn_monadic_phantom_causal_RootRadiator_salvager=null;
	_SL_instance._OV_cn_monadic_phantom_causal_RootRadiator_muted=false;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_causal_RootRadiator_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.RootRadiator"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.RootRadiator"+' setup object initialize');

function _SS_cn_monadic_phantom_causal_RootRadiator_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.RootRadiator"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.SafeRadiator"+' flush functions');

function _SO_cn_monadic_phantom_causal_SafeRadiator_SafeRadiator()
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_causal_SafeRadiator);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_causal_SafeRadiator_init);
}
function _SM_cn_monadic_phantom_causal_SafeRadiator_identifier()
{
	return "safe";
}
function _SM_cn_monadic_phantom_causal_SafeRadiator_bind1l(_SL_s)
{
	this._OV_cn_monadic_phantom_causal_SafeRadiator_synthesizer=_SL_s;
}
function _SM_cn_monadic_phantom_causal_SafeRadiator_radiate1(_SL_t)
{
	var _SL_x=this._OV_cn_monadic_phantom_causal_SafeRadiator_synthesizer._OM_neutralize1(_SL_t);
	var _SL_y=this._OV_cn_monadic_phantom_causal_SafeRadiator_synthesizer._OM_neutralize1(this._OV_cn_monadic_phantom_causal_SafeRadiator_synthesizer._OM_synthesize1(_SL_x));
	if(_SL_x!=_SL_y)
	{
		window.alert("Cannot synthesize thermal:\n"+_SL_x+"\n"+_SL_y);
	}
	else
	{
		window.status=(_SL_x);
	}
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.SafeRadiator"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.causal.SafeRadiator"),new Array("cn.monadic.phantom.causal.Radiative"));
var _SC_cn_monadic_phantom_causal_SafeRadiator=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.SafeRadiator"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.SafeRadiator"+' setup object binder');

function _SS_cn_monadic_phantom_causal_SafeRadiator_bind(_SL_instance)
{
	_SL_instance._OM_identifier=_SM_cn_monadic_phantom_causal_SafeRadiator_identifier;
	_SL_instance._OM_cn_monadic_phantom_causal_SafeRadiator_identifier=_SM_cn_monadic_phantom_causal_SafeRadiator_identifier;
	_SL_instance._OM_bind1l=_SM_cn_monadic_phantom_causal_SafeRadiator_bind1l;
	_SL_instance._OM_cn_monadic_phantom_causal_SafeRadiator_bind1l=_SM_cn_monadic_phantom_causal_SafeRadiator_bind1l;
	_SL_instance._OM_radiate1=_SM_cn_monadic_phantom_causal_SafeRadiator_radiate1;
	_SL_instance._OM_cn_monadic_phantom_causal_SafeRadiator_radiate1=_SM_cn_monadic_phantom_causal_SafeRadiator_radiate1;
	_SL_instance._OV_cn_monadic_phantom_causal_SafeRadiator_synthesizer=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_causal_SafeRadiator_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.SafeRadiator"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.SafeRadiator"+' setup object initialize');

function _SS_cn_monadic_phantom_causal_SafeRadiator_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.SafeRadiator"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.Synthesizer"+' flush functions');



_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.Synthesizer"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.causal.Synthesizer"),new Array());
var _SC_cn_monadic_phantom_causal_Synthesizer=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.Synthesizer"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.Synthesizer"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.Synthesizer"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.TapeRadiance"+' flush functions');

function _SO_cn_monadic_phantom_causal_TapeRadiance_TapeRadiance1(_SL_s)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_causal_TapeRadiance);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_causal_TapeRadiance_init);
	this._OV_cn_monadic_phantom_causal_TapeRadiance_separator=_SL_s;
	this._OV_cn_monadic_phantom_causal_TapeRadiance_timestamp=_SM_jazzy_lang_System_currentTimeMillis();
	var _SL_selfa=this;
	this._OV_cn_monadic_phantom_causal_TapeRadiance_handler=function ()
	{
		var _SL_interval=_SL_selfa._OM_simulate();
		if(_SL_interval>=0)
			_SM_jazzy_lang_System_defer2(_SL_selfa._OV_cn_monadic_phantom_causal_TapeRadiance_handler,_SL_interval);
		else
			window.status=("tape out");
	};
}
function _SM_cn_monadic_phantom_causal_TapeRadiance_simulate()
{
	var _SL_sa=this._OV_cn_monadic_phantom_causal_TapeRadiance_sequence[this._OV_cn_monadic_phantom_causal_TapeRadiance_pointer];
	if(_SL_sa==null)
		return -1;
	window.status=("-> "+_SL_sa);
	var _SL_tj=this._OV_cn_monadic_phantom_causal_TapeRadiance_synthesizer._OM_synthesize1(_SL_sa);
	if(_SL_tj!=null)
	{
		this._OV_cn_monadic_phantom_causal_TapeRadiance_processor._OM_radiate1(_SL_tj);
	}
	else
	{
		return -1;
	}
	this._OV_cn_monadic_phantom_causal_TapeRadiance_pointer++;
	_SL_sa=this._OV_cn_monadic_phantom_causal_TapeRadiance_sequence[this._OV_cn_monadic_phantom_causal_TapeRadiance_pointer];
	this._OV_cn_monadic_phantom_causal_TapeRadiance_pointer++;
	if(_SL_sa==null)
		return -1;
	else
		return (_SL_sa-0);
}
function _SM_cn_monadic_phantom_causal_TapeRadiance_identifier()
{
	return "tape";
}
function _SM_cn_monadic_phantom_causal_TapeRadiance_bind1j(_SL_r)
{
	this._OV_cn_monadic_phantom_causal_TapeRadiance_processor=_SL_r;
}
function _SM_cn_monadic_phantom_causal_TapeRadiance_bind1l(_SL_s)
{
	this._OV_cn_monadic_phantom_causal_TapeRadiance_synthesizer=_SL_s;
}
function _SM_cn_monadic_phantom_causal_TapeRadiance_immit1(_SL_obj)
{
	var _SL_datae=_SL_obj;
	this._OV_cn_monadic_phantom_causal_TapeRadiance_sequence=_SL_datae.split(this._OV_cn_monadic_phantom_causal_TapeRadiance_separator);
	this._OV_cn_monadic_phantom_causal_TapeRadiance_pointer=1;
	_SM_jazzy_lang_System_defer1(this._OV_cn_monadic_phantom_causal_TapeRadiance_handler);
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.TapeRadiance"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.causal.TapeRadiance"),new Array("cn.monadic.phantom.causal.Radiant"));
var _SC_cn_monadic_phantom_causal_TapeRadiance=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.TapeRadiance"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.TapeRadiance"+' setup object binder');

function _SS_cn_monadic_phantom_causal_TapeRadiance_bind(_SL_instance)
{
	_SL_instance._OM_simulate=_SM_cn_monadic_phantom_causal_TapeRadiance_simulate;
	_SL_instance._OM_cn_monadic_phantom_causal_TapeRadiance_simulate=_SM_cn_monadic_phantom_causal_TapeRadiance_simulate;
	_SL_instance._OM_identifier=_SM_cn_monadic_phantom_causal_TapeRadiance_identifier;
	_SL_instance._OM_cn_monadic_phantom_causal_TapeRadiance_identifier=_SM_cn_monadic_phantom_causal_TapeRadiance_identifier;
	_SL_instance._OM_bind1j=_SM_cn_monadic_phantom_causal_TapeRadiance_bind1j;
	_SL_instance._OM_cn_monadic_phantom_causal_TapeRadiance_bind1j=_SM_cn_monadic_phantom_causal_TapeRadiance_bind1j;
	_SL_instance._OM_bind1l=_SM_cn_monadic_phantom_causal_TapeRadiance_bind1l;
	_SL_instance._OM_cn_monadic_phantom_causal_TapeRadiance_bind1l=_SM_cn_monadic_phantom_causal_TapeRadiance_bind1l;
	_SL_instance._OM_immit1=_SM_cn_monadic_phantom_causal_TapeRadiance_immit1;
	_SL_instance._OM_cn_monadic_phantom_causal_TapeRadiance_immit1=_SM_cn_monadic_phantom_causal_TapeRadiance_immit1;
	_SL_instance._OV_cn_monadic_phantom_causal_TapeRadiance_processor=null;
	_SL_instance._OV_cn_monadic_phantom_causal_TapeRadiance_synthesizer=null;
	_SL_instance._OV_cn_monadic_phantom_causal_TapeRadiance_timestamp=null;
	_SL_instance._OV_cn_monadic_phantom_causal_TapeRadiance_separator=null;
	_SL_instance._OV_cn_monadic_phantom_causal_TapeRadiance_sequence=null;
	_SL_instance._OV_cn_monadic_phantom_causal_TapeRadiance_pointer=0;
	_SL_instance._OV_cn_monadic_phantom_causal_TapeRadiance_handler=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_causal_TapeRadiance_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.TapeRadiance"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.TapeRadiance"+' setup object initialize');

function _SS_cn_monadic_phantom_causal_TapeRadiance_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.TapeRadiance"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.TapeRadiator"+' flush functions');

function _SO_cn_monadic_phantom_causal_TapeRadiator_TapeRadiator1(_SL_s)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_causal_TapeRadiator);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_causal_TapeRadiator_init);
	this._OV_cn_monadic_phantom_causal_TapeRadiator_separator=_SL_s;
	this._OV_cn_monadic_phantom_causal_TapeRadiator_timestamp=_SM_jazzy_lang_System_currentTimeMillis();
	this._OV_cn_monadic_phantom_causal_TapeRadiator_taped=new _SO_jazzy_lang_StringBuffer_StringBuffer();
}
function _SM_cn_monadic_phantom_causal_TapeRadiator_identifier()
{
	return "tape";
}
function _SM_cn_monadic_phantom_causal_TapeRadiator_bind1l(_SL_s)
{
	this._OV_cn_monadic_phantom_causal_TapeRadiator_synthesizer=_SL_s;
}
function _SM_cn_monadic_phantom_causal_TapeRadiator_skip()
{
	this._OV_cn_monadic_phantom_causal_TapeRadiator_timestamp=_SM_jazzy_lang_System_currentTimeMillis();
}
function _SM_cn_monadic_phantom_causal_TapeRadiator_eject()
{
	return this._OV_cn_monadic_phantom_causal_TapeRadiator_taped._OM_toString();
}
function _SM_cn_monadic_phantom_causal_TapeRadiator_radiate1(_SL_t)
{
	var _SL_x=this._OV_cn_monadic_phantom_causal_TapeRadiator_synthesizer._OM_neutralize1(_SL_t);
	var _SL_now=_SM_jazzy_lang_System_currentTimeMillis();
	this._OV_cn_monadic_phantom_causal_TapeRadiator_taped._OM_append1((_SL_now-this._OV_cn_monadic_phantom_causal_TapeRadiator_timestamp)+this._OV_cn_monadic_phantom_causal_TapeRadiator_separator);
	this._OV_cn_monadic_phantom_causal_TapeRadiator_timestamp=_SL_now;
	this._OV_cn_monadic_phantom_causal_TapeRadiator_taped._OM_append1(_SL_x+this._OV_cn_monadic_phantom_causal_TapeRadiator_separator);
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.TapeRadiator"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.causal.TapeRadiator"),new Array("cn.monadic.phantom.causal.Radiative"));
var _SC_cn_monadic_phantom_causal_TapeRadiator=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.TapeRadiator"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.TapeRadiator"+' setup object binder');

function _SS_cn_monadic_phantom_causal_TapeRadiator_bind(_SL_instance)
{
	_SL_instance._OM_identifier=_SM_cn_monadic_phantom_causal_TapeRadiator_identifier;
	_SL_instance._OM_cn_monadic_phantom_causal_TapeRadiator_identifier=_SM_cn_monadic_phantom_causal_TapeRadiator_identifier;
	_SL_instance._OM_bind1l=_SM_cn_monadic_phantom_causal_TapeRadiator_bind1l;
	_SL_instance._OM_cn_monadic_phantom_causal_TapeRadiator_bind1l=_SM_cn_monadic_phantom_causal_TapeRadiator_bind1l;
	_SL_instance._OM_skip=_SM_cn_monadic_phantom_causal_TapeRadiator_skip;
	_SL_instance._OM_cn_monadic_phantom_causal_TapeRadiator_skip=_SM_cn_monadic_phantom_causal_TapeRadiator_skip;
	_SL_instance._OM_eject=_SM_cn_monadic_phantom_causal_TapeRadiator_eject;
	_SL_instance._OM_cn_monadic_phantom_causal_TapeRadiator_eject=_SM_cn_monadic_phantom_causal_TapeRadiator_eject;
	_SL_instance._OM_radiate1=_SM_cn_monadic_phantom_causal_TapeRadiator_radiate1;
	_SL_instance._OM_cn_monadic_phantom_causal_TapeRadiator_radiate1=_SM_cn_monadic_phantom_causal_TapeRadiator_radiate1;
	_SL_instance._OV_cn_monadic_phantom_causal_TapeRadiator_synthesizer=null;
	_SL_instance._OV_cn_monadic_phantom_causal_TapeRadiator_timestamp=null;
	_SL_instance._OV_cn_monadic_phantom_causal_TapeRadiator_separator=null;
	_SL_instance._OV_cn_monadic_phantom_causal_TapeRadiator_taped=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_causal_TapeRadiator_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.TapeRadiator"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.TapeRadiator"+' setup object initialize');

function _SS_cn_monadic_phantom_causal_TapeRadiator_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.TapeRadiator"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.Thermal"+' flush functions');






_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.Thermal"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.causal.Thermal"),new Array());
var _SC_cn_monadic_phantom_causal_Thermal=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.Thermal"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.Thermal"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.causal.Thermal"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.AxisScenario"+' flush functions');

function _SO_cn_monadic_phantom_master_AxisScenario_AxisScenario1(_SL_v)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_master_AxisScenario);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_master_AxisScenario_init);
	this._OV_cn_monadic_phantom_master_AxisScenario_cast=_SL_v;
	this._OV_cn_monadic_phantom_master_AxisScenario_executives=_SM_jazzy_lang_System_attain();
	this._OV_cn_monadic_phantom_master_AxisScenario_facilities=_SM_jazzy_lang_System_attain();
	this._OV_cn_monadic_phantom_master_AxisScenario_director=new _SO_cn_monadic_phantom_causal_RootRadiator_RootRadiator1("root");
	this._OV_cn_monadic_phantom_master_AxisScenario_staff=_SM_jazzy_lang_System_newArray4("cn.monadic.phantom.master.Operative",0,new Array(0,null),0);
	this._OV_cn_monadic_phantom_master_AxisScenario_facilitated=false;
	this._OV_cn_monadic_phantom_master_AxisScenario_executives["$director"]=this._OV_cn_monadic_phantom_master_AxisScenario_director;
}
function _SM_cn_monadic_phantom_master_AxisScenario_update()
{
	if(!this._OV_cn_monadic_phantom_master_AxisScenario_paused)
	{
		this._OV_cn_monadic_phantom_master_AxisScenario_cast._OM_evolve();
	}
}
function _SM_cn_monadic_phantom_master_AxisScenario__debug_director()
{
	return this._OV_cn_monadic_phantom_master_AxisScenario_director;
}
function _SM_cn_monadic_phantom_master_AxisScenario_bind1g(_SL_base)
{
	this._OV_cn_monadic_phantom_master_AxisScenario_cast._OM_bind1d(_SL_base);
	this._OV_cn_monadic_phantom_master_AxisScenario_executives["$base"]=_SL_base;
}
function _SM_cn_monadic_phantom_master_AxisScenario_install1(_SL_s)
{
	this._OV_cn_monadic_phantom_master_AxisScenario_protocol=_SL_s;
	this._OV_cn_monadic_phantom_master_AxisScenario_executives["$protocol"]=_SL_s;
}
function _SM_cn_monadic_phantom_master_AxisScenario_enableOverlay1(_SL_styleb)
{
	var _SL_ed=this._OV_cn_monadic_phantom_master_AxisScenario_cast._OM_element()._OM_derive3(null,"div",_SL_styleb);
	var _SL_overlaya=new _SO_jazzy_dom_canvas_Canvas_Canvas1(_SL_ed);
	_SL_overlaya._OM_setColor1("green");
	_SL_overlaya._OM_setStroke1(new _SO_jazzy_dom_canvas_Stroke2D_Stroke2D());
	_SL_overlaya._OM_flush();
	this._OV_cn_monadic_phantom_master_AxisScenario_executives["$overlay"]=_SL_overlaya;
}
function _SM_cn_monadic_phantom_master_AxisScenario_enableTrapping1(_SL_analyzer)
{
	this._OV_cn_monadic_phantom_master_AxisScenario_cast._OM_enablePointer1(_SF_jazzy_dom_event_AxisPointer_BINDER);
	this._OV_cn_monadic_phantom_master_AxisScenario_screenplay=new _SO_cn_monadic_phantom_render_TrapRadiance_TrapRadiance();
	this._OV_cn_monadic_phantom_master_AxisScenario_executives["$screenplay"]=this._OV_cn_monadic_phantom_master_AxisScenario_screenplay;
	if(_SL_analyzer!=null)
	{
		this._OV_cn_monadic_phantom_master_AxisScenario_screenplay._OM_analyze1(_SL_analyzer);
		this._OV_cn_monadic_phantom_master_AxisScenario_executives["$analyzer"]=_SL_analyzer;
	}
}
function _SM_cn_monadic_phantom_master_AxisScenario_enableReplaying()
{
	this._OM_reject1("$intercept");
	this._OM_reject1("$screenplay");
	this._OM_require1("$protocol");
	var _SL_playera=new _SO_cn_monadic_phantom_causal_TapeRadiance_TapeRadiance1("%%");
	_SL_playera._OM_bind1j(this._OV_cn_monadic_phantom_master_AxisScenario_director);
	_SL_playera._OM_bind1l(this._OV_cn_monadic_phantom_master_AxisScenario_protocol);
	this._OV_cn_monadic_phantom_master_AxisScenario_executives["$player"]=_SL_playera;
	this._OV_cn_monadic_phantom_master_AxisScenario_executives["$intercept"]="replaying";
}
function _SM_cn_monadic_phantom_master_AxisScenario_enableVerifying()
{
	this._OM_reject1("$intercept");
	this._OM_require1("$protocol");
	var _SL_safe=new _SO_cn_monadic_phantom_causal_SafeRadiator_SafeRadiator();
	_SL_safe._OM_bind1l(this._OV_cn_monadic_phantom_master_AxisScenario_protocol);
	this._OV_cn_monadic_phantom_master_AxisScenario_director._OM_intercept1(_SL_safe);
	this._OV_cn_monadic_phantom_master_AxisScenario_executives["$intercept"]="verifying";
}
function _SM_cn_monadic_phantom_master_AxisScenario_enableRecording()
{
	this._OM_reject1("$intercept");
	this._OM_require1("$protocol");
	this._OV_cn_monadic_phantom_master_AxisScenario_recorder=new _SO_cn_monadic_phantom_causal_TapeRadiator_TapeRadiator1("%%");
	this._OV_cn_monadic_phantom_master_AxisScenario_recorder._OM_bind1l(this._OV_cn_monadic_phantom_master_AxisScenario_protocol);
	var _SL_trapper=new _SO_cn_monadic_phantom_render_TrapReplica_TrapReplica1("trap");
	_SL_trapper._OM_bind1j(this._OV_cn_monadic_phantom_master_AxisScenario_recorder);
	_SL_trapper._OM_replicate1(this._OV_cn_monadic_phantom_master_AxisScenario_cast._OM_track());
	this._OV_cn_monadic_phantom_master_AxisScenario_director._OM_intercept1(_SL_trapper);
	this._OV_cn_monadic_phantom_master_AxisScenario_cast._OM_engage1(_SL_trapper);
	this._OV_cn_monadic_phantom_master_AxisScenario_executives["$recorder"]=this._OV_cn_monadic_phantom_master_AxisScenario_recorder;
	this._OV_cn_monadic_phantom_master_AxisScenario_executives["$intercept"]="recording";
}
function _SM_cn_monadic_phantom_master_AxisScenario_enableSalvager1(_SL_r)
{
	this._OV_cn_monadic_phantom_master_AxisScenario_director._OM_salvage1(_SL_r);
	if(_SM_jazzy_lang_ClassLoader_RTTI2(_SL_r,"cn.monadic.phantom.master.Operative"))
	{
		this._OM_operative1(_SL_r);
	}
}
function _SM_cn_monadic_phantom_master_AxisScenario_toggle1(_SL_mute)
{
	if(this._OV_cn_monadic_phantom_master_AxisScenario_paused!=_SL_mute)
	{
		this._OV_cn_monadic_phantom_master_AxisScenario_paused=_SL_mute;
		this._OV_cn_monadic_phantom_master_AxisScenario_director._OM_setMute1(_SL_mute);
		if(!this._OV_cn_monadic_phantom_master_AxisScenario_paused&&this._OV_cn_monadic_phantom_master_AxisScenario_recorder!=null)
			this._OV_cn_monadic_phantom_master_AxisScenario_recorder._OM_skip();
	}
}
function _SM_cn_monadic_phantom_master_AxisScenario_unlock()
{
	this._OV_cn_monadic_phantom_master_AxisScenario_executives["$cast"]=this._OV_cn_monadic_phantom_master_AxisScenario_cast;
}
function _SM_cn_monadic_phantom_master_AxisScenario_directive1(_SL_agent)
{
	this._OV_cn_monadic_phantom_master_AxisScenario_director._OM_bind2c(_SL_agent._OM_identifier(),_SL_agent);
	if(_SM_jazzy_lang_ClassLoader_RTTI2(_SL_agent,"cn.monadic.phantom.master.Operative"))
	{
		this._OM_operative1(_SL_agent);
	}
}
function _SM_cn_monadic_phantom_master_AxisScenario_creative1(_SL_agent)
{
	this._OM_require1("$screenplay");
	this._OV_cn_monadic_phantom_master_AxisScenario_screenplay._OM_append1b(_SL_agent);
	if(_SM_jazzy_lang_ClassLoader_RTTI2(_SL_agent,"cn.monadic.phantom.master.Operative"))
	{
		this._OM_operative1(_SL_agent);
	}
}
function _SM_cn_monadic_phantom_master_AxisScenario_operative1(_SL_o)
{
	this._OV_cn_monadic_phantom_master_AxisScenario_staff[this._OV_cn_monadic_phantom_master_AxisScenario_staff.length]=_SL_o;
}
function _SM_cn_monadic_phantom_master_AxisScenario_intrinsic1(_SL_agent)
{
	this._OV_cn_monadic_phantom_master_AxisScenario_facilities[_SL_agent._OM_identifier()]=_SL_agent;
	if(_SM_jazzy_lang_ClassLoader_RTTI2(_SL_agent,"cn.monadic.phantom.master.Operative"))
	{
		this._OM_operative1(_SL_agent);
	}
}
function _SM_cn_monadic_phantom_master_AxisScenario_assign2(_SL_idb,_SL_exec)
{
	this._OV_cn_monadic_phantom_master_AxisScenario_executives[_SL_idb]=_SL_exec;
}
function _SM_cn_monadic_phantom_master_AxisScenario_prepare()
{
	var _SL_Nd=this._OV_cn_monadic_phantom_master_AxisScenario_staff.length;
	for(var _SL_i=0;_SL_i<_SL_Nd;_SL_i++)
	{
		this._OV_cn_monadic_phantom_master_AxisScenario_staff[_SL_i]._OM_assist1(this);
	}
	if(this._OV_cn_monadic_phantom_master_AxisScenario_screenplay!=null)
	{
		this._OV_cn_monadic_phantom_master_AxisScenario_cast._OM_oversee1(this._OV_cn_monadic_phantom_master_AxisScenario_screenplay);
		this._OV_cn_monadic_phantom_master_AxisScenario_cast._OM_engage1(this._OV_cn_monadic_phantom_master_AxisScenario_screenplay);
		this._OV_cn_monadic_phantom_master_AxisScenario_screenplay._OM_bind1j(this._OV_cn_monadic_phantom_master_AxisScenario_director);
	}
}
function _SM_cn_monadic_phantom_master_AxisScenario_reject1(_SL_idb)
{
	var _SL_execa=this._OV_cn_monadic_phantom_master_AxisScenario_executives[_SL_idb];
	if(_SL_execa!=null)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("reject executive: "+_SL_idb));
}
function _SM_cn_monadic_phantom_master_AxisScenario_require1(_SL_idb)
{
	var _SL_execa=this._OV_cn_monadic_phantom_master_AxisScenario_executives[_SL_idb];
	if(_SL_execa==null)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("require executive: "+_SL_idb));
	return _SL_execa;
}
function _SM_cn_monadic_phantom_master_AxisScenario_executive1(_SL_idb)
{
	return this._OV_cn_monadic_phantom_master_AxisScenario_executives[_SL_idb];
}
function _SM_cn_monadic_phantom_master_AxisScenario_facilitate2(_SL_idb,_SL_affair)
{
	if(this._OV_cn_monadic_phantom_master_AxisScenario_facilitated)
		throw _SM_jazzy_lang_StackTrace_Throw1(new _SO_jazzy_lang_RuntimeException_RuntimeException1("recursive facilitating"));
	var _SL_fb=this._OV_cn_monadic_phantom_master_AxisScenario_facilities[_SL_idb];
	if(_SL_fb==null)
		return;
	this._OV_cn_monadic_phantom_master_AxisScenario_facilitated=true;
	_SL_fb._OM_handle1(_SL_affair);
	this._OV_cn_monadic_phantom_master_AxisScenario_facilitated=false;
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.AxisScenario"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.master.AxisScenario"),new Array("cn.monadic.phantom.master.Scenario"));
var _SC_cn_monadic_phantom_master_AxisScenario=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.AxisScenario"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.AxisScenario"+' setup object binder');

function _SS_cn_monadic_phantom_master_AxisScenario_bind(_SL_instance)
{
	_SL_instance._OM_update=_SM_cn_monadic_phantom_master_AxisScenario_update;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario_update=_SM_cn_monadic_phantom_master_AxisScenario_update;
	_SL_instance._OM__debug_director=_SM_cn_monadic_phantom_master_AxisScenario__debug_director;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario__debug_director=_SM_cn_monadic_phantom_master_AxisScenario__debug_director;
	_SL_instance._OM_bind1g=_SM_cn_monadic_phantom_master_AxisScenario_bind1g;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario_bind1g=_SM_cn_monadic_phantom_master_AxisScenario_bind1g;
	_SL_instance._OM_install1=_SM_cn_monadic_phantom_master_AxisScenario_install1;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario_install1=_SM_cn_monadic_phantom_master_AxisScenario_install1;
	_SL_instance._OM_enableOverlay1=_SM_cn_monadic_phantom_master_AxisScenario_enableOverlay1;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario_enableOverlay1=_SM_cn_monadic_phantom_master_AxisScenario_enableOverlay1;
	_SL_instance._OM_enableTrapping1=_SM_cn_monadic_phantom_master_AxisScenario_enableTrapping1;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario_enableTrapping1=_SM_cn_monadic_phantom_master_AxisScenario_enableTrapping1;
	_SL_instance._OM_enableReplaying=_SM_cn_monadic_phantom_master_AxisScenario_enableReplaying;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario_enableReplaying=_SM_cn_monadic_phantom_master_AxisScenario_enableReplaying;
	_SL_instance._OM_enableVerifying=_SM_cn_monadic_phantom_master_AxisScenario_enableVerifying;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario_enableVerifying=_SM_cn_monadic_phantom_master_AxisScenario_enableVerifying;
	_SL_instance._OM_enableRecording=_SM_cn_monadic_phantom_master_AxisScenario_enableRecording;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario_enableRecording=_SM_cn_monadic_phantom_master_AxisScenario_enableRecording;
	_SL_instance._OM_enableSalvager1=_SM_cn_monadic_phantom_master_AxisScenario_enableSalvager1;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario_enableSalvager1=_SM_cn_monadic_phantom_master_AxisScenario_enableSalvager1;
	_SL_instance._OM_toggle1=_SM_cn_monadic_phantom_master_AxisScenario_toggle1;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario_toggle1=_SM_cn_monadic_phantom_master_AxisScenario_toggle1;
	_SL_instance._OM_unlock=_SM_cn_monadic_phantom_master_AxisScenario_unlock;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario_unlock=_SM_cn_monadic_phantom_master_AxisScenario_unlock;
	_SL_instance._OM_directive1=_SM_cn_monadic_phantom_master_AxisScenario_directive1;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario_directive1=_SM_cn_monadic_phantom_master_AxisScenario_directive1;
	_SL_instance._OM_creative1=_SM_cn_monadic_phantom_master_AxisScenario_creative1;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario_creative1=_SM_cn_monadic_phantom_master_AxisScenario_creative1;
	_SL_instance._OM_operative1=_SM_cn_monadic_phantom_master_AxisScenario_operative1;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario_operative1=_SM_cn_monadic_phantom_master_AxisScenario_operative1;
	_SL_instance._OM_intrinsic1=_SM_cn_monadic_phantom_master_AxisScenario_intrinsic1;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario_intrinsic1=_SM_cn_monadic_phantom_master_AxisScenario_intrinsic1;
	_SL_instance._OM_assign2=_SM_cn_monadic_phantom_master_AxisScenario_assign2;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario_assign2=_SM_cn_monadic_phantom_master_AxisScenario_assign2;
	_SL_instance._OM_prepare=_SM_cn_monadic_phantom_master_AxisScenario_prepare;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario_prepare=_SM_cn_monadic_phantom_master_AxisScenario_prepare;
	_SL_instance._OM_reject1=_SM_cn_monadic_phantom_master_AxisScenario_reject1;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario_reject1=_SM_cn_monadic_phantom_master_AxisScenario_reject1;
	_SL_instance._OM_require1=_SM_cn_monadic_phantom_master_AxisScenario_require1;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario_require1=_SM_cn_monadic_phantom_master_AxisScenario_require1;
	_SL_instance._OM_executive1=_SM_cn_monadic_phantom_master_AxisScenario_executive1;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario_executive1=_SM_cn_monadic_phantom_master_AxisScenario_executive1;
	_SL_instance._OM_facilitate2=_SM_cn_monadic_phantom_master_AxisScenario_facilitate2;
	_SL_instance._OM_cn_monadic_phantom_master_AxisScenario_facilitate2=_SM_cn_monadic_phantom_master_AxisScenario_facilitate2;
	_SL_instance._OV_cn_monadic_phantom_master_AxisScenario_cast=null;
	_SL_instance._OV_cn_monadic_phantom_master_AxisScenario_director=null;
	_SL_instance._OV_cn_monadic_phantom_master_AxisScenario_screenplay=null;
	_SL_instance._OV_cn_monadic_phantom_master_AxisScenario_recorder=null;
	_SL_instance._OV_cn_monadic_phantom_master_AxisScenario_protocol=null;
	_SL_instance._OV_cn_monadic_phantom_master_AxisScenario_paused=false;
	_SL_instance._OV_cn_monadic_phantom_master_AxisScenario_staff=null;
	_SL_instance._OV_cn_monadic_phantom_master_AxisScenario_facilitated=false;
	_SL_instance._OV_cn_monadic_phantom_master_AxisScenario_executives=null;
	_SL_instance._OV_cn_monadic_phantom_master_AxisScenario_facilities=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_master_AxisScenario_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.AxisScenario"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.AxisScenario"+' setup object initialize');

function _SS_cn_monadic_phantom_master_AxisScenario_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.AxisScenario"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.ExecFacility"+' flush functions');

function _SO_cn_monadic_phantom_master_ExecFacility_ExecFacility1(_SL_s)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_master_ExecFacility);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_master_ExecFacility_init);
	this._OV_cn_monadic_phantom_master_ExecFacility_id=_SL_s;
}
function _SM_cn_monadic_phantom_master_ExecFacility_identifier()
{
	return this._OV_cn_monadic_phantom_master_ExecFacility_id;
}
function _SM_cn_monadic_phantom_master_ExecFacility_assist1(_SL_s)
{
	this._OV_cn_monadic_phantom_master_ExecFacility_context=_SL_s;
}
function _SM_cn_monadic_phantom_master_ExecFacility_bind1e(_SL_f)
{
	this._OV_cn_monadic_phantom_master_ExecFacility_delegated=_SL_f;
}
function _SM_cn_monadic_phantom_master_ExecFacility_handle1(_SL_dataf)
{
	var _SL_funca=this._OV_cn_monadic_phantom_master_ExecFacility_delegated;
	_SL_funca(this._OV_cn_monadic_phantom_master_ExecFacility_context,_SL_dataf);
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.ExecFacility"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.master.ExecFacility"),new Array("cn.monadic.phantom.master.Facility","cn.monadic.phantom.master.Operative"));
var _SC_cn_monadic_phantom_master_ExecFacility=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.ExecFacility"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.ExecFacility"+' setup object binder');

function _SS_cn_monadic_phantom_master_ExecFacility_bind(_SL_instance)
{
	_SL_instance._OM_identifier=_SM_cn_monadic_phantom_master_ExecFacility_identifier;
	_SL_instance._OM_cn_monadic_phantom_master_ExecFacility_identifier=_SM_cn_monadic_phantom_master_ExecFacility_identifier;
	_SL_instance._OM_assist1=_SM_cn_monadic_phantom_master_ExecFacility_assist1;
	_SL_instance._OM_cn_monadic_phantom_master_ExecFacility_assist1=_SM_cn_monadic_phantom_master_ExecFacility_assist1;
	_SL_instance._OM_bind1e=_SM_cn_monadic_phantom_master_ExecFacility_bind1e;
	_SL_instance._OM_cn_monadic_phantom_master_ExecFacility_bind1e=_SM_cn_monadic_phantom_master_ExecFacility_bind1e;
	_SL_instance._OM_handle1=_SM_cn_monadic_phantom_master_ExecFacility_handle1;
	_SL_instance._OM_cn_monadic_phantom_master_ExecFacility_handle1=_SM_cn_monadic_phantom_master_ExecFacility_handle1;
	_SL_instance._OV_cn_monadic_phantom_master_ExecFacility_id=null;
	_SL_instance._OV_cn_monadic_phantom_master_ExecFacility_context=null;
	_SL_instance._OV_cn_monadic_phantom_master_ExecFacility_delegated=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_master_ExecFacility_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.ExecFacility"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.ExecFacility"+' setup object initialize');

function _SS_cn_monadic_phantom_master_ExecFacility_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.ExecFacility"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.ExecRadiator"+' flush functions');

function _SO_cn_monadic_phantom_master_ExecRadiator_ExecRadiator1(_SL_s)
{
	_SM_jazzy_lang_ClassLoader_bind2(this,_SC_cn_monadic_phantom_master_ExecRadiator);
	_SM_jazzy_lang_System_CALL2(this,_SS_cn_monadic_phantom_master_ExecRadiator_init);
	this._OV_cn_monadic_phantom_master_ExecRadiator_id=_SL_s;
}
function _SM_cn_monadic_phantom_master_ExecRadiator_identifier()
{
	return this._OV_cn_monadic_phantom_master_ExecRadiator_id;
}
function _SM_cn_monadic_phantom_master_ExecRadiator_assist1(_SL_s)
{
	this._OV_cn_monadic_phantom_master_ExecRadiator_context=_SL_s;
}
function _SM_cn_monadic_phantom_master_ExecRadiator_bind1c(_SL_f)
{
	this._OV_cn_monadic_phantom_master_ExecRadiator_delegated=_SL_f;
}
function _SM_cn_monadic_phantom_master_ExecRadiator_radiate1(_SL_t)
{
	var _SL_funca=this._OV_cn_monadic_phantom_master_ExecRadiator_delegated;
	_SL_funca(this._OV_cn_monadic_phantom_master_ExecRadiator_context,_SL_t);
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.ExecRadiator"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.master.ExecRadiator"),new Array("cn.monadic.phantom.causal.Radiative","cn.monadic.phantom.master.Operative"));
var _SC_cn_monadic_phantom_master_ExecRadiator=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.ExecRadiator"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.ExecRadiator"+' setup object binder');

function _SS_cn_monadic_phantom_master_ExecRadiator_bind(_SL_instance)
{
	_SL_instance._OM_identifier=_SM_cn_monadic_phantom_master_ExecRadiator_identifier;
	_SL_instance._OM_cn_monadic_phantom_master_ExecRadiator_identifier=_SM_cn_monadic_phantom_master_ExecRadiator_identifier;
	_SL_instance._OM_assist1=_SM_cn_monadic_phantom_master_ExecRadiator_assist1;
	_SL_instance._OM_cn_monadic_phantom_master_ExecRadiator_assist1=_SM_cn_monadic_phantom_master_ExecRadiator_assist1;
	_SL_instance._OM_bind1c=_SM_cn_monadic_phantom_master_ExecRadiator_bind1c;
	_SL_instance._OM_cn_monadic_phantom_master_ExecRadiator_bind1c=_SM_cn_monadic_phantom_master_ExecRadiator_bind1c;
	_SL_instance._OM_radiate1=_SM_cn_monadic_phantom_master_ExecRadiator_radiate1;
	_SL_instance._OM_cn_monadic_phantom_master_ExecRadiator_radiate1=_SM_cn_monadic_phantom_master_ExecRadiator_radiate1;
	_SL_instance._OV_cn_monadic_phantom_master_ExecRadiator_id=null;
	_SL_instance._OV_cn_monadic_phantom_master_ExecRadiator_context=null;
	_SL_instance._OV_cn_monadic_phantom_master_ExecRadiator_delegated=null;
}
_CL._OM_jazzy_lang_Class_bind1=_SS_cn_monadic_phantom_master_ExecRadiator_bind;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.ExecRadiator"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.ExecRadiator"+' setup object initialize');

function _SS_cn_monadic_phantom_master_ExecRadiator_init()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.ExecRadiator"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.Facility"+' flush functions');



_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.Facility"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.master.Facility"),new Array());
var _SC_cn_monadic_phantom_master_Facility=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.Facility"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.Facility"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.Facility"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.Operative"+' flush functions');


_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.Operative"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.master.Operative"),new Array());
var _SC_cn_monadic_phantom_master_Operative=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.Operative"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.Operative"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.Operative"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.Scenario"+' flush functions');



_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.Scenario"+' create class');
_CL=new _SO_jazzy_lang_Class_Class2(new Array("cn.monadic.phantom.master.Scenario"),new Array());
var _SC_cn_monadic_phantom_master_Scenario=_CL;
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.Scenario"+' setup static binder');
_CL._OM_jazzy_lang_Class_bind=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.Scenario"+' setup static initializer');
_CL._OM_jazzy_lang_Class_init=
function()
{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.master.Scenario"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.tuning.TreeUtility"+' flush functions');

function _SM_cn_monadic_phantom_tuning_TreeUtility_addPathString2(_SL_path,_SL_vd)
{
	return _SL_path+_SL_vd._OM_identifier()+"/";
}
function _SM_cn_monadic_phantom_tuning_TreeUtility_toPathString1(_SL_v)
{
	if(_SL_v==null)
		return "/";
	var _SL_x="";
	var _SL_y=_SL_v;
	while(_SL_y!=null)
	{
		_SL_x=_SL_y._OM_identifier()+"/"+_SL_x;
		_SL_y=_SL_y._OM_parent();
	}
	return "/"+_SL_x;
}
function _SM_cn_monadic_phantom_tuning_TreeUtility_visit2(_SL_v,_SL_visitor)
{
	_SM_cn_monadic_phantom_tuning_TreeUtility_visit3a(_SL_v,_SM_cn_monadic_phantom_tuning_TreeUtility_toPathString1(_SL_v._OM_parent()),_SL_visitor);
}
function _SM_cn_monadic_phantom_tuning_TreeUtility_visit3a(_SL_v,_SL_patha,_SL_visitorb)
{
	var _SL_pk=_SM_cn_monadic_phantom_tuning_TreeUtility_addPathString2(_SL_patha,_SL_v);
	_SL_visitorb(_SL_v,_SL_pk);
	var _SL_Ne=_SL_v._OM_count();
	for(var _SL_ij=0;_SL_ij<_SL_Ne;_SL_ij++)
	{
		_SM_cn_monadic_phantom_tuning_TreeUtility_visit3a(_SL_v._OM_child1(_SL_ij),_SL_pk,_SL_visitorb);
	}
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.tuning.TreeUtility"+' setup static binder');

_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.tuning.TreeUtility"+' setup static initializer');

{
}
_SM_jazzy_lang_StackTrace_trackon1("cn.monadic.phantom.tuning.TreeUtility"+' setup funtions');

_SM_jazzy_lang_StackTrace_trackout2(null,0);