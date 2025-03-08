const font_url = `OTF 파일 Url`;
const efont = '글꼴 이름'

(async() => {
    try {
        const font = await new FontFace(efont, `url(${font_url})`).load();
        document.fonts.add(font);
        Entry.playground.object.entity.setFontType(efont)
        console.log(`%c EntryOTF %c ${efont} 글꼴이 설치되었어요. %c `, 'background: black; color: white; border-radius: 5px 0px 0px 5px;', 'background: #08c490; color: white; border-radius: 0px 5px 5px 0px;', '')
    } catch (error) {
        console.log(`%c EntryOTF %c ${error} %c `, 'background: black; color: white; border-radius: 5px 0px 0px 5px;', 'background: #f82e3a; color: white; border-radius: 0px 5px 5px 0px;', '')
    }
})();
