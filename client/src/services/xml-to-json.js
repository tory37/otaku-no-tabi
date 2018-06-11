function xmlToJson(xml) {
    var xmlDom;
    
    if (typeof xml === "string") {
        xmlDom = new DOMParser().parseFromString(xml, 'text/xml');
    } else {
        xmlDom = xml;
    }

	// Create the return object
	var obj = {};

	if (xmlDom.nodeType == 1) { // element
		// do attributes
		if (xmlDom.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xmlDom.attributes.length; j++) {
				var attribute = xmlDom.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xmlDom.nodeType == 3) { // text
		obj = xmlDom.nodeValue;
	}

	// do children
	// If just one text node inside
	if (xmlDom.hasChildNodes() && xmlDom.childNodes.length === 1 && xmlDom.childNodes[0].nodeType === 3) {
		obj = xmlDom.childNodes[0].nodeValue;
	}
	else if (xmlDom.hasChildNodes()) {
		for(var i = 0; i < xmlDom.childNodes.length; i++) {
			var item = xmlDom.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
}

export default xmlToJson;