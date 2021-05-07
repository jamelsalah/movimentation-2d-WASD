function sprite(img, x, y, w, h) {
    function draw(ctx, xcanvas, ycanvas, w = this.w, h = this.h) {
        ctx.drawImage(img, this.x, this.y, this.w, this.h, xcanvas, ycanvas, w, h);
    }

    return {
        x,
        y,
        w,
        h,
        draw
    }
}

const spriteSheet01 = new Image(); spriteSheet01.src = "sprites/mossyFloor.png";
const spriteSheet02 = new Image(); spriteSheet02.src = "sprites/adventurerSheet1.png";
const spriteSheet03 = new Image(); spriteSheet03.src = "sprites/adventurerSheet2.png";
const spriteSheet04 = new Image(); spriteSheet04.src = "sprites/adventurerSheet3.png";
const spriteSheet05 = new Image(); spriteSheet05.src = "sprites/adventurerSheet4.png";
const spriteSheet06 = new Image(); spriteSheet06.src = "sprites/adventurerSheet6.png";
const spriteSheet07 = new Image(); spriteSheet07.src = "sprites/adventurerSheet5.png";

const sprites = {
    floorSpr : [
        sprite(spriteSheet01, 0, 0, 205, 160),
        sprite(spriteSheet01, 204, 0, 205, 160),
        sprite(spriteSheet01, 408, 0, 205, 160),
        sprite(spriteSheet01, 612, 0, 205, 160),
        sprite(spriteSheet01, 816, 0, 205, 160),
    ],

    playerSpr : [
        [
            sprite(spriteSheet03, 1477, 11, 93, 142),
            //sprite(spriteSheet03, 1233, 6, 84, 147),
            //sprite(spriteSheet03, 983, 6, 95, 147),
            sprite(spriteSheet03, 742, 10, 98, 142),
        ],

        [
            sprite(spriteSheet02, 20, 27, 91, 137),
            //sprite(spriteSheet02, 265, 21, 82, 142),
            sprite(spriteSheet02, 496, 22, 90, 142),
            //sprite(spriteSheet02, 724, 26, 94, 137),
        ],

        [
            sprite(spriteSheet04, 1221, 13, 106, 149),
            sprite(spriteSheet04, 960, 19, 106, 143),
            sprite(spriteSheet04, 801, 19, 105, 133),
            sprite(spriteSheet04, 515, 3, 122, 149),
            sprite(spriteSheet04, 270, 8, 107, 143),
            sprite(spriteSheet04, 4, 18, 107, 133),        
        ],

        [
            sprite(spriteSheet05, 16, 13, 96, 135),
            sprite(spriteSheet05, 253, 18, 96, 130),
            sprite(spriteSheet05, 494, 26, 96, 125),
            sprite(spriteSheet05, 739, 13, 111, 135),
            sprite(spriteSheet05, 901, 18, 97, 130),
            sprite(spriteSheet05, 1142, 27, 96, 121),
        ],

        [],

        [
            [
                sprite(spriteSheet07, 476, 9, 82, 116),
                sprite(spriteSheet07, 678, 0, 91, 99),
                sprite(spriteSheet07, 909, 13, 65, 86),
            ],

            [
                sprite(spriteSheet07, 265, 143, 73, 133),
                sprite(spriteSheet07, 481, 147, 73, 129),
            ],
        ],
    ],
}
