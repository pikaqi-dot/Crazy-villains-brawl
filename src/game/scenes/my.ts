import Phaser from 'phaser';
class My extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', '/assets/background.png');
    }

    /**
     * Creates the scene
     * 
     * This function is called when the scene is created, either automatically when the scene is first started or
     * when the scene is restarted from the Phaser.Scene.restart method.
     * 
     * @method create
     * @memberof My
     * @since 0.0.0
     */
    create ()
    {
        this.add.image(400, 300, 'bg');
       
    }

    updatePhysics ()
    {
        
    }

    update ()
    {
        
    }

}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    physics: {
        default: 'arcade',
    },
    scene: My
};

export default config;