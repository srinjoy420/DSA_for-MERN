function isAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;
    s1 = s1.split("").sort().join("");
    s2 = s2.split("").sort().join("");
    return s1 === s2;
}

const s1 = "listen";
const s2 = "silent";

console.log(isAnagram(s1, s2)); // true