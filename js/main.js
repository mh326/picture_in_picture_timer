const TIME_OVER_TEXT = "TIME OVER";

const zeroPad = (num, places) => String(num).padStart(places, '0');

async function playBeep() {
    // https://qiita.com/isseium/items/12b215b6eab26acd2afe
    // クリップボードにあるbase64文字列を貼り付けます
    var base64 = "UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZSA0PVqzn77BdGAg+ltryxnMpBSl+zPLaizsIGGS57OihUBELTKXh8bllHgU2jdXzzn0vBSF1xe/glEILElyx6OyrWBUIQ5zd8sFuJAUuhM/z1YU2Bhxqvu7mnEoODlOq5O+zYBoGPJPY88p2KwUme8rx3I4+CRZiturqpVITC0mi4PK8aB8GM4nU8tGAMQYfcsLu45ZFDBFYr+ftrVoXCECY3PLEcSYELIHO8diJOQcZaLvt559NEAxPqOPwtmMcBjiP1/PMeS0GI3fH8N2RQAoUXrTp66hVFApGnt/yvmwhBTCG0fPTgjQGHW/A7eSaRw0PVqzl77BeGQc9ltvyxnUoBSh+zPDaizsIGGS56+mjTxELTKXh8bllHgU1jdT0z3wvBSJ0xe/glEILElyx6OyrWRUIRJve8sFuJAUug8/y1oU2Bhxqvu3mnEoPDlOq5O+zYRsGPJLZ88p3KgUme8rx3I4+CRVht+rqpVMSC0mh4fK8aiAFM4nU8tGAMQYfccPu45ZFDBFYr+ftrVwWCECY3PLEcSYGK4DN8tiIOQcZZ7zs56BODwxPpuPxtmQcBjiP1/PMeywGI3fH8N+RQAoUXrTp66hWEwlGnt/yv2wiBDCG0fPTgzQHHG/A7eSaSQ0PVqvm77BeGQc9ltrzxnUoBSh9y/HajDsIF2W56+mjUREKTKPi8blnHgU1jdTy0HwvBSF0xPDglEQKElux6eyrWRUJQ5vd88FwJAQug8/y1oY2Bhxqvu3mnEwODVKp5e+zYRsGOpPX88p3KgUmecnw3Y4/CBVhtuvqpVMSC0mh4PG9aiAFM4nS89GAMQYfccLv45dGCxFYrufur1sYB0CY3PLEcycFKoDN8tiIOQcZZ7rs56BODwxPpuPxtmQdBTiP1/PMey4FI3bH8d+RQQkUXbPq66hWFQlGnt/yv2wiBDCG0PPTgzUGHG3A7uSaSQ0PVKzm7rJeGAc9ltrzyHQpBSh9y/HajDwIF2S46+mjUREKTKPi8blnHwU1jdTy0H4wBiF0xPDglEQKElux5+2sWBUJQ5vd88NvJAUtg87y1oY3Bxtpve3mnUsODlKp5PC1YRsHOpHY88p3LAUlecnw3Y8+CBZhtuvqpVMSC0mh4PG9aiAFMojT89GBMgUfccLv45dGDRBYrufur1sYB0CX2/PEcycFKoDN8tiKOQgZZ7vs56BOEQxPpuPxt2MdBTeP1vTNei4FI3bH79+RQQsUXbTo7KlXFAlFnd7zv2wiBDCF0fLUgzUGHG3A7uSaSQ0PVKzm7rJfGQc9lNrzyHUpBCh9y/HajDwJFmS46+mjUhEKTKLh8btmHwU1i9Xyz34wBiFzxfDglUMMEVux5+2sWhYIQprd88NvJAUsgs/y1oY3Bxpqve3mnUsODlKp5PC1YhsGOpHY88p5KwUlecnw3Y8+ChVgtunqp1QTCkig4PG9ayEEMojT89GBMgUfb8Lv4pdGDRBXr+fur1wXB0CX2/PEcycFKn/M8diKOQgZZrvs56BPEAxOpePxt2UcBzaP1vLOfC0FJHbH79+RQQsUXbTo7KlXFAlFnd7xwG4jBS+F0fLUhDQGHG3A7uSbSg0PVKrl7rJfGQc9lNn0yHUpBCh7yvLajTsJFmS46umkUREMSqPh8btoHgY0i9Tz0H4wBiFzw+/hlUULEVqw6O2sWhYIQprc88NxJQUsgs/y1oY3BxpqvO7mnUwPDVKo5PC1YhsGOpHY8sp5KwUleMjx3Y9ACRVgterqp1QTCkig3/K+aiEGMYjS89GBMgceb8Hu45lHDBBXrebvr1wYBz+Y2/PGcigEKn/M8dqJOwgZZrrs6KFOEAxOpd/js2coGUCLydq6e0MlP3uwybiNWDhEa5yztJRrS0lnjKOkk3leWGeAlZePfHRpbH2JhoJ+fXl9TElTVEQAAABJTkZPSUNSRAsAAAAyMDAxLTAxLTIzAABJRU5HCwAAAFRlZCBCcm9va3MAAElTRlQQAAAAU291bmQgRm9yZ2UgNC41AA=="

    // datauri scheme 形式にして Audio オブジェクトを生成します
    var sound = new Audio("data:audio/wav;base64," + base64);

    // 音を鳴らします
    sound.play();
}

function setParam(timer, params, name) {
    const param = params.get(name);
    if (param != null) {
        timer[name] = param;
    }
}

/**
 * Returns formatted string to display the left time.
 * @param leftMilliseconds {number}
 * @returns {string}
 */
function formatMilliseconds(leftMilliseconds) {
    const leftSeconds = Math.ceil(leftMilliseconds / 1000);
    if (leftSeconds === 0) {
        return TIME_OVER_TEXT;
    }
    const minutes = Math.floor(leftSeconds / 60);
    const seconds = leftSeconds % 60;
    return `${zeroPad(minutes, 2)} : ${zeroPad(seconds, 2)}`;
}

class DeadlineBasedTimer {
    /**
     * The entire timer state. Stores the time left in milliseconds if
     * stopped, or the end epoch if running.
     * @type {{endEpoch: number} & {isStopped: true, leftMilliseconds: number} | {isStopped: false}}
     */
    #state;

    constructor() {
        this.#state = {
            endEpoch: Date.now(),
            isStopped: true,
            leftMilliseconds: 0,
        };
    }

    getTimerType() {
        return "deadline";
    }

    /**
     * Sets the timer from input box parameters.
     * @param {number} hour
     * @param {number} min
     */
    setTimeFromInputBox(hour, min) {
        const today = new Date();
        today.setHours(hour);
        today.setMinutes(min);
        today.setSeconds(0);
        today.setMilliseconds(0);

        this.setEndEpoch(today.getTime());
    }

    /**
     * Set timer end epoch. The timer will not be started / stopped by this
     * method.
     * @param {number} endEpoch
     */
    setEndEpoch(endEpoch) {
        if (this.#state.isStopped) {
            this.#state = {
                endEpoch,
                isStopped: true,
                leftMilliseconds: Math.max(0, endEpoch - Date.now()),
            };
        } else {
            this.#state = {
                endEpoch,
                isStopped: false,
            };
        }
    }

    /**
     * Get milliseconds of the time left.
     * @returns {number}
     */
    getLeftMilliseconds() {
        return this.#state.isStopped
            ? this.#state.leftMilliseconds
            : Math.max(0, this.#state.endEpoch - Date.now());
    }

    start() {
        if (!this.#state.isStopped) {
            return;
        }

        const endEpoch = this.#state.endEpoch;
        this.#state = {
            isStopped: false,
            endEpoch,
        };
    }

    /**
     * Stop the timer display. Timer is still running in the background.
     */
    stop() {
        if (this.#state.isStopped) {
            return;
        }

        const endEpoch = this.#state.endEpoch;
        const leftMilliseconds = this.getLeftMilliseconds();
        this.#state = {
            endEpoch,
            isStopped: true,
            leftMilliseconds,
        };
    }

    /**
     * Returns whether the timer display is stopped or not.
     * @returns {boolean}
     */
    isStopped() {
        return this.#state.isStopped;
    }

    /**
     * Returns whether the state is actually loaded.
     */
    loadState() {
        const endEpoch = localStorage.getItem("endEpoch");
        if (endEpoch == null) return false;
        this.setEndEpoch(Number(endEpoch));
        this.stop();

        return true;
    }

    saveState() {
        if (this.getLeftMilliseconds() > 0) {
            localStorage.setItem("endEpoch", this.#state.endEpoch);
        } else {
            this.clearState();
        }
    }

    clearState() {
        localStorage.removeItem("endEpoch");
    }
}

class DurationBasedTimer {
    /**
     * The entire timer state. Stores the time left in milliseconds if
     * stopped, or the end epoch if running.
     * @type {{isStopped: true, leftMilliseconds: number} | {isStopped: false, endEpoch: number}}
     */
    #state;

    constructor() {
        this.#state = {
            isStopped: true,
            leftMilliseconds: 0,
        };
    }

    getTimerType() {
        return "duration";
    }

    /**
     * Sets the timer from input box parameters.
     * @param {number} hour
     * @param {number} min
     */
    setTimeFromInputBox(min, sec) {
        const leftSeconds = min * 60 + sec;
        this.setMilliseconds(leftSeconds * 1000);
    }

    /**
     * Set timer milliseconds. The timer will not be started / stopped by this
     * method.
     * @param {number} milliseconds
     */
    setMilliseconds(milliseconds) {
        if (this.#state.isStopped) {
            this.#state.leftMilliseconds = milliseconds;
        } else {
            this.#state.endEpoch = Date.now() + milliseconds;
        }
    }

    /**
     * Get milliseconds of the time left.
     * @returns {number}
     */
    getLeftMilliseconds() {
        return this.#state.isStopped
            ? this.#state.leftMilliseconds
            : Math.max(0, this.#state.endEpoch - Date.now());
    }

    start() {
        if (!this.#state.isStopped) {
            return;
        }

        const endEpoch = Date.now() + Number(this.#state.leftMilliseconds);
        this.#state = {
            isStopped: false,
            endEpoch,
        };
    }

    stop() {
        if (this.#state.isStopped) {
            return;
        }

        const leftMilliseconds = this.getLeftMilliseconds();
        this.#state = {
            isStopped: true,
            leftMilliseconds,
        };
    }

    /**
     * Returns whether the timer is stopped or not. In addition to explicitly
     * stopped, a timer that finishes the specified milliseconds is also
     * considered as stopped.
     * @returns {boolean}
     */
    isStopped() {
        if (this.#state.isStopped) {
            return true;
        }

        const leftMilliseconds = this.getLeftMilliseconds();
        if (leftMilliseconds === 0) {
            this.stop();
            return true;
        }

        return false;
    }

    loadState() {
        const leftMilliseconds = localStorage.getItem("leftMilliseconds");
        if (leftMilliseconds == null) return false;
        this.#state = {
            isStopped: true,
            leftMilliseconds: Number(leftMilliseconds),
        };
        return true;
    }

    saveState() {
        const leftMilliseconds = this.getLeftMilliseconds();
        if (leftMilliseconds > 0) {
            localStorage.setItem("leftMilliseconds", leftMilliseconds);
        } else {
            this.clearState();
        }
    }

    clearState() {
        localStorage.removeItem("leftMilliseconds");
    }
}

class TimerUI {
    /** @type {DurationBasedTimer | DeadlineBasedTimer} */
    #timer;

    /** @type {Array<() => void>} */
    #onUpdateHandlers;

    /** @type {Array<() => void>} */
    #justFinishedHandlers;

    constructor() {
        this.#timer = new DurationBasedTimer();
        this.#onUpdateHandlers = [];
        this.#justFinishedHandlers = [];

        this.videoContainerEl = document.getElementById("video-container");
        this.videoEl = document.getElementById("video-timer");
        this.canvasEl = document.getElementById("canvas-timer");
        this.canvasCtx = this.canvasEl.getContext('2d');

        this.font = 'sans-serif';
        this.fontSize = '52px';
        this.fontSizeTimeOver = '34px';
        this.fontColor = '59FFA0';

        this.init();
    }

    init() {
        this.setTimeFromInputBox();
        this.loadState();
        const text = formatMilliseconds(this.#timer.getLeftMilliseconds());
        this.writeToCanvas(text);
        this.loadVideo();
    }

    /**
     * @param {"duration" | "deadline"} timerType
     */
    changeTimer(timerType) {
        if (this.#timer.getTimerType() === timerType) return;
        console.log("changing");
        switch (timerType) {
            case "duration":
                this.stop();
                this.#timer = new DurationBasedTimer();
                this.init();
                break;
            case "deadline":
                this.stop();
                this.#timer = new DeadlineBasedTimer();
                this.init();
                break;
        }
    }

    toggle() {
        if (this.#timer.isStopped()) {
            this.start();
        } else {
            this.stop();
        }
    }

    start() {
        this.#timer.start();

        const update = () => {
            const leftMilliseconds = this.#timer.getLeftMilliseconds();
            if (leftMilliseconds === 0) {
                this.stop();
                this.#justFinishedHandlers.forEach(handler => handler());
            }

            const text = formatMilliseconds(this.#timer.getLeftMilliseconds());
            this.writeToCanvas(text);
            this.#onUpdateHandlers.forEach(handler => handler());
        };

        // Update UI and state periodically. This interval is how often the UI
        // update occurs, so it does not affect the timer accuracy.
        this.interval = setInterval(update, 100);

        this.playVideo();
    }

    restart() {
        this.setTimeFromInputBox();
        this.stop();
        this.start();
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
        this.#timer.stop();
        const text = formatMilliseconds(this.#timer.getLeftMilliseconds());
        this.writeToCanvas(text);
    }

    setTimeFromInputBox() {
        const inputMin = document.getElementById("input-first");
        const inputSec = document.getElementById("input-second");
        this.#timer.setTimeFromInputBox(Number(inputMin.value), Number(inputSec.value));
        const text = formatMilliseconds(this.#timer.getLeftMilliseconds());
        this.writeToCanvas(text);
    }

    loadVideo() {
        this.videoEl.srcObject = this.canvasEl.captureStream();
    }

    playVideo() {
        this.videoEl.play();

        if (this.videoEl.requestPictureInPicture !== undefined) {
            // Chromeなど、Picture-in-Picture APIに対応しているブラウザであれば
            // そのままPicture-in-Pictureモードに入る
            this.videoEl.requestPictureInPicture();
        } else {
            // Firefoxなど、Picture-in-Picture APIに対応していないブラウザであれば
            // ビデオそのものを画面に表示する
            this.videoContainerEl.hidden = false;
        }
    }

    writeToCanvas(text) {
        // writeToCanvas() can be called frequently with the same text. To
        // avoid unnecessary canvas update, we check if the text is changed.
        if (this.currentCanvasText === text) {
            return;
        }
        this.currentCanvasText = text;

        this.canvasCtx.font = this.fontSize + ' ' + this.font;
        if (text === TIME_OVER_TEXT) {
            this.canvasCtx.font = this.fontSizeTimeOver + ' ' + this.font;
        }
        this.canvasCtx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
        this.canvasCtx.fillStyle = "black";
        this.canvasCtx.fillRect(0, 0, this.canvasEl.width, this.canvasEl.height);
        this.canvasCtx.textAlign = 'center';
        this.canvasCtx.fillStyle = "#" + this.fontColor;
        this.canvasCtx.fillText(text, this.canvasEl.width / 2, this.canvasEl.height / 2);
    }

    /**
     * Adds a handler to be called when the timer is updated.
     * @param {() => void} handler
     */
    onUpdate(handler) {
        this.#onUpdateHandlers.push(handler);
    }

    /**
     * Adds a handler to be called when the timer is updated.
     * @param {() => void} handler
     */
    justFinished(handler) {
        this.#justFinishedHandlers.push(handler);
    }

    getTimerType() {
        return this.#timer.getTimerType();
    }

    loadState() {
        return this.#timer.loadState();
    }

    saveState() {
        this.#timer.saveState();
    }

    clearState() {
        this.#timer.clearState();
    }
}

window.onload = function () {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const paramMin = params.get('min');
    if (paramMin != null) {
        const min = Number(paramMin);
        if (!isNaN(min) && min >= 0) {
            const inputMin = document.getElementById("input-first");
            inputMin.value = min;
        }
    }

    const paramSec = params.get('sec');
    if (paramSec != null) {
        const sec = Number(paramSec);
        if (!isNaN(sec) && sec >= 0) {
            const inputSec = document.getElementById("input-second");
            inputSec.value = sec;
        }
    }

    const paramWidth = params.get('w');
    if (paramWidth != null) {
        const w = Number(paramWidth);
        if (!isNaN(w) && w >= 0) {
            const canvas = document.getElementById("canvas-timer");
            canvas.setAttribute('width', w.toString());
        }
    }

    const paramHeight = params.get('w');
    if (paramHeight != null) {
        const h = Number(paramHeight);
        if (!isNaN(h) && h >= 0) {
            const canvas = document.getElementById("canvas-timer");
            canvas.setAttribute('height', h.toString());
        }
    }

    const checkboxPlayBeep = document.getElementById("checkbox-play-beep");
    const paramMute = params.get('mute');
    if (paramMute != null && paramMute == true) {
        checkboxPlayBeep.checked = false;
    }

    const checkboxKeepElapsedTime = document.getElementById("checkbox-keep-elapsed-time");
    const paramKeepElapsedTime = params.get('keepElapsedTime');
    if (paramKeepElapsedTime != null && paramKeepElapsedTime == true) {
        checkboxKeepElapsedTime.checked = true;
    }

    checkboxKeepElapsedTime.addEventListener('change', () => {
        if (checkboxKeepElapsedTime.checked) {
            timer.saveState();
        } else {
            timer.clearState();
        }
    });

    const timer = new TimerUI();

    setParam(timer, params, 'font');
    setParam(timer, params, 'fontSize');
    setParam(timer, params, 'fontSizeTimeOver');
    setParam(timer, params, 'fontColor');

    if (timer.loadState()) {
        checkboxKeepElapsedTime.checked = true;
        timer.playVideo();
    }

    timer.justFinished(() => {
        if (checkboxPlayBeep.checked) {
            playBeep();
        }
    });

    timer.onUpdate(() => {
        if (checkboxKeepElapsedTime.checked) {
            timer.saveState();
        }
    });

    const btnStart = document.getElementById('btn-start');
    btnStart.addEventListener('click', () => {
        timer.toggle();
    });

    const btnReset = document.getElementById('btn-reset');
    btnReset.addEventListener('click', () => {
        timer.stop();
        timer.setTimeFromInputBox();
    });

    const labelFirstUnit = document.getElementById('input-first-unit');
    const labelSecondUnit = document.getElementById('input-second-unit');

    const radioDuration = document.getElementById('timer-duration');
    radioDuration.addEventListener('change', () => {
        labelFirstUnit.textContent = "min";
        labelSecondUnit.textContent = "sec";
        if (radioDuration.checked) {
            timer.changeTimer("duration");
        }
    });

    const radioDeadline = document.getElementById('timer-deadline');
    radioDeadline.addEventListener('change', () => {
        labelFirstUnit.textContent = "時";
        labelSecondUnit.textContent = "分";
        if (radioDeadline.checked) {
            timer.changeTimer("deadline");
        }
    });
};
