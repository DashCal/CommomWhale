
(function () {
    if (!window.localStorage) {
        console.error('当前浏览器不支持localStorage!');
        return;
    }

    const BASE_UNIT = 1024;
    const WRITE_INTERVAL = 300;
    const INITIAL_DATA = '0'.repeat(10);
    const BYTES_PER_CHAR = 2; // 新增编码系数

    let testData = INITIAL_DATA;
    let isTesting = true;

    try {
        while (testData.length < BASE_UNIT * 10) {
            testData += testData;
        }
    } catch (e) {
        console.error('初始化数据生成失败:', e);
        return;
    }

    const infoEl = document.createElement('div');
    infoEl.style.cssText = `
        position: fixed; 
        top: 10px; 
        left: 10px; 
        background: rgba(0,0,0,0.7); 
        color: white; 
        padding: 10px;
        border-radius: 5px;
        z-index: 9999;
    `;

    let infoElAppended = false; // Appended flag

    const testInterval = setInterval(() => {
        if (!isTesting) return;

        try {
            localStorage.setItem('storageTest', testData);
            // 修正点：考虑字节数
            const currentSize = (testData.length * BYTES_PER_CHAR / BASE_UNIT).toFixed(2);
            if (!infoElAppended) {
                document.body.appendChild(infoEl);
                if (document.body.contains(infoEl)) {
                    infoElAppended = true;
                }
            }
            infoEl.textContent = `已写入：${currentSize} KB`;
            testData += testData;
        } catch (e) {
            handleStorageFull();
        }
    }, WRITE_INTERVAL);

    function handleStorageFull() {
        isTesting = false;
        clearInterval(testInterval);
        // 修正点：正确计算最后一次成功写入的容量
        const maxSize = (testData.length * BYTES_PER_CHAR / BASE_UNIT / 2).toFixed(2);
        infoEl.innerHTML = `最大容量：${maxSize} KB<br>开始清理...`;
        localStorage.removeItem('storageTest');
        setTimeout(() => {
            infoEl.style.background = '#28a745';
            infoEl.textContent = `测试完成，最大容量：${maxSize} KB`;
            setTimeout(() => {
                infoEl.parentElement.removeChild(infoEl);
            }, 2500);
        }, 500);
    }

    window.stopStorageTest = function () {
        clearInterval(testInterval);
        handleStorageFull();
    };
})();