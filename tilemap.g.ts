// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001070a070a07070707070707070a07040a0a0a090a0a0a0a090a0a09090a090502090a090a0a090a09090a09090a0905020a0a09090a090a09090a0a0a0a0a0a020a0909090a090a09090a0909090905020a0a0a090a090a090a0a0a0a0a0a0a0209090a090a090a090a090909090905020a0a0a090a090a090a090a0a0a09050a0a0909090a090a0a0a0a0a090a09050a0a0a0a0a0a090a0a0a0909090a0a0b0a0909090909090a090a0909090a09050a0a0a0a0a0a0a0a090a0a0a0a0a09050209090909090909090a0a09090a09050a0a0a0a0a0a090909090a09090a0a0a0a090909090a0a0a0a0a0a0909090a05030808080808080808080a0808080a06`, img`
2 2 . 2 . 2 2 2 2 2 2 2 2 . 2 2 
. . . 2 . . . . 2 . . 2 2 . 2 2 
2 2 . 2 . . 2 . 2 2 . 2 2 . 2 2 
2 . . 2 2 . 2 . 2 2 . . . . . . 
2 . 2 2 2 . 2 . 2 2 . 2 2 2 2 2 
2 . . . 2 . 2 . 2 . . . . . . . 
2 2 2 . 2 . 2 . 2 . 2 2 2 2 2 2 
2 . . . 2 . 2 . 2 . 2 . . . 2 2 
. . 2 2 2 . 2 . . . . . 2 . 2 2 
. . . . . . 2 . . . 2 2 2 . . . 
. 2 2 2 2 2 2 . 2 . 2 2 2 . 2 2 
. . . . . . . . 2 . . . . . 2 2 
2 2 2 2 2 2 2 2 2 . . 2 2 . 2 2 
. . . . . . 2 2 2 2 . 2 2 . . . 
. 2 2 2 2 . . . . . . 2 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 . 2 2 2 . 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
