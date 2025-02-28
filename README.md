# EntryOTF
![Vercel Deploy](https://deploy-badge.vercel.app/vercel/entryfonts)

엔트리에서 외부 글꼴을 이용해보세요.

# 적용법
## 제작자
### 지원하는 폰트를 사용하려면
아래 js코드를 콘솔에 붙여넣으세요.<br>
[여기서 확인 가능합니다.](https://github.com/v1bt/entryotf/blob/main/examples/support.js)

```js
const efont = '원하는 글꼴 이름';
const font_url = `https://entryfonts.vercel.app/fonts/${efont}.otf`;

(async() => {
    try {
        const font = await new FontFace(efont, `url(${font_url})`).load();
        document.fonts.add(font);
        Entry.playground.object.entity.setFontType(font)
        console.log(`%c EntryOTF %c ${efont} 글꼴이 설치되었어요. %c `, 'background: black; color: white; border-radius: 5px 0px 0px 5px;', 'background: #08c490; color: white; border-radius: 0px 5px 5px 0px;', '')
    } catch (error) {
        console.log(`%c EntryOTF %c ${error} %c `, 'background: black; color: white; border-radius: 5px 0px 0px 5px;', 'background: #f82e3a; color: white; border-radius: 0px 5px 5px 0px;', '')
    }
})();
```
### 원하는 폰트를 사용하려면
직접 OTF 파일을 업로드하고 다운로드하세요.<br>
[여기서 확인 가능합니다.](https://github.com/v1bt/entryotf/blob/main/examples/support.js)
```js
const font_url = `OTF 파일 Url`;
const efont = '글꼴 이름'

(async() => {
    try {
        const font = await new FontFace(efont, `url(${font_url})`).load();
        document.fonts.add(font);
        Entry.playground.object.entity.setFontType(font)
        console.log(`%c EntryOTF %c ${efont} 글꼴이 설치되었어요. %c `, 'background: black; color: white; border-radius: 5px 0px 0px 5px;', 'background: #08c490; color: white; border-radius: 0px 5px 5px 0px;', '')
    } catch (error) {
        console.log(`%c EntryOTF %c ${error} %c `, 'background: black; color: white; border-radius: 5px 0px 0px 5px;', 'background: #f82e3a; color: white; border-radius: 0px 5px 5px 0px;', '')
    }
})();
```
`공유 서비스 차후 다시 개발`

### 기재법
딱히 따르지 않아도 상관없다만 사용자 경험을 조금이라도 올리고 싶은 분은 작품소개란에
```md
아래 노하우 팁에 따라 [글꼴 이름]을 설치해주세요.
https://naver.me/5N1Ib88n
```
이런식으로 적어주시면 될것같습니다.

## 사용자
해당 작품의 지시에 따라 설정을 마치세요.
