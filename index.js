function update(textarea) {
    let string = textarea.value.toLowerCase();
    let result = document.getElementById("result");

    let uniqueChars = new Set();
    for (let i = 0; i < string.length - 1; i++) {
        // check validity
        if (string[i] === string[i + 1]) {
            result.innerText = `consecutive char: '${string[i]}'`
            return;
        }

        uniqueChars.add(string[i])
    }
    uniqueChars.add(string[string.length - 1]);

    let maxOrder = 0;
    for (let char1 of uniqueChars) {
        for (let char2 of uniqueChars) {
            if (char1 === char2) {
                continue
            }

            let order = -1;
            let awaitingChar1 = true;
            for (let i = 0; i < string.length; i++) {
                if (string[i] === char1 && awaitingChar1) {
                    awaitingChar1 = false;
                    order++;
                } else if (string[i] === char2 && !awaitingChar1) {
                    awaitingChar1 = true;
                    order++;
                }
            }

            maxOrder = Math.max(maxOrder, order);
        }
    }

    result.innerText = `order: ${maxOrder}`;
}
