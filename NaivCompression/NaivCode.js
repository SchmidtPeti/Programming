const AtLeastCharacterLength = (text) => {
    return (Math.ceil(Math.log2(getFrequencyLength(text)))*text.length)
}
const getFrequencyLength = (text) => {
    let freq = [];
    let counter = 0;
    for (let i=0; i<text.length;i++) {
        let character = text[i];
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
            counter++
        }
    }

    return counter;
};
export {AtLeastCharacterLength};
