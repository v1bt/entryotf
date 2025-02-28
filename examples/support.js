const efont = '원하는 글꼴 이름';
const font_url = `https://entryfonts.vercel.app/fonts/${efont}.otf`;

(async() => {
    try {
        const font = await new FontFace('balatro', `url(${font_url})`).load();
        document.fonts.add(font);
        console.log(font);
    } catch (error) {
        console.error('오류:', error);
    }
})();
