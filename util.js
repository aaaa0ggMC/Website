function setElement(ele,item,value) {
	ele[item] = value;//Set value
}

function setElementDoc(nam,item,value){
	setElement(document.getElementById(nam),item,value);//Find in document
}

function clone(obj) {
    var c = obj instanceof Array ? [] : {};
    for (var i in obj) if (obj.hasOwnProperty(i)) {
            var prop = obj[i];
            if (typeof prop == 'object') {
                if (prop instanceof Array) {
                    c[i] = [];
                    for (var j = 0; j < prop.length; j++) {
                        if (typeof prop[j] != 'object') {
                            c[i].push(prop[j]);
                        } else {
                            c[i].push(clone(prop[j]));
                        }
                    }
                } else {
                    c[i] = clone(prop);
                }
            } else {
                c[i] = prop;
            }
        }
    return c;
}