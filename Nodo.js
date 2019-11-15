class Nodo {
	constructor(n) {
		this._codigo = n;
		this._hI = null;
		this._hD = null;
    }
    
	get codigo() {
        return this._codigo;
    }

	get hI() {
        return this._hI;
    }

    set hI(v) {
        this._hI = v;
    }

	get hD() {
        return this._hD;
    }

	set hD(v) {
        this._hD = v;
    }
}