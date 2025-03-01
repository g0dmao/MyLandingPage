const searchEngineButton = document.getElementById('search-engine-button');
const engineSelector = document.getElementById('engine-selector');
const engineIcon = document.getElementById('engine-icon');
const searchInput = document.getElementById('search-input');
const engineOptions = document.querySelectorAll('.engine-option');

let currentEngine = 'bing';

// 点击按钮显示/隐藏搜索引擎选择界面
searchEngineButton.addEventListener('click', function () {
    engineSelector.classList.toggle('visible');
});

// 选择搜索引擎
engineOptions.forEach(option => {
    option.addEventListener('click', function () {
        const selectedEngine = this.getAttribute('data-engine');
        currentEngine = selectedEngine;
        engineIcon.src = `https://files.codelife.cc/itab/search/${selectedEngine}.svg`;
        searchInput.placeholder = `在${this.querySelector('span').textContent}上搜索...`;
        engineSelector.classList.remove('visible');
    });
});

// 搜索功能
function performSearch() {
    const query = searchInput.value;
    if (query) {
        let searchUrl;
        switch (currentEngine) {
            case 'google':
                searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                break;
            case 'baidu':
                searchUrl = `https://www.baidu.com/s?wd=${encodeURIComponent(query)}`;
                break;
            default:
                searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
        }
        window.open(searchUrl, '_blank');
    }
}

// 点击搜索按钮触发搜索
document.getElementById('search-button').addEventListener('click', performSearch);

// 按下回车键触发搜索
searchInput.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) { // 13 是回车键的 keyCode
        performSearch();
    }
});
