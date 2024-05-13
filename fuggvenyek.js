function masodfoku(a, b, c){
    
    if (a === undefined || b === undefined || c === undefined ){
        return "Nincs elég paraméter."
    }

    if(arguments.length > 3){
        return "Háromnál több paraméter";
    }

    if (isNaN(a) || isNaN(b) || isNaN(c)){
        return "Nem szám valamelyik paraméter.";
    }

    if (!isFinite(a) || !isFinite(b) || !isFinite(c) ){
        return "Túlcsordulás";
    }

    const A = Number(a);
    const B = Number(b);
    const C = Number(c);

    if (A === 0 && B === 0 && C === 0){
        return "Végtelen megoldás van.";
    }

    if (A === 0 && B === 0 && C !== 0){
        return "Nincs megoldás.";
    }

    const D = B*B - 4*A*C;

    if (D < 0){
        return "Nincs megoldás.";
    }

    if (D === 0){
        return -B / (2*A);
    }

    if (A === 0 && B !== 0){
        return -C / B;
    }

    let x1 = (-B + Math.sqrt(D))/(2*A);
    let x2 = (-B - Math.sqrt(D))/(2*A);
    return "x1 = "+x1+", x2 = "+x2;
}