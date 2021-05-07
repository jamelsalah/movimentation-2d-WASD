function createGameRenderer() {
    const state = {
        player: {
            stopped: 0,
            walk: 0,
            jump: 0,
            fall: 0,
        }
    }

    function renderGame(ctx, screen, gameState, sprites) {
        const player = gameState.players['player'];
        const floor = gameState.world.floor;

        clear();
        renderFloor();
        renderPlayer();
        
        function renderFloor() {
            for(let i in floor) {
                const spr = floor[i];

                sprites.floorSpr[spr].draw(ctx, i * 25, 575, 25, 25);
            }
        }

        function renderPlayer() {
                if(player.state == 0) {stopped();}
                else if(player.state == 1) {walk();}
                else if(player.state == 2) {jumping();}
                else if(player.state == 3) {falling();}

                function stopped() {
                    if(player.direction == 0) {
                        sprites.playerSpr[0][Math.trunc(state.player.stopped / 60)].draw(ctx, player.x, player.y, player.w, player.h);
                    } else if(player.direction == 1) {
                        sprites.playerSpr[1][Math.trunc(state.player.stopped / 60)].draw(ctx, player.x, player.y, player.w, player.h);
                    }

                    if(state.player.stopped >= 119)   state.player.stopped = 0;
                    else state.player.stopped++;
                }

                function walk() {
                    if(player.direction == 0) {
                        sprites.playerSpr[2][Math.trunc(state.player.walk / 7)].draw(ctx, player.x, player.y, player.w, player.h);
                    } else if(player.direction == 1) {
                        sprites.playerSpr[3][Math.trunc(state.player.walk / 7)].draw(ctx, player.x, player.y, player.w, player.h);
                    }

                    if(state.player.walk >= 39) state.player.walk = 0;
                    else state.player.walk++;
                }

                function jumping() {
                    if(player.direction == 1) {
                        sprites.playerSpr[5][0][Math.trunc(state.player.jump / 10)].draw(ctx, player.x, player.y, player.w, player.h)
                    }

                    if(state.player.jump >= 29) state.player.jump = 0;
                    else state.player.jump++;
                }

                function falling() {
                    if(player.direction == 1) {
                        sprites.playerSpr[5][1][Math.trunc(state.player.fall / 10)].draw(ctx, player.x, player.y, player.w, player.h)
                    }

                    if(state.player.fall >= 19) state.player.fall = 0;
                    else state.player.fall++;
                }
        }

        function clear() {
            ctx.fillStyle = "#ADD8E6";
            ctx.fillRect(0, 0, screen. width, screen.height);
        }
    }

    return {
        renderGame
    }
};