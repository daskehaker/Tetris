using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TetrisGame.Hubs;
using TetrisGame.ReqDto;

namespace TetrisGame.Controllers
{
    [Route("api/chat")]
    [ApiController]
    public class ChatController: ControllerBase
    {
        private readonly IHubContext<TetrisHub> _hubContext;

        public ChatController(IHubContext<TetrisHub> hubContext)
        {
            _hubContext = hubContext;
        }

        [Route("send")]
        [HttpPost]
        public IActionResult SendRequest([FromBody] MessageDto msg)
        {
            _hubContext.Clients.All.SendAsync("ReceiveOne", msg.user, msg.msgText);
            return Ok();
        }        
    }
}
