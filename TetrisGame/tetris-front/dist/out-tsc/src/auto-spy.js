/** Create an object with methods that are autoSpy-ed to use as mock dependency */
export function autoSpy(obj) {
    const res = {};
    // turns out that in target:es2015 the methods attached to the prototype are not enumerable so Object.keys returns []. So to workaround that and keep some backwards compatibility - merge with ownPropertyNames - that disregards the enumerable property.
    const keys = [...Object.keys(obj.prototype), ...Object.getOwnPropertyNames(obj.prototype)];
    keys.forEach(key => {
        res[key] = jasmine.createSpy(key);
    });
    return res;
}
//# sourceMappingURL=auto-spy.js.map