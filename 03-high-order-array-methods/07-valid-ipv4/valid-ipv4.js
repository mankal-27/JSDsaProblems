const isValidIPv4 = (ipv) => {
    const newIpv = ipv.split('.')
    if(newIpv.length !== 4){
        return false
    }
    const eachIpv = newIpv.every((eachValue) => {
        const num = parseInt(eachValue, 10);
        return !isNaN(num) && num >= 0 && num <= 255 && String(num) === eachValue;
    })
    return eachIpv
};

module.exports = isValidIPv4;
