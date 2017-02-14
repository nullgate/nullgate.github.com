var Sphinx = Sphinx || {};

(function()
{

	Sphinx.options = { enable_blues: false, enable_remix: false, enable_prefetch: true};

	var jazzy = this;

	function driver_resolve(schema, variant)
	{
		variant = encodeURI(variant);
		variant = variant.replace(/\%/g, "__");
		var locator = "debris/" + schema + "/" + variant + ".txt";
		return locator;
	}

	function driver_dispatch(uri, variant)
	{
		return uri + "?" + encodeURI(variant);
	}

	function driver_encode(variant, key, value)
	{
		if(typeof value != 'undefined')
		{
			if(variant == "&.")
			{
				return variant + key + "." + value;
			}
			else
			{
				return variant + "&" + key + "." + value;
			}
		}
		else
		{
			return variant;
		}
	}

	function driver_variant(alt)
	{
		var variant = alt;

		if(window.location.search)
		{
			variant = window.location.search.substring(1);
		}
		else if(window.location.hash)
		{
			variant = window.location.hash.substring(1);
		}

		return decodeURI(variant.replace(/__/g, "%"));
	}

	Sphinx.comprehend = function(alt)
	{
		return jazzy.sphinx_decode(driver_variant(alt));
	};

	Sphinx.assert = function(t, message)
	{
		if(!t)
		{
			alert(message);
			throw message;
		}
	}

	Sphinx.color = function(name)
	{
		return jazzy.sphinx_rainbow(jazzy.sphinx_hash(name) + 77);	
	}

	Sphinx.hash = function(name)
	{
		return jazzy.sphinx_hash(name);
	}

	Sphinx.resolve = function(schema, decoded, qualified)
	{
		var variant = "&.";
		for(var i in qualified)
		{
			var q = qualified[i];
			variant = driver_encode(variant, q, decoded[q]);
		}
		return driver_resolve(schema, variant);
	};

	Sphinx.transfer = function(href, decoded, qualified)
	{
		var variant = "&.";
		for(var i in qualified)
		{
			var q = qualified[i];
			variant = driver_encode(variant, q, decoded[q]);
		}

		if(Sphinx.options["enable_prefetch"] && Sphinx.infer)
		{
			var query = Sphinx.infer(href, decoded, qualified);
			if(query)
			{
				var file = jazzy.sphinx_load(query);
				if(!file)
				{
					alert(href + "?" + variant + " is not cached for offline review");
					throw "query infeasible";
				}
			}
		}

		return driver_dispatch(href, variant);
	};

	Sphinx.dispatch = function(href, variant)
	{
		return driver_dispatch(href, variant);
	};

	Sphinx.load = function(schema, decoded, qualified)
	{
		var variant = "&.";
		for(var i in qualified)
		{
			var q = qualified[i];
			variant = driver_encode(variant, q, decoded[q]);
		}
		return jazzy.sphinx_load(driver_resolve(schema, variant));
	};

	Sphinx.parse = function(plain)
	{
		return jazzy.sphinx_parse_pivotal(plain);
	};

	Sphinx.json = function(plain)
	{
		return jazzy.sphinx_parse_json(plain);
	};

	Sphinx.order = function()
	{
		return jazzy.sphinx_partial_order();
	};

	Sphinx.debug = function(json, container)
	{
		if(!container)
		{
			container = document.getElementById("jsoneditor");
		}

		var options =
		{
			mode: "view"
		};

		var editor = new jsoneditor.JSONEditor(container, options, json);
	};

	Sphinx.cache = function(eligble)
	{
		var manifestURI = "debris.json";
		var manifest = jazzy.sphinx_load(manifestURI);
		var metadata = jazzy.sphinx_parse_json(manifest);
		var cached_root = metadata["debris"]["/"];

		var view_root = { "name" : "manifest", "children" : []};

		var index = 0;
		for(var schema in cached_root)
		{
			if(!eligble[schema])
				continue;

			var view_list = { "name" : schema, "children" : []};
			view_root.children[index] = view_list;

			var cached_list = cached_root[schema]["/"];
			var nodeIndex = 0;

			for(var variant in cached_list)
			{
				var canonical = variant.substring(0, variant.length - 4);
				var view_node = { "name" : decodeURI(canonical.replace(/__/g, "%")), "size": cached_list[variant]["_"]["volume"], "variant": canonical,"schema":schema };
				view_list.children[nodeIndex] = view_node;
				view_node.data_size = cached_root[schema]["/"][variant]["_"]["volume"];
				nodeIndex ++;
			}

			index ++;
		}

		return view_root;		
	
	};

	Sphinx.loadURI = function(uri)
	{
		return jazzy.sphinx_load(uri);
	};
	
	Sphinx.Timeline = jazzy.sphinx_timeline();

	Sphinx.encode = driver_encode;

}).call(J$fx);

var sphinxDriver = Sphinx;

