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

        [Route("spawn")]
        [HttpGet]
        public IActionResult SpawnPiece()
        {
            PieceDto piece = new PieceDto(3, 0, "green");
            _hubContext.Clients.All.SendAsync("Spawn", piece.x, piece.y, piece.color, piece.shape);
            return Ok(piece.x);
        }

        [Route("move")]
        [HttpPost]
        public IActionResult MovePiece([FromBody] PieceResource pieceResource )
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            PieceDto piece = new PieceDto(pieceResource.x, 0, "green");
            _hubContext.Clients.All.SendAsync("Spawn", piece.x, piece.y, piece.color, piece.shape);
            return Ok( piece );
        }
    }
}