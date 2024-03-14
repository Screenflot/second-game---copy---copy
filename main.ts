namespace SpriteKind {
    export const dice = SpriteKind.create()
    export const Blue = SpriteKind.create()
    export const Red = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -100
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setTileAt(Blue_2, assets.tile`transparency16`)
    PLayer_X = mySprite.x
    Blue.setPosition(PLayer_X, mySprite.y)
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile9`)) {
        Blue.setVelocity(0, -100)
    } else {
        if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingRight))) {
            Blue.setVelocity(100, 0)
        } else {
            Blue.setVelocity(-100, 0)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setTileAt(Red_2, assets.tile`transparency16`)
    PLayer_X = mySprite.x
    Red.setPosition(PLayer_X, mySprite.y)
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile9`)) {
        Red.setVelocity(0, -100)
    } else {
        if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingRight))) {
            Red.setVelocity(100, 0)
        } else {
            Red.setVelocity(-100, 0)
        }
    }
})
scene.onHitWall(SpriteKind.Red, function (sprite, location) {
    tiles.setTileAt(Red.tilemapLocation(), sprites.dungeon.collectibleRedCrystal)
    Red_2 = Red.tilemapLocation()
    Red.y = -200
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    timer.throttle("action", 1000, function () {
        game.showLongText("Flip Lever To Switch Blocks to a Solid Form.", DialogLayout.Top)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.showLongText("Level One, Completed!", DialogLayout.Top)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(36, 29))
    timer.debounce("action", 200, function () {
        tiles.setTileAt(Blue_2, assets.tile`transparency16`)
        tiles.setTileAt(Red_2, assets.tile`transparency16`)
        Blue_2 = mySprite.tilemapLocation()
        Red_2 = mySprite.tilemapLocation()
    })
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.placeOnTile(mySprite, Red_2)
    tiles.setTileAt(Red_2, assets.tile`myTile`)
    timer.debounce("action", 1000, function () {
        tiles.setTileAt(Red_2, sprites.dungeon.collectibleRedCrystal)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    timer.throttle("action", 1000, function () {
        tiles.setTileAt(tiles.getTileLocation(16, 27), assets.tile`myTile5`)
    })
    tiles.setTileAt(tiles.getTileLocation(22, 30), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(23, 30), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(24, 30), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(19, 30), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(20, 30), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(21, 30), assets.tile`myTile1`)
    tiles.setWallAt(tiles.getTileLocation(22, 30), false)
    tiles.setWallAt(tiles.getTileLocation(23, 30), false)
    tiles.setWallAt(tiles.getTileLocation(24, 30), false)
    tiles.setWallAt(tiles.getTileLocation(19, 30), false)
    tiles.setWallAt(tiles.getTileLocation(20, 30), false)
    tiles.setWallAt(tiles.getTileLocation(21, 30), false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    timer.throttle("action", 1000, function () {
        tiles.setTileAt(tiles.getTileLocation(16, 27), assets.tile`myTile2`)
    })
    tiles.setTileAt(tiles.getTileLocation(19, 30), sprites.dungeon.floorDark0)
    tiles.setTileAt(tiles.getTileLocation(20, 30), sprites.dungeon.floorDark0)
    tiles.setTileAt(tiles.getTileLocation(21, 30), sprites.dungeon.floorDark0)
    tiles.setTileAt(tiles.getTileLocation(22, 30), sprites.dungeon.floorDark0)
    tiles.setTileAt(tiles.getTileLocation(24, 30), sprites.dungeon.floorDark0)
    tiles.setTileAt(tiles.getTileLocation(23, 30), sprites.dungeon.floorDark0)
    tiles.setWallAt(tiles.getTileLocation(23, 30), true)
    tiles.setWallAt(tiles.getTileLocation(24, 30), true)
    tiles.setWallAt(tiles.getTileLocation(22, 30), true)
    tiles.setWallAt(tiles.getTileLocation(19, 30), true)
    tiles.setWallAt(tiles.getTileLocation(20, 30), true)
    tiles.setWallAt(tiles.getTileLocation(21, 30), true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    timer.throttle("action", 1000, function () {
        game.showLongText("Shoot Portals Up By Standing on The Arrow Blocks.", DialogLayout.Top)
    })
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.placeOnTile(mySprite, Blue_2)
    tiles.setTileAt(Blue_2, assets.tile`myTile0`)
    timer.debounce("action", 1000, function () {
        tiles.setTileAt(Blue_2, sprites.dungeon.collectibleBlueCrystal)
    })
})
scene.onHitWall(SpriteKind.Blue, function (sprite, location) {
    tiles.setTileAt(Blue.tilemapLocation(), sprites.dungeon.collectibleBlueCrystal)
    Blue_2 = Blue.tilemapLocation()
    Blue.y = -200
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    timer.throttle("action", 1000, function () {
        tiles.setTileAt(tiles.getTileLocation(46, 22), assets.tile`myTile12`)
    })
    tiles.setTileAt(tiles.getTileLocation(49, 20), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(50, 20), assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(51, 20), assets.tile`myTile1`)
    tiles.setWallAt(tiles.getTileLocation(49, 20), false)
    tiles.setWallAt(tiles.getTileLocation(50, 20), false)
    tiles.setWallAt(tiles.getTileLocation(51, 20), false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    timer.throttle("action", 5000, function () {
        game.showLongText("Use A and B to Shoot Portals (Q or E).", DialogLayout.Top)
    })
})
let Red_2: tiles.Location = null
let PLayer_X = 0
let Blue_2: tiles.Location = null
let Blue: Sprite = null
let Red: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `, SpriteKind.Player)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e e e d d d f . . . 
    . . . . . f 4 d d e 4 e f . . . 
    . . . . . f e d d e 2 2 f . . . 
    . . . . f f f e e f 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `,img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . 4 d d e 4 4 4 e f . . . 
    . . . . e d d e 2 2 2 2 f . . . 
    . . . . f e e f 4 4 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `],
500,
characterAnimations.rule(Predicate.FacingRight)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d e e e e e f . . . 
    . . . f e 4 e d d 4 f . . . . . 
    . . . f 2 2 e d d e f . . . . . 
    . . f f 5 5 f e e f f f . . . . 
    . . f f f f f f f f f f . . . . 
    . . . f f f . . . f f . . . . . 
    `,img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e d d 4 . . . . 
    . . . f 2 2 2 2 e d d e . . . . 
    . . f f 5 5 4 4 f e e f . . . . 
    . . f f f f f f f f f f . . . . 
    . . . f f f . . . f f . . . . . 
    `],
500,
characterAnimations.rule(Predicate.FacingLeft)
)
game.setDialogTextColor(15)
tiles.setCurrentTilemap(tilemap`level4`)
music.setVolume(0)
music.play(music.createSong(assets.song`McDonaldDuck`), music.PlaybackMode.LoopingInBackground)
scene.cameraFollowSprite(mySprite)
let location = tiles.getTileLocation(7, 28)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 29))
scene.setBackgroundColor(15)
effects.starField.startScreenEffect()
Red = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 4 4 4 . . . . . . 
    . . . . . . 4 4 2 4 4 . . . . . 
    . . . . . . 4 2 2 5 4 . . . . . 
    . . . . . . 4 5 4 2 4 . . . . . 
    . . . . . . . 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Red)
Red.setPosition(2, 1)
Blue = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 6 6 6 . . . . . . 
    . . . . . . 6 6 8 6 6 . . . . . 
    . . . . . . 6 8 8 7 6 . . . . . 
    . . . . . . 6 7 6 8 6 . . . . . 
    . . . . . . . 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Blue)
Blue.setPosition(2, 1)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 150
let Death = 0
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Center, sprites.builtin.forestTiles10)) {
        game.gameOver(false)
    }
})
