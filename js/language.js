// 多语言翻译对象 - 包含所有支持的语言及其对应的文本翻译
const translations = {
    // 英文翻译
    en: {
        // 页头部分
        'popular-games': 'Popular Games',
        'more-games': 'More Games',
        'fullscreen': 'Fullscreen',
        
        // 游戏信息部分
        'game-features': 'Game Features',
        'how-to-play': 'How to Play',
        'what-players-love': 'What Players Love',
        'faq': 'Frequently Asked Questions',
        
        // 游戏特点部分
        'feature-1': 'Elvenrage features a stunning fantasy world with breathtaking graphics and magical effects. Every adventure feels unique and exciting.',
        'feature-2': 'Enjoy multiple game modes, including solo quests, multiplayer battles, and special events. There is always something new to explore.',
        'feature-3': 'Customize your elf with a wide range of outfits, weapons, and magical abilities. Create your own legendary hero.',
        'feature-4': 'Experience real-time battles, strategic challenges, and hidden treasures for players to discover. The game rewards skill and creativity.',
        'feature-5': 'Join the community to team up with friends, share tips, and participate in regular updates and events. The world is always growing and improving.',
        
        // 游戏描述部分
        'about': 'Welcome to Elvenrage, the ultimate fantasy adventure for elf game lovers! Explore magical worlds, battle legendary creatures, and unlock your true potential as an elf hero. Every quest is filled with excitement, strategy, and discovery. Whether you enjoy solo challenges or multiplayer fun, this game offers something for everyone. Experience stunning visuals, smooth gameplay, and a vibrant community. Join today and see why it is the top choice for fans of fantasy elf games!',
        
        // 游戏操作指南部分
        'controls': 'Playing Elvenrage is easy and fun for everyone! To start your adventure, simply use the arrow keys or WASD to guide your elf through magical worlds. Collect special items, avoid obstacles, and use your skills to defeat enemies. The game rewards quick thinking and strategy, so plan your moves carefully. Use the space bar for special abilities and press Shift to activate unique elf powers. Pause anytime with the P key. Whether you are new or experienced, there are helpful tips and a friendly community to support your journey. Join now and become a legendary elf hero!',
        'controls-1': 'Arrow Keys / WASD: Move your elf',
        'controls-2': 'Space Bar: Use special abilities',
        'controls-3': 'Shift: Activate elf powers',
        'controls-4': 'P: Pause the game',
        
        // 游戏技巧提示部分
        'tip-1': 'In Elvenrage, always explore every corner to find hidden treasures and secret paths. Curiosity is rewarded!',
        'tip-2': "Master your elf's abilities by practicing combos and timing your moves for maximum effect.",
        'tip-3': 'Use power-ups wisely—save them for tough battles or challenging levels to get ahead.',
        'tip-4': 'Team up with friends for multiplayer quests. Cooperation can help you defeat powerful enemies.',
        'tip-5': 'Watch for updates—new content and features are added regularly to keep the adventure exciting!',
        
        // 玩家评论部分
        'review-1': 'Elvenrage is the best fantasy game I\'ve ever played! The magical world is so immersive and exciting.',
        'review-2': 'I love the community. Everyone is friendly and always ready to help new players enjoy the adventure.',
        'review-3': 'The graphics and gameplay are amazing. Every quest feels like a new adventure!',
        'review-4': 'There are so many ways to play, from solo missions to multiplayer battles. This game keeps me coming back every day!',
        
        // 网站优势介绍部分
        'why-1': 'Elvenrage offers a magical world full of adventure and mystery. Every player can explore beautiful landscapes and discover hidden secrets.',
        'why-2': 'Enjoy action-packed quests, challenging battles, and endless opportunities for strategy. The game keeps you engaged with new adventures every day.',
        'why-3': 'Join a welcoming community. Players help each other, share tips, and make the game more enjoyable for everyone.',
        'why-4': 'Customize your elf and experience regular updates. There is always fresh content and new features to keep the adventure exciting.',
        
        // 游戏更新信息部分
        'update-1': 'Elvenrage has introduced new magical realms for players to explore. Discover fresh adventures and hidden secrets!',
        'update-2': 'New elf abilities have been added, giving players more ways to customize their gameplay and become legends.',
        'update-3': 'The game now features improved graphics and smoother performance, making every quest even more immersive.',
        'update-4': 'Multiplayer features have been enhanced, allowing you to team up with friends and take on epic challenges together.',
        'update-5': 'Stay tuned for more updates—new events, quests, and rewards are coming soon to keep the adventure exciting for all players!',
        
        // 常见问题解答部分
        'faq-1-q': 'Is this game free to play?',
        'faq-1-a': 'Yes, all games on our platform are completely free!',
        'faq-2-q': 'Can I play with friends?',
        'faq-2-a': 'Yes, you can invite friends to play together in multiplayer mode.',
        'faq-3-q': 'What are the system requirements?',
        'faq-3-a': 'The game runs smoothly on most modern browsers. We recommend using Chrome or Firefox for the best experience.',
        'faq-4-q': 'How do I save my progress?',
        'faq-4-a': 'Your progress is automatically saved when you\'re logged in. Make sure to create an account to keep track of your achievements.',
        
        // 页脚部分
        'copyright': '© 2024 Elvenrage. All rights reserved.',
        'contact-us': 'Contact Us'
    },
    // 中文翻译
    zh: {
        // 页头部分
        'popular-games': '热门游戏',
        'more-games': '更多游戏',
        'fullscreen': '全屏',
        
        // 游戏信息部分
        'game-features': '游戏特色',
        'how-to-play': '如何玩',
        'what-players-love': '玩家喜爱',
        'faq': '常见问题',
        
        // 游戏特点部分
        'feature-1': '惊艳的3D图形',
        'feature-2': '真实的物理引擎',
        'feature-3': '多种游戏模式',
        'feature-4': '可自定义车辆',
        
        // 游戏操作指南部分
        'controls': '使用方向键或WASD控制车辆。收集道具并避开障碍物以获胜！',
        
        // 常见问题解答部分
        'faq-1-q': '这个游戏是免费的吗？',
        'faq-1-a': '是的，我们平台上的所有游戏都是完全免费的！',
        'faq-2-q': '我可以和朋友一起玩吗？',
        'faq-2-a': '是的，你可以邀请朋友一起玩多人模式。',
        
        // 页脚部分
        'copyright': '© 2024 GoKarts.io. 保留所有权利。',
        'contact-us': '联系我们'
    },
    // 日文翻译
    ja: {
        // 页头部分
        'popular-games': '人気のゲーム',
        'more-games': 'その他のゲーム',
        'fullscreen': '全画面表示',
        
        // 游戏信息部分
        'game-features': 'ゲームの特徴',
        'how-to-play': '遊び方',
        'what-players-love': 'プレイヤーの声',
        'faq': 'よくある質問',
        
        // 游戏特点部分
        'feature-1': '見事な3Dグラフィックス',
        'feature-2': 'リアルな物理エンジン',
        'feature-3': '複数のゲームモード',
        'feature-4': 'カスタマイズ可能な車両',
        
        // 游戏操作指南部分
        'controls': '矢印キーまたはWASDで車両を操作します。パワーアップを集めて障害物を避けて勝利しましょう！',
        
        // 常见问题解答部分
        'faq-1-q': 'このゲームは無料ですか？',
        'faq-1-a': 'はい、当プラットフォームのすべてのゲームは完全に無料です！',
        'faq-2-q': '友達と一緒にプレイできますか？',
        'faq-2-a': 'はい、マルチプレイヤーモードで友達を招待できます。',
        
        // 页脚部分
        'copyright': '© 2024 GoKarts.io. 全権利所有。',
        'contact-us': 'お問い合わせ'
    },
    // 韩文翻译
    ko: {
        // 页头部分
        'popular-games': '인기 게임',
        'more-games': '더 많은 게임',
        'fullscreen': '전체 화면',
        
        // 游戏信息部分
        'game-features': '게임 특징',
        'how-to-play': '게임 방법',
        'what-players-love': '플레이어 리뷰',
        'faq': '자주 묻는 질문',
        
        // 游戏特点部分
        'feature-1': '멋진 3D 그래픽',
        'feature-2': '현실적인 물리 엔진',
        'feature-3': '다양한 게임 모드',
        'feature-4': '커스터마이징 가능한 차량',
        
        // 游戏操作指南部分
        'controls': '방향키 또는 WASD로 차량을 조작하세요. 파워업을 모으고 장애물을 피해 승리하세요!',
        
        // 常见问题解答部分
        'faq-1-q': '이 게임은 무료인가요?',
        'faq-1-a': '네, 저희 플랫폼의 모든 게임은 완전히 무료입니다!',
        'faq-2-q': '친구와 함께 플레이할 수 있나요?',
        'faq-2-a': '네, 멀티플레이어 모드에서 친구를 초대할 수 있습니다.',
        
        // 页脚部分
        'copyright': '© 2024 GoKarts.io. 모든 권리 보유.',
        'contact-us': '문의하기'
    },
    // 西班牙语翻译
    es: {
        // 页头部分
        'popular-games': 'Juegos Populares',
        'more-games': 'Más Juegos',
        'fullscreen': 'Pantalla Completa',
        
        // 游戏信息部分
        'game-features': 'Características del Juego',
        'how-to-play': 'Cómo Jugar',
        'what-players-love': 'Lo que Amamos',
        'faq': 'Preguntas Frecuentes',
        
        // 游戏特点部分
        'feature-1': 'Gráficos 3D impresionantes',
        'feature-2': 'Motor de física realista',
        'feature-3': 'Múltiples modos de juego',
        'feature-4': 'Vehículos personalizables',
        
        // 游戏操作指南部分
        'controls': 'Usa las teclas de flecha o WASD para controlar tu vehículo. ¡Recoge potenciadores y evita obstáculos para ganar!',
        
        // 常见问题解答部分
        'faq-1-q': '¿Este juego es gratuito?',
        'faq-1-a': '¡Sí, todos los juegos en nuestra plataforma son completamente gratuitos!',
        'faq-2-q': '¿Puedo jugar con amigos?',
        'faq-2-a': 'Sí, puedes invitar a amigos a jugar juntos en modo multijugador.',
        
        // 页脚部分
        'copyright': '© 2024 GoKarts.io. Todos los derechos reservados.',
        'contact-us': 'Contáctanos'
    }
};

/**
 * 更新网站语言函数
 * 根据选择的语言代码更新页面上所有带有data-i18n属性的元素文本
 * @param {string} lang - 语言代码（en, zh, ja, ko, es）
 */
function updateLanguage(lang) {
    // 查找所有带有data-i18n属性的元素，并更新其文本内容
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n'); // 获取翻译键名
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key]; // 设置对应语言的文本
        }
    });
    
    // 更新HTML文档的lang属性，有助于屏幕阅读器和搜索引擎识别页面语言
    document.documentElement.lang = lang;
    
    // 更新语言按钮的激活状态，高亮显示当前选中的语言
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active'); // 移除所有按钮的激活状态
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active'); // 为当前语言按钮添加激活状态
        }
    });
    
    // 将用户语言偏好保存到本地存储，下次访问时自动应用
    localStorage.setItem('preferred-language', lang);
}

// 初始化语言设置
// 在DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 为页面元素添加data-i18n属性，标记需要翻译的文本
    document.querySelector('.game-links h2').setAttribute('data-i18n', 'popular-games');
    document.querySelector('.mini-games h2').setAttribute('data-i18n', 'more-games');
    document.querySelector('.fullscreen-btn').setAttribute('data-i18n', 'fullscreen');
    document.querySelector('.game-features h3').setAttribute('data-i18n', 'game-features');
    document.querySelector('.how-to-play h3').setAttribute('data-i18n', 'how-to-play');
    document.querySelector('.player-reviews h3').setAttribute('data-i18n', 'what-players-love');
    document.querySelector('.faq h3').setAttribute('data-i18n', 'faq');
    
    // 为所有语言按钮添加点击事件监听器
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang'); // 获取按钮的语言代码
            updateLanguage(lang); // 更新网站语言
        });
    });
    
    // 加载用户偏好语言或默认使用英语
    // 从本地存储中获取之前保存的语言偏好，如果没有则默认为英语
    const preferredLang = localStorage.getItem('preferred-language') || 'en';
    updateLanguage(preferredLang); // 应用语言设置
}); 