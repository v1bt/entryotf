const efont = 'balatro';
const font_url = `https://entryfonts.vercel.app/fonts/${efont}.otf`;

(async() => {
    try {
        const font = await new FontFace('balatro', `url(${font_url})`).load();
        document.fonts.add(font);
        Entry.playground.object.entity.setFontType('balatro');
    } catch (error) {
        console.error('댓글로 해당 메시지를 적어주세요:', error);
    }
})();
