function groupAnagrams(arr) {
    const anagramGroups = {};
 
    for (const str of arr) {
        const chars = Array.from(str);
        chars.sort();
        const canonical = chars.join('');
 
        if (anagramGroups.hasOwnProperty(canonical)) {
            anagramGroups[canonical].push(str);
        } else {
            anagramGroups[canonical] = [str];
        }
    }
    
    return Object.values(anagramGroups);
}


let arr1 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
let arr2 = ['abc', 'cab', 'bca', 'xyz', 'zyx']
console.log(groupAnagrams(arr1))
console.log(groupAnagrams(arr2))

// or using Map

function groupAnagrams2(arr) {
    const anagramGroups = new Map();
 
    for (const str of arr) {
        const chars = Array.from(str);
        chars.sort();
        const canonical = chars.join('');
 
        if (anagramGroups.has(canonical)) {
            anagramGroups.get(canonical).push(str);
        } else {
            const group = [str];
            anagramGroups.set(canonical, group);
        }
    }
 
    return Array.from(anagramGroups.values());
}

arr1 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
arr2 = ['abc', 'cab', 'bca', 'xyz', 'zyx']
console.log(groupAnagrams2(arr1))
console.log(groupAnagrams2(arr2))