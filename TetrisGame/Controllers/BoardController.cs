using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TetrisGame.Models;
using TetrisGame.Game;
using TetrisGame.ReqDto;
using Microsoft.AspNetCore.SignalR;
using TetrisGame.Hubs;
using TetrisGame.Controllers.Resource;

namespace TetrisGame.Controllers
{
    [Route("api/[controller]")]
    public class BoardController : Controller
    {
        private readonly IHubContext<TetrisHub> _hubContext;

        public BoardController(IHubContext<TetrisHub> hubContext)
        {
            _hubContext = hubContext;
        }

        [HttpGet]
        public async Task<ActionResult<int[][]>> GetBoadr()
        {
            int height = GameConfiguration.Rows;
            int width = GameConfiguration.Columns;

            GameBoad board = new GameBoad(height, width);
            return board.getBoadr();
        }

        [Route("start")]
        [HttpGet]
        public async Task<IActionResult> StartGame()
        {
            PieceDto piece = new PieceDto(3, 0, GameConfiguration.Colors[0]);
            for (int i = 0; i < 5; i++)
            {
                Spawn(piece);
                piece.moveDown();
                await Task.Delay(1000);
            }
            return Ok();
        }

        [Route("move/left")]
        [HttpPost]
        public IActionResult MoveLeft([FromBody] PieceResource pieceResource )
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            PieceDto piece = MapPiece(pieceResource);
            piece.moveLeft();
            Spawn(piece);
            return Ok(piece);
        }

        [Route("move/right")]
        [HttpPost]
        public IActionResult MoveRight([FromBody] PieceResource pieceResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            PieceDto piece = MapPiece(pieceResource);
            piece.moveRight();
            Spawn(piece);
            return Ok(piece);
        }

        [Route("move/down")]
        [HttpPost]
        public IActionResult MoveDown([FromBody] PieceResource pieceResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            PieceDto piece = MapPiece(pieceResource);
            piece.moveDown();
            Spawn(piece);
            return Ok(piece);
        }

        [Route("move/rotate")]
        [HttpPost]
        public IActionResult Rotate([FromBody] PieceResource pieceResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //transpose()
            //reverse()

            return Ok();
        }

        public PieceDto MapPiece(PieceResource p)
        {
            return new PieceDto(p.x, p.y, p.color, p.shape);
        }

        public void Spawn(PieceDto p)
        {
            _hubContext.Clients.All.SendAsync("Spawn", p.x, p.y, p.color, p.shape);
        }
    }
}