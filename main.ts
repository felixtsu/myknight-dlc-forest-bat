namespace myknight_felix_dlc {
    export function forestBat() {
        Enemy.setEnemy(img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c b b b b b b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b c b b b c b b b b f . . . . 
            f b 1 f f f 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `, "森林蝙蝠", function (enemy) {
            Enemy.setEnemyAbility(enemy, Enemy.aKind.hp, 20)
            Player.setCharacterAnim(enemy, Character.dirKind.down, Character.animKind.walk, [img`
                . . f f f . . . . . . . . f f f 
                . f f c c . . . . . . f c b b c 
                f f c c . . . . . . f c b b c . 
                f c f c . . . . . . f b c c c . 
                f f f c c . c c . f c b b c c . 
                f f c 3 c c 3 c c f b c b b c . 
                f f b 3 b c 3 b c f b c c b c . 
                . c b b b b b b c b b c c c . . 
                . c 1 b b b 1 b b c c c c . . . 
                c b b b b b b b b b c c . . . . 
                c b c b b b c b b b b f . . . . 
                f b 1 f f f 1 b b b b f c . . . 
                f b b b b b b b b b b f c c . . 
                . f b b b b b b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `,img`
                . . f f f . . . . . . . . . . . 
                f f f c c . . . . . . . . f f f 
                f f c c . . c c . . . f c b b c 
                f f c 3 c c 3 c c f f b b b c . 
                f f b 3 b c 3 b c f b b c c c . 
                . c b b b b b b c f b c b c c . 
                . c b b b b b b c b b c b b c . 
                c b 1 b b b 1 b b b c c c b c . 
                c b b b b b b b b c c c c c . . 
                f b c b b b c b b b b f c . . . 
                f b 1 f f f 1 b b b b f c c . . 
                . f b b b b b b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . c c . . c c . . . . . . . . 
                . . c 3 c c 3 c c c . . . . . . 
                . c b 3 b c 3 b c c c . . . . . 
                . c b b b b b b b b f f . . . . 
                c c b b b b b b b b f f . . . . 
                c b 1 b b b 1 b b c f f f . . . 
                c b b b b b b b b f f f f . . . 
                f b c b b b c b c c b b b . . . 
                f b 1 f f f 1 b f c c c c . . . 
                . f b b b b b b f b b c c . . . 
                c c f b b b b b c c b b c . . . 
                c c c f f f f f f c c b b c . . 
                . c c c . . . . . . c c c c c . 
                . . c c c . . . . . . . c c c c 
                . . . . . . . . . . . . . . . . 
                `,img`
                . f f f . . . . . . . . f f f . 
                f f c . . . . . . . f c b b c . 
                f c c . . . . . . f c b b c . . 
                c f . . . . . . . f b c c c . . 
                c f f . . . . . f f b b c c . . 
                f f f c c . c c f b c b b c . . 
                f f f c c c c c f b c c b c . . 
                . f c 3 c c 3 b c b c c c . . . 
                . c b 3 b c 3 b b c c c c . . . 
                c c b b b b b b b b c c . . . . 
                c b 1 b b b 1 b b b b f c . . . 
                f b b b b b b b b b b f c c . . 
                f b c b b b c b b b b f . . . . 
                . f 1 f f f 1 b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `])
            Player.setCharacterAnim(enemy, Character.dirKind.left, Character.animKind.walk, [img`
                . . f f f . . . . . . . . f f f 
                . f f c c . . . . . . f c b b c 
                f f c c . . . . . . f c b b c . 
                f c f c . . . . . . f b c c c . 
                f f f c c . c c . f c b b c c . 
                f f c 3 c c 3 c c f b c b b c . 
                f f b 3 b c 3 b c f b c c b c . 
                . c b b b b b b c b b c c c . . 
                . c 1 b b b 1 b b c c c c . . . 
                c b b b b b b b b b c c . . . . 
                c b c b b b c b b b b f . . . . 
                f b 1 f f f 1 b b b b f c . . . 
                f b b b b b b b b b b f c c . . 
                . f b b b b b b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `,img`
                . . f f f . . . . . . . . . . . 
                f f f c c . . . . . . . . f f f 
                f f c c . . c c . . . f c b b c 
                f f c 3 c c 3 c c f f b b b c . 
                f f b 3 b c 3 b c f b b c c c . 
                . c b b b b b b c f b c b c c . 
                . c b b b b b b c b b c b b c . 
                c b 1 b b b 1 b b b c c c b c . 
                c b b b b b b b b c c c c c . . 
                f b c b b b c b b b b f c . . . 
                f b 1 f f f 1 b b b b f c c . . 
                . f b b b b b b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . c c . . c c . . . . . . . . 
                . . c 3 c c 3 c c c . . . . . . 
                . c b 3 b c 3 b c c c . . . . . 
                . c b b b b b b b b f f . . . . 
                c c b b b b b b b b f f . . . . 
                c b 1 b b b 1 b b c f f f . . . 
                c b b b b b b b b f f f f . . . 
                f b c b b b c b c c b b b . . . 
                f b 1 f f f 1 b f c c c c . . . 
                . f b b b b b b f b b c c . . . 
                c c f b b b b b c c b b c . . . 
                c c c f f f f f f c c b b c . . 
                . c c c . . . . . . c c c c c . 
                . . c c c . . . . . . . c c c c 
                . . . . . . . . . . . . . . . . 
                `,img`
                . f f f . . . . . . . . f f f . 
                f f c . . . . . . . f c b b c . 
                f c c . . . . . . f c b b c . . 
                c f . . . . . . . f b c c c . . 
                c f f . . . . . f f b b c c . . 
                f f f c c . c c f b c b b c . . 
                f f f c c c c c f b c c b c . . 
                . f c 3 c c 3 b c b c c c . . . 
                . c b 3 b c 3 b b c c c c . . . 
                c c b b b b b b b b c c . . . . 
                c b 1 b b b 1 b b b b f c . . . 
                f b b b b b b b b b b f c c . . 
                f b c b b b c b b b b f . . . . 
                . f 1 f f f 1 b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `])
            Player.setCharacterAnim(enemy, Character.dirKind.up, Character.animKind.walk, [img`
                f f f . . . . . . . . f f f . . 
                c b b c f . . . . . . c c f f . 
                . c b b c f . . . . . . c c f f 
                . c c c b f . . . . . . c f c f 
                . c c b b c f . c c . c c f f f 
                . c b b c b f c c 3 c c 3 c f f 
                . c b c c b f c b 3 c b 3 b f f 
                . . c c c b b c b b b b b b c . 
                . . . c c c c b b 1 b b b 1 c . 
                . . . . c c b b b b b b b b b c 
                . . . . f b b b b c b b b c b c 
                . . . c f b b b b 1 f f f 1 b f 
                . . c c f b b b b b b b b b b f 
                . . . . f c b b b b b b b b f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `,img`
                . . . . . . . . . . . f f f . . 
                f f f . . . . . . . . c c f f f 
                c b b c f . . . c c . . c c f f 
                . c b b b f f c c 3 c c 3 c f f 
                . c c c b b f c b 3 c b 3 b f f 
                . c c b c b f c b b b b b b c . 
                . c b b c b b c b b b b b b c . 
                . c b c c c b b b 1 b b b 1 b c 
                . . c c c c c b b b b b b b b c 
                . . . c f b b b b c b b b c b f 
                . . c c f b b b b 1 f f f 1 b f 
                . . . . f c b b b b b b b b f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . c c . . c c . . 
                . . . . . . c c c 3 c c 3 c . . 
                . . . . . c c c b 3 c b 3 b c . 
                . . . . f f b b b b b b b b c . 
                . . . . f f b b b b b b b b c c 
                . . . f f f c b b 1 b b b 1 b c 
                . . . f f f f b b b b b b b b c 
                . . . b b b c c b c b b b c b f 
                . . . c c c c f b 1 f f f 1 b f 
                . . . c c b b f b b b b b b f . 
                . . . c b b c c b b b b b f c c 
                . . c b b c c f f f f f f c c c 
                . c c c c c . . . . . . c c c . 
                c c c c . . . . . . . c c c . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . f f f . . . . . . . . f f f . 
                . c b b c f . . . . . . . c f f 
                . . c b b c f . . . . . . c c f 
                . . c c c b f . . . . . . . f c 
                . . c c b b f f . . . . . f f c 
                . . c b b c b f c c . c c f f f 
                . . c b c c b f c c c c c f f f 
                . . . c c c b c b 3 c c 3 c f . 
                . . . c c c c b b 3 c b 3 b c . 
                . . . . c c b b b b b b b b c c 
                . . . c f b b b b 1 b b b 1 b c 
                . . c c f b b b b b b b b b b f 
                . . . . f b b b b c b b b c b f 
                . . . . f c b b b 1 f f f 1 f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `])
            Player.setCharacterAnim(enemy, Character.dirKind.right, Character.animKind.walk, [img`
                f f f . . . . . . . . f f f . . 
                c b b c f . . . . . . c c f f . 
                . c b b c f . . . . . . c c f f 
                . c c c b f . . . . . . c f c f 
                . c c b b c f . c c . c c f f f 
                . c b b c b f c c 3 c c 3 c f f 
                . c b c c b f c b 3 c b 3 b f f 
                . . c c c b b c b b b b b b c . 
                . . . c c c c b b 1 b b b 1 c . 
                . . . . c c b b b b b b b b b c 
                . . . . f b b b b c b b b c b c 
                . . . c f b b b b 1 f f f 1 b f 
                . . c c f b b b b b b b b b b f 
                . . . . f c b b b b b b b b f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `,img`
                . . . . . . . . . . . f f f . . 
                f f f . . . . . . . . c c f f f 
                c b b c f . . . c c . . c c f f 
                . c b b b f f c c 3 c c 3 c f f 
                . c c c b b f c b 3 c b 3 b f f 
                . c c b c b f c b b b b b b c . 
                . c b b c b b c b b b b b b c . 
                . c b c c c b b b 1 b b b 1 b c 
                . . c c c c c b b b b b b b b c 
                . . . c f b b b b c b b b c b f 
                . . c c f b b b b 1 f f f 1 b f 
                . . . . f c b b b b b b b b f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . c c . . c c . . 
                . . . . . . c c c 3 c c 3 c . . 
                . . . . . c c c b 3 c b 3 b c . 
                . . . . f f b b b b b b b b c . 
                . . . . f f b b b b b b b b c c 
                . . . f f f c b b 1 b b b 1 b c 
                . . . f f f f b b b b b b b b c 
                . . . b b b c c b c b b b c b f 
                . . . c c c c f b 1 f f f 1 b f 
                . . . c c b b f b b b b b b f . 
                . . . c b b c c b b b b b f c c 
                . . c b b c c f f f f f f c c c 
                . c c c c c . . . . . . c c c . 
                c c c c . . . . . . . c c c . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . f f f . . . . . . . . f f f . 
                . c b b c f . . . . . . . c f f 
                . . c b b c f . . . . . . c c f 
                . . c c c b f . . . . . . . f c 
                . . c c b b f f . . . . . f f c 
                . . c b b c b f c c . c c f f f 
                . . c b c c b f c c c c c f f f 
                . . . c c c b c b 3 c c 3 c f . 
                . . . c c c c b b 3 c b 3 b c . 
                . . . . c c b b b b b b b b c c 
                . . . c f b b b b 1 b b b 1 b c 
                . . c c f b b b b b b b b b b f 
                . . . . f b b b b c b b b c b f 
                . . . . f c b b b 1 f f f 1 f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `])
            Player.setCharacterAnim(enemy, Character.dirKind.down, Character.animKind.stand, [img`
                . . f f f . . . . . . . . f f f 
                . f f c c . . . . . . f c b b c 
                f f c c . . . . . . f c b b c . 
                f c f c . . . . . . f b c c c . 
                f f f c c . c c . f c b b c c . 
                f f c 3 c c 3 c c f b c b b c . 
                f f b 3 b c 3 b c f b c c b c . 
                . c b b b b b b c b b c c c . . 
                . c 1 b b b 1 b b c c c c . . . 
                c b b b b b b b b b c c . . . . 
                c b c b b b c b b b b f . . . . 
                f b 1 f f f 1 b b b b f c . . . 
                f b b b b b b b b b b f c c . . 
                . f b b b b b b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `,img`
                . . f f f . . . . . . . . . . . 
                f f f c c . . . . . . . . f f f 
                f f c c . . c c . . . f c b b c 
                f f c 3 c c 3 c c f f b b b c . 
                f f b 3 b c 3 b c f b b c c c . 
                . c b b b b b b c f b c b c c . 
                . c b b b b b b c b b c b b c . 
                c b 1 b b b 1 b b b c c c b c . 
                c b b b b b b b b c c c c c . . 
                f b c b b b c b b b b f c . . . 
                f b 1 f f f 1 b b b b f c c . . 
                . f b b b b b b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . c c . . c c . . . . . . . . 
                . . c 3 c c 3 c c c . . . . . . 
                . c b 3 b c 3 b c c c . . . . . 
                . c b b b b b b b b f f . . . . 
                c c b b b b b b b b f f . . . . 
                c b 1 b b b 1 b b c f f f . . . 
                c b b b b b b b b f f f f . . . 
                f b c b b b c b c c b b b . . . 
                f b 1 f f f 1 b f c c c c . . . 
                . f b b b b b b f b b c c . . . 
                c c f b b b b b c c b b c . . . 
                c c c f f f f f f c c b b c . . 
                . c c c . . . . . . c c c c c . 
                . . c c c . . . . . . . c c c c 
                . . . . . . . . . . . . . . . . 
                `,img`
                . f f f . . . . . . . . f f f . 
                f f c . . . . . . . f c b b c . 
                f c c . . . . . . f c b b c . . 
                c f . . . . . . . f b c c c . . 
                c f f . . . . . f f b b c c . . 
                f f f c c . c c f b c b b c . . 
                f f f c c c c c f b c c b c . . 
                . f c 3 c c 3 b c b c c c . . . 
                . c b 3 b c 3 b b c c c c . . . 
                c c b b b b b b b b c c . . . . 
                c b 1 b b b 1 b b b b f c . . . 
                f b b b b b b b b b b f c c . . 
                f b c b b b c b b b b f . . . . 
                . f 1 f f f 1 b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `])
            Player.setCharacterAnim(enemy, Character.dirKind.left, Character.animKind.stand, [img`
                . . f f f . . . . . . . . f f f 
                . f f c c . . . . . . f c b b c 
                f f c c . . . . . . f c b b c . 
                f c f c . . . . . . f b c c c . 
                f f f c c . c c . f c b b c c . 
                f f c 3 c c 3 c c f b c b b c . 
                f f b 3 b c 3 b c f b c c b c . 
                . c b b b b b b c b b c c c . . 
                . c 1 b b b 1 b b c c c c . . . 
                c b b b b b b b b b c c . . . . 
                c b c b b b c b b b b f . . . . 
                f b 1 f f f 1 b b b b f c . . . 
                f b b b b b b b b b b f c c . . 
                . f b b b b b b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `,img`
                . . f f f . . . . . . . . . . . 
                f f f c c . . . . . . . . f f f 
                f f c c . . c c . . . f c b b c 
                f f c 3 c c 3 c c f f b b b c . 
                f f b 3 b c 3 b c f b b c c c . 
                . c b b b b b b c f b c b c c . 
                . c b b b b b b c b b c b b c . 
                c b 1 b b b 1 b b b c c c b c . 
                c b b b b b b b b c c c c c . . 
                f b c b b b c b b b b f c . . . 
                f b 1 f f f 1 b b b b f c c . . 
                . f b b b b b b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . c c . . c c . . . . . . . . 
                . . c 3 c c 3 c c c . . . . . . 
                . c b 3 b c 3 b c c c . . . . . 
                . c b b b b b b b b f f . . . . 
                c c b b b b b b b b f f . . . . 
                c b 1 b b b 1 b b c f f f . . . 
                c b b b b b b b b f f f f . . . 
                f b c b b b c b c c b b b . . . 
                f b 1 f f f 1 b f c c c c . . . 
                . f b b b b b b f b b c c . . . 
                c c f b b b b b c c b b c . . . 
                c c c f f f f f f c c b b c . . 
                . c c c . . . . . . c c c c c . 
                . . c c c . . . . . . . c c c c 
                . . . . . . . . . . . . . . . . 
                `,img`
                . f f f . . . . . . . . f f f . 
                f f c . . . . . . . f c b b c . 
                f c c . . . . . . f c b b c . . 
                c f . . . . . . . f b c c c . . 
                c f f . . . . . f f b b c c . . 
                f f f c c . c c f b c b b c . . 
                f f f c c c c c f b c c b c . . 
                . f c 3 c c 3 b c b c c c . . . 
                . c b 3 b c 3 b b c c c c . . . 
                c c b b b b b b b b c c . . . . 
                c b 1 b b b 1 b b b b f c . . . 
                f b b b b b b b b b b f c c . . 
                f b c b b b c b b b b f . . . . 
                . f 1 f f f 1 b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `])
            Player.setCharacterAnim(enemy, Character.dirKind.up, Character.animKind.stand, [img`
                f f f . . . . . . . . f f f . . 
                c b b c f . . . . . . c c f f . 
                . c b b c f . . . . . . c c f f 
                . c c c b f . . . . . . c f c f 
                . c c b b c f . c c . c c f f f 
                . c b b c b f c c 3 c c 3 c f f 
                . c b c c b f c b 3 c b 3 b f f 
                . . c c c b b c b b b b b b c . 
                . . . c c c c b b 1 b b b 1 c . 
                . . . . c c b b b b b b b b b c 
                . . . . f b b b b c b b b c b c 
                . . . c f b b b b 1 f f f 1 b f 
                . . c c f b b b b b b b b b b f 
                . . . . f c b b b b b b b b f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `,img`
                . . . . . . . . . . . f f f . . 
                f f f . . . . . . . . c c f f f 
                c b b c f . . . c c . . c c f f 
                . c b b b f f c c 3 c c 3 c f f 
                . c c c b b f c b 3 c b 3 b f f 
                . c c b c b f c b b b b b b c . 
                . c b b c b b c b b b b b b c . 
                . c b c c c b b b 1 b b b 1 b c 
                . . c c c c c b b b b b b b b c 
                . . . c f b b b b c b b b c b f 
                . . c c f b b b b 1 f f f 1 b f 
                . . . . f c b b b b b b b b f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . c c . . c c . . 
                . . . . . . c c c 3 c c 3 c . . 
                . . . . . c c c b 3 c b 3 b c . 
                . . . . f f b b b b b b b b c . 
                . . . . f f b b b b b b b b c c 
                . . . f f f c b b 1 b b b 1 b c 
                . . . f f f f b b b b b b b b c 
                . . . b b b c c b c b b b c b f 
                . . . c c c c f b 1 f f f 1 b f 
                . . . c c b b f b b b b b b f . 
                . . . c b b c c b b b b b f c c 
                . . c b b c c f f f f f f c c c 
                . c c c c c . . . . . . c c c . 
                c c c c . . . . . . . c c c . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . f f f . . . . . . . . f f f . 
                . c b b c f . . . . . . . c f f 
                . . c b b c f . . . . . . c c f 
                . . c c c b f . . . . . . . f c 
                . . c c b b f f . . . . . f f c 
                . . c b b c b f c c . c c f f f 
                . . c b c c b f c c c c c f f f 
                . . . c c c b c b 3 c c 3 c f . 
                . . . c c c c b b 3 c b 3 b c . 
                . . . . c c b b b b b b b b c c 
                . . . c f b b b b 1 b b b 1 b c 
                . . c c f b b b b b b b b b b f 
                . . . . f b b b b c b b b c b f 
                . . . . f c b b b 1 f f f 1 f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `])
            Player.setCharacterAnim(enemy, Character.dirKind.right, Character.animKind.stand, [img`
                f f f . . . . . . . . f f f . . 
                c b b c f . . . . . . c c f f . 
                . c b b c f . . . . . . c c f f 
                . c c c b f . . . . . . c f c f 
                . c c b b c f . c c . c c f f f 
                . c b b c b f c c 3 c c 3 c f f 
                . c b c c b f c b 3 c b 3 b f f 
                . . c c c b b c b b b b b b c . 
                . . . c c c c b b 1 b b b 1 c . 
                . . . . c c b b b b b b b b b c 
                . . . . f b b b b c b b b c b c 
                . . . c f b b b b 1 f f f 1 b f 
                . . c c f b b b b b b b b b b f 
                . . . . f c b b b b b b b b f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `,img`
                . . . . . . . . . . . f f f . . 
                f f f . . . . . . . . c c f f f 
                c b b c f . . . c c . . c c f f 
                . c b b b f f c c 3 c c 3 c f f 
                . c c c b b f c b 3 c b 3 b f f 
                . c c b c b f c b b b b b b c . 
                . c b b c b b c b b b b b b c . 
                . c b c c c b b b 1 b b b 1 b c 
                . . c c c c c b b b b b b b b c 
                . . . c f b b b b c b b b c b f 
                . . c c f b b b b 1 f f f 1 b f 
                . . . . f c b b b b b b b b f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . c c . . c c . . 
                . . . . . . c c c 3 c c 3 c . . 
                . . . . . c c c b 3 c b 3 b c . 
                . . . . f f b b b b b b b b c . 
                . . . . f f b b b b b b b b c c 
                . . . f f f c b b 1 b b b 1 b c 
                . . . f f f f b b b b b b b b c 
                . . . b b b c c b c b b b c b f 
                . . . c c c c f b 1 f f f 1 b f 
                . . . c c b b f b b b b b b f . 
                . . . c b b c c b b b b b f c c 
                . . c b b c c f f f f f f c c c 
                . c c c c c . . . . . . c c c . 
                c c c c . . . . . . . c c c . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . f f f . . . . . . . . f f f . 
                . c b b c f . . . . . . . c f f 
                . . c b b c f . . . . . . c c f 
                . . c c c b f . . . . . . . f c 
                . . c c b b f f . . . . . f f c 
                . . c b b c b f c c . c c f f f 
                . . c b c c b f c c c c c f f f 
                . . . c c c b c b 3 c c 3 c f . 
                . . . c c c c b b 3 c b 3 b c . 
                . . . . c c b b b b b b b b c c 
                . . . c f b b b b 1 b b b 1 b c 
                . . c c f b b b b b b b b b b f 
                . . . . f b b b b c b b b c b f 
                . . . . f c b b b 1 f f f 1 f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `])
            Player.setCharacterAnim(enemy, Character.dirKind.down, Character.animKind.attack, [img`
                . . f f f . . . . . . . . f f f 
                . f f c c . . . . . . f c b b c 
                f f c c . . . . . . f c b b c . 
                f c f c . . . . . . f b c c c . 
                f f f c c . c c . f c b b c c . 
                f f c 3 c c 3 c c f b c b b c . 
                f f b 3 b c 3 b c f b c c b c . 
                . c 1 b b b 1 b c b b c c c . . 
                . c 1 b b b 1 b b c c c c . . . 
                c b b b b b b b b b c c . . . . 
                c b 1 f f 1 c b b b b f . . . . 
                f f 1 f f 1 f b b b b f c . . . 
                f f 2 2 2 2 f b b b b f c c . . 
                . f 2 2 2 2 b b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `,img`
                . . f f f . . . . . . . . . . . 
                f f f c c . . . . . . . . f f f 
                f f c c c . c c . . . f c b b c 
                f f c 3 c c 3 c c f f b b b c . 
                f f c 3 b c 3 b c f b b c c c . 
                f c b b b b b b c f b c b c c . 
                c c 1 b b b 1 b c b b c b b c . 
                c b b b b b b b b b c c c b c . 
                c b 1 f f 1 c b b c c c c c . . 
                c f 1 f f 1 f b b b b f c . . . 
                f f f f f f f b b b b f c . . . 
                f f 2 2 2 2 f b b b b f c c . . 
                . f 2 2 2 2 2 b b b c f . . . . 
                . . f 2 2 2 b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . c c . c c . . . . . . . . 
                . . f 3 c c 3 c c c . . . . . . 
                . f c 3 b c 3 b c c c . . . . . 
                f c b b b b b b b b f f . . . . 
                c c 1 b b b 1 b b b f f . . . . 
                c b b b b b b b b c f f f . . . 
                c b 1 f f 1 c b b f f f f . . . 
                f f 1 f f 1 f b c c b b b . . . 
                f f f f f f f b f c c c c . . . 
                f f 2 2 2 2 f b f b b c c c . . 
                . f 2 2 2 2 2 b c c b b c . . . 
                . . f 2 2 2 b f f c c b b c . . 
                . . . f f f f f f f c c c c c . 
                . . . . . . . . . . . . c c c c 
                `,img`
                . f f f . . . . . . . . f f f . 
                f f c . . . . . . . f c b b c . 
                f c c . . . . . . f c b b c . . 
                c f . . . . . . . f b c c c . . 
                c f f . . . . . f f b b c c . . 
                f f f c c . c c f b c b b c . . 
                f f f c c c c c f b c c b c . . 
                . f c 3 c c 3 b c b c c c . . . 
                . c b 3 b c 3 b b c c c c . . . 
                c c b b b b b b b b c c . . . . 
                c 1 1 b b b 1 1 b b b f c . . . 
                f b b b b b b b b b b f c c . . 
                f b c b b b c b b b b f . . . . 
                . f 1 f f f 1 b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `])
            Player.setCharacterAnim(enemy, Character.dirKind.left, Character.animKind.attack, [img`
                . . f f f . . . . . . . . f f f 
                . f f c c . . . . . . f c b b c 
                f f c c . . . . . . f c b b c . 
                f c f c . . . . . . f b c c c . 
                f f f c c . c c . f c b b c c . 
                f f c 3 c c 3 c c f b c b b c . 
                f f b 3 b c 3 b c f b c c b c . 
                . c 1 b b b 1 b c b b c c c . . 
                . c 1 b b b 1 b b c c c c . . . 
                c b b b b b b b b b c c . . . . 
                c b 1 f f 1 c b b b b f . . . . 
                f f 1 f f 1 f b b b b f c . . . 
                f f 2 2 2 2 f b b b b f c c . . 
                . f 2 2 2 2 b b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `,img`
                . . f f f . . . . . . . . . . . 
                f f f c c . . . . . . . . f f f 
                f f c c c . c c . . . f c b b c 
                f f c 3 c c 3 c c f f b b b c . 
                f f c 3 b c 3 b c f b b c c c . 
                f c b b b b b b c f b c b c c . 
                c c 1 b b b 1 b c b b c b b c . 
                c b b b b b b b b b c c c b c . 
                c b 1 f f 1 c b b c c c c c . . 
                c f 1 f f 1 f b b b b f c . . . 
                f f f f f f f b b b b f c . . . 
                f f 2 2 2 2 f b b b b f c c . . 
                . f 2 2 2 2 2 b b b c f . . . . 
                . . f 2 2 2 b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . c c . c c . . . . . . . . 
                . . f 3 c c 3 c c c . . . . . . 
                . f c 3 b c 3 b c c c . . . . . 
                f c b b b b b b b b f f . . . . 
                c c 1 b b b 1 b b b f f . . . . 
                c b b b b b b b b c f f f . . . 
                c b 1 f f 1 c b b f f f f . . . 
                f f 1 f f 1 f b c c b b b . . . 
                f f f f f f f b f c c c c . . . 
                f f 2 2 2 2 f b f b b c c c . . 
                . f 2 2 2 2 2 b c c b b c . . . 
                . . f 2 2 2 b f f c c b b c . . 
                . . . f f f f f f f c c c c c . 
                . . . . . . . . . . . . c c c c 
                `,img`
                . f f f . . . . . . . . f f f . 
                f f c . . . . . . . f c b b c . 
                f c c . . . . . . f c b b c . . 
                c f . . . . . . . f b c c c . . 
                c f f . . . . . f f b b c c . . 
                f f f c c . c c f b c b b c . . 
                f f f c c c c c f b c c b c . . 
                . f c 3 c c 3 b c b c c c . . . 
                . c b 3 b c 3 b b c c c c . . . 
                c c b b b b b b b b c c . . . . 
                c 1 1 b b b 1 1 b b b f c . . . 
                f b b b b b b b b b b f c c . . 
                f b c b b b c b b b b f . . . . 
                . f 1 f f f 1 b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `])
            Player.setCharacterAnim(enemy, Character.dirKind.up, Character.animKind.attack, [img`
                f f f . . . . . . . . f f f . . 
                c b b c f . . . . . . c c f f . 
                . c b b c f . . . . . . c c f f 
                . c c c b f . . . . . . c f c f 
                . c c b b c f . c c . c c f f f 
                . c b b c b f c c 3 c c 3 c f f 
                . c b c c b f c b 3 c b 3 b f f 
                . . c c c b b c b 1 b b b 1 c . 
                . . . c c c c b b 1 b b b 1 c . 
                . . . . c c b b b b b b b b b c 
                . . . . f b b b b c 1 f f 1 b c 
                . . . c f b b b b f 1 f f 1 f f 
                . . c c f b b b b f 2 2 2 2 f f 
                . . . . f c b b b b 2 2 2 2 f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `,img`
                . . . . . . . . . . . f f f . . 
                f f f . . . . . . . . c c f f f 
                c b b c f . . . c c . c c c f f 
                . c b b b f f c c 3 c c 3 c f f 
                . c c c b b f c b 3 c b 3 c f f 
                . c c b c b f c b b b b b b c f 
                . c b b c b b c b 1 b b b 1 c c 
                . c b c c c b b b b b b b b b c 
                . . c c c c c b b c 1 f f 1 b c 
                . . . c f b b b b f 1 f f 1 f c 
                . . . c f b b b b f f f f f f f 
                . . c c f b b b b f 2 2 2 2 f f 
                . . . . f c b b b 2 2 2 2 2 f . 
                . . . . . f c b b b 2 2 2 f . . 
                . . . . . . f f f f f f f . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . c c . c c . . . 
                . . . . . . c c c 3 c c 3 f . . 
                . . . . . c c c b 3 c b 3 c f . 
                . . . . f f b b b b b b b b c f 
                . . . . f f b b b 1 b b b 1 c c 
                . . . f f f c b b b b b b b b c 
                . . . f f f f b b c 1 f f 1 b c 
                . . . b b b c c b f 1 f f 1 f f 
                . . . c c c c f b f f f f f f f 
                . . c c c b b f b f 2 2 2 2 f f 
                . . . c b b c c b 2 2 2 2 2 f . 
                . . c b b c c f f b 2 2 2 f . . 
                . c c c c c f f f f f f f . . . 
                c c c c . . . . . . . . . . . . 
                `,img`
                . f f f . . . . . . . . f f f . 
                . c b b c f . . . . . . . c f f 
                . . c b b c f . . . . . . c c f 
                . . c c c b f . . . . . . . f c 
                . . c c b b f f . . . . . f f c 
                . . c b b c b f c c . c c f f f 
                . . c b c c b f c c c c c f f f 
                . . . c c c b c b 3 c c 3 c f . 
                . . . c c c c b b 3 c b 3 b c . 
                . . . . c c b b b b b b b b c c 
                . . . c f b b b 1 1 b b b 1 1 c 
                . . c c f b b b b b b b b b b f 
                . . . . f b b b b c b b b c b f 
                . . . . f c b b b 1 f f f 1 f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `])
            Player.setCharacterAnim(enemy, Character.dirKind.right, Character.animKind.attack, [img`
                f f f . . . . . . . . f f f . . 
                c b b c f . . . . . . c c f f . 
                . c b b c f . . . . . . c c f f 
                . c c c b f . . . . . . c f c f 
                . c c b b c f . c c . c c f f f 
                . c b b c b f c c 3 c c 3 c f f 
                . c b c c b f c b 3 c b 3 b f f 
                . . c c c b b c b 1 b b b 1 c . 
                . . . c c c c b b 1 b b b 1 c . 
                . . . . c c b b b b b b b b b c 
                . . . . f b b b b c 1 f f 1 b c 
                . . . c f b b b b f 1 f f 1 f f 
                . . c c f b b b b f 2 2 2 2 f f 
                . . . . f c b b b b 2 2 2 2 f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `,img`
                . . . . . . . . . . . f f f . . 
                f f f . . . . . . . . c c f f f 
                c b b c f . . . c c . c c c f f 
                . c b b b f f c c 3 c c 3 c f f 
                . c c c b b f c b 3 c b 3 c f f 
                . c c b c b f c b b b b b b c f 
                . c b b c b b c b 1 b b b 1 c c 
                . c b c c c b b b b b b b b b c 
                . . c c c c c b b c 1 f f 1 b c 
                . . . c f b b b b f 1 f f 1 f c 
                . . . c f b b b b f f f f f f f 
                . . c c f b b b b f 2 2 2 2 f f 
                . . . . f c b b b 2 2 2 2 2 f . 
                . . . . . f c b b b 2 2 2 f . . 
                . . . . . . f f f f f f f . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . c c . c c . . . 
                . . . . . . c c c 3 c c 3 f . . 
                . . . . . c c c b 3 c b 3 c f . 
                . . . . f f b b b b b b b b c f 
                . . . . f f b b b 1 b b b 1 c c 
                . . . f f f c b b b b b b b b c 
                . . . f f f f b b c 1 f f 1 b c 
                . . . b b b c c b f 1 f f 1 f f 
                . . . c c c c f b f f f f f f f 
                . . c c c b b f b f 2 2 2 2 f f 
                . . . c b b c c b 2 2 2 2 2 f . 
                . . c b b c c f f b 2 2 2 f . . 
                . c c c c c f f f f f f f . . . 
                c c c c . . . . . . . . . . . . 
                `,img`
                . f f f . . . . . . . . f f f . 
                . c b b c f . . . . . . . c f f 
                . . c b b c f . . . . . . c c f 
                . . c c c b f . . . . . . . f c 
                . . c c b b f f . . . . . f f c 
                . . c b b c b f c c . c c f f f 
                . . c b c c b f c c c c c f f f 
                . . . c c c b c b 3 c c 3 c f . 
                . . . c c c c b b 3 c b 3 b c . 
                . . . . c c b b b b b b b b c c 
                . . . c f b b b 1 1 b b b 1 1 c 
                . . c c f b b b b b b b b b b f 
                . . . . f b b b b c b b b c b f 
                . . . . f c b b b 1 f f f 1 f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `])
            Enemy.addSKill(enemy, Enemy.sKind.skill, function (tempVar, sprite) {
                Bullet.shootFromSprite(sprite, "追踪音波功", 0, 80, 0, true)
            })
            Enemy.addSKill(enemy, Enemy.sKind.skill, function (tempVar, sprite) {
                Bullet.shootFromSprite(sprite, "音波功", 0, 100, 0, true)
                Bullet.shootFromSprite(sprite, "音波功", 60, 100, 0, true)
                Bullet.shootFromSprite(sprite, "音波功", 120, 100, 0, true)
                Bullet.shootFromSprite(sprite, "音波功", 180, 100, 0, true)
                Bullet.shootFromSprite(sprite, "音波功", 240, 100, 0, true)
                Bullet.shootFromSprite(sprite, "音波功", 300, 100, 0, true)
            })
            Enemy.addSKill(enemy, Enemy.sKind.skill, function (tempVar, sprite) {
                Bullet.shootFromSprite(sprite, "瞄准音波功", 0, 80, 0, true)
                Helper.after(0.2, function () {
                    Bullet.shootFromSprite(sprite, "瞄准音波功", 0, 80, 0, true)
                    Helper.after(0.2, function () {
                        Bullet.shootFromSprite(sprite, "瞄准音波功", 0, 80, 0, true)
                    })
                })
            })
        })
        Bullet.setProjectiles("森林蝙蝠投射物", function () {
            Bullet.setProjectile(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 8 8 8 . . . . . . 
                . . . . 9 9 8 . . . 8 . . . . . 
                . . . 9 . 8 9 . . . . 8 . . . . 
                . 1 9 . . 8 . 9 . . . 8 . . . . 
                1 . 9 1 . 8 . 9 . . . 8 . . . . 
                1 . 9 1 . 8 . 9 . . . 8 . . . . 
                . 1 9 . . 8 . 9 . . . 8 . . . . 
                . . . 9 . 8 9 . . . . 8 . . . . 
                . . . . 9 9 8 . . . 8 . . . . . 
                . . . . . . . 8 8 8 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, "音波功", function (projectile) {
                Bullet.setBullet(projectile, Bullet.bulletP.damage, 0)
                Bullet.setBullet(projectile, Bullet.bulletP.hitrec, 200)
            })
            Bullet.setProjectile(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 8 8 8 . . . . . . 
                . . . . 9 9 8 . . . 8 . . . . . 
                . . . 9 . 8 9 . . . . 8 . . . . 
                . 1 9 . . 8 . 9 . . . 8 . . . . 
                1 . 9 1 . 8 . 9 . . . 8 . . . . 
                1 . 9 1 . 8 . 9 . . . 8 . . . . 
                . 1 9 . . 8 . 9 . . . 8 . . . . 
                . . . 9 . 8 9 . . . . 8 . . . . 
                . . . . 9 9 8 . . . 8 . . . . . 
                . . . . . . . 8 8 8 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, "瞄准音波功", function (projectile) {
                Bullet.setBullet(projectile, Bullet.bulletP.damage, 2)
                Bullet.setBullet(projectile, Bullet.bulletP.hitrec, 200)
                Bullet.setBullet2(projectile, Bullet.bulletP2.indeflectible, true)
                Bullet.aimedshot(projectile)
            })
            Bullet.setProjectile(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 8 8 8 . . . . . . 
                . . . . 9 9 8 . . . 8 . . . . . 
                . . . 9 . 8 9 . . . . 8 . . . . 
                . 1 9 . . 8 . 9 . . . 8 . . . . 
                1 . 9 1 . 8 . 9 . . . 8 . . . . 
                1 . 9 1 . 8 . 9 . . . 8 . . . . 
                . 1 9 . . 8 . 9 . . . 8 . . . . 
                . . . 9 . 8 9 . . . . 8 . . . . 
                . . . . 9 9 8 . . . 8 . . . . . 
                . . . . . . . 8 8 8 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, "追踪音波功", function (projectile) {
                Bullet.setBullet(projectile, Bullet.bulletP.damage, 2)
                Bullet.setBullet(projectile, Bullet.bulletP.hitrec, 200)
                Bullet.setBullet2(projectile, Bullet.bulletP2.indeflectible, true)
                Bullet.aimedshot2(projectile)
                projectile.lifespan = 2000
            })
        })

    }
}
