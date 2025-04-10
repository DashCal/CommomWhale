// 底部标签栏切换
document.querySelectorAll('.nav-bar-item').forEach(item => {
    item.addEventListener('click', function () {
        let sectionId = this.getAttribute('data-section');

        // 更新标签栏选中状态
        document.querySelectorAll('.nav-bar-item').forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-section') === sectionId) {
                tab.classList.add('active');
            }
        });

        // 更新内容区域显示
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
            if (section.id === sectionId) {
                section.classList.add('active');
            }
        });

        document.getElementById(sectionId).classList.add('active');
        if (sectionId === 'controlSection') {
            document.getElementById('appTitle').textContent = '正在进行的 whale';
        }
        if (sectionId === 'newSection') {
            document.getElementById('appTitle').textContent = '新建一个 whale';
        }
        if (sectionId === 'statsSection') {
            document.getElementById('appTitle').textContent = '历史所有的 whale';
        }
    });
});



// 侧边标签栏切换
document.querySelectorAll('aside .menu .nav-group .item').forEach(item => {
    item.addEventListener('click', function () {
        let sectionId = this.getAttribute('data-section');

        // 更新标签栏选中状态
        document.querySelectorAll('.nav-bar-item').forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-section') === sectionId) {
                tab.classList.add('active');
            }
        });

        // 更新内容区域显示
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
            if (section.id === sectionId) {
                section.classList.add('active');
            }
        });
        if (sectionId === 'controlSection') {
            document.getElementById('appTitle').textContent = '正在进行的 whale';
        }
        if (sectionId === 'newSection') {
            document.getElementById('appTitle').textContent = '新建一个 whale';
        }
        if (sectionId === 'statsSection') {
            document.getElementById('appTitle').textContent = '历史所有的 whale';
        }

        document.getElementById('sidebar').classList.remove('active');
        document.getElementById('modalBackdrop').classList.remove('active');
    });
});

// 左侧边栏按钮点击事件
document.getElementById('sidebarButton').addEventListener('click', function () {
    document.getElementById('sidebar').classList.add('active');
    document.getElementById('modalBackdrop').classList.add('active');
});

// 设置消息按钮点击事件
document.getElementById('messageButton').addEventListener('click', function () {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('messageModal').classList.add('active');
    document.getElementById('modalBackdrop').classList.add('active');
});

// 关闭消息弹窗
document.getElementById('messageClose').addEventListener('click', function () {
    document.getElementById('messageModal').classList.remove('active');
    document.getElementById('modalBackdrop').classList.remove('active');
});

// 设置按钮点击事件
document.getElementById('settingsButton').addEventListener('click', function () {
    document.getElementById('settingsModal').classList.add('active');
    document.getElementById('modalBackdrop').classList.add('active');
});

// 关闭设置弹窗
document.getElementById('settingsClose').addEventListener('click', function () {
    document.getElementById('settingsModal').classList.remove('active');
    document.getElementById('modalBackdrop').classList.remove('active');
});

// 点击背景关闭弹窗
document.getElementById('modalBackdrop').addEventListener('click', function () {
    document.getElementById('messageModal').classList.remove('active');
    document.getElementById('settingsModal').classList.remove('active');
    document.getElementById('sidebar').classList.remove('active');
    this.classList.remove('active');
});

// 二级设置页面
document.querySelectorAll('.settings-item[data-sub-settings]').forEach(item => {
    item.addEventListener('click', function () {
        document.getElementById('generalSettings').classList.add('active');
    });
});

// 返回按钮
document.getElementById('backButton').addEventListener('click', function () {
    document.getElementById('generalSettings').classList.remove('active');
});