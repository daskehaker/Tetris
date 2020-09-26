using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TetrisGame.Hubs
{
    public class TetrisHub: Hub
    {
        public Task SendMessage(string user, string msgText)
        {
            return Clients.All.SendAsync("ReceiveOne", user, msgText);
        }

        public Task SpawPiece(int x, int y, string color, int [][] shape)
        {
            return Clients.All.SendAsync("Spawn", x, y, color, shape);
        }
    }
}
