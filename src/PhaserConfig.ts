class GameScene extends Phaser.Scene {
    constructor() {
      super('GameScene');
    }
  
    preload() {
      // 加载资源
      this.load.image('player', '/assets/player.png'); // 玩家图片
      this.load.image('background', '/assets/background.png'); // 背景图片
    }
  
    create() {
      // 添加背景
      const background = this.add.image(0, 0, 'background').setOrigin(0, 0);
      background.setDisplaySize(this.game.config.width as number, this.game.config.height as number);
  
      // 添加玩家
      const player = this.physics.add.sprite(400, 300, 'player');
      player.setCollideWorldBounds(true); // 防止玩家移出边界
  
      // 设置摄像机跟随玩家
      this.cameras.main.startFollow(player);
  
      // 启用键盘输入
      const cursors = this.input.keyboard?.createCursorKeys();
  
      // 更新玩家位置
      this.updatePlayer = (time: number, delta: number) => {
        if (cursors?.left.isDown) {
          player.setVelocityX(-200); // 左移
        } else if (cursors?.right.isDown) {
          player.setVelocityX(200); // 右移
        } else {
          player.setVelocityX(0); // 停止水平移动
        }
  
        if (cursors?.up.isDown) {
          player.setVelocityY(-200); // 上移
        } else if (cursors?.down.isDown) {
          player.setVelocityY(200); // 下移
        } else {
          player.setVelocityY(0); // 停止垂直移动
        }
      };
  
      // 注册更新函数
      this.events.on('update', this.updatePlayer);
    }
  
    updatePlayer: ((time: number, delta: number) => void) | undefined;
  }
  
  // 初始化游戏
  const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
            y: 0,
            x: 0
        }, // 关闭重力
        debug: true, // 显示调试信息
      },
    },
    scene: [GameScene],
  };
  
  new Phaser.Game(config);