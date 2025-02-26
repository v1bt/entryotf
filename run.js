const fontUrl = 'https://rawcdn.githack.com/v1bt/balatro/312fbbc3fa794c8a3e38a4efba605612882df707/balatro.woff2';

(async() => {
    try {
        const font = await new FontFace('balatro', `url(${fontUrl})`).load();
        document.fonts.add(font);
        Entry.playground.object.entity.setFontType('balatro');
    } catch (error) {
        console.error('댓글로 해당 메시지를 적어주세요:', error);
    }
})();
