const MAX_LEN = 7;

export function generate() {
    let ans = "";
    const subset = "12345qwertyabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < MAX_LEN; i++) {
        ans += subset[Math.floor(Math.random() * subset.length)];
    }
    return ans;
}

