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
using Microsoft.AspNetCore.Authorization;

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
        [Route("connected")]
        public Dictionary<string, string> getUses()
        {
            return ConnectedUser.Ids;
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<GameBoad>> GetBoadr()
        {
            int height = GameConfiguration.Rows;
            int width = GameConfiguration.Columns;
            string userId = User.Claims.First(c => c.Type == "UserID").Value;

            GameBoad board = new GameBoad(userId, height, width);
            return Ok(board);
        }

        [Route("start")]
        [HttpPost]
        public IActionResult StartGame([FromBody] PieceDto piece)
        {
            Spawn(piece);
            return Ok(piece);
        }

        [Route("broadcarst/board")]
        [HttpPost]
        public IActionResult BroadcatBoard([FromBody] int[][] board)
        {
            _hubContext.Clients.All.SendAsync("BroadcastBoard", board);
            return Ok(board);
        }

        public void Spawn(PieceDto p)
        {
            //siusti i kitu ekranus
            //string userId = User.Claims.First(c => c.Type == "UserID").Value;
            //_hubContext.Clients.AllExcept(ConnectedUser.Ids.GetValueOrDefault(userId)).SendAsync("Spawn", p.x, p.y, p.color, p.shape);
            
            //siusti i visu ekranus
            _hubContext.Clients.All.SendAsync("Spawn", p.x, p.y, p.color, p.shape);
        }
    }
}