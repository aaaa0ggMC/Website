function LS_Exception(str){
	return "Error:" + str;
}

function LS_readItem(nam) {
	var a = localStorage[nam];
	if(a == null)throw LS_Exception("Local storage does not have the element named \"" + nam + "\"!");
	else return a;
}

function LS_newElement(nam,va) {
	try{
		LS_readItem(nam);
	}catch(String){
		//Create new one
		LS_modElement(nam,va);
		return;
	}
	throw LS_Exception("Item \"" + nam + "\"exists!");
}

function LS_setElement(nam,va) {
	try{
		LS_readItem(nam);
	}catch(String){
		//throw
		throw LS_Exception("Item \"" + nam + "\" does not exist!");
	}
	//Set the element
	LS_modElement(nam,va);
}

function LS_modElement(nam,va) {//Modifi item
	localStorage[nam] = va;
	return localStorage[nam];
}

function LS_delItem(nam){
	var item = LS_readItem(nam);//Read the item
	var va = copy(item);//Deep copy the value
	localStorage[nam] = null;//Delete Item
	return va;//Return origin value
}