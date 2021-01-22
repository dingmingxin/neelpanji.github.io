const E = {
        by: "by",
        across: "Across",
        down: "Down",
        checkAnswers: "Check answers",
        solve: "Solve",
        close: "Close",
        letters: "letters",
        congrats1: "You did it!",
        congrats2: "You\u2019ve solved the puzzle.",
        checkBefore: "",
        checkOf: "of",
        checkAfter: "words are correct.",
        terms: "Terms of Use",
        makeYourOwn: "Make your own with the free EclipseCrossword app."
    },
    L = {
        en: E,
        de: {
            by: "von",
            across: "Horizontal",
            down: "Vertikal",
            checkAnswers: "Antworten kontrollieren",
            solve: "L\xF6sen",
            close: "Schlie\xDFe",
            letters: "buchstaben",
            congrats1: "Du hast es geschafft!",
            congrats2: "Du hast das R\xE4tsel gel\xF6st.",
            checkBefore: "",
            checkOf: "von",
            checkAfter: "W\xF6rtern sind korrekt.",
            terms: "Nutzungsbedingungen",
            makeYourOwn: "Machen Sie Ihre eigenen mit der kostenlosen EclipseCrossword App."
        },
        es: {
            by: "por",
            across: "Horizontales",
            down: "Verticales",
            checkAnswers: "Revisar respuestas",
            solve: "Resolver",
            close: "Cerrar",
            letters: "letras",
            congrats1: "\xA1Lo hiciste!",
            congrats2: "Has resuelto el rompecabezas.",
            checkBefore: "",
            checkOf: "de",
            checkAfter: "palabras son correctas.",
            terms: "T\xE9rminos de Uso",
            makeYourOwn: "Haga el suyo con la aplicaci\xF3n gratuita EclipseCrossword."
        },
        fr: {
            by: "par",
            across: "Horizontalement",
            down: "Verticalement",
            checkAnswers: "V\xE9rifier les r\xE9ponses",
            solve: "R\xE9soudre",
            close: "Ferme",
            letters: "lettres",
            congrats1: "Tu l\u2019as fait!",
            congrats2: "Vous avez r\xE9solu le puzzle.",
            checkBefore: "",
            checkOf: "mots sur",
            checkAfter: "sont corrects.",
            terms: "Conditions d\u2019utilisation",
            makeYourOwn: "Cr\xE9ez le v\xF4tre avec l\u2019application gratuite EclipseCrossword."
        },
        it: {
            by: "di",
            across: "Orizzontali",
            down: "Verticali",
            checkAnswers: "Verifica le risposte",
            solve: "Risolvere",
            close: "Chiudi",
            letters: "lettere",
            congrats1: "Ce l\u2019hai fatta!",
            congrats2: "Hai risolto il puzzle.",
            checkBefore: "",
            checkOf: "parole su",
            checkAfter: "sono corrette.",
            terms: "Condizioni d\u2019uso",
            makeYourOwn: "Creane uno tuo con l\u2019app gratuita EclipseCrossword."
        },
        pt: {
            by: "de",
            across: "Horizontais",
            down: "Verticais",
            checkAnswers: "Verifique as respostas",
            solve: "Resolver",
            close: "Fechar",
            letters: "letras",
            congrats1: "Voc\xEA fez isso!",
            congrats2: "Voc\xEA resolveu o quebra-cabe\xE7a.",
            checkBefore: "",
            checkOf: "de",
            checkAfter: "palavras est\xE3o corretas.",
            terms: "Termos de uso",
            makeYourOwn: "Fa\xE7a o seu pr\xF3prio com o aplicativo gratuito EclipseCrossword."
        }
    };
var a;
(function(c) {
    c[c.Across = 0] = "Across", c[c.Down = 1] = "Down"
})(a || (a = {}));
const k = "http://www.w3.org/2000/svg",
    b = 20,
    m = 32,
    p = .5,
    B = m / 2,
    P = 26,
    S = 2,
    W = 14,
    C = .5,
    M = 1,
    y = 1.5,
    x = .75,
    A = (c, e, s) => {
        if (c.length === 0) return 0;
        let t = 837;
        const i = (c.charAt(0).trim().length === 0 ? 32 : c.charCodeAt(0)) * (71 * (e + 1) + s) % 1138,
            n = c.length;
        for (let o = 0; o < n; o++) {
            const r = c.charAt(o).trim().length === 0 ? 32 : c.charCodeAt(o);
            t = (t + r * (o % 5 + 1)) * i % 98784001
        }
        return t
    };
class I {
    constructor(e, s, t = void 0) {
        this.width = e, this.height = s;
        const i = new Array(e * s);
        t !== void 0 && i.fill(t), this._cells = i, this.get = (n, o) => i[o * e + n], this.set = (n, o, r) => {
            i[o * e + n] = r
        }
    }
}
class T {
    constructor(e) {
        this._isInCtor = !0, window.visualViewport ? window.visualViewport.addEventListener("resize", this._onResize.bind(this)) : window.addEventListener("resize", this._onResize.bind(this)), this._changeCallback = e, this._onResize(), this._isInCtor = !1
    }
    _onResize() {
        const e = Math.min(window.innerWidth, document.documentElement.clientWidth, window.innerHeight, document.documentElement.clientHeight);
        this._isPhoneSize = e <= 600, this._isTouchMode = window.matchMedia("(pointer: coarse)").matches, window.visualViewport ? this._viewportHeight = window.visualViewport.height : this._viewportHeight = Math.min(window.innerHeight, document.documentElement.clientHeight), this._isInCtor || this._changeCallback()
    }
    get isPhoneSize() {
        return this._isPhoneSize
    }
    get isTouchMode() {
        return this._isTouchMode
    }
    get viewportHeight() {
        return this._viewportHeight
    }
}
class z {
    constructor(e) {
        if (!e || e.version > 1 || !e.words || e.words.length === 0) throw new Error;
        e.words.sort((o, r) => o.y - r.y || o.x - r.x || o.direction - r.direction);
        let s = 0,
            t, i = 0,
            n = 0;
        for (let o = 0; o < e.words.length; o++) {
            const r = e.words[o];
            r.index = o, (!t || r.x !== t.x || r.y !== t.y) && s++, r.number = s;
            const l = r,
                h = l.x + (l.direction === 0 ? l.length : 1),
                u = l.y + (l.direction === 1 ? l.length : 1);
            h > i && (i = h), u > n && (n = u), t = r
        }
        this._words = e.words, this._grid = new I(i, n, void 0);
        for (let o = 0; o < this._words.length; o++) {
            const r = this._words[o];
            for (let l = 0; l < r.length; l++) {
                const h = r.x + (r.direction === 0 ? l : 0),
                    u = r.y + (r.direction === 1 ? l : 0);
                let d = this._grid.get(h, u);
                d ? (l === 0 && r.number && (d.number = r.number), r.direction === 0 ? d.across = r : d.down = r) : (d = {
                    number: l ? 0 : r.number
                }, r.direction === 0 ? d.across = r : d.down = r, this._grid.set(h, u, d))
            }
        }
        this.words.sort((o, r) => o.direction - r.direction || o.number - r.number);
        for (let o = 0; o < this._words.length; o++) {
            const r = this._words[o];
            r.index = o
        }
    }
    cellFor(e, s) {
        return this.grid.get(e.x + (e.direction === 0 ? s : 0), e.y + (e.direction === 1 ? s : 0))
    }
    get words() {
        return this._words
    }
    get grid() {
        return this._grid
    }
}
class H {
    constructor(e) {
        this.openMobilePane = () => {
            this.setMobilePaneOpenedCore(!0)
        };
        this.closeMobilePane = () => {
            this.setMobilePaneOpenedCore(!1)
        };
        this._crossword = new z(e), this._remainingSolves = e.solves === !0 ? Infinity : e.solves || 0, this._remainingChecks = e.checks === !0 ? Infinity : e.checks || 0, this.localize(e.shareID), this._root = document.getElementById("root"), this.takeClues(), this.takeButtons(), this.takeMobilePane(), document.addEventListener("keydown", this.keyDown.bind(this)), this.updateSolveCounter(), this.updateCheckCounter(), this.generateSVG(), document.addEventListener("scroll", () => {
            document.documentElement.scrollTop > 1 && (document.documentElement.scrollTop = 0)
        }), window.addEventListener("beforeunload", this.onBeforeUnload.bind(this)), this._device = new T(this.onSizeChanged.bind(this)), this.onSizeChanged()
    }
    localize(e) {
        let s = document.documentElement.lang || "en";
        if (!(s in L)) {
            const i = s.split("-")[0];
            i in L ? s = i : (console.warn(`Unknown language ${s}; falling back to English.`), s = "en")
        }
        const t = L[s];
        document.querySelectorAll("[data-locid]").forEach(i => {
            const n = i.dataset.locid.valueOf(),
                o = t[n];
            n === "makeYourOwn" ? i.innerHTML = o.replace("EclipseCrossword", `<a href="https://www.eclipsecrossword.com/share/back?from-share=${e}" target="_blank">EclipseCrossword</a>`) : o !== void 0 ? i.innerText = o : console.error(`Missing localization (${s}): ${n}`)
        })
    }
    takeClues() {
        let e = 0;
        const s = document.getElementById("across-clues").getElementsByTagName("li");
        let t = 0;
        const i = document.getElementById("down-clues").getElementsByTagName("li");
        for (const n of this._crossword.words) n.direction === 0 ? n.clueUI = s[e++] : n.clueUI = i[t++], n.clueUI.addEventListener("click", this.selectWord.bind(this, n, 0))
    }
    takeButtons() {
        this._solveButton = document.getElementById("solve-button"), this._solveButton.addEventListener("click", this.solveWord.bind(this)), this._solveCounter = document.getElementById("solves-left"), this._checkButton = document.getElementById("check-button"), this._checkButton.addEventListener("click", this.checkPuzzle.bind(this)), this._checkCounter = document.getElementById("checks-left"), this._congratsMessage = document.getElementById("congrats-message"), this._checkMessage = document.getElementById("check-message"), this._checkCorrectWords = document.getElementById("check-correct-words"), this._checkWordCount = document.getElementById("check-word-count")
    }
    takeMobilePane() {
        this._curtain = document.getElementById("curtain"), this._curtain.addEventListener("click", this.onCloseMobilePaneClick.bind(this)), this._mobilePane = document.getElementById("mobile-pane"), this._mobilePane.addEventListener("click", this.openMobilePane.bind(this)), this._mobilePaneBackButton = document.getElementById("mobile-pane-back"), this._mobilePaneBackButton.addEventListener("click", this.onCloseMobilePaneClick.bind(this)), this._mobilePaneCheckButton = document.getElementById("check-button-mobile"), this._mobilePaneCheckButton.addEventListener("click", this.checkPuzzle.bind(this)), this._mobilePaneCheckCounter = document.getElementById("checks-left-mobile"), this._mobilePaneClue = document.getElementById("clue-mobile"), this._mobilePaneEntryBox = document.getElementById("entry-box-mobile"), this._mobilePaneLetterCountArea = document.getElementById("letter-count-area-mobile"), this._mobilePaneLetterCountArea.addEventListener("animationend", () => this._mobilePaneLetterCountArea.classList.remove("error")), this._mobilePaneLetterCount = document.getElementById("letter-count-mobile"), this._mobilePaneSolveButton = document.getElementById("solve-button-mobile"), this._mobilePaneSolveButton.addEventListener("click", this.solveWord.bind(this)), this._mobilePaneSolveCounter = document.getElementById("solves-left-mobile"), this._mobilePaneCloseClueButton = document.getElementById("close-clue-button-mobile"), this._mobilePaneCloseClueButton.addEventListener("click", this.onCloseMobilePaneClick.bind(this))
    }
    generateSVG() {
        const e = this._crossword.grid,
            s = (b + p) * 2 + m * e.width,
            t = (b + p) * 2 + m * e.height,
            i = document.getElementById("crossword-svg-container"),
            n = document.createElementNS(k, "svg");
        n.setAttribute("width", `${s}`), n.setAttribute("height", `${t}`), n.innerHTML = "<use href=#grid filter=url(#shadow) opacity=0.1 x=1 y=1 /><g id=grid></g><rect id=selection-border-back x=50% y=50% width=0 height=0 filter=url(#glow) class=selection-border-back opacity=0 /><rect id=selection-border-front x=50% y=50% width=0 height=0 class=selection-border-front opacity=0 /><defs><filter id=glow x=-20% y=-20% width=140% height=140%><feGaussianBlur stdDeviation=3 result=blur /><feComposite operator=out in=blur in2=SourceAlpha /></filter><filter id=shadow><feGaussianBlur in=SourceAlpha stdDeviation=3 /></filter></defs>", i.appendChild(n);
        const o = document.getElementById("shadow");
        o.setAttribute("x", `${-b}`), o.setAttribute("y", `${-b}`), o.setAttribute("width", `${s}`), o.setAttribute("height", `${t}`);
        const r = document.getElementById("grid");
        let l = b + p;
        for (let h = 0; h < e.height; h++) {
            let u = b + p;
            for (let d = 0; d < e.width; d++) {
                const w = e.get(d, h);
                if (w) {
                    const g = document.createElementNS(k, "rect");
                    g.setAttribute("x", `${u}`), g.setAttribute("y", `${l}`), g.setAttribute("class", "cell"), r.appendChild(g), g.addEventListener("click", this.selectWordAt.bind(this, d, h));
                    const f = document.createElementNS(k, "text");
                    f.setAttribute("x", `${u+B}`), f.setAttribute("y", `${l+P}`), f.setAttribute("class", "letter"), r.appendChild(f);
                    let v;
                    w.number && (v = document.createElementNS(k, "text"), v.setAttribute("x", `${u+S}`), v.setAttribute("y", `${l+W}`), v.setAttribute("class", "number"), v.textContent = `${w.number}`, r.appendChild(v)), w.ui = {
                        rect: g,
                        text: f,
                        number: v
                    }
                }
                u += m
            }
            l += m
        }
        this._selectionBorderFront = document.getElementById("selection-border-front"), this._selectionBorderBack = document.getElementById("selection-border-back")
    }
    selectWordAt(e, s) {
        const t = this._crossword.grid.get(e, s);
        if (!t) return;
        if (this._selectedWord && t.across === this._selectedWord) {
            const i = e - this._selectedWord.x;
            (this._device.isTouchMode || i === this._selectedCharacter) && t.down ? this.selectWord(t.down, s - t.down.y) : this._device.isTouchMode || this.selectCharacter(i)
        } else if (this._selectedWord && t.down === this._selectedWord) {
            const i = s - this._selectedWord.y;
            (this._device.isTouchMode || i === this._selectedCharacter) && t.across ? this.selectWord(t.across, e - t.across.x) : this._device.isTouchMode || this.selectCharacter(i)
        } else t.across && t.down ? !this._lastSelectedWord || this._lastSelectedWord.direction === 0 ? this.selectWord(t.across) : this.selectWord(t.down) : t.across ? this.selectWord(t.across) : this.selectWord(t.down)
    }
    deselect() {
        const e = this._selectedWord;
        if (!e) return;
        this._selectedWord = void 0, this._selectedCharacter = void 0;
        for (let s = 0; s < e.length; s++) {
            const t = this._crossword.cellFor(e, s);
            t.ui.rect.classList.remove("selection", "cursor"), t.ui.text.classList.remove("selection", "cursor"), t.ui.number && t.ui.number.classList.remove("selection", "cursor")
        }
        this._selectionBorderFront.setAttribute("opacity", "0"), this._selectionBorderFront.setAttribute("x", "50%"), this._selectionBorderFront.setAttribute("y", "50%"), this._selectionBorderFront.setAttribute("width", "0"), this._selectionBorderFront.setAttribute("height", "0"), this._selectionBorderBack.setAttribute("opacity", "0"), this._selectionBorderBack.setAttribute("x", "50%"), this._selectionBorderBack.setAttribute("y", "50%"), this._selectionBorderBack.setAttribute("width", "0"), this._selectionBorderBack.setAttribute("height", "0"), e.clueUI.classList.remove("selection"), this._mobilePaneEntryBox.value = "", this.updateMobilePane(), this.updateSolveCounter()
    }
    selectWord(e, s = 0) {
        if (this._selectedWord === e) return;
        this.deselect();
        for (let r = 0; r < e.length; r++) this._crossword.cellFor(e, r).ui.rect.classList.add("selection");
        const t = b + p + m * e.x,
            i = m * (e.direction === 0 ? e.length : 1),
            n = b + p + m * e.y,
            o = m * (e.direction === 1 ? e.length : 1);
        this._selectionBorderFront.setAttribute("x", `${t-C}`), this._selectionBorderFront.setAttribute("y", `${n-C}`), this._selectionBorderFront.setAttribute("width", `${i+C*2}`), this._selectionBorderFront.setAttribute("height", `${o+C*2}`), this._selectionBorderFront.setAttribute("opacity", `${M}`), this._selectionBorderBack.setAttribute("x", `${t-y}`), this._selectionBorderBack.setAttribute("y", `${n-y}`), this._selectionBorderBack.setAttribute("width", `${i+y*2}`), this._selectionBorderBack.setAttribute("height", `${o+y*2}`), this._selectionBorderBack.setAttribute("opacity", `${x}`), this._crossword.cellFor(e, e.length - 1).ui.rect.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        }), this._crossword.cellFor(e, 0).ui.rect.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        }), e.clueUI.classList.add("selection"), e.clueUI.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        }), this._selectedWord = e, this._lastSelectedWord = e, this._lastSelectedWordIndex = e.index, this.updateMobilePane(), this.updateSolveCounter(), (this._device.isTouchMode || this._device.isPhoneSize) && this.openMobilePane(), this._device.isTouchMode || this.selectCharacter(s), this._checkMessage.classList.remove("open")
    }
    selectNextWord() {
        this.selectWord(this._crossword.words[this._lastSelectedWordIndex === void 0 || this._lastSelectedWordIndex === this._crossword.words.length - 1 ? 0 : this._lastSelectedWordIndex + 1])
    }
    selectPrevWord() {
        this.selectWord(this._crossword.words[this._lastSelectedWordIndex === void 0 ? 0 : this._lastSelectedWordIndex === 0 ? this._crossword.words.length - 1 : this._lastSelectedWordIndex - 1])
    }
    selectCharacter(e) {
        if (this._isLocked || !this._selectedWord || this._selectedCharacter === e) return;
        const s = this._selectedWord;
        if (this._selectedCharacter !== void 0) {
            const t = this._crossword.cellFor(s, this._selectedCharacter);
            t.ui.rect.classList.remove("cursor"), t.ui.text.classList.remove("cursor"), t.ui.number && t.ui.number.classList.remove("cursor")
        } {
            const t = this._crossword.cellFor(s, e);
            t.ui.rect.classList.add("cursor"), t.ui.text.classList.add("cursor"), t.ui.number && t.ui.number.classList.add("cursor")
        }
        this._selectedCharacter = e
    }
    selectNextCharacter() {
        if (!this._selectedWord) return;
        this.selectCharacter((this._selectedCharacter + 1) % this._selectedWord.length)
    }
    selectPrevCharacter() {
        if (!this._selectedWord) return;
        this.selectCharacter(this._selectedCharacter ? this._selectedCharacter - 1 : this._selectedWord.length - 1)
    }
    typeCharacter(e) {
        if (this._isLocked) return;
        const s = this._selectedCharacter;
        if (s === void 0) return;
        const t = this._selectedWord;
        if (!t) return;
        e && e.trim().length === 0 && (e = null);
        const i = this._crossword.cellFor(t, s);
        i.isLocked || (i.contents = e !== null ? e : void 0, i.ui && (i.ui.rect.classList.remove("error"), i.ui.text.classList.remove("error"), i.ui.text.textContent = e)), this._isDirty = !0, this.setWordErrorState(t, !1)
    }
    setWordErrorState(e, s) {
        for (let t = 0; t < e.length; t++) {
            const i = this._crossword.cellFor(e, t);
            !i.isLocked && i.ui && (s ? (i.ui.rect.classList.add("error"), i.ui.text.classList.add("error")) : (i.ui.rect.classList.remove("error"), i.ui.text.classList.remove("error")))
        }
    }
    solveWord(e) {
        if (e && e.stopPropagation(), !this._selectedWord || !this._remainingSolves) return;
        const s = this._selectedWord;
        if (!s.word) return;
        this.enterWord(s.word, !0) === _.Success && (this._remainingSolves--, this.updateSolveCounter())
    }
    enterWord(e, s = !1) {
        if (this._isLocked) return _.Locked;
        if (!this._selectedWord) return _.NoWord;
        const t = this._selectedWord;
        if (e = e.trim().toUpperCase(), t.length !== e.length) return _.WrongLength;
        for (let i = 0; i < e.length; i++) {
            this._selectedCharacter = i, this.typeCharacter(e[i]);
            const n = this._crossword.cellFor(t, i);
            if (n.isLocked) continue;
            s && (n.isLocked = !0, n.ui && (n.ui.rect.classList.add("solved"), n.ui.text.classList.add("solved")))
        }
        return this.deselect(), this.closeMobilePane(), _.Success
    }
    updateSolveCounter() {
        this._solveButton.style.display = !this._remainingSolves || this.areAllLettersInSelectedWordLocked() ? "none" : "", this._solveCounter.innerText = this._remainingSolves === 0 || this._remainingSolves === Infinity ? "" : `(${this._remainingSolves})`, this._mobilePaneSolveButton.style.display = !this._remainingSolves || this.areAllLettersInSelectedWordLocked() ? "none" : "", this._mobilePaneSolveCounter.innerText = this._remainingSolves === 0 || this._remainingSolves === Infinity ? "" : `(${this._remainingSolves})`
    }
    isWordCorrect(e) {
        if (e.word) {
            const s = e.word;
            for (let t = 0; t < e.length; t++) {
                const i = s[t],
                    n = this._crossword.cellFor(e, t).contents;
                if (i.trim().length === 0) {
                    if (n !== void 0) return !1
                } else if (n !== i) return !1
            }
            return !0
        } else {
            let s = "";
            for (let t = 0; t < e.length; t++) {
                const i = this._crossword.cellFor(e, t).contents;
                s += i !== void 0 && i.length ? i : " "
            }
            return A(s, e.x, e.y) === e.hash
        }
    }
    checkPuzzle(e) {
        if (e && e.stopPropagation(), !this._remainingChecks) return;
        this.deselect(), this.closeMobilePane(), this._remainingChecks--;
        let s = 0;
        for (let i = 0; i < this._crossword.words.length; i++) {
            const n = this._crossword.words[i];
            this.isWordCorrect(n) ? s++ : this.setWordErrorState(n, !0)
        }
        const t = s === this._crossword.words.length;
        t ? (this._remainingChecks = 0, this._checkMessage.classList.remove("open"), this._congratsMessage.classList.add("open")) : (this._checkCorrectWords.innerText = s.toString(), this._checkWordCount.innerText = this._crossword.words.length.toString(), this._checkMessage.classList.add("open"), this._congratsMessage.classList.remove("open")), (t || !this._remainingChecks) && (this._isLocked = !0, this._isDirty = !1, this._remainingSolves = 0, this.updateSolveCounter(), this.updateMobilePane()), this.updateCheckCounter()
    }
    updateCheckCounter() {
        this._remainingChecks || (this._checkButton.style.display = "none", this._mobilePaneCheckButton.style.display = "none"), this._checkCounter.innerText = this._remainingChecks === 0 || this._remainingChecks === Infinity ? "" : `(${this._remainingChecks})`, this._mobilePaneCheckCounter.innerText = this._remainingChecks === 0 || this._remainingChecks === Infinity ? "" : `(${this._remainingChecks})`
    }
    keyDown(e) {
        if (!e || e.defaultPrevented || e.keyCode === 229) return;
        switch (e.key) {
            case "Down":
            case "ArrowDown":
                this.selectNextWord(), e.preventDefault();
                return;
            case "Enter":
                this._isPaneOpen && this._device.isTouchMode ? this._selectedWord && this.submitAnswer() : this.selectNextWord(), e.preventDefault();
                return;
            case "Up":
            case "ArrowUp":
                this.selectPrevWord(), e.preventDefault();
                return;
            case "Tab":
                e.shiftKey ? this.selectPrevWord() : this.selectNextWord(), e.preventDefault();
                return;
            case "Home":
                this._device.isTouchMode || (this.selectCharacter(0), e.preventDefault());
                return;
            case "Left":
            case "ArrowLeft":
                this._device.isTouchMode || (this.selectPrevCharacter(), e.preventDefault());
                return;
            case "Backspace":
                this._device.isTouchMode || (this.typeCharacter(null), this.selectPrevCharacter(), e.preventDefault());
                break;
            case "Right":
            case "ArrowRight":
                this._device.isTouchMode || (this.selectNextCharacter(), e.preventDefault());
                return;
            case "Delete":
                this._device.isTouchMode || (this.typeCharacter(null), e.preventDefault());
                break;
            case "Esc":
            case "Escape":
                this.deselect(), this.closeMobilePane(), e.preventDefault();
                return
        }
        if (!this._isLocked && !this._device.isTouchMode && !e.isComposing && e.key && !e.ctrlKey && !e.altKey && !e.metaKey && e.key.length === 1) {
            this.typeCharacter(e.key.toUpperCase()), this.selectNextCharacter(), e.preventDefault();
            return
        }
    }
    setMobilePaneOpenedCore(e) {
        if (e === this._isPaneOpen) return;
        e == null && (e = !this._isPaneOpen), this._isPaneOpen = e, e || (this._mobilePaneEntryBox.blur(), this.deselect()), e && this._selectedWord && window.requestAnimationFrame(() => this._mobilePaneEntryBox.focus({
            preventScroll: !0
        })), this.updateMobilePane()
    }
    onCloseMobilePaneClick(e) {
        this.submitAnswer(!0), this.closeMobilePane(), e.stopPropagation()
    }
    updateMobilePane() {
        this._isPaneOpen ? (this._mobilePane.classList.add("open"), this._selectedWord ? (this._mobilePane.classList.add("has-selection"), this._curtain.classList.remove("open"), this._mobilePaneClue.innerHTML = this._selectedWord.clueUI.innerHTML, this._mobilePaneLetterCount.innerText = this._selectedWord.length.toString(), this._mobilePaneEntryBox.placeholder = "\u25AA".repeat(this._selectedWord.length)) : (this._mobilePane.classList.remove("has-selection"), this._curtain.classList.add("open"))) : (this._mobilePane.classList.remove("open"), this._mobilePane.classList.remove("has-selection"), this._curtain.classList.remove("open")), !this._isLocked && this._device.isTouchMode && !this.areAllLettersInSelectedWordLocked() ? (this._mobilePaneEntryBox.style.removeProperty("display"), this._solveButton.style.removeProperty("display")) : (this._mobilePaneEntryBox.style.display = "none", this._solveButton.style.display = "none")
    }
    submitAnswer(e = !1) {
        const s = this._mobilePaneEntryBox.value;
        if (s && s.length) {
            const t = this.enterWord(s);
            if (!e && t !== _.Success) {
                t === _.WrongLength && this._mobilePaneLetterCountArea.classList.add("error");
                return
            }
        }
        this.closeMobilePane(), this.deselect()
    }
    areAllLettersInSelectedWordLocked() {
        if (this._isLocked) return !0;
        const e = this._selectedWord;
        if (!e) return !0;
        for (let s = 0; s < e.length; s++)
            if (!this._crossword.cellFor(e, s).isLocked) return !1;
        return !0
    }
    onBeforeUnload(e) {
        this._isDirty && (e.preventDefault(), e.returnValue = "")
    }
    onSizeChanged() {
        this._device.isPhoneSize ? document.documentElement.classList.add("is-phone") : (document.documentElement.classList.remove("is-phone"), this.closeMobilePane()), this._device.isTouchMode ? document.documentElement.classList.add("is-touch") : document.documentElement.classList.remove("is-touch"), document.body.style.maxHeight = `${this._device.viewportHeight}px`, this.updateMobilePane()
    }
}
var _;
(function(c) {
    c[c.Success = 1] = "Success", c[c.NoWord = 2] = "NoWord", c[c.WrongLength = 3] = "WrongLength", c[c.Locked = 4] = "Locked"
})(_ || (_ = {}));
const D = c => {
    new H(typeof c == "string" ? JSON.parse(c) : c)
};
var F = D;
export {
    F as
    default
};