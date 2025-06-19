//Utility functions are helper functions that perform common, often repetitive tasks. 
//They are designed to be reusable and are typically independent of the specific application logic. 
//Utility functions can be used across different parts of an application or even in different projects.
class stringUtility {
    static toCamelCase(str){
       return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    }
    static toSnakeCase(str){
        return str.replace(/([A-Z])/g, function (g) { return '-' + g.toLowerCase(); });
    }
}
console.log(stringUtility.toCamelCase('hello-world'));
console.log(stringUtility.toSnakeCase('helloWorld'));

class MathUtils {
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        return a / b;
    }
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
}