

export const TypingTest = () => {
    let para = document.createElement('div');
    para.setAttribute('id', 'para');

    para.innerHTML = `
            <span id="untyped"></span>
            <span id="typed">
                The dawn broke over the tranquil horizon, painting the sky in hues of fiery orange and soft pink. The gentle breeze whispered through the trees, creating a symphony of rustling leaves. Birds chirped joyfully, welcoming the new day. Nature awakened, filled with promises and possibilities, inviting us to embark on a journey of discovery and wonder.
            </span>
            <input type="text">
            `
    return para;
}