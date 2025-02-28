const font_url = `OTF 파일 Url`;

(async() => {
    try {
        const font = await new FontFace('balatro', `url(${font_url})`).load();
        document.fonts.add(font);
        console.log(font);
    } catch (error) {
        console.error('오류:', error);
    }
})();
